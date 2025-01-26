import React from 'react'
import backend from '../../assets/svg/backend.svg';
import frontend from '../../assets/svg/frontend.svg';
import database from '../../assets/svg/database.svg';



const Card = () => {
  return (
    <div className="flex-1 flex flex-row flex-wrap gap-8  px-10 md:px-0 ">
      {/* Card 1 */}
      <div className="bg-gray-800 lg:w-1/4 py-12 px-6 rounded-3xl text-center shadow-lg hover:shadow-xl transition-shadow duration-300 hover:bg-blue-700">
        <img
          src={backend}
          alt="description"
          className=" rounded-full mx-auto border border-blue-400 border-spacing-4 p-4 mb-4 h-20 w-auto"
        />
        <h3 className="text-xl font-semibold">
          Data Analysis Project and Services
        </h3>
        <p className="mt-2 text-gray-200">
          Unlock insights and drive decisions with expert data analysis
          services.
        </p>
      </div>
      {/* Card 2 */}
      <div className="bg-gray-800 lg:w-1/3 py-12 px-6 rounded-3xl text-center shadow-lg hover:shadow-xl transition-shadow duration-300 hover:bg-blue-700">
        <img
          src={frontend}
          alt="description"
          className=" rounded-full mx-auto border border-blue-400 border-spacing-4 p-4 mb-4 h-20 w-auto"
        />
        <h3 className="text-xl font-semibold">
          Techway_consult Data Analysis course N50,000
        </h3>
        <p className="mt-2 text-gray-200">
          Here, you have access to a self-paced program, along with one-on-one
          sessions with instructors at your convenience. You also have access to
          personalized guidance throughout the program for a period of 9weeks
        </p>
      </div>
      {/* Card 3 */}
      <div className="bg-gray-800 lg:w-1/3 py-12 px-6 rounded-3xl text-center shadow-lg hover:shadow-xl transition-shadow duration-300 hover:bg-blue-700">
        <img
          src={database}
          alt="description"
          className=" rounded-full mx-auto border border-blue-400 border-spacing-4 p-4 mb-4 h-20 w-auto"
        />
        <h3 className="text-xl font-semibold">
          One on One Data Analysis course N450,000
        </h3>
        <p className="mt-2 text-gray-200">
          This is a one-on-one class where I will personally guide you through
          the data analysis program for a period of 6weeks, working around your
          schedule. You will have access to my mentorship, and I can also assist
          you with any challenges you may face on personal or work-related
          projects.
        </p>
      </div>
      {/* Card 4 */}
      {/* <div className="bg-gray-800 py-12 px-6 rounded-3xl text-center shadow-lg hover:shadow-xl transition-shadow duration-300 w-full md:max-w-72 hover:bg-blue-700">
        <img
          src={api}
          alt="description"
          className=" rounded-full mx-auto border border-blue-400 border-spacing-4 p-4 mb-4 h-20 w-auto"
        />
        <h3 className="text-xl font-semibold">RESTful API</h3>
        <p className="mt-2 text-gray-200">
          Facilitates communication between frontend and backend using REST
          principles.
        </p>
      </div> */}
    </div>
  );
};

export default Card