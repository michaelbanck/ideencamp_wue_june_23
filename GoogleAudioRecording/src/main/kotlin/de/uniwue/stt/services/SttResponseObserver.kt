package de.uniwue.stt.services

import com.google.api.gax.rpc.ApiStreamObserver
import com.google.cloud.speech.v1.StreamingRecognizeResponse
import java.util.*

/**
 * @author Michael Banck michael.banck@uni-wuerzburg.de ©
 */
class SttResponseObserver() :
    ApiStreamObserver<StreamingRecognizeResponse> {


    var lastResult = ""

    override fun onNext(response: StreamingRecognizeResponse) {

        if (response.resultsList.isNotEmpty()) {
            val result = response.resultsList[0]
            val currentResult = result.alternativesList[0].transcript.lowercase(Locale.GERMAN)
            lastResult = currentResult
        }
    }

    override fun onError(t: Throwable) {
        t.printStackTrace()
    }

    override fun onCompleted() {
        println("last result: $lastResult")
    }
}