import { FaCheck } from "react-icons/fa";
import React from "react";
import "../styles/Home/home.css";

const MyToDos = () => {
  const List = [
    { title: "achieve goal 1" },
    { title: "achieve goal 2" },
    { title: "achieve goal 3" },
    { title: "achieve goal 4" },
    { title: "achieve goal 5" },
  ];
  return (
    <div className="mytodos">
      <h2>This is your ToDo List for Today</h2>
      {List.map((list) => (
        <div>
          <span className="check">
            <FaCheck />
          </span>
          <label className="list-title">{list.title}</label>
        </div>
      ))}
    </div>
  );
};

export default MyToDos;
