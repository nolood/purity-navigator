import BaseLayout from "@/app/layouts/base-layout/ui/base-layout.tsx";
import NewsIntro from "@/widgets/news-intro/ui/news-intro.tsx";
import NewsCreate from "@/widgets/news-create/ui/news-create.tsx";

const News = () => {
  return (
    <BaseLayout>
      <NewsIntro />
      <NewsCreate />
    </BaseLayout>
  );
};

export default News;
