import React from 'react'
import { v4 as uuidv4 } from 'uuid';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRef, useState, useEffect } from 'react'

const Manager = () => {

  const ref = useRef();
  const passref = useRef();
  const [form, setForm] = useState({ site: "", username: "", password: "" })
  const [passwordArray, setPasswordArray] = useState([])

  const showPassword = () => {
    // console.log(ref.current.src);
    passref.current.type = "password"
    if (ref.current.src.includes("/eyecross.svg")) {
      ref.current.src = "/eye.svg";
      passref.current.type = "password";
    } else {
      ref.current.src = "/eyecross.svg"
      passref.current.type = "text"
    }
  }

  useEffect(() => {
    let passs = localStorage.getItem("passwords")
    if (passs) {
      setPasswordArray(JSON.parse(passs))
    }
  }, [])


  // const savePassword = () => {
  //   // console.log(form)
  //   // hum password set kar rahe hai .
  //   setPasswordArray([...passwordArray, form])
  //   localStorage.setItem("passwords", JSON.stringify([...passwordArray, form]))
  //   // console.log(...passwordArray , form)
  // }


  const savePassword = () => {
    if (form.site.length > 3 && form.username.length > 3 && form.password.length > 3) {

      setPasswordArray([...passwordArray, { ...form, id: uuidv4() }])
      localStorage.setItem("passwords", JSON.stringify([...passwordArray, { ...form, id: uuidv4() }]))
      toast('🦄 Password Saved!', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setForm({ site: "", username: "", password: "" })
    }
    else {
        toast("Please provide site ,username , and password more than length 3" , {position: "top-center"});
    }

    // console.log(...passwordArray , form)
  }
  const deletePassword = (id) => {
    let cnf = confirm("Are you really want to Delete?")
    if (cnf) {
      toast('🦄 Password Deleted!', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setPasswordArray(passwordArray.filter((item) => item.id !== id))
      localStorage.setItem("passwords", JSON.stringify(passwordArray.filter((item) => item.id !== id)))

    }
    // console.log(...passwordArray , form)
  }
  const editPassword = (id) => {
    setForm(passwordArray.filter(i => i.id === id)[0])
    setPasswordArray(passwordArray.filter((item) => item.id !== id))
  }

  const copyText = (text) => {
    toast('🦄 Copied to clipboard!', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    navigator.clipboard.writeText(text);
  }


  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }




  return (

    <div className=''>

      <ToastContainer />

      <div className=' lg:p-16  lg:mycontainer '>
        <div className="logo font-bold text-3xl text-center">
          <span className='text-green-500'>&lt;</span>
          Pass
          <span className='text-green-500'>OP/&gt;</span>

        </div>
        <p className='text-center my-2' >Your own Password Manager</p>

        <div className="text-black p-4 gap-8 items-center flex flex-col  " >
          <input onChange={handleChange} name='site' value={form.site} placeholder='Enter WebSite URL' className='rounded-full w-full border border-green-400 py-1 px-4 ' type="text" />
          <div className='flex gap-7 w-full flex-col lg:flex-row '>
            <input onChange={handleChange} value={form.username} placeholder='Enter Username' className='rounded-full w-full border border-green-400 py-1 px-4 ' type="text" name='username' />

            <div className="addiconpass relative">

              <input ref={passref} onChange={handleChange} value={form.password} placeholder='Enter Password' className='rounded-full w-full border border-green-400 py-1 px-4 ' type="password" name='password' />
              <span className='absolute right-[5px] top-[5px] cursor-pointer ' onClick={showPassword} >
                <img ref={ref} src="/eye.svg" alt="" />
              </span>
            </div>
          </div>
          <button onClick={savePassword} className='flex justify-center gap-3 items-center bg-green-500 w-fit rounded-full px-3 py-2 hover:bg-green-400' ><lord-icon
            src="https://cdn.lordicon.com/jgnvfzqg.json"
            trigger="hover">
          </lord-icon>
            Add Password</button>
        </div>


        <div className="Password  ">
          <h2 className='font-bold text-2xl py-3'>Your Password</h2>
          {passwordArray.length === 0 && <div>No password to show</div>}
          {passwordArray.length !== 0 &&

            <div className=" pb-8 ">

              <table className=" w-full rounded-lg overflow-hidden  ">
                <thead className='bg-green-600 text-white'>
                  <tr>
                    <th className='p-2'>Site</th>
                    <th className='p-2'>Username</th>
                    <th className='p-2'>Password</th>
                    <th className='p-2'>Actions</th>
                  </tr>
                </thead>
                <tbody className='bg-green-100 '>
                  {passwordArray.map((items, index) => (
                    <tr key={index} className='text-center'>
                      <td className='p-2 text-center'>
                        <div className="flex justify-center items-center gap-2 flex-wrap ">
                          <a href={items.site} target='_blank'><span className='flex flex-wrap break-all'>{items.site}</span></a>
                          <img onClick={() => copyText(items.site)} className='cursor-pointer pt-1' src="/copy.svg" alt="" />
                        </div>
                      </td>
                      <td className='p-2 text-center'>
                        <div className="flex justify-center items-center gap-2 flex-wrap">
                          <span className='flex flex-wrap break-all'>{items.username}</span>
                          <img onClick={() => copyText(items.username)} className='cursor-pointer pt-2' src="/copy.svg" alt="" />
                        </div>
                      </td>
                      <td className='p-2 text-center'>
                        <div className="flex justify-center items-center gap-2 flex-wrap ">
                          <span className='flex flex-wrap break-all'>{"*".repeat(items.password.length)}</span>
                          <img onClick={() => copyText(items.password)} className='cursor-pointer pt-2' src="/copy.svg" alt="" />
                        </div>
                      </td>
                      <td className='p-2 text-center'>
                        <div className="flex justify-center items-center gap-4 cursor-pointer  ">
                          <img onClick={() => editPassword(items.id)} className='cursor-pointer' src="/edit.svg" alt="" />
                          <img onClick={() => deletePassword(items.id)} className='cursor-pointer' src="/delete.svg" alt="" />
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          }
        </div>

      </div>


    </div>
  )
}

export default Manager
