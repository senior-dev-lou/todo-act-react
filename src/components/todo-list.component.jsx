import { useState, useRef } from 'react';

import Box from '@mui/material/Box';
import List from '@mui/material/List';
import IconButton from '@mui/material/IconButton';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Dialog, DialogTitle, DialogContent, Button, DialogActions, Input } from '@mui/material';

import Todo from './todo.component';


const TodoList = ({ onAddTodo, onDeleteTodo, onEditTodo, onUpdateTodo, todoList, onComplete, onCancelUpdate }) => {
  const [showDialog, toggleDialog] = useState(false);
  const addField = useRef();

  const handleDialogOpen = () => {
    toggleDialog(true);
  }
  const handleDialogClose = () => {
    toggleDialog(false);
  }
  const handleAddTodo = () => {
    handleDialogClose();
    onAddTodo(addField);
  }

  return (<>
    <Box sx={{ flexGrow: 1, maxWidth: 500 }} className="mx-auto">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <div className="flex items-center justify-between shadow px-3 mt-8 bg-sky-500 mb-1">
            <Typography className='my-4 text-white' variant="h6" component="div">
              TODO LIST
            </Typography>
            <IconButton edge="end" aria-label="delete" onClick={handleDialogOpen}>
              <AddCircleIcon className='text-white' />
            </IconButton>
          </div>
          <List dense={false}>
            {
              todoList.map((item) => (
                <Todo
                  key={item.id}
                  id={item.id}
                  text={item.todo}
                  isCompleted={item.completed}
                  onComplete={onComplete}
                  onDelete={onDeleteTodo}
                  onEdit={onEditTodo}
                  onSubmit={onUpdateTodo}
                  onCancelUpdate={onCancelUpdate}
                  isEditing={item.isEditing}
                  defaultInputValue={item.todo}
                />
              ))
            }
          </List>
        </Grid>
      </Grid>
    </Box>

    <Dialog open={showDialog} fullWidth onClose={handleDialogClose}>
      <DialogTitle>Add Todo</DialogTitle>
      <DialogContent>
        <Input
          autoFocus
          margin="dense"
          id="name"
          label="Your Text"
          type="text"
          fullWidth
          variant="standard"
          inputRef={addField}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleDialogClose} >Cancel</Button>
        <Button onClick={handleAddTodo} >Add</Button>
      </DialogActions>
    </Dialog>
  </>

  );
}
export default TodoList;