import React from "react";
import { useNavigate } from 'react-router-dom';
import SidebarAdmin from "../components/SideBarAdmin";

const AdditionalDetailsAdmin = ({ inputs, setInputs }) => {
  const onChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };
  let navigate = useNavigate();

  return (
    <div style={{ width: "100%" }}>
      <SidebarAdmin />
      <div>
        <div class="rounded-5 shadow p-4 ">
          <div class="container-90 display form-heading ">
            <h4>ADDITIONAL INFORMATION</h4>
          </div>
          <table class="table table-bordered table-hover " id="tab_logic ">
            <tbody>
              <tr>
                <td>
                  <label>Have you applied to this company before?</label>
                </td>
                <td>
                  <div class="form-check ">
                    <input
                      value={inputs.applied_before}
                      name="applied_before"
                      onChange={(e) => onChange(e)}
                    />
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <label>
                    Have you ever been bonded by any insurance company or
                    bonding agency?
                  </label>
                </td>
                <td>
                  <div class="form-check ">
                    <input
                      value={inputs.ever_bonded}
                      name="ever_bonded"
                      onChange={(e) => onChange(e)}
                    />
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <label>
                    Have you ever been convicted serious Criminal Offence, Other
                    than minor traffic regulation? If yes give full details.
                  </label>
                </td>
                <td>
                  <div class="form-check ">
                    <input
                      value={inputs.crime_convicted}
                      name="crime_convicted"
                      onChange={(e) => onChange(e)}
                    />
                  </div>
                  <div>
                    <label>Details: </label>{" "}
                    <input
                      value={inputs.crime_convicted_details}
                      name="crime_convicted_details"
                      onChange={(e) => onChange(e)}
                    />
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <label>
                    Have you ever been in a ship involved in an incident? If yes
                    give full details.
                  </label>
                </td>
                <td>
                  <div class="form-check ">
                    <input
                      value={inputs.ship_accident}
                      name="ship_accident"
                      onChange={(e) => onChange(e)}
                    />
                  </div>
                  <div>
                    <label>Details: </label>{" "}
                    <input
                      value={inputs.ship_accident_details}
                      name="ship_accident_details"
                      onChange={(e) => onChange(e)}
                    />
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <label>
                    Has your certificate ever been suspended? If yes state date
                    of suspension.
                  </label>
                </td>
                <td>
                  <div class="form-check ">
                    <input
                      value={inputs.certificate_suspended}
                      name="certificate_suspended"
                      onChange={(e) => onChange(e)}
                    />
                  </div>
                  <div class="my-2 ">
                    <label>From:</label>{" "}
                    <input
                      value={inputs.certificate_suspended_from}
                      name="certificate_suspended_from"
                      onChange={(e) => onChange(e)}
                    />
                  </div>
                  <div class="my-2">
                    <label>To:</label>{" "}
                    <input
                      value={inputs.certificate_suspended_to}
                      name="certificate_suspended_to"
                      onChange={(e) => onChange(e)}
                    />
                  </div>
                </td>
              </tr>
              <tr id="addr1"></tr>
            </tbody>
          </table>
          <hr />
          <div class="d-flex justify-content-between ">
            <button class="btn btn-primary btnPrevious13" onClick={(e) => {
              e.preventDefault();
              navigate('/personaldetails');
            }}>
              Previous
            </button>
            <button class="btn btn-primary btnNext13" onClick={(e) => {
              e.preventDefault();
              navigate('/reasonofapplication')
            }}>
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdditionalDetailsAdmin;
