import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";

const useUserSignup = () => {
	const [loading, setLoading] = useState(false);
	const { setAuthUser } = useAuthContext();

	const signup = async (userData) => {
		const success = handleInputErrors(userData);
		if (!success) return;
		setLoading(true);

		try {
			const res = await fetch("/api/auth/signup", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(userData),
			});

			const data = await res.json();
			if (data.error) {
				throw new Error(data.error);
			}

			// Assuming the response includes user details, including a role
			localStorage.setItem("user", JSON.stringify(data)); // Store user data in localStorage
			setAuthUser(data); // Set the auth context with the user data
			toast.success("Signup successful!"); // Show success message
		} catch (error) {
			toast.error(error.message); // Display error message
		} finally {
			setLoading(false);
		}
	};

	return { loading, signup };
};

// Input validation function
function handleInputErrors(userData) {
	const { username, company, jobRole, department, password, confirmPassword, email } = userData;

	if (!username || !company || !jobRole || !department || !password || !confirmPassword || !email) {
		toast.error("Please fill in all fields");
		return false;
	}

	if (password !== confirmPassword) {
		toast.error("Passwords do not match");
		return false;
	}

	if (password.length < 6) {
		toast.error("Password must be at least 6 characters long");
		return false;
	}

	return true;
}

export default useUserSignup;
