<script>

import {defineComponent} from "vue";
import {Swiper, SwiperSlide} from "swiper/vue";
import {Pagination} from "swiper";

import 'swiper/css';


export default defineComponent({
    components: {Swiper, SwiperSlide},
    setup() {
        return {
            modules: [Pagination],
        };
    },
})

</script>

<template>
    <div class="mt-24 overflow-hidden container mx-auto">

        <swiper
                :pagination="{
      dynamicBullets: true,
      loop:true
    }"
                :modules="modules"
                class="mySwiper transition ease-in-out delay-200 hover:-translate-y-2 hover:scale-110 duration-700"
        >
            <swiper-slide><img src="../assets/images/rovenblog-default-096.jpg" class="rounded-lg relative"> <p class="mt-[400px] bg-slate-50 rounded-lg p-2 mr-[300px] absolute  text-4xl font-semibold">Cross country season kicks off at Lake Forest</p></swiper-slide>
            <swiper-slide><img src="https://picsum.photos/id/356/600/900" class="rounded-lg relative bg-cover bg-center"> <p class="mt-[400px] bg-slate-50 rounded-lg p-2 mr-[300px] absolute  text-4xl font-semibold">Cross country season kicks off at Lake Forest</p></swiper-slide>
            <swiper-slide><img src="https://picsum.photos/id/436/600/900" class="rounded-lg relative"> <p class="mt-[400px] bg-slate-50 rounded-lg p-2 mr-[300px] absolute  text-4xl font-semibold">Cross country season kicks off at Lake Forest</p></swiper-slide>
            <swiper-slide><img src="https://picsum.photos/id/765/600/900" class="rounded-lg relative"> <p class="mt-[400px] bg-slate-50 rounded-lg p-2 mr-[300px] absolute  text-4xl font-semibold">Cross country season kicks off at Lake Forest</p></swiper-slide>
            <swiper-slide><img src="https://picsum.photos/id/571/600/900" class="rounded-lg relative"> <p class="mt-[400px] bg-slate-50 rounded-lg p-2 mr-[300px] absolute  text-4xl font-semibold">Cross country season kicks off at Lake Forest</p></swiper-slide>
            <swiper-slide><img src="https://picsum.photos/id/225/600/900" class="rounded-lg relative"> <p class="mt-[400px] bg-slate-50 rounded-lg p-2 mr-[300px] absolute  text-4xl font-semibold">Cross country season kicks off at Lake Forest</p></swiper-slide>
            <swiper-slide><img src="https://picsum.photos/id/567/600/900" class="rounded-lg relative"> <p class="mt-[400px] bg-slate-50 rounded-lg p-2 mr-[300px] absolute  text-4xl font-semibold">Cross country season kicks off at Lake Forest</p></swiper-slide>
            <swiper-slide><img src="https://picsum.photos/id/443/600/900" class="rounded-lg relative"> <p class="mt-[400px] bg-slate-50 rounded-lg p-2 mr-[300px] absolute  text-4xl font-semibold">Cross country season kicks off at Lake Forest</p></swiper-slide>
            <swiper-slide><img src="https://picsum.photos/id/667/600/900" class="rounded-lg relative"> <p class="mt-[400px] bg-slate-50 rounded-lg p-2 mr-[300px] absolute  text-4xl font-semibold">Cross country season kicks off at Lake Forest</p></swiper-slide>
        </swiper>
    </div>
</template>




<style scoped>
.swiper {
    width: 1280px;
    height: 600px;
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