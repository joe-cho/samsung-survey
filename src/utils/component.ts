import { createRoot } from 'react-dom/client';
import type { JSX } from 'react';

type Props = Record<string, any>;
type Children = string | Component | (string | Component)[];
type Component = (props?: Props, children?: Children) => string | JSX.Element;

const createElement = (tag: string | Component, props?: Props, children?: Children): string | JSX.Element => {
  if (typeof tag === 'function') {
    return tag(props, children);
  }

  const attributes = props 
    ? Object.entries(props)
        .filter(([key]) => key !== 'children')
        .map(([key, value]) => {
          if (key.startsWith('on')) {
            const eventName = key.slice(2).toLowerCase();
            return `@${eventName}="${value}"`;
          }
          if (key === 'className') {
            return `class="${value}"`;
          }
          return `${key}="${value}"`;
        })
        .join(' ')
    : '';

  const content = children 
    ? Array.isArray(children)
      ? children.map(child => typeof child === 'function' ? child() : child).join('')
      : typeof children === 'function'
        ? children()
        : children
    : '';

  return `<${tag} ${attributes}>${content}</${tag}>`;
};

export const mount = (selector: string, component: Component): void => {
  const element = document.querySelector(selector);
  if (!element) {
    console.error(`Element with selector "${selector}" not found`);
    return;
  }
  
  const result = component();
  if (typeof result === 'string') {
    element.innerHTML = result;
  } else {
    const root = createRoot(element);
    root.render(result);
  }
};

export { createElement as h, type Component, type Props, type Children }; 