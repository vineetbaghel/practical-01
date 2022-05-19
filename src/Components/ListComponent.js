import React, { useContext, useEffect, useState } from "react";
import { context } from "../contextHook/Context";

function ListComponent() {
  const ctx = useContext(context);
  const [personList, setPersonList] = useState([]);
  useEffect(() => {
    setPersonList(ctx.personList);
  }, [ctx.personList]);
  const removeItem = (id) => {
    const prvList = [...ctx.personList];
    const newList = prvList.filter((data) =>  data.id !== id);
    setPersonList(newList);
  };
  return (
    <>
      {personList.map((data) => {
        return (
          <div className="list">
            <li>
              {data.gender === "Male" ? `Mr. ${data.fname} ${data.lname}` : `Mrs. ${data.fname} ${data.lname}`}
            </li>
            <span onClick={() => removeItem(data.id)}>X</span>
          </div>
        );
      })}
    </>
  );
}

export default ListComponent;
