package com.example.service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.bookstore.LoginForm;
import com.example.repository.LoginRepository;

@Service
public class LoginService {

	@Autowired
    LoginRepository lrepo;
	
	public LoginForm postData(LoginForm s) 
	{
		return lrepo.save(s);
	}
	
	public LoginForm getByUsername(String username)
	{
		return lrepo.findByusername(username);
	}

	public String checkLogin(String username,String password)
	{
		LoginForm user = lrepo.findByusername(username);
		if(user == null)
		{
			return "No user Found";
		}
		else
		{
			if(user.getPassword().equals(password))
			{
				return "Login Successful";
			}
			else
			{
				return "Login Failed";
			}
		}
	}
	

	public LoginForm update(LoginForm s) 
	{
		
		return lrepo.saveAndFlush(s);
	}

	public boolean isValidUser(String username, String password) 
	{
		return true;
	}

}