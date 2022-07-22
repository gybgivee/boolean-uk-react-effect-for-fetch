import { useEffect, useState } from "react";
import AdviceSection from "./sections/Advice"
import ArtsSection from "./sections/Art"
import UsersSection from "./sections/Users"
import "./styles.css"

function App() {
  const namesonly = ['two', 'three'];

  const initialAdvices = {
    single: {},
    multiple: []
  }
  const [advice, setAdvice] = useState(initialAdvices);
  const initialArts = {
    image_id: "",
    title: "",
    artist_title: "",
    theme_titles: [],
  }
  const [art, setArt] = useState(initialArts);
  const initialUsers = {
    picture: "",
    name: "",
    gender: "",
    email: "",
  }
  const [users, setUsers] = useState(initialUsers);
  const setRetivedData = (data, state) => {
    console.log('data',state,data);
    const dataUpdates = data.map((element => {
      Object.keys(state).forEach(key => {
       
        state[key] = element[key];
      });
      return state;
    }))
    return dataUpdates;

  }
  const urls =
    ['https://api.adviceslip.com/advice',
      'https://api.artic.edu/api/v1/artworks',
      'https://randomuser.me/api/?results=50'
    ];
  useEffect(() => {
    Promise.all(
      urls.map((url, index) => fetch(url)
        .then(response => response.json())
        .then(data => {
          console.log('data '+index,data);
          switch (index) {
            case 0: setAdvice(initialAdvices['single']=data);
              break;
            case 1: setArt(setRetivedData(data.data,initialArts));
              break;
            case 3: setUsers(setRetivedData(data.results,initialUsers));
          }
        })))
      .catch(err => {
        console.error('Failed to fetch one or more of these URLs:');
        console.log(urls);
        console.error(err);
      });

  }, []);
   console.log({'users': users},{'art':art},{'advice':advice});
   
  return (
    <div className="main-layout">
      <ArtsSection />
      <UsersSection />
      <AdviceSection />
    </div>
  )
}

export default App
