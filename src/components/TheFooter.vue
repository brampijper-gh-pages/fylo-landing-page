<template>
    <footer class="footer">
        <img class="footer__logo" src="assets/images/logo.svg" />
        <ul class="footer__footer-list">
            <li>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem, vitae amet, modi,
                cum impedit at enim ad dolores harum quis autem dignissimos quaerat.
            </li>

            <li>
                <span> +31020 4930 49 </span>
                <br />
                <br />
                <span> example@fylo.com </span>
            </li>

            <ul class="footer-list__menu">
                <li><a href="#"> About Us </a></li>
                <li class="menu__items"><a href="#"> Jobs </a></li>
                <li class="menu__items"><a href="#"> Press </a></li>
                <li class="menu__items"><a href="#"> Blog </a></li>
            </ul>

            <ul class="footer-list__menu">
                <li><a href="#"> Contact Us </a></li>
                <li class="menu__items"><a href="#"> Terms </a></li>
                <li class="menu__items"><a href="#"> Privacy </a></li>
            </ul>

            <li class="footer-list__social">
               <font-awesome-icon size="2x" :icon="[ 'fab', 'facebook-square' ]" />         
               <font-awesome-icon size="2x" :icon="[ 'fab', 'twitter-square' ]" />         
               <font-awesome-icon size="2x" :icon="[ 'fab', 'instagram' ]" />         
            </li>

        </ul>

    </footer>
</template>

<style scoped>

.footer {
    padding: 200px 4vw 150px 4vw;
    background-color: hsl(216, 53%, 9%);
}

.footer__logo {
    margin-bottom: 15px;
    max-width: 175px;
}
.footer__footer-list {
    display: grid;
    grid-template-columns: 2fr 1.5fr 1fr 1fr 1fr;
    gap: 5px;
    justify-items: center;
    list-style-type: none;
    padding: 0;
}

.footer-list__menu {
    margin: 0;
    padding: 0;
    list-style-type: none;
}

.footer-list__menu .menu__items {
    margin-top: 20px;
}

.footer-list__social {
    display: inline-block;
    margin: 0 auto;
}

.footer-list__social svg {
    margin: 0px 10px 0px 10px;
}

@media screen and (max-width: 480px) {
    .footer__footer-list {
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
        justify-items: flex-start;
        align-items:center;
    }
}
</style>