import React from "react";
import Checkbox from "@mui/material/Checkbox"

function FamilyHistory() {
  return (
    <div className="border rounded my-2">
      <h1 className="bg-pink-300 px-2 py-1 font-semibold">Family History</h1>
      <div className="mt-5">
        <div className="flex my-5">
          <input className="border border-black rounded mx-5 px-2 w-1/3" type='text' placeholder="Bowel & Bladder"/>
          <input className="border border-black rounded px-2 w-1/3" type='text' placeholder="Blood Transfusion History" />
          <input className="border border-black rounded mx-5 px-2 w-1/3" type='text' placeholder="Allergy"/>
        </div>
        <div className="flex">
          <input className="border border-black rounded px-2 mx-5 w-1/3"  type='text' placeholder="Personal History"/>
          <input className="border border-black rounded px-2 mr-5 w-2/3"  type='text'  placeholder="Other Dieseases"/>
        </div>
        <div className="flex justify-between m-5">
          <div className="space-x-2">
            {/* <input type='checkbox'/> */}
            <Checkbox />
            <label>HTN</label>
          </div>
          <div className="space-x-2">
            <input type='checkbox'/>
            <label>DM</label>
          </div>
          <div className="space-x-2">
            <input type='checkbox'/>
            <label>Tuberculosis</label>
          </div>
          <div className="space-x-2">
            <input type='checkbox'/>
            <label>IHD</label>
          </div>
          <div className="space-x-2">
            <input type='checkbox'/>
            <label>Asthama</label>
          </div>
          <div className="space-x-2">
            <input type='checkbox'/>
            <label>Stroke</label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FamilyHistory;
