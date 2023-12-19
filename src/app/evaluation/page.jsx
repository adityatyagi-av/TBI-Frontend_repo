"use client"
import {useState,useEffect}from 'react';
import { createClient } from '@supabase/supabase-js';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Button } from '@nextui-org/react';
import {Spinner} from "@nextui-org/react";
import InputSelect2 from '@/components/inputSelect2';
import { useRouter } from 'next/navigation';


const steps = ['Important Details', 'ID Select'];
const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL,process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY );


export default function TestPage() {
  const router=useRouter();
  const [activeStep, setActiveStep] = useState(0);
  const [list,setList]=useState([])
  const [loading, setLoading] = useState(true);
 //fetching data using useEffect
  useEffect(()=>{
    const fetchLibraryData = async () => {
      try {
      
        const { data, error } = await supabase
          .from('evaluator1')
          .select('id,name,project'); 

        if (error) {
          console.error('Error fetching library data:', error.message);
        } else {
          setList(data || []);
          setLoading(false)
        }
      } catch (error) {
        console.error('Error fetching library data:', error.message);
      }
    };
    fetchLibraryData();
    
  },[])



 //handling steps 
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);  
  };
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  console.log(list)


  //validation Schema
  const validationSchema = Yup.object({
    id:Yup.string().required(),

  });


  const formik = useFormik({
    initialValues: {
      id: '',
     
      
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      const selectedId = values.id;
     
      
      
      
        console.log(selectedId)
        // alert(JSON.stringify(values, null, 2));
        router.prefetch(`evaluation/${selectedId}`)
        router.push(`evaluation/${selectedId}`)
        
      }
      
      

  
  });

 
  

  return (
    <div className='sm:mx-auto ml-6 mt-2  max-w-screen-md'>
      {loading ? (
        <div className='flex items-center justify-center'>
          <Spinner  label="Loading Portal" color="primary" size='lg' labelColor="primary"/>  
        </div>
        
      ) : (

      <form onSubmit={formik.handleSubmit}>
        

        {activeStep === steps.length-1 &&
          <>
            <div className="mt-8"/>
          <div className="mt-5 mb-4">
                <h2 className="text-xl font-semibold text-gray-800 capitalize lg:text-2xl ">
                {`SELECT APPLICANT`}
                </h2>

                <div className="flex mx-auto mt-2">
                    <span className="inline-block w-52 h-1 bg-blue-900 rounded-full"></span>
                    <span className="inline-block w-4 h-1 mx-1 bg-blue-900 rounded-full"></span>
                    <span className="inline-block w-2 h-1 bg-blue-900 rounded-full"></span>
                </div>
            </div>
            
            <InputSelect2 value="id" label="Select" options={list} formikTouched={formik.touched.id} formikError={formik.errors.id} formikChange={formik.handleChange} formikBlur={formik.handleBlur} formikValue={formik.values.id} />

           <div className='flex flex-wrap justify-around'>
           <Button color="primary"
                
                disabled={activeStep === 0}
                onClick={handleBack}
                
              >
                Back
              </Button>
              


              <Button color="primary" type='submit' >START TEST</Button>
          
           </div>
              

            
          </>
        }



      {  activeStep === 0 && 
          
            <>
            <div className="mt-8"/>
          <div className="mt-5 mb-4">
                <h2 className="text-xl font-semibold text-gray-800 capitalize lg:text-2xl ">
                {`Important Details`}
                </h2>

                <div className="flex mx-auto mt-2">
                    <span className="inline-block w-44 h-1 bg-blue-900 rounded-full"></span>
                    <span className="inline-block w-4 h-1 mx-1 bg-blue-900 rounded-full"></span>
                    <span className="inline-block w-2 h-1 bg-blue-900 rounded-full"></span>
                </div>
            </div>
           
          

<ul class=" space-y-1 text-gray-500 my-4 list-disc list-inside dark:text-gray-400">
    <li>
    You can evaluate one applicant at once.
    </li>
    <li>
    Don{`'`}t submit form without evaluating because once done it is unreversible.
    </li>
</ul>




        
            <div className='flex flex-row justify-around'>
            <Button 
              
              disabled={activeStep === 0}
              onClick={handleBack}
             
            >
              Back
            </Button>
           
           

            <Button color="primary"
            onClick={handleNext}>

              { 'Next'}
            </Button>
            </div>
        </>
         }
        



       
        
    </form>)}
  </div>
  );
}