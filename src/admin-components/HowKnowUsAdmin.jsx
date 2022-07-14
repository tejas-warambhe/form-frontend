import React from "react";
import { useNavigate } from "react-router-dom";

const HowKnowUsAdmin = ({ inputs, setInputs }) => {
  const onChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };
  let navigate = useNavigate();
  return (
    <div style={{ width: "100%" }}>
      <div>
        <div class="rounded-3 shadow p-4">
          <div class="container-90 display form-heading">
            <h4>HOW DID YOU COME TO KNOW ABOUT US?</h4>
          </div>
          <div class="row clearfix">
            <div class="col-md-12 column table-responsive-lg">
              <table class="table table-bordered table-hover" id="tab_logic">
                <tbody>
                  <tr>
                    <th class="text-center">A</th>
                    <td>
                      <label for="">Company presentation/seminar</label>
                    </td>
                    <td>
                      <input
                        value={inputs.company_presentation}
                        name="company_presentation"
                        onChange={(e) => onChange(e)}
                        type="checkbox"
                        style={{ height: "50%", width: "50%", padding: "2px" }}
                      />
                    </td>
                  </tr>
                  <tr>
                    <th class="text-center">B</th>
                    <td>
                      <label for="">Marine Club notice-board</label>
                    </td>
                    <td>
                      <input
                        value={inputs.marine_club}
                        name="marine_club"
                        onChange={(e) => onChange(e)}
                        type="checkbox"
                        style={{ height: "50%", width: "50%", padding: "2px" }}
                      />
                    </td>
                  </tr>
                  <tr>
                    <th class="text-center">C</th>
                    <td>
                      <label for="">Marine magazine advertisement</label>
                    </td>
                    <td>
                      <input
                        value={inputs.marine_magzine}
                        name="marine_magzine"
                        onChange={(e) => onChange(e)}
                        type="checkbox"
                        style={{ height: "50%", width: "50%", padding: "2px" }}
                      />
                    </td>
                  </tr>
                  <tr>
                    <th class="text-center">D</th>
                    <td>
                      <label for="">Newspaper advertisement</label>
                    </td>
                    <td>
                      <input
                        value={inputs.newspaper_advertisement}
                        name="newspaper_advertisement"
                        onChange={(e) => onChange(e)}
                        type="checkbox"
                        style={{ height: "50%", width: "50%", padding: "2px" }}
                      />
                    </td>
                  </tr>
                  <tr>
                    <th class="text-center">E</th>
                    <td>
                      <label for="">Told by seagoing friend (s)</label>
                    </td>
                    <td>
                      <input
                        type="checkbox"
                        value={inputs.told_by_seagoing_friend}
                        name="told_by_seagoing_friend"
                        onChange={(e) => onChange(e)}
                        style={{ height: "50%", width: "50%", padding: "2px" }}
                      />
                    </td>
                  </tr>
                  <tr>
                    <th class="text-center">F</th>
                    <td>
                      <label for="">Direct Mail from Company</label>
                    </td>
                    <td>
                      <input
                        value={inputs.direct_mail}
                        name="direct_mail"
                        onChange={(e) => onChange(e)}
                        type="checkbox"
                        style={{ height: "50%", width: "50%", padding: "2px" }}
                      />
                    </td>
                  </tr>
                  <tr>
                    <th class="text-center">G</th>
                    <td>
                      <label for="">Others (Please specify)</label>
                    </td>
                    <td>
                      <input
                        value={inputs.others_advert}
                        name="others_advert"
                        onChange={(e) => onChange(e)}
                      />
                    </td>
                  </tr>

                  <tr id="addr1"></tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="d-flex justify-content-between">
            <button
              class="btn btn-primary btnPrevious9 my-3 "
              onClick={(e) => {
                e.preventDefault();
                navigate("/refrences");
              }}
            >
              Previous
            </button>
            <button
              class="btn btn-primary btnNext9 my-3 "
              onClick={(e) => {
                e.preventDefault();
                navigate("/personaldetails");
              }}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowKnowUsAdmin;