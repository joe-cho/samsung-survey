import Alpine from 'alpinejs'
import './style.css'
import { Counter } from './components/Counter'
import { mount } from './utils/component'

// Initialize Alpine.js
window.Alpine = Alpine
Alpine.start()

// Mount the Counter component
mount('#app', Counter) 