import HomeBottomText from '../components/home/HomeBottomText'
import HomeHeroText from '../components/home/HomeHeroText'
import Video from '../components/home/Video'

const Home = () => {
  return (
    <>
      <main className='h-screen w-screen overflow-hidden'>
        <div className="video-section h-screen w-screen fixed">
          <Video />
        </div>
        <div className="text-section h-screen w-screen relative flex flex-col lg:justify-between justify-around overflow-hidden">
          <HomeHeroText />
          <HomeBottomText />
        </div>
        </main> 
    </>
  )
}

export default Home
