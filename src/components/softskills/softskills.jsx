export const Softskils = ({softskils})=>{
  console.log(softskils)
  return(
    <div className="sidebar__title">
    <h3 className="sidebar__title1">Soft Skills</h3>
    <ul className="sidebar__title2" >
      {softskils.map(({id, name})=>{
        return(
          <SoftskilsItem
            key={id}
            name={name}
          />
        )
      })}
    </ul>
    </div>
  )
}
const SoftskilsItem = ({name})=>{
  return(
    <li><span className='text__list'>{name}</span></li>
  )
}


