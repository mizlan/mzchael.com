import { twMerge } from "tailwind-merge";

interface HeadingProps {
  children: React.ReactNode;
  className?: string;
}

const Heading = ({ children, className }: HeadingProps) => {
  return (
    <h1
      className={twMerge(
        "text-xl font-semibold text-black dark:text-current",
        className,
      )}
    >
      {children}
    </h1>
  );
};

export default Heading;
