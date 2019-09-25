<template>
    <nav class="main-nav">
        <img src="https://picsum.photos/50/50" class="main-nav__logo" />
        <ul class="main-nav__menu">
            <li class="main-nav__menu-item">
                <a class="main-nav__menu-item-link" href="#">
                    The dying bee
                </a>
            </li>
            <li class="main-nav__menu-item">
                <a class="main-nav__menu-item-link" href="#">
                    The causes
                </a>
            </li>
            <li class="main-nav__menu-item">
                <a class="main-nav__menu-item-link" href="#">
                    What can we do?
                </a>
            </li>
            <li class="main-nav__menu-item">
                <a class="main-nav__menu-item-link" href="#">
                    
                </a>
            </li>
        </ul>
    </nav>
</template>

<style scoped lng="CSS">
.main-nav {
    display: grid;
    grid-template-columns: 1fr 10fr;
}

.main-nav__logo {
    flex-grow: 0;
    width: 50px;
    height: 50px;
}

.main-nav__menu {
    margin: 0;
    padding: 0;
    list-style-type: none;
    text-align:right;
}

.main-nav__menu-item {
    display: inline;
    margin: 0px 25px 0px 0px;
}

.main-nav__menu-item-link {
    text-decoration: none;
}
</style>