const app = require('./app')

init();

async function init() {
  try {   
    
    app.listen(3001, () => {
      console.log('Express rodando na porta 3001');
    });
    
  } catch (error) {
    console.error(`Ocorreu um erro: ${JSON.stringify(error)}`);
    process.exit(1);
  }
}