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

    const [inputs, setInputs] = useState({
        rank_applied: "",
        present_rank: "",
    });
    return (
        <Router>
            <div className="App">
                <Navbar />
                <div>
                    <form className="top-sticky"  >
                        <div className="d-flex ms-3 py-3 flex-row-reverse">
                            <div className="aside-tabs">
                                <div className="nav flex-column nav-pills m-3 aside-tabs-scrolled" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                                    <Link to={'/'}><button className="newbtn nav-link">Profile Details</button></Link>
                                    <Link to={'/dependents'}><button className="newbtn nav-link" >Next of kin /
                                        Dependents</button></Link>
                                    <Link to={'/passport'}><button className="newbtn nav-link" >Passport details</button></Link>
                                    <Link to={'/seamenbook'}><button className="newbtn nav-link">Continuous Discharge Certificate / Seamen
                                        Book</button></Link>
                                    <Link to={'/academicQualifications'}><button className="newbtn nav-link" >Academic
                                        qualifications</button></Link>
                                    <Link to={'/certificateofcompetency'}><button className="newbtn nav-link" >Licene / certificate of competency</button></Link>
                                    <Link to={'/stcwandothercertificates'}><button className="newbtn nav-link" >STCW and other
                                        certificate</button></Link>
                                    <Link to={'/refrences'}><button className="newbtn nav-link">References</button></Link>
                                    <Link to={'/howyouknowus'}><button className="newbtn nav-link" >How did you come to
                                        know about us?</button></Link>
                                    <Link to={'/personaldetails'}><button className="newbtn nav-link" >Personal details</button></Link>
                                    <Link to={'/additionalinformation'}><button className="newbtn nav-link" >Additional
                                        Information</button></Link>
                                    <Link to={'/reasonofapplication'}><button className="newbtn nav-link">Reason for Application</button></Link>
                                    <Link to={'/seaexperience'}><button className="newbtn nav-link">SEA
                                        EXPERIENCE:<small>(Most recent at
                                            Top)Special Experience:</small></button></Link>
                                    <Link to={'/onshoreservice'}><button className="newbtn nav-link" >On-Shore
                                        Service</button></Link>
                                    <Link to={'/declaration'}><button className="newbtn nav-link">Declaration</button></Link>
                                </div>
                            </div>


                            <Routes>
                                <Route exact path="/" element={<ProfileDetails setInputs={setInputs} inputs={inputs} />} />
                                <Route exact path="/dependents" element={<NextofKeens setInputs={setInputs} inputs={inputs} />} />
                                <Route exact path="/passport" element={<PassportDetails />} />
                                <Route exact path="/seamenbook" element={<SeamenBook />} />
                                <Route exact path="/academicQualifications" element={<AcademicQualifications />} />
                                <Route exact path="/certificateofcompetency" element={<CertificateOfCompetancy />} />
                                <Route exact path="/stcwandothercertificates" element={<StcwOtherCertificates />} />
                                <Route exact path="/refrences" element={<Refrences />} />
                                <Route exact path="/howyouknowus" element={<HowKnowUs />} />
                                <Route exact path="/personaldetails" element={<PersonalDetails />} />
                                <Route exact path="/additionalinformation" element={<AdditionalDetails />} />
                                <Route exact path="/reasonofapplication" element={<ReasonOfApplication />} />
                                <Route exact path="/seaexperience" element={<SeaExperience />} />
                                <Route exact path="/onshoreservice" element={<OnShoreService />} />
                                <Route exact path="/declaration" element={<Declaration />} />
                            </Routes>

                        </div>
                    </form>
                </div>

            </div>
        </Router>
    );
}

export default App;
