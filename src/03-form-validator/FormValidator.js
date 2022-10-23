import { useState } from "react";

export default function FormValidator() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [passwordConfirm, setPasswordConfirm] = useState("");
	const [message, setMessage] = useState("");

	function handleMessage() {
		const errors = [];
		if (!email || !password || !passwordConfirm) {
			errors.push("All fields must be filled in");
		}
		if (!email.includes("@")) {
			errors.push("An email must have exactly one @ sign");
		}
		if (password.length <= 8) {
			errors.push("Password must be 8 characters or longer");
		}
		if (password !== passwordConfirm) {
			errors.push("Password and PasswordConfirm are not same");
		}
		return errors;
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		const errors = handleMessage();

		setMessage(errors.length ? errors.join(", ") : "User Created");
	};

	return (
		<form>
			<h2>Sign Up!</h2>
			<label htmlFor='email'>Email</label>
			<input
				type='text'
				name='email'
				value={email}
				onChange={(e) => setEmail(e.target.value)}
			/>
			<label htmlFor='password'>Password</label>
			<input
				type='password'
				name='password'
				value={password}
				onChange={(e) => setPassword(e.target.value)}
			/>
			<label htmlFor='password-confirm'>Confirm Password </label>
			<input
				type='password'
				name='password-confirm'
				value={passwordConfirm}
				onChange={(e) => setPasswordConfirm(e.target.value)}
			/>
			{message}
			<input type='submit' value='Submit' onClick={handleSubmit} />
		</form>
	);
}
