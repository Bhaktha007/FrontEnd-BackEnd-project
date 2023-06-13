package com.example.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;		
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.bookstore.LoginForm;
import com.example.service.LoginService;
	
					
@RestController
@CrossOrigin
public class LoginController {
		
            @Autowired
		    private LoginService lser;
	
		    @PostMapping("/register")
		    public ResponseEntity<String> post(@RequestBody LoginForm s) {
		        LoginForm savedLogin = lser.postData(s);
		        if (savedLogin != null) {
		            return ResponseEntity.ok("Registration successful");
		        } else {
		            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Registration failed");
		        }
		    }
		   
}