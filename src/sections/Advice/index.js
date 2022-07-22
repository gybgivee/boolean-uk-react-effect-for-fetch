import { useEffect, useState } from "react"

function AdviceSection() {
  /*
  const initialAdvices ={
    single:{},
    multiple:[]
  }
  const [advice, setAdvice] = useState(initialAdvices);
  useEffect(() => {
    fetch('	https://api.adviceslip.com/advice')
      .then((res) => res.json())
      .then((data) => {
      
        setAdvice(initialAdvices['single']=data);
        console.log('advice', advice);
      }).catch((err) => { console.log('Error fetch', err); });

  }, [])

  console.log('Data', advice);*/
  return (
    <section>
      <h2>Advice Section</h2>
      <section className="adivce-slip"></section>
      <section className="favourtite-slips-list"></section>
    </section>
  )
}

export default AdviceSection
