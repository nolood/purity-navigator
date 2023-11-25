import BaseLayout from "@/app/layouts/base-layout/ui/base-layout.tsx";
import InvocationIntro from "@/widgets/invocation-intro/ui/invocation-intro.tsx";
import InvocationCreate from "@/widgets/invocation-create/ui/invocation-create.tsx";

const Invocation = () => {
  return (
    <BaseLayout>
      <InvocationIntro />
      <InvocationCreate />
    </BaseLayout>
  );
};

export default Invocation;
