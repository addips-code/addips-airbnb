import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import Banner from '../components/Banner'

interface props{
  exploreData: {
    location: string;
  }[];
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

      <main className='mx-[15%] px-8 sm:px-16 max-w-7xl'>
        <section className='pt-6'>
          <h2 className='text-4xl font-semibold pb-5'>Explore Nearby</h2>

          {exploreData.map(item =>(
            <h1>{item.location}</h1>
          ))}
        </section>
      </main>
    </div>
  )
}

export default Home;
export async function getStaticProps() {
  const exploreData = await fetch ('https://links.papareact.com/pyp').then((res) => res.json());


  return {
    props: {
      exploreData
    }
  }
}
