declare module 'alpinejs' {
  const Alpine: {
    start: () => void;
  };
  export default Alpine;
}

interface Window {
  Alpine: typeof Alpine;
} 