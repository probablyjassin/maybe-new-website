<template>
    <div class="flex justify-center">
        <img :src="`/images/${projectName}.webp`" alt="project representation" class="max-w-[70%] self-center" :style="{ 'view-transition-name': `${projectName}`}">
    </div>
    <div class="flex flex-col items-center">
        <h1 class="text-4xl">{{ project.title }}</h1>
        <p>{{ project.description }}</p>
        <NuxtLink to="/" class="bg-fuchsia-primary-950 hover:bg-fuchsia-primary-900 p-3 rounded-lg">zurück :3</NuxtLink>
    </div>
</template>

<script setup>
    const route = useRoute()
    const projects = useState('projects')

    const projectName = ref(route.path.split('/')[2])
    const project = ref(computed(() => projects.value.filter((item) => item.id == projectName.value)[0]))
</script>

