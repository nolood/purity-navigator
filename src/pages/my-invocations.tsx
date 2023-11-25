import BaseLayout from "@/app/layouts/base-layout/ui/base-layout.tsx";
import MyInvocationsList from "@/widgets/my-invocations-list/ui/my-invocations-list.tsx";

const MyInvocations = () => {
  return (
    <BaseLayout>
      <MyInvocationsList />
    </BaseLayout>
  );
};

export default MyInvocations;
