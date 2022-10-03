const app = require('./app');
const port = process.env.PORT || 3000;

const start = () => {
  app.listen(port, (err) => {
    if (err) {
      console.log(err);
      process.exit(1);
    }
    console.log(`Aetna Code Test server listening on port ${port}`)
  })
}

start();