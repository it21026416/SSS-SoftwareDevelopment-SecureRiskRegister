import React, { useContext } from "react";
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
				<i
					className={`fa-solid fa-xmark ${styles.closeBtn}`}
					onClick={signedInView}
				></i>
				<h1>Sign In</h1>

				<div>
					<form
						className={styles.addForm}
						style={{ display: "block" }}
						onSubmit={(e) => {
							loginUser(e, formData);
							signedInView();
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
								<input
									type="button"
									value="Cancel"
									onClick={signedInView}
									className={styles.cancelBtn}
								/>
								<input
									type="submit"
									value="Submit"
									className={styles.submitBtn}
								/>
							</div>
						</div>
					</form>

					<div style={{
						display: "flex",
						justifyContent: "space-between",
						width: "30%"
					}}>
						<button>Register</button>
						<button>Home</button>
					</div>
				</div>
			</div>
		</div>

	);
};

export default SignIn;
