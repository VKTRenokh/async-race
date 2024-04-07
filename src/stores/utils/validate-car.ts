import { invalidDataError } from '../constants/error'
import { isCar } from '@/interfaces/car'

export const validateCar = (car: unknown) => {
  if (!isCar(car)) {
    throw invalidDataError
  }

  return car
}
