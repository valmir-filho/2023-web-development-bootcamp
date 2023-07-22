/* 
Create a new server using Express.
1. Create directory (use mkdir);
2. Create index.js file (use touch);
3. Initialise npm (npm init -y);
4. Install express package (npm install express);
5. Upgrade project (insert in the package.json: "type: module");
6. Write server application in index.js;
7. Start server (in terminal: node index.js).
*/

import express from 'express';

const app = express();
const port = 3000;

app.listen(port, () => {
    console.log(`Server running on port ${port}!`)
});