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
import Admin from "./components/Admin";
import EditPage from "./components/EditPage";
import ProfileDetailsAdmin from "./admin-components/ProfileDetailsAdmin";
import NextOfKinsAdmin from "./admin-components/NextOfKinsAdmin";
import PassportDetailsAdmin from "./admin-components/PassportDetailsAdmin";
import SeamenBookAdmin from "./admin-components/SeamenBookAdmin";
import AcademicQualificationsAdmin from "./admin-components/AcademicQualificationsAdmin";
import CertificateOfCompetancyAdmin from "./admin-components/CertificateOfCompetancyAdmin";
import StcwOtherCertificatesAdmin from "./admin-components/StcwOtherCertificatesAdmin";
import RefrencesAdmin from "./admin-components/RefrencesAdmin";
import HowKnowUsAdmin from "./admin-components/HowKnowUsAdmin";
import PersonalDetailsAdmin from "./admin-components/PersonalDetailsAdmin";
import AdditionalDetailsAdmin from "./admin-components/AdditionalDetailsAdmin";
import ReasonOfApplicationAdmin from "./admin-components/ReasonOfApplicationAdmin";
import SeaExperienceAdmin from "./admin-components/SeaExperienceAdmin";
import ShoreAdmin from "./admin-components/ShoreAdmin";
import DeclarationAdmin from "./admin-components/DeclarationAdmin";
function App() {

    const [inputs, setInputs] = useState({
        rank_applied: "",
        present_rank: "",
        first_name: "",
        last_name: "",
        middle_name:"",
        kin_array: []
    });
    return (
        <Router>
            <div className="App">
                <Navbar />
                
                    


                            <Routes>
                                <Route exact path="/" element={<ProfileDetails setInputs={setInputs} inputs={inputs} />} />
                                <Route exact path="/dependents" element={<NextofKeens setInputs={setInputs} inputs={inputs} />} />
                                <Route exact path="/passport" element={<PassportDetails setInputs={setInputs} inputs={inputs}/>} />
                                <Route exact path="/seamenbook" element={<SeamenBook setInputs={setInputs} inputs={inputs}/>} />
                                <Route exact path="/academicQualifications" element={<AcademicQualifications setInputs={setInputs} inputs={inputs}/>} />
                                <Route exact path="/certificateofcompetency" element={<CertificateOfCompetancy setInputs={setInputs} inputs={inputs}/>} />
                                <Route exact path="/stcwandothercertificates" element={<StcwOtherCertificates setInputs={setInputs} inputs={inputs}/>} />
                                <Route exact path="/refrences" element={<Refrences setInputs={setInputs} inputs={inputs}/>} />
                                <Route exact path="/howyouknowus" element={<HowKnowUs setInputs={setInputs} inputs={inputs}/>} />
                                <Route exact path="/personaldetails" element={<PersonalDetails setInputs={setInputs} inputs={inputs}/>} />
                                <Route exact path="/additionalinformation" element={<AdditionalDetails setInputs={setInputs} inputs={inputs}/>} />
                                <Route exact path="/reasonofapplication" element={<ReasonOfApplication setInputs={setInputs} inputs={inputs}/>} />
                                <Route exact path="/seaexperience" element={<SeaExperience setInputs={setInputs} inputs={inputs}/>} />
                                <Route exact path="/onshoreservice" element={<OnShoreService setInputs={setInputs} inputs={inputs}/>} />
                                <Route exact path="/declaration" element={<Declaration setInputs={setInputs} inputs={inputs}/>} />
                                {/* admin starts */}
                                <Route exact path="/admin/edit" element={<EditPage/>} />
                                <Route exact path="/admin" element={<Admin/>}/>
                                <Route exact path="/admin/edit/profile" element={<ProfileDetailsAdmin />} />
                                <Route exact path="/admin/edit/dependents" element={<NextOfKinsAdmin  />} />
                                <Route exact path="/admin/edit/passport" element={<PassportDetailsAdmin />} />
                                <Route exact path="/admin/edit/seamenbook" element={<SeamenBookAdmin />} />
                                <Route exact path="/admin/edit/academicQualifications" element={<AcademicQualificationsAdmin />} />
                                <Route exact path="/admin/edit/certificateofcompetency" element={<CertificateOfCompetancyAdmin />} />
                                <Route exact path="/admin/edit/stcwandothercertificates" element={<StcwOtherCertificatesAdmin />} />
                                <Route exact path="/admin/edit/refrences" element={<RefrencesAdmin/>} />
                                <Route exact path="/admin/edit/howyouknowus" element={<HowKnowUsAdmin/>}  />
                                <Route exact path="/admin/edit/personaldetails" element={<PersonalDetailsAdmin />} />
                                <Route exact path="/admin/edit/additionalinformation" element={<AdditionalDetailsAdmin/>} />
                                <Route exact path="/admin/edit/reasonofapplication" element={<ReasonOfApplicationAdmin />} />
                                <Route exact path="/admin/edit/seaexperience" element={<SeaExperienceAdmin />} />
                                <Route exact path="/admin/edit/onshoreservice" element={<ShoreAdmin />} />
                                <Route exact path="/admin/edit/declaration" element={<DeclarationAdmin/>} />
                            </Routes>


            </div>
        </Router>
    );
}

export default App;
