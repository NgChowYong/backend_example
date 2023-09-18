# backend_example
backend_example aims to provide an example to learn how to start a web backend from scratch to run a locallibrary website, refering to Mozilla mdn web docs, using popular Express nodejs as backend.

# Things TODO
- prepare environment for development
- write hello world code
- testing using github actions
- try to deploy the code

## Environment setup
note that we are using Express nodejs as our environment
- install nodejs
	- 'sudo apt update'
	- 'sudo apt install nodejs'
	- use 'node -v' to check nodejs version
- install npm (nodejs package manager)
	- 'sudo apt install npm' 
- install code generator
	- 'npm install express-generator -g' for global use in environment, only needed to be used once to create template
	- 'express locallibrary --view=pug'
	- 'cd locallibrary'
	- 'npm install'
	- 'npm audit fix --force' do it twice for initialization
	- 'DEBUG=locallibrary:* npm start'
	- 'sudo npm install -g n' to update to latest version of nodejs
	- 'sudo n latest' to update to latest version of nodejs
- install nodemon(auto restart when file updated, required for development only)
	- 'npm install --save-dev nodemon'
	- modify package.json scripts for 'devstart' and 'serverstart'
	- start project using 'npm run devstart'
- install express(optional if without using code generator)
	- 'npm init' will initial environment, but some infomation is required
		- package name, version, description, entry point, test command, git, keywords, author, license
	- 'npm install express'
- install ESLint
	- a development only tool for linting
	- 'npm install eslint --save-dev'
	- modify in package.json scripts: '"lint": "eslint ."'
	- do the setup using 'npm init @eslint/config'
	- 'npm run lint'
- install mongoose(javascript mongodb api) and mongoDB 
	- mongoose: 'npm install mongoose'
	- mongoDB: https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-ubuntu/
		- run a db: https://www.mongodb.com/docs/mongodb-shell/run-commands/
- install async-handler
	- 'npm install express-async-handler': middleware for handling exceptions inside of async
- install luxon: a date formatter which is prettier
	- 'npm install luxon'
- install express-validator
	- 'npm install express-validator':validation and sanitization of our form data
- swagger UI?
- install compression, helmet, express-rate-limit for deploy use
- jtest for unit test used
	- 'npm install --save-dev jest'

## File structure
- folders are created by auto generator as reference
- bin
	- /bin/www: set up error handling and then loads app.js
- routes: store separate modules
- views: templates
- package: for setting the package
- public: static file
- models: store database related schema
- controller: store CRUD function of a resource(logic)

## Coding
note that inital version will be creating some basic js code or common module that requires
- use code generator to create sample code
- create models folder
	- put schema, one schema per filer
	- one test file populate.db is used to test success or not
- create controller folder
	- one controller one file
- create route for apis url
	- setup apis required and post,get type used in a page
	- setup redirect in index.js
- create template/views to represent data for viewing
- modify views, controller and check with route url path for display
- modify CRUD functions
- linter = ESLint, run when modify the code
- swagger ui for schema alignment


## Testing
- `npm run serverstart`
- not yet ready

## Deploy
- IaaS vs PaaS, PaaS dont need to worry servers, load balancers etc.
- common hosting provider: Railway, Python Anywhere, AWS, Azure, Heroki, DIgital Ocean
- main concern:
	- web security
		- to have the server get the database URL from an environment variable or through .env file (separately deploy to file system)
		- Helmet middleware
		- add rate-limiter to avoid ddos etc
	- performance
		- set node_env to production?
		- minimize log website activity (e.g. tracking traffic or logging API calls) (use of debug package)
		- compression (use of compression package) for faster response get, will not be used in high-traffic website, will use nginx reverse proxy
- some common things to do:
	- clear development log, stack traces, headers, credentials
