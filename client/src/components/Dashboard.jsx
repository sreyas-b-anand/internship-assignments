/* eslint-disable no-unused-vars */
import  { useState, useEffect } from 'react';
import { Container, Paper, Typography, Box } from '@mui/material';
import PersonTable from './PersonTable';
import PersonForm from './FormComponent';
import AddIcon from '@mui/icons-material/Add';
import { Fab } from '@mui/material';
import axios from 'axios';
import { toast } from 'react-toastify';

const Dashboard = () => {
  const [people, setPeople] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingPerson, setEditingPerson] = useState(null);
  const [isFormOpen, setIsFormOpen] = useState(false);

  useEffect(() => {
    fetchPeople();
  }, []);

  const fetchPeople = async () => {
    try {
      setLoading(true);
      const response = await axios.get("http://localhost/4000/api/persons");
      setPeople(response.data);
    } catch (error) {
      toast.error('Failed to fetch people');
    } finally {
      setLoading(false);
    }
  };

  const handleAdd = async (newPerson) => {
    try {
      const response = await axios.post("http://localhost/4000/api/persons", newPerson);
      setPeople([...people, response.data]);
      toast.success('Person added successfully');
      setIsFormOpen(false);
    } catch (error) {
      toast.error('Failed to add person');
    }
  };

  const handleEdit = async (updatedPerson) => {
    try {
      const response = await axios.put(`http://localhost/4000/api/persons/${updatedPerson._id}`, updatedPerson);
      setPeople(people.map(p => p._id === updatedPerson._id ? response.data : p));
      toast.success('Person updated successfully');
      setEditingPerson(null);
    } catch (error) {
      toast.error('Failed to update person');
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost/4000/api/persons/${id}`);
      setPeople(people.filter(p => p._id !== id));
      toast.success('Person deleted successfully');
    } catch (error) {
      toast.error('Failed to delete person');
    }
  };

  return (
    <Container maxWidth="lg">
      <Paper elevation={3} sx={{ p: 3, mt: 4 }}>
        <Typography variant="h4" gutterBottom>
          People Dashboard
        </Typography>
        <PersonTable 
          people={people} 
          loading={loading} 
          onEdit={setEditingPerson} 
          onDelete={handleDelete} 
        />
        <Box sx={{ position: 'fixed', bottom: 20, right: 20 }}>
          <Fab color="primary" aria-label="add" onClick={() => setIsFormOpen(true)}>
            <AddIcon />
          </Fab>
        </Box>
      </Paper>
      {(isFormOpen || editingPerson) && (
        <PersonForm
          person={editingPerson}
          onSubmit={editingPerson ? handleEdit : handleAdd}
          onClose={() => {
            setIsFormOpen(false);
            setEditingPerson(null);
          }}
        />
      )}
    </Container>
  );
};

export default Dashboard;

