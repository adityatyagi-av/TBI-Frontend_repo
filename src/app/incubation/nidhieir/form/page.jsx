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
import InputTextArea from '@/components/inputTextArea';
import InputFile from '@/components/inputFile';


const steps = ['Applicant Details', 'Idea Description', 'Checklist'];

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
    resume: Yup.mixed()
      .test('fileFormat', 'Invalid file format. Only PDF or DOCX are allowed.', (value) => {
        if (!value) return true;
        const allowedFormats = ['application/pdf', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
        return value && allowedFormats.includes(value.type);
      })
      .test('fileSize', 'File size must be less than 10MB', (value) => {
        if (!value) return true;
        return value && value.size <= 10 * 1024 * 1024;
      })
      .required('Resume is required'),
    ideaDescription: Yup.string().required('Required'),
    conceptNote: Yup.mixed()
      .test('fileSize', 'File size must be less than 10MB', (value) => {
        if (!value) return true;
        return value && value.size <= 10 * 1024 * 1024;
      }).required('Attach the concept note'),
    aspectNote: Yup.mixed()
      .test('fileSize', 'File size must be less than 10MB', (value) => {
        if (!value) return true;
        return value && value.size <= 10 * 1024 * 1024;
      }).required('Attach the note describing the knowledge or technology intensity aspects of the idea.'),
    previousRecipient: Yup.string().required('Required'),
    fullCommitment: Yup.string().required('Required'),
    noOtherFellowship: Yup.string().required('Required'),
    businessCommitment: Yup.string().required('Required'),
    notBeneficiary: Yup.string().required('Required'),
    registerPEP: Yup.string().required('Required'),

  });


  const formik = useFormik({
    initialValues: {
      name: '',
      phoneNumber: '',
      email: '',
      dateOfBirth: '',
      gender: '',
      category: '',
      address: '',
      education: '',
      experience: '',
      resume: null,
      ideaDescription: '',
      conceptNote: null,
      aspectNote: null,
      previousRecipient: '',
      fullCommitment: '',
      noOtherFellowship: '',
      businessCommitment: '',
      notBeneficiary: '',
      registerPEP: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      console.log(JSON.stringify(values, null, 2));
      // console.log(JSON.stringify(values, null, 2));

    },
  });
  const genderOptions = [
    { label: 'Male', value: 'male' },
    { label: 'Female', value: 'female' },
    { label: 'Prefer Not to Say', value: 'prefernottosay' },
  ];
  const categoryOptions = [

    { label: 'General', value: 'general' },
    { label: 'OBC', value: 'obc' },
    { label: 'SC', value: 'sc' },
    { label: 'ST', value: 'st' },

  ]

  const generalOptions = [
    { label: 'Yes', value: 'yes' },
    { label: 'No', value: 'no' },
  ]

  return (
    <Box sx={{ width: '81%' }} className="mx-auto">
      <form onSubmit={formik.handleSubmit}>
        <Stepper activeStep={activeStep} className='hidden sm:flex'>
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



        {activeStep === 0 &&

          <>
            <Input className="mt-4" value="name" label="Name Of the Applicant" placeHolder="Aditya Tyagi" formikTouched={formik.touched.name} formikError={formik.errors.name} formikChange={formik.handleChange} formikBlur={formik.handleBlur} formikValue={formik.values.name} type="text" />

            <Input value="email" label="Your Email" placeHolder="adityatyagi@gmail.com" formikTouched={formik.touched.email} formikError={formik.errors.email} formikChange={formik.handleChange} formikBlur={formik.handleBlur} formikValue={formik.values.email} type="email" />

            <Input value="phoneNumber" label="Phone/Mobile Number" placeHolder="8088088088" formikTouched={formik.touched.phoneNumber} formikError={formik.errors.phoneNumber} formikChange={formik.handleChange} formikBlur={formik.handleBlur} formikValue={formik.values.phoneNumber} type="tel" />

            <InputTextArea value="address" label="Full Postal Address" placeHolder="5A, street-12,Thane Mumbai " formikTouched={formik.touched.address} formikError={formik.errors.address} formikChange={formik.handleChange} formikBlur={formik.handleBlur} formikValue={formik.values.address} />

            <Input value="dateOfBirth" label="Date Of Birth" placeHolder="02-06-2003" formikTouched={formik.touched.dateOfBirth} formikError={formik.errors.dateOfBirth} formikChange={formik.handleChange} formikBlur={formik.handleBlur} formikValue={formik.values.dateOfBirth} type="date" />

            <InputRadio value="gender" label="Gender" options={genderOptions} formikTouched={formik.touched.gender} formikError={formik.errors.gender} formikChange={formik.handleChange} formikBlur={formik.handleBlur} />

            <InputRadio value="category" label="Category" options={categoryOptions} formikTouched={formik.touched.category} formikError={formik.errors.category} formikChange={formik.handleChange} formikBlur={formik.handleBlur} />

            <InputTextArea value="education" label="Basic undergraduate training/education" placeHolder="Enter your educational Details " formikTouched={formik.touched.education} formikError={formik.errors.education} formikChange={formik.handleChange} formikBlur={formik.handleBlur} formikValue={formik.values.education} />

            <InputTextArea value="experience" label="Any experiences relating to entrepreneurship, leadership, fund raising, organizing activities/ events etc." placeHolder="Your Experience " formikTouched={formik.touched.experience} formikError={formik.errors.experience} formikChange={formik.handleChange} formikBlur={formik.handleBlur} formikValue={formik.values.experience} />

            <InputFile value="resume" label="Attach CV or Resume with details of education and work experience" formik={formik} formikTouched={formik.touched.resume} formikError={formik.errors.resume} formikChange={formik.handleChange} formikBlur={formik.handleBlur} formikValue={formik.values.resume} />


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

                {'Next'}
              </Button>
            </Box>
          </>
        }




        {activeStep === 1 &&

          <>
            <InputTextArea value="ideaDescription" label="Please describe the technology for which you are seeking market opportunities or market for which you are seeking technology opportunities." placeHolder="Your Experience " formikTouched={formik.touched.ideaDescription} formikError={formik.errors.ideaDescription} formikChange={formik.handleChange} formikBlur={formik.handleBlur} formikValue={formik.values.ideaDescription} />

            <InputFile value="conceptNote" label="Please attach a concept note of the technology/business idea you propose to pursue." formik={formik} formikTouched={formik.touched.conceptNote} formikError={formik.errors.conceptNote} formikChange={formik.handleChange} formikBlur={formik.handleBlur} formikValue={formik.values.conceptNote} />


            <InputFile value="aspectNote" label="Please attach a note describing the knowledge or technology intensity aspects of the idea. Describe the innovative elements of the idea along with comparisons with previous reports or products available." formik={formik} formikTouched={formik.touched.aspectNote} formikError={formik.errors.aspectNote} formikChange={formik.handleChange} formikBlur={formik.handleBlur} formikValue={formik.values.aspectNote} />


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

                {'Next'}
              </Button>
            </Box>
          </>
        }
        {activeStep === 2 &&
          <>
            <InputRadio value="previousRecipient" label="Applicant confirms that he/she has not been a recipient of the NIDHI-EIR previously. NIDHI-EIR can be used only once." options={generalOptions} formikTouched={formik.touched.previousRecipient} formikError={formik.errors.previousRecipient} formikChange={formik.handleChange} formikBlur={formik.handleBlur} />


            <InputRadio value="fullCommitment" label="Applicant is planning to pursue NIDHI-EIR full-time with no other concurrent commitments." options={generalOptions} formikTouched={formik.touched.fullCommitment} formikError={formik.errors.fullCommitment} formikChange={formik.handleChange} formikBlur={formik.handleBlur} />


            <InputRadio value="noOtherFellowship" label="Applicant confirms that he/she will not be in receipt of any other remuneration or fellowship during the duration of the NIDHI-EIR." options={generalOptions} formikTouched={formik.touched.noOtherFellowship} formikError={formik.errors.noOtherFellowship} formikChange={formik.handleChange} formikBlur={formik.handleBlur} />

            <InputRadio value="businessCommitment" label="Applicant confirms that he/she is fully committed to exploring a business idea. NIDHI-EIR support recipient should not treat this support as a stop gap arrangement to support them in their academic pursuits or transition between jobs." options={generalOptions} formikTouched={formik.touched.businessCommitment} formikError={formik.errors.businessCommitment} formikChange={formik.handleChange} formikBlur={formik.handleBlur} />

            <InputRadio value="notBeneficiary" label="Applicant confirms that he/she is not the promoter or significant (>10%) share holder / beneficiary of another company at the time of applying for and receiving the NIDHI-EIR support." options={generalOptions} formikTouched={formik.touched.notBeneficiary} formikError={formik.errors.notBeneficiary} formikChange={formik.handleChange} formikBlur={formik.handleBlur} />

            <InputRadio value="registerPEP" label="The NIDHI-EIR has or is planning to register for the pre-incubation or incubation program at the PEP for the entire duration of NIDHI-EIR support.  " options={generalOptions} formikTouched={formik.touched.registerPEP} formikError={formik.errors.registerPEP} formikChange={formik.handleChange} formikBlur={formik.handleBlur} />





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

                {'Next'}
              </Button>
            </Box>
          </>

        }


      </form>
    </Box>
  );
}