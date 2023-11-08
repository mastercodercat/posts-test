import clsx from "classnames";

interface FormProps {
  children: React.ReactNode;
  className?: string;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

export const Form: React.FC<FormProps> = ({ children, className, onSubmit }) => {
  return (
    <form className={clsx("", className)} onSubmit={onSubmit}>
      {children}
    </form>
  );
};
