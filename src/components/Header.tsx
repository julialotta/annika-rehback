import Link from "next/link";
import { Menu } from "./Menu";

const Header = () => {
  return (
    <div className='flex justify-between'>
      <h1>
        <Link href='/'>Annika Rehbäck</Link>
      </h1>

      <Menu />
    </div>
  );
};

export { Header };
