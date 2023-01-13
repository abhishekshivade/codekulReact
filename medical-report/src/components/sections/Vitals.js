import React from 'react'

function Vitals() {
  return (
    <div className="my-5 border rounded border rounded">
      <h1 className="bg-pink-300 px-2 py-1 font-semibold">Vitals</h1>
      <div className="my-2 mb-">
        <label className="pl-2">Temp &nbsp; &nbsp;:</label>
        <input
          placeholder=" &#8457;"
          className="border border-black rounded w-40 ml-2"
        />
        <label className="ml-7">Pulse rate :</label>
        <input
          placeholder=" &#8457;"
          className="border border-black rounded w-40 ml-2"
        />
        <label className="ml-7">BP (systolic) :</label>
        <input
          placeholder=" mm"
          className="border border-black rounded w-40 ml-2"
        />
        <label className="ml-7">BP (Diastolic) :</label>
        <input
          placeholder=" mm"
          className="border border-black rounded w-40 ml-2"
        />
        <label className="ml-7">SpO2 :</label>
        <input
          placeholder=" %"
          className="border border-black rounded w-40 ml-2"
        />
      </div>
      <div className="my-2">
        <label className="pl-2">Weight :</label>
        <input
          placeholder=" kg"
          className="border ml-2 w-40 border-black rounded"
        />
        <label className="ml-7">Height &nbsp; &nbsp; &nbsp;:</label>
        <input
          placeholder=" cm"
          className="border ml-2 w-40 border-black rounded"
        />
        <label className="ml-7">
          BMI &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;:
        </label>
        <input
          placeholder=" kg/m2"
          className="border ml-2 w-40 border-black rounded"
        />
        <label className="ml-7">Respiration &nbsp; &nbsp;:</label>
        <input
          placeholder=" Per"
          className="border ml-2 w-40 border-black rounded"
        />
        <label className="ml-7">BSL &nbsp; &nbsp;:</label>
        <input
          placeholder=" cm"
          className="border ml-2 w-40 border-black rounded"
        />
      </div>
    </div>
  )
}

export default Vitals