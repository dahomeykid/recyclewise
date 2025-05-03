import React, { useEffect, useState } from "react";
import { useRecycleWise } from "../context/RecycleWiseContext.jsx"; // Adjust the import based on your context structure

const AuthenticatedUser = () => {
	const [user, setUser] = useState(null);
	const [error, setError] = useState("");
    const {API_URL} = useRecycleWise(); // Assuming you have a context or a way to get the API URL

	useEffect(() => {
		const fetchUser = async () => {
			const token = localStorage.getItem("token"); // Get token from localStorage
			if (!token) {
				setError("No token found. Please log in.");
				return;
			}

			try {
				const response = await fetch(`${API_URL}/auth/me`, {
					method: "GET",
					headers: {
						Authorization: `Bearer ${token}`, // Send token in Authorization header
					},
				});

				if (response.ok) {
					const data = await response.json();
					setUser(data); // Set user data
				} else {
					const errorData = await response.json();
					setError(errorData.message || "Failed to fetch user");
				}
			} catch (err) {
				setError(`An error occurred while fetching user data.${err.message}`);
			}
		};

		fetchUser();
	}, []);

	if (error) {
		return <p className='text-red-500'>{error}</p>;
	}

	if (!user) {
		return <p>Loading user data...</p>;
	}

	return (
		<div className='p-4 bg-gray-100 rounded shadow'>
			<h2 className='text-xl font-bold'>Authenticated User</h2>
			<p>
				<strong>Username:</strong> {user.username}
			</p>
			<p>
				<strong>Email:</strong> {user.email}
			</p>
		</div>
	);
};

export default AuthenticatedUser;
