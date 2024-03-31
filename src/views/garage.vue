<script setup lang="ts">
import { useGarage } from '@/stores/garage'
import { onMounted, ref } from 'vue'
import { car as Car } from '@/components/car'

const errorMessage = ref<null | string>(null)

const garage = useGarage()

const showErrorMessage = (e: string) =>
  (errorMessage.value = e)

onMounted(() => {
  garage.getCars().catch(showErrorMessage)
})
</script>

<template>
  <p v-if="errorMessage">{{ errorMessage }}</p>

  <template v-for="car in garage.cars" :key="car.id">
    <Car
      :car="car"
      @delete="garage.deleteCar(car.id)"
    ></Car>
  </template>
</template>

<style scoped></style>
