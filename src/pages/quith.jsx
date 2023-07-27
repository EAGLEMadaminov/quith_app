import React, { useState } from "react";
import { useGlobalContext } from "../context.jsx";
import Result from "../components/Result.jsx";
import _ from "lodash";

function Questions() {
  const {
    info,
    loading,
    correctNum,
    setCorrectNum,
    numItem,
    setNumItem,
    item,
    setItem,
  } = useGlobalContext();

  const [ansBtnColor, setAnsBtnColor] = useState("bg-red-400");

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
  let checkItem = [];

  setItem(info[numItem]);
  if (info.length === numItem) {
    return <Result data={checkItem} item={item} />;
  }

  const newIncorAnswers = new Set(item?.incorrect_answers);
  let newAnswers = [...newIncorAnswers, item?.correct_answer];
  newAnswers = _.shuffle(newAnswers);

  const handleCheckBtn = (e) => {
    console.log(item);
    let index = e.currentTarget.dataset.key;
    if (newAnswers[index] === item.correct_answer) {
      setCorrectNum(correctNum + 1);
      item.question = item.question + " ✔";
    } else {
      setAnsBtnColor("bg-red-400");
      item.question = item.question + " ✘";
    }
    checkItem.push(item);
    setNumItem(numItem + 1);
  };
  return (
    <div className="bg-[linear-gradient(90deg,#5041b2,#7969e6)] py-5 h-[100vh] pt-[100px] ">
      <h1 className="text-3xl font-bold text-center text-white">
        Answer on Questions
      </h1>
      <div className=" px-3 relative pt-2 pb-2 w-[300px] md:w-[500px] mx-auto border-2 lg:w-[700px] rounded m-2">
        <p className="absolute right-8 text-white text-[12px]">
          {numItem + 1} out of {info.length}
        </p>
        <h2 className="text-xl text-white p-3 mt-3">
          {numItem + 1} {item?.question}
        </h2>
        <div className="flex flex-col ">
          {newAnswers.map((one, inBtn) => {
            return (
              <button
                key={inBtn}
                data-key={inBtn}
                onClick={handleCheckBtn}
                className={`border border-white m-2 p-1 px-3 text-left text-white rounded hover:bg-[#7666E2] active:${ansBtnColor}`}
              >
                {one}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Questions;
