# Dashboard App

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![MUI](https://img.shields.io/badge/MUI-%230081CB.svg?style=for-the-badge&logo=mui&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)

A React-based dashboard application for managing people records with user authentication and CRUD operations.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
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
- npm or yarn
- A running backend API (default URL: http://localhost:4000/api/persons)

## Installation

1. Clone the repository:
   ```sh
   git clone <repository-url>
   cd <project-directory>
   ```

2. Install dependencies:
   ```sh
   npm install
   # or
   yarn install
   ```

3. Set up environment variables:
   Create a `.env` file in the root directory and add the following:
   ```
   REACT_APP_API_URL=http://localhost:4000/api
   ```

## Usage

To start the development server:

```sh
npm run dev


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
