import React, { useState } from 'react';
import html from './images/html.png';
import aws from './images/aws.png';
import c from './images/c.png';
import docker from './images/docker.png';
import git from './images/git.png';
import javascript from './images/javascript.png';
import kubernetes from './images/kubernetes.png';
import network from './images/network.png';
import windows from './images/windows.png';
import reactjs from './images/react.png';
import bug from './images/bug.png';
import node from './images/node.png';

function Cards({img, name, description}) {
	const [stateHere, setStateHere] = useState(false);
	return (
		<>
		{stateHere ? (
			<>
<div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            onClick={() => setStateHere(false)}
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t">
                  <h3 className="text-3xl font-semibold text-black">
                    {name}
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setStateHere(false)}
                  >
                    <span className="text-black">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <p className="my-4 text-gray-600 text-lg leading-relaxed">
                    {description}
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-gray-300 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    style={{ transition: "all .15s ease" }}
                    onClick={() => setStateHere(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
	  ) : null}
	<div className="h-40 w-40 relative cursor-pointer mb-2" onClick={() => setStateHere(true)}>
			<div className="absolute inset-0 bg-white opacity-25 rounded-lg shadow-2xl"></div>
			<div className="absolute inset-0 transform  hover:scale-75 transition duration-300 p-2">
			<div className="h-full w-full bg-white rounded-lg shadow-1xl">
			<img className="w-full object-contain sm:h-24" alt="home" src={img} />
				<h1 className="text-center font-bold text-gray-800">{name}</h1>
			</div>
			</div>
		</div>
		</>
	)
}

function Competences() {
	const cardName =
	{
		name: [	"Html && css",
				"AWS cloud ",
				"C programming",
				"Docker",
				"Git Repositories",
				"Javascript",
				"Kubernetes",
				"Networking",
				"Windows",
				"React Js",
				"Security Researcher",
				"Node Js" ],
    image: [html, aws, c, docker, git, javascript, kubernetes, network, windows, reactjs, bug, node],
    description : [ "HTML (the Hypertext Markup Language) and CSS (Cascading Style Sheets) are two of the core technologies for building Web pages. HTML provides the structure of the page, CSS the (visual and aural) layout, for a variety of devices",
                    "The AWS Cloud Management Tools (CMT) Competency helps customers identify solutions that enable their cloud strategy by delivering operations and governance best practices. IT organizations balance delivering the benefits of a cloud strategy—agility, scale, resiliency, and cost savings—while maintaining governance, compliance, and efficient use of resources. AWS CMT Partners have proven customer success in delivering solutions that support all three.",
                    "C is a general-purpose, procedural computer programming language supporting structured programming, lexical variable scope, and recursion, with a static type system. By design, C provides constructs that map efficiently to typical machine instructions.",
                    "Docker is a set of the platform as service products that use OS-level virtualization to deliver software in packages called containers. Containers are isolated from one another and bundle their own software, libraries, and configuration files; they can communicate with each other through well-defined channels. ",
                    "Git is a free and open-source distributed version control system designed to handle everything from small to very large projects with speed and efficiency. Git is easy to learn and has a tiny footprint with lightning-fast performance.",
                    "JavaScript, often abbreviated as JS, is a programming language that conforms to the ECMAScript specification. JavaScript is high-level, often just-in-time compiled, and multi-paradigm. It has curly-bracket syntax, dynamic typing, prototype-based object-orientation, and first-class functions. ",
                    "Kubernetes is an open-source container-orchestration system for automating computer application deployment, scaling, and management. It was originally designed by Google and is now maintained by the Cloud Native Computing Foundation. ",
                    "Maintaining computer infrastructures with emphasis on networking.",
                    "Active Directory is a directory service developed by Microsoft for Windows domain networks. It is included in most Windows Server operating systems as a set of processes and services. Initially, Active Directory was only in charge of centralized domain management.",
                    "React is an open-source, front end, JavaScript library for building user interfaces or UI components. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications.",
                    "Security researchers take apart malware to see what vulnerabilities the malicious software is exploiting and glean intelligence out of the malware – how it communicates and how it is structured. They use that information to track adversaries and groups by the attack methods they have deployed.",
                    "Node.js is an open-source, cross-platform, back-end, JavaScript runtime environment that executes JavaScript code outside a web browser."]
	}
	return (
		<>
	<section className="bg-white border-b py-8">
      <div className="container max-w-5xl mx-auto m-8">
        <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800" id="competences">
		Competences
        </h1>
        <div className="w-full mb-4">
          <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
        </div>
		 <div className="flex flex-wrap">
			{cardName.name.map((e, i) => <Cards key={i} img={cardName.image[i]} name={e} description={cardName.description[i]} />)}
        	</div>
      </div>
    </section>
		</>
		)
}

export default Competences;