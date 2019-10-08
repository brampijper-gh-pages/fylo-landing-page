<template>
    <button @click="onClick" :class="'Button ' + buttonSize">
        <slot>Button</slot>
    </button>
</template>

<script>
export default {
    props: {
        buttonSize: String,
        onClick: {
            type: Function,
            required: true
        }
    }
}
</script>

<style scoped>

.big {
    width: 190px;
    height: 43px;
}

.small {
    width: 130px;
    height: 43px;
}

.Button {
    border-radius: 13px;
    border: 0px;
    padding: 0px;
    color: white; 
    background: linear-gradient(90deg, hsl(198, 60%, 50%) 50%, hsl(176, 68%, 64%) 105%);
    transition: all .3s ease-out;
}

.Button:hover {
    transform: scale(1.08);
    cursor: pointer;
    will-change: auto;
}
</style>