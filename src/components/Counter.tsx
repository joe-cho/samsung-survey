import React from 'react';

const Button = ({ children, ...props }: { children: React.ReactNode } & React.ButtonHTMLAttributes<HTMLButtonElement>) => (
  <button
    {...props}
    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
  >
    {children}
  </button>
);

const Span = ({ children, ...props }: { children?: React.ReactNode } & React.HTMLAttributes<HTMLSpanElement>) => (
  <span
    {...props}
  >
    {children}
  </span>
);

export const Counter = () => {
  return (
    <div
      x-data="{ count: 0 }"
      className="p-4 flex flex-col items-center"
    >
      <h1 className="text-2xl font-bold mb-4">
        Alpine.js + Tailwind CSS + React
      </h1>
      <img
        src="/competition/gamma_24_id=1-A.png"
        alt="Competition Image"
        className="w-full max-w-md mx-auto mb-4 rounded-lg shadow-lg"
      />
      <Button
        x-on:click="count++"
      >
        Count: <span x-text="count"></span>
      </Button>
    </div>
  );
}; 