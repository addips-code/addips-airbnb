import Header from '../components/Header';
import Footer from '../components/Footer';
import { useRouter } from 'next/router';
import { format } from 'date-fns';
import InfoCard from '../components/InfoCard';
import Mapp from '../components/Mapp';


function Search({searchResults}) {
    const router = useRouter();
    const { location, startDate, endDate, noOfGuests } = router.query; 
    const formattedStartDate = format(new Date(startDate), "dd/MM/yyyy");
    const formattedEndDate = format(new Date(endDate), "dd/MM/yyyy");

    const range = `${formattedStartDate} - ${formattedEndDate}`;
  return (
    <div>
        <Header placeholder={`${location} | ${range} | ${noOfGuests} guests`}/>
        <main className='flex'>
            <section className='flex-grow pt-14 px-6'>
                <p className='text-xs'>300+ stays - {range} - {noOfGuests} guests</p>
                <h1 className='font-semibold mt-2 mb-6 text-3xl'>Stays in {location}</h1>

                <div className='hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap'>
                    <p className='button'>Cancellation Flexibilty</p>
                    <p className='button'>Type of Place</p>
                    <p className='button'>Price</p>
                    <p className='button'>Rooms and Beds</p>
                    <p className='button'>More Filters</p>
                </div>

                <div className='flex flex-col'>
                    {searchResults.map(({img, location, description, title, star, price, total}) => (
                        <InfoCard
                            key={img}
                                img={img}
                                location={location}
                                title={title}
                                description={description}
                                price={price}
                                star={star}
                            total={total}
                        />
                    ))}
                </div>
            </section>

            <section className='hidden xl:inline-flex xl:min-w-[600px]'>
                <Mapp searchResults={searchResults}/>
            </section>
        </main>
        <Footer/>
    </div>
  )
}

export default Search;

export async function getServerSideProps() {
    const searchResults = await fetch('https://www.jsonkeeper.com/b/5NPS').then(res => res.json());

    return{
        props:{
            searchResults,
        },
    };
}