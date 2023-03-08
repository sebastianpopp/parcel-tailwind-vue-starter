<template>
    <div class="min-h-screen flex justify-center items-center">
        <h1 class="text-4xl font-light tracking-tight sm:text-6xl">Hello {{ name }}!</h1>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                name: "Vue",
            };
        },
    };
</script>
