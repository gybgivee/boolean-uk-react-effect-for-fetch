import { useEffect, useState } from "react"

function ArtsSection() {
  /*
  const initialArts ={
    imageId:"",
    title:"",
    artist:"",
    subject_titles:[],
  }
  const [art, setArt] = useState(initialArts);

  const setRetivedData = (data)=>{
    const artCollections = data.data.map((element=>{
      return {
        imageId:element.image_id,
        title:element.title,
        artist:element.artist_title,
        subject_titles:element.theme_titles,
      }
    }))
    return artCollections;

  }
  useEffect(() => {
    fetch('https://api.artic.edu/api/v1/artworks')
      .then((res) => res.json())
      .then((data) => {
        console.log('data',data.data);
      const artCollections = setRetivedData(data);
      setArt(artCollections);
      console.log('Art collection',art);
        
      }).catch((err) => { console.log('Error fetch', err); });

  }, [])*/
  return (
    <section>
      <h2>Arts Section</h2>
      <div className="scroll-container"></div>
    </section>
  )
}

export default ArtsSection
