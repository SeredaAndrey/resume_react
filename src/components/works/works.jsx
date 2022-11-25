export const Works = ({experienceWork})=>{
  return(
    <div className="experience__work-container">
      <h3 className="experience__style-top">Work Experience</h3>
      <ol className="experiance__stile-worklist" >
        {experienceWork.map(({idWork, nameCompany, position, startDurationWork, endDurationWork, city, country, responsibilities})=>{
          return(
            <WorkItem
              key={idWork}
              nameCompany={nameCompany}
              position={position}
              startDurationWork={startDurationWork}
              endDurationWork={endDurationWork}
              city={city}
              country={country}
              responsibilities={responsibilities}
            />
          )
        })}
      </ol>
    </div>
  )
}

const WorkItem = ({position, nameCompany, startDurationWork, endDurationWork, city, country, responsibilities})=>{
  return(
    <li className='experiance__stile-container'>
      <h4 className='experience__style-listtop'>{position}<span class='name__comp'>{nameCompany}</span></h4>
      <p className='experience__date'>{startDurationWork}-{endDurationWork}
      <span className='line'>|</span>{city}, {country}</p>
      <ul className='experience__style-list'>
        {responsibilities.map(({id, name})=>{
        return (
          <ResponsibilitiesItem
            key={id}
            name={name}/>
        )})}
      </ul>
    </li>
  )
}
const ResponsibilitiesItem = ({name})=>{
  return(
    <li>{name}</li>
  )
}
