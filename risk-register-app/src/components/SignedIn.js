import { Link } from 'react-router-dom';

function SignedIn() {
	if (localStorage.getItem('signedIn') === 'true') {
		return (
			"Sign Out"
		);
	} else {
		return (
			"Sign In"
		);
	}
}

export default SignedIn;
