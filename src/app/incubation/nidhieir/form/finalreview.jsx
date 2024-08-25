import ReviewLabel from '@/components/Reviewlabel';
import InputFile from '@/components/inputFile';
import React from 'react';

const FinalReview = ({ formik }) => {
    console.log("formik down")
    console.dir(formik)
  const items = [
    { 
      id:1,
      label: 'Namhbjlq3vewkj.cbvkqen blkr;k jr/kelse',
      value: 'n34fiuhio34v34v',
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
        label: 'Address',
        value: 'address',
    },
    {
        id:5,
        label: 'Date Of Birth',
        value: 'dateOfBirth',
    },
    {   
        id:6,
        label: 'Gender',
        value: 'gender',
    },
    {
        id: 7,
        label: 'Category',
        value: 'category',
    },
    {
        id: 8,
        label: 'Education',
        value: 'education',
    },
    {
        id: 9,
        label: 'Enterpreneurship Experience',
        value: 'experience',
    },
    {
        id: 10,
        label: 'Resume',
        value: 'resume',
    },
    {
        id: 11,
        label: 'Idea Description',
        value: 'ideaDescription',
    },
    {
        id: 12,
        label: 'Concept Note',
        value: 'conceptNote',
    },
    {
        id: 13,
        label: 'Aspect Note',
        value: 'aspectNote',
    },
    {
        id: 14,
        label: 'Applicant confirms that he/she has not been a recipient of the NIDHI-EIR previously. NIDHI-EIR can be used only once.',
        value: 'previousRecipient',
    },
    {
        id: 15,
        label: 'Applicant is planning to pursue NIDHI-EIR full-time with no other concurrent commitments.',
        value: 'fullCommitment',
    },
    {
        id: 16,
        label: 'Applicant confirms that he/she will not be in receipt of any other remuneration or fellowship during the duration of the NIDHI-EIR.',
        value: 'noOtherFellowship',
    },
    {
        id: 17,
        label: 'Applicant confirms that he/she is fully committed to exploring a business idea. NIDHI-EIR support recipient should not treat this support as a stop gap arrangement to support them in their academic pursuits or transition between jobs.',
        value: 'businessCommitment',
    },
    {
        id: 18,
        label: 'Applicant confirms that he/she is not the promoter or significant (>10%) share holder / beneficiary of another company at the time of applying for and receiving the NIDHI-EIR support.',
        value: 'notBeneficiary',
    },
    {
        id: 19,
        label: 'The NIDHI-EIR has or is planning to register for the pre-incubation or incubation program at the PEP for the entire duration of NIDHI-EIR support.',
        value: 'notBeneficiary',
    },
    {
        id: 20,
        label:"Sceh,a",
        value:"scheme",
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
