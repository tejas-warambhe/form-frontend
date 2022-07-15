import React from 'react';

import { Link } from 'react-router-dom';

const SidebarAdmin = () => {
  return (
    <div>
        <div>
                    <form className="top-sticky"  >
                        <div className="d-flex ms-3 py-3 flex-row-reverse">
                            <div className="aside-tabs">
                                <div className="nav flex-column nav-pills m-3 aside-tabs-scrolled" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                                    <Link to={'/admin/edit/profile'}><button className="newbtn nav-link">Profile Details</button></Link>
                                    <Link to={'/admin/edit/dependents'}><button className="newbtn nav-link" >Next of kin /
                                        Dependents</button></Link>
                                    <Link to={'/admin/edit/passport'}><button className="newbtn nav-link" >Passport details</button></Link>
                                    <Link to={'/admin/edit/seamenbook'}><button className="newbtn nav-link">Continuous Discharge Certificate / Seamen
                                        Book</button></Link>
                                    <Link to={'/admin/edit/academicQualifications'}><button className="newbtn nav-link" >Academic
                                        qualifications</button></Link>
                                    <Link to={'/admin/edit/certificateofcompetency'}><button className="newbtn nav-link" >Licene / certificate of competency</button></Link>
                                    <Link to={'/admin/edit/stcwandothercertificates'}><button className="newbtn nav-link" >STCW and other
                                        certificate</button></Link>
                                    <Link to={'/admin/edit/refrences'}><button className="newbtn nav-link">References</button></Link>
                                    <Link to={'/admin/edit/howyouknowus'}><button className="newbtn nav-link" >How did you come to
                                        know about us?</button></Link>
                                    <Link to={'/admin/edit/personaldetails'}><button className="newbtn nav-link" >Personal details</button></Link>
                                    <Link to={'/admin/edit/additionalinformation'}><button className="newbtn nav-link" >Additional
                                        Information</button></Link>
                                    <Link to={'/admin/edit/reasonofapplication'}><button className="newbtn nav-link">Reason for Application</button></Link>
                                    <Link to={'/admin/edit/seaexperience'}><button className="newbtn nav-link">SEA
                                        EXPERIENCE:<small>(Most recent at
                                            Top)Special Experience:</small></button></Link>
                                    <Link to={'/admin/edit/onshoreservice'}><button className="newbtn nav-link" >On-Shore
                                        Service</button></Link>
                                    <Link to={'/admin/edit/declaration'}><button className="newbtn nav-link">Declaration</button></Link>
                                </div>
                            </div>


                            

                        </div>
                    </form>
                </div>
    </div>
  )
}

export default SidebarAdmin;