import React, { useState, useEffect } from "react";

// import ShoreAdmin from "../admin-components/ShoreAdmin";

import { useSearchParams } from "react-router-dom";
import NextOfKinsAdmin from "../admin-components/NextOfKinsAdmin";
import SeaExperienceAdmin from "../admin-components/SeaExperienceAdmin";
import ProfileDetailsAdmin from "../admin-components/ProfileDetailsAdmin";
import PassportDetailsAdmin from "../admin-components/PassportDetailsAdmin";
import SeamenBookAdmin from "../admin-components/SeamenBookAdmin";
import AcademicQualificationsAdmin from "../admin-components/AcademicQualificationsAdmin";
import CertificateOfCompetancyAdmin from "../admin-components/CertificateOfCompetancyAdmin";
import StcwOtherCertificatesAdmin from "../admin-components/StcwOtherCertificatesAdmin";
import RefrencesAdmin from "../admin-components/RefrencesAdmin";
import HowKnowUsAdmin from "../admin-components/HowKnowUsAdmin";
import PersonalDetailsAdmin from "../admin-components/PersonalDetailsAdmin";
import AdditionalDetailsAdmin from "../admin-components/AdditionalDetailsAdmin";
import ReasonOfApplicationAdmin from "../admin-components/ReasonOfApplicationAdmin";
import DeclarationAdmin from "../admin-components/DeclarationAdmin";

function EditPage({inputs,setInputs}) {
  const [searchParams, setSearchParams] = useSearchParams();
  const [loading, setLoading] = useState(true);
  // const [inputs, setInputs] = useState({
  //   kin_array: [],
  //   on_shore: [],
  //   special_experience: [],
  // });
  const getDetails = async () => {
    const query = localStorage.marine_form_id;
    console.log(query);
    const response = await fetch(
      `https://marine-form-backend.herokuapp.com/admin/form/${query}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const parseRes = await response.json();
    console.log("cowwww");
    console.log("i was here", parseRes.kin_array);
    console.log(parseRes, "after death");
    setInputs(parseRes);
    setLoading(false);
  };
  // getDetails();

  const updateForm = async (e) => {
    e.preventDefault();
    const query = localStorage.marine_form_id;
    
    const response = await fetch(
      `https://marine-form-backend.herokuapp.com/admin/form/update/${query}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(inputs),
      }
    );

    const parseRes = await response.json();
    console.log(parseRes);
  };

  useEffect(() => {
    getDetails();
  }, []);

  return loading ? (
    <div>Loading</div>
  ) : (
    <div>
      {/* <ProfileDetailsAdmin setInputs={setInputs} inputs={inputs} />
      <NextOfKinsAdmin
        setInputs={setInputs}
        inputs={inputs}
        getDetails={getDetails}
      />
      <PassportDetailsAdmin setInputs={setInputs} inputs={inputs} />
      <SeamenBookAdmin setInputs={setInputs} inputs={inputs} />
      <AcademicQualificationsAdmin setInputs={setInputs} inputs={inputs} />
      <CertificateOfCompetancyAdmin setInputs={setInputs} inputs={inputs} />
      <StcwOtherCertificatesAdmin setInputs={setInputs} inputs={inputs} />
      <RefrencesAdmin setInputs={setInputs} inputs={inputs} />
      <HowKnowUsAdmin setInputs={setInputs} inputs={inputs} />
      <PersonalDetailsAdmin setInputs={setInputs} inputs={inputs} />
      <AdditionalDetailsAdmin setInputs={setInputs} inputs={inputs} />
      <ReasonOfApplicationAdmin setInputs={setInputs} inputs={inputs} />
      <SeaExperienceAdmin
        setInputs={setInputs}
        inputs={inputs}
        getDetails={getDetails}
      />
      <ShoreAdmin
        setInputs={setInputs}
        inputs={inputs}
        getDetails={getDetails}
      />
      <DeclarationAdmin setInputs={setInputs} inputs={inputs} /> */}
      <button className="btn btn-primary" onClick={(e) => updateForm(e)}>
        {" "}
        Edit{" "}
      </button>
    </div>
  );
}

export default EditPage;
