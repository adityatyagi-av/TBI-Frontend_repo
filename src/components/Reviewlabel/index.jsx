import React from 'react'

const ReviewLabel = ({label,value,formikError,formikValue}) => {
  return (
    <div>
         <label for={value} className="block mb-2 text-sm font-medium text-gray-900 ">{label}
          <span className=' text-xs text-red-500 mb-.5'>* {formikError}</span>
        </label>
        <span className='block mb-2 text-sm text-blue-900'>{formikValue?`${formikValue}`:
        <span className="text-red-600">Nothing Entered</span>
        }</span>
    </div>
  )
}

export default ReviewLabel
