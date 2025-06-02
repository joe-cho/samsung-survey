import { h, type Component } from '../utils/component';

const Button: Component = (props, children) => h('button', {
  ...props,
  className: 'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
}, children);

export const Counter: Component = () => {
  return h('div', { 
    'x-data': '{ count: 0 }',
    className: 'p-4'
  }, [
    h('h1', { className: 'text-2xl font-bold mb-4' }, 'Alpine.js + Tailwind CSS + TypeScript'),
    Button(
      { '@click': 'count++' },
      ['Count: ', h('span', { 'x-text': 'count' })]
    )
  ]);
}; 