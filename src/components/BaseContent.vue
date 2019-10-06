<template>
    <main role="main" class="main">

        <div class="a-section">
            <img class="a-section__img" src="assets/images/illustration-intro.png" />
            <article class="a-section__article">
                <h1> All your files in one secure location</h1>
                <p> 
                    Filo stores all your most important files in one secure location.
                    Access them wherever you need, share and collaborate with friends family and co-workers.
                </p>
            </article>
            <primary-button button-text="Get Started"> </primary-button>
        </div>

        <div class="b-section">
            <div class="b-section__icon-grid" v-for="(article, index) in articles" :key="index">
                <img class="icon-grid__img" :src="article.image" />
                <h3> {{ article.title }} </h3>
                <p> {{ article.paragraph }} </p>
            </div>
        </div>

        <div class="c-section">
            <img class="c-section__img" src="assets/images/illustration-stay-productive.png" />
            <article class="c-section__article">
                <h1> Stay productive, wherever you are</h1>
                <p>
                    Never let location be an issue when accessing your files. 
                    Fylo has you covered for all of your file storage needs.
                </p>

                <p>
                    Securely share files and folders with friends,
                    family and colleagues for live collaboration. No
                    email attachments required.
                </p>
                <primary-button class="c-section__button" buttonText="See how Fylo works" />
            </article>
        </div>

        <div class="d-section">
            <img class="d-section__img" src="assets/images/bg-quotes.png" />
            <div class="d-section__card" v-for="(person, index) in cards" :key="index"> 
                <p class="d-section__intro"> {{ person.intro }} </p>

                <section class="d-section__article">
                    <img class="d-section__article-image" :src="person.image" />
                    <article>
                        <h3 class="d-section__title"> {{person.name }} </h3>
                        <sub> {{person.title }} </sub>
                    </article>
                </section>
            </div>
        </div>

        <div class="e-section">
            <h1 class="e-section__title"> Get early access today </h1>
            <p class="e-section__paragraph"> 
                It only takes minutes to sign up and our free starter tier is extremely generous. 
                If you have any questions, our support team is happy to help you 24/7.
            </p>

            <div class="e-section__input">
                <input class="input__field" placeholder="Your emailadress ;-)" />
                <primary-button buttonText="Get started for FREE"/>
            </div>
        </div>
    </main>
</template>

<script>
import PrimaryButton from "./PrimaryButton.vue"

export default {
    components: {
        PrimaryButton
    },
    data() {
        return {
            articles: [
                {
                    title: "Access your files, anywhere",
                    paragraph: "The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere.",
                    image: "assets/images/icon-access-anywhere.svg"
                },
                {
                    title: "Security you can trust",
                    paragraph: "2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files",
                    image: "assets/images/icon-security.svg"
                },
                {
                    title: "Real-time collaboration",
                    paragraph: "Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.",
                    image: "assets/images/icon-collaboration.svg"
                },
                {
                    title: "Store any type of file",
                    paragraph: "Wether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared.",
                    image: "assets/images/icon-any-file.svg",
                },

            ],
            cards: [
                {
                    intro:  "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
                    image: "assets/images/profile-1.jpg",
                    name: "Satish Patel",
                    title: "Founder & CEO, Huddle"
                },
                {
                    intro:  "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
                    image: "assets/images/profile-2.jpg",
                    name: "Bruce McKenzie",
                    title: "Founder & CEO, Huddle"
                },
                {
                    intro:  "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
                    image: "assets/images/profile-3.jpg",
                    name: "Iva Boyd",
                    title: "Founder & CEO, Huddle"
                },
            ]
        }
    }
}
</script>

<style scoped>
.main {
    display: grid;
    grid-template-columns: 1fr;
    width: calc(100vw - (100vw - 100%));
    margin: 0 auto;
    text-align:center;
}

.a-section {
    margin: 0 auto;
    width: 85%;
    margin-bottom: 75px;
}

