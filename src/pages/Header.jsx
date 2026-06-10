import React from 'react'

const Header = () => {
  return (
    <>
       <div className="h-20 bg-blue-300 ">
      <nav className="p-3.5 flex justify-between items-center">
        <h1 >Wellcome <br /><span className="text-2xl">Himanshu 👋</span></h1>
        <button className="h-10 text-white w-20 bg-red-700 rounded-2xl border-none">LOGOUT</button>
      </nav>
    </div>
    </>
  )
}

export default Header
