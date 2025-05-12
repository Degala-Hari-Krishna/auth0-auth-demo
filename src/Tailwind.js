import React, { Component } from "react";
import tailwind from "./tailwind.png";
class Tailwind extends Component {
  render() {
    return (
      <div className="border-solid border-4 border-sky-500 w-1/2 box-border mr-5 ml-5 mt-5 rounded-lg p-1.5">
        <div className="flex justify-center items-center">
          <img className="h-48" src={tailwind} alt="tailwind" />
        </div>
        <div>
          <p className="text-2xl font-bold font-mono ml-5 underline">
            Tailwind CSS Overview
          </p>
          <p className="font-light font-mono ml-5 mt-4 mb-4">
            Tailwind CSS is an open-source CSS framework. The main feature of
            this library is that, unlike other CSS frameworks like Bootstrap, it
            does not provide a series of predefined classes for elements such as
            buttons or tables.
          </p>
          <p className="text-xl font-bold font-mono ml-5 underline">
            Advantages of Using Tailwind Over Other CSS Libraries
          </p>
          <li className="font-light font-mono ml-5  mb-2">
            Highly Customizable
          </li>
          <li className="font-light font-mono ml-5  mb-2">Low Specificity</li>
          <li className="font-light font-mono ml-5  mb-2">Responsive Design</li>
          <li className="font-light font-mono ml-5  mb-2">Performance</li>
          <li className="font-light font-mono ml-5  mb-2">
            Developer Experience
          </li>
          <li className="font-light font-mono ml-5  mb-2">
            Community and Ecosystem
          </li>
        </div>
      </div>
    );
  }
}
export default Tailwind;
