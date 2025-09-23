const express = require('express');
const app = express();
const responseMiddleware = require('./responses');

app.use(express.json());
app.use(responseMiddleware);

app.get('/api/example', (req, res) => {
  const data = { id: 1, name: 'John Doe' };
  res.success('Data fetched successfully', data);
});

app.post('/api/example', (req, res) => {
  if (!req.body.name) {
    return res.validationFailed('Validation error', { field: 'name is required' });
  }

  try {
    res.success('Data saved successfully', { id: 2, ...req.body });
  } catch (error) {
    res.failure('Something went wrong', error);
  }
});


app.listen(3000, () => {
  console.log('Server is running on port 3000');
});