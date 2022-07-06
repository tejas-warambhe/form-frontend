import React from 'react'

const PassportDetails = () => {
  return (
    <div style={{width:"100%"}}>
        <div >
        <div class="p-4 rounded-3 shadow">
            <div class="display form-heading container-90">
                <h4>PASSPORT DETAILS</h4>
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
                                    PASSPORT
                                </th>
                                <td>
                                    <input/>
                                </td>
                                <td>
                                    <input/>
                                </td>
                                <td>
                                    <input/>
                                </td>
                                <td>
                                <input/>
                                </td>
                            </tr>
                            <tr>
                                <th class="table-info">
                                    US VISA (C1/D)
                                </th>
                                <td>
                                    <input/>
                                </td>
                                <td>
                                    <input/>
                                </td>
                                <td>
                                    <input/>
                                </td>
                                <td>
                                    <input/>
                                </td>
                            </tr>
                            <tr>
                                <th class="table-info">
                                    YELLOW FEVER
                                </th>
                                <td>
                                    <input/>
                                </td>
                                <td>
                                    <input/> 
                                </td>
                                <td>
                                    <input/> 
                                </td>
                                <td>
                                    <input/> 
                                </td>
                            </tr>
                            <tr id='addr1'></tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="d-flex justify-content-between">
                <a class="btn btn-primary btnPrevious3 my-3" onclick="topFunction()">Previous</a>
                <a class="btn btn-primary btnNext3 my-3 " onclick="topFunction()">Next</a>


            </div>
        </div>
        </div>
    </div>
  )
}

export default PassportDetails