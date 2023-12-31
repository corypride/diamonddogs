package org.launchcode.happyroots.Config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.oauth2.jwt.*;
import org.springframework.security.web.DefaultSecurityFilterChain;


@Configuration
public class SecurityConfig {

    @Value("${spring.security.oauth2.resourceserver.jwt.issuer-uri}")
    private String issuerUri;
    @Bean
    public DefaultSecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
                .csrf(AbstractHttpConfigurer::disable)
                .authorizeHttpRequests((auth) -> auth
                        .requestMatchers("/auth/").permitAll()
                        .requestMatchers(HttpMethod.POST, "/auth/signup").permitAll()
                        .requestMatchers(HttpMethod.POST, "/auth/login").permitAll()
                        .anyRequest().authenticated()
                )
                .oauth2ResourceServer((oauth2) -> oauth2.jwt(Customizer.withDefaults()));

        return http.build();
    }

    @Bean
    public JwtDecoder jwtDecoder() {

        JwtDecoder jwtDecoder = NimbusJwtDecoder.withJwkSetUri(issuerUri).build();

        return new JwtDecoder() {
            @Override
            public Jwt decode(String token) throws JwtException {
                System.out.println("token: " + token);
                Jwt jwt = jwtDecoder.decode(token);
                System.out.println("jwt: " + jwt);
                return jwt;
            }
        };
    }

}