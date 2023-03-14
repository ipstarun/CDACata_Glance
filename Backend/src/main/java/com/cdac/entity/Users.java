package com.cdac.entity;



import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;




@Entity
@Table(name = "users")
public class Users {

	    @Id
	  //  @GeneratedValue(strategy = GenerationType.IDENTITY)
	    @NotNull(message = "id is required")	
        private Long id;

	   
	    @NotEmpty(message = "First name is required")	
	    @NotBlank(message = "User name can't blank")

		@Column(name = "name")
	    private String name;

	    @Column(name = "email", unique = true)
	    @NotEmpty(message = "Email is required")
	    private String email;

	    @Column(name = "password")
	    private String password;
	
		@Column(name = "role")
	    private String role;
       
		
	    public Users() {
			super();
		}

	    


		public Users(Long id, String name, String email, String password,String role) {
			super();
			this.id = id;
			this.name = name;
			this.email = email;
			this.password = password;
			this.role = role;

		}
        public Long getId() {
			return id;
		}



		public void setId(Long id) {
			this.id = id;
		}



		public String getName() {
			return name;
		}



		public void setName(String name) {
			this.name = name;
		}



		public String getEmail() {
			return email;
		}



		public void setEmail(String email) {
			this.email = email;
		}



		public String getPassword() {
			return password;
		}



		public void setPassword(String password) {
			this.password = password;
		}




		public String getRole() {
			return role;
		}




		public void setRole(String role) {
			this.role = role;
		}




		@Override
		public String toString() {
			return "Users [id=" + id + ", name=" + name + ", email=" + email + ", password=" + password + ", role="
					+ role + "]";
		}

     }

	
	
	
	
	
	

