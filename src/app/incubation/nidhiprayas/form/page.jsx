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


const steps = ['Applicant Details', 'Idea Description','Checklist'];

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
    .max(25, 'Must be 25 characters or less')
    .required('Required'),
    fatherName: Yup.string()
    .max(25, 'Must be 25 characters or less')
    .required('Required'),
    
  email: Yup.string().email('Invalid email address').required('Required'),
  applicantImage: Yup.mixed()
      .test('fileSize', 'File size must be less than 2MB', (value) => {
        if (!value) return true;
        return value && value.size <= 2 * 1024 * 1024;
      }).required('Kindly add your image'),
  phoneNumber: Yup.string()
    .matches(/^[0-9]{10}$/, '10 digit mobile number should be entered'),
    whatsappNumber: Yup.string()
    .matches(/^[0-9]{10}$/, '10 digit mobile number should be entered')
    .required('Required'),
    panNumber: Yup.string()
    .matches(/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/, '10 digit pan number should be entered')
    .required('Required'),
    aadharNumber:Yup.string()
    .matches(/^[0-9]{12}$/, '12 digit Aadhar number should be entered')
    .required('Required'),
    dateOfBirth: Yup.date()
      .max(today, 'Date of birth cannot be in the future')
      .required('Required')
      .test('is-old-enough', 'Must be at least 15 years old', function (value) {
        return Yup.date().max(minDate).isValidSync(value);
      }),
      gender: Yup.string().required('Required'),
      innovator: Yup.string().required('Required'),
      category: Yup.string().required('Required'),
      address: Yup.string().required('Required'),
      addressDocument: Yup.mixed()
      .test('fileSize', 'File size must be less than 5MB', (value) => {
        if (!value) return true;
        return value && value.size <= 5 * 1024 * 1024;
      }),
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
      ownVenture: Yup.string().required('Required'),
      teamMembers: Yup.string().required("Required"),
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
      previousReciepent: Yup.string().required('Required'),
      fullCommitment:Yup.string().required('Required'),
      noOtherFellowShip:Yup.string().required('Required'),
      businessCommitment:Yup.string().required('Required'),
      notBeneficiary:Yup.string().required('Required'),
      registerPEP:Yup.string().required('Required'),

  });


  const formik = useFormik({
    initialValues: {
      name: '',
      applicantImage:null,
      fatherName:'',
      phoneNumber:'',
      whatsappNumber:'',
      email: '',
      dateOfBirth:'',
      gender:'',
      category:'',
      aadharNumber:'',
      address:'',
      addressDocument:null,
      panNumber:'',
      education:'',
      experience:'',
      resume: null,
      innovator:'',
      annualIncome:'',
      ideaDescription:'',
      conceptNote:null,
      aspectNote:null,
      previousReciepent:'',
      fullCommitment:'',
      noOtherFellowShip:'',
      businessCommitment:'',
      notBeneficiary:'',
      registerPEP:'',
      ownVenture:'',
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
  const categoryOptions=[
    
      { label: 'General', value: 'general' },
      { label: 'OBC', value: 'obc' },
      { label: 'SC', value: 'sc' },
      { label: 'ST', value: 'st' },
      
  ]

  const generalOptions=[
    { label: 'Yes', value: 'yes' },
    { label: 'No', value: 'no' },
  ]
  const teamMembersOptions=[
    { label: 'No team Members', value: 'nomember' },
    { label: 'Less than 3', value: 'lessthan3' },
    { label: 'More than 3', value: 'morethan3' },
    
  ]
  
  

  return (
    <Box  className="mx-auto max-w-screen-xl">
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



      {  activeStep === 0 && 
          
            <>
            <Input className="mt-4" value="name" label="Name Of the Applicant" placeHolder="Aditya Tyagi" formikTouched={formik.touched.name} formikError={formik.errors.name} formikChange={formik.handleChange} formikBlur={formik.handleBlur} formikValue={formik.values.name} type="text" />

            <InputFile value="applicantImage" label="Latest Photo (not more than 6 months)" formik={formik} formikTouched={formik.touched.applicantImage} formikError={formik.erapplicantImage} formikChange={formik.handleChange} formikBlur={formik.handleBlur} formikValue={formik.values.applicantImage}/>

            
            <Input value="fatherName" label="Father’s name/Husband’s name:" placeHolder="Mr. Sudhir Tyagi" formikTouched={formik.touched.fatherName} formikError={formik.errors.fatherName} formikChange={formik.handleChange} formikBlur={formik.handleBlur} formikValue={formik.values.fatherName} type="email"/>

            <Input value="email" label="Your Email" placeHolder="adityatyagi@gmail.com" formikTouched={formik.touched.email} formikError={formik.errors.email} formikChange={formik.handleChange} formikBlur={formik.handleBlur} formikValue={formik.values.email} type="email"/>

            <Input value="phoneNumber" label="Phone/Mobile Number" placeHolder="8088088088" formikTouched={formik.touched.phoneNumber} formikError={formik.errors.phoneNumber} formikChange={formik.handleChange} formikBlur={formik.handleBlur} formikValue={formik.values.phoneNumber} type="tel"/>

            <Input value="whatsappNumber" label="Whatsapp Number" placeHolder="8088088088" formikTouched={formik.touched.whatsappNumber} formikError={formik.errors.whatsappNumber} formikChange={formik.handleChange} formikBlur={formik.handleBlur} formikValue={formik.values.whatsappNumber} type="tel"/>

            <InputTextArea value="address" label="Full Postal Address" placeHolder="5A, street-12,Thane Mumbai " formikTouched={formik.touched.address} formikError={formik.errors.address} formikChange={formik.handleChange} formikBlur={formik.handleBlur} formikValue={formik.values.address} />

            <InputFile value="aaddressDocument" label="Address : (you have to provide  residence certificate issued by Sub-Divisional Magistrate(SDM)/District Magistrate(DM) or a copy of ration card or any other document regarding proof of Residence at the time of presentation)" formik={formik} formikTouched={formik.touched.addressDocument} formikError={formik.addressDocument} formikChange={formik.handleChange} formikBlur={formik.handleBlur} formikValue={formik.values.addressDocument}/>


            <Input value="dateOfBirth" label="Date Of Birth" placeHolder="02-06-2003" formikTouched={formik.touched.dateOfBirth} formikError={formik.errors.dateOfBirth} formikChange={formik.handleChange} formikBlur={formik.handleBlur} formikValue={formik.values.dateOfBirth} type="date"/>

             
          <InputRadio value="gender" label="Gender" options={genderOptions} formikTouched={formik.touched.gender} formikError={formik.errors.gender} formikChange={formik.handleChange} formikBlur={formik.handleBlur} />

            <InputRadio value="category" label="Category" options={categoryOptions} formikTouched={formik.touched.category} formikError={formik.errors.category} formikChange={formik.handleChange} formikBlur={formik.handleBlur} />
            <Input value="panNumber" label="PAN Card No." placeHolder="" formikTouched={formik.touched.panNumber} formikError={formik.errors.panNumber} formikChange={formik.handleChange} formikBlur={formik.handleBlur} formikValue={formik.values.panNumber} type="number"/>
            <Input value="aadharNumber" label="Aadhar Card No." placeHolder="" formikTouched={formik.touched.aadharNumber} formikError={formik.errors.aadharNumber} formikChange={formik.handleChange} formikBlur={formik.handleBlur} formikValue={formik.values.aadharNumber} type="number"/>


            <InputTextArea value="education" label="Basic undergraduate training/education" placeHolder="Enter your educational Details " formikTouched={formik.touched.education} formikError={formik.errors.education} formikChange={formik.handleChange} formikBlur={formik.handleBlur} formikValue={formik.values.education} />

            <InputTextArea value="experience" label="Any experiences relating to entrepreneurship, leadership, fund raising, organizing activities/ events etc." placeHolder="Your Experience " formikTouched={formik.touched.experience} formikError={formik.errors.experience} formikChange={formik.handleChange} formikBlur={formik.handleBlur} formikValue={formik.values.experience} />

            <InputFile value="resume" label="Attach CV or Resume with details of education and work experience" formik={formik} formikTouched={formik.touched.resume} formikError={formik.errors.resume} formikChange={formik.handleChange} formikBlur={formik.handleBlur} formikValue={formik.values.resume}/>
            
            <InputRadio value="innovator" label="Are you an  Innovator in Employment / Students with any R& D organisation / Academic Institution ?( In case yes, No Objection Certificate  from Head of Institute /Organization will have to be submitted at the time of presentation." options={generalOptions} formikTouched={formik.touched.innovator} formikError={formik.errors.innovator} formikChange={formik.handleChange} formikBlur={formik.handleBlur} />

            <Input value="annualIncome" label="Annual Income of the applicant (applicable in case of Innovator in Employment) :( a copy of the latest Income Tax Returns filed will have to be submitted at the time of presentation))
            " placeHolder="" formikTouched={formik.touched.annualIncome} formikError={formik.errors.annualIncome} formikChange={formik.handleChange} formikBlur={formik.handleBlur} formikValue={formik.values.annualIncome} type="number"/>

        
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
          
          <InputRadio value="ownVenture" label=" Have you started and registered your own Venture (start up) " options={generalOptions} formikTouched={formik.touched.ownVenture} formikError={formik.errors.ownVenture} formikChange={formik.handleChange} formikBlur={formik.handleBlur} />

          <InputRadio value="ownVenture" label="How many Team Membes are there in your proposed project ?
          " options={teamMembersOptions} formikTouched={formik.touched.teamMembers} formikError={formik.errors.teamMembers} formikChange={formik.handleChange} formikBlur={formik.handleBlur} />


          <InputTextArea value="ideaDescription" label="Brief description of the idea highlighting innovative element" formikTouched={formik.touched.ideaDescription} formikError={formik.errors.ideaDescription} formikChange={formik.handleChange} formikBlur={formik.handleBlur} formikValue={formik.values.ideaDescription} />

          <InputTextArea value="ideaTechnology" label="Science and working principle behind the idea" formikTouched={formik.touched.ideaTechnology} formikError={formik.errors.ideaTechnology} formikChange={formik.handleChange} formikBlur={formik.handleBlur} formikValue={formik.values.ideaTechnology} />

          <InputFile value="conceptNote" label="Please attach a concept note of the technology/business idea you propose to pursue." formik={formik} formikTouched={formik.touched.conceptNote} formikError={formik.errors.conceptNote} formikChange={formik.handleChange} formikBlur={formik.handleBlur} formikValue={formik.values.conceptNote}/>
         

          <InputFile value="aspectNote" label="Please attach a note describing the knowledge or technology intensity aspects of the idea. Describe the innovative elements of the idea along with comparisons with previous reports or products available." formik={formik} formikTouched={formik.touched.aspectNote} formikError={formik.errors.aspectNote} formikChange={formik.handleChange} formikBlur={formik.handleBlur} formikValue={formik.values.aspectNote}/>
         

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
            <InputRadio value="previousReciepent" label="Applicant confirms that he/she has not been a recipient of the NIDHI-EIR previously. NIDHI-EIR can be used only once." options={generalOptions} formikTouched={formik.touched.previousReciepent} formikError={formik.errors.previousReciepent} formikChange={formik.handleChange} formikBlur={formik.handleBlur} />

            <InputRadio value="fullCommitment" label="Applicant is planning to pursue NIDHI-EIR full-time with no other concurrent commitments." options={generalOptions} formikTouched={formik.touched.fullCommitment} formikError={formik.errors.fullCommitment} formikChange={formik.handleChange} formikBlur={formik.handleBlur} />

            <InputRadio value="noOtherFellowShip" label="Applicant confirms that he/she will not be in receipt of any other remuneration or fellowship during the duration of the NIDHI-EIR." options={generalOptions} formikTouched={formik.touched.noOtherFellowShip} formikError={formik.errors.noOtherFellowShip} formikChange={formik.handleChange} formikBlur={formik.handleBlur} />

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
              { 'Next'}
            </Button>
          </Box>
        </>
        }
    </form>
    </Box>
  );
}