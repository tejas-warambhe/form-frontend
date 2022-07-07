import React from 'react'

const PersonalDetails = () => {
    return (
        <div style={{ width: "100%" }}>
            <div >
                <div class="rounded-3 shadow p-4">
                    <div class="container-90 display form-heading">
                        <h4>PERSONAL DETAILS</h4>
                    </div>
                    <div class="d-flex row">
                        <div class="col-md-3">
                            <label for="">Height: </label><input />
                        </div>
                        <div class="col-md-3">
                            <label for="">Weight: </label> <input />
                        </div>
                        <div class="col-md-3">
                            <label for="">BMI: </label> <input />
                        </div>
                    </div>
                    <div class="d-flex row my-3">
                        <div class="col-md-3">
                            <label for="">Color of eyes: </label> <input />
                        </div>
                        <div class="col-md-3">
                            <label for="">Color of Hair: </label> <input />
                        </div>
                    </div>
                    <div class="d-flex row  my-3" style={{alignItems:"flex-end"}}>
                        <div class="col-md-3 ">
                            <label>Any major illness / Surgery: </label>
                             <input />
                        </div>
                        <div class="col-md-3 ">
                            <label>If “YES”, kindly provide details separately: </label> 
                            <input />
                        </div>
                    </div>
                    <div class="d-flex row my-3">
                        <div class="col-md-3 ">
                            <label for="customer">
                                <h6>Have any defect in hearing:</h6>
                            </label> <input />
                        </div>
                        <div class="col-md-3 ">
                            <label for="customer">
                                <h6>Have any defect in vision:</h6>
                            </label> <input />
                        </div>
                        <div class="col-md-3">
                            <label for="customer">
                                <h6>Have any defect in speech:</h6>
                            </label> <input />
                        </div>
                    </div>
                    <div class="d-flex row my-3" style={{alignItems:"flex-end"}}>
                        <div class="col-md-4">
                            <label for="customer ">If your health is affected by any particular climate?</label>
                            <div><input /></div>
                        </div>
                        <br />
                        <div class="col-md-8">
                            <label>Please State : </label> <input />
                        </div>
                    </div>
                    <div class="d-flex row ">
                        <div >
                            <label>LAST DRAWN WAGES</label>
                            <input />
                        </div>
                    </div>
                    <hr />
                    <div class="d-flex justify-content-between ">
                        <a class="btn btn-primary btnPrevious10  " onclick="topFunction() ">Previous</a>
                        <a class="btn btn-primary btnNext10 " onclick="topFunction() ">Next</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PersonalDetails