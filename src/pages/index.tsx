import Image from "next/image";

export default function Home() {
  const porto = [
    {
      name: "Gudang Pro",
      banner: "2.png",
      desc: "Gpro is a system for conducting sales and purchase transactions with financial reports. Gpro uses codeigniter 3 with spa",
      link: "https://gpro.centralarthaulam.com/",
    },
    {
      name: "Adupi Bank Sampah",
      banner: "1.png",
      desc: "Adupi is an application to manage waste from several partners, adupi uses react js, leaflet, pwa and on the be uses express",
      link: "https://admin.ekonomisirkular.org/login",
    },
    {
      name: "Face Recognition",
      banner: "4.png",
      desc: "Face recognition is a machine learning that is used to recognize a person's face, face recognition uses python, opencv and flask",
      link: "https://github.com/bagsandk/face_recognition",
    },
    {
      name: "Dapur Indhie Landing Page",
      banner: "3.png",
      desc: "Dapoer indie is a small and medium enterprise engaged in the bread sector. indhie kitchen uses the svlete framework",
      link: "https://dapurindhie.com/",
    },
  ];

  const contact = [
    {
      icon: "/github.svg",
      name: "bagsandk",
      link: "https://github.com/bagsandk/",
    },
    {
      icon: "/twitter.svg",
      name: "bagsandk",
      link: "https://twitter.com/bagsandk",
    },
    {
      icon: "/ig.svg",
      name: "bagasagengsandoko",
      link: "https://www.instagram.com/bagasagengsandoko/",
    },
    {
      icon: "linkedin.svg",
      name: "bagasagengsandoko",
      link: "https://www.linkedin.com/in/bagas-ageng-sandoko/",
    },
  ];
  return (
    <main className="flex font-mono flex-col items-center justify-between">
      <div className="flex w-full items-end justify-between px-2 md:px-32 border-b-2 pb-32">
        <div className="flex flex-col justify-center w-1/2">
          <p className="text-5xl sm:text-6xl md:text-7xl font-semibold">
            Hello
          </p>
          <p className="text-5xl sm:text-6xl md:text-7xl font-semibold">
            Im Bagas
          </p>
          <p className=" text-sm mt-3">Im a software developer</p>
          <button className="border-2 bg-smoke-200 w-2/3  md:w-1/3 p-2 mt-10 hover:bg-smoke-100">
            Download My CV
          </button>
        </div>
        <div className="flex flex-col items-end w-1/2 ">
          <Image
            className="grayscale"
            src="/img/poto.png"
            alt="Bagas Ageng Sandoko"
            width={300}
            height={300}
          />
        </div>
      </div>
      <div className="relative bg-smoke-100 flex flex-col w-full justify-between ps-2 md:ps-32 border-b-2">
        <div className="absolute -top-16">
          <p className="my-2 text-lg">Quick Link</p>
          <div className="flex w-96">
            <a
              href="#project"
              className="flex bg-smoke-200 w-32 hover:bg-smoke-100 justify-between items-center border-t-2 border-s-2 border-b-2 p-2"
            >
              <p className="me-4">Portofolio</p>
            </a>
            <a
              href="#about"
              className="flex bg-smoke-200 w-32 hover:bg-smoke-100 justify-between items-center border-t-2 border-s-2 border-b-2 p-2"
            >
              <p className="me-4">About</p>
            </a>
            <a
              href="#contact"
              className="flex bg-smoke-200 w-32 hover:bg-smoke-100 justify-between items-center border-t-2 border-s-2 border-b-2 p-2 border-e-2"
            >
              <p className="me-4">Contact</p>
            </a>
          </div>
        </div>
        <section id="project" className="mt-10 mb-5 project ">
          <p className="text-xl font-semibold">Projects</p>
          <div className="flex overflow-x-auto">
            {porto.map((v, i) => (
              <div key={i} className="flex-none me-3">
                <div className="flex h-96 max-w-sm justify-between flex-col border-2 my-2">
                  <div className="flex flex-col">
                    <div className="flex justify-center border-b-2 p-1 bg-smoke-200">
                      <p className="text-center text-sm">{v.name}</p>
                    </div>
                    <Image
                      className="grayscale"
                      src={`/img/porto/${v.banner}`}
                      alt={v.name}
                      width={500}
                      height={500}
                    />
                    <div className="flex flex-col p-2 border-t-2">
                      <p className="text-md font-semibold mt-2">{v.name}</p>
                      <p className="text-sm mb-2">{v.desc}</p>
                    </div>
                  </div>
                  <a
                    target="_blank"
                    href={v.link}
                    className="w-1/3 px-1 ms-2 text-center mb-1 hover:bg-smoke-100 bg-smoke-200 border-2"
                  >
                    Link
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section id="about" className="mt-10 mb-5 about">
          <p className="text-xl font-semibold">About</p>
          <div className="flex mt-5">
            <p>There is nothing special about me, I just try to learn and learn</p>
          </div>
        </section>
        <section id="contact" className="mt-10 mb-5 contact">
          <p className="text-xl font-semibold">Contact</p>
          <ul className="list-inside text-slate-900 dark:text-slate-200 mt-5">
            {contact.map((v, i) => (
              <li key={i}>
                <a target="_blank" href={v.link} className="flex items-center">
                  <Image
                    className="grayscale me-2"
                    src={v.icon}
                    alt={`alt-${v.name}`}
                    width={20}
                    height={20}
                  />
                  <p>{v.name}</p>
                </a>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
}
