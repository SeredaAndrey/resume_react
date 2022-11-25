export const Project = ({experienceProject}) => {
  return(
    <div className="experience">
      <h3 className="experience__style-top">Projects</h3>
      <ol className="experience__style-list" >
        {experienceProject.map(({idProject, name, tech, link})=>{
          return(
            <ProjectItem
              key = {idProject}
              name = {name}
              tech = {tech}
              link = {link}
            />
          )
        })}
      </ol>
    </div>
  )
};

const ProjectItem = ({name, tech, link}) => {
  return(
    <li>
      <span className='experience__list'>
        <a className='project__linc' href={link}>{name}
          <div className='experience__container'>
            <span className='bracket'>[ </span>
            {tech.map(({ id, name })=>{
              return(
                <TechItem
                  key={id}
                  name={name}/>
              )
            })}
            <span className='bracket'>]</span>
          </div>
        </a>
      </span>
    </li>
  )
};
const TechItem =({name})=>{
  return(
    <span>{name}</span>
  )
}
