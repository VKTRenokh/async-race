export interface DriveResponse {
  velocity: number
  distance: number
}

export const isDriveResponse = (
  value: unknown,
): value is DriveResponse =>
  !!value &&
  typeof value === 'object' &&
  'velocity' in value &&
  typeof value.velocity === 'number' &&
  'distance' in value &&
  typeof value.distance === 'number'

export const validateDriveResponse = (value: unknown) => {
  if (!isDriveResponse(value)) {
    throw 'invalid data'
  }

  return value
}
