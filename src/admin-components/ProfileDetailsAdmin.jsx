import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import { useNavigate } from "react-router-dom";

const ProfileDetailsAdmin = ({ setInputs, inputs }) => {
  const onChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };
  let navigate = useNavigate();
  const sendData = async () => {
    const response = await fetch("https://marine-form-backend.herokuapp.com/upload",{
        method: "POST",
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify(inputs)
    })
    const parseRes = await response.json();
    console.log(parseRes);
  }

//   console.log(inputs);
  return (
    <div style={{width: "100%"}}>
      <div class="tab-content col-md-12" id="v-pills-tabContent">
        <div
          class="tab-pane fade show active"
          id="v-pills-profile"
          role="tabpanel"
          aria-labelledby="v-pills-profile-tab"
        >
          <form>
            <div class="rounded-3 shadow">
              <div class="display bg-light">
                <h5 style={{ paddingLeft: ":2rem " }}>
                  <br /> Application Form / Personal Data Update form
                </h5>
                <hr />
              </div>
              <div>
                <div class="display form-heading">
                  <h4 class="m-4">APPLIED TO OFFICE IN CITY / COUNTRY:</h4>
                </div>
                <div class="form-row">
                  <div class="container-90">
                    <div class="form-group">
                      <div class="row">
                        <div class="form-group col-md-3 input-padding">
                          <label for="inputname">Present Rank</label>
                          <input
                            value={inputs.present_rank}
                            name="present_rank"
                            onChange={(e) => onChange(e)}
                          />
                        </div>

                        <div class="form-group col-md-3 input-padding">
                          <label for="inputname">Rank Applied</label>
                          <input
                          value={inputs.rank_applied}
                          name="rank_applied"
                          onChange={(e) => onChange(e)} 
                          />
                        </div>

                        <div class="form-group col-md-3 input-padding">
                          <label for="inputname">Date Of Application</label>
                          {/* <input /> */}
                          <Stack
                            value={inputs.date_of_application}
                            name="date_of_application"
                            onChange={(e) => onChange(e)} 
                            component="form"
                            noValidate
                            spacing={1}
                            style={{
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                            }}
                          >
                            <TextField
                              id="date"
                              type="date"
                              defaultValue="2017-05-24"
                              sx={{ width: "100%" }}
                              InputLabelProps={{
                                shrink: true,
                              }}
                            />
                          </Stack>
                        </div>

                        <div class="form-group col-md-3 input-padding">
                          <label for="inputname">Date Of Availability</label>
                          <Stack
                          value={inputs.date_of_application}
                          name="date_of_application"
                          onChange={(e) => onChange(e)} 
                            component="form"
                            noValidate
                            spacing={1}
                            style={{
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                            }}
                          >
                            <TextField
                              id="date"
                              type="date"
                              defaultValue="2017-05-24"
                              sx={{ width: "100%" }}
                              InputLabelProps={{
                                shrink: true,
                              }}
                            />
                          </Stack>
                        </div>

                        <div class="form-group col-md-3 input-padding">
                          <label for="inputname">Agency</label>
                          <input value={inputs.agency}
                            name="agency"
                            onChange={(e) => onChange(e)} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <hr />

              <div class="display form-heading">
                <h4 class="m-4">PROFILE DETAILS</h4>
              </div>

              <div class="d-flex justify-content-center">
                <div class="container-90">
                  <div class="form-group d-flex ">
                    <div class="form-group col-md-4  input-padding">
                      <label for="inputname">First Name</label>
                      <input value={inputs.first_name}
                            name="first_name"
                            onChange={(e) => onChange(e)} />
                    </div>
                    <div class="form-group col-md-4  input-padding">
                      <label for="inputname">Middle Name</label>
                      <input value={inputs.middle_name}
                            name="middle_name"
                            onChange={(e) => onChange(e)} />
                    </div>
                    <div class="form-group col-md-4  input-padding">
                      <label for="inputname">Last Name</label>
                      <input value={inputs.last_name}
                            name="last_name"
                            onChange={(e) => onChange(e)} />
                    </div>
                  </div>
                  <div class="form-group d-flex">
                    <div class="form-group col-md-4 input-padding">
                      <label for="dob">Date of birth</label>
                      <Stack
                      value={inputs.date_of_birth}
                      name="date_of_birth"
                      onChange={(e) => onChange(e)} 
                        component="form"
                        noValidate
                        spacing={1}
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <TextField
                          id="date"
                          type="date"
                          defaultValue="2017-05-24"
                          sx={{ width: "100%" }}
                          InputLabelProps={{
                            shrink: true,
                          }}
                        />
                      </Stack>
                    </div>

                    <div class="form-group col-md-4 input-padding">
                      <label for="pob">Place of Birth</label>
                      <input value={inputs.place_of_birth}
                            name="place_of_birth"
                            onChange={(e) => onChange(e)} />
                    </div>
                    <div class="form-group col-md-4 input-padding">
                      <label for="national">Nationality</label>
                      <input value={inputs.nationality}
                            name="nationality"
                            onChange={(e) => onChange(e)} />
                      <option value="">select</option>
                    </div>
                  </div>

                  <div class="form-group d-flex">
                    <div class="form-group col-md-4 input-padding">
                      <label for="married">Marritial Status</label>
                      <input value={inputs.maritial_status}
                            name="maritial_status"
                            onChange={(e) => onChange(e)} />
                    </div>
                    <div class="form-group col-md-4 input-padding">
                      <label for="married">Smoker</label>
                      <input value={inputs.smoker}
                            name="smoker"
                            onChange={(e) => onChange(e)} />
                    </div>
                  </div>

                  <div class="space-2 jumbotron p-3">
                    <div class="row" style={{ margin: "0 -30px!important" }}>
                      <div  
                        class="col-md-6"
                        style={{
                          borderRight: "1px solid rgb(232, 232, 232)",
                          paddingInline: " 30px",
                        }}
                      >
                        <div>
                          <div class="form-group col-md-12  input-padding  ">
                            <label for="addr1">Permanent Address:</label>
                            <input value={inputs.permanent_address}
                            name="permanent_address"
                            onChange={(e) => onChange(e)} />
                          </div>

                          <div class="d-flex ">
                            <div class="form-group col-md-6 input-padding ">
                              <label for="inputCity">City</label>
                              <input value={inputs.city_permanent}
                            name="city_permanent"
                            onChange={(e) => onChange(e)} />
                            </div>
                            <div class="form-group col-md-6 input-padding">
                              <label for="inputCity">Pin code</label>
                              <input value={inputs.pin_code_permanent}
                            name="pin_code_permanent"
                            onChange={(e) => onChange(e)} />
                            </div>
                          </div>

                          <div class="d-flex">
                            <div class="form-group col-md-6 input-padding ">
                              <label for="phone">Telephone</label>
                              <input value={inputs.telephone_permanent}
                            name="telephone_permanent"
                            onChange={(e) => onChange(e)} />
                            </div>
                            <div class="form-group col-md-6  input-padding">
                              <label for="email">Email 1</label>
                              <input value={inputs.email_present}
                            name="email_present"
                            onChange={(e) => onChange(e)} />
                            </div>
                          </div>

                          <div class="form-group col-12 input-padding">
                            <label for="airp">Nearest Domestic Airport</label>
                            <input value={inputs.nearest_domestic_airport}
                            name="nearest_domestic_airport"
                            onChange={(e) => onChange(e)} />
                          </div>
                        </div>
                      </div>
                      <div class=" col-md-6 " style={{ paddingInline: "30px" }}>
                        <div>
                          <div class="form-group col-md-12 input-padding">
                            <label for="addr1">Present Address:</label>
                            <input value={inputs.present_address}
                            name="present_address"
                            onChange={(e) => onChange(e)} />
                          </div>
                          <div class="d-flex">
                            <div class="form-group col-md-6 input-padding ">
                              <label for="inputCity">City</label>
                              <input value={inputs.city_present}
                            name="city_present"
                            onChange={(e) => onChange(e)} />
                            </div>
                            <div class="form-group col-md-6 input-padding">
                              <label for="inputCity">Pin code</label>
                              <input value={inputs.pin_code_present}
                            name="pin_code_present"
                            onChange={(e) => onChange(e)} />
                            </div>
                          </div>

                          <div class="d-flex">
                            <div class="form-group col-md-6 input-padding ">
                              <label for="phone">Telephone</label>
                              <input value={inputs.telephone_present}
                            name="telephone_present"
                            onChange={(e) => onChange(e)} />
                            </div>
                            <div class="form-group col-md-6  input-padding">
                              <label for="email">Email 1</label>
                              <input value={inputs.email_permanent}
                            name="email_permanent"
                            onChange={(e) => onChange(e)} />
                            </div>
                          </div>

                          <div class="form-group col-12 input-padding">
                            <label for="airp">
                              Nearest International Airport
                            </label>
                            <input value={inputs.nearest_international_airport}
                            name="nearest_international_airport"
                            onChange={(e) => onChange(e)} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <hr />
                  <a class="btn btn-primary btnNext mb-4 pull-right" onClick={()=>{
                    navigate('/dependents');
                  }}>Next</a>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProfileDetailsAdmin;
