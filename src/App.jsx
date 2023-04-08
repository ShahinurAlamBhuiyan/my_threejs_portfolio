import { BrowserRouter } from 'react-router-dom'

import {
  Hero,
  Contact,
  About,
  Experience,
  Feedbacks,
  Navbar,
  Tech,
  Works,
  StarsCanvas
} from './components'
import Footer from './components/Footer'

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
          {/* <Footer /> */}
          <p className='text-center pb-6 flex flex-wrap items-center justify-center '>
            Copyright © 2023 All Rights Reserved by &nbsp;
            <a
              className='underline'
              href='https://www.facebook.com/shahin19sep'
              target='_blank'
            >
              Shahinur Alam Bhuiyan.
            </a>
          </p>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
