import backend from '../../assets/svg/backend.svg';
import frontend from '../../assets/svg/frontend.svg';
import database from '../../assets/svg/database.svg';



const Card = () => {
  return (
    <div className="flex flex-wrap gap-6 justify-center px-10 md:px-0">
      {/* Card 1 */}
      <div className="bg-gray-800 w-full md:w-5/12 py-12 px-6 rounded-3xl text-center shadow-lg hover:shadow-xl transition-shadow duration-300 hover:bg-blue-700">
        <img
          src={backend}
          alt="description"
          className="rounded-full mx-auto border border-blue-400 border-spacing-4 p-4 mb-4 h-20 w-auto"
        />
        <h3 className="text-xl font-semibold">
          Data Analysis Project and Services
        </h3>
        <p className="mt-2 text-gray-200">
          Unlock insights and drive decisions with expert data analysis
          services.
        </p>
        {/* <button onClick={() => window.location.href = '#contact'} className="bg-blue-500  px-6 py-4 rounded-lg mt-4">
          Learn More
        </button> */}
      </div>
      {/* Card 2 */}
      <div className="bg-gray-800 w-full md:w-5/12 py-12 px-6 rounded-3xl text-center shadow-lg hover:shadow-xl transition-shadow duration-300 hover:bg-blue-700">
        <img
          src={frontend}
          alt="description"
          className="rounded-full mx-auto border border-blue-400 border-spacing-4 p-4 mb-4 h-20 w-auto"
        />
        <h3 className="text-xl font-semibold">
          Techway_consult Data Analysis course N35,000
        </h3>
        <p className="mt-2 text-gray-200">
          Here, you have access to a self-paced program, along with one-on-one
          sessions with instructors at your convenience. You also have access to
          personalized guidance throughout the program for a period of 9weeks
        </p>
        <a href="https://selar.co/378444" target="_blank" rel="noopener noreferrer" className="bg-blue-500 px-6 py-4 rounded-lg mt-4 inline-block text-white">
          Enroll
        </a>
      </div>
      {/* Card 3 */}
      <div className="bg-gray-800 w-full md:w-5/12 py-12 px-6 rounded-3xl text-center shadow-lg hover:shadow-xl transition-shadow duration-300 hover:bg-blue-700">
        <img
          src={database}
          alt="description"
          className="rounded-full mx-auto border border-blue-400 border-spacing-4 p-4 mb-4 h-20 w-auto"
        />
        <h3 className="text-xl font-semibold">
          One on One Data Analysis course N300,000
        </h3>
        <p className="mt-2 text-gray-200">
          This is a one-on-one class where I will personally guide you through
          the data analysis program for a period of 6weeks, working around your
          schedule. You will have access to my mentorship, and I can also assist
          you with any challenges you may face on personal or work-related
          projects.
        </p>
        <a href="whatsapp://send?phone=2348117749790&text=" target="_blank" rel="noopener noreferrer" className="bg-blue-500 px-6 py-4 rounded-lg mt-4 inline-block text-white">
          Enroll
        </a>
      </div>
      {/* Card 4 */}
      <div className="bg-gray-800 w-full md:w-5/12 py-12 px-6 rounded-3xl text-center shadow-lg hover:shadow-xl transition-shadow duration-300 hover:bg-blue-700">
        <img
          src={frontend}
          alt="description"
          className="rounded-full mx-auto border border-blue-400 border-spacing-4 p-4 mb-4 h-20 w-auto"
        />
        <h3 className="text-xl font-semibold">Join our free Excel Course</h3>
        <p className="mt-2 text-gray-200">
        This program is designed to properly introduce you to data analysis using Microsoft Excel. You&apos;ll learn to work with essential Excel functions, master data cleaning techniques, and apply your skills through a practical assessment to reinforce everything you&apos;ve learned.

        </p>
        <a href="https://api.whatsapp.com/send?phone=8117749790&text=Am%20here%20for%20the%20free%20excel%20course%20" target="_blank" rel="noopener noreferrer" className="bg-blue-500 px-6 py-4 rounded-lg mt-4 inline-block text-white">
          Enroll
        </a>
      </div>
    </div>
  );
};

export default Card