const UsersSection=(props)=> {
  const {users} = props;
  
    return (
        <section>
        <h2>Users Section</h2>
        <div className="scroll-container">
          <ul className="users-list">
            {users.map((user,index)=>{
                return(
                  <li key={index} className={`bg-${user.gender==='female' ? 'pink':'blue'}`}>
                  <img
                    src={user.picture['thumbnail']}
                    alt={user.name.first}
                  />
                  <h3>{`${user.name.title} ${user.name.first} ${user.name.last}`}</h3>
                  <p>Email: {user.email}</p>
                </li>
                )
            })}
          </ul>
        </div>
      </section>
      
    )
  }
  
  export default UsersSection
  