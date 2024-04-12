import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Typography, Button, Paper, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';


function App() {
  const [apiKey, setApiKey] = useState('');
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchApiKey();
    fetchUsers();
  }, []);

  const fetchApiKey = () => {
    axios.get('/admin/api-key')
      .then((response) => {
        setApiKey(response.data);
      })
      .catch((error) => {
        console.error('Error fetching API key:', error);
      });
  };

  const updateApiKey = () => {
    const newApiKey = prompt('Enter the new API key:');
    if (newApiKey) {
      axios.post('/admin/api-key', { key: newApiKey })
        .then((response) => {
          alert(response.data);
          fetchApiKey();
        })
        .catch((error) => {
          console.error('Error updating API key:', error);
        });
    }
  };

  const deleteUser = (chatId) => {
    axios.delete(`/users/${chatId}`)
      .then((response) => {
        alert(response.data.message);
        fetchUsers();
      })
      .catch((error) => {
        console.error('Error deleting user:', error);
      });
  };

  const fetchUsers = () => {
    axios.get('/users')
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error('Error fetching users:', error);
      });
  };

  return (
    <Container maxWidth="md">
      <Container maxWidth="md" sx={{ textAlign: 'center', marginTop: 4 }}>
        <Typography variant="h1" gutterBottom sx={{ fontFamily: 'Arial', fontSize: '3rem', fontWeight: 'bold', color: 'blue' }}>Weatherbot Admin Dashboard</Typography>
        
        <Button variant="contained" color="primary" href="https://t.me/Jatin_weather_bot" target="_blank" rel="noopener noreferrer" sx={{ marginTop: 4, borderRadius: '20px', bgcolor: '#50c878', margin: '10px' }}>
          Chat with telegram Weather Bot
        </Button>
        <br />
        <br />
        <br />

      </Container>
      <Paper elevation={3} sx={{ padding: '20px', marginBottom: '20px', borderRadius: '20px', bgcolor: 'aqua' }}>
        <Typography variant="h5" gutterBottom sx={{ fontFamily: 'Arial', fontSize: '1.5rem', fontWeight: 'bold', color: '#333' }}>Manage API Key</Typography>
        <Typography variant="body1" gutterBottom sx={{ fontFamily: 'Arial', fontSize: '1rem', color: '#666' }}>Current API Key: {apiKey}</Typography>
        <Button variant="contained" color="primary" onClick={updateApiKey} sx={{ marginTop: 2, bgcolor: '#50c878' }}>
          Change API Key
        </Button>
      </Paper>
      <br />
      <br />
      <br />
      <br />

      <Paper elevation={3} sx={{ padding: '20px', borderRadius: '20px', bgcolor: 'aqua', textAlign: 'center' }}>
        <Typography variant="h5" gutterBottom sx={{ fontFamily: 'Arial', fontSize: '1.5rem', fontWeight: 'bold', color: '#333' }}>Current Users</Typography>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontFamily: 'Arial', fontSize: '1.2rem', fontWeight: 'bold', color: '#333' }}>Username</TableCell>
                <TableCell sx={{ fontFamily: 'Arial', fontSize: '1.2rem', fontWeight: 'bold', color: '#333' }}>Chat ID</TableCell>
                <TableCell sx={{ fontFamily: 'Arial', fontSize: '1.2rem', fontWeight: 'bold', color: '#333' }}>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.map((user) => (
                <TableRow key={user.chatId}>
                  <TableCell sx={{ fontFamily: 'Arial', fontSize: '1rem', color: '#666' }}>{user.username}</TableCell>
                  <TableCell sx={{ fontFamily: 'Arial', fontSize: '1rem', color: '#666' }}>{user.chatId}</TableCell>
                  <TableCell>
                    <IconButton aria-label="delete" onClick={() => deleteUser(user.chatId)}>
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        
      </Paper>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Typography variant="subtitle1" gutterBottom sx={{ fontFamily: 'Arial', fontSize: '1.2rem', color: '#666' }}>Submitted By: Jatin Gupta</Typography>
      <Typography variant="subtitle2" gutterBottom sx={{ fontFamily: 'Arial', fontSize: '1rem', color: '#666' }}>Email: gupta.jatin2108@gmail.com</Typography>
    </Container>
  );
}

export default App;