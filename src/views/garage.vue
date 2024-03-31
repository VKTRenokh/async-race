<script setup lang="ts">
import { useGarage } from '@/stores/garage'
import { onMounted, ref } from 'vue'

const errorMessage = ref<null | string>(null)

const garage = useGarage()

const showErrorMessage = (e: string) =>
  (errorMessage.value = e)

onMounted(() => {
  garage.getCars().catch(showErrorMessage)
})
</script>

<template>
  {{ garage.cars }}

  <p v-if="errorMessage">{{ errorMessage }}</p>
</template>

<style scoped></style>
