import React, {Component} from "react";
import styles from "./AddStudent.module.css";

const addNewStudent = () => {
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