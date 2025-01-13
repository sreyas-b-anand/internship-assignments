# Dashboard App

A React-based dashboard application for managing people records with user authentication and CRUD operations.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

## Features

- [x] User authentication (login/signup)
- [x] Responsive navbar with user profile
- [x] Dashboard with a list of people
- [x] Add, edit, and delete person records
- [x] User profile card

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js (v14 or later)
- npm
- A running backend API (default URL: http://localhost:4000/api/persons)

## Installation and Usage

1. Clone the repository:
   ```sh
   git clone https://github.com/sreyas-b-anand/internship-assignments
   cd server
   ```
2. In another terminal window
   ```sh
   cd client

3. Install dependencies in both client and server:
   ```sh
   npm install
   
4. Set up environment variables:
   Create a `.env` file in the server directory and add the following:
   ```
   DBURI
   SECRET_KEY
   GOOGLE_CLIENT_ID 
   GOOGLE_CLIENT_SECRET 
   SESSION_SECRET

   EMAIL
   EMAIL_PASSWORD
5. Run the frontend server
   ```sh
   npm run dev
   
6.Run backend server
   ```sh
   nodemon server

The application will be available at `http://localhost:5173`.


## API Endpoints

| Method | Endpoint         | Description      |
|--------|------------------|------------------|
| GET    | /api/persons     | Fetch all people |
| POST   | /api/persons     | Add a new person |
| PUT    | /api/persons/:id | Update a person  |
| DELETE | /api/persons/:id | Delete a person  |

Ensure that your backend API is set up to handle these requests.

## Contributing

Contributions are welcome! Here's how you can contribute:

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a pull request

Please ensure that you update tests as appropriate and adhere to the existing coding style.

## License

Distributed under the MIT License. See `LICENSE` for more information.

---
