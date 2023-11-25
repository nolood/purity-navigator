import { ReactNode } from "react";

const SectionLayout = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <section className="section">
      <div className={"container " + className}>{children}</div>
    </section>
  );
};

export default SectionLayout;
