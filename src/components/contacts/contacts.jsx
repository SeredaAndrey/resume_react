export const Contacts = ({contacts})=>{
  return(
    <div className="sidebar__title">
      <h3 className="sidebar__title1">Contacts</h3>
      {contacts.map(({name, shotName, title, href})=>{
        return(
          <ContactList
            key={name}
            name={name}
            shotName={shotName}
            title={title}
            href={href}
          />
        )
      })}
    </div>
  )
}
const ContactList = ({ shotName, title, href})=>{
  return(
    <p>
      <span className='cont__type'>{shotName}</span>
      <a className='sidebar__cont' href={href}>{title}</a>
    </p>
  )
}


//

