"use client"
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const SignupForm = () => {
  
  //conditions for dob
  const today = new Date();
  const minDate = new Date(today);
  minDate.setFullYear(today.getFullYear() - 15); 
  const formik = useFormik({
    initialValues: {
      name: '',
      phoneNumber:'',
      email: '',
      dateOfBirth:'',
      gender:'',
      category:'',
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
      phoneNumber: Yup.string()
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
    }),
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <>
    
<section className=" bg-gray-100/50">
    <form onSubmit={formik.handleSubmit} className="container max-w-2xl mx-auto shadow-md md:w-3/4">
        <div className="p-4 border-t-2 border-blue-900 rounded-lg bg-gray-100/5 ">
            <div className="max-w-sm mx-auto md:w-full md:mx-0">
                <div className="inline-flex items-center space-x-4">
                    <a href="#" className="relative block">
                        <img alt="profil" src="/aditya.png" className="mx-auto object-cover rounded-full h-16 w-16 "/>
                    </a>
                    <h1 className="text-gray-600">
                        ADITYA TYAGi
                    </h1>
                </div>
            </div>
        </div>
        <div className="space-y-6 bg-white">
            <div className="items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
                <h2 className="max-w-sm mx-auto md:w-1/3">
                    Personal Information
                </h2>
                <div className="max-w-sm mx-auto md:w-2/3">
                    <div className=" relative mb-2">
                        <input  id="name"
                          name="name"
                          type="text"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.name} 
                          className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent" 
                          placeholder="Name of the Applicant"/>
                          {formik.touched.name && formik.errors.name ? (
                              <div className='ml-7 text-xs text-red-300'>{formik.errors.name}</div>
                            ) : null}
                        </div>
                        {/* code for email */}
                        <div className=" relative mb-2 ">
                        <input  id="email"
                          name="email"
                          type="text"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.email} 
                          className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent" 
                          placeholder="E-mail"/>
                          {formik.touched.email && formik.errors.email ? (
                              <div className='ml-7 text-xs text-red-300'>{formik.errors.email}</div>
                            ) : null}
                        </div>
                        {/* code for phone number */}
                        <div className="relative mb-2">
                          <input
                            id="phoneNumber"
                            name="phoneNumber" 
                            type="tel"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.phoneNumber} 
                            className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                            placeholder="Phone Number"
                          />
                          {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
                            <div className="ml-7 text-xs text-red-300">{formik.errors.phoneNumber}</div>
                          ) : null}
                        </div>

                        <div className="relative pb-2">
                          <input
                            id="dateOfBirth"
                            name="dateOfBirth"
                            type="date"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.dateOfBirth}
                            className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                            placeholder="Date of Birth"
                          />
                          {formik.touched.dateOfBirth && formik.errors.dateOfBirth ? (
                            <div className="ml-7 text-xs text-red-300">{formik.errors.dateOfBirth}</div>
                          ) : null}
                        </div>
                       
                        <div className="relative pb-2 ml-2">
                          <label className="block text-gray-600 text-sm font-bold mb-2">Gender</label>
                          <div className="flex">
                            <label className="inline-flex items-center mr-4">
                              <input
                                type="radio"
                                id="gender-male"
                                name="gender"
                                value="male"
                                checked={formik.values.gender === 'male'}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                className="form-radio text-blue-500 h-4 w-4"
                              />
                              <span className="ml-2">Male</span>
                            </label>
                            <label className="inline-flex items-center mr-4">
                              <input
                                type="radio"
                                id="gender-female"
                                name="gender"
                                value="female"
                                checked={formik.values.gender === 'female'}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                className="form-radio text-pink-500 h-4 w-4"
                              />
                              <span className="ml-2">Female</span>
                            </label>
                            <label className="inline-flex items-center">
                              <input
                                type="radio"
                                id="gender-other"
                                name="gender"
                                value="other"
                                checked={formik.values.gender === 'other'}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                className="form-radio text-green-500 h-4 w-4"
                              />
                              <span className="ml-2">Other</span>
                            </label>
                          </div>
                          {formik.touched.gender && formik.errors.gender ? (
                            <div className="ml-7 text-xs text-red-300">{formik.errors.gender}</div>
                          ) : null}
                        </div>
                        <div className="relative pb-2 ml-2">
                          <label className="block text-gray-600 text-sm font-bold mb-2">Category</label>
                          <div className="flex flex-row">
                            <label className="inline-flex items-center mr-4">
                              <input
                                type="radio"
                                id="category-general"
                                name="category"
                                value="general"
                                checked={formik.values.category === 'general'}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                className="form-radio text-blue-500 h-4 w-4"
                              />
                              <span className="ml-2">General</span>
                            </label>
                            <label className="inline-flex items-center mr-4">
                              <input
                                type="radio"
                                id="category-obc"
                                name="category"
                                value="obc"
                                checked={formik.values.category === 'obc'}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                className="form-radio text-blue-500 h-4 w-4"
                              />
                              <span className="ml-2">OBC</span>
                            </label>
                            <label className="inline-flex items-center mr-4">
                              <input
                                type="radio"
                                id="category-sc"
                                name="category"
                                value="sc"
                                checked={formik.values.category === 'sc'}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                className="form-radio text-blue-500 h-4 w-4"
                              />
                              <span className="ml-2">SC</span>
                            </label>
                            <label className="inline-flex items-center mr-4">
                              <input
                                type="radio"
                                id="category-st"
                                name="category"
                                value="st"
                                checked={formik.values.category === 'st'}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                className="form-radio text-blue-500 h-4 w-4"
                              />
                              <span className="ml-2">ST</span>
                            </label>
                           
                           
                          </div>
                          {formik.touched.gender && formik.errors.gender ? (
                            <div className="ml-7 text-xs text-red-300">{formik.errors.gender}</div>
                          ) : null}
                        </div>
                        



                        
                    </div>
                </div>
                <hr/>
                <div className="items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
                    <h2 className="max-w-sm mx-auto md:w-1/3">
                        Personal info
                    </h2>
                    <div className="max-w-sm mx-auto space-y-5 md:w-2/3">
                        <div>
                            <div className=" relative ">
                                <input type="text" id="user-info-name" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Name of Applicant"/>
                                </div>
                            </div>
                            <div>
                            <div className=" relative ">
                                <input type="text" id="use" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Name"/>
                                </div>
                            </div>
                            <div>
                            <div className=" relative ">
                                <input type="text" id="use" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Name"/>
                                </div>
                            </div>
                            <div>
                            <div className=" relative ">
                                <input type="text" id="use" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Name"/>
                                </div>
                            </div>

                            
                            <div>
                                <div className=" relative ">
                                    <input type="text" id="user-info-phone" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Phone number"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr/>
                       
                              
                            <div className="w-full px-4 pb-4 ml-auto text-gray-500 md:w-1/3">
                                <button type="submit" className="py-2 px-4  bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                    Save
                                </button>
                            </div>
                        </div>
                    </form>
                </section>

    <form >
      <label htmlFor="firstName">Name</label>
      <input
       
      />
      

      <label htmlFor="lastName">Last Name</label>
      <input
        id="lastName"
        name="lastName"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.lastName}
      />
      {formik.touched.lastName && formik.errors.lastName ? (
        <div>{formik.errors.lastName}</div>
      ) : null}

      <label htmlFor="email">Email Address</label>
      <input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
      />
      {formik.touched.email && formik.errors.email ? (
        <div>{formik.errors.email}</div>
      ) : null}

      <button type="submit">Submit</button>
    </form>
    </>
  );
};
export default SignupForm