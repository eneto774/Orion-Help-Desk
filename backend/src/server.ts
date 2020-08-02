import app from './app';

const PORT = 3333;

app.listen(PORT | 3333, () => {
  console.log(`🚀 Server Started on Port http://localhost:${PORT}`);
});
