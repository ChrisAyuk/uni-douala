import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import axios from 'axios';
import { useState } from 'react';

const Home: NextPage = () => {

  let [year, setYear] = useState('');
  let [semester, setSemester] = useState('');
  let [name, setName] = useState('');

  const [resultName, setResultName] = useState();
  const [resultYear, setResultYear] = useState();
  const [resultMatricule, setResultMatricule] = useState();
  const [resultDep, setResultDep] = useState();
  const [resultY, setResultY] = useState();
  const [resultS, setResultS] = useState();

  const getResultData = () => {
    console.log('info below');
    console.log(year);
    console.log(name);
    console.log(semester);
    var config = {
      method: 'get',
      url: `http://localhost:8020/results/${name}/${year}/${semester}`,
      headers: { 
        'Content-Type': 'application/json'
      }
    };

      axios(config).then(res => {
        console.log("STUDENT RESULTS");
        console.log(res)
        setResultName(res.data.data.name);
        setResultDep(res.data.data.department);
        setResultMatricule(res.data.data.matricule);
        setResultY(res.data.data.year);
        setResultS(res.data.data.semester);

      }).catch(err => {
        console.log('Error getting result');
        console.log(err);
      })
  }


  return (
   <div className={styles.container}>
     <h1 className={styles.title}>Get Students Result</h1>
     <div className={styles.search}>
       <input className={styles.date} value={year} onChange={(e) => setYear(e.target.value)} type="text" placeholder="Year"/>
       <select className={styles.select} onChange={(e) => setSemester(e.target.value)}>
         <option value="Semester 1">Semester 1</option>
         <option value="Semester 2">Semester 2</option>
       </select>
       <input className={styles.stName} value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Student Name"/>
       <button className={styles.searchBtn} onClick={getResultData}>Search</button>
     </div>
     <div className={styles.results}>
       <div className={styles.info}>
            <div className={styles.infoDetails}>
              <label>Name:</label>
          <p>{resultName}</p>
            </div>
            <div className={styles.infoDetails}>
              <label>Matricule:</label>
              <p>{resultMatricule}</p>
            </div>
            <div className={styles.infoDetails}>
              <label>Department:</label>
              <p>{resultDep}</p>
            </div>
            <div className={styles.infoDetails}>
              <label>Semester:</label>
              <p>{resultS}</p>
            </div>
            <div className={styles.infoDetails}>
              <label>Year:</label>
              <p>{resultY}</p>
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
