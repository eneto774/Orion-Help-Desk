import app from './app';

const PORT = 3333;

app.listen(PORT | 3333, () => {
  console.log(`
🚀 Server Started on http://localhost:${PORT}
Para visualizar a documentação da API acesse: http://localhost:${PORT}/docs`);
});
