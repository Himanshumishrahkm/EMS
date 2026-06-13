import React from 'react'

const CreateTask = () => {
  return (
    <div className="mt-8 h-[54vh] w-screen bg-[#1c1c1c]">
        <form className=' h-full w-full flex justify-between'>
            <div className=' flex flex-col justify-center items-center h-full gap-4 w-1/2'>
            <div>
            <h1 className='font-extralight text-1xl text-white mb-1'>Task Title</h1>
            <input className='h-10 pl-1 w-120 text-1xl text-white placeholder:text-1xl border-2 outline-none bg-transparent' type="text" placeholder='Eg. make a Sample pattern' />
            </div>

            <div>
            <h1 className='font-extralight text-1xl text-white mb-1'>Date</h1>
            <input className='h-10 pl-1 w-120 text-1xl text-white placeholder:text-1xl border-2 outline-none bg-transparent' type="Date" placeholder='Date'/>
            </div>
            <div>
            <h1 className='font-extralight text-1xl text-white mb-1'>Assign To</h1>
            <input className='h-10 pl-1 w-120 text-1xl text-white placeholder:text-1xl border-2 outline-none bg-transparent' type="text" placeholder='Your Employee name' />
            </div>
            <div>
            <h1 className='font-extralight text-1xl text-white mb-1'>Category</h1>
            <input className='h-10 pl-1 w-120 text-1xl text-white placeholder:text-1xl border-2 outline-none bg-transparent' type="text" placeholder='Design , Development' />
            </div>
            </div>
            <div className='h-full w-1/2 flex flex-col justify-center items-center'>
                <div>
                    <h1 className='font-extralight text-2xl text-white mb-2'>Description</h1>
                    <textarea className='h-55 w-140 pl-1 text-3xl text-white placeholder:text-2xl border-2 outline-none bg-transparent' type="text" placeholder='Give The Description' />
                </div>
                <button className='mt-3 h-15 w-48 bg-amber-700 outline-none rounded-3xl text-2xl font-medium' type='submit'>Create Task</button>
            </div>
        </form>
      
        </div>
  )
}

export default CreateTask
