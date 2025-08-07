"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const routes = [
  { label: "About me", link: "", style: "bg-[#FFE68C]" },
  { label: "Projects", link: "", style: "bg-[#F3A38C]" },
  { label: "Contact me", link: "", style: "bg-[#D9B8FF]" },
] as const;

type RouteType = (typeof routes)[number]["label"];

interface IState {
  label: RouteType;
  style: string;
}

const Header = () => {
  const [selectedRoute, setSelectedRoute] = useState<IState>(routes[0]);

  const handleSelectRoute = (route: IState) => {
    setSelectedRoute(route);
  };

  return (
    <nav className="px-10 py-10 flex items-center justify-between ">
      <aside className="flex gap-10 justify-center items-center w-1/2">
        <Image
          src="/assets/figma.svg"
          alt="figma logo"
          width={60}
          height={110}
        />
        <p className="font-pangolin text-[#621c24] font-normal text-3xl hover:scale-125 transition duration-300">
          Meriem is Here !
        </p>
      </aside>
      <aside className="justify-end items-center w-1/3">
        <ul className="flex justify-between items-center w-full ">
          {routes.map((route, index) => (
            <li key={index} onClick={() => handleSelectRoute(route)}>
              <Link
                href={route.link}
                className="relative inline-block hover:scale-150 transition duration-300"
              >
                <p className="relative z-10 font-inter text-3xl">
                  {route.label}
                </p>
                {selectedRoute?.label === route.label && (
                  <span
                    className={`absolute inset-x-0  -mx-[3px] bottom-2 h-1/4 w-[calc(100%+6px)] flex place-self-center  z-0 ${selectedRoute.style}`}
                  />
                )}
              </Link>
            </li>
          ))}
        </ul>{" "}
      </aside>
    </nav>
  );
};

export default Header;
