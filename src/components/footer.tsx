import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className='h-[25vh] w-screen flex flex-col justify-center items-center gap-4 bg-old-lace' aria-label='footer menu'>
      <a href="/"><h1 className='text-4xl text-purple font-bold uppercase' title='Home'>Boundless Courage, Inc</h1></a>
      <ul className='flex gap-4 text-lg'>
        <Link href='#our-story'><li className='hover:text-purple transition linear duration-300' title='Our Story'>Our Story</li></Link>
        <Link href='#events-home'><li className='hover:text-purple transition linear duration-300' title='Events'>Events</li></Link>
        <Link href='#tims'><li className='hover:text-purple transition linear duration-300' title='T.I.M.S.'>T.I.M.S.</li></Link>
        <Link href='#contact-us'><li className='hover:text-purple transition linear duration-300' title='Contact Us'>Contact Us</li></Link>
        <a href='https://www.facebook.com/BoundlessCourage' target='_blank' rel="noopener noreferrer">
          <li title='Boundless Courage Facebook'>
            <svg className='h-5 w-5 mt-1 fill-dark-armor hover:fill-purple transition linear duration-300'  version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <g id="7935ec95c421cee6d86eb22ecd11b7e3">
                <path d="M283.122,122.174c0,5.24,0,22.319,0,46.583h83.424l-9.045,74.367h-74.379
                  c0,114.688,0,268.375,0,268.375h-98.726c0,0,0-151.653,0-268.375h-51.443v-74.367h51.443c0-29.492,0-50.463,0-56.302
                  c0-27.82-2.096-41.02,9.725-62.578C205.948,28.32,239.308-0.174,297.007,0.512c57.713,0.711,82.04,6.263,82.04,6.263
                  l-12.501,79.257c0,0-36.853-9.731-54.942-6.263C293.539,83.238,283.122,94.366,283.122,122.174z">
                </path>
              </g>
            </svg>
          </li>
        </a>
      </ul>
      <p>Designed & Developed by <a className='text-purple hover:underline transition linear duration-300' href="http://djldev.com" target="_blank" rel="noopener noreferrer" title='DJLDev' aria-label='D.J.L.D. Developments Website'>DJLDev</a></p>
    </footer>
  )
}

export default Footer