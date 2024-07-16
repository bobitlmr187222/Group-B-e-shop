const server = require("./app");

const port = process.env.API_PORT || 3000;

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});