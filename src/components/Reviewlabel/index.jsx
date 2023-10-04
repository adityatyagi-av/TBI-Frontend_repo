import React from 'react'

const ReviewLabel = ({serialNumber,label,value,formikError,formikValue}) => {
  return (
    <div>
         <label for={value} className="block mb-1 text-sm font-medium text-gray-900 ">{serialNumber}. {label}
          <span className=' text-xs text-red-500 mb-.5'>* {formikError}</span>
        </label>
        <span className='block mb-4 text-sm text-blue-900'>{formikValue?`${formikValue}`:
        <span className="text-red-400">Unspecified</span>
        }</span>
    </div>
  )
}

export default ReviewLabel
