import React from 'react'
import Task from './Task';
export default function Footer(props) {
    const tasks = props.todoList.map((task,index) => {
        return <Task handleDelete={props.handleDelete} key={index} desc={task.desc}/>
    })
  return (
    <div className='mt-4'>
        <div className='w-full flex flex-col justify-center items-center'>
            {tasks}
        </div>
    </div>
  )
}
