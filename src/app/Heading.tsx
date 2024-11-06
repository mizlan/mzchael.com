interface HeadingProps {
  children: React.ReactNode;
}

const Heading = ({ children }: HeadingProps) => {
  return (
    <h1 className="text-xl font-semibold text-black dark:text-current">
      {children}
    </h1>
  );
};

export default Heading;
