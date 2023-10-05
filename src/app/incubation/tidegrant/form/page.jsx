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
import InputSelect from '@/components/inputSelect';


const steps = ['Applicant Details', 'Idea Description', 'Work Plan & Checklist','Final Review'];

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
      applicantProfession:Yup.string().required('Required'),
      annualIncome:Yup.string().required('Required'),
      projectTitle: Yup.string().required('Required'),
      techStack: Yup.string().required('Required'),
    ideaDescription: Yup.string().required('Required'),
      projectStatus: Yup.string().required('Required'),
      projectVideo: Yup.mixed()
      .test('fileSize', 'File size must be less than 20MB', (value) => {
        if (!value) return true;
        return value && value.size <= 20 * 1024 * 1024;
      }).required('Upload the video'),
      innovationBeneficiary:Yup.string().required('Required'),
      prototypeCostDetails:Yup.number().required('Required'),
      projectPeriod:Yup.number().max(12,'Must be less than 12').required('Required'),
      companyName:Yup.string(),
      incorporationDate:Yup.date(),
      companyDescription:Yup.string(),
      activities:Yup.string().required('Required'),
      monitrableMilestones:Yup.number().max(12,'Not more than 12 months').required('Required'),
      duration:Yup.number().max(12,'Must be less than 12').required('Required'),
      financialSupportStatus:Yup.string(),
    previousRecipient: Yup.string().required('Required'),
    fullCommitment: Yup.string().required('Required'),
    noOtherFellowship: Yup.string().required('Required'),
    incubationRegister: Yup.string().required('Required'),
    
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
      applicantProfession:'',
      annualIncome:'',
      projectTitle:'',
      projectStatus:'',
      techStack:'',
      ideaDescription: '',
      projectVideo:null,
      innovationBeneficiary:'',
      prototypeCostDetails:'',
      projectPeriod:'',
      companyName:'',
      incorporationDate:'',
      companyDescription:'',
      activities:'',
      monitrableMilestones:'',
      duration:'',
      financialSupportStatus:'',
      previousRecipient: '',
      fullCommitment: '',
      noOtherFellowship: '',
     incubationRegister:'',
     
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
  

  const generalOptions = [
    { label: 'Yes', value: 'yes' },
    { label: 'No', value: 'no' },
  ]
  const projectStatusOptions=[
    {label: 'Idea',value:'idea'},
    {label: 'POC',value:'poc'},
    {label: 'Prototype',value:'prototype'},
    {label: 'Ready to commercialize',value:'readytocommercialize'},
    {label: 'Ready Market Product',value:'readymarketproduct'}
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


              <Button type='submit' >Finish</Button>
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

            
            <InputFile value="resume" label="Attach your latest CV or Resume with details of education and work experience" formik={formik} formikTouched={formik.touched.resume} formikError={formik.errors.resume} formikChange={formik.handleChange} formikBlur={formik.handleBlur} formikValue={formik.values.resume} />

            <InputFile value="applicantImage" label="Attach PP Size Photo" formik={formik} formikTouched={formik.touched.applicantImage} formikError={formik.errors.applicantImage} formikChange={formik.handleChange} formikBlur={formik.handleBlur} formikValue={formik.values.applicantImage} />

            <InputFile value="aadharImage" label="Attach Aadhar Card Image" formik={formik} formikTouched={formik.touched.aadharImage} formikError={formik.errors.aadharImage} formikChange={formik.handleChange} formikBlur={formik.handleBlur} formikValue={formik.values.aadharImage} />

            <InputFile value="panImage" label="Attach PAN Card Image" formik={formik} formikTouched={formik.touched.panImage} formikError={formik.errors.panImage} formikChange={formik.handleChange} formikBlur={formik.handleBlur} formikValue={formik.values.panImage} />


            <Input value="applicantProfession" label="Profession of the Applicant." placeHolder="Enter your institute name " formikTouched={formik.touched.applicantProfession} formikError={formik.errors.applicantProfession} formikChange={formik.handleChange} formikBlur={formik.handleBlur} formikValue={formik.values.applicantProfession} type="text"/>

            <Input value="annualIncome" label="Annual Income of the applicant." placeHolder="Enter your institute name " formikTouched={formik.touched.annualIncome} formikError={formik.errors.annualIncome} formikChange={formik.handleChange} formikBlur={formik.handleBlur} formikValue={formik.values.annualIncome} type="text"/>




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
                {`About the applicant's Technology/project idea`}
                </h2>

                <div className="flex mx-auto mt-2">
                    <span className="inline-block w-40 h-1 bg-blue-900 rounded-full"></span>
                    <span className="inline-block w-3 h-1 mx-1 bg-blue-900 rounded-full"></span>
                    <span className="inline-block w-1 h-1 bg-blue-900 rounded-full"></span>
                </div>
            </div>

           <Input value="projectTitle" label="Enter the title for your Idea" placeHolder=" " formikTouched={formik.touched.projectTitle} formikError={formik.errors.projectTitle} formikChange={formik.handleChange} formikBlur={formik.handleBlur} formikValue={formik.values.projectTitle} type="text"/>

           <InputSelect value="projectStatus" label="Please select the status of the project already carried out" options={projectStatusOptions} formikTouched={formik.touched.projectStatus} formikError={formik.errors.projectStatus} formikChange={formik.handleChange} formikBlur={formik.handleBlur} />

           <Input value="techStack" label="Technology & Working Principle behind the project:" placeHolder=" " formikTouched={formik.touched.techStack} formikError={formik.errors.techStack} formikChange={formik.handleChange} formikBlur={formik.handleBlur} formikValue={formik.values.techStack} type="text" className="mt-20"/>

            <InputTextArea value="ideaDescription" label="Describe the idea of highlighting innovative elements" formikTouched={formik.touched.ideaDescription} formikError={formik.errors.ideaDescription} formikChange={formik.handleChange} formikBlur={formik.handleBlur} formikValue={formik.values.ideaDescription} />

            <InputFile value="projectVideo" label="Please upload video of project Status" formik={formik} formikTouched={formik.touched.projectVideo} formikError={formik.errors.projectVideo} formikChange={formik.handleChange} formikBlur={formik.handleBlur} formikValue={formik.values.projectVideo} />

            <Input value="innovationBeneficiary" label="Who would be the beneficiary of this innovation and why?" placeHolder=" " formikTouched={formik.touched.innovationBeneficiary} formikError={formik.errors.innovationBeneficiary} formikChange={formik.handleChange} formikBlur={formik.handleBlur} formikValue={formik.values.innovationBeneficiary} type="text"/>

            <Input value="prototypeCostDetails" label="Total Cost of the prototype: (Please provide the details)" placeHolder=" " formikTouched={formik.touched.prototypeCostDetails} formikError={formik.errors.prototypeCostDetails} formikChange={formik.handleChange} formikBlur={formik.handleBlur} formikValue={formik.values.prototypeCostDetails} type="number" />

            <Input value="projectPeriod" label="Project period in months (Not more than 12 months)" placeHolder=" " formikTouched={formik.touched.projectPeriod} formikError={formik.errors.projectPeriod} formikChange={formik.handleChange} formikBlur={formik.handleBlur} formikValue={formik.values.projectPeriod} type="number" />
            

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
                {` Activity details/work plan`}
                </h2>

                <div className="flex mx-auto mt-2">
                    <span className="inline-block w-40 h-1 bg-blue-900 rounded-full"></span>
                    <span className="inline-block w-3 h-1 mx-1 bg-blue-900 rounded-full"></span>
                    <span className="inline-block w-1 h-1 bg-blue-900 rounded-full"></span>
                </div>
            </div>
            <Input value="activities" label="Activities" placeHolder="" formikTouched={formik.touched.activities} formikError={formik.errors.activities} formikChange={formik.handleChange} formikBlur={formik.handleBlur} formikValue={formik.values.activities} type="text" />

            <Input value="monitrableMilestones" label="Monitorable Milestones" placeHolder="" formikTouched={formik.touched.monitrableMilestones} formikError={formik.errors.monitrableMilestones} formikChange={formik.handleChange} formikBlur={formik.handleBlur} formikValue={formik.values.monitrableMilestones} type="text" />

            <Input value="duration" label="Duration (months)" placeHolder="" formikTouched={formik.touched.duration} formikError={formik.errors.duration} formikChange={formik.handleChange} formikBlur={formik.handleBlur} formikValue={formik.values.duration} type="number" />

            <Input value="financialSupportStatus" label="Have you received financial support/award for your present work from any other source? (if so, please furnish details)" placeHolder="" formikTouched={formik.touched.financialSupportStatus} formikError={formik.errors.financialSupportStatus} formikChange={formik.handleChange} formikBlur={formik.handleBlur} formikValue={formik.values.financialSupportStatus} type="text" />



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

            <InputRadio value="previousRecipient" label="Applicant Confirms that he/she has not been a recipient of any TIDE 2.0 Grant or similar support previously for the same innovative concept as proposed in this form" options={generalOptions} formikTouched={formik.touched.previousRecipient} formikError={formik.errors.previousRecipient} formikChange={formik.handleChange} formikBlur={formik.handleBlur} />


            <InputRadio value="fullCommitment" label="Applicant confirms that he/she is fully committed to work towards the prototype development for which the support is being sought and should not treat this as a stop gap arrangement to support any other pursuits" options={generalOptions} formikTouched={formik.touched.fullCommitment} formikError={formik.errors.fullCommitment} formikChange={formik.handleChange} formikBlur={formik.handleBlur} />


            <InputRadio value="noOtherFellowship" label="Applicant is planning to pursue TIDE 2.0 Grant full time with no other concurrent commitments." options={generalOptions} formikTouched={formik.touched.noOtherFellowship} formikError={formik.errors.noOtherFellowship} formikChange={formik.handleChange} formikBlur={formik.handleBlur} />

            <InputRadio value="incubationRegister" label="Applicant has or is planning to register for the pre incubation or incubation program at the TBI for the entire duration of TIDE 2.0 support:" options={generalOptions} formikTouched={formik.touched.incubationRegister} formikError={formik.errors.incubationRegister} formikChange={formik.handleChange} formikBlur={formik.handleBlur} />

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