const ArtsSection=(props)=> {
  
  const {art} = props;
  
    return (
      <section>
      <h2>Arts Section</h2>
      <div className="scroll-container">
        <ul className="art-list">
          {art.map((element,index)=>{
            return(
              <li key={index}>
              <div classNameName="frame">
                <img
                  src={`https://www.artic.edu/iiif/2/${element.image_id}/full/400,/0/default.jpg`}
                />
              </div>
              <h3>Title : {element.title}</h3>
              <h4>Artist : {element.artist_title}</h4>
              <p>Subject Title:</p>
              <ul>
                {element.subject_titles.map((element,index)=>{
                  return <li key={index}>{element}</li>
                })}
              </ul>
            </li>
            )
          })}
        </ul>
      </div>
    </section>
    )
  }
  
  export default ArtsSection
  