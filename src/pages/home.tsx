// Import CSS
import "../style/index.css";
// Import other pages
import AppFooter from "./AppFooter";
// Import other things that require
import { Link } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem, Card, Toast } from "flowbite-react";
// Flowbite docs https://flowbite-react.com/docs/getting-started/introduction

const Home: React.FC = () => {
  return (
    <>
      <div className="min-h-screen">
        <Breadcrumb
          aria-label="Default breadcrumb"
          className="m-2 rounded-3xl bg-slate-600 px-3 py-2 drop-shadow-md"
        >
          <BreadcrumbItem className="ml-1">
            <span className="text-slate-300">Home</span>
          </BreadcrumbItem>
        </Breadcrumb>

        {/* Content */}
        <div className="w-100 h-100 mb-20 flex flex-col items-center justify-center">
          <div className="flex flex-col items-center">
            <div className="my-20">Logo will be here</div>
            <h1 className="text-center text-5xl font-bold text-slate-400 drop-shadow-md">
              Welcome to Xsylab Team!
            </h1>
            {/* <p className="mt-5 max-w-lg text-center text-xl text-slate-200">
                We are a freelance team specializing in web development, design,
                and creative solutions. Our team consists of passionate
                professionals dedicated to delivering high-quality projects.
              </p> */}
            <p className="my-44 max-w-lg text-center text-xl font-bold text-yellow-400 drop-shadow-lg">
              This webiste is currently working on.
              <a
                href="https://github.com/VacTuzX-dot/XsyVite"
                target="_blank"
                rel="noreferrer"
                className="text-slate-300 underline transition-colors hover:text-sky-300 hover:transition-colors"
              >
                <p className="mt-2 cursor-pointer">
                  Click here to open source code of this website
                </p>
              </a>
            </p>
            <Link
              to="/about"
              className="mb-10 mt-6 inline-block rounded-full bg-blue-500 px-4 py-2 text-white drop-shadow-lg transition-colors hover:bg-blue-400 hover:transition-colors"
            >
              Learn More About Us
            </Link>
          </div>

          <div className="mobile:mx-5 desktop:flex desktop:flex-wrap desktop:justify-center desktop:gap-5">
            <Card className="max-w-sm drop-shadow-lg mobile:mb-5">
              <h5 className="text-2xl font-bold tracking-tight text-gray-900">
                Noteworthy technology acquisitions 2021
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
            </Card>

            <Toast className="bg-gray-500 bg-opacity-20">
              <div className="ml-2 text-base font-normal text-slate-100">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Deserunt, eum. Debitis repellendus nobis iusto doloribus nulla
                minima. Deleniti, excepturi. Iste corrupti voluptates esse ullam
                rem, sunt in. Maiores, odio voluptatibus.
              </div>
            </Toast>
          </div>
        </div>
        <AppFooter />
      </div>
    </>
  );
};

export default Home;
