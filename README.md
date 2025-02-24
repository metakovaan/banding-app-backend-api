The Branding App backend is a RESTful API built with Node.js and Express.js. It serves brand data to the frontend and supports CRUD operations for managing brands.

Features
✅ RESTful API for managing brands
✅ Express.js for handling requests
✅ CORS enabled for frontend integration
✅ JSON-based data storage

Technologies Used
-Node.js
-Express.js
-CORS

Setup Instructions
1. Clone the Repository
sh
git clone https://github.com/metakovaan/banding-app-backend-api
cd branding-app-backend

2. Install Dependencies
sh
npm install

4. Configure Environment Variables
Create a .env file in the root directory and configure the following:
env
PORT=5000
CORS_ORIGIN=http://localhost:3000

4. Start the Server
sh
npm start
The API will be available at:
http://localhost:5000/api/brands
