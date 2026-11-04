if (window.location.hash) {
  history.replaceState(null, "", window.location.pathname);
  window.scrollTo(0, 0);
}

