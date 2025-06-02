import Alpine from 'alpinejs'
import './style.css'
import { Counter } from './components/Counter'

// Initialize Alpine.js
window.Alpine = Alpine
Alpine.start()

// Mount the Counter component
document.getElementById('app')!.innerHTML = Counter() 