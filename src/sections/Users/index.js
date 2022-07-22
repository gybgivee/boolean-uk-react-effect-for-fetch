import { useEffect, useState } from "react"

function UsersSection() {
  /*
  const initialUsers={
    imageId:"",
    name:"",
    gender:"",
    email:"",
  }
  const [users, setUsers] = useState(initialUsers);

  const setRetivedData = (data)=>{
    const usersCollections = data.results.map((element=>{
      return {
        imageId:element.picture.medium,
        name:element.name.first,
        gender:element.gender,
        email:element.email,
      }
    }))
    return usersCollections;

  }
  useEffect(() => {
    fetch('https://randomuser.me/api/?results=100')
      .then((res) => res.json())
      .then((data) => {
        console.log('data',data.data);
      const usersCollections = setRetivedData(data);
      setUsers(usersCollections);
      console.log('users collection',users);
        
      }).catch((err) => { console.log('Error fetch', err); });

  }, [])*/
  return (
    <section>
      <h2>Users Section</h2>
      <div className="scroll-container"></div>
    </section>
  )
}

export default UsersSection
