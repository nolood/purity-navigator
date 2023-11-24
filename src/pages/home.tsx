import Navbar from "@/widgets/navbar/ui/navbar.tsx";
import Intro from "@/widgets/intro/ui/intro.tsx";
import Statistics from "@/widgets/statistics/ui/statistics.tsx";

const HomePage = () => {
  return (
    <div className={"flex flex-col gap-[100px]"}>
      <Navbar />
      <Intro />
      <Statistics />
    </div>
  );
};

export default HomePage;
