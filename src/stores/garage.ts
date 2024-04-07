import { type Car } from '@/interfaces/car'
import { request } from '@/utils/request'
import { defineStore } from 'pinia'
import { ref } from 'vue'
import { validateCars } from './utils/validate-cars'
import { validateCar } from './utils/validate-car'
import { validateDriveResponse } from '@/interfaces/drive-response'

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

  const startCar = async (id: number) =>
    request(
      `/engine?id=${id}&status=started`,
      { method: 'PATCH' },
      validateDriveResponse,
    )

  return {
    cars,
    getCars,
    deleteCar,
    createCar,
    startCar,
  }
})
