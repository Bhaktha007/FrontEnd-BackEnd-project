package com.example.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.bookstore.LoginForm;
@Repository
public interface LoginRepository extends JpaRepository<LoginForm, Integer> {


	LoginForm findByusername(String username);

}
