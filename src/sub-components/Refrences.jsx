import React from 'react'

const Refrences = () => {
  return (
    <div style={{width:"100%"}}>
                        <div >
                    <div class="rounded-3 shadow p-4">
                        <div class="container-90 display form-heading">
                            <h4>REFERENCES</h4>
                        </div>
                        <div class="row clearfix">
                            <div class="col-md-12 column">
                                <table class="table table-bordered table-hover" id="tab_logic2">
                                    <thead>
                                        <tr class="table-info">
                                            <th class="text-center">
                                                Sr.no
                                            </th>
                                            <th class="text-center">
                                                Name
                                            </th>
                                            <th class="text-center">
                                                Company/Designation
                                            </th>

                                            <th class="text-center">
                                                Telephone/Contact NO.
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr id='adding0'>
                                            <td>
                                                1
                                            </td>
                                            <td>
                                                <input type="text" name='name_ref' placeholder='Name' class="form-control" />
                                            </td>
                                            <td>
                                                <input type="text" name='company0' placeholder='Company or Designation' class="form-control" />
                                            </td>

                                            <td>
                                                <input type="number" name='phone0' placeholder='Contact NO.' class="form-control" />
                                            </td>
                                        </tr>
                                        <tr id='adding1'>
                                            <td>
                                                2
                                            </td>
                                            <td>
                                                <input type="text" name='name_ref' placeholder='Name' class="form-control" />
                                            </td>
                                            <td>
                                                <input type="text" name='company0' placeholder='Company or Designation' class="form-control" />
                                            </td>

                                            <td>
                                                <input type="number" name='phone0' placeholder='Contact NO.' class="form-control" />
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div class="d-flex justify-content-between">
                                <a class="btn btn-primary btnPrevious8 my-3" onclick="topFunction()">Previous</a>
                                <a class="btn btn-primary btnNext8 my-3 " onclick="topFunction()">Next</a>
                            </div>
                        </div>
                    </div>
                </div>
    </div>
  )
}

export default Refrences