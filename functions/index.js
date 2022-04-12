const functions  = require('firebase-functions');
const admin      = require('firebase-admin');
const fs         = require('fs');

var app = admin.initializeApp();

// Getting and replacing meta tags
exports.preRender = functions.https.onRequest((request, response) => {
    
    // Error 404 is false by default
    let error404 = false;
        
    // Getting the path
    const path = request.path ? request.path.split('/') : request.path;
    // path[0] = erikmartinjordan.com path[1] = kpis
    // path[0] = erikmartinjordan.com path[1] = projects
    // ...
    
    // Getting index.html text
    let index = fs.readFileSync('./web/index.html').toString();
    
    // Changing metas function
    const setMetas = (title, description) => {
        
        index = index.replace('__TITLE__', title);
        index = index.replace('__DESC__', description);
        
    }
    
    // Navigation menu
    if     (path[1] === 'articles')    setMetas('Articles - Erik Martín Jordán', 'Code, web development, tech and off-topic.');
    else if(path[1] === 'projects')    setMetas('Projects - Erik Martín Jordán', 'Websites I have deployed so far.');
    else if(path[1] === 'kpis')        setMetas('Kpis - Erik Martín Jordán', 'Numbers and stats.');
    else if(path[1] === 'timer')       setMetas('Timer - Erik Martín Jordán', 'Tasks I am working on.');
    
    // We need to considerate the routes and a default state to 404 errors as well
    // ...

    
    // Sending index.html    
    error404
    ? response.status(200).send(index)
    : response.status(200).send(index);
    
});