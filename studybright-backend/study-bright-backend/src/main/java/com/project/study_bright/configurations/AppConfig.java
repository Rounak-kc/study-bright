package com.project.study_bright.configurations;

import java.util.Arrays;
import java.util.Collections;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.www.BasicAuthenticationFilter;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;


@Configuration
public class AppConfig {

	@Bean
	public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
		return http
				.sessionManagement(session->session.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
				.authorizeHttpRequests(request->request.requestMatchers("/api/**").authenticated().anyRequest().permitAll())
				.addFilterBefore(new JwtValidator(), BasicAuthenticationFilter.class)
				.csrf(customize->customize.disable())
				.cors(Customizer.withDefaults())
				.httpBasic(Customizer.withDefaults())
				.formLogin(Customizer.withDefaults())
				.build();		
	}
	
	@Bean
	public UrlBasedCorsConfigurationSource corsConfigurationSource() {
		
		CorsConfiguration cfg=new CorsConfiguration();
		cfg.setAllowedOrigins(Arrays.asList("http://localhost:8081/")); //Allows Access
		cfg.setAllowedMethods(Collections.singletonList("*")); //Allows which https method granted(such as GET,POST,PUT,PATCH,DELETE)
		cfg.setAllowCredentials(true);
		cfg.setAllowedHeaders(Collections.singletonList("*"));
		cfg.setExposedHeaders(Arrays.asList("Authorization"));
		cfg.setMaxAge(3600L); //cache pre-flight for 1hr
		
		UrlBasedCorsConfigurationSource source=new UrlBasedCorsConfigurationSource();
		source.registerCorsConfiguration("/**", cfg);
		return source;
		
	}
	
	@Bean
	public PasswordEncoder passwordEncoder() {
		return new BCryptPasswordEncoder();
	}
}
