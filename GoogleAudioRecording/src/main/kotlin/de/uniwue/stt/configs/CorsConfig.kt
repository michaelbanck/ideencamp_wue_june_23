package de.uniwue.stt.configs

import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import org.springframework.web.servlet.config.annotation.CorsRegistry
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer

/**
 * @author Michael Banck michael.banck@uni-wuerzburg.de ©
 */
@Configuration
class CorsConfig {

    @Bean
    fun corsConfigurer(): WebMvcConfigurer? {
        return object : WebMvcConfigurer {
            override fun addCorsMappings(registry: CorsRegistry) {
                registry.addMapping("/**") // This allows CORS for all endpoints
                    .allowedOrigins("http://localhost:4200") // Replace this with your frontend's domain
                    .allowedMethods("*") // Allows all HTTP methods
                    .allowedHeaders("*") // Allows all headers
                    .allowCredentials(true)
            }
        }
    }

}