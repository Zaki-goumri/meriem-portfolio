import Image from "next/image";

const Header = () => {
  return (
    <nav className="px-24 py-10">
      <aside>
        <Image
          src="/assets/figma.png"
          alt="figma logo"
          width={50}
          height={100}
        />
      </aside>
      <aside></aside>
    </nav>
  );
};

export default Header;
