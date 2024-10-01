import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";

const useUserLogin = () => {
	const [loading, setLoading] = useState(false);
	const { setAuthUser } = useAuthContext();

	const login = async (username, password) => {
		const success = handleInputErrors(username, password);
		if (!success) return;
		setLoading(true);
		let userData = null;

		try {
			const res = await fetch("/api/auth/login", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ username, password }),
			});

			const data = await res.json();
			if (data.error) {
				throw new Error(data.error);
			}

			userData = { ...data, role: 'user' }; // Assuming a user role is returned
			localStorage.setItem("user", JSON.stringify(userData));
			setAuthUser(userData);
		} catch (error) {
			toast.error(error.message);
		} finally {
			setLoading(false);
		}

		return userData; // Return user data
	};

	return { loading, login };
};

export default useUserLogin;

function handleInputErrors(username, password) {
	if (!username || !password) {
		toast.error("Please fill in all fields");
		return false;
	}

	return true;
}
