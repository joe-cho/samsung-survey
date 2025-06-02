import Alpine from 'alpinejs'
import './style.css'
import Survey from './components/Survey'
import { mount } from './utils/component'

// Initialize Alpine.js
window.Alpine = Alpine
Alpine.start()

// Mount the Survey component
mount('#app', Survey)