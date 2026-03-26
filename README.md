# Buyer Foresight Backend

## Project Overview
The Buyer Foresight Backend is an API designed to provide insights and analytics for buyers in the retail industry. It connects to multiple data sources and processes them to deliver valuable insights.

## Features
- User authentication and authorization
- Data processing and analytics
- Real-time insights
- RESTful API for accessing data

## Setup Instructions
1. Clone the repository:
   ```bash
   git clone https://github.com/chakradhar-narala/buyer-foresight-backend.git
   cd buyer-foresight-backend
   ```
2. Install the required dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file from the example:
   ```bash
   cp .env.example .env
   ```
4. Update the `.env` file with your configuration settings.
5. Start the server:
   ```bash
   npm start
   ```

## API Endpoints
- `GET /api/v1/users`: Fetches all users.
- `POST /api/v1/login`: Authenticates a user and returns a token.
- `GET /api/v1/analytics`: Fetches analytics data.

## Tech Stack
- Node.js
- Express
- MongoDB
- JWT for authentication
- Docker for containerization

## Deployment
To deploy the application, follow these steps:
1. Build the Docker image:
   ```bash
   docker build -t buyer-foresight-backend .
   ```
2. Run the container:
   ```bash
   docker run -p 3000:3000 buyer-foresight-backend
   ```
3. Ensure the service is running at `http://localhost:3000`

## Contributing
Contributions are welcome! Please submit a pull request or open an issue.

## License
This project is licensed under the MIT License.