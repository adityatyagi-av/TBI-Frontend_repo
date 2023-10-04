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
        label: 'Email',
        value: 'email',
    },
    {   
        id:3,
        label: 'Phone Number',
        value: 'phoneNumber',
    },
    {   
        id:4,
        label: 'Whatsapp Number',
        value: 'whatsappNumber',
    },
    {   
        id:5,
        label: 'Address',
        value: 'address',
    },
    {
        id:6,
        label: 'Date Of Birth',
        value: 'dateOfBirth',
    },
    {   
        id:7,
        label: 'Gender',
        value: 'gender',
    },
    {
        id: 8,
        label: 'Category',
        value: 'category',
    },
    {
        id: 9,
        label: 'Pan Number',
        value: 'panNumber',
    },
    {
        id: 10,
        label: 'Aadhar Number',
        value: 'aadharNumber',
    },
    {
        id: 11,
        label: 'Education',
        value: 'education',
    },
    {
        id: 12,
        label: 'Institute Name',
        value: 'instituteName',
    },
    {
        id: 13,
        label: 'Enterpreneurship Experience',
        value: 'experience',
    },
    {
        id: 14,
        label: 'Resume',
        value: 'resume',
    },

    {   id:15,
        label: 'Applicant Image',
        value: 'applicantImage',
    },
    {
        id: 16,
        label: 'Aadhar Image',
        value: 'aadharImage',
    },
    {
        id: 17,
        label: 'Pan Image',
        value: 'panImage',
    },
    {
        id: 18,
        label: 'Team Member Name',
        value: 'teamMemberName',
    },
    {
        id: 19,
        label: 'Team Member Education',
        value: 'teamMemberEducation',
    },
    {
        id: 20,
        label: 'Team Member Institute Name',
        value: 'teamMemberInstituteName',
    },
    {
        id: 21,
        label: 'Project Title',
        value: 'projectTitle',
    },
    {
        id: 22,
        label: 'techStack',
        value: 'Tech Stack',
    },
    {
        id: 23,
        label: 'Idea Description',
        value: 'ideaDescription',
    },
    {
        id: 24,
        label: 'Concept Note',
        value: 'conceptNote',
    },
    {
        id: 25,
        label: 'Aspect Note',
        value: 'aspectNote',
    },
    {
        id: 26,
        label: 'Project Status',
        value: 'projectStatus',
    },
    {
        id: 27,
        label: 'Project Video',
        value: 'projectVideo',
    },
    {
        id: 28,
        label: 'Company Name',
        value: 'companyName',
    },
    {
        id: 29,
        label: 'Incorporation Date',
        value: 'incorporationDate',
    },
    {
        id: 30,
        label: 'Company Description',
        value: 'companyDescription',
    },
    {
        id: 31,
        label: 'Applicant confirms that he/she has not been a recipient of the TIDE 2.0-EIR previously.',
        value: 'previousRecipient',
    },
    {
        id: 32,
        label: 'Applicant is planning to pursue TIDE 2.0 EIR full-time with no other concurrent commitments.',
        value: 'fullCommitment',
    },
    {
        id: 33,
        label: 'Applicant confirms that he/she will not be in receipt of any other remuneration or fellowship during the duration of the TIDE 2.0 EIR.',
        value: 'noOtherFellowship',
    },
    {
        id: 34,
        label: 'Applicant admits that he/she is willing to take the startup formation as the primary career option.',
        value: 'businessCommitment',
    },
    {
        id: 35,
        label: 'Applicant confirms that he/she is not the promoter or significant (>10%) shareholder/beneficiary of another company at the time of applying for and receiving the TIDE 2.0 EIR support.',
        value: 'notBeneficiary',
    },


      

  ];

  return (
    <>
      {items.map((item) => (
        <ReviewLabel
          key={item.id}
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
