import React from 'react'
import logo from '../public/logo-192x192.png'


// import {FaBeer } from 'react-icons/fa'

import Image from 'next/image'
import { VscAccount } from 'react-icons/vsc'
import { FaCartShopping } from 'react-icons/fa6'

const page = () => {
  return (
    <div>
     
     {/* header */}
      <div className="header
          flex items-center justify-between
          shadow-pryColor shadow-lg

        ">
        {/* logo */}
       <div className="logo
          flex items-center justify-start">
       <Image 
          src={logo}
          alt='logo'
          width={192}
          height= {192} 
          />
          
          <h1 
            className='title
              text-6xl text-pryColor font-extrabold 
              text-white '>
                MIP
              </h1>
       </div>


        {/* icons */}
      <div className="icon
          
            flex items-start place-self-start justify-around
            p-4 gap-4

          ">
        <VscAccount size={30} className='text-pryColor'/>
        <FaCartShopping size={30} className='text-pryColor' />
      </div>

      </div>

      {/* nav */}
      {/* <nav>
        <form >
          <input type="search"  id="" />
        </form>
      </nav> */}
    </div>
  )
}

export default page