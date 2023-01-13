import Image from "next/image"

function Banner() {
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
        <Image src='https://links.papareact.com/0fm' alt="banner" layout="fill" objectFit="cover"/>

        <div className="absolute top-1/2 w-full text-center">
            <p className="text-sm sm:text-large">Not Sure Where To Stay? Perfect.</p>

            <button className="text-purple-500 bg-white rounded-full font-bold my-3 px-10 py-4 shadow-md hover:shadow-xl
                active:scale-90 transition duration-200 ease-out">
                Here to guide
            </button>
        </div>
    </div>
  )
}

export default Banner