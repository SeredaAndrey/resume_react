export const Info = ({name, profesional, description})=>{
  return (
    <div className="about__user">
      <h2 className="about__usertop" id="profesion">{profesional}</h2>
      <h1 className="about__username" id="name">{name}</h1>
      <p className="about__userparagr" id="description">{description}</p>
    </div>
  )
}
