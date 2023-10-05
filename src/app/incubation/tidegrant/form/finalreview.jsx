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
        label: 'Resume',
        value: 'resume',
    },

    {   id:14,
        label: 'Applicant Image',
        value: 'applicantImage',
    },
    {
        id: 15,
        label: 'Aadhar Image',
        value: 'aadharImage',
    },
    {
        id: 16,
        label: 'Pan Image',
        value: 'panImage',
    },
    {
        id: 17,
        label: 'Profession of the Applicant',
        value: 'applicantProfession',
    },
    {
        id: 18,
        label: 'Annual Income of the applicant',
        value: 'annualIncome',
    },
    {
        id: 19,
        label: 'Project Title',
        value: 'projectTitle',
    },
    
    {
        id: 20,
        label: 'Status of the Project',
        value: 'projectStatus',
    },
    {
        id: 21,
        label: 'techStack',
        value: 'Tech Stack',
    },
    {
        id: 22,
        label: 'Idea Description',
        value: 'ideaDescription',
    },
    {
        id: 23,
        label: 'Video of project Status',
        value: 'projectVideo',
    },
    {
        id: 24,
        label: 'Beneficiary of the innovation',
        value: 'innovationBeneficiary',
    },
    {
        id: 25,
        label: 'Total Cost of the Prototype',
        value: 'prototypeCostDetails',
    },
    {
        id: 26,
        label: 'Project Period',
        value: 'projectPeriod',
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
        label: 'Activities',
        value: 'activities',
    },
    {
        id: 32,
        label: 'Monitorable Milestones',
        value: 'monitrableMilestones',
    },
    {
        id: 33,
        label: 'Duration (months)',
        value: 'duration',
    },
    {
        id: 34,
        label: 'financial support/award for your present work from any other source?',
        value: 'financialSupportStatus',
    },
    {
        id: 34,
        label: 'Applicant Confirms that he/she has not been a recipient of any TIDE 2.0 Grant or similar support previously for the same innovative concept as proposed in this form',
        value: 'previousRecipient',
    },
    {
        id: 35,
        label: 'Applicant confirms that he/she is fully committed to work towards the prototype development for which the support is being sought and should not treat this as a stop gap arrangement to support any other pursuits',
        value: 'fullCommitment',
    },
    {
        id: 36,
        label: 'Applicant is planning to pursue TIDE 2.0 Grant full time with no other concurrent commitments.',
        value: 'noOtherFellowship',
    },
    {
        id: 37,
        label: 'Applicant has or is planning to register for the pre incubation or incubation program at the TBI for the entire duration of TIDE 2.0 support:',
        value: 'incubationRegister',
    }
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
