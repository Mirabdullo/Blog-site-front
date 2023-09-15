<script setup>

import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import Swiper from "../components/Swiper.vue";
import Newposts from "../components/Newposts.vue"
import Posts from "../components/Posts.vue"
import { useRouter } from "vue-router";
const router = useRouter()
const token = localStorage.getItem('token');
if(!token){
router.push("/login")
} 

</script>


<template>
    <Header/>
    <Swiper/>
    <Newposts/>
    <Posts/>
    <Footer/>
</template>

<style scoped>

.swiper {
    width: 100%;
    height: 100%;
}

.swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;

    /* Center slide text vertically */
    display: flex;
    justify-content: center;
    align-items: center;
}

.swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
}

</style>
