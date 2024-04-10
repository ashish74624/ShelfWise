Library Management System
Welcome to the Library Management System! This system is designed to efficiently manage the inventory of books in a library, as well as track information about students and publishers. Developed with Next.js for the frontend, Express.js for the backend, and MongoDB for the database, this system offers a seamless experience for users to add, manage, and allocate books to students.

Features
Add Students: Easily add new students to the system with relevant details such as name, ID, and contact information.

Add Publishers: Record information about publishers including name, contact details, and any other pertinent information.

Add Books: Add new books to the library inventory with details such as title, author, genre, ISBN, publication year, and quantity available.

Allocate Books to Students: Facilitate the process of allocating books to students by recording which books have been borrowed by which students and the due dates.

Installation
To set up the Library Management System on your local machine, follow these steps:

Clone the Repository:

bash
Copy code
git clone <repository-url>
Install Dependencies:

bash
Copy code
cd library-management-system
npm install
Set up Environment Variables:

Create a .env file in the root directory.
Add the following environment variables:
makefile
Copy code
PORT=3000
MONGODB_URI=<your-mongodb-uri>
Start the Development Server:

arduino
Copy code
npm run dev