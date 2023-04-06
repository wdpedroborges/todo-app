# Todo App
## A simple todo app in React.js

---

This Todo app is built using ReactJS, a popular JavaScript library for building user interfaces. It provides users with a simple and intuitive interface for managing their daily tasks and organizing their schedules. With features like task creation, editing, and deletion, the app allows users to prioritize their tasks and stay on top of their to-do list. The app is also responsive, adapting to different screen sizes, and provides a seamless user experience on both desktop and mobile devices. Powered by ReactJS, this Todo app is fast, efficient, and easy to use, making it the perfect solution for anyone looking to streamline their daily tasks and stay productive.

---

![badge](https://img.shields.io/github/watchers/wdpedroborges/todo-app?style=social)
![badge](https://img.shields.io/github/stars/wdpedroborges/todo-app?style=social)
![badge](https://img.shields.io/github/license/wdpedroborges/todo-app)
![badge](https://img.shields.io/badge/powered%20by-vite-blue)
![badge](https://img.shields.io/badge/powered%20by-react.js-blue)
![badge](https://img.shields.io/badge/powered%20by-typescript-blue)
![badge](https://img.shields.io/badge/powered%20by-pico.css-blue)

---

## Live Demo

[Click here to see it]((wdpedroborges.github.io/todo-app))

## Features

- Create todos
- Mark completed todo
- Delete completed todos
- Persist everything in Local Storage

## Tech

- Vite
- React.js
- Typescript
- Pico CSS

## Installation

Clone the repository:

```bash
git clone https://github.com/wdpedroborges/todo-app
```

For production:

```sh
cd todo-app
npm install
npm run dev
```

Debug in Typescript:

```bash
tsc --noEmit --watch
```

Build:

```bash
npm run build
```

## Deploy

- Add: base: "/<repo>/", to vite.config.js

```bash
npm install gh-pages --save-dev
```

- Add to package.json

```bash
 "homepage": "https://<username>.github.io/<repo>/",
  ...
  "scripts": {
...
"build": "vite build",
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist",
...
```

## License

This project is licensed under the MIT License. Please see the LICENSE file for more details.