import { isCar } from '@/interfaces/car'
import { invalidDataError } from '../constants/error'

export const validateCar = (car: unknown) => {
  if (!isCar(car)) {
    throw invalidDataError
  }

  return car
}