.a-section__img {
    max-width: 550px;
    min-width: 300px;
    width: 75%;
    height: auto;
}

.a-section__article {
    max-width: 400px;
    margin: 0 auto;
    margin-bottom: 25px;
    margin-top: 30px;
}

.b-section {
    gap: 40px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    margin-top: 100px;
    margin-bottom: 100px;
}

.b-section__icon-grid {
    margin: 0 auto;
    padding: 20px;
    max-width: 300px;
}

.icon-grid__img {
    height: 75px;
    width: auto;
}

.c-section {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    gap: 1vw;
    align-items:center;
    justify-items: end;
    margin: 0 auto;
    margin-bottom: 95px;
    margin-top: 25px;
}

.c-section__img {
    max-width: 550px;
    min-width: 210px;
    width: 75%;
    height: auto;
}

.c-section__article {
    margin: 0 auto;
    max-width: 375px;
    text-align:left;
    width: 75%;
    
}

.c-section__button {
    margin-top: 10px;
}

.d-section {
    width: 60vw;
    display: grid;
    grid-template-columns: 1fr;
    margin: 0 auto;
    margin-bottom: 200px;
    margin-top: 75px;
}

.d-section__card {
    padding-bottom: 15px;
    margin: 0 auto;
    background-color: hsl(219, 30%, 18%);
    margin: 15px;
    -webkit-box-shadow: 2px 2px 5px -1px rgba(0,0,0,0.56);
    -moz-box-shadow: 2px 2px 5px -1px rgba(0,0,0,0.56);
    box-shadow: 2px 2px 5px -1px rgba(0,0,0,0.56);
    color: hsl(0, 0%, 100%);
}

.d-section__img {
    position:absolute;
    width: 35px;
    height:auto;
}

.d-section__intro {
    font-style:italic;
    margin: 0 auto;
    width: 85%;
    margin-bottom: 15px;
    margin-top: 15px;
}

.d-section__article {
    display: grid;
    grid-template-columns: 1fr 2fr;
    width: 75%;
    justify-items: center;
    align-items: center;
    margin: 0 auto;
}

.d-section__title{
    margin: 0;
    padding: 0;
}

.d-section__article-image {
    width: 50px;
    height: 50px;
    float:left;
    border-radius: 50%;
}

.e-section {
    z-index:1;
    width: 55%;
    background-color: hsl(217, 28%, 15%);
    margin: 0 auto;
    border-radius: 10px;
    padding: 35px;
    -webkit-box-shadow: 2px 2px 5px -1px rgba(0,0,0,0.56);
    -moz-box-shadow: 2px 2px 5px -1px rgba(0,0,0,0.56);
    box-shadow: 2px 2px 5px -1px rgba(0,0,0,0.56)
}

.e-section__title {
    margin-top: 0px;
}

.e-section__paragraph {
    width: 60%;
    margin: 0 auto;
    padding: 5px 0px 30px 0px;
}

.e-section__input {
    display: grid;
    grid-template-columns: 1fr;
    align-items: center;
    justify-items: center;;
    gap: 15px;
    margin: 0 auto;
    width: 70%;
}

.input__field {
    width: 100%;
    border-radius: 13px;
    height: 43px;
    border: 0px;
    text-align:center;
}

/* only for smartphones */
@media screen and (max-width: 480px) {
    .main {
        width: 100vw;
    }

    .b-section {
        grid-template-columns: 1fr;
    }

    .c-section {
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 1fr;
        justify-items: center;
    }

    .c-section__article {
        text-align:center;
    }

    .d-section {
        width: 90vw;
    }

    .e-section {
        width: 70%;
    }
}

/* for wide resolution screens */
@media screen and (min-width: 850px) {
    .d-section {
        width: 85vw;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
    }

    .e-section__input {
        grid-template-columns: 2fr 1fr;
        justify-items:end;
        gap: 15px;
        width: 70%;   
    }
}
</style>