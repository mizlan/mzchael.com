interface HeadingProps {
  children: React.ReactNode;
}

const Heading = ({ children }: HeadingProps) => {
  return <h1 className="text-xl font-semibold text-stone-800 dark:text-current">{children}</h1>;
};

export default Heading;
