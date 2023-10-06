import ReviewLabel from '@/components/Reviewlabel';
import InputFile from '@/components/inputFile';
import React from 'react';

const FinalReview = ({ formik }) => {
  const items = [
    { 
      id:1,
      label: 'Name',
      value: 'name',
    },
    { 
        id:2,
        label: 'Applicant Image',
        value: 'applicantImage',
      },
      { 
        id:3,
        label: `Father's Name`,
        value: 'fatherName',
      },

    {   
        id:4,
        label: 'Email',
        value: 'email',
    },
    {   
        id:5,
        label: 'Phone Number',
        value: 'phoneNumber',
    },
    {   
        id:6,
        label: 'Whatsapp Number',
        value: 'whatsappNumber',
    },
    {   
        id:7,
        label: 'Address',
        value: 'address',
    },
    {   
        id:8,
        label: 'Address Document',
        value: 'addressDocument',
    },
    {
        id:9,
        label: 'Date Of Birth',
        value: 'dateOfBirth',
    },
    {   
        id:10,
        label: 'Gender',
        value: 'gender',
    },
    {
        id: 11,
        label: 'Category',
        value: 'category',
    },
    {
        id: 12,
        label: 'Pan Number',
        value: 'panNumber',
    },
    {
        id: 13,
        label: 'Aadhar Number',
        value: 'aadharNumber',
    },
    {
        id: 14,
        label: 'Education',
        value: 'education',
    },
    {
        id: 15,
        label: 'Enterpreneurship Experience',
        value: 'experience',
    },
    {
        id: 16,
        label: 'Resume',
        value: 'resume',
    },
    {
        id: 17,
        label: 'Are you an  Innovator in Employment / Students with any R& D organisation / Academic Institution ?',
        value: 'innovator',
    },
    {
        id: 18,
        label: 'Annual Income',
        value: 'annualIncome',
    },
    {
        id: 19,
        label: ' Have you started and registered your own Venture (start up) ',
        value: 'ownVenture',
    },
    {
        id: 20,
        label: 'Team Members in your proposed project',
        value: 'teamMembers',
    },
    {
        id: 21,
        label: 'Idea Description',
        value: 'ideaDescription',
    },
    {
        id: 22,
        label: 'Project Status',
        value: 'projectStaatus',
    },
    {
        id: 23,
        label: 'Science and working principle behind the idea',
        value: 'ideaTechnology',
    },
    {
        id: 25,
        label: 'Video showcasing your idea presentation/POC/Prototype working',
        value: 'projectVideo',
    },
    {
        id: 26,
        label: 'Quantum (amount) of the fund required (Cost break-up and time activity plan have to be submitted at the time of presentation )',
        value: 'amountRequired',
    },
    {
        id: 27,
        label: 'Have you received financial support / award for your present work from any other sources? (if so, please furnish details)',
        value: 'financialSupport',
    },
    {
        id: 28,
        label: 'Applicant Confirms that he/she has not been a recipient of any NIDHI-PRAYAS or similar support previously for the same innovative concept as proposed in this form. (NIDHI-PRAYAS can be used only once.)',
        value: 'previousReciepent',
    },
    {
        id: 29,
        label: 'Applicant is planning to pursue NIDHI- PRAYAS full time with no other concurrent commitments',
        value: 'fullCommitment',
    },
    {
        id: 30,
        label: 'Applicant confirms that he/she is fully committed to exploring a business idea. NIDHI-EIR support recipient should not treat this support as a stop gap arrangement to support them in their academic pursuits or transition between jobs.',
        value: 'businessCommitment',
    },
    {
        id: 31,
        label: 'Applicant confirms that he/she is not the promoter or significant (>10%) share holder / beneficiary of another company at the time of applying for and receiving the NIDHI-EIR support.',
        value: 'notBeneficiary',
    },
    {
        id: 32,
        label: 'Applicant has or is planning to register for the pre incubation or incubation program at the TBI for the entire duration of PRAYAS support.',
        value: 'registerPEP',
    },
    {
        id: 33,
        label: 'Have you also applied / in process of applying to any other PRAYAS Centre (s) forHave you also applied / in process of applying to any other PRAYAS Centre (s) for NIDHI-PRAYAS and/or NIDHI-EIR grant -- Yes/ No',
        value: 'applyOtherPrayas',
    },
      

  ];

  return (
    <>
      {items.map((item) => (

        <ReviewLabel
          
          key={item.id}
          serialNumber={item.id}
          value={item.value}
          label={item.label} // Use the item's label
          formikError={formik.errors[item.value]} // Use item's value to access formik errors
          formikValue={formik.values[item.value]} // Use item's value to access formik values
        />
      ))}
      
    </>
  );
};

export default FinalReview;
