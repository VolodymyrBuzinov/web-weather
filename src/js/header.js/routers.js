import links from './links';
import CategoriesAPI from './categories-API';
const catApi = new CategoriesAPI();
import routers from './paths';
let auth = true;
let startState = true;

function updatePage(e) {
  if (e.target.tagName !== 'A') return;
  e.preventDefault();
  updateHistory(e);
  updatedContent();
}

function updateHistory(e) {
  const query = e.target.getAttribute('href');
  let router = routers.find(item => item.path === query);
  if (!router) return;
  if (!router.meta.auth || !auth) history.pushState(query, null, query);
}

function updatedContent() {
  let router = routers.find(
    item => item.path === history.state || item.path === location.pathname,
  );
  if (!router) {
    catApi.onError();
    return;
  }
  if (!router.meta.auth || !auth) {
    router.component();
  } else if (router.meta.auth && auth && startState) {
    routers[0].component();
    history.pushState(routers[0].path, null, routers[0].path);
  }
  startState = false;
}

window.onpopstate = function (event) {
  updatedContent();
};
links.headerContainer.addEventListener('click', updatePage);
links.navList.addEventListener('click', updatePage);
// links.listAuthButton.addEventListener('click', evt => {
//     if (evt) {

//     }
// })
const logout = function (evt) {
  if (evt) {
    var myHeaders = new Headers();
    let token = sessionStorage.getItem('token');
    myHeaders.append('Authorization', `Bearer ${token}`);
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
    };
    fetch(
      'https://callboard-backend.herokuapp.com/auth/logout',
      requestOptions,
    );
    links.myCabinetSection.classList.add('is-hidden');
    links.pagginationSection.classList.remove('is-hidden');
    // links.cardSection.classList.remove('is-hidden')
    links.pagButtons.classList.remove('is-hidden');
    links.myCabinetButton.style.display = 'none';
    links.regButton.style.display = 'flex';
    links.logoutButton.style.display = 'none';
    links.addCalls.style.display = 'none';
    links.navMyCabinetButton.style.display = 'none';
    links.navLogoutButton.style.opacity = 0;
    links.listAuthButton.style.display = 'flex';
    sessionStorage.clear();
  }
};
window.addEventListener('load', updatedContent());
links.navLogoutButton.addEventListener('click', logout);
links.logoutButton.addEventListener('click', logout);
links.navMyCabinetButton.addEventListener('click', catApi.inCabinet);
links.clearButton.addEventListener('click', evt => {
  if (evt) {
    catApi.onHome();
  }
});
