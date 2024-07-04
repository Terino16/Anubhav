
import { ModeToggle } from './mode-toggle';

const Navbar = () => {


  return (
    <nav className=" p-2 lg:mx-40 md:mx-30  border border-gray-500 rounded-lg">
      <div className=" flex justify-between items-center">
        <div className=" text-black dark:text-gray-300  text-sm font-semibold">@Terino16</div>
        <div className="flex space-x-4">
          <span className='flex items-center space-x-1  border border-gray-500 rounded-sm py-1 px-2'>
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-house"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"/><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>
          <a href="#" className= "hidden md:block  text-black dark:text-gray-300  hover:text-white text-sm">
          Home</a>
          </span>

          <span className='flex items-center space-x-1  border border-gray-500 rounded-sm py-1 px-2'>
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-folder-open-dot"><path d="m6 14 1.45-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.55 6a2 2 0 0 1-1.94 1.5H4a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h3.93a2 2 0 0 1 1.66.9l.82 1.2a2 2 0 0 0 1.66.9H18a2 2 0 0 1 2 2v2"/><circle cx="14" cy="15" r="1"/></svg>
          <a href="#" className=" hidden md:block  text-black dark:text-gray-300  hover:text-white text-sm">
          Project</a>
          </span>

          <span className='flex items-center space-x-1  border border-gray-500 rounded-sm py-1 px-2'>
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-mail"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
          <a href="#" className=" hidden md:block text-black dark:text-gray-300  text-sm">
          Contact</a>
          </span>
          
          <span>
          <ModeToggle/>
          </span>

        </div>

       
      </div>
      
    </nav>
  );
};

export default Navbar;
