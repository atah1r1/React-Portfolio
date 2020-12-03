import React from 'react';
import html from './images/html.png';
import aws from './images/aws.png';
import c from './images/c.png';
import docker from './images/docker.png';
import git from './images/git.png';
import javascript from './images/javascript.png';
import kubernetes from './images/kubernetes.png';
import network from './images/network.png';
import windows from './images/windows.png';
function Cards(props) {
	
	return (
	<div class="h-40 w-40 relative cursor-pointer mb-5">
		<div class="absolute inset-0 bg-white opacity-25 rounded-lg shadow-2xl"></div>
		<div class="absolute inset-0 transform  hover:scale-75 transition duration-300 p-2">
		<div class="h-full w-full bg-white rounded-lg shadow-2xl">
		<img className="w-full object-contain" alt="home" src={props.img} />
		<h1 className="text-center">ggg</h1>
		</div>
		</div>
	</div>
	)
}

function Competences() {
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
			<Cards img={html}/>
			<Cards img={aws}/>
			<Cards img={c}/>
			<Cards img={docker}/>
			<Cards img={git}/>
			<Cards img={javascript}/>
			<Cards img={kubernetes}/>
			<Cards img={network}/>
			<Cards img={windows}/>
        	</div>
      </div>
    </section>
		</>
		)
}

export default Competences;