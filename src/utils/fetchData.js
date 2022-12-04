import React from "react";
export const exerciseOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "3ca3bdda00msh382edb1ad142923p1c7cb9jsne9ff1b803b99",
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();
  return data;
};
