/*require routes*/

const routesList = [
    'getMessages',
    'postMessage',
    'loginUser'
];

const routesArr = [];

routesList.forEach(route => {
    routesArr.push(require(`./${route}`));
});


module.exports = routesArr;