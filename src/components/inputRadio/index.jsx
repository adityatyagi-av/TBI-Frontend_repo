import React from 'react'

const InputRadio = ({value,label,options,formikTouched,formikError,formikChange,formikBlur}) => {
  
  return (
    <div className="mb-6">

          <label for={value} className="block mb-2 text-sm font-medium text-gray-900 ">{label} {formikTouched && formikError ? (
          <span className=' text-xs text-red-500 mb-.5'>{`(${formikError}*)`}</span>
           ) : null}</label>
           <div className='flex gap-4'>
      {options.map((option,index)=>{
        return(
          <div className="flex items-center mb-4" key={index}>
        <input type="radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
        id={`${value}-${option}`}
        name={value}
        value={option}
       onChange={formikChange}
       onBlur={formikBlur}/>
        <label for="default-radio-1" className="ml-2 text-sm font-medium text-gray-900 ">{option}</label>
        </div>
        
        )
      })}
      </div>

    </div>
  )
}

export default InputRadio
