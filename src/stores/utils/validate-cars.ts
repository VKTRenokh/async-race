import { invalidDataError } from '../constants/error'
import { isCarArray } from '@/interfaces/car'

export const validateCars = (cars: unknown) => {
  if (!isCarArray(cars)) {
    throw invalidDataError
  }

  return cars
}
