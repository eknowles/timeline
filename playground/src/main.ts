import './style.css'

import { Timeline } from '@eknowles/timeline'

const app = document.querySelector<HTMLDivElement>('#app')!;

(() => new Timeline(app))()
