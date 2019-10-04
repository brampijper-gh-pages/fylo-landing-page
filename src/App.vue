<template>
    <div>
        <the-navbar />
        <base-content />
        <the-footer />
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