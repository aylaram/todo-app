
import './App.css';
import Todolist from './components/Todolist';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function App() {
  return (
   
    <div className="App">
       <AppBar position='static'>
         <Toolbar>
           <Typography variant='h5'>My ToDo List</Typography>
         </Toolbar>
       </AppBar>
     <Todolist />
  
    </div>
  );
}

export default App;

