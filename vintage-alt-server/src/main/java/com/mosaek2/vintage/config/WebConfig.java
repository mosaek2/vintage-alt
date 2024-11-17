package com.mosaek2.vintage.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**") // 모든 경로에 대해 CORS 허용
                .allowedOrigins("http://43.202.1.84:3000") // 특정 Origin만 허용
//                .allowedOrigins("http:localhost:3000") // 특정 Origin만 허용
                .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS") // 허용할 HTTP 메서드 명시
                .allowedHeaders("*") // 모든 요청 헤더 허용
                .exposedHeaders("Custom-Header") // 클라이언트에서 접근 가능한 헤더 추가
                .allowCredentials(true) // 쿠키 및 인증 정보 포함 허용
                .maxAge(3600); // Preflight 요청 캐싱 시간 (1시간)
    }
}