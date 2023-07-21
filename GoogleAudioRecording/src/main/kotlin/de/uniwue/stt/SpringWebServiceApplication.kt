package de.uniwue.stt

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication

/**
 * @author Michael Banck michael.banck@uni-wuerzburg.de ©
 */
@SpringBootApplication
class SpringWebServiceApplication

fun main(args: Array<String>) {
	runApplication<SpringWebServiceApplication>(*args)
}
