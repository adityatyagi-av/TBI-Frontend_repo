import React from 'react'

const InputFile = ({formik,value,label,placeHolder,formikTouched,formikError,formikChange,formikBlur,formikValue}) => {
  return (
    <div>
      
        <label class="block mb-2 text-sm font-medium text-gray-900" for={value}>{label}{formikTouched && formikError ? (
          <span className=' text-xs text-red-500 mb-.5'>{`(${formikError}*)`}</span>
        ) : null} </label>
        <input 
         type="file"
         id={value}
         name={value}
         onChange={(event) => formik.setFieldValue('resume', event.currentTarget.files[0])}
        onBlur={formikBlur}
        className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 " aria-describedby={value} />
        <p class="mt-1 text-sm text-gray-500" id={value}>PDF or DOCX FILE ONLY (MAX 10MB)</p>
        

    </div>
  )
}

export default InputFile
