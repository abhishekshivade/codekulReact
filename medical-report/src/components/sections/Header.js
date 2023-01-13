import React from "react";
import searchBtn from "../../asset/Group 945.png";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";

function Header() {
  return (
    <div>
      <h1 className="font-bold">IPD EMR </h1>
      <div className="flex gap-5 my-5">
        <TextField
          id="outlined-basic"
          label="Search by UHID, Patient Name, Mobile No."
          className="w-96"
          variant="outlined"
          size="small"
        />
        <img src={searchBtn} alt="Search Button" className="h-10" />
        <Checkbox />
        <label className="mt-2">Medico legal case</label>
      </div>
    </div>
  );
}

export default Header;
