import Header from "../../pages/Header"

const Employee = ({data}) => (
  
  <>
   
   
   
    <Header data = {data.firstName}/>
    <div className="p-2.5 flex items-center gap-3 h-70 w-full">
      <div className="h-[80%] bg-green-300 w-1/4 flex flex-col justify-center gap-3 items-center">
        <h1 className="text-5xl text-black">{data.taskCount.newTask}</h1>
        <h1 className="text-5xl text-black">New Task</h1>
      </div>

      <div className="h-[80%] bg-gray-400 w-1/4 flex flex-col justify-center gap-3 items-center">
        <h1 className="text-5xl text-black">{data.taskCount.completed}</h1>
        <h1 className="text-5xl text-black">Complete</h1>
      </div>

      <div className="h-[80%] bg-purple-300 w-1/4 flex flex-col justify-center gap-3 items-center">
        <h1 className="text-5xl text-black">{data.taskCount.accepted}</h1>
        <h1 className="text-5xl text-black">Accepted</h1>
      </div>

      <div className="h-[80%] bg-cyan-600 w-1/4 flex flex-col justify-center gap-3 items-center">
        <h1 className="text-5xl text-black">{data.taskCount.failed}</h1>
        <h1 className="text-5xl text-black">Failed</h1>
      </div>

    </div>

    <div className="remove_scollbar p-2.5 flex items-center overflow-x-auto  gap-3 h-80 w-full">
      <div className="h-[100%] shrink-0 bg-blue-300 w-1/4 flex flex-col gap-3 items-center">
        <h2 className="text-2xl font-light text-black">10-june-2026</h2>
        <h1 className="text-3xl mt-3 mb-3 font-extrabold text-black">Making a Project</h1>
        <p className="p-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis ullam mollitia aut ea similique facilis expedita tenetur illum, dicta dolor quos consequatur maxime soluta tempora rerum necessitatibus vero consectetur labore.
          Facere deserunt laborum..</p>


      </div>

      

    </div>
  </>
  
  
)

export default Employee
