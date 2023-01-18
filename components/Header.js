import Image from "next/image";
import { useState } from "react";
import { HiMagnifyingGlass, HiGlobeAlt, HiUserCircle, HiUsers, HiOutlineBars3 } from "react-icons/hi2";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateRangePicker } from 'react-date-range';
import { useRouter } from "next/router";

function Header({placeholder}) {

    const [searchInput, setSearchInput] = useState(''); 
    const [startDate, setStartDate] = useState(new Date());
    const router = useRouter();
    const [endDate, setEndDate] = useState(new Date());
    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: 'Selection'
    };

    const handleSelect = (ranges) => {
        setStartDate(ranges.Selection.startDate);
        setEndDate(ranges.Selection.endDate);
    };

    const resetInput = () => {
        setSearchInput('');
    };

    const [noOfGuests, setNoOfGuests] = useState(1);

    const search = () => {
        router.push({
            pathname: "/search",
            query: {
                location: searchInput,
                startDate: startDate.toISOString(),
                endDate: endDate.toISOString(),
                noOfGuests,
            },
        });   
    };

  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
        {/* left */}
        <div onClick={() => router.push("/")} className="relative flex items-center h-10 cursor-pointer my-auto">
            <Image 
                src='https://links.papareact.com/qd3' 
                layout='fill'
                objectFit="contain" objectPosition="left"
            />
        </div>

        {/* middle */}
        <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-sm">

        <input 
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            type="text" placeholder={placeholder || "start your search"} 
            className="pl-5 bg-transparent outline-none flex-grow text-sm text-gray-600
            placeholder-gray-400"
        />
        <HiMagnifyingGlass className='hidden md:inline-flex h-8 bg-gray-400 text-white rounded-full md:mx-2 w-8 cursor-pointer'/>
        </div>

        {/* right */}
        <div className="flex space-x-4 items-center justify-end text-gray-500">
            <p className="hidden md:inline cursor-pointer">Airbnb your home</p>
            <HiGlobeAlt className="h-6 w-8 cursor-pointer"/>

            <div className="flex items-center space-x-2 border-2 p-2 rounded-full">
                <HiOutlineBars3 className="h-6 w-8"/>
                <HiUserCircle className="h-6 w-8"/>
            </div>
        </div>


        {searchInput && (
            <div className="flex flex-col col-span-3 mx-auto">
                <DateRangePicker
                    minDate= {new Date()}
                    ranges={[selectionRange]}
                    rangeColors={["#FD5B61"]}
                    onChange={handleSelect}
                />
                <div className="flex items-center border-b m-4">
                    <h2 className="text-2xl flex-grow font-semibold">Number of Guests</h2>
                    <HiUsers className="h-5"/>
                    <input
                     value={noOfGuests}
                     onChange={e => setNoOfGuests(e.target.value)}
                     min={1}
                     type="Number" 
                     className="w-12 pl-2 text-lg outline-none text-red-400"
                    />
                </div>

                <div className="flex">
                    <button onClick={resetInput} className="flex grow text-gray-500">Cancel</button>
                    <button onClick={search} className="text-red-400 flex-grow">Search</button>
                </div>
            </div>
        )}
    </header>
  );
}

export default Header;

