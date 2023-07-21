package de.uniwue.stt.services

import com.google.api.gax.rpc.ApiStreamObserver
import com.google.cloud.speech.v1.*
import com.google.protobuf.ByteString
import org.springframework.stereotype.Service
import java.io.IOException
import java.util.*
import java.util.concurrent.Executors
import java.util.concurrent.Future
import javax.sound.sampled.*

/**
 * @author Michael Banck michael.banck@uni-wuerzburg.de ©
 */
@Service
class SttService {

    var run = false
    private val singleThread = Executors.newSingleThreadExecutor()
    private var lastRequest: Future<String>? = null

    fun startStopRecording(): String {

        if (!run) {
            run = true
            lastRequest = initRecording()
            return ""
        }
        run = false
        return lastRequest!!.get()


    }

    private fun initRecording(): Future<String> {
        return singleThread.submit<String> {


            var text = ""

            try {
                val speechClient = SpeechClient.create()
                val recConfig =
                    RecognitionConfig.newBuilder()
                        .setEncoding(RecognitionConfig.AudioEncoding.LINEAR16)
                        .setLanguageCode("de-DE")
                        .setSampleRateHertz(16000)
                        .build()
                val streamingConfig =
                    StreamingRecognitionConfig.newBuilder()
                        .setConfig(recConfig) //                    .setSingleUtterance(true)
                        .setInterimResults(true)
                        .build()
                val responseObserver = SttResponseObserver()

                val requestObserver =
                    speechClient.streamingRecognizeCallable().bidiStreamingCall(responseObserver)

                // Send the streaming config first
                val initialRequest = StreamingRecognizeRequest.newBuilder()
                    .setStreamingConfig(streamingConfig)
                    .build()
                requestObserver.onNext(initialRequest)

                audioRecordingRequestLoop(requestObserver)


                text = responseObserver.lastResult

            } catch (e: java.lang.Exception) {
                e.printStackTrace()
            }

            text
        }
    }

    private fun audioRecordingRequestLoop(requestObserver: ApiStreamObserver<StreamingRecognizeRequest>) {


        val mixers = printAndGetInputDevices()
        val selectedMicInfo = selectMicrophone("Anker", mixers)
//        val selectedMicInfo = selectMicrophone("Anker", mixers)

        try {

            val selectedMicrophoneMixer = AudioSystem.getMixer(selectedMicInfo);

            val audioFormat = AudioFormat(16000f, 16, 1, true, false)
//            val targetDataLine = AudioSystem.getTargetDataLine(audioFormat, selectedMicInfo)
            val targetDataLine = AudioSystem.getTargetDataLine(audioFormat)
            targetDataLine.open(audioFormat)
            targetDataLine.start()


            val buffer = ByteArray(4096)
            val audioInputStream = AudioInputStream(targetDataLine)

            // Continuously send audio data in chunks
            println("START Recording")

            var bytesRead: Int = audioInputStream.read(buffer)

            while (bytesRead != -1 && run) {
                val audioBytes =
                    ByteString.copyFrom(buffer, 0, bytesRead)
                val request =
                    StreamingRecognizeRequest.newBuilder()
                        .setAudioContent(audioBytes)
                        .build()
                requestObserver.onNext(request)
                bytesRead = audioInputStream.read(buffer)
            }


            audioInputStream.close()
            targetDataLine.close()

        } catch (e: IOException) {
            e.printStackTrace()
        } catch (e: LineUnavailableException) {
            e.printStackTrace()
        } finally {
            requestObserver.onCompleted()
        }

    }


    private fun printAndGetInputDevices(): List<Mixer.Info> {
        val mixerInfos = AudioSystem.getMixerInfo()
        for (info in mixerInfos) {
            val mixer = AudioSystem.getMixer(info)
            val lineInfos = mixer.targetLineInfo
            if (lineInfos.isNotEmpty()) {
                println("Microphone: " + info.name)
            }
        }

        val list = ArrayList<Mixer.Info>()
        list.addAll(mixerInfos)

        return list

    }

    private fun selectMicrophone(name: String, mixers: List<Mixer.Info>): Mixer.Info {

        for (info in mixers) {
            if (info.name.contains(name, ignoreCase = true)
                && !info.name.contains("Port")
            ) {
                return info
            }
        }

        println("Mic Not Found")
        throw RuntimeException("Microphone Not Found")
    }

}

