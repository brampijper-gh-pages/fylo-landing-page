<template>
    <button>{{buttonText}}</button>
</template>

<script>
export default {
    props: {
        buttonText: String,
    }
}
</script>

<style scoped>
button {
    width: 190px;
    height: 43px;
    border-radius: 13px;
    border: 0px;
    padding: 0px;
    color: white; 
    background: linear-gradient(90deg, hsl(198, 60%, 50%) 50%, hsl(176, 68%, 64%) 105%);
    transition: all .3s ease-out;
}

button:hover {
    transform: scale(1.08);
    cursor: pointer;
    will-change: auto;
}
</style>