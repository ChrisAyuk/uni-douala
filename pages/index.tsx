import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import axios from 'axios';

const Home: NextPage = () => {
  
  const getResultData = () => {
    var config = {
      method: 'get',
      url: 'http://localhost:8020/results',
      headers: { 
        'Content-Type': 'application/json'
      }
    };

      axios(config).then(res => {
        console.log("STUDENT RESULTS");
        console.log(res)
      }).catch(err => {
        console.log('Error getting result');
        console.log(err);
      })
  }


  return (
   <div className={styles.container}>
     <h1 className={styles.title}>Get Students Result</h1>
     <div className={styles.search}>
       <input className={styles.date} type="date" />
       <select className={styles.select}>
         <option value="Semester 1">Semester 1</option>
         <option value="Semester 2">Semester 2</option>
       </select>
       <input className={styles.stName} type="text" placeholder="Student Name"/>
       <button className={styles.searchBtn} onClick={getResultData}>Search</button>
     </div>
     <div className={styles.results}>
       <div className={styles.info}>
            <div className={styles.infoDetails}>
              <label>Name:</label>
              <p>Uni Douala</p>
            </div>
            <div className={styles.infoDetails}>
              <label>Matricule:</label>
              <p>M1232</p>
            </div>
            <div className={styles.infoDetails}>
              <label>Department:</label>
              <p>Software</p>
            </div>
            <div className={styles.infoDetails}>
              <label>Semester:</label>
              <p>Uni Douala</p>
            </div>
       </div>
       <div className={styles.action}>
            <button>Download Pdf</button>
            <button>Print Result</button>
       </div>
     </div>
   </div>
  )
}

export default Home;
