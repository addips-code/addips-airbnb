//@ts-ignore
import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Banner from '../components/Banner'
import SmallCard from '../components/SmallCard'
import LargeCard from '../components/LargeCard'
import MediumCard from '../components/MediumCard'
import { title } from 'process'

interface InExploreData {
  distance: boolean;
  img: string;
  location: string;
}

interface props {
  exploreData: InExploreData[];
}

interface InCardData {
  img: string;
  title: string;
}

interface props {
  cardsData: InCardData[];
}



const Home: NextPage<props> = ({exploreData, cardsData}) => {
  return (
    <div className="">
      <Head>
      <title>Addips Airbnb</title>
        <link rel="icon" href="https://www.citypng.com/public/uploads/preview/-316008155470z0f6if4ay.png" />
      </Head>

      <Header placeholder={''}/>
      <Banner/>

      <main className='mx-[5%] px-8 sm:px-16 max-w-7xl'>
        <section className='pt-6'>
          <h2 className='text-4xl font-semibold pb-5'>Explore Nearby</h2>

          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            {exploreData?.map(({img, location, distance})=>(
              <SmallCard
                key={img} 
                img={img} 
                location={location} 
                distance={distance}
              />
            ))}
          </div>
        </section>

        <section>
          <h2 className='text-4xl font-semibold py-8'>Live Anywhere</h2>
          <div className='flex space-x-3 overflow-scroll scrollbar-hide p-3'>
            {cardsData?.map(({img}) => (
              <MediumCard key={img} img={img} title={title}/>
            ))} 
          </div>
        </section>

        <LargeCard img="https://links.papareact.com/4cj" title="The Greatest Outdoors" description="Wishlist curated by Airbnb" buttonText="Get Inspired"/>
      </main>

      <Footer/>
    </div>
  );
};

export default Home;

export async function getStaticProps() {
  const options = { method: "GET" };

  let exploreData: InExploreData[] = []; 
  await fetch("https://www.jsonkeeper.com/b/4G1G", options).then((response) => response.json()).then((response) =>{
    exploreData = response;
  }).catch((err) => console.error(err));

  const cardsData = await fetch ('https://www.jsonkeeper.com/b/VHHT').then((res) =>res.json());
  return {
    props: {
      exploreData,
      cardsData
    },
  };
}
