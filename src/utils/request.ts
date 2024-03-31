const toJsonOrThrow = async (res: Response) => {
  if (!res.ok) {
    throw new Error(await res.text())
  }

  return res.json()
}

const withJson = (init: RequestInit) => {
  return {
    ...init,
    headers: {
      'Content-Type': 'application/json',
      ...init.headers,
    },
  }
}

export const request = async <R>(
  path: `/${string}`,
  init: RequestInit,
  validate?: (data: unknown) => R,
) => {
  init.body && (init.body = JSON.stringify(init.body))

  return fetch(
    `${import.meta.env.VITE_API_URL}${path}`,
    withJson(init),
  )
    .then(toJsonOrThrow)
    .then(validate)
}
