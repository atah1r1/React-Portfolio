import React from 'react';
import { PathEducation, PathClasses } from './paths_svg/paths';

function Education() {
	return (
		<section className="bg-white border-b py-8">
      <div className="container max-w-5xl mx-auto m-8">
        <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800" id="education">
          Education
        </h1>
        <div className="w-full mb-4">
          <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
        </div>
        <div className="flex flex-wrap">
          <div className="w-5/6 sm:w-1/2 p-6">
            <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
              Now : 1337 Student
            </h3>
            <p className="text-gray-600 mb-8">
            1337 it's Coding school, Created and sponsored by OCP SA, 1337 is the first to provide IT training in Morocco, completely free of charge, open and accessible to anyone between the ages of 18 and 30. No need for an IT degree, or of having undergone extensive IT training. The only criteria for admission in Treize, Trente-Sept is CREATIVITY.
              <br />
              <br />
            </p>
          </div>
          <div className="w-full sm:w-1/2 p-6">
            <svg className="w-full sm:h-64 mx-auto" viewBox="0 0 1177 598.5" xmlns="http://www.w3.org/2000/svg">
              <title>education 1</title>
              <PathEducation />
            </svg>
          </div>
        </div>
        <div className="flex flex-wrap flex-col-reverse sm:flex-row">
          <div className="w-full sm:w-1/2 p-6 mt-6">
            <svg className="w-5/6 sm:h-64 mx-auto" viewBox="0 0 1176.60617 873.97852" xmlns="http://www.w3.org/2000/svg">
              <title>education 2</title>
                <PathClasses />
            </svg>
          </div>
          <div className="w-full sm:w-1/2 p-6 mt-6">
            <div className="align-middle">
              <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
              2017 - 2019 : Network Administrator
              </h3>
              <p className="text-gray-600 mb-8">
                Diploma on administration of systems & networks
                <br />
                <br />
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
	)
}

export default Education;