<template>
    <nav class="main-nav">
        <img class="main-nav__logo" src="http://lorempixel.com/400/400" />
        <ul class="main-nav__menu">
            <li class="main-nav__menu-item" v-for="(item, index) in menu" :key="index">
                <a class="main-nav__menu-item-link" href="#">
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
                {text: 'The dying bee'},
                {text: 'The causes'},
                {text: 'What can we do?'}
            ]
        }
    }
}
</script>

<style scoped lng="CSS">
.main-nav {
    display: grid;
    grid-template-columns: 1fr 10fr;
    margin: 6vh 4vw 6vh 5vw;
}

.main-nav__logo {
    width: auto;
    height: 100%;
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
    .main-nav {
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 1.5fr;
    }

    .main-nav__menu {
        text-align:center;
        display: block;
    }

    .main-nav__menu-item {
        display: block;
        margin: 15px 0px 0px 0px;

    }

    .main-nav__logo {
        margin: 0 auto;
    }
}
</style>