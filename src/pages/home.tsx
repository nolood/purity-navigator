import Intro from "@/widgets/intro/ui/intro.tsx";
import Statistics from "@/widgets/statistics/ui/statistics.tsx";
import BaseLayout from "@/app/layouts/base-layout/ui/base-layout.tsx";

const HomePage = () => {
  return (
    <BaseLayout>
      <Intro />
      <Statistics />
    </BaseLayout>
  );
};

export default HomePage;
