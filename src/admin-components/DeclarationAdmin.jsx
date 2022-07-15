import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SidebarAdmin from "../components/SideBarAdmin";

const DeclarationAdmin = ({ inputs, setInputs }) => {
  const [imgFile, setImgFile] = useState({
    formal_photo: "",
    signature_photo: "",
  });
  const navigate = useNavigate();
  const [file, setFile] = useState({
    formal_photo: "",
    signature_photo: "",
  });

  const onFormChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const handleFileChange = (event) => {
    setFile({ ...file, [event.target.name]: event.target.files });
    console.log(file.formal_photo);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData();
    let id = event.target.id;
    // for (var x = 0; x < file.length; x++) {
    data.append("file", file[`${id}`][0]);
    // }
    axios.post("https://marine-form-backend.herokuapp.com/upload/file", data).then((res) => {
      console.log(res.data);
      setImgFile({
        ...imgFile,
        [event.target.id]:
          "https://marine-form-backend.herokuapp.com/public/images/" + res.data.filename,
      });
      setInputs({
        ...inputs,
        [event.target.id]:
          "https://marine-form-backend.herokuapp.com/public/images/" + res.data.filename,
      });
    });
    console.log(inputs.formal_photo);
  };

  const sendData = async (e) => {
    e.preventDefault();

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
    <div className="d-flex ms-3 py-3 flex-row-reverse">
      <SidebarAdmin />
      <div style={{ width: "100%" }}>
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
              <label>Date: </label>{" "}
              <input
              type="date"
                name="declaration_date"
                value={inputs.declaration_date}
                onChange={(e) => onFormChange(e)}
              />
            </div>

            <div class="col-md-4">
              <form>
                <div className="form-group">
                  <label htmlFor="file">Upload Formal Photo:</label>
                  <input
                    className="form-control-file mb-3"
                    type="file"
                    id="file"
                    name="formal_photo"
                    onChange={(e) => handleFileChange(e)}
                  />

                  <button
                    className="btn btn-primary mt-3"
                    id="formal_photo"
                    onClick={(e) => handleSubmit(e)}
                  >
                    Upload
                  </button>
                </div>
              </form>
              <div>
                <img
                  src={imgFile.formal_photo}
                  width={100}
                  height={100}
                  alt="img"
                />
              </div>
            </div>

            <div class="col-md-4">
              <label>
                Click on the "Choose File" button to upload Signature of
                applicant:
              </label>{" "}
              <input
                type="file"
                name="signature_photo"
                onChange={(e) => handleFileChange(e)}
              />
              <button
                className="btn btn-primary mt-3"
                id="signature_photo"
                onClick={(e) => handleSubmit(e)}
              >
                Upload
              </button>
              <div>
                <img
                  src={imgFile.signature_photo}
                  width={100}
                  height={100}
                  alt="img"
                />
              </div>
            </div>
          </div>
          <hr class="mt-3" />
          <div class="end-tab">
            <button class="btn btn-primary btnPrevious17" onClick={(e)=>{
              e.preventDefault();
              navigate('/admin/edit/onshoreservice')
            }}>
              Previous
              </button>
            <button
              class="btn btn-success nautical-submit"
              type="submit"
              title="Send"
              onClick={(e) => {
                sendData(e);
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

export default DeclarationAdmin;
