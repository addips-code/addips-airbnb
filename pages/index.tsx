//@ts-ignore
import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import Banner from '../components/Banner'
import SmallCard from '../components/SmallCard'

interface InExploreData {
  distance: boolean;
  img: string;
  location: string;
}

interface props {
  exploreData: InExploreData[];
}

const Home: NextPage<props> = ({exploreData}) => {
  return (
    <div className="">
      <Head>
      <title>Addips Airbnb</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header/>
      <Banner/>

      <main className='mx-[7%] px-8 sm:px-16 max-w-7xl'>
        <section className='pt-6'>
          <h2 className='text-4xl font-semibold pb-5'>Explore Nearby</h2>

          {exploreData?.map(({img, location, distance})=>(
            <SmallCard
              key={img} 
              img={img} 
              location={location} 
              distance={distance}
            />
          ))}
        </section>
      </main>
    </div>
  );
};

export default Home

export async function getStaticProps() {
  const options = { method: "GET" };

  let exploreData: InExploreData[] = []; 
  await fetch("https://www.jsonkeeper.com/b/4G1G", options).then((response) => response.json()).then((response) =>{
    // console.log(response);
    exploreData = response;
  }).catch((err) => console.error(err));
  // console.log(exploreData);

  return {
    props: {
      exploreData,
    },
  };
}
