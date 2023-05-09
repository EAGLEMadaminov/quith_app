import React, { useContext, useState, useEffect } from "react";
import { useRouter } from "next/router";

const AppContext = React.createContext(null);
import axios from "axios";
const url = "https://opentdb.com/api.php?amount=";

const Approvider = ({ children }) => {
  const router = useRouter();

  const [info, setInfo] = useState([]);
  const [loading, setLoading] = useState(false);
  const [amount, setAmount] = useState(10);
  const [category, setCategory] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [type, setType] = useState("");
  const [incorrect, setIncorrect] = useState(1);
  const [numItem, setNumItem] = useState(0);
  const [correctNum, setCorrectNum] = useState(0);

  const chooseBtn = (e) => {
    e.preventDefault();
    let setUrl = `${url}${amount}${category}${difficulty}${type}`;
    getAllData(setUrl);
    router.push("/quith");
  };
  const getAllData = async (url) => {
    setLoading(true);
    try {
      const { data } = await axios.get(url);
      setInfo(data.results);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  return (
    <AppContext.Provider
      value={{
        loading,
        setLoading,
        info,
        amount,
        setAmount,
        setCategory,
        setDifficulty,
        setType,
        setIncorrect,
        incorrect,
        chooseBtn,
        numItem,
        setNumItem,
        correctNum,
        setCorrectNum
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppContext, Approvider };
