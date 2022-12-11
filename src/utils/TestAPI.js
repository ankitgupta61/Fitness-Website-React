import React from "react";
import { fetchData, exerciseOptions } from "../utils/fetchData";

const TestAPI = () => {
  const testApi = async () => {
    const exerciseData = await fetchData(
      "https://exercisedb.p.rapidapi.com/exercises",
      exerciseOptions
    );
    const cardioData = await fetchData(
      "https://exercisedb.p.rapidapi.com/exercises/bodyPart/cardio",
      exerciseOptions
    );
    console.log(exerciseData);
    console.log(cardioData);
  };
  testApi();
  return <div></div>;
};

export default TestAPI;
