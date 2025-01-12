/* eslint-disable react/prop-types */
//import React from 'react';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TableRow, 
  Paper, 
  IconButton,
  Skeleton
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const PersonTable = ({ people , loading, onEdit, onDelete }) => {
    console.log(people)
  const calculateAge = (dob) => {
    const today = new Date();
    const birthDate = new Date(dob);
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };

  if (loading) {
    return (
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Age</TableCell>
              <TableCell>Date of Birth</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {[...Array(5)].map((_, index) => (
              <TableRow key={index}>
                <TableCell><Skeleton animation="wave" /></TableCell>
                <TableCell><Skeleton animation="wave" /></TableCell>
                <TableCell><Skeleton animation="wave" /></TableCell>
                <TableCell><Skeleton animation="wave" /></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Age</TableCell>
            <TableCell>Date of Birth</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {(people || []).map((person) => (
            <TableRow key={person._id}>
              <TableCell>{person.name}</TableCell>
              <TableCell>{calculateAge(person.dateOfBirth)}</TableCell>
              <TableCell>{new Date(person.dateOfBirth).toLocaleDateString()}</TableCell>
              <TableCell>
                <IconButton onClick={() => onEdit(person)}>
                  <EditIcon />
                </IconButton>
                <IconButton onClick={() => onDelete(person._id)}>
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default PersonTable;

