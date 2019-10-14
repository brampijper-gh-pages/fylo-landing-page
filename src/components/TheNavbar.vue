<template>
    <nav class="main-nav">
        <img class="main-nav__logo" @click="calculateScrollHeight(0)" src="assets/images/logo.svg" />
        <ul class="main-nav__menu">
            <li class="main-nav__menu-item" v-for="(link, index) in menu" :key="index">
                <a class="main-nav__menu-item-link" href="#" @click.prevent="calculateScrollHeight(link.scrollTo)">
                    {{ link.text }}
                </a>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
    props: ['scrollFunction'],
    data() {
        return {
            menu: [
                {text: 'Features', scrollTo: 'a-section'},
                {text: 'Reviews', scrollTo: 'b-section'},
                {text: 'Contact', scrollTo: 'e-section'}
            ]
        }
    },
    methods: {
        calculateScrollHeight: function(scrollTo) {
            this.scrollFunction(scrollTo);
        }
    }
}
</script>

<style scoped>
.main-nav {
    display: grid;
    grid-template-columns: 1fr 10fr;
    padding: 6vh 4vw 6vh 5vw;
    background-color: hsl(218, 34%, 20%);
}

.main-nav__logo {
    width: 100%;
    min-width: 60px;
    height: auto;
    cursor: pointer;
}

.main-nav__menu {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin: 0;
    padding: 0;
    list-style-type: none;
}

.main-nav__menu-item {
    display: inline;
    margin: 0px 25px 0px 0px;
}

.main-nav__menu-item-link {
    text-decoration: none;
}

/* only for smartphones */
@media screen and (max-width: 480px) {
    .main-nav__logo {
        min-width: 35px;
        height: auto;
        margin-left: 5vw;
    }

    .main-nav {
        grid-template-columns: 1fr 4fr;
        /* margin: 6vh 4vw 6vh 2vw; */
    }

    .main-nav__menu-item {
        margin: 0px 20px 0px 0px;
    }
}
</style>