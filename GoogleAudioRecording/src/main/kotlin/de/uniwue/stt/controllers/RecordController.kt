package de.uniwue.stt.controllers

import de.uniwue.stt.dtos.TranscriptionResponse
import de.uniwue.stt.services.SttService
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RestController

/**
 * @author Michael Banck michael.banck@uni-wuerzburg.de ©
 */
@RestController
class RecordController(
    private val sttService: SttService
) {

    @GetMapping("getRecording")
    fun startStopRecording(): ResponseEntity<TranscriptionResponse> {

        val text = sttService.startStopRecording()
        return ResponseEntity.ok(TranscriptionResponse(text))
    }
}