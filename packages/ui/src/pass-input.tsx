"use client"

import { useState } from "react";

export const PassInput = ({ onChange, ...props  } : any) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="max-w-sm">
      <label className="block text-sm mb-2 text-gray-700">Password</label>
      <div className="relative">
        <input
          id="hs-toggle-password"
          type={showPassword ? 'text' : 'password'}
          className="bg-gray-50 border border-gray-300 py-3 ps-4 pe-10 block w-full border-gray-300 text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
          placeholder="Enter password"
          onChange={(e) => onChange(e)} {...props}
        />
        <button
          type="button"
          onClick={handleTogglePassword}
          className="absolute inset-y-0 end-0 flex items-center z-20 px-3 cursor-pointer text-gray-700 rounded-e-md focus:outline-none focus:text-blue-600"
        >
          <svg
            className={`shrink-0 size-3.5 ${showPassword ? 'hs-password-active' : ''}`}
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path
              className={showPassword ? 'hidden' : ''}
              d="M9.88 9.88a3 3 0 1 0 4.24 4.24"
            ></path>
            <path
              className={showPassword ? 'hidden' : ''}
              d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"
            ></path>
            <path
              className={showPassword ? 'hidden' : ''}
              d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"
            ></path>
            <line
              className={showPassword ? 'hidden' : ''}
              x1="2"
              x2="22"
              y1="2"
              y2="22"
            ></line>
            <path
              className={showPassword ? '' : 'hidden'}
              d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"
            ></path>
            <circle
              className={showPassword ? '' : 'hidden'}
              cx="12"
              cy="12"
              r="3"
            ></circle>
          </svg>
        </button>
      </div>
    </div>
  );
};