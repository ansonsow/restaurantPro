import React from "react";
import "./AssignTask.css";
import {useEffect, useState} from 'react'

function UnAssignedTasksList(props) {

  const [dueDate, setDueDate] = useState()


  useEffect (()=>{
    // setDueDate(new Date(props.unassignedTask.due_date))
    let dDate = new Date(props.unassignedTask.due_date);
    dDate.setHours(dDate.getHours()+3);

    let strDueDate = dDate.toString();
    console.log(strDueDate);
    let trimmed = strDueDate.substring(0,21)

    setDueDate(trimmed);
    console.log(dueDate);

  },[props.unassignedTask.due_date]) 

  // let dueDate = new Date(props.unassignedTask.due_date);


  return (
    <tr key={props.unassignedTask.task_id}>
      <td className="fled-td">
        <input
          type="checkbox"
          name="checkbox"
          id={props.unassignedTask.task_id}
          onClick={props.click}
        />
        {props.unassignedTask.task_name}
      </td>
      {/* <td>{props.unassignedTask.due_date}</td> */}
      <td>{dueDate}</td>

      <td>{props.unassignedTask.priority === 1 ? "high" : "low"}</td>
    </tr>
  );
}

export default UnAssignedTasksList;
