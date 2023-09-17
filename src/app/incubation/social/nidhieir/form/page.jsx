"use client"
import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { ProgressBar, Step } from 'react-step-progress-bar';
import 'react-step-progress-bar/styles.css';

const SignupForm = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    { label: 'Qualifications', validator: validateStep1 },
    // { label: 'Qualifications', validator: validateStep2 },
    { label: 'Additional Information', validator: validateStep2 },
  ];

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      dateOfBirth: '',
      gender: '',
      category: '',
      address: '',
      education: '',
      experience: '',
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
      dateOfBirth: Yup.date()
        .max(new Date(), 'Date of birth cannot be in the future')
        .required('Required')
        .test('is-old-enough', 'Must be at least 15 years old', function (value) {
          const minDate = new Date();
          minDate.setFullYear(minDate.getFullYear() - 15);
          return Yup.date().max(minDate).isValidSync(value);
        }),
      gender: Yup.string().required('Required'),
      category: Yup.string().required('Required'),
      address: Yup.string().required('Required'),
      education: Yup.string().required('Required'),
      experience: Yup.string().required('Required'),
    }),
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  

  function validateStep1() {
    return (
      formik.validateField('name') && 
      formik.validateField('email')&&
      formik.validateField('dateOfBirth') &&
      formik.validateField('gender') &&
      formik.validateField('category') &&
      formik.validateField('address')
    );
  }

  function validateStep2() {
    return formik.validateField('education') 
    && formik.validateField('experience');
  }

  const handleStepChange = () => {
    const currentStepIsValid = steps[currentStep].validator();

    if (currentStepIsValid) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleStepBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div>
      <ProgressBar
        percent={(currentStep / (steps.length - 1)) * 100}
        filledBackground="linear-gradient(to right, blue, dark-blue)"
        height={15}
      />
      <div>
        <h2>{steps[currentStep].label}</h2>
        <form onSubmit={formik.handleSubmit}>
          
          {currentStep === 1 && (
            <>
            <div>
            <label htmlFor="name">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
            />
            {formik.touched.name && formik.errors.name ? (
              <div>{formik.errors.name}</div>
            ) : null}
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? (
              <div>{formik.errors.email}</div>
            ) : null}
          
                <label htmlFor="dateOfBirth">Date of Birth</label>
                <input
                  id="dateOfBirth"
                  name="dateOfBirth"
                  type="date"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.dateOfBirth}
                />
                {formik.touched.dateOfBirth && formik.errors.dateOfBirth ? (
                  <div>{formik.errors.dateOfBirth}</div>
                ) : null}
              </div>
              <div>
                <label htmlFor="gender">Gender</label>
                <div>
                  <label>
                    <input
                      type="radio"
                      id="gender-male"
                      name="gender"
                      value="male"
                      checked={formik.values.gender === 'male'}
                      onChange={formik.handleChange}
                    />
                    Male
                  </label>
                  <label>
                    <input
                      type="radio"
                      id="gender-female"
                      name="gender"
                      value="female"
                      checked={formik.values.gender === 'female'}
                      onChange={formik.handleChange}
                    />
                    Female
                  </label>
                  <label>
                    <input
                      type="radio"
                      id="gender-other"
                      name="gender"
                      value="other"
                      checked={formik.values.gender === 'other'}
                      onChange={formik.handleChange}
                    />
                    Other
                  </label>
                </div>
                {formik.touched.gender && formik.errors.gender ? (
                  <div>{formik.errors.gender}</div>
                ) : null}
              </div>
              <div>
                <label htmlFor="category">Category</label>
                <div>
                  <label>
                    <input
                      type="radio"
                      id="category-general"
                      name="category"
                      value="general"
                      checked={formik.values.category === 'general'}
                      onChange={formik.handleChange}
                    />
                    General
                  </label>
                  <label>
                    <input
                      type="radio"
                      id="category-obc"
                      name="category"
                      value="obc"
                      checked={formik.values.category === 'obc'}
                      onChange={formik.handleChange}
                    />
                    OBC
                  </label>
                  <label>
                    <input
                      type="radio"
                      id="category-sc"
                      name="category"
                      value="sc"
                      checked={formik.values.category === 'sc'}
                      onChange={formik.handleChange}
                    />
                    SC
                  </label>
                  <label>
                    <input
                      type="radio"
                      id="category-st"
                      name="category"
                      value="st"
                      checked={formik.values.category === 'st'}
                      onChange={formik.handleChange}
                    />
                    ST
                  </label>
                </div>
                {formik.touched.category && formik.errors.category ? (
                  <div>{formik.errors.category}</div>
                ) : null}
              </div>
              <div>
                <label htmlFor="address">Postal Address</label>
                <textarea
                  id="address"
                  name="address"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.address}
                />
                {formik.touched.address && formik.errors.address ? (
                  <div>{formik.errors.address}</div>
                ) : null}
                </div>                
            </>
          )}

          {currentStep === 2 && (
            <>
              <div>
                <label htmlFor="education">Educational Qualifications</label>
                <textarea
                  id="education"
                  name="education"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.education}
                />
                {formik.touched.education && formik.errors.education ? (
                  <div>{formik.errors.education}</div>
                ) : null}
              </div>
              <div>
                <label htmlFor="experience">
                  Experiences (Entrepreneurship, Leadership, etc.)
                </label>
                <textarea
                  id="experience"
                  name="experience"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.experience}
                />
                {formik.touched.experience && formik.errors.experience ? (
                  <div>{formik.errors.experience}</div>
                ) : null}
              </div>
              <div>
                <label htmlFor="resume">
                  Resume (PDF or DOCX, max 10MB)
                </label>
                <input
                  type="file"
                  id="resume"
                  name="resume"
                  accept=".pdf,.docx"
                  onChange={(event) => {
                    formik.setFieldValue('resume', event.currentTarget.files[0]);
                  }}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.resume && formik.errors.resume ? (
                  <div>{formik.errors.resume}</div>
                ) : null}
              </div>
            </>
          )}

          <div>
            <button
              type="button"
              onClick={handleStepBack}
              disabled={currentStep === 0}
            >
              Back
            </button>
            <button
              type="button"
              onClick={handleStepChange}
             
            >
              Next
            </button>
            {currentStep === steps.length - 1 && (
              <button type="submit">Submit</button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;
