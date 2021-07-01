//users
const getuser = (req, res) => {
    res.render('users.html');
    console.log("user");
};
const getsignin = (req, res) => {
    res.render('signin.html');
    console.log("form signin");
};

const getsignup = (req, res) => {
    res.render('signup.html');
    console.log("form signup");
}
/* export functions*/
module.exports = {
    getuser,
    getsignin,
    getsignup
}
