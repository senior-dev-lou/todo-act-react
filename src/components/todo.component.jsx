import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { IconButton } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

import EditTodo from './edit-todo.component';

const Todo = ({ text, isCompleted, onDelete, onEdit, onComplete, id, isEditing, onSubmit, onCancelUpdate }) => {
  return <>
    <ListItem
      className={`shadow mb-2.5 py-4 ${isCompleted ? 'bg-blue-50' : 'bg-white'}`}

      secondaryAction={

        !isEditing && <>
          <IconButton edge="end" aria-label="checkbox" onClick={onComplete.bind(this, id)}>
            <Checkbox size='small' checked={isCompleted} />
          </IconButton>
          <IconButton edge="end" aria-label="delete" onClick={onDelete.bind(this, id)}>
            <DeleteIcon fontSize='small' className='text-red-500' />
          </IconButton>
          <IconButton edge="end" aria-label="edit" color='primary' onClick={onEdit.bind(this, id)}>
            <EditIcon fontSize='small' />
          </IconButton>
        </>
      }
    >
      {
        !isEditing ? <ListItemText
          primary={text}
        />
          :
          <EditTodo
            isCompleted={isCompleted}
            defaultValue={text}
            id={id}
            onSubmit={onSubmit}
            onCancelUpdate={onCancelUpdate}
          />
      }

    </ListItem>
  </>
}
export default Todo;