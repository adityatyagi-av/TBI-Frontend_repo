"use client"
import {CircularProgress,Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure} from "@nextui-org/react";
import { usePathname, useRouter} from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { createClient } from '@supabase/supabase-js';
import {Button, Spinner} from "@nextui-org/react";
import { useFormik } from 'formik';
import * as Yup from 'yup';

import InputSelect from "@/components/inputSelect";


const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

const Page = () => {
  const pathname = usePathname()
  const parts = pathname.split('/'); 
  const libraryid = parts[parts.length - 1]; 
  const [idDetails, setIDDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const router =useRouter();
 
  const question1=[
    {label:'Select rating from 1-10',value:'null'},
    {label:'1',value:'1'},
    {label:'2',value:'2'},
    {label:'3',value:'3'},
    {label:'4',value:'4'},
    {label:'5',value:'5'},
    {label:'6',value:'6'},
    {label:'7',value:'7'},
    {label:'8',value:'8'},
    {label:'9',value:'9'},
    {label:'10',value:'10'},
  ]


  useEffect(() => {
    const fetchLibraryDetails = async () => {
      try {
        const { data, error } = await supabase
          .from('evaluator1')
          .select('*')
          .eq('id', libraryid)
          .single();

        if (error) {
          console.error('Error fetching library details:', error.details);
        } else {
          if(data.a===null){
            setIDDetails(data || null);
          setLoading(false)
          }
          else{
            router.replace('/submitted')
          }
          
        }
      } catch (error) {
        console.error('Error fetching library details:', error);
      }
    };

    if (libraryid) {
      fetchLibraryDetails();
    }
    
  }, []);
console.log(setIDDetails)


  const validationSchema = Yup.object({
   
    ques1:Yup.string(),
    ques2:Yup.string(),
      ques3:Yup.string(),
      ques4:Yup.string(),
      ques5:Yup.string(),
      ques6:Yup.string(),
     
  });


  const formik = useFormik({
    initialValues: {
      ques1:"0",
      ques2:"0",
      ques3:"0",
      ques4:"0",
      ques5:"0",
      ques6:"0",
     
      
      
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      onOpen();
          
  
      console.log(values)
  
      try {
        const { data, error } = await supabase
          .from('slot11')
          .update({ score: totalScore })
          .eq('id', libraryid);
  
        if (error) {
          console.error('Error updating score:', error.message);
        } else {
          console.log('Score updated successfully:', data);
          setFormSubmitted(true)
          router.push('/succesfull')
          // Redirect or perform any other actions after successful update
        }
      } catch (error) {
        console.error('Error updating score:', error.message);
        router.push('/notsubmitted')
      }
    },
  });

  return (
    <div className='sm:mx-auto ml-6 mt-2  max-w-screen-md'>
      {loading ? (
        <div className='flex items-center justify-center'>
          <Spinner  label="Loading..." color="primary" size='lg' labelColor="primary"/>  
        </div>
        
      ) : (
        <>
        <div className="mt-5 mx-auto mb-4">
                <h2 className="text-xl font-semibold text-gray-800 capitalize lg:text-2xl ">
                {`NIDHI PRAYAS EVALUATION`}
                </h2>

                <div className="flex mx-auto mt-2">
                    <span className="inline-block w-64 h-1 bg-blue-900 rounded-full"></span>
                    <span className="inline-block w-10 h-1 mx-1 bg-blue-900 rounded-full"></span>
                    <span className="inline-block w-7 h-1 bg-blue-900 rounded-full"></span>
                </div>
            </div>
        
        <div className='flex gap-4 py-2'>
          <h4 className='text-md text-gray-700 '>Name: <span className='text-blue-700'>{idDetails.name}</span></h4>
          <h4> Project: <span className='text-blue-700'>{idDetails.project}</span></h4>
          
          </div>
          <form onSubmit={formik.handleSubmit}>

          <InputSelect value="ques1" label="1. Assessment of Business Idea, Innovator & team strength" options={question1} formikTouched={formik.touched.ques1} formikError={formik.errors.ques1} formikChange={formik.handleChange} formikBlur={formik.handleBlur} />
          
          <InputSelect value="ques2" label="2. Degree of uniqueness/innovativeness & understanding of competition" options={question1} formikTouched={formik.touched.ques2} formikError={formik.errors.ques2} formikChange={formik.handleChange} formikBlur={formik.handleBlur} />

          <InputSelect value="ques3" label="3. Product feasibility & status of IP component possibility" options={question1} formikTouched={formik.touched.ques3} formikError={formik.errors.ques3} formikChange={formik.handleChange} formikBlur={formik.handleBlur} />

          <InputSelect value="ques4" label="4. Business plan & milestones for prototypes development" options={question1} formikTouched={formik.touched.ques4} formikError={formik.errors.ques4} formikChange={formik.handleChange} formikBlur={formik.handleBlur} />

          <InputSelect value="ques5" label="5. Roadmap for commercialization, startup creation" options={question1} formikTouched={formik.touched.ques5} formikError={formik.errors.ques5} formikChange={formik.handleChange} formikBlur={formik.handleBlur} />

          <Button color="primary" type='submit' >Submit</Button>

          <Modal isOpen={isOpen} onOpenChange={onOpenChange} isDismissable={false} className="mx-auto">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">test Submission Status</ModalHeader>
              <ModalBody>
                {!formSubmitted?<CircularProgress size="lg" aria-label="Loading..." label="Submitting Form"/>:<><CircularProgress
      label="SuccesFully Submitted"
      size="lg"
      value={100}
      color="success"
      
      showValueLabel={true}
    /></>
    }
              </ModalBody>
              
            </>
          )}
        </ModalContent>
      </Modal>
          </form>
          </>
      )}
    </div>
  )
}

export default Page
