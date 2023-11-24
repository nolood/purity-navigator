import { Button, Input } from "@/shared/ui";

const IntroForm = () => {
  return (
    <form className={"flex gap-[25px] w-2/3"}>
      <Input placeholder="Течет вода из канализационного люка" />
      <Button className={"min-w-fit"}>Отправить сообщение</Button>
    </form>
  );
};

export default IntroForm;
