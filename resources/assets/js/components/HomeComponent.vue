<template>
    <div>
    <Slider />
    <Services />
    <Property />
    <Testimonial />
    </div>

</template>

<script>
import Slider from './Home/SliderComponent.vue';
import Services from './Home/ServiceComponent.vue';
import Property from './Home/PropertyComponent.vue';
import Testimonial from './Home/TestimonialComponent.vue';
export default {
    components: {
        Slider, Services, Property , Testimonial
    }
}
</script>

<style>

</style>
