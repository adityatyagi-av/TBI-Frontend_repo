import React from 'react'

const InputRadio = () => {
  return (
    <div className="mb-6">
      
        <div className="flex items-center mb-4">
        <input id="default-radio-1" type="radio" value="" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"/>
            <label for="default-radio-1" className="ml-2 text-sm font-medium text-gray-900 ">Male</label>
        </div>
        <div class="flex items-center">
            <input checked id="default-radio-2" type="radio" value="" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"/>
            <label  className="ml-2 text-sm font-medium text-gray-900">Female</label>
        </div>

    </div>
  )
}

export default InputRadio
