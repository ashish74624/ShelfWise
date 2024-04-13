**Library Management System**

Welcome to the Library Management System (LMS) documentation. This system is designed to streamline the management of books, publishers, students, and book allocations within a library setting. It utilizes Next.js for the frontend, Express.js for the backend, and MongoDB as the database.

### Features

1. **Add Students**: Easily add new students to the system with relevant information such as name, student ID, contact details, etc.

2. **Add Publishers**: Keep track of publishers by adding their details including name, contact information, and any other pertinent data.

3. **Add Books**: Add books to the system with information such as title, author, ISBN, genre, publication date, and quantity available.

4. **Allocate Books to Students**: Efficiently allocate books to students, keeping track of which student has borrowed which book and when it is due for return.

### Setup Instructions

1. **Clone the Repository**: Begin by cloning the repository to your local machine:

   ```
   git clone https://github.com/ashish74624/Library_Management.git
   ```

2. **Install Dependencies**: Navigate into the project directory and install the necessary dependencies for both frontend and backend:

   ```
   cd library-management-system
   cd server
   npm install
   cd ..
   cd client
   npm install
   ```

3. **Set Environment Variables**: Create a `.env` file in the 'server' directory and configure environment variables such as database connection URI named "URL", port number named "PORT", etc.

4. **Start the Server**: Run the following commands to start both the frontend and backend servers:

   ```
   # Start backend server
   cd server
   nodemon index.js

   # Start frontend server
   cd client
   npm run dev 
   ```

5. **Access the Application**: Once the servers are running, you can access the application by navigating to `http://localhost:3000` in your web browser.

### API Endpoints

The following endpoints are available for interaction with the backend API:

- `/student`: Endpoint for managing student data (GET, POST).
- `/pub`: Endpoint for managing publisher data (GET, POST).
- `/book`: Endpoint for managing book data (GET, POST).
- `/loan`: Endpoint for managing book allocations (GET, POST).

### Technologies Used

- **Frontend**: Next.js, Tailwind CSS
- **Backend**: Express.js, Node.js
- **Database**: MongoDB


### Support or Contact

For any inquiries or support regarding this project, please contact [ashish74624@gmail.com.com].

Thank you for using the Library Management System! Happy managing your library resources! 📚