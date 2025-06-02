import Alpine from 'alpinejs'
import './style.css'

// Initialize Alpine.js
window.Alpine = Alpine
Alpine.start()

// Example Alpine.js component
document.getElementById('app')!.innerHTML = `
  <div x-data="{ count: 0 }" class="p-4">
    <h1 class="text-2xl font-bold mb-4">Alpine.js + Tailwind CSS + TypeScript</h1>
    <button 
      @click="count++"
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      Count: <span x-text="count"></span>
    </button>
  </div>
` 