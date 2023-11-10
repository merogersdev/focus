import React, { MouseEventHandler } from "react";

type ButtonProps = {
  text: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
};

export default function Button({ text, onClick }: ButtonProps) {
  return (
    <button
      className="flex justify-center items-center px-6 leading-8 bg-slate-600 rounded text-white text-lg hover:bg-slate-500 transition-colors"
      onClick={onClick}
    >
      {text}
    </button>
  );
}
