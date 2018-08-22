# LIRI
## Language Interpretation and Recognition Interface

Liri is a command line Node app that takes in input and returns data. It intergrates with the Spotify, OMDB, and Bandsintown APIs to retrieve data. It uses the Inquirer package to get user input.

## Installation

- Clone/download the repo
- Open the root of the repo in your terminal
- (Optional) run the `vagrant up` command to use the provided vagrant file to provision a VM, then run `vagrant ssh` to use it. This requires both Vagrant and Virtualbox to be installed on your machine
    * [VirtualBox](https://www.virtualbox.org/wiki/Downloads)
    * [Vagrant](https://www.vagrantup.com/downloads.html)
- Navigate to the 'code' directory ('/var/code' if using vagrant)
- Run `npm install` to install the required Node modules
- You will need to place your own .env file with Spotify keys in the 'code' directory in the following format:
    `SPOTIFY_ID=your-spotify-id`
    `SPOTIFY_SECRET=your-spotify-secret`
- Run `node liri` to start the program
- Follow the on-screen prompts


