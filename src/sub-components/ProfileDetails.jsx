import React from 'react'

const ProfileDetails = () => {
    return (
    <div>
            <div class="tab-content col-md-10" id="v-pills-tabContent">
                <div class="tab-pane fade show active" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
                    <form>
                        <div class="rounded-3 shadow">
                            <div class="display bg-light">
                                <h5 style={{paddingLeft:":2rem "}}><br /> Application Form / Personal Data Update form
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
                                                    <input />
                                                </div>

                                                <div class="form-group col-md-3 input-padding">
                                                    <label for="inputname">Rank Applied</label>
                                                    <input />
                                                </div>

                                                <div class="form-group col-md-3 input-padding">
                                                    <label for="inputname">Date Of Application</label>
                                                    <input />
                                                </div>

                                                <div class="form-group col-md-3 input-padding">
                                                    <label for="inputname">Date Of Availability</label>
                                                    <input />
                                                </div>

                                                <div class="form-group col-md-3 input-padding">
                                                    <label for="inputname">Agency</label>
                                                    <input />
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr/>

                                <div class="display form-heading">
                                    <h4 class="m-4">PROFILE DETAILS</h4>
                                </div>

                                <div class="d-flex justify-content-center">
                                    <div class="container-90">



                                        <div class="form-group d-flex ">
                                            <div class="form-group col-md-4  input-padding">
                                                <label for="inputname">Name</label>
                                                <input />
                                            </div><div class="form-group col-md-4  input-padding">
                                                <label for="inputname"></label>
                                                <input />
                                            </div><div class="form-group col-md-4  input-padding">
                                                <label for="inputname"></label>
                                                <input />
                                            </div>

                                        </div>
                                        <div class="form-group d-flex">

                                            <div class="form-group col-md-4 input-padding">
                                                <label for="dob">Date of birth</label>
                                                <input />
                                            </div>

                                            <div class="form-group col-md-4 input-padding">
                                                <label for="pob">Place of Birth</label>
                                                <input />
                                            </div>
                                            <div class="form-group col-md-4 input-padding">
                                                <label for="national">Nationality</label>
                                                <input />
                                                <option value="">select</option>

                                            </div>
                                        </div>

                                        <div class="form-group d-flex">
                                            <div class="form-group col-md-4 input-padding">
                                                <label for="married">Marritial Status</label>
                                                <input />
                                            </div>
                                            <div class="form-group col-md-4 input-padding">
                                                <label for="married">Smoker</label>
                                                <input />
                                            </div>
                                        </div>


                                        <div class="space-2 jumbotron p-3">
                                            <div class="row" style={{margin:"0 -30px!important"}}>
                                                <div class="col-md-6" style={{borderRight:"1px solid rgb(232, 232, 232)",paddingInline:" 30px"}} >
                                                    <div>
                                                        <div class="form-group col-md-12  input-padding  ">
                                                            <label for="addr1">Permanent
                                                                Address:</label>
                                                                <input />
                                                        </div>

                                                        <div class="d-flex ">
                                                            <div class="form-group col-md-6 input-padding ">
                                                                <label for="inputCity">City</label>
                                                                <input />
                                                            </div>
                                                            <div class="form-group col-md-6 input-padding">
                                                                <label for="inputCity">Pin code</label>
                                                                <input />
                                                            </div>
                                                        </div>

                                                        <div class="d-flex">
                                                            <div class="form-group col-md-6 input-padding ">
                                                                <label for="phone">Telephone</label>
                                                                <input />
                                                            </div>
                                                            <div class="form-group col-md-6  input-padding">
                                                                <label for="email">Email 1</label>
                                                                <input />
                                                            </div>
                                                        </div>

                                                        <div class="form-group col-12 input-padding">
                                                            <label for="airp">Nearest Domestic Airport</label>
                                                            <input />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class=" col-md-6 " style={{paddingInline:"30px"}}>
                                                    <div>
                                                        <div class="form-group col-md-12 input-padding">
                                                            <label for="addr1">Present Address:</label>
                                                            <input />
                                                        </div>
                                                        <div class="d-flex">
                                                            <div class="form-group col-md-6 input-padding ">
                                                                <label for="inputCity">City</label>
                                                                <input />
                                                            </div>
                                                            <div class="form-group col-md-6 input-padding">
                                                                <label for="inputCity">Pin code</label>
                                                                <input />
                                                            </div>
                                                        </div>

                                                        <div class="d-flex">
                                                            <div class="form-group col-md-6 input-padding ">
                                                                <label for="phone">Telephone</label>
                                                                <input />
                                                            </div>
                                                            <div class="form-group col-md-6  input-padding">
                                                                <label for="email">Email 1</label>
                                                                <input />
                                                            </div>
                                                        </div>

                                                        <div class="form-group col-12 input-padding">
                                                            <label for="airp">Nearest International Airport</label>
                                                            <input />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <hr />
                                        <a class="btn btn-primary btnNext mb-4 pull-right" >Next</a>
                                </div>
                                </div>
                        </div>
                    </form>
                </div>
            </div>
    </div>
)}

export default ProfileDetails