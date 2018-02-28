const setCookie = (name, value = 1, days = 365) => {
  const d = new Date();
  d.setTime(d.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = `${name}=${value};expires=${d.toUTCString()};path=/`;
};

const getCookie = name => {
  const ca = decodeURIComponent(document.cookie).split(';');
  const concatName = `${name}=`;
  for (let i = 0; i < ca.length; i += 1) {
    const c = ca[i].trim();
    if (c.indexOf(concatName) === 0) {
      return c.substring(concatName.length, c.length);
    }
  }
  return '';
};

const removeCookie = name => {
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
};

function cookies() {
  return {
    get: getCookie,
    set: setCookie,
    remove: removeCookie
  };
}

export default cookies();
