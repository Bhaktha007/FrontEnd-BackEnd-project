package com.example.service;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.bookstore.Book;
import com.example.repository.BookRepository;
@Service
public class BookService {
	@Autowired
	public BookRepository brepo;

	public Book saveInfo(Book bk) {
		return brepo.save(bk) ;
	}

	public Book updateInfo(Book bk) {
		
		return brepo.saveAndFlush(bk);
	}

	public List<Book> getInfo() {
		return brepo.findAll();
	}

	public Optional<Book> getbyid(int id) {
		
		return brepo.findById(id);
	}

	public void deleteInfo(int id) {
		brepo.deleteById(id);
		
	}
	
	
}