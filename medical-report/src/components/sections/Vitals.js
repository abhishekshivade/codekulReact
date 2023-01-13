import React from 'react'
import TextField from "@mui/material/TextField";

function Vitals() {
  return (
    <div className="my-5 border rounded border rounded">
      <h1 className="bg-pink-300 px-2 py-1 font-semibold">Vitals</h1>
      <div className="my-2 mb-">
        <label className="pl-2">Temp &nbsp; &nbsp;: &nbsp; </label>
        <TextField
          id="outlined-basic"
          label="&#8457;"
          className="w-36 ml-2"
          variant="outlined"
          size="small"
        />
        <label className="ml-7">Pulse rate : &nbsp; </label>
        <TextField
          id="outlined-basic"
          label="bpm"
          className="w-36 ml-2"
          variant="outlined"
          size="small"
        />
        <label className="ml-7">BP (systolic) : &nbsp; </label>
        <TextField
          id="outlined-basic"
          label="mm"
          className="w-36 ml-2"
          variant="outlined"
          size="small"
        />
        <label className="ml-7">BP (Diastolic) : &nbsp; </label>
        <TextField
          id="outlined-basic"
          label="mm"
          className="w-36 ml-2"
          variant="outlined"
          size="small"
        />
        <label className="ml-7">SpO2 : &nbsp; </label>
        <TextField
          id="outlined-basic"
          label="%"
          className="w-36 ml-2"
          variant="outlined"
          size="small"
        />
      </div>
      <div className="my-2">
        <label className="pl-2">Weight : &nbsp; </label>
        <TextField
          id="outlined-basic"
          label="kg"
          className="w-36 ml-2"
          variant="outlined"
          size="small"
        />
        <label className="ml-7">Height &nbsp; &nbsp; &nbsp;: &nbsp; </label>
        <TextField
          id="outlined-basic"
          label="cm"
          className="w-36 ml-2"
          variant="outlined"
          size="small"
        />
        <label className="ml-7">
          BMI &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;: &nbsp; </label>
        <TextField
          id="outlined-basic"
          label="kg/m2"
          className="w-36 ml-2"
          variant="outlined"
          size="small"
        />
        <label className="ml-7">Respiration &nbsp; &nbsp;: &nbsp; </label>
        <TextField
          id="outlined-basic"
          label="per"
          className="w-36 ml-2"
          variant="outlined"
          size="small"
        />
        <label className="ml-7">BSL &nbsp; &nbsp;: &nbsp; </label>
        <TextField
          id="outlined-basic"
          label="cm"
          className="w-36 ml-2"
          variant="outlined"
          size="small"
        />
      </div>
    </div>
  )
}

export default Vitals