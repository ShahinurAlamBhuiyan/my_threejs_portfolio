import { technologies } from '../constants'
import { SectionWrapper } from '../hoc'
import { BallCanvas } from './canvas'

// const Tech = () => {
//   return (
//     <div className='flex flex-row flex-wrap justify-center gap-10'>
//       {technologies.map((technology)=> (
//         <div className="w-28 h-28 cursor-pointer" key={technology.name}>
//             <p className="hidden hover:block">{technology.name}</p>
//             <BallCanvas
//               icon={technology.icon}
//             />
//         </div>
//       ))}
//     </div>
//   )
// }

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map(technology => (
        <div
          className='w-28 h-28 relative'
          key={technology.name}
        >
          <BallCanvas icon={technology.icon} />
          <a href={technology.link} target='_blank'>
            <p className='absolute bottom-0 left-0 w-full text-center bg-gray-800 bg-opacity-50 text-white p-1 opacity-0 hover:opacity-100 transition-opacity duration-300'>
              {technology.name}
            </p>
          </a>
        </div>
      ))}
    </div>
  )
}
export default SectionWrapper(Tech, '')