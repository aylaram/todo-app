import React, { useState, useRef } from 'react';

import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Tooltip from '@mui/material/Tooltip';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import DateAdapter from '@mui/lab/AdapterDateFns';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';


export default function Todolist(){
    const gridRef = useRef();

    const columns = [
        {field: 'description', sortable: true, filter: true, floatingFilter: true},
        {field: 'date', sortable: true, filter: true, floatingFilter: true},
        {field: 'priority', sortable: true, filter: true, floatingFilter: true, 
        cellStyle: params => params.value === "High" ? {color: 'red'} : {color: 'black'}},

    ];

    const [todos, setTodos] = useState([]);
    const [todo, setTodo] = useState({description: '', date: '', priority: ''})

    const addTodo = () => {
        setTodos([...todos, todo])
        setTodo({description: '', date: '', priority: ''});
    }

    const inputChanged = (event) => {
        setTodo({...todo, [event.target.name]: event.target.value})
    }

    const deleteTodo = () => {
        if(gridRef.current.getSelectedNodes().length> 0){
    
        setTodos(todos.filter((todo, index)=> index !== gridRef.current.getSelectedNodes()[0].childIndex))
        }
        else{
            alert('Select the row')
        }
    }

    return(
        <div>
            
        <Stack 
            direction="row" 
            spacing={2}     
            alignItems="center" 
            justifyContent="center"
            margin={5}>
                <TextField
                label='Description'
                name='description'
                value={todo.description}
                variant="filled"
                onChange={inputChanged}
                />

                <TextField
                label='Date'
                name='date'
                value={todo.date}
                variant="filled"
                onChange={inputChanged}
                />

                <TextField
                label='Priority'
                name = 'priority'
                value={todo.priority}
                variant="filled"
                onChange={inputChanged}
                />

                <Button 
                    variant = "contained" 
                    endIcon = {<AddIcon />}
                    onClick={addTodo}>
                    Add
                </Button>
                <Tooltip title="Slect the row to delete">
                    <Button 
                        variant = "contained" 
                        endIcon = {<DeleteIcon />}
                        onClick={deleteTodo}>  
                        Delete
                    </Button>
                </Tooltip>
            
           
        </Stack>
        
         <div className='ag-theme-material' style={{height:400, width:700, margin: 'auto'}}>
             <AgGridReact
             ref = {gridRef}
             onGridReady={params => gridRef.current = params.api}
             rowSelection='single'
             rowData={todos}
             columnDefs={columns}
             animateRows = 'true'
             />
         </div>
         </div>
    );
}