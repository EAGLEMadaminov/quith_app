import React, { useState } from "react";
import { useGlobalContext } from "../context.jsx";

function Questions() {
  const { info, loading } = useGlobalContext();
  const [numItem, setNumItem] = useState(0);

  console.log(numItem);
  if (loading) {
    return (
      <div className="bg-[#1c1717]  flex w-[100vw] justify-center items-center  h-[100vh]  mx-auto">
        <div className="text-center">
          <b>l</b>
          <b>o</b>
          <b>a</b>
          <b>d</b>
          <b>i</b>
          <b>n</b>
          <b>g</b>
        </div>
      </div>
    );
  }
  if (info.length === numItem) {
    return (
      <div>
        <h1>Resuls</h1>
        <p>{info[numItem].question}</p>
      </div>
    );
  }
  let newInfo = info.slice(numItem, 1);
  return (
    <div className="bg-[linear-gradient(90deg,#5041b2,#7969e6)] py-5 ">
      <h1 className="text-3xl font-bold text-center text-white">
        Answer on Questions
      </h1>
      {newInfo.map((item, index) => {
        return (
          <div
            key={index}
            className=" px-3 relative pt-2 pb-2 w-[500px] mx-auto border-2 lg:w-[700px] rounded m-2"
          >
            <p className="absolute right-8 text-white text-[12px]">
              {numItem + 1} out of {info.length}
            </p>
            <h2 className="text-xl text-white p-3 mt-3">
              {index + 1} {item.question}
            </h2>
            <div className="flex flex-col ">
              {item.incorrect_answers.map((one, ibtn) => {
                return (
                  <button
                    key={ibtn}
                    onClick={() => setNumItem(index + 1)}
                    className="border border-white m-2 p-1 px-3 text-left text-white rounded hover:bg-[#7666E2] active:bg-red-400"
                  >
                    {one}
                  </button>
                );
              })}
              <button
                onClick={() => {
                  setNumItem(index + 1);
                }}
                className="border border-white text-left p-1 px-3 text-white m-2 rounded hover:bg-[#7666E2] active:bg-green-300"
              >
                {item.correct_answer}
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Questions;
