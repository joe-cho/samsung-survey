export type Component = () => string;

export const mount = (selector: string, component: Component): void => {
  const element = document.querySelector(selector);
  if (!element) {
    console.error(`Element with selector "${selector}" not found`);
    return;
  }
  element.innerHTML = component();
}; 