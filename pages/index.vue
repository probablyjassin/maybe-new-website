<template>
	<div class="h-[100vh] px-[10%]" style="background-image: url('/images/mos-design-V9WkSZx4TLc-unsplash.webp')">
		<div class="w-full px-[10%] py-[5vh]">
			<UCard class="text-4xl px-5">
				<div class="justify-center">
					<div class="flex align-middle snap-center text-center">
						<img src="/images/pfp.webp" alt="avatar" class="w-20" />
						<p class="self-center text-center">Jässin</p>
					</div>
					<p>Hi there, I enjoy...</p>
				</div>
				<p @mouseover="newWord(word)" class="text-text-white-500">{{ word }}</p>
			</UCard>
		</div>
		<div class="flex w-full my-auto justify-center items-center">
			<UCarousel v-slot="{ item }" :items="items" class="px-[10%] snap-none" :ui="{'item': 'basis-full'}">
				<img
					:src="item.img"
					class="max-h-[65vh] w-full snap-none cursor-pointer rounded-lg"
					draggable="false"
					:style="{ 'view-transition-name': `${item.to.split('/')[2]}` }"
					@mousedown="mDown($event, item.to)"
					@mouseup="mUp($event)"
					indicators />
			</UCarousel>
		</div>
	</div>
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
			setInterval(() => {
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

			if (x == latestClick.value[0] && y == latestClick.value[1]) {
				router.push(targetLink.value)
			}
			latestClick.value = []
			targetLink.value = ""
		}
</script>
