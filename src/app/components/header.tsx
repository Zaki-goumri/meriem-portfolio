import Image from "next/image";

const routes = [
  { label: "About me", route: "" },
  { label: "Projects", route: "" },
  { label: "Contact me", route: "" },
];

const Header = () => {
  return (
    <nav className="px-24 py-10">
      <aside className="flex gap-10 items-center">
        <Image
          src="/assets/figma.png"
          alt="figma logo"
          width={50}
          height={100}
        />
        <p className="font-pangolin text-[#621c24] font-normal text-3xl">
          Meriem is Here !
        </p>
      </aside>
      <aside>
      {/* TODO implement routes */}
{routes.map((route)=>  )} 
      </aside>
    </nav>
  );
};

export default Header;
