
document.addEventListener('DOMContentLoaded', () => {
  let count = localStorage.getItem('visitor-count') || 0;
  count++;
  localStorage.setItem('visitor-count', count);
  document.getElementById('counter').textContent = count;
});
