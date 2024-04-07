import type { Car } from '@/interfaces/car'
import {
  type FunctionalComponent,
  h,
  type VNode,
  type RendererElement,
  type RendererNode,
} from 'vue'

import './car.css'
import type { DriveResponse } from '@/interfaces/drive-response'

type Emits = {
  delete(): void
  start(): () => Promise<DriveResponse>
}

interface Props {
  car: Car
}

export const createAnimation =
  (
    square: VNode<
      RendererNode,
      RendererElement,
      Record<string, any>
    >,
  ) =>
  (info: DriveResponse) => {
    console.log('info', info)
  }

export const car: FunctionalComponent<Props, Emits> = (
  props,
) => {
  const square = h('div', {
    style: { backgroundColor: props.car.color },
    className: 'square',
  })

  const handleStart = async () => {
    const info = props.onStart?.() as Promise<DriveResponse>

    if (!info) {
      return
    }

    info.then(createAnimation(square))
  }

  return h('div', { className: 'car' }, [
    h('h4', [props.car.name]),
    square,
    h('button', { onClick: () => props.onDelete?.() }, [
      'd',
    ]),
    h('button', { onClick: handleStart }, ['s']),
    h('button', {}, ['e']),
  ])
}
