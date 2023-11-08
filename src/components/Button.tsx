import clsx from "classnames";

interface ButtonProps {
  type?: "submit" | "button";
  children?: string | React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({ type = "button", children, className, onClick }) => {
  return (
    <button
      type={type}
      className={clsx("py-2 px-4 bg-sky-500 text-white rounded-md hover:bg-sky-300 transition", className)}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
