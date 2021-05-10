# - Using a React-appliction to access my mqtt Broker on the Raspberry PI

Subscriber.js has the code for subscribing to a Topic this Topic is being published by the esp at home.

By setting up the Raspberry with a mosquitto Broker within a Docker Container and also setting up a Database for later applications.

I am using a Postgressql Database on the Raspberry Pi and it can be accessed trough port 5432.

# - Raspberry Configuration

By Creating a Docker Compose file it is possible to clone it form Github and 'Compose up' to automatiacally install and run all Containers.

The Containers consists of a Mongo Database, Postgresdb, mongo-express, mosquitto Broker, portainer to graficallz manage the Containers.

Included are the volumes with the config files.

# - React Setup

By utilizing the creat-react-app build i can get a boilerplate for the React app.

React has a library named 'mqtt' to use subscribe and publish commands.

The design is being done with Ant Design a Library for React. I am using the Form boilerplate to create a Development Design.

For now the react app is soely used for Testing purposes. It is not yet completly user friendly.

# - Code description

Components consist of Arrow functions and utilizing Hooks such as 'useState, useEffect, useForm'

# - GIT

Everything is being pushed to Repos to make the code more mangeable. The Code is divided in Raspberry Pi Files, Esp Files, React-App Files, NodeJS API files

# - Docker Setup

In the Raspberry you have to install a few dependencies to use docker-compose because it is being used.

1. Install Docker
   curl -fsSL https://get.docker.com -o get-docker.sh
2. Run Docker Install Script
   sudo sh get-docker.sh
3. Test Docker
   docker version
4. Install Docker Compose
   sudo apt-get install libffi-dev libssl-dev
   sudo apt install python3-dev
   sudo apt-get install -y python3 python3-pip
   sudo pip3 install docker-compose
5. Done :)

After installing docker-compose clone Git repo
git clone https://github.com/GianBkk/pi-dockersetup.git
When files are Transferd move into directory with the docker-compose file
and run: - docker-compose up -d // -d stands for demon mode

# - API Setup

Using NodeJS as the backend by using the mqtt Library and creating Reqests and Response according to the Esp code.
This is still in Progress!

# - ESP8266 Setup

Prequisits are to have a Breadboard a Relay and multible cables.
In the Git Repo for the ESP is a plan on how to connect the ESP and Relay together.

Included is the code which work in this way: - Using ESPWifi to connect the ESP to the Local Wifi Network - Mqtt to Publish and Subscibe to get and post information about the Esp - The Mqtt Messages are being transported to the Raspberry with has a Mosquitto Broker running and is in the same Network - If the ESP recives a message with the payload 'ON' or 'OFF' to control the Relay Remotely - The provided Topics are 'urgn/switch/left/control', 'urgn/switch/right/control', 'urgn/switch/left/state', 'urgn/switch/right/state'
