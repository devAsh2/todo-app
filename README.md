# React + Vite

## Todo App

A simple and effective Todo application built using **React** and **Vite**.

---

### 🚀 Purpose

This repository contains a minimalist Todo App meant to help users efficiently keep track of their daily tasks. It's designed as a clean and beginner-friendly example of how to structure a React application, manage state, and use component logic. Use this app to add, delete, complete, and edit todo items.

---

### 🛠 Tech Stack

- **React**: For building user interfaces and handling component logic.
- **Vite**: Lightning-fast development environment and build tool.
- **CSS**: For styling and layout.

---

### 🧩 Components & Logic Overview

#### Main Components

- **App.jsx**: Root component. Manages state (todo list and input), and defines main logic functions (add, delete, toggle, edit tasks).
- **Header.jsx**: Displays the app header/title.
- **ToDoList.jsx**: Receives todos and handler props, renders the list of todos.
- **ToDoItem.jsx**: Represents a single todo item, handles completion toggling, editing, and deletion.

#### Main Logic

- **State Management**: Uses React's `useState` to manage todos and input.
- **Add Task**: User types a task and submits the form, which adds an item to the state-managed list.
- **Complete Task**: Click on a todo to toggle its `completed` status (using strikethrough text).
- **Edit Task**: Edit the text of an existing todo.
- **Delete Task**: Remove a todo from the list.

---

### 📂 Project Structure

```
todo-app/
│
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── ToDoList.jsx
│   │   └── ToDoItem.jsx
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
├── public/
├── index.html
├── package.json
└── vite.config.js
```

---

### 🛠️ Installation & Running the Project

1. **Clone the Repository**
   ```bash
   git clone https://github.com/your-username/todo-app.git
   cd todo-app
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Start Development Server**
   ```bash
   npm run dev
   ```
   This will start the Vite development server. The console will show you the local URL (typically `http://localhost:5173/`).

4. **Build for Production**
   ```bash
   npm run build
   ```

---

### 📖 Notes

- Modify and extend the logic or styling as desired—this project is intentionally simple and great for learning!
- If you make changes to component files, Vite’s hot module reload will update the browser automatically.

---

**Happy task tracking! 🎉**

