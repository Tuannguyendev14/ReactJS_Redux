import React,{Component}from 'react';
import {Link} from 'react-router-dom';

export default class Header extends Component {
	watchVideo(){
		window.location="https://www.youtube.com/watch?v=BCSHkai0OWY";
	}
 	 render(){ 
		return (

			<section> 
			  <div className="load" />
			  <header>
				<a href="true" className="logo"><img alt="Logo" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAQEhAQEBAVEBAVEBIaEBYVDRAQEA4VIB0iGCAdHx8YIDQkJCYxIB8fJDItMSsuMC8wGSs0Pz8tNzQ5MC4BCgoKDg0OFxAQFysdHh0tLS0rLS0tLSstMC0rLS0tLS0rLS0tLS0tLS0tLS0tLS0rLS0tLS0tLS0rLS0tLS43Lf/AABEIAMAAwAMBEQACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAAAgMEBQYHAQj/xABPEAABAwIABgsJDAoBBQAAAAABAAIDBBEFBhIhMXEHEyI1QVFhgbGysyMyM3JzdJGh0hckNEJDUlNUk5TB0RQWYoKDhJKj4fBEY6Kk4vH/xAAbAQEAAwEBAQEAAAAAAAAAAAAAAQIDBAUGB//EAC8RAQACAgAEBQEIAwEBAAAAAAABAgMRBBIhMQUTIkFRMhQVQmFigZGhIzNxcgb/2gAMAwEAAhEDEQA/AO4oBAIBAIBAIBAIBAIBAIPEAgEAgEAg9QCAQCAQCAQCCHhbCEdLDLUSm0cbHOceQIOYxT4RwmBUTTupYH54YI3lmSzgLi3OTzq2kEvwA4aKmY/zU3tqdCNLgeQfLzH+bn9tNCNJQSj5ab77P7SaEWSKUfKzffp/aTSNo000jQSZJrAXPv8Am9pNG1NLh+aLJe6WcOe3KjjFXNuGcBcS7SeIKEmHY6VH0lR9+kQIfjtUj5SoHF7+kTYS7H2q+kqPvsibDZ2QKv6Sf769RsJdshVn0k/316bCBsiVn0s/3yRNpev2Qa0GxlnB88kTYT7olZ9LP98kTaGoxO2UKtj7ue6aJu6mhkOW4x/Gcx2nKGmx0oPoSCZr2te03a5oLTxgi4UJOIBAIBAIBBkNlYXwbOON8AP2jVMIUmFql0FPFtdgcmnYCQDk3bnNjq9atCGWr8N1MbS8SA2FwCxtnWz2NgpGhmk4VAr55FIr55FIqMKG8cg42O6FEiiw7SbZUS7rJDWwAZr/ACTV1cNwnnRM7aVptAOB7/Kf9n+V1fdnTXMt5Z1mLhfa81uLuZP4q8eEfqaV4ffucGJ9/l/7R9pT90fqW+za9zjcRb/8m38E+0q/dP6keQWNj6//ACv7B9pV+6/1I8l77nI+tf8Ajn2lWfDP1K+WJNj2+c1dz5A+0rfdcz+JHlj3OR9a/sf+yiPDN/iW8l5HisaGenftu2teKhpG15Fu5OPGVy8Rwvk66s700+iMRt76Dh96Q9ULiUXqAQCAQCAQZDZVeBg6W/DLTga9saphDMY1yWgj5DTdVWhDA4SnJaQb2yTb0INvLJmGoKRAmkUivnkQVlc/cP8AFd0KJEGvPvifXD2TV7Hh30T1bYuwhZcr1axqXRSNysomWWsOiIiEmNTJKXGspUlKjWcqSWSoiNqSavcgcq06RBEHWm55AqWnovM6U+MLrvpPKVHYuXl+I9KRO3Nl6ux4hSB2DqEg3tTRA6wLFeKyX6AQCAQCAQYvZc3vd5xTdoEhEsnjlJaAfy/VV4Q57W1Rc3JOj16EG6lkzDUrCBPIgr55FAr6t+5d4ruhAxXfCKjXD2TV7Hhv02bY4SaVi9jXs7KwmMWump5hVZRKVEVSYVlKYVlMM5Dnqawro3G7SeRXsmDgdYa1jKJVWH+/pPKVHYuXl+IfTDHI67sab20fk/xK8Zi06AQCAQCAQY7ZYfbB0ma956cau6DOkIlh8dXHaTbPZtOTyDJGdXhDn87w4NaGnKJA0d8UG0lkVhAmlQQZpFAgzvzHxT0KAqq+EVGuHsmr2/Co3Ew6MHZNiFgF68dbz+TroejOYLaWh1pVdB+NypMKylNes9KSS96mIRolrs3OrWDgfn1LCYZq3Dhu+k8eo7Fy8rxCPTDLK7Lseyh+DqEgWtAwejc39S8Zi0SAQCAQCAQYzZaBOD32z2npieQbYEhEslhSTd/uR9ULWOyJV1QGhrXB7CSM7QDls1rOtp2Sr5pVoIM0igQZpEEV79Oo9CgSqgXqKnx6fs2r3/B+lbfk2x21Ca8WNjpGYr0uH67n5deKdxE/JcJzc66ZhqeWaSmuSYQfZIqTCkwHuUxCCGP6VNoDjH6daxtXszQcMHd0vj1HYuXk+JR6ascrsuxvGW4Nog4WvCCNRzheGxaZAIBAIBAIMjsp73TeUg7RqmESwOGZO6HxI+oFeFZVMsqnomUOWRQIcr1AhyvQRg7PzHoUC2JH6RUk8ElMTqyGXXv+FdcdyZ0lVA7pKP2zbn0L0uGn0RLqx21WPyIidY6+ldsuqJSmlZStsEobetemlZLLlGlTeUr6C2PWVqqSi4SdeSl8eo7Fy8XxSPTVhmdzxG3uoPNIeqF4LFeIBAIBAIBBlNk+MuwdPbgdC46g9pKmEOZ4ek7q4fsx9QK8IU8sqCJNIglSYd3LBkElsLoyS8WLTpzAevSoFfUYXJsMm1iDpHA0s4RxEIIP6ZlG1uB3Df53tILGRwFRU370mIHUYmr3fCZ1WZaRTmpMLCMZd8+6c0C//VGj+pujlsvQx7x2ms9lJyTWa39vciVmU3LHBbL5DwO1HRr1rspfU6n9nRjvy25PaexUT+PnVrRro6q2iThKqTJJKk3t616nSpRzoEXUWhHsi1r+6U2uo7Fy8TxePTVz5uzvmJcZbQULTpFLDf8ApC+dYrpAIBAIBAIM3sib3VXiDrBTCHIsYZO7v1R9UK8IUskiSIskihKLI9QIsj0CIHbsc/Qgup5gKmoadBdDf7Jq9rw69q0tLfFEa1HdYCmcG5be6R23Vr3aOIgZ+fgXrRkpkjTG2WItyXjlmf7PwVBvlXvfTcDdX03HGeEcOkKl62iPzhaKxNeWZ6ewqKcN3bDdmu5j5DycR9K6OH4muX0z3hat7V6T3j+yWnjW8uquSLBymEmyVI9a9TpU5e6qeyDWjukH8z2Ll4njH01Y5uz6HxY+B0nm0PVC+bYLNAIBAIBB4EGc2Rd7qrxG9YKYHF8ZJO7yao+qFZVSySII0kiJRpHqBGkegKV27bz9CDQVFSxtRUtfE2RpdCc92vb3Jughev4f1pKPLvbrS2pSaaeNpyoZnwnie0PZ6W5/Su22Hm7TqV95ojlyU54/6l5QkzkNDj8eEh7HeMzT6ArY8uSnpyRuPlSJp2xzr8i43luckW0ZQOUzUb6NRUzTm9dJ6tK5YtPLaA5o4BbNnbnzDk4x0al14M/N6bdy3NSehDhbUdC6qujHki/Tto24LReZ0bKtA9a9RMBirdeSD+Z7Fy8LxqPTVhmfRGLHwOk82h6oXzLFZoBAIBAIPAgyeyi4jB01jbdwA6tsapgcXxmf74k1R9UKyqkkegjveoSjyPUBh7lIXRnujefoQbajyNtq8ttORtkPhnNB8E3RfOvZ8O1NZ30cPFamY+SpG0ekxwa2MqB68w9a9GbU92Na5o6VnX7mxR0js7WSN5Y8vN6XFRN66X5+Lj8UT/D0xtBvHU57d7O10Z/rsFFbV30aTlza/wAuPp87eF5aQ17TGdLRmseVhGb0Lfli8dO7pxZuaPTO4PNcCCDo4bADnH4j/K1x3mOlu6JryeunUzILEg//AFdcPQxZOeDTldO9ybKtEBlxvLTjln7Jy8LxyPRVllfQeJDicH0JOc/okPVC+WYrxAIBAIBAIMjsp73TeUg7RqmEOH40P98y/udUKwpHvUBl7kDD3IGiVAdovCN1noQbOmZTbdVPmc8uD4Q1jAMp/cm8J0BerwOSIrOocufHxOS0VwR/2U0V5b4KKKnHzsgSz87ncK6cmbXXfV0YPBOeN57839B+EHaXyynXK5nqb+Swr52WfTV6NOA4LFGvL3+7wYQYcxdJzyGQeh+ZazTiY6zG0zw/Cfhpr9yJaVrwWsIF8+SG258jR6LHWr4+Jn8UcrC/B03zY5V8D3xuEcmk+Ddfcv5LnhXo1vzxr3YTasddf9hImObV3vi8XMu3Bbm6z3hbHHLfW+kmWuW+vh0T0kEKx7I58NT65+ycvB8c+irLL2fQmI291B5pD1QvlpYrxAIBAIBAIMjsp73TeUg7RqmEOEY1P98zfudUKRSPeoDLnoG3FAklA9Q+Ebz9CDWt8NVceXD2TV14bTyzEPS4GsTE9Ducmw02zk6GhenwvDc3W3ZrxGbU8sLjA2L+2t22Zzo4j3tvCzauILqz8TFP8eKHj8RxM06RG5Lq5qGIlsVG2QjSXvc885V8XC5Lxu1mWPFnydZvpWTVNK7Mad0J4DFL3v7rl0fYJ7RZ0xjz44/2bILmuGTI7bIydzIBkua7gygdDulcd8WTBOtdGlp82O2rR/Zysp3MDSc9+EDM48Y5D0rpw5eWYt893Hw/EUvNsW+tVc9lrX0EZl60Wi3SHoY7RbpBTTyKJa8vQh47rT65+ycvB8cn0VYZ46PoHEbe6g80h6oXy7nXiAQCAQCAQZHZU3um8pB2jVMDgONjvfU2tnVCmUKVzlAbJQJKDxQH6HwjefoUwNa3w1WeJ0R/tNXZw1OeXp8JbWO0rfAmDttdE12h93P8QHP6c3pXuZr+Vj6PPzZvVa3w2U7MpthuQRYAZslnAAvLpeazt515ne46ygw4BiOfJyuMuJyV3/bLVjo58nGZe1Z0dnwfC0WyGnk2ttlNM+SZ3tzVtk3ubqDCOCYxcxtybjdMz2cOT8uhd1M05Y5b9Xdj4jJWes7hEoDtjH0khu614Twu4vT0rjybpM1OMr5d6cZjj/1CKyIyxGwvJE7dAaXN4beorv4XiImI/N2xmjDmibfTYzHk5rEauEnmXZaZenbJWPVvobq22mpwczrz3HC3uLtNuhfP+M5azEVhy5MsZOsdne8Rt7qDzSHqhfOs14gEAgEAgEGR2VN7pvKQdo1TA+fMbXe+59bOqFMoUpKgeEoPEAoD9D4RvP0KYGrkNn1fGZIAOXuQJ/Bep4XTmy7+HZivrFLc4EpsjbD82OOMejOuvirbnTysk9Jj5XW13Nj3o0/kuOu4c2S+o1D2aTQBzLfHHy4piP4RnX71mc306L+nQto69bKUxzl9Vu3wgzVdO/ue3NcdGh4YTyOOZaxXJ3iHXjx8nWIZ7C1A5jgW9+03bwZQ4RyH8Vvb/LXcd4d+C9esX+me6HA97n7Yxxy8o7psdyM98l7Ab8ecdC87zJpaZh6NuExXxRj7wlVUr232yWNjjpETGumk5wBbnV44vJfpWGFPDcWLrM7UkoO205ybNyqi2cH5J3DwnjKw43BOOkWt3lfJeJ6VfQGI291B5pD1QvHlmvEAgEAgEAgyOynvdN5SDtGqYQ+ecbT77n1s6oSRT3QeIBAKA/Q9+3n6FMDXUkZfVyM4NugP9tpPQvd8L6Vvb4b0/wBcuj4Pis3xnFxWWa27TLy8k82kp77C3pWdI9mFo9zLn5ieHgXRr2c+XHM2iv8AKswtOGt2smwLbzG9jkXzNHjEegLsw0mZ3p146b6Qp24YkeC2KAOj0d7ubcVlpmvw+C3+XJqXbTwuZjm9yDhAEbXI1zQO9uCSzkz6QrY/LvPPitEotwmSvsg1EDXm94ncpyrq9qYp63jq2xxkjt0KpsGk5mtyyeAMLI/zPQsL8TgwdY6OmMGS/wBU6R8K0Do5aVzjlOLpxwWAELswXjcZxVs+p7QZscY6xqHc8Rt7qDzSHqhebLmXiAQCAQCAQZHZU3um8pB2jVMIfPGNh99z629UJIp0AgEAoD9D4RvP0KYHRMWaPKqauQ/FdCAOUxNK9bg8msVq/KL5OWmm2YbBRfrO3JWOmzMr1rjr7q66kudnAJsBnPItaxuU+X6Zt8sfXTOqptrabBzru/ZaBm9DR6V35s0cDws5rd47PU4Dho92np6ZrGhrQAALBfmGbiL8Rkm956y9yK6jSPK8uJG0AgH4wIJ9C9/huDx461mc+pZ2tM9oe09Dc+ByTxNYL+l35LpycRTHuPN2iJ/ZaQ0lrtzA/GDST/Ufw9RXDfioiNx/KvLNlBjvEG/oIA+Vqbnj7g5VwZJyWmZcfFxNaw6niNvdQeaQ9ULocC8QCAQCAQCDI7Km903lIO0apgfO+Nnwufxm9UKUKhQBAIBA/Q9+3n6EHUsUPCV3loOxau7hp1WWWSu2kc5bx1sjWoMA59S6YiYhny7n/qow3X5DH2Od25H4rt4bDzX17OucXqrWDOK1EQ0zOG6f3vi/5Xyv/wBT4jGTJHD0npXu93h8fJXmaXaDw2Dc2ck/hrXytdTGkxkmZ3D2zG6AXHlIa3/fSunHG+8reuxVydJDRxNu0enSfUt4tWPpheMfyNtAFgPVYepXitrfUnTL45vJdRX+lqexcu/BSK9nn8f9MOsYjb3UHmkPVC2eWvEAgEAgEAgyOypvdN5SDtGqYHztjZ8Ln1s6oUoVKgCAQCB+h8I3n6FI6lil39d5eDsWrqwdpNL6R3Au6lerO3VHqZQxp410UraZb4sXv8M1DTOrJrZ9qZ3x4+TnVvEvEKcBw8z+Oez0OGw81ty10IAsGgWGYcQX5ne1r2nJbvL0rxvt2KLieXlOhaVwzPZFaxD0A8YXXTFDTml7krprVEzsWW0RvujbNY4d9ReVqexct8cRDzvEPph1rEbe6g80h6oV3lrxAIBAIBAIMjsqb3TeUg7RqmB87Y2fC5/Gb1QplCpVQKQIBA/Q+Ebz9CDqOK3f13l4Oxau3ho2mImey5nna0XK9HHSbS0rjiOylcJKt5YzMwd+7gaPzWnE8Zi4Gk2vO7e0OvFitefyaGjpWQsDGiwHpceNfA8XnzcZlm95erWsUjUHCwu5BxKtMJNoOshGtdEUU5oKyFtFZTshy1iFoNuKvELalmcbjuqPylT2LlrR53iHWsOt4jb3UHmkPVCs8peIBAIBAIBBldk6mfJg2qDBdzWtfYaSGODz6gpgfN+MjsqcyDO2RrHNPAdyB+CmUKu6qC/+5lIL/wC5kBf/AHMgdpnhrgfxQWuG8O1NNUSOp5SyOZkLxZrXB1mBt90DoIIV65bU7StFtKybGyufmdOSPEjHQ1axxWWvaSJk7BjnhBjchlRktHAIofZXLmrGa3NfrLWM947SX+vOEvrJ+yh9lZRgxx2hb7Vl7bKGPmE/rR+xh9lX8uvwr9ov8vf1+wp9aP2MHspyVPPv8vDj7hT60fsofZU8sJ+0ZPkn9esJ/Wj9lD7KnlPtOT5H68YS+sn7KH2U5U/asvylYHw5VVU7X1MpkZDFO47ljQ27C3gA4SFMQzyZr3iNy+ncT4HR0NFG8Wc2lhDhxHJCM1wgEAgEAgECXNBBBzgjOONBzLDOxMwvc6jlbHGSTtMseXHHf5pGcDkU7QrxsTVHz6T7GZNj33J6j59J9lMmzQ9yeo+fSfZTJs0ci2JpPjSU4P7MEhHrTZp5LsTTX3ElMR+1DID6k2aV1RsN1RBG3QPZclsZZLub6clx0JsQvcZqPo4vtz+SbCm7C89iciEHgG3ON/Umwn3Gaj6OH7wfyTYUzYYnOlkI/jOP4JsD9hicaI4T/GcPwTYT7jNR9FD94P5Jse+41P8ARQ/eHfkmwe41UfRQ/eHfkmxpMV9iRkTmvq3sdG1wcIImEMkI0bY453W4tCbHUwLKEvUAgEAgEAgEAgEAgEAgEAgEAgEAgEAgEAgEAgEAgEH/2Q==" style={{width: '80px', height: '80px'}} /></a>
				<a className="toggle" href >Menu</a>
				<ul className="active">
				  <li> <Link to="/" className="nav-link"> Home </Link></li> 
				  <li><a href="true">Detail</a></li>
				  <li><a href="true">Contact us</a></li>
				  <li><a href>About</a></li>
				  <li><a href>Services</a></li>
				  <li><Link to="/task" className="nav-link"> Manage Task</Link></li>
				  <li><Link to="/form" className="nav-link"> Form</Link></li>
				  <li><Link to="/table" className="nav-link"> List  </Link></li>
				  <li className="dropdown">
					<a id="maumenu" href title="Tool" className="dropdown-toggle" data-toggle="dropdown"><span className="caret" />Tool</a>
					<ul className="dropdown-menu menubar">
					  <li><Link to="/login" className="nav-link">  Log in </Link></li>
					  <li><a href title="Logout">Logout</a></li>
					  <li><a href title="Sign up<">Sign up</a></li>
					</ul>
				  </li>	
				</ul>
			  </header>
			  <div className="content">
				<div className="principal">
				  <h1>Welcome to Mobifone store</h1>
				   
				</div>
				<div className="buttom">
				  <a href className="btn" onClick={this.watchVideo}>Watch video</a>
				  <a href  className="btn">Detail</a>
				</div>
			  </div>
			</section>
		  );
		   
		 
  	}
}


