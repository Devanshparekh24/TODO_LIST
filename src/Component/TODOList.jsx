import React, { useState } from "react";
import { GrAdd } from "react-icons/gr";
import { IoMdRemove } from "react-icons/io";

function TODOList() {
  const [activity, setActivity] = useState("");
  const [listData, setListData] = useState([]);
  function addActivity() {
    // setListData([...listData, activity]);
    // console.log(listData);
    setListData((listData) => {
      const updateList = [...listData, activity];
      console.log(updateList);
      setActivity("");
      return updateList;
    });
  }

  function removeActivity(i) {
    const updatedListData = listData.filter((ele,id) => {
      return i !== id;
    });

    setListData(updatedListData);
  }

  function removeAll() {
    setListData([]);
  }

  return (
    <>
      <div className=" block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 ">
        <div className="flex items-center justify-center mb-5">
          <p class=" text-2xl text-transparent bg-clip-text bg-gradient-to-r to-blue-600 from-sky-400  antialiased hover:subpixel-antialiased">
            TODO list
          </p>
        </div>
        {/* form */}
        <form action="" className="flex gap-5 items-center ">
          <input
            type="text"
            placeholder="Write here..."
            name="text"
            value={activity}
            onChange={(e) => setActivity(e.target.value)}
            className="bg-amber-400 px-4 py-4 ease-out duration-300 rounded-lg  "
          />
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            onClick={addActivity}
          >
            {/* add icon */}
            <GrAdd />
          </button>
        </form>

        <div className="mt-5 mb-5">
          <h1 className="text-transparent bg-clip-text bg-gradient-to-r to-blue-600 from-sky-400 text-lg antialiased hover:subpixel-antialiased">
            Here Is my list :
          </h1>
        </div>
        {/* list */}
        <div className="flex flex-row gap-5">
          <div className=" flex flex-col   gap-2">
            {listData != [] &&
              listData.map((data, i) => {
                return (
                  <>
                    <p className="flex" key={i}>
                      <div className="">{data}</div>
                      {/* single remove*/}
                      <button
                        type="button"
                        className="ml-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                        onClick={() => {
                          removeActivity(i);
                        }}
                      >
                        {/* remove-icon */}
                        <IoMdRemove />
                      </button>
                    </p>
                  </>
                );
              })}
          </div>
        </div>
        {/* Remove ALL */}
        {/* Remove ALL */}
        <div className="flex justify-center items-center mt-5">
          {listData.length >= 1 && (
            <button
              type="button"
              className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
              onClick={removeAll}
            >
              Remove All
            </button>
          )}
        </div>
      </div>
    </>
  );
}

export default TODOList;
