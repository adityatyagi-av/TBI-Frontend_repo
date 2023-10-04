"use client"
import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Input from '@/components/input';
import InputRadio from '@/components/inputRadio';
import InputTextArea from '@/components/inputTextArea';
import InputFile from '@/components/inputFile';
import FinalReview from './finalreview';


const steps = ['Applicant Details', 'Team & Idea Desc.', 'Checklist','Final Review'];

export default function HorizontalLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
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
      whatsappNumber: Yup.string()
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
    panNumber: Yup.string()
    .matches(/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/, '10 digit pan number should be entered')
    .required('Required'),
    aadharNumber:Yup.string()
    .matches(/^[0-9]{12}$/, '12 digit Aadhar number should be entered')
    .required('Required'),
    education: Yup.string().required('Required'),
    instituteName: Yup.string().required('Required'),
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
      applicantImage:Yup.mixed()
      .test('fileSize', 'File size must be less than 2MB', (value) => {
        if (!value) return true;
        return value && value.size <= 2 * 1024 * 1024;
      }).required('Attach your Passport size photo'),
      aadharImage:Yup.mixed()
      .test('fileSize', 'File size must be less than 2MB', (value) => {
        if (!value) return true;
        return value && value.size <= 2 * 1024 * 1024;
      }).required('Attach the Aadhar Card Image'),
      panImage:Yup.mixed()
      .test('fileSize', 'File size must be less than 2MB', (value) => {
        if (!value) return true;
        return value && value.size <= 2 * 1024 * 1024;
      }).required('Attach the PAN Card Image'),
      teamMemberName: Yup.string(),
      teamMemberInstituteName: Yup.string(),
      teamMemberEducation: Yup.string(),
      teamMemberExperience:Yup.string(),
      projectTitle: Yup.string().required('Required'),
      techStack: Yup.string().required('Required'),
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
      }).required('Please attach the note.'),
      projectStatus: Yup.string().required('Required'),
      projectVideo: Yup.mixed()
      .test('fileSize', 'File size must be less than 20MB', (value) => {
        if (!value) return true;
        return value && value.size <= 20 * 1024 * 1024;
      }).required('Upload the video'),
      companyName:Yup.string(),
      incorporationDate:Yup.date(),
      companyDescription:Yup.string(),
    previousRecipient: Yup.string().required('Required'),
    fullCommitment: Yup.string().required('Required'),
    noOtherFellowship: Yup.string().required('Required'),
    businessCommitment: Yup.string().required('Required'),
    notBeneficiary: Yup.string().required('Required'),
   
  });


  const formik = useFormik({
    initialValues: {
      name: '',
      phoneNumber: '',
      whatsappNumber:'',
      email: '',
      dateOfBirth: '',
      gender: '',
      category: '',
      address: '',
      aadharNumber:'',
      education: '',
      instituteName:'',
      experience: '',
      resume: null,
      applicantImage:null,
      aadharImage:null,
      panImage:null,
      teamMemberName:'',
      teamMemberInstituteName:'',
      teamMemberEducation:'',
      teamMemberExperience:'',
      projectTitle:'',
      techStack:'',
      ideaDescription: '',
      conceptNote: null,
      aspectNote: null,
      projectStatus:'',
      projectVideo:null,
      companyName:'',
      incorporationDate:'',
      companyDescription:'',
      previousRecipient: '',
      fullCommitment: '',
      noOtherFellowship: '',
      businessCommitment: '',
      notBeneficiary: '',
     
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

  ];
  const projectStatusOptions = [
    { label: 'Idea', value: 'idea' },
    { label: 'POC', value: 'poc' },
    
  ];

  const generalOptions = [
    { label: 'Yes', value: 'yes' },
    { label: 'No', value: 'no' },
  ]

  return (
    <Box sx={{ width: '81%' }} className="mx-auto my-10 ">
      <form onSubmit={formik.handleSubmit}>
        <Stepper activeStep={activeStep} className='hidden sm:flex'>
          {steps.map((label, index) => {
            const stepProps = {};
            const labelProps = {};

            
            return (
              <Step key={label} {...stepProps}>
                <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>

        {activeStep === steps.length-1 &&
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
            <FinalReview formik={formik}/>
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
          <div className="mt-8"/>
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
            <Input className="mt-4" value="name" label="Name Of the Applicant" placeHolder="Aditya Tyagi" formikTouched={formik.touched.name} formikError={formik.errors.name} formikChange={formik.handleChange} formikBlur={formik.handleBlur} formikValue={formik.values.name} type="text" />

            <Input value="email" label="Your Email" placeHolder="adityatyagi@gmail.com" formikTouched={formik.touched.email} formikError={formik.errors.email} formikChange={formik.handleChange} formikBlur={formik.handleBlur} formikValue={formik.values.email} type="email" />

            <Input value="phoneNumber" label="Phone/Mobile Number" placeHolder="8088088088" formikTouched={formik.touched.phoneNumber} formikError={formik.errors.phoneNumber} formikChange={formik.handleChange} formikBlur={formik.handleBlur} formikValue={formik.values.phoneNumber} type="tel" />

            <Input value="whatsappNumber" label="Whatsapp Number" placeHolder="8088088088" formikTouched={formik.touched.whatsappNumber} formikError={formik.errors.whatsappNumber} formikChange={formik.handleChange} formikBlur={formik.handleBlur} formikValue={formik.values.whatsappNumber} type="tel"/>


            <InputTextArea value="address" label="Full Postal Address" placeHolder="5A, street-12,Thane Mumbai " formikTouched={formik.touched.address} formikError={formik.errors.address} formikChange={formik.handleChange} formikBlur={formik.handleBlur} formikValue={formik.values.address} />

            <Input value="dateOfBirth" label="Date Of Birth" placeHolder="02-06-2003" formikTouched={formik.touched.dateOfBirth} formikError={formik.errors.dateOfBirth} formikChange={formik.handleChange} formikBlur={formik.handleBlur} formikValue={formik.values.dateOfBirth} type="date" />

            <InputRadio value="gender" label="Gender" options={genderOptions} formikTouched={formik.touched.gender} formikError={formik.errors.gender} formikChange={formik.handleChange} formikBlur={formik.handleBlur} />

            <InputRadio value="category" label="Category" options={categoryOptions} formikTouched={formik.touched.category} formikError={formik.errors.category} formikChange={formik.handleChange} formikBlur={formik.handleBlur} />
            <Input value="panNumber" label="PAN Card No." placeHolder="" formikTouched={formik.touched.panNumber} formikError={formik.errors.panNumber} formikChange={formik.handleChange} formikBlur={formik.handleBlur} formikValue={formik.values.panNumber} type="number"/>
            <Input value="aadharNumber" label="Aadhar Card No." placeHolder="" formikTouched={formik.touched.aadharNumber} formikError={formik.errors.aadharNumber} formikChange={formik.handleChange} formikBlur={formik.handleBlur} formikValue={formik.values.aadharNumber} type="number"/>

            <InputTextArea value="education" label="Highest Qualification & Passing year" placeHolder="Enter your educational Details " formikTouched={formik.touched.education} formikError={formik.errors.education} formikChange={formik.handleChange} formikBlur={formik.handleBlur} formikValue={formik.values.education} />

            <Input value="instituteName" label="Institute/Organization Name." placeHolder="Enter your institute name " formikTouched={formik.touched.instituteName} formikError={formik.errors.instituteName} formikChange={formik.handleChange} formikBlur={formik.handleBlur} formikValue={formik.values.instituteName} type="text"/>

            <InputTextArea value="experience" label="Any Experience in Entrepreneurship? Give the details." placeHolder="Your Experience " formikTouched={formik.touched.experience} formikError={formik.errors.experience} formikChange={formik.handleChange} formikBlur={formik.handleBlur} formikValue={formik.values.experience} />

            <InputFile value="resume" label="Attach CV or Resume with details of education and work experience" formik={formik} formikTouched={formik.touched.resume} formikError={formik.errors.resume} formikChange={formik.handleChange} formikBlur={formik.handleBlur} formikValue={formik.values.resume} />

            <InputFile value="applicantImage" label="Attach PP Size Photo" formik={formik} formikTouched={formik.touched.applicantImage} formikError={formik.errors.applicantImage} formikChange={formik.handleChange} formikBlur={formik.handleBlur} formikValue={formik.values.applicantImage} />

            <InputFile value="aadharImage" label="Attach Aadhar Card Image" formik={formik} formikTouched={formik.touched.aadharImage} formikError={formik.errors.aadharImage} formikChange={formik.handleChange} formikBlur={formik.handleBlur} formikValue={formik.values.aadharImage} />

            <InputFile value="panImage" label="Attach PAN Card Image" formik={formik} formikTouched={formik.touched.panImage} formikError={formik.errors.panImage} formikChange={formik.handleChange} formikBlur={formik.handleBlur} formikValue={formik.values.panImage} />


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
                onClick={handleNext}
                
              >
                {'Next'}
              </Button>

              
            </Box>
          </>
        }




        {activeStep === 1 &&

          <>
           <div className='mt-10'/>
           
            <div className="mt-5 mb-4">
                <h2 className="text-xl font-semibold text-gray-800 capitalize lg:text-2xl ">
                {`About the Team(if any)`}
                </h2>

                <div className="flex mx-auto mt-2">
                    <span className="inline-block w-40 h-1 bg-blue-900 rounded-full"></span>
                    <span className="inline-block w-3 h-1 mx-1 bg-blue-900 rounded-full"></span>
                    <span className="inline-block w-1 h-1 bg-blue-900 rounded-full"></span>
                </div>
            </div>
           <Input value="teamMemberName" label="Name of Team Members" placeHolder="Aditya Pandey" formikTouched={formik.touched.teamMemberName} formikError={formik.errors.teamMemberName} formikChange={formik.handleChange} formikBlur={formik.handleBlur} formikValue={formik.values.teamMemberName} type="text"/>

           <Input value="teamMemberEducation" label="Highest Qualification & Passing Year" placeHolder="B.Tech in Computer Science (2022)" formikTouched={formik.touched.teamMemberEducation} formikError={formik.errors.teamMemberEducation} formikChange={formik.handleChange} formikBlur={formik.handleBlur} formikValue={formik.values.teamMemberEducation} type="text"/>

           <Input value="teamMemberInstituteName" label="Institute Name" placeHolder="KIET Group Of Institutions" formikTouched={formik.touched.teamMemberInstituteName} formikError={formik.errors.teamMemberInstituteName} formikChange={formik.handleChange} formikBlur={formik.handleBlur} formikValue={formik.values.teamMemberInstituteName} type="text"/>

           <div className="mt-5 mb-4">
                <h2 className="text-xl font-semibold text-gray-800 capitalize lg:text-2xl ">
                {`About the applicant's Technology/project idea`}
                </h2>

                <div className="flex mx-auto mt-2">
                    <span className="inline-block w-40 h-1 bg-blue-900 rounded-full"></span>
                    <span className="inline-block w-3 h-1 mx-1 bg-blue-900 rounded-full"></span>
                    <span className="inline-block w-1 h-1 bg-blue-900 rounded-full"></span>
                </div>
            </div>

           <Input value="projectTitle" label="Please provide a short title of the project" placeHolder="Enter your project Title " formikTouched={formik.touched.projectTitle} formikError={formik.errors.projectTitle} formikChange={formik.handleChange} formikBlur={formik.handleBlur} formikValue={formik.values.projectTitle} type="text"/>

           <Input value="techStack" label="Please provide an emerging technology you are using (e.g., IoT, AI, Blockchain, Robotics, ML, etc.):" placeHolder="Enter your Tech Stack " formikTouched={formik.touched.techStack} formikError={formik.errors.techStack} formikChange={formik.handleChange} formikBlur={formik.handleBlur} formikValue={formik.values.techStack} type="text" className="mt-20"/>

            <InputTextArea value="ideaDescription" label="Please provide a brief idea of your project in 100 words." placeHolder="Enter brief description." formikTouched={formik.touched.ideaDescription} formikError={formik.errors.ideaDescription} formikChange={formik.handleChange} formikBlur={formik.handleBlur} formikValue={formik.values.ideaDescription} />

            <InputFile value="conceptNote" label="Please attach a concept note of your technology/project." formik={formik} formikTouched={formik.touched.conceptNote} formikError={formik.errors.conceptNote} formikChange={formik.handleChange} formikBlur={formik.handleBlur} formikValue={formik.values.conceptNote} />


            <InputFile value="aspectNote" label="Please attach a note describing the impact of the technology/project you are proposing for. Describe the innovative elements and uniqueness of the idea along with comparisons with existing solutions in the market." formik={formik} formikTouched={formik.touched.aspectNote} formikError={formik.errors.aspectNote} formikChange={formik.handleChange} formikBlur={formik.handleBlur} formikValue={formik.values.aspectNote} />

            <InputRadio value="projectStatus" label="Category" options={projectStatusOptions} formikTouched={formik.touched.projectStatus} formikError={formik.errors.projectStatus} formikChange={formik.handleChange} formikBlur={formik.handleBlur} />

            <InputFile value="projectVideo" label="Please upload video of project Status" formik={formik} formikTouched={formik.touched.projectVideo} formikError={formik.errors.projectVideo} formikChange={formik.handleChange} formikBlur={formik.handleBlur} formikValue={formik.values.projectVideo} />


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
          <div className="mt-5 mb-4">
                <h2 className="text-xl font-semibold text-gray-800 capitalize lg:text-2xl ">
                {` Have you formed a company? Give Details (if any)`}
                </h2>

                <div className="flex mx-auto mt-2">
                    <span className="inline-block w-40 h-1 bg-blue-900 rounded-full"></span>
                    <span className="inline-block w-3 h-1 mx-1 bg-blue-900 rounded-full"></span>
                    <span className="inline-block w-1 h-1 bg-blue-900 rounded-full"></span>
                </div>
            </div>
            <Input value="companyName" label="Company Name" placeHolder="Develop It " formikTouched={formik.touched.companyName} formikError={formik.errors.companyName} formikChange={formik.handleChange} formikBlur={formik.handleBlur} formikValue={formik.values.companyName} type="text" className="mt-20"/>

            <Input value="incorporationDate" label="Incorporation Date" placeHolder="02-06-2009" formikTouched={formik.touched.incorporationDate} formikError={formik.errors.incorporationDate} formikChange={formik.handleChange} formikBlur={formik.handleBlur} formikValue={formik.values.incorporationDate} type="date" />

            <InputTextArea value="companyDescription" label="Brief about the Company." placeHolder="Enter your company details." formikTouched={formik.touched.companyDescription} formikError={formik.errors.companyDescription} formikChange={formik.handleChange} formikBlur={formik.handleBlur} formikValue={formik.values.companyDescription} />

            <div className="mt-5 mb-4">
                <h2 className="text-xl font-semibold text-gray-800 capitalize lg:text-2xl ">
                {`Checklist of essential criteria`}
                </h2>

                <div className="flex mx-auto mt-2">
                    <span className="inline-block w-40 h-1 bg-blue-900 rounded-full"></span>
                    <span className="inline-block w-3 h-1 mx-1 bg-blue-900 rounded-full"></span>
                    <span className="inline-block w-1 h-1 bg-blue-900 rounded-full"></span>
                </div>
            </div>

            <InputRadio value="previousRecipient" label="Applicant confirms that he/she has not been a recipient of the TIDE 2.0-EIR previously." options={generalOptions} formikTouched={formik.touched.previousRecipient} formikError={formik.errors.previousRecipient} formikChange={formik.handleChange} formikBlur={formik.handleBlur} />


            <InputRadio value="fullCommitment" label="Applicant is planning to pursue TIDE 2.0 EIR full-time with no other concurrent commitments." options={generalOptions} formikTouched={formik.touched.fullCommitment} formikError={formik.errors.fullCommitment} formikChange={formik.handleChange} formikBlur={formik.handleBlur} />


            <InputRadio value="noOtherFellowship" label="Applicant confirms that he/she will not be in receipt of any other remuneration or fellowship during the duration of the TIDE 2.0 EIR." options={generalOptions} formikTouched={formik.touched.noOtherFellowship} formikError={formik.errors.noOtherFellowship} formikChange={formik.handleChange} formikBlur={formik.handleBlur} />

            <InputRadio value="businessCommitment" label="Applicant admits that he/she is willing to take the startup formation as the primary career option." options={generalOptions} formikTouched={formik.touched.businessCommitment} formikError={formik.errors.businessCommitment} formikChange={formik.handleChange} formikBlur={formik.handleBlur} />

            <InputRadio value="notBeneficiary" label="Applicant confirms that he/she is not the promoter or significant (>10%) shareholder/beneficiary of another company at the time of applying for and receiving the TIDE 2.0 EIR support." options={generalOptions} formikTouched={formik.touched.notBeneficiary} formikError={formik.errors.notBeneficiary} formikChange={formik.handleChange} formikBlur={formik.handleBlur} />

            





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