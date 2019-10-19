fetch('sample.html')
    .then(response => response.text())
    .then(response => main.innerHTML = response)

fetch('sample.css')

    .then(response => response.text())
    .then(response => style.textContent = response)