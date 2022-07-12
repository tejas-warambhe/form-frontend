import axios from "axios";
import React, {useState} from "react";


const Declaration = ({ inputs, setInputs }) => {
    const [imgFile, setImgFile] = useState('');
    const [file, setFile] = useState(null);


const handleFileChange = (event) => {
    setFile(event.target.files);
    console.log(file)
}
    const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData();
    for(var x = 0; x<file.length; x++) {
        data.append('file', file[x])
    }
    axios.post("https://marine-form-backend.herokuapp.com/upload/file", data)
    .then(res => { 
        console.log(res);
        setImgFile('https://marine-form-backend.herokuapp.com/public/images/'+ res.data.filename)
      })
}

  const sendData = async () => {
    handleSubmit();
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
    <div style={{ width: "100%" }}>
      <div>
        <div class="rounded-5 shadow p-4">
          <h4>DECLARATION </h4>
          <br />
          <p class="jumbotron p-3">
            I declare that the information given by me in filling up this form
            to the best of my knowledge are true complete. I also declare that
            the documents submitted to NAUTICAL MARINE MANAGEMENT SERVICES PVT.
            LTD. Are genuine, given and signed by the persons whose names appear
            on them. Any false declaration may render me liable for termination
            or dismissal
          </p>

          <div class="row my-3" style={{ alignItems: "flex-end" }}>
            <div class="col-md-4">
              <label>Date: </label> <input />
            </div>

            <div class="col-md-4">
            <form >
        <div className="form-group" >

            <label htmlFor="file">Upload Formal Photo:</label>
            <input 
            className="form-control-file mb-3" 
            type="file" id="file" 
            onChange={handleFileChange}
            />

            <button 
            className="btn btn-primary mt-3" 
            onClick={handleSubmit}
            >Upload</button>
        </div>
       </form>
       <div>

            <img src={imgFile} width={100} height={100} alt="img"/>
       </div>
            </div>

            <div class="col-md-4">
              <label>
                Click on the "Choose File" button to upload Signature of
                applicant:
              </label>{" "}
              <input
                type="file"
                encType="multipart/form-data"
                name="signature"
              />
            </div>
          </div>
          <hr class="mt-3" />
          <div class="end-tab">
            <a class="btn btn-primary btnPrevious17">Previous</a>
            <button
              class="btn btn-success nautical-submit"
              type="submit"
              title="Send"
              onClick={(e) => {
                e.preventDefault();
                sendData();
              }}
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Declaration;
