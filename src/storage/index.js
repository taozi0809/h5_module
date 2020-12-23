/**
 * 存储localStorage
 */
export const setLocalStore = (name, content) => {
  if (!name) return;
  if (typeof content !== 'string') {
    content = JSON.stringify(content);
  }
  window.localStorage.setItem(name, content);
}

/**
 * 获取localStorage
 */
export const getLocalStore = name => {
  if (!name) return;
  return window.localStorage.getItem(name);
}

/**
 * 删除localStorage
 */
export const removeLocalStore = name => {
  if (!name) return;
  window.localStorage.removeItem(name);
}


/**
 * 存储sessionStorage
 */
export const setSessionStore = (name, content) => {
  if (!name) return;
  if (typeof content !== 'string') {
    content = JSON.stringify(content);
  }
  window.sessionStorage.setItem(name, content);
}

/**
 * 获取sessionStorage
 */
export const getSessionStore = name => {
  if (!name) return;
  return window.sessionStorage.getItem(name);
}

/**
 * 删除sessionStorage
 */
export const removeSessionStore = name => {
  if (!name) return;
  window.sessionStorage.removeItem(name);
}
