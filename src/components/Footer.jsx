import React from 'react'
import { SectionWrapper } from '../hoc'

const Footer = () => {
  return (
    <>
        <p className='text-center'>Copyright © 2023 All Rights Reserved by <a className='underline' href="https://www.facebook.com/shahin19sep" target='_blank'>Shahinur Alam Bhuiyan.</a></p>
    </>
  )
}

export default SectionWrapper(Footer, "");