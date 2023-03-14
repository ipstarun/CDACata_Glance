package com.cdac.service;

public interface IMailService {

	public boolean sendMail(String to,String subject,String contents);
	
}
