import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const StepTwo = ({ user, nextStep ,prevStep}) => {

  const [student, setStudent] = user

  const Next = e => {
    e.preventDefault();
    nextStep();
  };

  const Back = e => {
    e.preventDefault();
    prevStep();
  };

  const handleSubmit = e => {
    e.preventDefault()
  }
  return (

    <div className="admission-container">
      <div className="admission-stepOne">
        <div className="text-center pt-4 admission-header">
         <Link to="/" className="text-decoration-none"> <h3 className="text-white">ARP ACADEMY</h3></Link>
        </div>
        <div className="admission-info">
          <h5 className="text-secondary mt-3">1/3</h5>
          <h4 className="text-center my-2 text-secondary">Please fill with your details</h4>
          <div className=" w-75  mx-auto admission-formDetails">
            <form onSubmit={handleSubmit}>
              <div class="mb-3">
                <label class="form-label">Name</label>
                <input type="text" class="form-control" value={student.name} onChange={(e) => setStudent({...student,name : e.target.value})} />
              </div>
              <div class="mb-3">
                <label class="form-label">Email</label>
                <input type="email" class="form-control"  value={student.email} onChange={(e) => setStudent({...student,email : e.target.value})} />
              </div>
              <div class="mb-3">
                <label class="form-label">Number</label>
                <input type="number" class="form-control" value={student.number} onChange={(e) => setStudent({...student,number : e.target.value})} />
              </div>
              <div class="mb-3">
                <label class="form-label">Age</label>
                <input type="number" class="form-control" value={student.age} onChange={(e) => setStudent({...student,age : e.target.value})} />
              </div>
              <select class="form-select mb-3" aria-label="Default select example"
              value={student.study} onChange={(e) => setStudent({...student,study : e.target.value})}
              >
                <option selected>Less than high school</option>
                <option value="diploma">Diploma Engineering</option>
                <option value="bachelor">Bachelor's Degree</option>
                <option value="school">High School</option>
              </select>

              <button type="button" class="btn btn-brand text-white" onClick={Back}> <span><i class="fas fa-arrow-left"></i></span> Prev</button>
              <button type="button" class="btn btn-brand text-white float-right w-25" onClick={Next}>  Next <span><i class="fas fa-arrow-right"></i></span></button>
            </form>
          </div>
        </div>
      </div>
    </div>

  )
}

export default StepTwo;