import React, {useState} from "react";
import axios from 'axios';
import styles from "./AddStudent.module.css";

const addNewStudent = () => {
    const [name, setName] = useState('');
    const [department, setDepartment] = useState('');
    const [semester, setSemester] = useState('');
    const [matricule, setMatricule] = useState('');
    const [year, setYear] = useState('');
    const [resultUrl, setResultUrl] = useState('');
    const [successs, setSuccess] = useState(false);

    const addNewResult = (e: any) => {
        e.preventDefault();
        try {
            let reqData = {"name": name, "department": department, "semester": semester, "matricule": matricule, "year": year, "result": resultUrl};
            
            var config = {
                method: 'post',
                url: 'http://localhost:8020/results',
                headers: { 
                  'Content-Type': 'application/json'
                },
                data : reqData
              };

            axios(config).then((res:any) => {
                console.log(res);
                console.log("result added");
                setName('');
                setDepartment('');
                setMatricule('');
                setResultUrl('');
                setYear('');
                setSemester('');
                setSuccess(true);
                setTimeout(() => {
                    setSuccess(false);
                },3000)
            }).catch(err => {
                console.log("There was an error adding result")
                console.log(err);
            })
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div className="Container">
            
            <div className={styles.formContainer}>
                <h1 className={styles.title}>Upload Result Slip</h1>
               { successs &&  <div className="success">
                    Added Stuent Result
                </div>}
                <form className={styles.form}>
                    <div>
                        <input value={name} onChange={(e) => setName(e.target.value)} className={styles.nameCont} type="text" placeholder="Name" />
                    </div>
                    <div>
                        <input  value={department} onChange={(e) => setDepartment(e.target.value)} className={styles.nameCont} type="text" placeholder="Department" />
                    </div>
                    <div>
                        <input  value={year} onChange={(e) => setYear(e.target.value)} className={styles.nameCont} type="text" placeholder="Year" />
                    </div>
                    <div>
                        <input  value={semester} onChange={(e) => setSemester(e.target.value)} className={styles.nameCont} type="text" placeholder="Semester" />
                    </div>
                    <div>
                        <input  value={matricule} onChange={(e) => setMatricule(e.target.value)} className={styles.nameCont} type="text" placeholder="Matricule" />
                    </div>
                    <div>
                        <input  value={resultUrl} onChange={(e) => setResultUrl(e.target.value)} className={styles.nameCont} type="text" placeholder="Result Doc" />
                    </div>
                    <br />
                    <button onClick={addNewResult} className={styles.btnUpload}>Add Result</button>
                    <button className={styles.btnBack}>
                        <a className={styles.backBtn} href="">Back</a>
                    </button>
                </form>
            </div>
        </div>
    )
}


export default addNewStudent;