import React from 'react'

const ErrorMessage = ({ message }) => {
  return (
    <div className="min-h-[1rem]">
      <p className="text-red-500 text-xs">{message ? message : '' }</p>
    </div>
  )
}

export default ErrorMessage