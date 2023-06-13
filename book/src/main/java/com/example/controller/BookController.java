package com.example.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.bookstore.Book;
import com.example.bookstore.LoginForm;
import com.example.repository.LoginRepository;
import com.example.service.BookService;

import java.util.List;
import java.util.Optional;
@RestController
@CrossOrigin
public class BookController {
	
	@Autowired
	LoginRepository lrep;
	
	@Autowired
	private BookService bser;
	@PostMapping("/postbook")
	public Book addInfo(@RequestBody Book bk)
	{
		return bser.saveInfo(bk);
		
	}
	@PutMapping("/update")
	public Book updateInfo(@RequestBody Book bk)
	{
		return bser.updateInfo(bk);
	}
	@GetMapping("/getbook")
	public List<Book> getInfo()
	{
		return bser.getInfo();
	}
	@GetMapping("/get/{id}")
	public Optional<Book> getbyid(@PathVariable int id)
	{
		return bser.getbyid(id);
	}
	@DeleteMapping("/delete/{id}")
	public String deleteInfo(@PathVariable int id)
	{
		bser.deleteInfo(id);
		return "Details deleted for id: "+id;
	}
	@PostMapping("/login/{username}/{password}")
	public String Login(@RequestBody LoginForm v,@PathVariable String username,@PathVariable String password)
	{
		v=lrep.findByusername(username);
		if(v==null)
		{
			return "Invalid User";
		}
		else
		{
			if(v.getPassword().equals(password))
			{
				return "Login successful";
			}
			else
			{
				return "Incorrect Password";
			}
		}	
	}
	
	@PostMapping("/newuser")
	public String addUser(@RequestBody LoginForm lmo)
	{
		lrep.save(lmo); 
		return "Registration successful";
	}

}