<template>
    <div class="flex justify-center">
        <img :src="`/images/${project}.webp`" alt="project representation" class="max-w-[70%] self-center" :style="{ 'view-transition-name': `${project}`}">
        </div>
    <NuxtLink to="/">zurück :3</NuxtLink>
</template>

<script setup>
    const route = useRoute()
    const project = ref(route.path.split('/')[2])
</script>
