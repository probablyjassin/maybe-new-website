<template>
	<div class="mx-[20%]">
		<div class="flex justify-center items-center">
			<p class="text-[500%]">hi!</p>
			<img src="/images/pfp.webp" alt="avatar" class="w-32 h-32 rounded-full" />
		</div>
		<br />
		<div class="text-3xl space-y-3">
			<p>I'm Jässin!</p>
			<p>Sometimes I do things with computers.</p>
			<div class="flex flex-col space-y-3 text-text-white-400 underline">
				<nuxt-link to="/web">Like making websites like this one,</nuxt-link>
				<nuxt-link to="/bots">coding discord bots,</nuxt-link>
				<nuxt-link to="/other">or just anything that interests me!</nuxt-link>
			</div>
		</div>
		<br><br>
		<nuxt-link to="https://vtuber-style-logos.vercel.app/">
			<p class="text-5xl">Stuff that I use:</p>
			<div class="grid grid-cols-3">
				<img :src="`/images/tech/${i}.png`" alt="icon" v-for="i in 9">
			</div>
		</nuxt-link>
	</div>
</template>

<script setup>
	
</script>
