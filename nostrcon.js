function hasUndefined(obj) {
  for (let key in obj) {
    if (typeof obj[key] === 'undefined') {
      return true;
    }
  }
  return false;
}
