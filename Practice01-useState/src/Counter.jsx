import { useState } from "react";

const Counter = () => {
  const [data, setData] = useState(0);

  const increase = () => {
    setData(data + 1);
  };

  return (
    <>
      <div className="container w-1/2 mx-auto flex flex-col items-center bg-slate-200 border space-x-4">
        <div>
          <div className="ml-8 text-2xl"> {data} </div>
          <button className="p-3 border border-black my-5" onClick={increase}>
            Click Me
          </button>
        </div>
      </div>
    </>
  );
};

export default Counter;
