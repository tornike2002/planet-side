import Link from "next/link";

const Navbar = () => {
  return (
    <header className="flex justify-between items-center pt-[22px] pl-8 pr-10 pb-7 border-b border-opacity-[0.2] border-white">
      <h1 className="text-white font-antonio text-28px font-normal leading-normal  uppercase">
        THE PLANETS
      </h1>
      <nav className="text-white font-spartan text-xs">
        <Link href="/">Mercury</Link>
        <Link href="/Venus">Venus</Link>
        <Link href="/Mars">Mars</Link>
        <Link href="/Jupiter">Jupiter</Link>
        <Link href="/Saturn">Saturn</Link>
        <Link href="/Uranus">Uranus</Link>
        <Link href="/Neptune">Neptune</Link>
      </nav>
    </header>
  );
};

export default Navbar;
