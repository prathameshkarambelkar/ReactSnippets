import React from "react";
import Headeer from "./components/Headeer";
import Heeder from "./components/Heeder";
import Heeeder from "./components/Heeeder";
import Projects from "./components/Projects";

const Port = () => {
  return (
    <>
      <Heeeder />
      {/* <div className="flex bg-gray-900 justify-between">
            <h1 className="text-white text-2xl font-mono p-6">Prathamesh Karambelkar</h1>
            <div className="flex">
              <h1 className="p-6 text-white py-6 px-4 text-2xl">About</h1>
              <h1 className="p-6 text-white py-6 px-4 text-2xl">Projects</h1>
              <h1 className="p-6 text-white py-6 px-4 text-2xl">Contact Me!</h1>
            </div>
          </div> */}
      {/* <div className="flex justify-between text-white p-8  bg-[#111827] ">
        <div className="ml text-2xl">PK</div>
        <div className="flex">
          <h1 className="px-2">Home</h1>
          <h1 className="px-2">Home</h1>
          <h1 className="px-2">Home</h1>`
          <h1 className="px-2">Home</h1>
        </div>
      </div> */}
      {/* <div className="bg-[#111827] flex justify-center ">
        <div className="flex flex-col items-center">
          <h1 className="mb-2  p-6  font-mono text-xl text-gray-100 md:text-2xl">
            Hi, <br className="block md:hidden" />
            <span className="relative">
              <span className="h-20 pt-2 overflow-x-hidden whitespace-nowrap text-brand-accent">
                I&apos;m pk <span className="text-xl md:text-2xl">👋</span>
              </span>
              <span className="{`${styles.cursor} absolute -bottom-0 left-0 -top-1 inline-block bg-gray-900 w-full animate-type will-change`}"></span>
            </span>
          </h1>
          <h1 className="text-white text-3xl p-4 ">
            I create User-friendly and responsive websites
          </h1>
        </div>
      </div> */}
      <div>
        <header class="flex flex-col items-center justify-center h-screen bg-fixed bg-center bg-cover bg-[url('/src/assets/AboutMeSmall.png')]  md:bg-[url('/src/assets/AboutMe1.png')]">
          {/* <div className=" flex justify-center ">
            <div className="flex flex-col items-center">
              <h1 className="mb-2  p-6  font-mono text-xl text-gray-100 md:text-2xl">
                Hi, <br className="block md:hidden" />
                <span className="relative">
                  <span className="h-20 pt-2 overflow-x-hidden whitespace-nowrap text-brand-accent">
                    I&apos;m pk <span className="text-xl md:text-2xl">👋</span>
                  </span>
                  <span className="{`${styles.cursor} absolute -bottom-0 left-0 -top-1 inline-block bg-gray-900 w-full animate-type will-change`}"></span>
                </span>
              </h1>
              <h1 className="text-white text-3xl p-4 ">
                <br></br>
                <br></br>
                <br></br>
              </h1>
            </div>
          </div> */}
          <img
            className="rounded-full"
            alt="Profile Pic"
            width={200}
            height={200}
            src="/src/assets/ProfilePic.jpeg"
          />
          <div class="writer inline-block">
            <div class="writer-text mt-4  flex overflow-hidden border-r-4 text-white ">
              <h1 className="text-center text-md">Hello 👋🏻, I'm Prathamesh,</h1>

              {/* <img
                width={50}
                height={50}
                src="https://raw.githubusercontent.com/TheDudeThatCode/TheDudeThatCode/master/Assets/Hi.gif"
              /> */}
            </div>
          </div>

          <p className=" text-white text-2xl text-center font-poppins font-monofont-bold">
            Android & Front-end Web Developer
          </p>
        </header>

        <section className="lg:flex-row sm:flex  sm:flex-col sm:items-center sm:justify-center  sm:m-auto  bg-fixed bg-center bg-cover md:bg-[url('/src/assets/Projects.png')]  bg-[url('/src/assets/ProjectsSmall.png')] ">
          <Projects
            name={"Demo Project"}
            technology={["ReactJs", "Tailwind Css", "Vite"]}
          />
          <Projects
            name={"Demo Project"}
            technology={["ReactJs", "Tailwind Css", "Vite"]}
          />
          <Projects
            name={"Demo Project"}
            technology={["ReactJs", "Tailwind Css", "Vite"]}
          />
          <div className="flex justify  "></div>
        </section>
        <section class="container flex items-center justify-center h-screen m-auto  bg-fixed bg-center bg-cover bg-[url('/src/assets/ContactMeSmall.png')] lg:bg-[url('/src/assets/ContactMe1.png')] md:bg-[url('/src/assets/ContactMe1.png')] ">
          <h1 className="text-white text-3xl text-">Lets connect</h1>
        </section>
      </div>

      <div></div>
    </>
  );
};

export default Port;
