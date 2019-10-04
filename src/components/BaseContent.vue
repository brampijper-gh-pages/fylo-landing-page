<template>
    <main role="main" class="main">

        <div class="main__first-section">
            <img class="main__first-section-img" src="assets/images/illustration-intro.png" />
            <article class="main__first-section-article">
                <h1> All your files in one secure location</h1>
                <p> 
                    Filo stores all your most important files in one secure location.
                    Access them wherever you need, share and collaborate with friends family and co-workers
                </p>
            </article>
            <primary-button button-text="Get Started"> </primary-button>
        </div>

        <div class="main__second-section">
            <article clas="main__second-section-article" v-for="(article, index) in articles" :key="index">
                <img class="main__second-section-img" :src="article.image" />
                <h3> {{ article.title }} </h3>
                <p> {{ article.paragraph }} </p>
            </article>
        </div>

        <div class="main__third-section">
            <img class="main__third-section-img" src="assets/images/illustration-stay-productive.png" />
            <article class="main__third-section-article">
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
                <primary-button buttonText="See how Fylo works" />
            </article>
        </div>

        <div class="main__fourth-section">
            <img class="main__fourth-section-image" src="assets/images/bg-quotes.png" />
            <div class="main__fourth-section-card" v-for="(person, index) in cards" :key="index"> 
                <p class="main__fourth-section-card-intro"> {{ person.intro }} </p>

                <section class="main__fourth-section-article">
                    <img class="main__fourth-section-article-image" :src="person.image" />
                    <article>
                        <h3> {{person.name }} </h3>
                        <sub> {{person.title }} </sub>
                    </article>
                </section>
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
                    paragraph: "Wheter you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared.",
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

.main__first-section {
    margin: 0 auto;
    width: 85%;
    margin-bottom: 75px;
}

.main__first-section-img {
    max-width: 550px;
    min-width: 300px;
    width: 75%;
    height: auto;
}

.main__first-section-article {
    max-width: 50vw;
    margin: 0 auto;
}

.main__second-section {
    width: 70%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    margin-bottom: 75px;
}

.main__second-section-img {
    height: 75px;
    width: auto;
}

.main__second-section-title {
    margin-bottom: 50px;
}

.main__third-section {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    align-items:center;
    /* width: 75vw; */
    margin: 0 auto;
    margin-bottom: 85px;

}

.main__third-section-img {
    max-width: 400px;
    min-width: 175px;
    width: 75%;
    height: auto;
    margin: 0 auto;
}

.main__third-section-article {
    margin: 0 auto;
    width: 75%;
}

.main__fourth-section {
    width: 60vw;
    display: grid;
    grid-template-columns: 1fr;
    margin: 0 auto;
}

.main__fourth-section-card {
    padding-bottom: 15px;
    margin: 0 auto;
    background-color: hsl(219, 30%, 18%);
    margin: 15px;
    -webkit-box-shadow: 2px 2px 5px -1px rgba(0,0,0,0.56);
    -moz-box-shadow: 2px 2px 5px -1px rgba(0,0,0,0.56);
    box-shadow: 2px 2px 5px -1px rgba(0,0,0,0.56);
    color: hsl(0, 0%, 100%);
}

.main__fourth-section-image {
    position:absolute;
    width: 35px;
    height:auto;
}

.main__fourth-section-card-intro {
    font-style:italic;
    margin: 0 auto;
    width: 85%;
    margin-bottom: 15px;
    margin-top: 15px;
}

.main__fourth-section-article {
    display: grid;
    grid-template-columns: 1fr 2fr;
    width: 75%;
    justify-items: center;
    align-items: center;
    margin: 0 auto;
}

.main__fourth-section-article h3{
    margin: 0;
    padding: 0;
}

.main__fourth-section-article-image {
    width: 50px;
    height: 50px;
    float:left;
    border-radius: 50%;
}


/* only for smartphones */
@media screen and (max-width: 480px) {
    .main {
        width: 100vw;
    }

    .main__first-section-article {
        max-width: 95vw;
    }

    .main__second-section {
        width: 75vw;
        grid-template-columns: 1fr;
    }

    .main__third-section {
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 1fr;
    }

    .main__third-section-article {
        text-align:center;
        width: 85vw;
    }
}

/* for wide resolution screens */
@media screen and (min-width: 850px) {
       .main__first-section-article {
        max-width: 35vw;
    } 

    .main__fourth-section {
        width: 85vw;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
    }
}
</style>