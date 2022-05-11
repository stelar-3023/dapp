// console.log('Hello World');

// connect to Moralis server
const serverUrl = 'https://pd42rdl6s4we.usemoralis.com:2053/server';
const appId = 'WOFAkhXlUxeDp6WCpoD7i3QRGXC161cQqDwvz3CO';
Moralis.start({ serverUrl, appId });

let homepage = 'http://127.0.0.1:5501/blockchain-projects/dapp/index.html';

if (Moralis.User.current() == null && window.location.href != homepage) {
  document.querySelector('body').style.display = 'none';
  window.location.href = 'index.html';
}

login = async () => {
  await Moralis.Web3.authenticate().then(async function (user) {
    console.log('logged in');
    user.set('name', document.getElementById('user-username').value);
    user.set('email', document.getElementById('user-email').value);
    await user.save();
    // console.log(Moralis.User.current());
    window.location.href = 'dashboard.html';
  });
};

logout = async () => {
  await Moralis.User.logOut();
  window.location.href = 'index.html';
};

if (document.querySelector('#btn-login') != null) {
  document.querySelector('#btn-login').onclick = login;
}
if (document.querySelector('#btn-logout') != null) {
  document.querySelector('#btn-logout').onclick = logout;
}
