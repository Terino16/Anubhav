import "./App.css";
import Experience from "./components/Experience";
import Links from "./components/Links";
import TechStack from "./components/TechStack";

function App() {
  return (
    <main className="mt-10">
      <div className="p-2 lg:mx-40 md:mx-30 text-left space-y-1 ">
        <div>
          <p className="font-semibold text-2xl">Anubhav Dube</p>
          <p className="text-black dark:text-gray-300  text-[12px] leading-4">
            FullStack Developer
          </p>
          <p className="text-black dark:text-white font-semibold text-lg mt-2 ">
            "My Code is like humor. When I have to explain it, it’s bad."
          </p>
          <p className="text-black dark:text-gray-300 text-[16px] leading-5 mt-2">
            👋 Hi, I'm Anubhav Dube and skilled Web3 & Full Stack Developer.
            With experience in both web development and blockchain technology, I
            am equipped to create innovative and cutting-edge applications for
            the modern world.
          </p>
          <Links />
          <hr className="mt-2" />
          <div className="grid grid-cols-2 md:flex items-center md:justify-between md:p-4">
            <span className="flex flex-col m-2">
              <p className="text-black dark:text-white text-sm  md:text-md font-semibold leading-4">
                Lucknow,India
              </p>
              <p className="text-black dark:text-gray-300 text-[10px]  md:text-[12px] leading-4">
                Location
              </p>
            </span>
            <span className="flex flex-col m-2">
              <p className="text-black dark:text-white  text-sm  md:text-md font-semibold leading-4">
                1+ Years
              </p>
              <p className="text-black dark:text-gray-300  text-[12px] leading-4">
                Experience
              </p>
            </span>
            <span className="flex flex-col m-2">
              <p className="text-black dark:text-white  text-sm  md:text-md font-semibold leading-4">
                15+ Projects
              </p>
              <p className="text-black dark:text-gray-300  text-[12px] leading-4">
                Projects
              </p>
            </span>
            <span className="flex flex-col m-2">
              <p className="text-black dark:text-white  text-sm  md:text-md font-semibold leading-4">
                10+ Articles
              </p>
              <p className="text-black dark:text-gray-300  text-[12px] leading-4">
                Tech Blogs
              </p>
            </span>
          </div>
        </div>

        <TechStack/>
        <Experience/>
      
      </div>
    </main>
  );
}

export default App;
