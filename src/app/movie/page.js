import React from 'react'
import styles from "@/app/styles/common.module.css"
import Moviecard from '../components/Moviecard';

const movie = async () => {

  const url = 'https://netflix54.p.rapidapi.com/search/?query=stranger&offset=0&limit_titles=50&limit_suggestions=20&lang=en';
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '92ccada7ebmshf80df3265034a9ep19e602jsn70afa7f729aa',
    'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
  }
};
const res = await fetch(url, options);
const data = await res.json();
const main_data = data.titles;


  return (
    <>
    <section className={styles.movieSection}>
      <div className={styles.container}>
        <h1>Series & Movie</h1>
        <div className={styles.card_section}>
        {
          main_data.map((currElem)=>{
            return <Moviecard key={currElem.id} {...currElem}/>

          })
        }
 </div>
   
      
      </div>
      </section>
    </>
  )
}

export default movie
