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
        label: 'Enterpreneurship xperience',
        value: '',
    },
    {
        id: ,
        label: '',
        value: '',
    },

    {   id:10,
        label: 'Resume',
        value: 'resume',
    },
    {
        id: ,
        label: '',
        value: '',
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
