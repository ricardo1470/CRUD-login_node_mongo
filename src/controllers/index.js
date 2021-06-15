const getinit = (req, res) => {
    res.render('index.html');
    console.log("index");
};

const getabout = (req, res) => {
    res.render('about.html');
    console.log("about");
}
/* export functions*/
module.exports = {
    getinit,
    getabout
}
