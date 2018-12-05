<template>
<div>
    <Header/>

    <Footer/>
</div>
</template>
<script>
    import Header from './layout/Header.vue';
    import Footer from './layout/Footer.vue';
    export default {
        name: 'home',
        components:{Header,Footer}
    }
</script>