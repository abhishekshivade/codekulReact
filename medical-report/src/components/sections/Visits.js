import React from 'react'
import Checkbox from "@mui/material/Checkbox"

function Visits() {
  return (
    <div className="w-1/2 border rounded">
      <h1 className="bg-orange-200 px-2 border rounded">Visits</h1>
      <table className="border-collapse border border-slate-400 w-full">
        <thead className="bg-slate-200">
          <th>Select</th>
          <th>Date</th>
          <th>IPD/OPD</th>
          <th>Location</th>
          <th>Dr. Name</th>
        </thead>
        <tbody>
          <tr>
            <td className="px-6">
            <Checkbox/>
            </td>
            <td>
              01/02/2022
            </td>
            <td> OPD</td>
            <td>
              OPD Hospital, Mumbai
            </td>
            <td>
              Dr. Mark F. Barry
            </td>
          </tr>
          <tr className="border border-slate-400">
            <td className="px-6">
              <Checkbox/>
            </td>
            <td>
              01/12/2021
            </td>
            <td> OPD</td>
            <td>
              OPD Hospital, Mumbai
            </td>
            <td>
              Dr. Mark F. Barry
            </td>
          </tr>
          <tr className="border border-slate-400">
            <td className="px-6">
              <Checkbox/>
            </td>
            <td>
              01/11/2021
            </td>
            <td> OPD</td>
            <td>
              OPD Hospital, Mumbai
            </td>
            <td>
              Dr. Mark F. Barry
            </td>
          </tr>
          <tr className="border border-slate-400">
            <td className="px-6">
              <Checkbox/>
            </td>
            <td>
              01/10/2021
            </td>
            <td> OPD</td>
            <td>
              OPD Hospital, Mumbai
            </td>
            <td>
              Dr. Mark F. Barry
            </td>
          </tr>
          <tr className="border border-slate-400">
            <td className="px-6">
              <Checkbox/>
            </td>
            <td>
              01/09/2021
            </td>
            <td> OPD</td>
            <td>
              OPD Hospital, Mumbai
            </td>
            <td>
              Dr. Mark F. Barry
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Visits