
import Card from './helper/Card'

const Services = () => {
  return (
    <section id="about" className=" bg-gray-900">
      <div className="container flex flex-col-reverse justify-between lg:gap-40 text-white py-14 mx-auto max-w-7xl md:py-20 lg:flex-col-reverse">
        {/* left item */}
        <div>
          <h2 className="text-3xl font-bold text-white text-center pb-14">
            MY SERVICES
          </h2>
          <Card />
        </div>
        {/* right item */}
        {/* <div className="flex flex-col justify-center  md:mt-12  text-center lg:text-left p-7 mb-10 md:mb-0 md:p-0   ">
          <h2 className="text-xl font-bold text-white pb-3">
            ABOUT ME
          </h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            I am a data analyst with half a decade of experience and a
            background in basic medical sciences. I apply my data analysis
            skills to support operations in the medical field, contributing to
            the improvement of healthcare services. My curiosity and love for
            diversity led me to work with Buyinfinite, where I have leveraged
            analytical tools such as Spreadsheets, SQL, Tableau, and Power BI to
            solve business problems and provide meaningful data insights for the
            organization.
          </p>
          <p className="text-gray-300 leading-relaxed mb-6">
            I am passionate about exploring how technology, particularly data
            analysis, can transform the healthcare sector and drive business
            growth. As the founder of Techway_Consult, a data analytics firm, I
            offer various data analysis services and solutions to businesses.
            Additionally, I am committed to using storytelling to simplify
            complex tools, which has enabled me to successfully train over 300
            students within a year, helping them kickstart their careers in data
            analysis.
          </p>
          <button
            onClick={handleDownload}
            className="text-blue-400  px-6 py-2 rounded-3xl hover:bg-blue-400 hover:text-black flex border border-blue-400 mr-4 md:w-[15%] justify-center self-center md:self-start"
          >
            Download CV <FaDownload className="mt-1 ml-2" />
          </button>
        </div> */}
      </div>
    </section>
  );
}

export default Services