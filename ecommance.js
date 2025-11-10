function openPage(title, description) {
  document.getElementById('overlay-title').innerText = title;
  document.getElementById('overlay-description').innerText = description;
  document.getElementById('overlay-page').style.display = 'flex';
}

function closePage() {
  document.getElementById('overlay-page').style.display = 'none';
}
