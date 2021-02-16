import React from 'react';
import { Link, useHistory } from "react-router-dom";

const StepThree = ({ user, prevStep }) => {
    let history = useHistory();
    const [student, setStudent] = user
  
    const Back = e => {
      e.preventDefault();
      prevStep();
    };

    const handleSubmit = e => {
        e.preventDefault()
        alert("Form Submitted")
        console.log(student)
        history.push("/");
    }
    return (
      
    <div className="admission-container">
    <div className="admission-stepOne">
      <div className="text-center pt-4 admission-header">
      <Link to="/" className="text-decoration-none"> <h3 className="text-white">ARP ACADEMY</h3></Link>
      </div>
      <div className="admission-info">
      <h5 className="text-secondary">2/3</h5>
      <h4 className="text-center my-2 text-secondary"> Please fill your address</h4>
        <div className=" w-75  mx-auto admission-formDetails">
          <form onSubmit={handleSubmit}>
            <div class="mb-3">
              <label class="form-label">Address</label>
              <input type="text" class="form-control" value={student.address} onChange={(e) => setStudent({...student,address : e.target.value})} />
            </div>
            <div class="mb-3">
              <label class="form-label">City</label>
              <input type="text" class="form-control" value={student.city} onChange={(e) => setStudent({...student,city : e.target.value})} />
            </div>
            <div class="mb-3">
              <label class="form-label">Zip code</label>
              <input type="number" class="form-control" value={student.zip} onChange={(e) => setStudent({...student,zip : e.target.value})} />
            </div>
            <select class="form-select mb-3" aria-label="Default select example" 
            value={student.country} onChange={(e) => setStudent({...student,country : e.target.value})}
            >
              <option selected>Select your country</option>
              <option value="bangladesh">Bangladesh</option>
              <option value="india">India</option>
              <option value="pakistan">Pakistan</option>
            </select>
            <button type="button" class="btn btn-brand text-white" onClick={Back}> <span><i class="fas fa-arrow-left"></i></span> Prev</button>
            <button type="submit" class="btn btn-brand text-white float-right">Submit</button>
          </form>
        </div>
      </div>
    </div>
  </div>
    );
};

export default StepThree;