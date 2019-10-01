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
    width: 200px;
    height: 50px;
    border-radius: 15px;
    border: 0px;
    padding: 0px;
    color: white; 
    background: linear-gradient(90deg, hsl(198, 60%, 50%) 50%, hsl(176, 68%, 64%) 105%);
}
</style>