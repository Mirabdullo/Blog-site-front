import {defineStore} from 'pinia'
import axios from '../service/axios'
import { ref } from 'vue'

export const loginUserStore = defineStore('login', () => {
	let userData = ref(null);
	let errorMessage = ref("");
	const login = async (data) => {
		try {
			const response  = await axios.post('users/signin', data);	
			console.log(response);
			if(response.status === 201){
				userData.value = response.data.access_token
				localStorage.setItem('token', response.data.access_token.access_token)
				errorMessage.value = "";
				return  response.data;
			} 
			throw new Error(response.data.message);
		} catch (error) {
			localStorage.setItem('token', "")
			userData.value = null;
			errorMessage.value = error.message;
		}
	}
	return { login,userData,errorMessage }
})

