import { Button } from "@/shared/ui";

function App() {
  return (
    <div className={"flex flex-wrap gap-[10px]"}>
      <Button>button</Button>
      <Button variant={"secondary"}>button</Button>
      <Button disabled>button</Button>
      <Button variant={"secondary"} disabled>
        button
      </Button>
      test
    </div>
  );
}

export default App;
