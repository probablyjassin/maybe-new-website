<template>
    <UCarousel v-slot="{ item }" :items="items" class="ml-20 w-60 snap-none" :ui="{'item': 'basis-full'}">
				<img
					:src="item.img"
					class="max-h-[55vh] snap-none cursor-pointer rounded-lg"
					draggable="false"
					:style="{ 'view-transition-name': `${item.to.split('/')[2]}` }"
					@mousedown="mDown($event, item.to)"
					@mouseup="mUp($event)"
					indicators />
			</UCarousel>
</template>

<script setup>
const items = useState('items')
</script>