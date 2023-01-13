import React from "react";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";

function FamilyHistory() {
  return (
    <div className="border rounded my-2">
      <h1 className="bg-pink-300 px-2 py-1 font-semibold">Family History</h1>
      <div className="mt-5">
        <div className="flex my-5 gap-5 px-5">
          <TextField
            id="outlined-basic"
            label="Bowel & Bladder"
            className="border border-black rounded mx-0 px-2 w-1/3"
            variant="outlined"
            size="small"
          />
          <TextField
            id="outlined-basic"
            label="Blood Transfusion History"
            className="border border-black rounded px-2 w-1/3"
            variant="outlined"
            size="small"
          />
          <TextField
            id="outlined-basic"
            label="Allergy"
            className="border border-black rounded mx-0 px-2 w-1/3"
            variant="outlined"
            size="small"
          />
        </div>
        <div className="flex gap-5 px-5">
          <TextField
            id="outlined-basic"
            label="Personal History"
            className="border border-black rounded mx-0 px-2 w-1/3"
            variant="outlined"
            size="small"
          />
          <TextField
            id="outlined-basic"
            label="Other Dieseases"
            className="border border-black rounded mx-0 px-2 w-2/3"
            variant="outlined"
            size="small"
          />
        </div>
        <div className="flex justify-between m-5">
          <div className="space-x-2">
            <Checkbox />
            <label>HTN</label>
          </div>
          <div className="space-x-2">
            <Checkbox />
            <label>DM</label>
          </div>
          <div className="space-x-2">
            <Checkbox />
            <label>Tuberculosis</label>
          </div>
          <div className="space-x-2">
            <Checkbox />
            <label>IHD</label>
          </div>
          <div className="space-x-2">
            <Checkbox />
            <label>Asthama</label>
          </div>
          <div className="space-x-2">
            <Checkbox />
            <label>Stroke</label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FamilyHistory;
