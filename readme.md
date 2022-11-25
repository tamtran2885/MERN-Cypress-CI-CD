# :mushroom: MERN-Cypress-CI-CD-Pipeline

## :maple_leaf: Technologies/Testing Framework:

- Front-end: React
- Backend: NodeJS, MongoDB, Express
- Testing: Cypress
- Continuos Integration: Github Actions
- Deploy: Docker, AWS

## :cactus: Installation

```bash
  npm install
```

## :chestnut: Docker

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

## :bamboo: Deploy application on AWS

### :wind_chime: Deploy one combined app

- Use Node REST API which also renders the React app.
- Build Docker image for the application, and upload it to Docker Hub
- Deploy application on Amazon ECS using Docker compose

### :wind_chime: Deploy two separated apps

- Deploy Rest API on Amazon using Elastic Beanstalk service.
- Deploy React application on Amazon using S3 Service.

## :computer: Reference

- [React-Documentation](https://reactjs.org/)
- [React-Router](https://reactrouter.com/en/main)
- [Postman](https://www.postman.com/)
- [Cypress](https://www.cypress.io/)
- [Docker](https://www.docker.com/)
- [AWS](https://aws.amazon.com/)
