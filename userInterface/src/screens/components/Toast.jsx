import React from 'react'
import { Toast } from "flowbite-react";

export default function CustomToast() {
  return (
    
    <Toast>
      <div className="ml-3 text-sm font-normal">Set yourself free.</div>
      <Toast.Toggle />
    </Toast>
)}
