import React from 'react'
import Link from 'next/link'

const TopNav = (props: any) => {
  return (
    <nav className='fixed h-[70px] w-screen z-10 px-8 tall:px-12 lg:px-16 flex justify-between items-center bg-old-lace drop-shadow-lg' aria-label='Navigation Menu'>
      <a href="/"><h1 className='text-lg md:text-2xl lg:text-4xl text-purple font-bold uppercase' title='Home'>Boundless Courage</h1></a>
      <svg className='h-7 w-7 lg:hidden cursor-pointer' viewBox="0 0 24 24" fill="none" onClick={() => props.setOpenMenu(true)}>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M20.75 7C20.75 7.41421 20.4142 7.75 20 7.75L4 7.75C3.58579 7.75 3.25 7.41421 3.25 7C3.25 6.58579 3.58579 6.25 4 6.25L20 6.25C20.4142 6.25 20.75 6.58579 20.75 7Z" fill="#1C274C"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M20.75 12C20.75 12.4142 20.4142 12.75 20 12.75L4 12.75C3.58579 12.75 3.25 12.4142 3.25 12C3.25 11.5858 3.58579 11.25 4 11.25L20 11.25C20.4142 11.25 20.75 11.5858 20.75 12Z" fill="#1C274C"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M20.75 17C20.75 17.4142 20.4142 17.75 20 17.75L4 17.75C3.58579 17.75 3.25 17.4142 3.25 17C3.25 16.5858 3.58579 16.25 4 16.25L20 16.25C20.4142 16.25 20.75 16.5858 20.75 17Z" fill="#1C274C"/>
      </svg>
      <ul className='hidden lg:flex gap-4 text-lg'>
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
    </nav>
  )
}

export default TopNav