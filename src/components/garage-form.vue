<script setup lang="ts">
import { ref } from 'vue'

const emit = defineEmits<{
  (e: 'submit'): void
}>()

const color = ref('#000000')
const name = ref('')

const onSubmit = (event: Event) => {
  event.preventDefault()

  emit('submit', name.value, color.value)
}
</script>

<template>
  <form @submit="onSubmit">
    <input type="color" v-model="color" />
    <input type="text" v-model="name" />
    <button type="submit">Create</button>
  </form>
</template>

<style scoped></style>
