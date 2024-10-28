import Banner from './Banner'
import MainSection from './MainSection'

const MainPage = () => {
  return (
    <div className='lg:flex lg:flex-1 lg:justify-center'>
      <div className='lg:flex lg:max-w-[960px] lg:flex-1 lg:flex-col'>
        <div className='@container'>
          <Banner />
        </div>
        <MainSection />
      </div>
    </div>
  )
}

export default MainPage
