import { INFO } from "@/shared/lib/info.ts";
import { NavbarItems } from "@/widgets/navbar/lib/navbar-items.ts";
import { Button } from "@/shared/ui";
import { router } from "@/shared/router/router.tsx";
import { INVOCATION_ROUTE } from "@/shared/router/paths.tsx";

const Navbar = () => {
  return (
    <section className="section">
      <div className="container">
        <nav className={"flex w-full justify-between items-center py-[40px]"}>
          <img
            src={INFO.logo.main.src}
            className={"w-[64px] h-[64px] object-cover"}
            alt="logo"
          />
          <ul className={"flex gap-[40px]"}>
            {NavbarItems.map((item) => (
              <li key={item.path} className={"text-gray"}>
                <a className={"text-textPrimary"} href={item.path}>
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
          <div className={"flex gap-[12px]"}>
            <Button onClick={() => router.navigate(INVOCATION_ROUTE)}>
              Направить обращение
            </Button>
            <Button variant={"secondary"}>Личный кабинет</Button>
          </div>
        </nav>
      </div>
    </section>
  );
};

export default Navbar;
