const AdviceSection=(props)=> {
 //console.log('props', props);
  
  const {advice,setAdvice} = props;
  const{favouriteAdvice, setFavouriteAdvice} = props;
  const getMoreAdvice = () =>{
    fetch('https://api.adviceslip.com/advice')
    .then(res => res.json())
    .then(data => setAdvice(data.slip.advice))
    .catch(err => console.error(err))
  }
 const addFavouriteAdvice = ()=>{
  const check = favouriteAdvice.find(element=>element===advice);
  if(!check&&advice.length>0){
    const copyFavourite = [...favouriteAdvice]
    copyFavourite.push(advice);
    setFavouriteAdvice(copyFavourite);
  }
 }
 
 //console.log('favouriteAdvice',favouriteAdvice);
    return (
        <section>
        <h2>Advice Section</h2>
        <section class="adivce-slip">
          <h3>Some Advice</h3>
          <p>{advice}</p>
          <button onClick={getMoreAdvice}>Get More Advice</button>
          <button onClick={addFavouriteAdvice}>Save to Favourties</button>
        </section>
        <section class="favourtite-slips-list">
          <h3>Favourite Advice Slips</h3>
          <ul>
            {favouriteAdvice.map((element,index)=>{
              return(
                <li key={index}>{element}</li>
              )})}
          </ul>
        </section>
      </section>
    )
  }
  
  export default AdviceSection
  