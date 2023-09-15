

<script setup>
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import { toast } from 'vue3-toastify';
import useAuthStore from '../stores/createUser'

const authStore = useAuthStore()
const router = useRouter()

const userInfo = reactive({
	first_name: "",
	last_name: "",
	email: "",
	password: ""
})

const createUser = async () => {
	await authStore.signup(userInfo).then((data) => {
		console.log(data.response);
		if (localStorage.getItem('token')) {
			router.push('/')
		}
	}).catch((err) => {
		console.log(err);
		toast.error(err.response.data.message)
	})

}
</script>

<template>
	<section class="bg-gray-50 dark:bg-gray-900">
		<div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
			<a href="#" class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
				BlogSite
			</a>
			<div
				class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
				<div class="p-6 space-y-4 md:space-y-6 sm:p-8">
					<h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
						Registration
					</h1>
					<form @submit.prevent="createUser" class="space-y-4 md:space-y-6" raction="#">
						<div>
							<label for="fname" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First
								Name</label>
							<input type="text" name="fname" id="fname"
								class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
								placeholder="Your Name" required v-model="userInfo.first_name">
						</div>
						<div>
							<label for="lname" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last
								Name</label>
							<input type="text" name="lname" id="lname" placeholder="Last Name"
								class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
								required v-model='userInfo.last_name'>
						</div>
						<div>
							<label for="email"
								class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
							<input type="email" name="email" id="email"
								class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
								placeholder="name@gmail.com" required="" v-model='userInfo.email'>
						</div>
						<div>
							<label for="password"
								class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
							<input type="password" name="password" id="password" placeholder="••••••••"
								class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
								required v-model='userInfo.password'>
						</div>

						<button type="submit"
							class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Create
							an account</button>
						<p class="text-sm font-light text-gray-500 dark:text-gray-400">
							Already have an account? <router-link to='/login'
								class="font-medium text-primary-600 hover:underline dark:text-primary-500">Login
								here</router-link>
						</p>
					</form>
				</div>
		</div>
	</div>
</section></template>

<style></style>