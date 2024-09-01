# Description
Tutorial from https://aws.amazon.com/getting-started/hands-on/host-static-website/ to host a static web application.

### Tech Stack
- AWS Cloud
- React Front-end

# Setup
```
npm create vite@latest staticwebsite -- --template react
cd staticwebsite
npm install
npm run dev
```

## Delete Application
1. Open AWS Amplify console
1. Choose staticwebsite app, choose App settings, and select General settings
1. In the General settings section, choose Delete app

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
