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

    const addNewResult = () => {
        try {
            let reqData = {"name": name, "department": department, "semester": semester, "matricule": matricule, "year": year, "resultUrl": resultUrl};
            
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
                <form action="" className={styles.form}>
                    <div>
                        <input className={styles.nameCont} type="text" placeholder="Name" />
                    </div>
                    <div>
                        <input className={styles.nameCont} type="text" placeholder="Department" />
                    </div>
                    <div>
                        <input className={styles.nameCont} type="date" placeholder="Year" />
                    </div>
                    <div>
                        <input className={styles.nameCont} type="text" placeholder="Semester" />
                    </div>
                    <div>
                        <input className={styles.nameCont} type="text" placeholder="Matricul" />
                    </div><br />
                    <button className={styles.btnUpload}><a className={styles.upload} href="">Upload</a></button>
                    <button className={styles.btnBack}>
                        <a className={styles.backBtn} href="">Back</a>
                    </button>
                </form>
            </div>
        </div>
    )
}


export default addNewStudent;