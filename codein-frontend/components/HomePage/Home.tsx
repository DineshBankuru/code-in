import React from 'react'
import MainPage from './MainPage'

const HomePage = () => {
  return (
    <>
      <section className='scroll-smooth px-4 py-5 lg:flex lg:flex-1 lg:justify-center lg:px-40'>
        <div className='layout-content-container flex max-w-[960px] flex-1 flex-col'>
          <div className='@container'>
            <MainPage />
          </div>
        </div>
      </section>
    </>
  )
}

export default HomePage
