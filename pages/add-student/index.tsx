import React, {useState} from "react";
import axios from 'axios';

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
        <div>
            <h1>Add Student</h1>
            <button onClick={addNewResult}>Add Result</button>
        </div>
    )
}


export default addNewStudent;