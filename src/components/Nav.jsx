import React, { useState } from 'react'
import {headerLogo} from '../assets/images';
import {hamburger} from '../assets/icons';
import { navLinks } from '../constants';

const Nav = () => {

    const[open, setOpen] = useState(false)



  return (
    <header className='padding-x py-8 asbolute z-10 w-ful'>
        <nav className='flex justify-between items-center max-container'>
            <a>
                <img 
                    src={headerLogo} 
                    alt='Logo'
                    width={130}
                    height={29}
                >
                </img>
            </a>
            <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
                {
                    navLinks.map((item) => (
                        <li key={item.label}>
                            <a href={item.href} className='font-montserrat leading-normal text-lg text-slate-gray'>
                                {item.label}
                            </a>
                        </li>
                    ))
                }
            </ul>
            <div className='hidden max-lg:block z-[100] fixed top-7 right-8'>
                <img src={hamburger} alt='Hamb' width={25} height={25} className='cursor-pointer' onClick={() => setOpen(true)} />
            </div>

            <div className={`fixed z-[100] top-0 right-0 h-full w-64 bg-coral-red text-white transform transition-transform duration-300 ${open ? "translate-x-0" : "translate-x-full"}`}>
                <button onClick={() => setOpen(false)} className="text-2xl z-100 m-4 float-left active:text-white-400">
                     &times;
                </button>
                <ul className="mt-12 space-y-4">
                {
                    navLinks.map(item => (
                        <a href={item.href} key={item.label}>
                            <li key={item.label} className='active:bg-[#434343] px-5 flex items-center transition h-10 w-[220px] my-4 rounded-lg mx-4 hover:rounded-lg'>
                                <p className='ont-montserrat leading-normal text-lg text-white transition' >
                                    {item.label}
                                </p>
                            </li>
                        </a>
                    ))
                }
                </ul>
            </div>
            {open && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-30 z-40"
                    onClick={() => setOpen(false)}
                />
            )}
        </nav>
    </header>
  )
}

export default Nav