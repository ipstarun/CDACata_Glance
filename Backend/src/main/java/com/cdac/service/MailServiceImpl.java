package com.cdac.service;


import javax.mail.MessagingException;
import javax.mail.internet.AddressException;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;
import javax.mail.internet.MimeMessage.RecipientType;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.MailException;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;



@Service
public class MailServiceImpl implements IMailService {

	@Autowired
	private JavaMailSender mailSender;
	
	
	@Override
	public boolean sendMail(String to, String subject, String contents) {
		
		try {
			MimeMessage email = mailSender.createMimeMessage();
			InternetAddress fromAddress = new InternetAddress("bhawnatiwari205@gmail.com");
			email.addFrom(new InternetAddress[] {fromAddress});
			email.setSubject(subject);
			email.setContent(contents, "text/html");
			
			InternetAddress toAddress = new InternetAddress(to);
			email.addRecipient(RecipientType.TO, toAddress);
			mailSender.send(email);
		} catch (AddressException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}catch (MailException e) {
			// TODO: handle exception
			e.printStackTrace();
		}
		catch (MessagingException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return true;
		
	}

}
