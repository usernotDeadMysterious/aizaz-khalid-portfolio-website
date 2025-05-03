import React from 'react'

function ProjectsSection() {
  return (
    <div 
    id='projects'
    className="p-8 pt-0 space-y-3 w-full">
        <h2 
        
        className="text-2xl font-bold text-gray-800">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {/* FYP - Real Estate Platform */}
    <div className="rounded-lg border border-gray-300 dark:bg-gray-100/10 shadow-md p-4">
      <img
        src="/fyp.png"
        alt="Real Estate Platform "
        className="rounded-md mb-3 w-full h-40 object-cover"
      />
      <h3 className="text-xl font-semibold text-red-600">Real Estate Platform (FYP)</h3>
      <p className=" text-sm mt-1">
        A full-featured property listing platform built with Next.js, Tailwind, and Supabase.
        Includes advance filtering, authentication, map integration and responsive UI.
      </p>
      <div className="flex gap-3 mt-3">
        <a
          href="https://real-estate-project-one-coral.vercel.app/"
          target="_blank"
          rel='noopener noreferrer'
          className="px-3 py-1 text-sm bg-red-500 text-white rounded hover:bg-red-600"
        >
          Live Demo
        </a>
        <a
          href="https://github.com/usernotDeadMysterious/Real-Estate-Platform"
          target="_blank"
          rel='noopener noreferrer'
          className="px-3 py-1 text-sm border border-red-500 text-red-600 rounded hover:bg-green-100"
        >
          GitHub Repo
        </a>
      </div>
    </div>

    {/* Example Project 2 */}
    <div className="rounded-lg border border-gray-300 dark:bg-gray-100/10  shadow-md p-4">
      <img
        src="/portfolio.png"
        alt="Portfolio Website"
        className="rounded-md mb-3 w-full h-40 object-cover"
      />
      <h3 className="text-xl font-semibold text-blue-600">Personal Portfolio Website</h3>
      <p className=" text-sm mt-1">
        A sleek portfolio site built using React and Tailwind CSS, featuring dark mode, animated sections, and a contact form.
      </p>
      <div className="flex gap-3 mt-3">
        <a
          href="https://aizaz-portfolio.com"
          target="_blank"
          rel='noopener noreferrer'
          className="px-3 py-1 text-sm bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Live Demo
        </a>
        <a 
         
          href="https://github.com/username/portfolio-site"
          target="_blank"
          rel='noopener noreferrer'
          className="px-3 py-1 border border-blue-500 text-blue-600 rounded hover:bg-blue-100"
        >
          GitHub Repo
        </a>
      </div>
    </div>


   {/* Example Project 3  */}
    
    {/* <div className="rounded-lg border border-gray-300 bg-white shadow-md p-4">
      <img
        src="/images/chat-app.png"
        alt="Chat App"
        className="rounded-md mb-3 w-full h-40 object-cover"
      />
      <h3 className="text-xl font-semibold text-purple-600">Real-Time Chat App</h3>
      <p className="text-gray-700 text-sm mt-1">
        A Firebase-based real-time chat app with user auth and private channels using React and Firestore.
      </p>
      <div className="flex gap-3 mt-3">
        <a
          href="https://chat-app-demo.com"
          target="_blank"
          rel='noopener noreferrer'
          className="px-3 py-1 text-sm bg-purple-500 text-white rounded hover:bg-purple-600"
        >
          Live Demo
        </a>
        <a
          href="https://github.com/username/chat-app"
          target="_blank"
          rel='noopener noreferrer'
          className="px-3 py-1 border border-purple-500 text-purple-600 rounded hover:bg-purple-100"
        >
          GitHub Repo
        </a>
      </div>
    </div> */}

    {/* Placeholder Card for Upcoming Projects */}
<div className="rounded-lg border border-dashed border-gray-300 bg-gray-50/10 shadow-inner p-4 flex flex-col items-center justify-center text-center">
  <img
    src="coming-soon2.png" // Replace with your own placeholder or use a generic icon
    alt="Coming Soon"
    className="rounded-md mb-3 w-20 h-20 object-cover opacity-60"
  />
  <h3 className="text-xl font-semibold text-gray-500">More Projects Coming Soon</h3>
  <p className="text-gray-600 text-sm mt-1">
    I'm currently working on more awesome projects. Stay tuned!
  </p>
  <div className="flex gap-3 mt-3">
    <button
      disabled
      className="px-3 py-1 text-sm bg-gray-300 text-white rounded cursor-not-allowed"
    >
      Live Demo
    </button>
    <button
      disabled
      className="px-3 py-1 border border-gray-300 text-gray-500 rounded cursor-not-allowed"
    >
      GitHub Repo
    </button>
  </div>
</div>



  </div>
    </div>
  )
}

export default ProjectsSection
