import React, { useContext } from "react";
import styles from "../sass/pages/contact.module.scss";
import DarkModeContext from "../context/DarkModeContext";

function Contact() {
	const { darkMode } = useContext(DarkModeContext);
	return (
		<div className={`${styles.contact} ${darkMode}`}>
			<div className={styles.container}>
				<h1>Contact</h1>
				<p>
				Dear valued user,

Thank you for visiting our website. We appreciate your interest and hope that you are enjoying your experience.

We are committed to providing you with the best possible service and experience on our website. If you encounter any issues or have any concerns about the functionality or content of the site, please do not hesitate to contact us.

Please fill out the contact form below to let us know of any problems you have encountered or any suggestions you may have for improving the site. We will do our best to respond to your inquiry as soon as possible.

Thank you for taking the time to help us improve our website.
				</p>

				<form
					className={styles.contactForm}
					action="https://formsubmit.co/a91fdbb25681a4f6a5934e8a93a4251c"
					method="POST"
				>
					<input type="text" placeholder="Name" />
					<input type="email" placeholder="Email" />
					<input type="text" placeholder="Subject" />
					<textarea placeholder="Your query or feedback" />
					<input type="submit" value="Send" className="submitBtn" />
				</form>
				<div className={styles.socials}>
					<button className="container">
						<i className="fab fa-linkedin"></i>
					</button>
					<button className="container">
						<i className="fab fa-github-square"></i>
					</button>
				</div>
			</div>
		</div>
	);
}

export default Contact;
