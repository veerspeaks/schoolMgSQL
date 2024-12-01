# School Manager API

This project is a Node.js application that provides a RESTful API for managing school data. It allows users to add new schools and retrieve a list of schools sorted by proximity to a user-specified location.

## Features

- **Add School**: Add a new school with details such as name, address, latitude, and longitude.
- **List Schools**: Retrieve a list of schools sorted by distance from a specified location.

## Technologies Used

- **Node.js**: JavaScript runtime for building the server-side application.
- **Express.js**: Web framework for building the API.
- **MySQL**: Relational database for storing school data.
- **dotenv**: Module to load environment variables from a `.env` file.
- **haversine-distance**: Library to calculate the distance between two geographical points.

## Setup Instructions

### Prerequisites

- Node.js and npm installed on your machine.
- MySQL database setup.

### Installation

1. **Clone the repository**:

   ```bash
   git clone <repository-url>
   cd SchoolManager
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Configure Environment Variables**:

   Create a `.env` file in the root directory and add your database credentials:

   ```plaintext
   DB_HOST=your-database-host
   DB_USER=your-database-username
   DB_PASSWORD=your-database-password
   DB_NAME=your-database-name
   DB_PORT=your-database-port
   ```

4. **Run the Application**:

   ```bash
   node server.cjs
   ```

   The server will start on port 3000 by default.

## API Endpoints

### Add School

- **Endpoint**: `/schools/add`
- **Method**: `POST`
- **Request Body**:
  - `name` (string, required)
  - `address` (string, required)
  - `latitude` (number, required)
  - `longitude` (number, required)

### List Schools

- **Endpoint**: `/schools/list`
- **Method**: `GET`
- **Query Parameters**:
  - `latitude` (number, required)
  - `longitude` (number, required)

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Thanks to the developers of the libraries and tools used in this project.
