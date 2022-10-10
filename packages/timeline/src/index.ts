import { toTemporalInstant } from '@js-temporal/polyfill'

// polyfill date
(Date.prototype as Date & { toTemporalInstant: typeof toTemporalInstant }).toTemporalInstant = toTemporalInstant

export interface TimelineOptions {
  style: {
    backgroundColor: string
  }
}

export const DEFAULT_OPTIONS: TimelineOptions = {
  style: {
    backgroundColor: 'black',
  },
}

// 0 second
// 1 minute = 60 seconds
// 2 hour = 60 minutes
// 3 day = 24 hours
// 4 week = 7 days
// 5 month = 4 weeks
// 6 year = 12 months

export class Timeline {
  options: TimelineOptions
  private _element: HTMLElement
  private _canvas: HTMLCanvasElement

  constructor(element: HTMLElement, options: TimelineOptions = DEFAULT_OPTIONS) {
    this._element = element
    this.options = options
    this.init()
    // const duration = Temporal.Duration.from({ hours: 2 })
    // const startTime = Temporal.Instant.fromEpochMilliseconds(Date.now())
    // console.log({ duration, startTime })
  }

  get context() {
    return this._canvas.getContext('2d')
  }

  init() {
    this._createCanvas()
    this._drawBackground()
  }

  private _createCanvas() {
    this._element.style.width = '100%'
    this._element.style.height = '100px'
    this._canvas = document.createElement('CANVAS') as HTMLCanvasElement
    this._element.appendChild(this._canvas)
    this._updateCanvas()
  }

  private _updateCanvas() {
    const rect = this._element.getBoundingClientRect()
    this._canvas.width = rect.width
    this._canvas.height = rect.height
  }

  private _drawBackground() {
    this.context.fillStyle = this.options.style.backgroundColor
    this.context.fillRect(0, 0, this._canvas.width, this._canvas.height)
  }
}
