import type { Car } from '@/interfaces/car'
import { type FunctionalComponent, h } from 'vue'

import './car.css'

type Emits = {
  delete(): void
}

interface Props {
  car: Car
}

export const car: FunctionalComponent<Props, Emits> = (
  props,
) => {
  const square = h('div', {
    style: { backgroundColor: props.car.color },
    className: 'square',
  })

  return h('div', { className: 'car' }, [
    square,
    h('button', { onClick: () => props.onDelete?.() }, [
      'd',
    ]),
    h('button', {}, ['s']),
    h('button', {}, ['e']),
  ])
}
