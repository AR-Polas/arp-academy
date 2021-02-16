import React, { useState } from 'react';
import StepOne from './StepOne';
import StepThree from './StepThree';
import StepTwo from './StepTwo';


const Admission = () => {

  const [student,setStudent] = useState({
    step : 1,
    name : "",
    email : "",
    number : "",
    age : "",
    study : "",
    address : "",
    city : "",
    zip : "",
    country : ""

  })
 const nextStep = () => {
    const { step } = student;
    setStudent({...student, step: step + 1 });
};

 const prevStep = () => {
    const { step } = student;
    setStudent({...student, step: step - 1 });
};

const { step } = student;

      switch (step) {
        case 1:
            return (
                <StepOne
                    nextStep={nextStep}
                    user={[student,setStudent]}
                />
            );
        case 2:
            return (
                <StepTwo
                    nextStep={nextStep}
                    prevStep={prevStep}
                    user={[student,setStudent]}
                />
            );
            case 3:
                return (
                    <StepThree
                        nextStep={nextStep}
                        prevStep={prevStep}
                        user={[student,setStudent]}
                    />
                );
    
      }


    return (
      <div >
          ddfdf
      </div>
    );
};

export default Admission;