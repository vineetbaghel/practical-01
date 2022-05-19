import React, { useContext, useState } from "react";
import { context } from "../contextHook/Context";

function InputComponent() {
  const ctx = useContext(context);
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    gender: "Male",
  });
  const [id, setId] = useState("");
  //   const [personList, setPersonList] = useState([]);
  let selectGender = ["Male", "Female"];
  const setData = (e) => {
    setId(Math.random());
    setFormData((prv) => ({ ...prv, [e.target.id]: e.target.value,  id }));
  };
  const submitName = (e) => {
    e.preventDefault();
    if (
      formData.fname === "" ||
      formData.lname === "" ||
      formData.gender === ""
    ) {
      alert("Fill the details");
    } else {
      ctx.setPersonList([...ctx.personList, formData]);
      setFormData({
        fname: "",
        lname: "",
        gender: "Male",
      });
    }
  };
  return (
    <>
      <div className="row">
        <div className="offset-md-3 col-md-6">
          <form onSubmit={(e) => submitName(e)}>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Enter First Name"
                value={formData.fname}
                onChange={(e) => setData(e)}
                id="fname"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Enter Last Name"
                value={formData.lname}
                onChange={(e) => setData(e)}
                id="lname"
              />
            </div>
            <div className="form-group">
              <select
                className="form-control"
                id="gender"
                onClick={(e) => setData(e)}
              >
                {selectGender.map((value, i) => {
                  return <option value={value}>{value}</option>;
                })}
              </select>
            </div>
            <button className="btn btn-success">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default InputComponent;
