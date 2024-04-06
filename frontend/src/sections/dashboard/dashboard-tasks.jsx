import { useState } from 'react';
import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import MenuItem from '@mui/material/MenuItem';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import CardHeader from '@mui/material/CardHeader';
import FormControlLabel from '@mui/material/FormControlLabel';

import Iconify from 'src/components/iconify';
import CustomPopover, { usePopover } from 'src/components/custom-popover';

// ----------------------------------------------------------------------

export default function Tasks({ title, subheader, list, ...other }) {
  const [tasks, setTasks] = useState(list);
  const [selected, setSelected] = useState(['2']);
  const [newTaskName, setNewTaskName] = useState('');

  const handleClickComplete = (taskId) => {
    const tasksCompleted = selected.includes(taskId)
      ? selected.filter((value) => value !== taskId)
      : [...selected, taskId];

    setSelected(tasksCompleted);
  };

  const handleAddTask = () => {
    if (newTaskName.trim() !== '') {
      const newTask = {
        id: Math.random().toString(36).substr(2, 9), // Generating a simple unique ID
        name: newTaskName,
      };
      setTasks([...tasks, newTask]);
      setNewTaskName(''); // Reset input field
    }
  };

  const handleMarkComplete = (taskId) => {
    // Toggle the completed state of the task
    const newSelected = selected.includes(taskId)
      ? selected.filter((id) => id !== taskId)
      : [...selected, taskId];
    setSelected(newSelected);
  };

  const handleEditTask = (taskId, newName) => {
    // Assuming task names are unique and task ID won't change
    const newTasks = tasks.map((task) => (task.id === taskId ? { ...task, name: newName } : task));
    setTasks(newTasks);
  };

  const handleDeleteTask = (taskId) => {
    // Remove the task from the tasks array
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
    // Also, remove from selected if it's there
    const newSelected = selected.filter((id) => id !== taskId);
    setSelected(newSelected);
  };

  return (
    <Card {...other}>
      <CardHeader title={title} subheader={subheader} />

      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          checked={selected.includes(task.id)}
          onChange={() => handleClickComplete(task.id)}
          onMarkComplete={() => handleMarkComplete(task.id)}
          onEdit={(newName) => handleEditTask(task.id, newName)}
          onDelete={() => handleDeleteTask(task.id)}
        />
      ))}
      <Stack direction="row" spacing={2} sx={{ p: 2 }}>
        <TextField
          label="New Task"
          variant="outlined"
          fullWidth
          value={newTaskName}
          onChange={(e) => setNewTaskName(e.target.value)}
        />
        <Box sx={{ py: 2, textAlign: 'right' }}>
          <Button
            size="small"
            color="inherit"
            endIcon={<Iconify icon="icons8:plus" width={28} />}
            onClick={handleAddTask}
          />
        </Box>
      </Stack>
    </Card>
  );
}

Tasks.propTypes = {
  list: PropTypes.array,
  subheader: PropTypes.string,
  title: PropTypes.string,
};

// ----------------------------------------------------------------------

function TaskItem({ task, checked, onChange, onMarkComplete, onEdit, onDelete }) {
  const popover = usePopover();

  const handleMarkComplete = () => {
    onMarkComplete(); // Call the function passed from parent
    popover.onClose();
  };

  const handleEdit = () => {
    // Example: Prompt user for new task name
    const newName = prompt('New name for the task:', task.name);
    if (newName && newName.trim() !== '') {
      onEdit(newName);
    }
    popover.onClose();
  };

  const handleDelete = () => {
    onDelete(); // Call the function passed from parent
    popover.onClose();
  };

  return (
    <>
      <Stack
        direction="row"
        sx={{
          pl: 2,
          pr: 1,
          py: 1,
          '&:not(:last-of-type)': {
            borderBottom: (theme) => `dashed 1px ${theme.palette.divider}`,
          },
          ...(checked && {
            color: 'text.disabled',
            textDecoration: 'line-through',
          }),
        }}
      >
        <FormControlLabel
          control={<Checkbox checked={checked} onChange={onChange} />}
          label={task.name}
          sx={{ flexGrow: 1, m: 0 }}
        />

        <IconButton color={popover.open ? 'inherit' : 'default'} onClick={popover.onOpen}>
          <Iconify icon="eva:more-vertical-fill" />
        </IconButton>
      </Stack>

      <CustomPopover open={popover.open} onClose={popover.onClose} arrow="right-top">
        <MenuItem onClick={handleMarkComplete}>
          <Iconify icon="eva:checkmark-circle-2-fill" />
          Mark Complete
        </MenuItem>

        <MenuItem onClick={handleEdit}>
          <Iconify icon="solar:pen-bold" />
          Edit
        </MenuItem>

        <Divider sx={{ borderStyle: 'dashed' }} />

        <MenuItem onClick={handleDelete} sx={{ color: 'error.main' }}>
          <Iconify icon="solar:trash-bin-trash-bold" />
          Delete
        </MenuItem>
      </CustomPopover>
    </>
  );
}

TaskItem.propTypes = {
  checked: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  task: PropTypes.object.isRequired,
  onMarkComplete: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};
