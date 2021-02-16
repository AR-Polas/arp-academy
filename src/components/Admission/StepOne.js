import React from 'react'
import { useHistory } from "react-router-dom";

const StepOne =  ({nextStep}) => {
  let history = useHistory();

  const Back = () => {
    history.push("/");
  }

 const Continue = e => {
    e.preventDefault();
    nextStep();
};

  return (
    <div className="admission-container">
        <div className="admission-stepOne">
          <div className="text-center pt-4 admission-header">
              <h3 className="">ARP ACADEMY</h3>
          </div>
          <h3 onClick={Back}><i class="fas fa-arrow-circle-left brand-color m-3"></i></h3>
         <div className="admission-info text-center">
          <i class="fas fa-university admission-icon"></i>
         <h2>Admission Apply</h2>
          <p>Exerci tibique eum cu, paulo appellantur et mei, ea partem urbanitas vim. His ei iusto nonumes atomorum. Mentitum pericula in nec. In eos habemus tibique.</p>
          <button className="btn btn-brand text-white" onClick={Continue}>Continue <span><i class="fas fa-arrow-right"></i></span> </button>

         </div>
        </div>
    </div>
  )
}

export default StepOne;