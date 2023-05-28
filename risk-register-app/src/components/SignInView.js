import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styles from "../sass/components/popup.module.scss";
import RiskContext from "../context/RiskContext";
import DarkModeContext from "../context/DarkModeContext";

const SignIn = ({ signedInView }) => {
	const { formData, loginUser } =
		useContext(RiskContext);
	const { darkMode } = useContext(DarkModeContext);

	return (
		<div className={styles.popup}>
			<div className={`${styles.popupContainer} ${darkMode}`}>
				<Link to="/dashboard">
					<i
						className={`fa-solid fa-xmark ${styles.closeBtn}`}
						onClick={signedInView}
					></i>
				</Link>
				<h1>Sign In</h1>

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
							<label htmlFor="control">Password</label>
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
										onClick={signedInView}
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
						<Link to="/register">
							<input
								type="button"
								value="I want to register"
								className={styles.submitBtn}
							/>
						</Link>
					</div>
				</div>
			</div>
		</div >
	);
};

export default SignIn;
