import React, { Component } from "react";
import auth0 from "./auth0.jpg";
class Auth0 extends Component {
  render() {
    return (
      <div className="border-solid border-4 border-sky-500 w-1/2 ml-5 mt-5 box-border rounded-lg p-1.5">
        <div className="flex justify-center items-center">
          <img className="h-48" src={auth0} alt="auth0" />
        </div>
        <div>
          <p className="text-2xl font-bold font-mono ml-5 underline">
            Auth0 Overview
          </p>
          <p className="font-light font-mono ml-5 mt-4 mb-4">
            Auth0 is a flexible, drop-in solution to add authentication and
            authorization services to your applications. Your team and
            organization can avoid the cost, time, and risk that come with
            building your own solution to authenticate and authorize users.
          </p>
          <li className="font-light font-mono ml-5  mb-2">
          Implement Auth0 in any application in just five minutes
          </li>
          <li className="font-light font-mono ml-5  mb-2">
          With a few lines of code you can have Auth0 integrated in any app written in any language, and any framework. We provide 30+ SDKs & Quickstarts to help you succeed on your implementation
          </li>
          <li className="font-light font-mono ml-5  mb-2">
          Fine Grained Authorization that scales with you
          </li>
          <li className="font-light font-mono ml-5  mb-2">
          Auth0 is an easy to implement, adaptable authentication and authorization platform
          </li>
        </div>
      </div>
    );
  }
}
export default Auth0;
