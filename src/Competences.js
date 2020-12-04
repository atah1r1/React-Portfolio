import React, { useState } from 'react';
import Modal from './Modal';
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


function Cards({img, name}) {
	const [stateHere, setStateHere] = useState(false);
	const handleClick = () => {
		console.log("clicked");
		setStateHere(true);
	}
	return (
		<>
	<div className="h-40 w-40 relative cursor-pointer mb-2" onClick={handleClick}>
			<div className="absolute inset-0 bg-white opacity-25 rounded-lg shadow-2xl"></div>
			<div className="absolute inset-0 transform  hover:scale-75 transition duration-300 p-2">
			<div className="h-full w-full bg-white rounded-lg shadow-1xl">
			<img className="w-full object-contain sm:h-24" alt="home" src={img} />
				<h1 className="text-center font-bold text-gray-800">{name}</h1>
			</div>
			</div>
		</div>
		{stateHere ? <Modal name={name} state={stateHere}/> : null}
		</>
	)
}

function Competences() {
	const [cardName, setCardName] = useState(
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
		image: [html, aws, c, docker, git, javascript, kubernetes, network, windows, reactjs, bug, node]
	})

	return (
		<>
	<section className="bg-white border-b py-8">
      <div className="container max-w-5xl mx-auto m-8">
        <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
		Competences
        </h1>
        <div className="w-full mb-4">
          <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
        </div>
		 <div className="flex flex-wrap">

			{cardName.name.map((e, i) => <Cards key={i} img={cardName.image[i]} name={e}/>)}
        	</div>
      </div>
    </section>
		</>
		)
}

export default Competences;