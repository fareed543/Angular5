# Angular5
Angular 5 App

Video 1: Creating Anular JS Application with CLI

    Installtion of Node JS
    Download Node Js : https://nodejs.org/en/
    Check Node Js version at your system with command : node -v
    Check NPM version at your system with command : npm -v

    Instalation of angular CLI
    npm install @angular/cli -g
    Check CLI version your system with command : ng -v

    Create Angular Application with CLI
    Command : ng new your-app-name --style=scss --routing

    To RUN the Project use command  : ng serve [ dont forget to swich to project directory ]

    Other Reference Links : 
    https://angular.io/guide/quickstart

    My Git  Repository : 
    https://github.com/fareed543/Angular5


Video 2: Creating  Angular JS Application with out CLI

    Download the Sample Application from Angular Quick Start Page
    https://angular.io/guide/quickstart

    When you install for the first time you will get an error in Command Prompt
        Your global Angular CLI version (1.6.3) is greater than your local
        version (1.5.0). The local Angular CLI version is used.
    RUN the command : npm install --save-dev @angular/cli@latest



You may get a Question to RUN Project we are using command ng serve but i will run until you stop
to stop this click ctrl + c
i will ask "Terminate batch job (Y/N)?" then enter : Y

if you close that console by default then you have to kill the process
When you then application you can see the port onwhich the project is running mine working on 4200
Search for the process working on prot number
netstat -ano | findstr :4200
then kill the port process by using the process id
taskkill /PID 15940 /F
