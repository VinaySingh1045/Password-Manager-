import React from 'react'

const Footer = () => {
    return (


        <div className='bottom-0 fixed text-center w-full flex justify-center items-center cursor-pointer text-xl gap-1 bg-[#615cf0] text-white px-4 py-2 h-16'>
            <div className='flex flex-col'>
                <div className="logo font-bold text-xl">
                    <span className='text-green-500'>&lt;</span>
                    Pass
                    <span className='text-green-500 mr-2'>OP/&gt;</span>

                </div>
                <div className='flex justify-center items-center gap-1'>
                    Created With
                    <lord-icon
                        src="https://cdn.lordicon.com/ohfmmfhn.json"
                        trigger="hover"
                        colors="primary:#ff0000,secondary:#ff0000,tertiary:#ff0000,quaternary:#f9c9c0,quinary:#e83a30,senary:#ebe6ef"
                    >
                    </lord-icon>  by VinaySingh...
                </div>
            </div>
        </div>
    )
}

export default Footer
