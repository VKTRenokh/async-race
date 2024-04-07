<script setup lang="ts">
import { useGarage } from '@/stores/garage'
import { onMounted, ref } from 'vue'
import { car as Car } from '@/components/car'
import GarageForm from '@/components/garage-form.vue'

const errorMessage = ref<null | string>(null)

const garage = useGarage()

const showErrorMessage = (e: string) =>
  (errorMessage.value = e)

const handleSubmit = (name: string, color: string) => {
  garage.createCar(name, color)
}

const carStartHandler = (id: number) => {
  return garage.startCar(id)
}

onMounted(() => {
  garage.getCars().catch(showErrorMessage)
})
</script>

<template>
  <p v-if="errorMessage">{{ errorMessage }}</p>

  <garage-form @submit="handleSubmit" />

  <template v-for="car in garage.cars" :key="car.id">
    <Car
      :car="car"
      @delete="garage.deleteCar(car.id)"
      @start="carStartHandler(car.id)"
    ></Car>
  </template>
</template>

<style scoped></style>
