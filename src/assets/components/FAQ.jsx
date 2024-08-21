import React from "react";
import {
  IoDocumentAttachSharp,
  IoTime,
  IoWarningOutline,
  IoCall,
} from "react-icons/io5";
import { TbLocationQuestion } from "react-icons/tb";
import { FaPersonCircleQuestion } from "react-icons/fa6";

export default function FAQ({ icon, question, answer }) {
  return (
    // Icon Section
    <div className="bg-white p-8 rounded-lg shadow-xl flex flex-col items-start">
      {icon}
      {/* Question Section */}
      <h3 className="font-semibold mb-2 text-base">{question}</h3>
      {/* Answer Section */}
      <p className="text-gray-600 mb-4 text-sm">{answer}</p>
    </div>
  );
}
