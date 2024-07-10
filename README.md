
---

# Kraken Art Version Control System

Kraken is a dedicated version control system designed for artists to manage and track changes in their digital artworks. It offers a suite of commands that mimic traditional VCS operations but are tailored specifically for art file management.

## Features

- **Initialize Repository**: Set up your art project with `kraken init`. This command prepares the project directory and sets up necessary configurations.
- **Add Artworks**: Use `kraken addart` to stage artworks for versioning, similar to `git add`.
- **Force Initialization**: Reinitialize the project forcefully with `kraken init --force` to overwrite existing setups.
- **Google Drive Integration**: Securely upload and manage your art files in the cloud with built-in Google Drive support.

## Installation

Clone the repository and navigate to the project directory:

```bash
git clone https://github.com/your-repository/kraken.git
cd kraken
```

Install necessary dependencies:

```bash
npm install
```

## Usage

Initialize a new art project:

```bash
kraken init
```

Add an artwork to your project:

```bash
kraken addart path/to/artfile
```

Force reinitialize the project:

```bash
kraken init --force
```

## Configuration

Modify the `kraken.json` configuration file to suit your project needs. It includes project-specific settings like name and initialization date.

## Contributing

Contributions are welcome! Please read the contributing guide to learn how you can propose feature changes or bug fixes.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

---
