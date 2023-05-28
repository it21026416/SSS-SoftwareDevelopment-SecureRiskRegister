import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styles from "../sass/components/popup.module.scss";
import RiskContext from "../context/RiskContext";
import DarkModeContext from "../context/DarkModeContext";

const RegisterView = ({ registerView }) => {
	const { formData, loginUser } = useContext(RiskContext);
	const { darkMode } = useContext(DarkModeContext);

	return (
		<div className={styles.popup}>
			<div className={`${styles.popupContainer} ${darkMode}`}>
				<Link to="/dashboard">
					<i
						className={`fa-solid fa-xmark ${styles.closeBtn}`}
						onClick={registerView}
					></i>
				</Link>
				<h1>Register</h1>

				<div>
					<form
						className={styles.addForm}
						style={{ display: "block" }}
						onSubmit={(e) => {
							loginUser(e, formData);
							window.location.href = "/";
						}}
					>
						<div>
							<label htmlFor="username">Username</label>
							<input
								type="text"
								id="username"
								name="username"
								required
							/>
							<label htmlFor="password">Password</label>
							<input
								type="password"
								id="password"
								name="password"
								required
							/>

							<label htmlFor="confirmpassword">Confirm Password</label>
							<input
								type="password"
								id="password"
								name="password"
								required
							/>

							<div className={styles.buttons}>
								<Link to="/dashboard">
									<input
										type="button"
										value="Cancel"
										onClick={registerView}
										className={styles.cancelBtn}
									/>
								</Link>
								<input
									type="submit"
									value="Submit"
									className={styles.submitBtn}
								/>
							</div>
						</div>
					</form>

					<div className={styles.buttons}>
						<Link to="/login">
							<input
								type="button"
								value="I want to login"
								className={styles.submitBtn}
							/>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default RegisterView;
