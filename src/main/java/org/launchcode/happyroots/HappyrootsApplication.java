package org.launchcode.happyroots;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;

@SpringBootApplication (exclude = { SecurityAutoConfiguration.class })
public class HappyrootsApplication {

	public static void main(String[] args) {
		SpringApplication.run(HappyrootsApplication.class, args);
	}

}
