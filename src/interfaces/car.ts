export interface Car {
  name: string
  color: string
  id: number
}

export const isCar = (value: unknown): value is Car => {
  return (
    !!value &&
    typeof value === 'object' &&
    'name' in value &&
    typeof value.name === 'string' &&
    'color' in value &&
    typeof value.color === 'string' &&
    'id' in value &&
    typeof value.id === 'number'
  )
}

export const isCarArray = (
  value: unknown,
): value is Car[] =>
  Array.isArray(value) && value.every(isCar)
