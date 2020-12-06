import React from 'react';
import {PathProject} from './paths_svg/paths';
import Crud from './images/crud.png';
import Covid from './images/covid.png';
import Potfolio from './images/portfolio.png';

function ProjectCard({name, description, img, languages, github}) {
  const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
}
	return (
		<>
			       
          <div class="p-4 md:w-1/3 md:mb-0 mb-6 flex flex-col max-w-sm mx-auto">
  <div class="bg-gray-300 h-2/6 w-full rounded-lg shadow-md bg-cover bg-center"><img alt="images" className="h-w_full w-full justify-center" src={img}></img></div>

            <div class=" w-70 bg-white -mt-10 shadow-lg rounded-lg overflow-hidden p-5">
              
              <div class="header-content inline-flex">
                <div class="category-badge flex-1  h-4 w-4 m rounded-full m-1 bg-purple-100">
                  <div class="h-2 w-2 rounded-full m-1 bg-green-500 " ></div>
                </div>
                <div class="category-title flex-3 text-sm"> {languages}</div>
              </div>
              <div class="title-post font-bold">{name}</div>

              <div class="summary-post text-base text-justify">{description}
  <button onClick={() => openInNewTab(github)} class=" text-black-500 mt-4 block rounded p-2 text-sm "><svg class="fill-current w-10 h-10 mr-2" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24"><PathProject /></svg></button>
              </div>
             
            </div>
          </div>
		</>
	);
}

function Projects() {
  const Project = {
    name: ["CRUD APP", "Coronavirus Web App", "Portfolio"],
    decription: ["I developed a CRUD application ( Create - Read - Update -Delete ), with react js and Skeleton: Responsive CSS Boilerplate, as a backend, I used feathers JS and NeDb as a NoSQL Database to manage REST API requests .",
    "Track the spread of the Coronavirus COVID-19 epidemic in Morocco, browse an interactive map, view fatality rate, and recoveries, check affected regions in real-time. Check out the web app on Github .",
    "Potfolio made with react Potfolio made with react Potfolio made with react Potfolio made with react Potfolio made with react Potfolio made with react Potfolio made with react Potfolio made with react Potfolio made with react ."],
    image: [Crud, Covid, Potfolio],
    languages : ["ReactJs && Skeleton && feathers JS", "ReactJs && API", "ReactJs && Tailwind CSS"],
    github: ["https://github.com/atah1r1/ReactApp", "https://github.com/atah1r1/corona", "https://github.com/atah1r1/React-Portfolio"]
  }
	return (
		<>
				<section className="bg-white border-b py-8">
      <div className="container max-w-5xl mx-auto m-8">
        <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800" id="projects">
		Projects
        </h1>
        <div className="w-full mb-4">
        <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
          {/* ////////////////////////////////// */}
		  <section class="blog text-gray-700 body-font">
      <div class="container px-5 py-24 mx-auto">
	  		<div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
			{Project.name.map((e, i) => <ProjectCard key={i} name={e} description={Project.decription[i]} img={Project.image[i]} languages={Project.languages[i]} github={Project.github[i]} />)}
		</div>
      </div>
    </section>
          {/* ////////////////////////////////// */}
        </div>
      </div>
    </section>
		</>
	);
}

export default Projects;