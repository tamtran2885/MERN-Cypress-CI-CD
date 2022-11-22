# 🦘 MERN-Cypress-CI-CD-Pipeline

## 🐏 Technologies/Testing Framework:

- Front-end: React
- Backend: NodeJS, MongoDB, Express
- Testing: Cypress
- DevOps: Github Actions, Docker

## :astronaut: Installation

```bash
  npm install
```

### 🐨 Docker

- Build a docker image

```bash
  docker build . -t <docker-image-name>
```

- Create a container layer over the image and start it

```bash
  docker run -it -p 5000:5000 <docker-image-name>
```

- Push the image to Docker Hub

```bash
  docker push <docker-image-name>
```
