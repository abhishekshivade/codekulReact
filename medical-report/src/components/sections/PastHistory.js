import React from 'react'
import Checkbox from "@mui/material/Checkbox"

function PastHistory() {
  return (
    <div className="w-1/2 border rounded">
      <h1 className="w-full bg-emerald-100 px-2 border rounded">Past History</h1>
      <div className="gap-5 flex pt-2">
        <div className="pl-5 space-y-3">
          <div className="flex">
            <Checkbox/>
            <label className="ml-2 mr-20"> DM</label>
            <input type="text" className="border w-48" />
          </div>
          <div className="flex">
            <Checkbox/>
            <label className="ml-2 mr-2"> Heart Disease</label>
            <input type="text" className="border w-48" />
          </div>
          <div className="flex">
            <Checkbox/>
            <label className="ml-2 mr-16"> COPD</label>
            <input type="text" className="border w-48" />
          </div>
          <div className="flex">
            <Checkbox/>
            <label className="ml-2 mr-16"> Liver &nbsp;</label>
            <input type="text" className="border w-48" />
          </div>
        </div>
        <div className="space-y-3">
          <div className="flex">
            <Checkbox/>
            <label className="ml-2 mr-8"> HTN</label>
            <input type="text" className="border w-48" />
          </div>
          <div className="flex">
            <Checkbox/>
            <label className="ml-2 mr-12"> TB</label>
            <input type="text" className="border w-48" />
          </div>
          <div className="flex">
            <Checkbox/>
            <label className="ml-2 mr-2"> Asthama</label>
            <input type="text" className="border w-48" />
          </div>
          <div className="flex">
            <Checkbox/>
            <label className="ml-2 mr-8">Other</label>
            <input type="text" className="border w-48" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default PastHistory