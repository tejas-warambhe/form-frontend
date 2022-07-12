import React from 'react'

const Declaration = ({inputs, setInputs}) => {
    const sendData = async () => {
        const response = await fetch("https://marine-form-backend.herokuapp.com/upload", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(inputs),
        });
        const parseRes = await response.json();
        console.log(parseRes);
      };
  return (
    <div style={{width:"100%"}}>
                        <div >
                    <div class="rounded-5 shadow p-4">
                        <h4>DECLARATION </h4>
                        <br />
                        <p class="jumbotron p-3">
                            I declare that the information given by me in filling up this form to the best of my knowledge are true complete. I also declare that the documents submitted to NAUTICAL MARINE MANAGEMENT SERVICES PVT. LTD. Are genuine, given and signed by the persons
                            whose names appear on them. Any false declaration may render me liable for termination or dismissal
                        </p>

                        <div class="row my-3" style={{alignItems:"flex-end"}}>
                            <div class="col-md-4">
                                <label>Date: </label> <input/>
                            </div>

                            <div class="col-md-4">
                                <label>Upload Passport size Photo</label>
                                <div><input/></div>
                            </div>

                            <div class="col-md-4">
                                <label>Click on the "Choose File" button to upload Signature of applicant:</label> <input/>
                            </div>
                        </div>
                        <hr class="mt-3" />
                        <div class="end-tab">
                            <a class="btn btn-primary btnPrevious17">Previous</a>
                            <button class="btn btn-success nautical-submit" type="submit" title="Send" onClick={
                                (e) => {
                                    e.preventDefault();
                                    sendData();
                                }
                            }>Send</button>
                        </div>
                    </div>
                </div>
    </div>
  )
}

export default Declaration