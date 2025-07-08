# Product Listing App
### This project is a full-stack web application that displays a list of products using a carousel interface. The challenge was to build both the API and the user interface, retrieving data from a JSON source and optionally enhancing it with live gold price information.

## 🌐 Live Demo
https://product-listing-interface.onrender.com/

![image](https://github.com/user-attachments/assets/2efca878-a448-4fe5-a5e5-cf017a7296dc)

## Setup Instructions
1. **Clone the repository:**
 
   ```bash
   git clone git@github.com:ismail-97/frontend-page-redesign-challenge.git
   
2. **Navigate first to api and interface folders and then Install Dependencies:**

   ```bash
   cd api
   npm install
  
   cd ../interface
   npm install

3. **Set enviroment variables**

   In api/.env:
     ```ini 
     API_KEY=your_api_key_here

   In interface/.env:
     ```ini 
     VITE_API_URL=(http://localhost:3000)

4. **Start the development server**

   ```bash
   # Start the backend
   cd api
   npm run dev
  
   # Start the frontend
   cd ../interface
   npm run dev
   
## Technologies used
- Frontend: React + TypeScript, Vite, Bootstrap, Swiper.js
- Backend: Node.js + Express + TypeScript
- Styling: Bootstrap & custom CSS
- Extras: Swiper.js for the carousel UI, live gold price API integration

## Implementation details
1. Built a RESTful API using Express to serve product data from a JSON file.
2. Integrated a backend service that fetches live gold price data from an external API. (Note: The free tier allows only 50 requests/month.)
3. Implemented flexible filtering based on query parameters.
4- Used Swiper.js for the product carousel UI.
5- Ensured responsive layout using Bootstrap and custom CSS.

## Notes
- API may rate-limit requests due to free-tier API key usage.
- The application is deployed on Render — both backend and frontend are hosted separately.
