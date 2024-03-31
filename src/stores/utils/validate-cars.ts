import { isCarArray } from '@/interfaces/car'
import { invalidDataError } from '../constants/error'

export const validateCars = (cars: unknown) => {
  if (!isCarArray(cars)) {
    throw invalidDataError
  }

  return cars
}
