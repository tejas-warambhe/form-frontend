import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState } from "react";
import ProfileDetails from "./sub-components/ProfileDetails";
import NextofKeens from "./sub-components/NextofKeens";
import PassportDetails from "./sub-components/PassportDetails";
import SeamenBook from "./sub-components/SeamenBook";
import AcademicQualifications from "./sub-components/AcademicQualifications";
import CertificateOfCompetancy from "./sub-components/CertificateOfCompetancy";
import StcwOtherCertificates from "./sub-components/StcwOtherCertificates";
import Refrences from "./sub-components/Refrences";
import HowKnowUs from "./sub-components/HowKnowUs";
import PersonalDetails from "./sub-components/PersonalDetails";
import AdditionalDetails from "./sub-components/AdditionalDetails";
import ReasonOfApplication from "./sub-components/ReasonOfApplication";
import SeaExperience from "./sub-components/SeaExperience";
import OnShoreService from "./sub-components/OnShoreService";
import Declaration from "./sub-components/Declaration";
function App() {

  const { register, handleSubmit } = useForm();
  const [data, setData] = useState("");
  return (
    <Router>
    <div className="App">
      <Navbar />
      <div>
        <form className="top-sticky" action="{% url 'form_post'%}"  method="POST" >
            <div className="d-flex ms-3 py-3 flex-row-reverse">
                <div className="aside-tabs">
                    <div className="nav flex-column nav-pills m-3 aside-tabs-scrolled" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                        <Link to={'/'}><button className="newbtn nav-link active" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="true" >Profile Details</button></Link>
                        <Link to={'/dependents'}><button className="newbtn nav-link" id="dependents-tab" data-bs-toggle="pill" data-bs-target="#dependents" type="button" role="tab" aria-controls="dependents" aria-selected="false" onclick="topFunction()">Next of kin /
                            Dependents</button></Link>
                        <Link to={'/passport'}><button className="newbtn nav-link" id="passport-tab" data-bs-toggle="pill" data-bs-target="#passport" type="button" role="tab" aria-controls="passport" aria-selected="false" onclick="topFunction()">Passport details</button></Link>
                        <Link to={'/seamenbook'}><button className="newbtn nav-link" id="seamen-tab" data-bs-toggle="pill" data-bs-target="#seamen" type="button" role="tab" aria-controls="seamen" aria-selected="false" onclick="topFunction()">Continuous Discharge Certificate / Seamen
                            Book</button></Link>
                        <Link to={'/academicQualifications'}><button className="newbtn nav-link" id="academic-tab" data-bs-toggle="pill" data-bs-target="#academic" type="button" role="tab" aria-controls="academic" aria-selected="false" onclick="topFunction()">Academic
                            qualifications</button></Link>
                        <Link to={'/certificateofcompetency'}><button className="newbtn nav-link" id="licence-tab" data-bs-toggle="pill" data-bs-target="#licence" type="button" role="tab" aria-controls="licence" aria-selected="false" onclick="topFunction()">Licene / certificate of competency</button></Link>
                        <Link to={'/stcwandothercertificates'}><button className="newbtn nav-link" id="stcw-tab" data-bs-toggle="pill" data-bs-target="#stcw" type="button" role="tab" aria-controls="stcw" aria-selected="false" onclick="topFunction()">STCW and other
                            certificate</button></Link>
                        <Link to={'/refrences'}><button className="newbtn nav-link" id="reference-tab" data-bs-toggle="pill" data-bs-target="#reference" type="button" role="tab" aria-controls="reference" aria-selected="false" onclick="topFunction()">References</button></Link>
                        <Link to={'/howyouknowus'}><button className="newbtn nav-link" id="how-tab" data-bs-toggle="pill" data-bs-target="#how" type="button" role="tab" aria-controls="how" aria-selected="false" onclick="topFunction()">How did you come to
                            know about us?</button></Link>
                        <Link to={'/personaldetails'}><button className="newbtn nav-link" id="personal-tab" data-bs-toggle="pill" data-bs-target="#personal" type="button" role="tab" aria-controls="personal" aria-selected="false" onclick="topFunction()">Personal details</button></Link>
                        <Link to={'/additionalinformation'}><button className="newbtn nav-link" id="additional-tab" data-bs-toggle="pill" data-bs-target="#additional" type="button" role="tab" aria-controls="additional" aria-selected="false" onclick="topFunction()">Additional
                            Information</button></Link>
                        <Link to={'/reasonofapplication'}><button className="newbtn nav-link" id="reason-tab" data-bs-toggle="pill" data-bs-target="#reason" type="button" role="tab" aria-controls="reason" aria-selected="false" onclick="topFunction()">Reason for Application</button></Link>
                        <Link to={'/seaexperience'}><button className="newbtn nav-link" id="sea-tab" data-bs-toggle="pill" data-bs-target="#sea" type="button" role="tab" aria-controls="sea" aria-selected="false" onclick="topFunction()">SEA
                            EXPERIENCE:<small>(Most recent at
                                Top)Special Experience:</small></button></Link>
                        <Link to={'/onshoreservice'}><button className="newbtn nav-link" id="shore-tab" data-bs-toggle="pill" data-bs-target="#shore" type="button" role="tab" aria-controls="shore" aria-selected="false" onclick="topFunction()">On-Shore
                            Service</button></Link>
                        <Link to={'/declaration'}><button className="newbtn nav-link" id="declaration-tab" data-bs-toggle="pill" data-bs-target="#declaration" type="button" role="tab" aria-controls="declaration" aria-selected="false" onclick="topFunction()">Declaration</button></Link>
                    </div>
                </div>

                  <Routes>
                    <Route exact path="/" element={<ProfileDetails/>} />
                    <Route exact path="/dependents" element={<NextofKeens/>} />
                    <Route exact path="/passport" element={<PassportDetails/>} />
                    <Route exact path="/seamenbook" element={<SeamenBook/>} />
                    <Route exact path="/academicQualifications" element={<AcademicQualifications/>} />
                    <Route exact path="/certificateofcompetency" element={<CertificateOfCompetancy/>} />
                    <Route exact path="/stcwandothercertificates" element={<StcwOtherCertificates/>} />
                    <Route exact path="/refrences" element={<Refrences/>} />
                    <Route exact path="/howyouknowus" element={<HowKnowUs/>} />
                    <Route exact path="/personaldetails" element={<PersonalDetails/>} />
                    <Route exact path="/additionalinformation" element={<AdditionalDetails/>} />
                    <Route exact path="/reasonofapplication" element={<ReasonOfApplication/>} />
                    <Route exact path="/seaexperience" element={<SeaExperience/>} />
                    <Route exact path="/onshoreservice" element={<OnShoreService/>} />
                    <Route exact path="/declaration" element={<Declaration/>} />
                  </Routes>
        
            </div>
        </form>
    </div>
      
    </div>
    </Router>
  );
}

export default App;
