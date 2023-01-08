import * as React from 'react';
import Button from '@mui/material/Button';
import Tarea from './Tarea';
import './Lista.css';

export default function Lista (props){

    const {lista, setLista} = props;

    const onChangeStatus = evento => {

         const { name, checked} = evento.target;       
         const actualizaLista = lista.map(item => ({
             ...item,
             done: item.id === name ? checked: item.done
         }));
        setLista(actualizaLista);      
    }


    const onClickEliminaTarea = evento => {
        const actualizaLista = lista.filter(item => !item.done);
        setLista(actualizaLista);
    }

    const elementosLista = lista.map(item =>{
        return( 
        <Tarea 
            key={item.id}
            data={item}
            onChange={onChangeStatus}/>
    )});

    const noTareas = <span className='noTareas'>No hay tareas pendientes</span>
    

    return (
        <div className='lista-tareas'>
            {lista.length ? elementosLista : noTareas }
            {lista.length ? (
                    <div className='botonEliminar'>
                    <Button
                        variant="outlined"
                        onClick={onClickEliminaTarea}>
                    Eliminar completadas</Button>
                    </div>
                ) : null
            }
        </div>
    );
}