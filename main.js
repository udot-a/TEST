fetch('samle.html')
    .then(response => response.text())
    .then(response => main.innerHTML = response)

fetch('samle.css')
    .then(response => response.text())
    .then(response => style.textContent = response)