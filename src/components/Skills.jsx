import r from '../assets/svg/r.svg'
import sql from '../assets/svg/sql.svg'
import excel from '../assets/svg/excel.svg'
import powerbi from '../assets/svg/powerbi.svg'
import tableau from '../assets/svg/tableau.svg'

const Skills = () => {
  return (
    <section id="skills" className="bg-gray-900">
      <div className="py-20">
        <h2 className="text-xl font-bold text-white text-center pb-14">
          MY SKILLS
        </h2>
        <div className="flex flex-wrap justify-center gap-5 md:gap-x-32 md:gap-y-14 md:px-32">
          <div>
            <img
              src={excel}
              alt="excel"
              className="p-8 rounded-md bg-gray-800 h-28 hover:bg-blue-700"
            />
            <h3 className="text-white text-center pt-2">Excel</h3>
          </div>
          <div>
            <img
              src={sql}
              alt="sql"
              className="p-8 rounded-md bg-gray-800 h-28 hover:bg-blue-700"
            />
            <h3 className="text-white text-center pt-2">SQL</h3>
          </div>
          <div>
            <img
              src={tableau}
              alt="tableau"
              className="p-8 rounded-md bg-gray-800 h-28 hover:bg-blue-700"
            />
            <h3 className="text-white text-center pt-2">Tableau</h3>
          </div>
          <div>
            <img
              src={powerbi}
              alt="powerbi"
              className="p-8 rounded-md bg-gray-800 h-28 hover:bg-blue-700"
            />
            <h3 className="text-white text-center pt-2">Power BI</h3>
          </div>
          <div>
            <img
              src={r}
              alt="r"
              className="p-8 rounded-md bg-gray-800 h-28 hover:bg-blue-700"
            />
            <h3 className="text-white text-center pt-2">R Language</h3>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills