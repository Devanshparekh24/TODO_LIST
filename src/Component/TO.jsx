// import React, { useState } from "react";

// function TO() {
//   const [activity, setActivity] = useState("");
//   const [list, setList] = useState([]);
//   function addActivity() {
//     setList((list) => {
//       const updateList = [...list, activity];
//       console.log(updateList);
//       return updateList;
//     });
//     setActivity("");
//   }
//   return (
//     <>
//       <div class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
//         <form action="">
//           <input
//             type="text"
//             className="bg-zinc-400 rounded-md  placeholder:write Here"
//             value={activity}
//             onChange={(e) => {
//               setActivity(e.target.value);
//             }}
//           />
//           <button
//             type="button"
//             className="ml-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
//             onClick={addActivity}
//           >
//             ADD
//           </button>
//         </form>
//         <div>
//           <h2>Here is my list</h2>
// {/*
//           <div>
//             {list.length > 0 &&
//               list.map((data, i) => {
//                 return <p key={i}>{data}</p>;
//               })}
//           </div> */}
//         </div>
//       </div>
//     </>
//   );
// }

// export default TO;

import React, { useState } from "react";

function TO() {
  [activity, setActivity] = useState("");
  // [listDaa]

  function addActivity() {
      
  }
  return (
   
    <>
      <div className=" block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 ">
        <form action="">
          <input
            type="text"
            className="bg-amber-400 px-4 py-4 ease-out duration-300 rounded-lg "
            value={activity}
            onChange={(e)=>{setActivity(e.target.value)}}
          />
          <button
            type="button"
            className="ml-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            onClick={addActivity}
          >
            ADD
          </button>
        </form>
      </div>
    </>
  );
}

export default TO;
