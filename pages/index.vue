<template>
	<div class="h-[60vh] px-[5%] py-[5vh]" style="background-image: url('/images/mos-design-V9WkSZx4TLc-unsplash.webp')">
		<UCard class="mx-auto text-4xl p-5 flex justify-center">
			<div class="flex align-middle snap-center text-center">
				<img src="/images/pfp.webp" alt="avatar" class="w-20">
				<p class="self-center text-center">Jässin</p>
			</div>
			<div>
				<p>Hi there, I enjoy...</p>
				<p @mouseover="newWord(word)" class=" text-text-white-500">{{ word }}</p>
			</div>
		</UCard>
	</div>
	<UCarousel v-slot="{ item }" :items="items" class="h-[20vh] carousel snap-none" ref="carouselRef">
		<img
			:src="item.img"
			class="h-[40vh] snap-none cursor-pointer"
			draggable="false"
			:style="{ 'view-transition-name': `${item.to.split('/')[2]}` }"
			@mousedown="mDown($event, item.to)"
			@mouseup="mUp($event)"
			indicators />
	</UCarousel>
</template>

<script setup lang="js">
		const router = useRouter()

		const items = useState('items')
		const projects = useState('projects')

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

		const latestClick = ref([])
		const targetLink = ref("")

		function mDown(event, to) {
			latestClick.value.push(event.screenX)
			latestClick.value.push(event.screenY)
			targetLink.value = to
		}

		function mUp(event) {
			let x = event.screenX
			let y = event.screenY
			console.log(`diff x: ${(x - latestClick.value[0]) / latestClick.value[0]}`)
			console.log(`diff y: ${(y - latestClick.value[1]) / latestClick.value[1]}`)

			if (x == latestClick.value[0] && y == latestClick.value[1]) {
				router.push(targetLink.value)
			}
			latestClick.value = []
			targetLink.value = ""
		}


	const carouselRef = ref()
	onMounted(() => {
	  setInterval(() => {
	    if (!carouselRef.value) return

	    if (carouselRef.value.page === carouselRef.value.pages) {
	      return carouselRef.value.select(0)
	    }

	    carouselRef.value.next()
	  }, 3000)
	})
</script>
