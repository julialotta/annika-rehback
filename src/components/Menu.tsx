import Link from "next/link";

const Menu = () => {
  return (
    <>
      <ul className='flex gap-4'>
        <li>
          <Link href='/about'>about</Link>
        </li>
        <li>
          <Link href='/coaching'>coaching & corporate</Link>
        </li>
        <li>
          <Link href='/yoga'>yoga</Link>
        </li>
      </ul>
    </>
  );
};

export { Menu };
