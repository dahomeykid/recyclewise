import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Link } from "react-router-dom";

const Login = () => {
	const [formData, setFormData] = useState({
		email: "",
		password: "",
	});

	const navigate = useNavigate();

	const [error, setError] = useState("");
	const [success, setSuccess] = useState("");

	// Handle input changes
	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	// Handle form submission
	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			const response = await fetch("/api/auth/login", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(formData),
			});

			if (response.ok) {
				const data = await response.json();
				localStorage.setItem("token", data.token); // Save token
				navigate("/"); // Redirect to home
			} else {
				const data = await response.json();
				setError(data.message || "Login failed");
			}
		} catch (err) {
			setError(`An error occurred. Please try again: ${err.message}`);
		}
	};

	return (
		<div className='flex justify-center items-center h-screen bg-gray-100'>
			<div className='bg-white p-8 rounded shadow-md w-full max-w-md'>
				<h1 className='text-black text-2xl font-bold mb-6 text-center'>
					Login
				</h1>
				{error && <p className='text-red-500 mb-4'>{error}</p>}
				<form onSubmit={handleSubmit}>
					<div className='mb-4'>
						<label
							htmlFor='email'
							className='block text-gray-700 font-medium mb-2'
						>
							Email
						</label>
						<input
							type='email'
							id='email'
							name='email'
							value={formData.email}
							onChange={handleInputChange}
							className='w-full border border-gray-300 p-2 rounded'
							required
						/>
					</div>
					<div className='mb-4'>
						<label
							htmlFor='password'
							className='block text-gray-700 font-medium mb-2'
						>
							Password
						</label>
						<input
							type='password'
							id='password'
							name='password'
							value={formData.password}
							onChange={handleInputChange}
							className='w-full border border-gray-300 p-2 rounded'
							required
						/>
					</div>
					<Link
						to='/'
						type='submit'
						className='block text-center w-full bg-green-600 text-white py-2 rounded hover:bg-green-800'
					>
						Login
					</Link>
				</form>
				<p className='mt-4 text-center text-gray-600'>
					Don't have an account?{" "}
					<Link
						to='/register'
						className='text-blue-600 hover:underline'
					>
						Register here
					</Link>
				</p>
			</div>
		</div>
	);
};

export default Login;
