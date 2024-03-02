import Image from "next/image";
import logo from "@/public/assets/image/logo.jpg";
const Sidebar = () => {
  return (
    <div className="w-full max-w-[1200px] mx-auto md:h-screen flex justify-center">
      <div className="mt-20">
        <div className="space-y-2">
          <Image
            className="rounded-full mx-auto"
            width={80}
            height={80}
            src={logo}
            alt="logo"
          />
          <h1 className="text-xl font-semibold text-center">Md Rakib Ali</h1>
        </div>
        <div className="mt-5">
          <ul className="flex flex-col gap-3 text-center">
            <li className="w-full px-3 py-2 bg-gradient-to-r from-orange-500 to-pink-500 cursor-pointer transition-all duration-500 rounded-xl">Home</li>
            <li className="w-full px-3 py-2 hover:bg-gradient-to-r from-orange-500 to-pink-500 cursor-pointer transition-all duration-500 rounded-xl">
              About
            </li>
            <li className="w-full px-3 py-2 hover:bg-gradient-to-r from-orange-500 to-pink-500 cursor-pointer transition-all duration-500 rounded-xl">
              Skills
            </li>
            <li className="w-full px-3 py-2 hover:bg-gradient-to-r from-orange-500 to-pink-500 cursor-pointer transition-all duration-500 rounded-xl">
              Project
            </li>
            <li className="w-full px-3 py-2 hover:bg-gradient-to-r from-orange-500 to-pink-500 cursor-pointer transition-all duration-500 rounded-xl">
              Blogs
            </li>
            <li className="w-full px-3 py-2 hover:bg-gradient-to-r from-orange-500 to-pink-500 cursor-pointer transition-all duration-500 rounded-xl">
              Contact
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
