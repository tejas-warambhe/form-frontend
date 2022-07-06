import React from 'react'

const AcademicQualifications = () => {
  return (
    <div style={{width:"100%"}}>
                <div >
                    <div class="p-4 rounded-3 shadow">
                        <div class="container-90 display form-heading">
                            <h4>ACADEMIC QUALIFICATIONS</h4>
                        </div>
                        <div class="row clearfix">
                            <div class="col-md-12 column table-responsive-lg">
                                <table class="table table-bordered table-hover" id="tab_logic">
                                    <thead>
                                        <tr class="table-info">
                                            <th class="text-center">

                                            </th>
                                            <th class="text-center">
                                                Name Of Institute/ City
                                            </th>
                                            <th class="text-center">
                                                Grade/Degree
                                            </th>
                                            <th class="text-center">
                                                From (Year)
                                            </th>
                                            <th class="text-center">
                                                To (Year)
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th>
                                                ELEMENTATY
                                            </th>
                                            <td>
                                               
                                            </td>
                                            <td>
                                                
                                            </td>
                                            <td>
                                                
                                            </td>
                                            <td>
                                                
                                            </td>
                                        </tr>
                                        <tr>
                                            <th>
                                                SECONDARY
                                            </th>
                                            <td>
                                                
                                            </td>
                                            <td>
                                                
                                            </td>
                                            <td>
                                                
                                            </td>
                                            <td>
                                                
                                            </td>
                                        </tr>
                                        <tr>
                                            <th>
                                                UNIVERSITY
                                            </th>
                                            <td>
                                                
                                            </td>
                                            <td>
                                                
                                            </td>
                                            <td>
                                                
                                            </td>
                                            <td>
                                                
                                            </td>
                                        </tr>
                                        <tr>
                                            <th>
                                                PROFESSIONAL QUALIFICATION
                                            </th>
                                            <td>
                                               
                                            </td>
                                            <td>
                                                
                                            </td>
                                            <td>
                                                
                                            </td>
                                            <td>
                                                
                                            </td>
                                        </tr>
                                        <tr id='addr1'></tr>
                                    </tbody>
                                </table>

                                <label for="">Additional Skills</label>
                            </div>
                        </div>
                        <div class="d-flex justify-content-between">
                            <a class="btn btn-primary btnPrevious5 my-3" onclick="topFunction()">Previous</a>
                            <a class="btn btn-primary btnNext5 my-3 " onclick="topFunction()">Next</a>
                        </div>
                    </div>
                </div>
    </div>
  )
}

export default AcademicQualifications