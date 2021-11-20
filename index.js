function submit() {
    const app = document.getElementById('app');
    const list = document.createElement('li');
    list.className = 'col-md-5 offset-md-3 mt-2 p-2 bg-success text-white border border-2 border-dark';
    let span = document.createElement('span');
    let text = document.getElementById('text');
    let value = text.value;
    span.textContent = value;
    let button = document.createElement('button');
    button.className = 'border border-dark border-2 float-end';
    button.textContent = 'Delete';
    list.appendChild(span);
    list.appendChild(button);
    app.appendChild(list);
    button.addEventListener('click', function (e) {
        app.removeChild(list);
    });
}
//# sourceMappingURL=index.js.map