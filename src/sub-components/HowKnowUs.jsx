import React from 'react'

const HowKnowUs = () => {
  return (
    <div style={{width:"100%"}}>
                <div >
                    <div class="rounded-3 shadow p-4">
                        <div class="container-90 display form-heading">
                            <h4>HOW DID YOU COME TO KNOW ABOUT US?</h4>
                        </div>
                        <div class="row clearfix">
                            <div class="col-md-12 column table-responsive-lg">
                                <table class="table table-bordered table-hover" id="tab_logic">
                                    <tbody>
                                        <tr>
                                            <th class="text-center">
                                                A
                                            </th>
                                            <td>
                                                <label for="">Company presentation/seminar</label>
                                            </td>
                                            <td>
                                                Yes:<input/>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th class="text-center">
                                                B
                                            </th>
                                            <td>
                                                <label for="">Marine Club notice-board</label>
                                            </td>
                                            <td>
                                                Yes:<input/>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th class="text-center">
                                                C
                                            </th>
                                            <td>
                                                <label for="">Marine magazine advertisement</label>
                                            </td>
                                            <td>
                                                Yes:<input/>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th class="text-center">
                                                D
                                            </th>
                                            <td>
                                                <label for="">Newspaper advertisement</label>
                                            </td>
                                            <td>
                                                Yes:<input/>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th class="text-center">
                                                E
                                            </th>
                                            <td>
                                                <label for="">Told by seagoing friend (s)</label>
                                            </td>
                                            <td>
                                                Yes:<input/>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th class="text-center">
                                                F
                                            </th>
                                            <td>
                                                <label for="">Direct Mail from Company</label>
                                            </td>
                                            <td>
                                                Yes:<input/>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th class="text-center">
                                                G
                                            </th>
                                            <td>
                                                <label for="">Others (Please specify)</label>
                                            </td>
                                            <td>
                                                Yes:<input/>
                                            </td>
                                        </tr>

                                        <tr id='addr1'></tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div class="d-flex justify-content-between">
                            <a class="btn btn-primary btnPrevious9 my-3 " onclick="topFunction()">Previous</a>
                            <a class="btn btn-primary btnNext9 my-3 " onclick="topFunction()">Next</a>
                        </div>
                    </div>
                </div>

    </div>
  )
}

export default HowKnowUs