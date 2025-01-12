/* eslint-disable react/prop-types */
import  { useState, useEffect } from 'react';
import { 
  Dialog, 
  DialogTitle, 
  DialogContent, 
  DialogActions, 
  TextField, 
  Button 
} from '@mui/material';

const PersonForm = ({ person, onSubmit, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    dateOfBirth: '',
  });

  useEffect(() => {
    if (person) {
      setFormData({
        ...person,
        dateOfBirth: new Date(person.dateOfBirth).toISOString().split('T')[0],
      });
    }
  }, [person]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <Dialog open={true} onClose={onClose}>
      <DialogTitle>{person ? 'Edit Person' : 'Add Person'}</DialogTitle>
      <form onSubmit={handleSubmit}>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            name="name"
            label="Name"
            type="text"
            fullWidth
            value={formData.name}
            onChange={handleChange}
            required
          />
          <TextField
            margin="dense"
            name="dateOfBirth"
            label="Date of Birth"
            type="date"
            fullWidth
            InputLabelProps={{
              shrink: true,
            }}
            value={formData.dateOfBirth}
            onChange={handleChange}
            required
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Cancel</Button>
          <Button type="submit">{person ? 'Update' : 'Add'}</Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default PersonForm;
