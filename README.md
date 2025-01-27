# 3D Product Configurator

This project is an interactive 3D Product Configurator scene built using **Next.js**, **TypeScript**, and **Three.js**, styled with **Tailwind CSS**. The app allows users to interact with 3D shapes such as cubes, spheres, cylinders, and cones, customize their colors, and rotate them interactively with mouse cursor. The project demonstrates the power of modern web technologies to create engaging and dynamic user experiences.

## Table of Contents

- [3D Product Configurator](#3d-product-configurator)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
  - [Technologies Used](#technologies-used)
  - [Project Structure](#project-structure)
    - [File Descriptions](#file-descriptions)
  - [Installation](#installation)

## Features

- **Interactive 3D Shapes**: Users can choose between a Cube, Sphere, Cylinder, or Cone and interact with them in 3D space.
- **Real-Time Color Changes**: Users can change the color of the 3D shapes using a color picker.
- **3D Scene Rotation**: Shapes can be rotated by dragging the mouse over the scene, providing an immersive experience.
- **Responsive Design**: The application is fully responsive, making it accessible on various devices and screen sizes, thanks to Tailwind CSS.
- **Modern Development Setup**: The app is built with **Next.js** for a fast, optimized user experience, **TypeScript** for strong typing and better development workflows, and **Three.js** to render interactive 3D graphics.

## Technologies Used

- **Next.js**: A React framework that enables server-side rendering (SSR) and static site generation (SSG) to create fast and SEO-friendly web applications.
- **TypeScript**: A superset of JavaScript that adds static typing, making the code more maintainable and error-free.
- **Three.js**: A powerful JavaScript library that enables the creation and rendering of 3D graphics in the web browser.
- **Tailwind CSS**: A utility-first CSS framework that allows rapid styling and building of responsive user interfaces.

## Project Structure

The project follows a clean and organized structure, with the majority of the code inside the `src/` directory, following the standard Next.js conventions.

```bash
src/
  ├── app/
  │   ├── components/
  │   │   ├── Navbar.tsx         # Navigation bar component
  │   │   ├── Footer.tsx         # Footer component
  │   │   ├── ColorPicker.tsx    # Component for selecting color
  │   │   ├── ShapeDropdown.tsx  # Component for selecting shape
  │   │   └── scene.tsx          # Main 3D scene component
  │   ├── page.tsx               # Main page that includes the Navbar and Scene components
  │   └── globals.css            # Global CSS file for styling the app
tsconfig.json                     # TypeScript configuration file
```
### File Descriptions

- **`src/app/components/Navbar.tsx`**: A simple navigation bar that may contain links and project details.
- **`src/app/components/Scene.tsx`**: The core component where the 3D scene is created and rendered using Three.js.
- **`src/app/page.tsx`**: The main page that imports and renders both the Navbar and Scene components.
- **`src/public/`**: (Optional) Folder for any public assets like images or textures.
- **`src/styles/globals.css`**: Global CSS file that is imported into the app for styling.
- **`tsconfig.json`**: TypeScript configuration for the project.

## Installation

To run this project locally, follow these steps:

1. **Clone the repository:**

```bash
git clone https://github.com/MouhamedAbbassi/3D_Product_Configurator.git

Navigate into the project directory:

npm install

npm run dev

Open your browser and navigate to http://localhost:3000 to view the app.

Usage
Interacting with the 3D Scene: You can click and drag the 3D shapes to rotate them in space. This provides an interactive experience where users can explore the objects from all angles.
Changing Shapes: Use the shape selector to switch between Cube, Sphere, Cylinder, Cone, and Heart. The selected shape will be rendered in the scene.
Changing Colors: Use the color picker to update the color of the selected shape in real-time.
Responsive Design: The app is fully responsive and adjusts to different screen sizes, providing a seamless experience across devices.

Contributing
If you want to contribute to this project, follow these steps:

Fork the repository to your GitHub account.
Clone your fork to your local machine.
Create a new branch for your feature or bug fix.
Make your changes and ensure they are working as expected.
Commit your changes and push them to your fork.
Open a pull request to the main branch of the original repository.
Code Style
Use TypeScript for all new code.
Follow the Prettier configuration for formatting.
Ensure all functions and components are well-documented.
License
This project is licensed under the MIT License. See the LICENSE file for more information.
 
