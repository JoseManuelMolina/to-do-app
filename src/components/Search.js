import * as React from 'react';
import './Search.css';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Lista from './Lista.js';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';

export default function BasicTextFields() {

    const [descripcion, setDescription] = React.useState(''); 

    const [listaTareas, setListaTareas] = React.useState([]);    
    
    const addTarea = () =>{
        setListaTareas([
          ...listaTareas,
           {done: false,
            id: (+new Date()).toString(),
            descripcion}
        ]);
        setDescription('');
    };

    const handleKeyDown = (evento) => {
      if (evento.key === 'Enter' && descripcion!==''){
        addTarea()
      }
    }

  return (
    <Box
      sx={{
        '& > :not(style)': { m: 1 },
      }}
      className='formulario'
    >
      <div className='container'>
        <TextField 
          //fullWidth
          id="outlined-textarea" 
          className="addTask"
          label='Añadir tarea'
          variant='standard'
          placeholder='Comprar tomates' 
          value={descripcion}
          onChange={(evento) =>{
            setDescription(evento.target.value);
          }}
          onKeyDown={handleKeyDown}/>
        
        <IconButton 
          variant="outlined" 
          onClick={addTarea}
          aria-label="add"
          disabled={descripcion ? '' : 'disabled'}
        >
          <AddIcon />
        </IconButton>
      </div>
      <Lista lista={listaTareas} setLista={setListaTareas} ></Lista>
    </Box>
    
  );
}