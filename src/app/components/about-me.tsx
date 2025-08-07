import Image from "next/image";

const AboutMe = () => {
  return (
    <>
      <Image
        src="/assets/line.star.svg"
        width={30}
        height={30}
        alt="icon"
        className="ml-10"
      />
      <section className="w-full flex justify-between items-start mx-auto">
        <aside className="w-[60%] flex flex-col justify-between items-start ml-48">
          <h1 className="font-bold text-7xl tracking-tight max-w-3xl leading-20">
            Designing <span> Interfaces</span>
            <br /> You&#39;ll Scroll <br /> on Purpose.
          </h1>
          <div className="mt-8 max-w-md flex ">
            <p className="text-gray-600 text-lg leading-relaxed">
              Stick around — I&#39;ll show you why I&#39;m the designer
              you&#39;ve been looking for.{" "}
              <span className="text-purple-600">Spoiler alert:</span> You&#39;ll
              probably want to work with me by the time you hit the footer.
            </p>
          </div>
        </aside>{" "}
        <aside className="w-[50%]">
          <div className="bg-[url('/assets/Icons.svg')] right-28 absolute">
            <Image
              src="/assets/meriem/meriem1.png"
              height={800}
              width={500}
              quality={100}
              style={{ width: "auto" }}
              alt="meriem image"
              className=""
            />
          </div>
        </aside>
      </section>
    </>
  );
};

export default AboutMe;
