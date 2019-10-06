<template>
    <footer class="footer">
        <img class="footer__logo" src="assets/images/logo.svg" />
        <ul class="footer__footer-list">
            <li class="footer-list__intro">
                <span> 
                    <font-awesome-icon icon="map-marker-alt" />
                </span>
                
                <p class="paragraph--spacing">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem, vitae amet, modi,
                    cum impedit at enim ad dolores harum quis autem dignissimos quaerat.
                </p>
            </li>

            <li class="footer-list__contact">
                <article class="contact__details">
                    <font-awesome-icon icon="phone" />
                    <p class="paragraph--spacing">
                        +3102049495 
                    </p>
                </article>
                <article class="contact__details">
                    <font-awesome-icon icon="envelope" />
                    <p class="paragraph--spacing">
                        exp@fylo.com 
                    </p>
                </article>
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
                <a href="#">
                    <font-awesome-icon class="social__icons" size="2x" :icon="[ 'fab', 'facebook-square' ]" />      
                </a>   

                <a href="#">
                    <font-awesome-icon class="social__icons" size="2x" :icon="[ 'fab', 'twitter-square' ]" />         
                </a>   

                <a href="#">
                    <font-awesome-icon class="social__icons" size="2x" :icon="[ 'fab', 'instagram' ]" />         
                </a>    
            </li>
        </ul>

    </footer>
</template>

<style scoped>

.footer {
    margin-top: -115px;
    padding: 230px 4vw 50px 4vw;
    background-color: hsl(216, 53%, 9%);
}

.footer__logo {
    margin-bottom: 30px;
    max-width: 175px;
}
.footer__footer-list {
    display: grid;
    grid-template-columns: 2fr 1.5fr 1fr 1fr 1.5fr;
    gap: 5px;
    justify-items: center;
    list-style-type: none;
    padding: 0;
}

.footer-list__intro {
    display:flex;
    align-items:flex-start;
}

.paragraph--spacing {
    display: inline;
    margin: 0;
    padding: 0;
    margin-left: 10px;
}

.contact__details {
    display:block;
    margin-bottom: 20px;
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
    display: flex;
    margin: 0 auto;
}

.social__icons {
    margin: 0px 0.8vw 0px 0.8vw;
}

@media screen and (max-width: 480px) {
    .footer {
        margin-top: -195px;
    }

    .footer__logo {
        margin-top: 75px;
    }

    .footer__footer-list {
        grid-template-columns: 1fr;
        grid-template-rows: 0.7fr 1fr 1fr 1fr 1fr;
        justify-items: flex-start;
        align-items:center;
    }

    .social__icons {
        margin: 0px 4vw 0px 4vw;
    }
}
</style>