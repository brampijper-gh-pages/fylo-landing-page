<template>
    <nav class="main-nav">
        <img class="main-nav__logo" src="/assets/images/logo.svg" />
        <ul class="main-nav__menu">
            <li class="main-nav__menu-item" v-for="(item, index) in menu" :key="index">
                <a class="main-nav__menu-item-link" href="#" @click.prevent="calculateScrollHeight(item.linkedSection)">
                    {{ item.text }}
                </a>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
    data() {
        return {
            menu: [
                {text: 'Features', linkedSection: 'a-section'},
                {text: 'Reviews', linkedSection: 'b-section'},
                {text: 'Contact', linkedSection: 'c-section'}
            ]
        }
    },
    methods: {
        calculateScrollHeight(linkedSection) {
            const sectionArr = Array.from(document.getElementsByClassName(linkedSection))

            if(sectionArr.length) {
                const offsetHeight = sectionArr[0].offsetHeight;
                const offsetTop = sectionArr[0].offsetTop;
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

<style scoped>
.main-nav {
    display: grid;
    grid-template-columns: 1fr 10fr;
    margin: 6vh 4vw 6vh 5vw;
}

.main-nav__logo {
    width: 100%;
    min-width: 60px;
    height: auto;
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
        margin: 6vh 4vw 6vh 2vw;
    }

    .main-nav__menu-item {
        margin: 0px 20px 0px 0px;
    }
}
</style>