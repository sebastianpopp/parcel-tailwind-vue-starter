<template>
    <div class="min-h-screen flex justify-center items-center">
        <h1 class="text-4xl font-light tracking-tight sm:text-6xl cursor-pointer" @click="toggle">Hello {{ name }}!</h1>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const name = ref('Vue');
const toggle = () => {
    name.value = name.value === 'Vue' ? 'World' : 'Vue';
};
</script>
