import React from "react";
import { useGlobalContext } from "@/context";
import { useRouter } from "next/router";
import { BsArrowRepeat } from "react-icons/bs";
import { BiChevronsRight } from "react-icons/bi";
function Result({ data }) {
  const router = useRouter();
  const {
    correctNum,
    setCorrectNum,
    info,
    setNumItem,
    setAmount,
    setCategory,
    setDifficulty,
    setType,
  } = useGlobalContext();
  const handleRetry = () => {
    setNumItem(0);
  };

  const handleSelect = () => {
    router.replace("/");
    setNumItem(0);
    setAmount(10);
    setCategory("");
    setType("");
  };
  return (
    <div className="bg-[linear-gradient(90deg,#5041b2,#7969e6)]">
      <div className="w-[250px] md:w-[500px] lg:w-[700px] mx-auto  text-white h-[100vh]">
        <h1 className="text-3xl font-bold px-4">Results</h1>
        <div className="border border-white">
          {info.map((item, index) => {
            return (
              <div key={index}>
                <p className="my-5 px-4">
                  {index + 1} {item.question}
                </p>
              </div>
            );
          })}
          <h3 className="px-4">
            Correct answered {correctNum} out of {info.length}
          </h3>
          <div className="px-4 w-full flex justify-between my-3 ">
            <button
              className="uppercase px-2  flex items-center  bg-[#3F51B5] rounded-md text-[12px]"
              onClick={handleRetry}
            >
              Retry <BsArrowRepeat className="mx-1 text-[18px]" />
            </button>
            <button
              className="uppercase px-4 py-1 bg-[#3F51B5] flex items-center text-[12px]"
              onClick={handleSelect}
            >
              Select another
              <BiChevronsRight className="text-2xl" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Result;
