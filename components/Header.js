import Image from "next/image";
import { HiMagnifyingGlass, HiGlobeAlt, HiUserCircle, HiUser, HiOutlineBars3 } from "react-icons/hi2";

function Header() {
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
        {/* left */}
        <div className="relative flex items-center h-10 cursor-pointer my-auto">
            <Image 
                src='https://links.papareact.com/qd3' 
                layout='fill'
                objectFit="contain" objectPosition="left"
            />
        </div>

        {/* middle */}
        <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-sm">

        <input type="text" placeholder="start your search" className="pl-5 bg-transparent outline-none flex-grow text-sm text-gray-600 placeholder-gray-400"/>

        <HiMagnifyingGlass className='hidden md:inline-flex h-8 bg-gray-400 text-white rounded-full md:mx-2 w-8 cursor-pointer'/>
        </div>

        {/* right */}
        <div className="flex space-x-4 items-center justify-end text-gray-500">
            <p className="hidden md:inline cursor-pointer">Become a host</p>
            <HiGlobeAlt className="h-6 w-8 cursor-pointer"/>

            <div className="flex items-center space-x-2 border-2 p-2 rounded-full">
                <HiOutlineBars3 className="h-6 w-8"/>
                <HiUserCircle className="h-6 w-8"/>
            </div>
        </div>
    </header>
  )
}

export default Header;

