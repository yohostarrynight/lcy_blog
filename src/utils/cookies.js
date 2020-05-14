function getCookie(name) {
  const cookies = document.cookie;
  const list = cookies.split('; ');
  for (let i = 0; i < list.length; i++) {
    const arr = list[i].split('=');
    if (arr[0] === name) {
      return decodeURIComponent(arr[1]);
    }
  }
  return '';
}

export { getCookie };
