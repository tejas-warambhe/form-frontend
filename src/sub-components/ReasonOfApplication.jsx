import React from 'react'

const ReasonOfApplication = () => {
  return (
    <div style={{width:"100%"}}>
                <div >
                    <div class="rounded-5 shadow p-4 ">
                        <div class="container-90 display form-heading ">
                            <h4>REASON FOR APPLICATION </h4>
                        </div>
                        <table class="table table-bordered table-hover " id="tab_logic ">
                            <tbody>
                                <tr>
                                    <td>
                                        <label>State why you wish to leave your present employment</label>
                                    </td>
                                    <td>
                                        <input/>
                                    </td>

                                </tr>
                                <tr>
                                    <td>
                                        <label>You may add here anything further you wish to in support of your
                                        application</label>
                                    </td>
                                    <td>
                                    <input/>
                                    </td>

                                </tr>
                                <tr>
                                    <td>
                                        <label>May we approach your present employer for a reference?
                                        If yes give contact details.
                                    </label>
                                    </td>
                                    <td>
                                    <input/> <br/> <input/>
                                    </td>

                                </tr>
                                <tr>
                                    <td>
                                        <label>What notice do you require to attend an interview?</label>
                                    </td>
                                    <td>
                                    <input/>
                                    </td>

                                </tr>
                                <tr id='addr1'></tr>
                            </tbody>
                        </table>
                        <hr />
                        <div class="d-flex justify-content-between">
                            <a class="btn btn-primary btnPrevious14" onclick="topFunction()">Previous</a>
                            <a class="btn btn-primary btnNext14" onclick="topFunction()">Next</a>
                        </div>
                    </div>
                </div>
    </div>
  )
}

export default ReasonOfApplication