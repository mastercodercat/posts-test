import { ChangeEvent } from "react";
import clsx from "classnames";

interface InputProps {
  name?: string;
  className?: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const Input: React.FC<InputProps> = ({ name, value, className, onChange }) => {
  return (
    <input
      name={name}
      className={clsx("border border-1 py-2 px-4 rounded-md", className)}
      value={value}
      onChange={onChange}
    />
  );
};
