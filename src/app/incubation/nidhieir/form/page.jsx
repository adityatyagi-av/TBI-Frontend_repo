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
import FinalReview from './finalreview';
import { MenuItem, Select, FormControl, InputLabel, FormHelperText } from '@mui/material';

const steps = ['Applicant Details', 'Idea Description', 'Checklist', 'Final Review'];

export default function HorizontalLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  // conditions for dob
  const today = new Date();
  const minDate = new Date(today);
  minDate.setFullYear(today.getFullYear() - 15);

  // validation Schema
  const validationSchema = Yup.object({
    name: Yup.string()
      .max(15, 'Must be 15 characters or less')
      .required('Required'),
    email: Yup.string().email('Invalid email address').required('Required'),
    scheme: Yup.string().required('Required'), // Add validation for scheme
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
      scheme: '', // Add initial value for scheme
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
  ];

  const generalOptions = [
    { label: 'Yes', value: 'yes' },
    { label: 'No', value: 'no' },
  ];

  const schemeOptions = [
    { label: 'Scheme1', value: 'scheme1' },
    { label: 'Scheme2', value: 'scheme2' },
    { label: 'Scheme3', value: 'scheme3' },
  ];

  return (
    <Box sx={{ width: '81%' }} className="mx-auto">
      <form onSubmit={formik.handleSubmit}>
        <Stepper activeStep={activeStep} className='hidden sm:flex'>
          {steps.map((label) => {
            const stepProps = {};
            const labelProps = {};
            return (
              <Step key={label} {...stepProps}>
                <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>

        {activeStep === steps.length - 1 &&
          <>
            <div className="mt-5 mb-4 mx-auto">
              <h1 className="text-2xl font-semibold text-gray-800 capitalize mx-auto lg:text-3xl ">
                {`FINAL REVIEW`}
              </h1>

              <div className="flex mx-auto mt-2">
                <span className="inline-block w-40 h-1 bg-blue-900 rounded-full"></span>
                <span className="inline-block w-3 h-1 mx-1 bg-blue-900 rounded-full"></span>
                <span className="inline-block w-1 h-1 bg-blue-900 rounded-full"></span>
              </div>
            </div>
            <FinalReview formik={formik} />

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
              <Button type='submit'>Finish</Button>
            </Box>
          </>
        }

        {activeStep === 0 &&
          <>
            <div className="mt-8" />
            <div className="mt-5 mb-4">
              <h2 className="text-xl font-semibold text-gray-800 capitalize lg:text-2xl ">
                {`Applicant Details`}
              </h2>

              <div className="flex mx-auto mt-2">
                <span className="inline-block w-40 h-1 bg-blue-900 rounded-full"></span>
                <span className="inline-block w-3 h-1 mx-1 bg-blue-900 rounded-full"></span>
                <span className="inline-block w-1 h-1 bg-blue-900 rounded-full"></span>
              </div>
            </div>
            <Input className="mt-4" value="name" label="1. Name Of the Applicant" placeHolder="Aditya Tyagi" formikTouched={formik.touched.name} formikError={formik.errors.name} formikChange={formik.handleChange} formikBlur={formik.handleBlur} formikValue={formik.values.name} type="text" />

            <Input value="email" label="2. Your Email" placeHolder="adityatyagi@gmail.com" formikTouched={formik.touched.email} formikError={formik.errors.email} formikChange={formik.handleChange} formikBlur={formik.handleBlur} formikValue={formik.values.email} type="email" />

            {/* Add Scheme Dropdown */}
            <div  className=' flex w-full'>
              <div className=' p-4 pl-0 text-sm text-center mt-3'>3</div>
            <FormControl fullWidth margin="normal" error={formik.touched.scheme && Boolean(formik.errors.scheme)}>
            <InputLabel id="scheme-label" > Select Scheme</InputLabel>
              <Select
                labelId="scheme-label"
                id="scheme"
                name="scheme"
                value={formik.values.scheme}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
               
              >
                {schemeOptions.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </Select>
              <FormHelperText>{formik.touched.scheme && formik.errors.scheme}</FormHelperText>
            </FormControl>
            </div>

            <Input value="phoneNumber" label="4. Mobile Number" placeHolder="9876543210" formikTouched={formik.touched.phoneNumber} formikError={formik.errors.phoneNumber} formikChange={formik.handleChange} formikBlur={formik.handleBlur} formikValue={formik.values.phoneNumber} type="text" />
            <Input value="dateOfBirth" label="5. Date of Birth" placeHolder="1998-06-30" formikTouched={formik.touched.dateOfBirth} formikError={formik.errors.dateOfBirth} formikChange={formik.handleChange} formikBlur={formik.handleBlur} formikValue={formik.values.dateOfBirth} type="date" />
            <InputRadio value="gender" label="6. Gender" formikTouched={formik.touched.gender} formikError={formik.errors.gender} formikChange={formik.handleChange} formikBlur={formik.handleBlur} formikValue={formik.values.gender} type="text" options={genderOptions} />
            <InputRadio value="category" label="7. Category" formikTouched={formik.touched.category} formikError={formik.errors.category} formikChange={formik.handleChange} formikBlur={formik.handleBlur} formikValue={formik.values.category} type="text" options={categoryOptions} />
            <InputTextArea value="address" label="8. Address" placeHolder="Type your address here..." formikTouched={formik.touched.address} formikError={formik.errors.address} formikChange={formik.handleChange} formikBlur={formik.handleBlur} formikValue={formik.values.address} />
            <Input value="education" label="9. Educational Qualifications" placeHolder="Type your educational qualifications here..." formikTouched={formik.touched.education} formikError={formik.errors.education} formikChange={formik.handleChange} formikBlur={formik.handleBlur} formikValue={formik.values.education} type="text" />
            <InputTextArea value="experience" label="10. Work Experience" placeHolder="Type your work experience here..." formikTouched={formik.touched.experience} formikError={formik.errors.experience} formikChange={formik.handleChange} formikBlur={formik.handleBlur} formikValue={formik.values.experience} />

            <InputFile value="resume" label="11. Resume/CV" formikTouched={formik.touched.resume} formikError={formik.errors.resume} formikChange={(event) => formik.setFieldValue('resume', event.currentTarget.files[0])} formikBlur={formik.handleBlur} formikValue={formik.values.resume} />

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
              <Button onClick={handleNext}>Next</Button>
            </Box>
          </>
        }




        {activeStep === 1 &&

          <>
          <div className="mt-8"/>
          <div className="mt-5 mb-4">
                <h2 className="text-xl font-semibold text-gray-800 capitalize lg:text-2xl ">
                {`Idea Description`}
                </h2>

                <div className="flex mx-auto mt-2">
                    <span className="inline-block w-40 h-1 bg-blue-900 rounded-full"></span>
                    <span className="inline-block w-3 h-1 mx-1 bg-blue-900 rounded-full"></span>
                    <span className="inline-block w-1 h-1 bg-blue-900 rounded-full"></span>
                </div>
            </div>
            <InputTextArea value="ideaDescription" label="11. Please describe the technology for which you are seeking market opportunities or market for which you are seeking technology opportunities." placeHolder="Your Experience " formikTouched={formik.touched.ideaDescription} formikError={formik.errors.ideaDescription} formikChange={formik.handleChange} formikBlur={formik.handleBlur} formikValue={formik.values.ideaDescription} />

            <InputFile value="conceptNote" label="12. Please attach a concept note of the technology/business idea you propose to pursue." formik={formik} formikTouched={formik.touched.conceptNote} formikError={formik.errors.conceptNote} formikChange={formik.handleChange} formikBlur={formik.handleBlur} formikValue={formik.values.conceptNote} />


            <InputFile value="aspectNote" label="13. Please attach a note describing the knowledge or technology intensity aspects of the idea. Describe the innovative elements of the idea along with comparisons with previous reports or products available." formik={formik} formikTouched={formik.touched.aspectNote} formikError={formik.errors.aspectNote} formikChange={formik.handleChange} formikBlur={formik.handleBlur} formikValue={formik.values.aspectNote} />


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
          <div className="mt-8"/>
          <div className="mt-5 mb-4">
                <h2 className="text-xl font-semibold text-gray-800 capitalize lg:text-2xl ">
                {`Checklist`}
                </h2>

                <div className="flex mx-auto mt-2">
                    <span className="inline-block w-40 h-1 bg-blue-900 rounded-full"></span>
                    <span className="inline-block w-3 h-1 mx-1 bg-blue-900 rounded-full"></span>
                    <span className="inline-block w-1 h-1 bg-blue-900 rounded-full"></span>
                </div>
            </div>
            <InputRadio value="previousRecipient" label="14. Applicant confirms that he/she has not been a recipient of the NIDHI-EIR previously. NIDHI-EIR can be used only once." options={generalOptions} formikTouched={formik.touched.previousRecipient} formikError={formik.errors.previousRecipient} formikChange={formik.handleChange} formikBlur={formik.handleBlur} />


            <InputRadio value="fullCommitment" label="15. Applicant is planning to pursue NIDHI-EIR full-time with no other concurrent commitments." options={generalOptions} formikTouched={formik.touched.fullCommitment} formikError={formik.errors.fullCommitment} formikChange={formik.handleChange} formikBlur={formik.handleBlur} />


            <InputRadio value="noOtherFellowship" label="16. Applicant confirms that he/she will not be in receipt of any other remuneration or fellowship during the duration of the NIDHI-EIR." options={generalOptions} formikTouched={formik.touched.noOtherFellowship} formikError={formik.errors.noOtherFellowship} formikChange={formik.handleChange} formikBlur={formik.handleBlur} />

            <InputRadio value="businessCommitment" label="17. Applicant confirms that he/she is fully committed to exploring a business idea. NIDHI-EIR support recipient should not treat this support as a stop gap arrangement to support them in their academic pursuits or transition between jobs." options={generalOptions} formikTouched={formik.touched.businessCommitment} formikError={formik.errors.businessCommitment} formikChange={formik.handleChange} formikBlur={formik.handleBlur} />

            <InputRadio value="notBeneficiary" label="18. Applicant confirms that he/she is not the promoter or significant (>10%) share holder / beneficiary of another company at the time of applying for and receiving the NIDHI-EIR support." options={generalOptions} formikTouched={formik.touched.notBeneficiary} formikError={formik.errors.notBeneficiary} formikChange={formik.handleChange} formikBlur={formik.handleBlur} />

            <InputRadio value="registerPEP" label="19. The NIDHI-EIR has or is planning to register for the pre-incubation or incubation program at the PEP for the entire duration of NIDHI-EIR support.  " options={generalOptions} formikTouched={formik.touched.registerPEP} formikError={formik.errors.registerPEP} formikChange={formik.handleChange} formikBlur={formik.handleBlur} />





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