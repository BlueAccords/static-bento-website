# static-bento-website
static website about bento

- Development files are in the app folder
- Production-ready files in dist folder, generated using `gulp build`

## Instructions
0. install npm and nodejs on your computer
1. `$ npm install`
2. `gulp build`
3. OR build and test localhost server using `gulp build:server`

## Gulp tasks

`$ gulp`  

Used for development to watch for changes and compile sass to css
- gulp default command(ran by default using just "gulp")
- Hosts a server using development files
- Watches scss/html/js files for changes and reloads browsers upon changes
- compiles sass to css and refreshes development server  

`gulp clean:cache`  

Cleans image cache

`gulp clean:dist`  

Cleans production files

`gulp build`  

Used to build/compile files for production into a `dist` folder
- Cleans production files
- Compiles sass into css
- Minify/Concatenates js/css files
- Optimizes/Compresses Images
- Moves font files to dist(production) folder
- Moves all other files into dist(production) folder

`gulp build:server`  

Used to build/compile files for productoin into a `dist` folder then runs a local browser-sync server
- Runs gulp build
- Hosts a server via browser-sync
