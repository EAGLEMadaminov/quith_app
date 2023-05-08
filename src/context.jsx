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
  const [choosen, setChoosen] = useState(false);
  const [incorrect, setIncorrect] = useState(false);

  const chooseBtn = (e) => {
    e.preventDefault();
    setChoosen(true);
    let setUrl = `${url}${amount}${category}${difficulty}${type}`;
    getAllData(setUrl);
    router.push("/quith");
  };
  const getAllData = async (url) => {
    setLoading(true);
    try {
      const { data } = await axios.get(url);
      setInfo(data.results);
      console.log(data.results);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  return (
    <AppContext.Provider
      value={{
        info,
        loading,
        amount,
        setLoading,
        setAmount,
        setCategory,
        setDifficulty,
        setType,
        setChoosen,
        setIncorrect,
        incorrect,
        chooseBtn,
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
