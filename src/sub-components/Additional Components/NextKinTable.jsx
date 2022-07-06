import React from 'react'

function NextKinTable(props) {
  return (
    <div id={props.uid}>
        <table
                    class="table table-bordered table-hover "
                    id="tab_logic"
                  >
                    <thead>
                      <tr class="table-info">
                        <th class="text-center">Sr.no</th>
                        <th class="text-center">Name</th>
                        <th class="text-center">Relationship</th>
                        <th class="text-center">Date of Birth</th>
                        <th class="text-center">PP No./ Other Id</th>
                      </tr>
                    </thead>

                    <tbody>
                      <tr id="addr0" class="">
                        <td>1</td>
                        <td>
                          <input
                            type="text"
                            name="name0"
                            placeholder="Name"
                            class="form-control"
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            name="relation0"
                            placeholder="Relationship"
                            class="form-control"
                          />
                        </td>
                        <td>
                          <input type="date" name="dob0" class="form-control" />
                        </td>
                        <td>
                          <input
                            type="text"
                            name="ppno0"
                            placeholder="PP No."
                            class="form-control"
                          />
                        </td>
                      </tr>
                      <tr id="addr1"></tr>
                    </tbody>
                  </table>
    </div>
    
  )
}

export default NextKinTable