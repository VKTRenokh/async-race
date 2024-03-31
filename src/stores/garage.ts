import {
  isCar,
  isCarArray,
  type Car,
} from '@/interfaces/car'
import { request } from '@/utils/request'
import { defineStore } from 'pinia'
import { ref } from 'vue'

const validateCars = (cars: unknown) => {
  if (!isCarArray(cars)) {
    throw 'invalid data'
  }

  return cars
}

const validateCar = (car: unknown) => {
  if (!isCar(car)) {
    throw 'invalid data'
  }

  return car
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

  const createCar = async (name: string, color: string) =>
    request(
      '/garage',
      {
        method: 'POST',
        body: JSON.stringify({ name, color }),
      },
      validateCar,
    ).then((car) => {
      cars.value.push(car)
    })

  return {
    cars,
    getCars,
    deleteCar,
    createCar,
  }
})
