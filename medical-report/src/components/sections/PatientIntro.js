import React from 'react'

function PatientIntro() {
  return (
    <div className="flex p-2 justify-between border w-full bg-slate-100 rounded">
      <div>
        <div className="flex gap-2">
          <label className="font-semibold">Patient Name : </label>
          <h1 className="text-slate-600">Mr. Suresh Shubhash Patil</h1>
        </div>
        <div className="flex gap-2">
          <label className="font-semibold">
            Gender &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; :
          </label>
          <h1 className="text-slate-600">Male</h1>
        </div>
        <div className="flex gap-2">
          <label className="font-semibold">Doctor Name : </label>
          <h1 className="text-slate-600">Dr. Jayant Pawar</h1>
        </div>
      </div>
      <div>
        <div className="flex gap-2">
          <label className="font-semibold">UHID &nbsp; &nbsp; : </label>
          <h1 className="text-slate-600">1-23155455</h1>
        </div>
        <div className="flex gap-2">
          <label className="font-semibold">Bed No. :</label>
          <h1 className="text-slate-600">1235</h1>
        </div>
      </div>
      <div>
        <div className="flex gap-2 mr-5">
          <label className="font-semibold">
            Age &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;:{" "}
          </label>
          <h1 className="text-slate-600">23Y 02M 04D</h1>
        </div>
        <div className="flex gap-2">
          <label className="font-semibold">Arrival Date & Time :</label>
          <h1 className="text-slate-600">Male</h1>
        </div>
      </div>
    </div>
  )
}

export default PatientIntro