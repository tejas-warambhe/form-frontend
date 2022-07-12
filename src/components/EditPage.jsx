import React, { useState, useEffect } from "react";
import AcademicQualifications from "../sub-components/AcademicQualifications";
import AdditionalDetails from "../sub-components/AdditionalDetails";
import CertificateOfCompetancy from "../sub-components/CertificateOfCompetancy";
import Declaration from "../sub-components/Declaration";
import HowKnowUs from "../sub-components/HowKnowUs";
// import OnShoreServiceAdmin from "../sub-components/OnShoreServiceAdmin";
import ShoreAdmin from "../sub-components/ShoreAdmin";
import PassportDetails from "../sub-components/PassportDetails";
import PersonalDetails from "../sub-components/PersonalDetails";
import ProfileDetails from "../sub-components/ProfileDetails";
import ReasonOfApplication from "../sub-components/ReasonOfApplication";
import Refrences from "../sub-components/Refrences";
// import SeaExperience from "../sub-components/SeaExperience";
import SeamenBook from "../sub-components/SeamenBook";
import StcwOtherCertificates from "../sub-components/StcwOtherCertificates";
import { useSearchParams } from 'react-router-dom';
import NextOfKinsAdmin from "../sub-components/NextOfKinsAdmin";
import SeaExperienceAdmin from "../sub-components/SeaExperienceAdmin";

function EditPage() {
    const [searchParams, setSearchParams] = useSearchParams();
    // searchParams.get("q")
    // const { id } = searchParams.get("q");
    const [inputs, setInputs] = useState({
        kin_array: [],
        on_shore: [],
        special_experience: []
    });
    const getDetails = async () =>{
        const query = searchParams.get("q");
        const response = await fetch(`https://marine-form-backend.herokuapp.com/admin/form/${query}`, {
            method: "GET",
            headers:{
                "Content-Type" : "application/json"
            }
        });
        const parseRes = await response.json();
        console.log("cowwww");  
        console.log("i was here", parseRes.kin_array);
        console.log(parseRes, "after death");
        setInputs(parseRes);
    }
    // getDetails();

    const updateForm = async (e) => {
        e.preventDefault();
        const query = searchParams.get("q");
        const response = await fetch(`https://marine-form-backend.herokuapp.com/admin/form/update/${query}`, {
            method: "PUT",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(inputs)
        });

        const parseRes = await response.json();
        console.log(parseRes);
    } 

    useEffect( () => {
         getDetails();
    }, []);


  return (
    <div>
      <ProfileDetails setInputs={setInputs} inputs={inputs} />
      <NextOfKinsAdmin setInputs={setInputs} inputs={inputs} getDetails={getDetails}/>
      <PassportDetails setInputs={setInputs} inputs={inputs} />
      <SeamenBook setInputs={setInputs} inputs={inputs} />
      <AcademicQualifications setInputs={setInputs} inputs={inputs} />
      <CertificateOfCompetancy setInputs={setInputs} inputs={inputs} />
      <StcwOtherCertificates setInputs={setInputs} inputs={inputs} />
      <Refrences setInputs={setInputs} inputs={inputs} />
      <HowKnowUs setInputs={setInputs} inputs={inputs} />
      <PersonalDetails setInputs={setInputs} inputs={inputs} />
      <AdditionalDetails setInputs={setInputs} inputs={inputs} />
      <ReasonOfApplication setInputs={setInputs} inputs={inputs} />
      <SeaExperienceAdmin setInputs={setInputs} inputs={inputs} getDetails={getDetails}/>
      <ShoreAdmin setInputs={setInputs} inputs={inputs} getDetails={getDetails}/>
      <Declaration setInputs={setInputs} inputs={inputs} />
      <button className="btn btn-primary" onClick={(e) => updateForm(e)}> Edit </button>
    </div>
  );
}

export default EditPage;
