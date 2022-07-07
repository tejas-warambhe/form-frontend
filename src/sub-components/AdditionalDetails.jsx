import React from 'react'

const AdditionalDetails = () => {
  return (
    <div style={{width:"100%"}}>
                        <div >
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
                                        <input/>
                                        </div>
                                    </td>
                                </tr>
                                <tr>

                                    <td>
                                        <label>Have you ever been bonded by any insurance company or bonding
                                        agency?</label>
                                    </td>
                                    <td>
                                        <div class="form-check ">
                                        <input/>
                                        </div>
                                    </td>

                                </tr>
                                <tr>

                                    <td>
                                        <label>Have you ever been convicted serious Criminal Offence, Other than
                                        minor traffic regulation? If yes give full details.</label>
                                    </td>
                                    <td>
                                        <div class="form-check ">
                                        <input/>

                                        </div>
                                        <div>
                                            <label>Details: </label> <input/>
                                        </div>
                                    </td>

                                </tr>
                                <tr>

                                    <td>
                                        <label>Have you ever been in a ship involved in an incident?
                                        If yes give full details.
                                    </label>
                                    </td>
                                    <td>
                                        <div class="form-check ">
                                        <input/>

                                        </div>
                                        <div>
                                            <label>Details: </label> <input/>
                                        </div>
                                    </td>

                                </tr>
                                <tr>

                                    <td>
                                        <label>Has your certificate ever been suspended?
                                        If yes state date of suspension.
                                    </label>
                                    </td>
                                    <td>
                                        <div class="form-check ">
                                        <input/>

                                        </div>
                                        <div class="my-2 ">

                                            <label>From:</label> <input/>
                                        </div>
                                        <div class="my-2">

                                            <label>To:</label> <input/>
                                        </div>
                                    </td>

                                </tr>
                                <tr id='addr1'></tr>
                            </tbody>
                        </table>
                        <hr />
                        <div class="d-flex justify-content-between ">
                            <a class="btn btn-primary btnPrevious13" onclick="topFunction() ">Previous</a>
                            <a class="btn btn-primary btnNext13" onclick="topFunction() ">Next</a>
                        </div>
                    </div>
                </div>

    </div>
  )
}

export default AdditionalDetails