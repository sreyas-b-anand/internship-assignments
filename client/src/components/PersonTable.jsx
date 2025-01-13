/* eslint-disable react/prop-types */

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Skeleton,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { format, differenceInYears, isValid, parseISO } from "date-fns";

const PersonTable = ({ people, loading, onEdit, onDelete }) => {
  const formatDate = (dateString) => {
    if (!dateString) return "N/A";
    const date = parseISO(dateString);
    return isValid(date) ? format(date, "PP") : "Invalid Date";
  };

  const calculateAge = (dateOfBirth) => {
    if (!dateOfBirth) return "N/A";
    const birthDate = parseISO(dateOfBirth);
    if (!isValid(birthDate)) return "Invalid Age";
    return differenceInYears(new Date(), birthDate);
  };

  const TableSkeleton = () => (
    <>
      {[...Array(5)].map((_, index) => (
        <TableRow key={index}>
          <TableCell>
            <Skeleton animation="wave" />
          </TableCell>
          <TableCell>
            <Skeleton animation="wave" />
          </TableCell>
          <TableCell>
            <Skeleton animation="wave" />
          </TableCell>
          <TableCell>
            <Skeleton animation="wave" width={100} />
          </TableCell>
        </TableRow>
      ))}
    </>
  );

  return (
    <TableContainer component={Paper} key={people.length}>
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
          {loading ? (
            <TableSkeleton />
          ) : people.length === 0 ? (
            <TableRow>
              <TableCell colSpan={4} align="center">
                No people found
              </TableCell>
            </TableRow>
          ) : (
            people.map((person) => (
              <TableRow key={person._id}>
                <TableCell>{person.name || "N/A"}</TableCell>
                <TableCell>{calculateAge(person.dateOfBirth)}</TableCell>
                <TableCell>{formatDate(person.dateOfBirth)}</TableCell>
                <TableCell>
                  <IconButton onClick={() => onEdit(person)} color="primary">
                    <EditIcon />
                  </IconButton>
                  <IconButton
                    onClick={() => onDelete(person._id)}
                    color="secondary"
                  >
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default PersonTable;
