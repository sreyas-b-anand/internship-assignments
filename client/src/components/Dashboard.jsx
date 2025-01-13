import { useState, useEffect } from "react";
import { Container, Paper, Typography, Box } from "@mui/material";
import PersonTable from "./PersonTable";
import PersonForm from "./FormComponent";
import AddIcon from "@mui/icons-material/Add";
import { Fab } from "@mui/material";
import axios from "axios";
import { toast } from "react-toastify";
import { useAuthContext } from "../hooks/useAuthContext";
import { Link } from "react-router-dom";
//import UserCard from "./UserProfileAccordion";
const API_BASE_URL = "http://localhost:4000/api/persons";

const Dashboard = () => {
  const [people, setPeople] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingPerson, setEditingPerson] = useState(null);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const { user } = useAuthContext();

  useEffect(() => {
    fetchPeople();
  }, []);

  const fetchPeople = async () => {
    try {
      setLoading(true);
      const response = await axios.get(API_BASE_URL);
      setPeople((prevPeople) => {
        // Merge the new data with existing data, prioritizing new data
        const mergedPeople = [...prevPeople];
        response.data.forEach((newPerson) => {
          const index = mergedPeople.findIndex((p) => p._id === newPerson._id);
          if (index !== -1) {
            mergedPeople[index] = newPerson;
          } else {
            mergedPeople.push(newPerson);
          }
        });
        return mergedPeople;
      });
    } catch (error) {
      console.error("Failed to fetch people:", error);
      toast.error("Failed to fetch people");
    } finally {
      setLoading(false);
    }
  };

  const handleAdd = async (newPerson) => {
    try {
      const response = await axios.post(API_BASE_URL, newPerson);
      setPeople([...people, response.data]);
      toast.success("Person added successfully");
      setIsFormOpen(false);
    } catch (error) {
      console.error("Failed to add person:", error);
      toast.error("Failed to add person");
    }
  };

  const handleEdit = async (updatedPerson) => {
    try {
      const response = await axios.put(
        `${API_BASE_URL}/${updatedPerson._id}`,
        updatedPerson
      );
      const updatedData = response.data;
      setPeople((prevPeople) =>
        prevPeople.map((p) => (p._id === updatedData._id ? updatedData : p))
      );
      toast.success("Person updated successfully");
      setEditingPerson(null);
      setIsFormOpen(false);
    } catch (error) {
      console.error("Failed to update person:", error);
      toast.error("Failed to update person");
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API_BASE_URL}/${id}`);
      setPeople(people.filter((p) => p._id !== id));
      toast.success("Person deleted successfully");
    } catch (error) {
      console.error("Failed to delete person:", error);
      toast.error("Failed to delete person");
    }
  };

  return (
    <Container sx={{ overflowY: "hidden" }} className="w-full">
      
      {user ? (
        <>
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
            <Box sx={{ position: "fixed", bottom: 20, right: 20 }}>
              <Fab
                color="primary"
                aria-label="add"
                onClick={() => setIsFormOpen(true)}
              >
                <AddIcon />
              </Fab>
            </Box>
          </Paper>
        
        </>
      ) : (
        <>
          <Box className="w-full h-screen centered">
            <Typography variant="p" color="initial">
              You need to login to access the dashboard{" "}
            </Typography>
            <Link className="underline text-blue-600" to={'/'}>login</Link>
          </Box>
        </>
      )}
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
