<template>
	<div>
		<nav class="bg-cyan-700 flex justify-between py-3 px-3">
			<nuxt-link to="/">cd /</nuxt-link>
			<img :src="`/images/lang/${locale == 'en' ? 'de' : 'en'}.png`" class="w-8 hover:scale-105 transition-all duration-75" alt="language icon" @click="switchLocale()">
		</nav>
		<NuxtPage />
	</div>
</template>

<script setup lang="js">
	const { locale, setLocale } = useI18n()
	function switchLocale() {
		if (locale.value == "en") return setLocale("de")
		if (locale.value == "de") return setLocale("en")
		return setLocale("en")
	}

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