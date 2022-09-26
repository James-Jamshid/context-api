import React from "react";
import HomePage from "./components/HomePage";
import Mode from "./components/Context";
//contextdan import qilgan Mode imiz HomePageni orab turishi kerak

const Root = () => {
  return (
    <div>
      <Mode>
        <HomePage />
      </Mode>
    </div>
  );
};

export default Root;
