import { ReactNode } from "react";
import Navbar from "@/widgets/navbar/ui/navbar.tsx";
import Footer from "@/widgets/footer/ui/footer.tsx";

const BaseLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className={"flex flex-col gap-[100px]"}>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default BaseLayout;
