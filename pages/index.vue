<template>
	<!-- <div class="h-screen p-60" style="background-image: url('/images/mos-design-V9WkSZx4TLc-unsplash.webp')"> -->
	<UCard class="mx-auto w-[60%] text-4xl p-5">
		<p>Hi there, I enjoy...</p>
		<p @mouseover="newWord(word)" class="w-full text-text-white-500">{{ word }}</p>
		<UCarousel v-slot="{ item }" :items="items" class="carousel">
			<img :src="item.img" width="300" height="400" draggable="false" @click="router.push(item.to)" />
		</UCarousel>
	</UCard>
	<!-- </div> -->
</template>

<script setup lang="js">
	const router = useRouter()

	const word = ref("working with tech")
	const words = ['building websites', 'working with databases', 'working with my Raspberrypi']

	const randomWord = (inword) => {
		let canidate = words[Math.floor(Math.random() * words.length)]
		if (canidate == inword) return randomWord(inword)
		return canidate
	}

	const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
	const randomChar = () => {
		return characters[Math.floor(Math.random() * characters.length)]
	}

	function newWord(inword) {
		const newRandomWord = randomWord(inword)
		let iterations = 0
		const interval = setInterval(() => {
			if (iterations >= newRandomWord.length+1) return

			let newWord = "";
			for (let i in newRandomWord) {
				if (i < iterations) {
					newWord += newRandomWord[i]
					continue
				}
				newWord += randomChar()
			}
			word.value = newWord
			iterations += 1
		}, 30);
	}

	const items = [
	  {"img": 'https://fastly.picsum.photos/id/585/600/800.jpg?hmac=RWepawYNGnJRCBtuuexn16PXp7PgI8xxY54_WQtPqG8', "to": "/projects"},
	]
</script>

<style>
	UCarousel {
		img {
			view-transition-name: image-y;
		}
	}
</style>
