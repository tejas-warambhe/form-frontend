import React from 'react'

const SeamenBook = () => {
  return (
    <div style={{width:"100%"}}>
        <div >
                    <div class=" p-4 rounded-3 shadow">
                        <div class="container-90 display form-heading">
                            <h4>CONTINUOUS DISCHARGE CERTIFICATE / SEAMEN BOOK</h4>
                        </div>
                        <div class="row clearfix">
                            <div class="col-md-12 column table-responsive-lg">
                                <table class="table table-bordered table-hover" id="tab_logic">
                                    <thead>
                                        <tr class="table-info">
                                            <th class="text-center">

                                            </th>
                                            <th class="text-center">
                                                Number
                                            </th>
                                            <th class="text-center">
                                                Place of Issue
                                            </th>
                                            <th class="text-center">
                                                Date of Issue
                                            </th>
                                            <th class="text-center">
                                                Date of Expiry
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th class="table-info">
                                                INDIAN
                                            </th>
                                            <td>
                                                <input/>
                                            </td>
                                            <td>
                                            <input/>
                                            </td>
                                            <td>
                                            <input type="date"/>
                                            </td>
                                            <td>
                                            <input type="date"/>
                                            </td>
                                        </tr>
                                        
                                        <tr>
                                            <th class="table-info">
                                                PANAMA
                                            </th>
                                            <td>
                                            <input/>
                                            </td>
                                            <td>
                                            <input/>
                                            </td>
                                            <td>
                                            <input type="date"/>
                                            </td>
                                            <td>
                                            <input type="date"/>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th class="table-info">
                                                OTHERS
                                            </th>
                                            <td>
                                            <input/>
                                            </td>
                                            <td>
                                            <input/>
                                            </td>
                                            <td>
                                            <input type="date"/>
                                            </td>
                                            <td>

                                            <input type="date"/>
                                            </td>
                                        </tr>
                                        <tr id='addr1'></tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div class="d-flex justify-content-between">
                            <a class="btn btn-primary btnPrevious4 my-3" onclick="topFunction()">Previous</a>
                            <a class="btn btn-primary btnNext4 my-3 " onclick="topFunction()">Next</a>
                        </div>

                    </div>
                </div>
    </div>
  )
}

export default SeamenBook