import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import './Tarea.css';

export default function Tarea(props) {

    const {
        onChange,
        data: {id, descripcion, done}
    } = props;


    return (
        <React.Fragment>
            <label className='todo nueva-tarea'>
            <Checkbox
                type='checkbox'           
                onChange={onChange}
                name={id}
                checked={done}
                value={descripcion}
                className={done ? 'done' : 'notDone'}/>
            <div className="todo_text">{descripcion}</div>
            </label>
        </React.Fragment>
    );

}