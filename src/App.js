import { useEffect, useState } from "react";
import AdviceSection from "./components/Advice.component"
import ArtsSection from "./components/Art.component"
import UsersSection from "./components/Users.component"
import "./styles.css"

function App() {
  const initialArts = {
    image_id: "",
    title: "",
    artist_title: "",
    subject_titles: [],
  }
  const initialUsers = {
    picture: "",
    name: "",
    gender: "",
    email: "",
  }
  const [art, setArt] = useState([]);
  const [advice, setAdvice] = useState("");
  const [favouriteAdvice, setFavouriteAdvice] = useState([]);
  const [users, setUsers] = useState([]);

  const getMoreAdvice = () =>{
    fetch('https://api.adviceslip.com/advice')
    .then(res => res.json())
    .then(data => setAdvice(data.slip.advice))
    .catch(err => console.error(err))
  }
  const setRetivedData = (data, obj) => {
    const dataUpdates = data.map((element) => {
      const copyObj = Object.assign({}, obj);
      for (const key in copyObj) {
        copyObj[key] = element[key];
      }
      return copyObj;
    })
    return dataUpdates;
  }

  useEffect(() => {
    async function fetchData() {
      try{
        await Promise.allSettled([
          fetch('https://api.adviceslip.com/advice')
            .then(res => res.json())
            .then((data) => {
              console.log('adviceData', data);
              setAdvice(data.slip.advice);
            }),
          fetch('https://api.artic.edu/api/v1/artworks?page=1&limit=50')
            .then(res => res.json())
            .then((data) => {
              const update = setRetivedData(data.data, initialArts);
              console.log('update', update);
              setArt(update);
            }),
          fetch('https://randomuser.me/api/?results=50')
            .then(res => res.json())
            .then((data) => {
              setUsers(setRetivedData(data.results, initialUsers));
            }),
        ])
      }catch(err){
       console.error(err);
      }
      
    }
    fetchData();
  }, []);

  console.log({ 'users': users }, { 'art': art }, { 'advice': advice });

  return (
    <div className="main-layout">
      <ArtsSection art={art} />
      <UsersSection users={users} />
      <AdviceSection
        advice={advice} setAdvice={setAdvice}
        favouriteAdvice={favouriteAdvice} setFavouriteAdvice={setFavouriteAdvice} />
    </div>
  )
}

export default App
