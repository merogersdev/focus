import type { ChangeEventHandler } from "react";

type SwitchProps = {
  text: string;
  name: string | boolean;
  onChange: ChangeEventHandler<HTMLInputElement>;
  check: string | boolean;
  id: string;
};

export default function Switch({
  text,
  name,
  onChange,
  check,
  id,
}: SwitchProps) {
  return (
    <div className="flex items-center w-64 justify-between my-2">
      <span>{text}</span>
      <label
        htmlFor={id}
        className="bg-gray-100 dark:bg-slate-600 cursor-pointer relative w-20 h-10 rounded-full mx-4"
      >
        <input
          type="checkbox"
          id={id}
          name={id}
          className="sr-only peer"
          checked={name === check}
          onChange={onChange}
        />
        <span className="w-2/5 h-4/5 bg-red-300 absolute rounded-full left-1 top-1 peer-checked:bg-green-400 peer-checked:left-11"></span>
      </label>
      {name === check ? (
        <span className="text-green-600 dark:text-green-400">On</span>
      ) : (
        <span className="text-red-600 dark:text-red-400">Off</span>
      )}
    </div>
  );
}
