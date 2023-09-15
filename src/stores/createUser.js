

import { defineStore } from 'pinia'
import axios from '../service/axios'
import { toast } from 'vue3-toastify'

const useAuthStore = defineStore("auth", () => {
	const signup = async (data) => {
		const response = await axios.post('users/signup', data)
			.then((data) => {
				if (data.status === 201) {
					console.log(data);
					localStorage.setItem('token', data.data.access_token)
					localStorage.setItem("is_admin", data.data.is_admin)
				}
			})
			.catch((err) => {
				console.log(err);
			})

	}
	return { signup }

})

export default useAuthStore