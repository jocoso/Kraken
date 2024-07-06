# Art Version Control System (Kraken)

Kraken is a version control system specifically designed for artists to manage changes and revisions in their digital artworks. This system allows for tracking versions, comparing different versions, and potentially merging changes from different collaborators. Built with Node.js and PostgreSQL, Kraken provides a robust and scalable solution to manage art files efficiently.

## Features

- **Version Tracking**: Keep track of every change made to an artwork.
- **File Comparison**: Easily compare different versions of the same artwork.
- **User Management**: Secure login and user management.
- **Merge Functionality**: (Optional) Merge changes from different branches of artwork.
- **Scalable Storage**: Utilize cloud storage solutions for scalability and efficiency.

## Technologies Used

- **Backend**: Node.js, Express.js
- **Database**: PostgreSQL
- **Frontend**: TBD
- **Authentication**: JSON Web Tokens (JWT)

## Getting Started

### Clone the repository

```bash
git clone https://github.com/yourusername/artvcs.git
cd kraken
```

### Install dependencies

```bash
npm install
```

### Configure your database

- Ensure PostgreSQL is installed and running.
- Create a database named `artvcs`.
- Configure database credentials in your configuration file.

### Start the server

```bash
npm start
```

### Navigate to http://localhost:3000 in your browser to access the application.

## Documentation

Further documentation detailing API endpoints and system architecture is available in the `docs` folder.

## Contributing

Contributions are welcome! Please read `CONTRIBUTING.md` for details on our code of conduct, and the process for submitting pull requests.

## License

This project is licensed under the MIT License - see the `LICENSE.md` file for details.
