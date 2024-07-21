import React from 'react'

const Navbar = () => {
    return (
        <nav className='bg-purple-200 ' >
            <div className="mycontainer flex justify-around items-center h-14 px-4 py-5">
                <div className="logo font-bold text-xl">
                    <span className='text-green-500'>&lt;</span>
                    Pass
                    <span className='text-green-500'>OP/&gt;</span>

                </div>
                <a href="https://github.com/VinaySingh1045" target='_blank'>
                    <button className="github rounded-full bg-green-500 px-3 py-2 flex items-center gap-1 font-bold">
                        <img className='' src="/github.svg" alt="" />
                        GitHub</button>
                </a>
            </div>
        </nav>
    )
}

export default Navbar
