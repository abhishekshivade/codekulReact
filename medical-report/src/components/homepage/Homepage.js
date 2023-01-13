import React from "react";
import Navbar from "../../asset/Screenshot from 2022-05-30 14-16-10 1.png";
import sideRect from "../../asset/Rectangle 266.png";
import Header from "../sections/Header";
import PatientIntro from "../sections/PatientIntro";
import Vitals from "../sections/Vitals";
import Visits from "../sections/Visits";
import PastHistory from "../sections/PastHistory";
import FamilyHistory from "../sections/FamilyHistory";
import Allergies from "../sections/Allergies";
import SergicalHistory from "../sections/SurgicalHistory";
import Complaints from "../sections/Complaints";
import Advice from "../sections/Advice";
import Diagnosis from "../sections/Diagnosis";
import DocDeptDetails from "../sections/DocDeptDetails";
import GenExamination from "../sections/GenExamination";
import InjuryDetails from "../sections/InjuryDetails";
import Pathology from "../sections/Pathology";
import Radiology from "../sections/Radiology";
import SplInstructions from "../sections/SplInstructions";
import SysExamination from "../sections/SysExamination";
import Medication from "../sections/Medication";
import LocalExamination from "../sections/LocalExamination";

function Homepage() {
  return (
    <div>
      <img src={Navbar} alt="navbar" className="w-full" />
      <div className="flex border">
        <img src={sideRect} alt="sideRect" />
        <div className="m-10 w-full">
          <Header/>
          <PatientIntro/>
          <Vitals/>
          <div className="flex gap-2">
            <Visits/>
            <PastHistory/>
          </div>
          <FamilyHistory/>
          <div>
            <Allergies/>
            <SergicalHistory/>
          </div>
          <div>
            <Complaints/>
            <LocalExamination/>
          </div>
          <div>
            <InjuryDetails/>
            <Diagnosis/>
          </div>
          <div>
            <Pathology/>
            <Radiology/>
          </div>
          <div>
            <GenExamination/>
            <SplInstructions/>
          </div>
          <SysExamination/>
          <Medication/>
          <Advice/>
          <DocDeptDetails/>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
