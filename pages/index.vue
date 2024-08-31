<template>
	<div class="mx-[15%] mt-[5%] md:flex">
		<div class="sm:order-1 md:order-2">
			<img src="/images/pfp.webp" alt="avatar" class="w-32 h-32 md:w-52 md:h-52 rounded-full" />
		</div>
		<div class="md:w-1/2">
			<div class="text-3xl space-y-3">
				<p>{{ $t('welcome') }}</p>
				<p>{{ $t('text') }}</p>
				<p>{{ $t('subhead') }}</p>
				<div class="flex flex-col space-y-3 text-text-white-400 underline">
					<nuxt-link to="/web">{{ $t('web') }}</nuxt-link>
					<nuxt-link to="/bots">{{ $t('bots') }}</nuxt-link>
					<nuxt-link to="/other">{{ $t('other') }}</nuxt-link>
				</div>
			</div>
			<br><br>
			<!-- <nuxt-link to="https://vtuber-style-logos.vercel.app/">
				<p class="text-5xl">Stuff that I use:</p>
				<div class="grid grid-cols-3">
					<img :src="`/images/tech/${i}.png`" alt="icon" v-for="i in 9">
				</div>
			</nuxt-link> -->
		</div>
	</div>
</template>

<script setup>
	
</script>
