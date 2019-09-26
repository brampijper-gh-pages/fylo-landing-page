<template>
    <div>
        <the-navbar> </the-navbar>
        <base-content> </base-content>
        <the-footer> </the-footer>
    </div>
</template>

<script>
import TheNavbar from './components/TheNavbar.vue';
import BaseContent from './components/BaseContent.vue';
import TheFooter from './components/TheFooter.vue';

export default {
    components: {
        TheNavbar,
        BaseContent,
        TheFooter
    }
}
</script>

<style scoped>
</style>