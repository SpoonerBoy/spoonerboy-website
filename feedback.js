document.getElementById('feedbackForm').addEventListener('submit', e => {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(e.target));
  const store = JSON.parse(localStorage.getItem('feedback') || '[]');
  store.push({...data, ts: Date.now()});
  localStorage.setItem('feedback', JSON.stringify(store));

  e.target.hidden = true;
  document.getElementById('thanks').hidden = false;
});
