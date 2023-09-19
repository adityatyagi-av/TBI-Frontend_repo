"use client"
import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Input from '@/components/input';
import InputRadio from '@/components/inputRadio';


const steps = ['Personal Info', 'Qualifications', 'Experience'];

export default function HorizontalLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());

  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };
  //conditions for dob
  const today = new Date();
  const minDate = new Date(today);
  minDate.setFullYear(today.getFullYear() - 15); 

  //validation Schema
  const validationSchema = Yup.object({
    name: Yup.string()
    .max(15, 'Must be 15 characters or less')
    .required('Required'),
  email: Yup.string().email('Invalid email address').required('Required'),
  phoneNumber: Yup.string()
    .matches(/^[0-9]{10}$/, '10 digit mobile number should be entered')
    .required('Required'),
    dateOfBirth: Yup.date()
      .max(today, 'Date of birth cannot be in the future')
      .required('Required')
      .test('is-old-enough', 'Must be at least 15 years old', function (value) {
        return Yup.date().max(minDate).isValidSync(value);
      }),
      gender: Yup.string().required('Required'),
      category: Yup.string().required('Required'),
      address: Yup.string().required('Required'),
      education: Yup.string().required('Required'),
      experience: Yup.string().required('Required'),
  });


  const formik = useFormik({
    initialValues: {
      name: '',
      phoneNumber:'',
      email: '',
      dateOfBirth:'',
      gender:'',
      category:'',
      address:'',
      education:'',
      experience:'',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  

  return (
    <Box sx={{ width: '81%' }} className="mx-auto">
      <form onSubmit={formik.handleSubmit}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>

      {activeStep === steps.length &&
        <>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button type='submit'>Finish</Button>
          </Box>
        </>
}
      {  activeStep === 0 && 
          
            <>
            <Input value="name" label="Name Of the Applicant" placeHolder="Aditya Tyagi" formikTouched={formik.touched.name} formikError={formik.errors.name} formikChange={formik.handleChange} formikBlur={formik.handleBlur} formikValue={formik.values.name} type="text" />

            <Input value="email" label="Your Email" placeHolder="adityatyagi@gmail.com" formikTouched={formik.touched.email} formikError={formik.errors.email} formikChange={formik.handleChange} formikBlur={formik.handleBlur} formikValue={formik.values.email} type="email"/>

            <Input value="phoneNumber" label="Phone/Mobile Number" placeHolder="8088088088" formikTouched={formik.touched.phoneNumber} formikError={formik.errors.phoneNumber} formikChange={formik.handleChange} formikBlur={formik.handleBlur} formikValue={formik.values.phoneNumber} type="tel"/>

            <Input value="dateOfBirth" label="Date Of Birth" placeHolder="02-06-2003" formikTouched={formik.touched.dateOfBirth} formikError={formik.errors.dateOfBirth} formikChange={formik.handleChange} formikBlur={formik.handleBlur} formikValue={formik.values.dateOfBirth} type="date"/>

            <InputRadio/>
        
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: '1 1 auto' }} />
           

            <Button
            onClick={handleNext}>

              { 'Next'}
            </Button>
          </Box>
        </>
         }
        
        {activeStep === 1 && 
        
            <>
          <Typography sx={{ mt: 2, mb: 1 }}>Step 2</Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: '1 1 auto' }} />
           

            <Button
            onClick={handleNext}>

              { 'Next'}
            </Button>
          </Box>
        </>
         }
        {activeStep === 2 &&
            <>
          <Typography sx={{ mt: 2, mb: 1 }}>Step 3</Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: '1 1 auto' }} />
           

            <Button
            onClick={handleNext}>

              { 'Next'}
            </Button>
          </Box>
        </>
        
        }
        
      
    </form>
    </Box>
  );
}