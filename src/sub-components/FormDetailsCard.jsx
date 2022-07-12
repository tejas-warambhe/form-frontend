
import React from "react";
import { useNavigate } from "react-router-dom";


function FormDetailsCard({ name, present_rank, rank_applied, id, getForms }) {

  let  navigate  = useNavigate();

  const deleteForm = async (e) => {
    e.preventDefault();
    const response = await fetch(`https://marine-form-backend.herokuapp.com/admin/form/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const parseRes = await response.json();
    console.log(parseRes);
    getForms();
  };
  return (
    <div>
      <div class="card " style={{ width: "62rem" }}>
        <div class="card-body">
          <h5 class="card-title">{name}</h5>
          <h6 class="card-subtitle mb-2 text-muted">
            Current Rank : {present_rank}
          </h6>
          <p class="card-text">Rank Applied : {rank_applied}</p>
          <button onClick={(e) => deleteForm(e)} class="btn btn-primary">
            Delete
          </button>
          <button onClick={(e) => {
            e.preventDefault();
            //edit page
            navigate(`/admin/edit?q=${id}`);
          }} class="btn btn-warning">
            Edit  
          </button>
        </div>
      </div>
    </div>
  );
}

export default FormDetailsCard;
