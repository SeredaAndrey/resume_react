export const Educations = ({ education })=>{
  return(
    <div>
      <h3 className="education__style-top">Education</h3>
      <ul className="education__list" >
        {education.map(({idEducations, name, profession, startDurationEdu, endDurationEdu, country, city})=>{
          return(
            <EducationsItem
              key={idEducations}
              name={name}
              profession={profession}
              startDurationEdu={startDurationEdu}
              endDurationEdu={endDurationEdu}
              country={country}
              city={city}
            />
          )
        })}
      </ul>
    </div>
  )
}
const EducationsItem = ({name, profession, startDurationEdu, endDurationEdu, country, city})=>{
  return(
    <li className='education__item'>
      <h4 className='education__name'>{name}</h4>
      <h5 className='education__prof'>{profession}</h5>
      <p className='education__date'>{startDurationEdu}-{endDurationEdu}
      <span className='line'>|</span>
      {country},
      {city}</p>
    </li>
   )
}


