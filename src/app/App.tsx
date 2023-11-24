import { Button, Input, TextArea } from "@/shared/ui";

function App() {
  return (
    <div className={"flex flex-col gap-[50px] p-[10px]"}>
      <Button>button</Button>
      <Button variant={"secondary"}>button</Button>
      <Button disabled>button</Button>
      <Button variant={"secondary"} disabled>
        button
      </Button>
      <Input placeholder={"input"} />
      <Input placeholder={"input"} error={"error"} />
      <TextArea maxLength={50} placeholder={"textarea"} />
      <TextArea error={"error"} />
    </div>
  );
}

export default App;
