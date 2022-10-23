# Docker Hotreload NodeJs

Just a real quick thing to check out bind mounting a node project into a docker container for hot reloading inside a container. This probably shouldn't be used for production, and is more to speed up development

The goal is to be able to edit an external application and it apply to the container rather than needing to stop and rebuild the container image each time any changes are made

The project contains both the 'test application' (external-app) as well as the container Dockerfile (docker/server)

## How to run?
- Open docker-compose.yml
- Update the app service's volume source
- In the terminal, run `docker compose up --build`
- Open a browser and go localhost:3001
- Update files 
- Refresh the browser (because live reload isn't implemented)
