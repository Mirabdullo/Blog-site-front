<script setup>

import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import Swiper from "../components/Swiper.vue";
import Newposts from "../components/Newposts.vue"
</script>


<template>
    <Header/>
    <Swiper/>
    <Newposts/>
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
