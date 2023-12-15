package org.launchcode.happyroots;

import com.google.auth.oauth2.GoogleCredentials;
import com.google.firebase.FirebaseApp;
import com.google.firebase.FirebaseOptions;
import org.launchcode.happyroots.Models.Favorite;
import org.launchcode.happyroots.Models.Profile;
import org.launchcode.happyroots.Repositories.ProfileRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.util.Objects;

@SpringBootApplication
public class HappyrootsApplication {
//public class HappyrootsApplication implements CommandLineRunner {

	public static void main(String[] args) throws IOException {
		ClassLoader classLoader = HappyrootsApplication.class.getClassLoader();
//		File file = new File(Objects.requireNonNull(classLoader.getResource("serviceKey.json")).getFile());
		File file =
				new File(Objects.requireNonNull(classLoader.getResource("serviceKeyAlt.json")).getFile());

		FileInputStream serviceAccount = new FileInputStream(file.getAbsolutePath());

		FirebaseOptions options = FirebaseOptions.builder()
				.setCredentials(GoogleCredentials.fromStream(serviceAccount))
				.build();

		FirebaseApp.initializeApp(options);

		SpringApplication.run(HappyrootsApplication.class, args);
	}

//	entering into database

//	@Autowired
//	ProfileRepository profileRepository;
//
//
//
//
//	@Override
//	public void run(String... args) throws Exception {
////
//		Profile profile = new Profile();
//		profile.setEmail("gwam@let.com");
//		profile.setUserId("WOUW9fb3fOhKalcS3U0ysVvxyKA3");
//		profileRepository.save(profile);
//
//		Profile profile1 = new Profile();
//		profile1.setEmail("test@test.com");
//		profile1.setUserId("1v0dnYdpxYeSnlZPR9FHvqebvJD3");
//		profileRepository.save(profile1);
//
//		Profile profile2 = new Profile();
//		profile2.setEmail("ryan.p.riggs@gmail.com");
//		profile2.setUserId("t4rP7hHEPWXePftpcoF0IcAy3ni2");
//		profileRepository.save(profile2);
//
//	}
}
