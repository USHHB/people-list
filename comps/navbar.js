import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <Link href="/"> 
          <Image src="/People.png" width={100} height={60} />
        </Link>
      </div>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/people">People Listing</Link>
    </nav>
  );
};

export default Navbar;
