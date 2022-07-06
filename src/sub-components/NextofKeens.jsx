import React, { useEffect, useState } from "react";


const NextofKeens = ({ inputs, setInputs }) => {
    
    const [arr, setArr] = useState([0]);
  const onChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };
  let a = 1;
  const sendData = async () => {
    const response = await fetch("http://localhost:5000/upload", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(inputs),
    });
    const parseRes = await response.json();
    console.log(parseRes);
  };
  const incrementArr = () => {
    a += 1;

      setArr([...arr, a]);
    
  }
  const decrementArr = () => {
    var temp = arr;
    
    if(temp.length > 0){
        setArr(temp.splice(0, temp.length- 1));
    }
   
}


  return (
    <div style={{ width: "100%" }}>
      <div>
        <form class="rounded-3 shadow">
          <div class="display form-heading">
            <h4 class="p-4 pb-0">NEXT OF KIN / DEPENDENTS</h4>
          </div>

          <div>
            <div class="form-row">
              <div class="container-90">
                <div class="row">
                  <div class="form-group col-md-3 input-padding">
                    <label for="inputname">Name</label>
                    <input />
                  </div>

                  <div class="form-group col-md-3 input-padding">
                    <label for="inputname">Relation</label>
                    <input />
                  </div>

                  <div class="form-group col-md-3 input-padding">
                    <label for="inputname">Add NKD</label>
                    <input />
                  </div>
                </div>

                <div class="mt-4">
                <table
                    class="table table-bordered table-hover "
                    id="tab_logic"
                  >
                    <thead>
                      <tr class="table-info">
                        {/* <th class="text-center">Sr.no</th> */}
                        <th class="text-center">Name</th>
                        <th class="text-center">Relationship</th>
                        <th class="text-center">Date of Birth</th>
                        <th class="text-center">PP No./ Other Id</th>
                      </tr>
                    </thead>

                    <tbody>
                      <tr id="addr0" class="">
                        {/* <td>1</td> */}
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
                <div class="d-flex justify-content-center my-4">
                  {/* <a id="delete_row" class="pull-left btn btn-primary" onClick={decrementArr}>
                    Delete Row
                  </a> */}
                  <a id="add_row" class="btn btn-primary pull-right" onClick={incrementArr}>
                    Submit
                  </a>
                </div>
                <hr />

                <div>
                  
                </div>

                <div class="d-flex justify-content-between">
                  <a
                    class="btn btn-primary btnPrevious2 my-3"
                    onclick="topFunction()"
                  >
                    Previous
                  </a>
                  <a
                    class="btn btn-primary btnNext2 my-3 "
                    onclick="topFunction()"
                  >
                    Next
                  </a>
                </div>
              </div>
            </div>
          </div>
        </form>

        <br />
        <div class="container-90"></div>
      </div>
    </div>
  );
};

export default NextofKeens;
