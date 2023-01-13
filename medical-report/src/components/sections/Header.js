import React from "react";
import searchBtn from "../../asset/Group 945.png";
import Checkbox from "@mui/material/Checkbox"

function Header() {
  return (
    <div>
      <h1 className="font-bold">IPD EMR </h1>
      <div className="flex gap-5 my-5">
        <input
          type="text"
          placeholder=" Search by UHID, Patient Name, Mobile No."
          className="w-80 border border-black rounded h-10"
        />
        <img src={searchBtn} alt="Search Button" className="h-10" />
        <Checkbox/>
        <label className="mt-2">Medico legal case</label>
      </div>
    </div>
  );
}

export default Header;
