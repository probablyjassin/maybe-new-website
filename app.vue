<template>
	<div>
		<nav class="bg-cyan-700 pt-3 pl-3 pb-3">
			<nuxt-link to="/">cd /</nuxt-link>
		</nav>
		<NuxtPage />
	</div>
</template>

<script setup lang="js">
	const projects = useState('projects', (() => []));
	const items = useState('items', (() => []));

	onMounted(async () => {
		await $fetch("/projects.json").then((response) => {
			projects.value = response
			projects.value.forEach(project => {
				items.value.push({'img': `/images/${project.id}.webp`, 'to': `/projects/${project.id}`})
			});
		})
	})
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
  transform: rotate(10deg);
}
</style>