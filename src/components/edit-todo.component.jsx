import { useRef } from 'react';

import { Save } from '@mui/icons-material';
import { IconButton, Input } from '@mui/material';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

const EditTodo = ({ defaultValue, onSubmit, id, onCancelUpdate }) => {
  const editedTodo = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ id: id, ref: editedTodo });
  }

  return <form className='flex w-full p-0' onSubmit={handleSubmit}>
    <Input
      style={{ width: "100%" }}
      defaultValue={defaultValue}
      inputRef={editedTodo}
    />
    <IconButton
      type="submit"
      color="primary"
      aria-label="Add"
    >
      <Save fontSize="small" />
    </IconButton>
    <IconButton
      className='text-red-500'
      aria-label="cancel"
      onClick={onCancelUpdate.bind(this, id)}
    >
      <HighlightOffIcon fontSize="small" />
    </IconButton>
  </form>
}
export default EditTodo;