import React from "react";
import { useGlobalContext } from "@/context";

function ChooseQuestion() {
  const {
    amount,
    setAmount,
    setCategory,
    setDifficulty,
    setType,
    chooseBtn,
  } = useGlobalContext();

  return (
    <div className="flex align-middle pt-[100px]">
      <div className="flex flex-col min-w-[200px] w-[300px] mx-auto ">
        <p className="text-[12px] mt-3 mb-2">Number of Questions</p>
        <form action="" onSubmit={chooseBtn} className="w-full">
          <input
            type="number"
            className="w-full py-2 bg-transparent border-b border-gray-900 outline-none"
            value={amount}
            min="1"
            max="50"
            onChange={(e) => setAmount(e.target.value)}
          />
          <p className="text-[12px] mt-3 mb-2">Choose quith category </p>
          <select
            name="category "
            onChange={(e) => setCategory(`&category=${e.target.value}`)}
            className="py-2 w-full bg-transparent border-b border-gray-900 text-white focus:text-black  "
          >
            <option className="bg-gray-300 focus:bg-black" value="">
              Any Category
            </option>
            <option className="focus:bg-black" value="9">
              General Knowledge
            </option>
            <option value="10">Entertaiment Books</option>
            <option value="11">Entertaiment Films</option>
            <option value="12">Entertaiment Musics</option>
            <option value="13">Entertainment: Musicals & Theatres</option>
            <option value="14">Entertainment: Television</option>
            <option value="15">Entertainment: Video Games</option>
            <option value="16">Entertainment: Board Games</option>
            <option value="17">Science & Nature</option>
            <option value="18">Science: Computers</option>
            <option value="19">Science: Mathematics</option>
            <option value="20">Mythology</option>
            <option value="21">Sports</option>
            <option value="22">Geography</option>
            <option value="23">History</option>
            <option value="24">Politics</option>
            <option value="25">Art</option>
            <option value="26">Celebrities</option>
            <option value="27">Animals</option>
            <option value="28">Vehicles</option>
            <option value="29">Entertainment: Comics</option>
            <option value="30">Science: Gadgets</option>
            <option value="31">Entertainment: Japanese Anime & Manga</option>
            <option value="32">Entertainment: Cartoon & Animations</option>
          </select>
          <p className="text-[12px] mt-3 mb-2">Choose quith Difficulty</p>
          <select
            name="difficulty"
            id=""
            className="w-full py-2 bg-transparent border-b border-gray-900 text-white focus:text-black"
            onChange={(e) => setDifficulty(`&difficulty=${e.target.value}`)}
          >
            <option value="">Any Difficulty</option>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
          <p className="text-[12px] mt-3 mb-2">Choose Type</p>
          <select
            name="type"
            id=""
            className="w-full bg-transparent border-b py-2 border-gray-900 text-white focus:text-black"
            onChange={(e) => setType(`&type=${e.target.value}`)}
          >
            <option value="">Any Type</option>
            <option value="multiple">Multiple Choice</option>
            <option value="boolean">True / False</option>
          </select>
        </form>
        <button
          className="mx-auto mt-8 py-2  bg-[#AB47BC] text-white w-full  rounded-[5px]"
          onClick={chooseBtn}
        >
          <span className="text-xl">&#128710;</span> START
        </button>
      </div>
    </div>
  );
}

export default ChooseQuestion;
