import React from 'react'

const OnShoreService = () => {
  return (
    <div style={{width:"100%"}}>
                        <div>
                    <div class="rounded-5 shadow p-4">
                        <div class="container-90 display form-heading">
                            <h4>ON-SHORE SERVICES</h4>
                        </div>
                        <div class="row clearfix">
                            <div class="sea-tab column table-responsive-lg">
                                <table class="table table-bordered table-hover"  id="tab_logic5">
                                    <thead>
                                        <tr class="table-info">
                                            <th class="text-center">
                                                Sr. No.
                                            </th>
                                            <th class="text-center">
                                                Employer
                                            </th>
                                            <th class="text-center">
                                                Title
                                            </th>
                                            <th class="text-center">
                                                Workshop/ Shipyard
                                            </th>
                                            <th class="text-center">
                                                Name of Major Machines You Worked with
                                            </th>
                                            <th class="text-center">
                                                No of Personnel Supervised by you
                                            </th>
                                            <th class="text-center">
                                                Size & tonnage of Vessel Repaired
                                            </th>
                                            <th class="text-center">
                                                Period (From)
                                            </th>
                                            <th class="text-center">
                                                Period (To)
                                            </th>
                                            <th class="text-center">
                                                Any other useful information
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr id='adder0'>
                                            <td>
                                                1
                                            </td>
                                            <td>
                                                <input type="text" name='empl0' class="form-control" />
                                            </td>
                                            <td>
                                                <input type="text" name='title0' class="form-control" />
                                            </td>

                                            <td>
                                                <input type="text" name='works0' class="form-control" />
                                            </td>
                                            <td>
                                                <input type="text" name='machine0' class="form-control" />
                                            </td>
                                            <td>
                                                <input type="text" name='pers0' class="form-control" />
                                            </td>
                                            <td>
                                                <input type="text" name='size0' class="form-control" />
                                            </td>
                                            <td>
                                                <input type="date" name='from0' class="form-control" />
                                            </td>
                                            <td>
                                                <input type="date" name='to0' class="form-control" />
                                            </td>
                                            <td>
                                                <input type="text" name='any0' class="form-control" />
                                            </td>

                                        </tr>
                                        <tr id='adder1'></tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div class="mt-3">
                            <div class="d-flex justify-content-between">
                                <a id='delete_row5' class="pull-left btn btn-primary">Delete Row</a>
                                <a id="add_row5" class="btn btn-primary pull-right">Add Row</a>
                            </div>
                            <hr />
                            <div class="d-flex justify-content-between">
                                <a class="btn btn-primary btnPrevious16 " >Previous</a>
                                <a class="btn btn-primary btnNext16  " >Next</a>
                            </div>
                        </div>
                    </div>
                </div>
    </div>
  )
}

export default OnShoreService