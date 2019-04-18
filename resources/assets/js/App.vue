<template>

<html>
    <body>


    <Header />
    <router-view></router-view>
 
    <Footer />

    </body>
</html>
</template>

<script>
import Header from './components/Layout/HeaderComponent.vue';
import Footer from './components/Layout/FooterComponent.vue';
export default {
    components:{
        Header, Footer
    }
}
</script>

<style>

</style>
