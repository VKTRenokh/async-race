import { isCarArray, type Car } from '@/interfaces/car'
import { request } from '@/utils/request'
import { defineStore } from 'pinia'
import { ref } from 'vue'

const validateCars = (cars: unknown) => {
  if (!isCarArray(cars)) {
    throw 'invalid data'
  }

  return cars
}

export const useGarage = defineStore('garage', () => {
  const cars = ref<Car[]>([])

  const getCars = async () => {
    const newCars = await request(
      '/garage',
      {},
      validateCars,
    )

    cars.value = newCars

    return cars
  }

  const deleteCar = async (id: number) => {
    request(`/garage/${id}`, { method: 'DELETE' }).then(
      () =>
        (cars.value = cars.value.filter(
          (car) => car.id !== id,
        )),
    )
  }

  return {
    cars,
    getCars,
    deleteCar,
  }
})
