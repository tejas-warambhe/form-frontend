import React from 'react'

const SeaExperience = () => {
  return (
    <div style={{width:"100%"}}>
                <div >
                    <div class="rounded-5 shadow p-4 ">
                        <div class="container-90 display form-heading ">
                            <h4>SEA EXPERIENCE: (Most recent at Top) Special Experience</h4>

                        </div>
                        <div class="row clearfix ">
                            <div class="sea-tab column">
                                <table class="table table-bordered table-hover "  id="tab_logic4 ">
                                    <thead>
                                        <tr class="table-info ">
                                            <th class="text-center ">
                                                Employer
                                            </th>
                                            <th class="text-center ">
                                                RPSL Agent
                                            </th>
                                            <th class="text-center ">
                                                Vessel NAME & Type
                                            </th>
                                            <th class="text-center ">
                                                Steam /Motor
                                            </th>
                                            <th class="text-center ">
                                                DWT/GRT
                                            </th>
                                            <th class="text-center ">
                                                RANK
                                            </th>
                                            <th class="text-center ">
                                                Engine MODEL
                                            </th>
                                            <th class="text-center ">
                                                BHP
                                            </th>
                                            <th class="text-center ">

                                                Manned or Unmanned Engine Room
                                            </th>
                                            <th class="text-center ">
                                                FROM
                                            </th>
                                            <th class="text-center ">
                                                TO
                                            </th>
                                            <th class="text-center ">
                                                TOTAL
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr id='addy0'>
                                            <td>
                                                <input type="text " name='empl' placeholder="Enter employer " class="form-control " />
                                            </td>
                                            <td>
                                                <input type="text " name='rspl0'  class="form-control " />
                                            </td>
                                            <td>
                                                <input type="text " name='vessel0'  class="form-control " />
                                            </td>
                                            <td>
                                                <select class="form-control " name='stream_motor0' id=" ">
                                                <option value=" "></option>
                                                <option value="steam ">Steam</option>
                                                <option value="motor ">Motor</option>
                                            </select>
                                            </td>

                                            <td>
                                                <input type="number " name='dwt0' class="form-control " />
                                            </td>
                                            <td>
                                                <input type="text " name='rank0'class="form-control " />
                                            </td>
                                            <td>
                                                <input type="text " name='engine0' class="form-control " />
                                            </td>
                                            <td>
                                                <input type="text " name='bhp0' class="form-control " />
                                            </td>
                                            <td>
                                                <select name="engine_room " class="form-control ">
                                                <option value="--- " default>---</option>
                                                <option value="Manned ">Manned</option>
                                                <option value="Unmanned ">Unmanned</option>

                                            </select>
                                            </td>
                                            <td>
                                                <input type="date " name='fromdt0' class="form-control " />
                                            </td>
                                            <td>
                                                <input type="date " name='todt0' pattern=" " class="form-control " />
                                            </td>
                                            <td>
                                                <input type="number " name='total0' class="form-control " />
                                            </td>
                                        </tr>
                                        <tr id='addy1'></tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div class="mt-3">
                            <div class="d-flex justify-content-between ">
                                <a id="delete_row4" class="pull-left btn btn-primary">Delete Row</a>
                                <a id="add_row4" class="btn btn-primary pull-right">Add Row</a>
                            </div>
                            <hr />
                            <div class="d-flex justify-content-between">
                                <a class="btn btn-primary btnPrevious15" onclick="topFunction()">Previous</a>
                                <a class="btn btn-primary btnNext15" onclick="topFunction()">Next</a>
                            </div>
                        </div>
                    </div>
                </div>
    </div>
  )
}

export default SeaExperience