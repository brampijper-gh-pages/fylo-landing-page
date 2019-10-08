<template>
    <div>
        <the-navbar :scrollFunction="calculateScrollHeight"> </the-navbar>
        <base-content :scrollFunction="calculateScrollHeight"> </base-content>
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
    },
    methods: {
        calculateScrollHeight(scrollTo) {
           const section = document.getElementsByClassName(scrollTo)

            if(section.length) {
                const offsetHeight = section[0].offsetHeight;
                const offsetTop = section[0].offsetTop;
                this.scrollToSection(offsetHeight + offsetTop)
            }
        },
        scrollToSection(height) {
            window.scroll({
                top: height,
                left: 0,
                behavior: 'smooth'
            });
        }        
    }
}
</script>