<template>
	<div>
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
