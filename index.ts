function submit() {
    const app = document.getElementById('app') as HTMLUListElement;

    const list = document.createElement('li') as HTMLElement;
    list.className = 'col-md-5 offset-md-3 mt-2 p-2 bg-success text-white border border-2 border-dark';

    let span = document.createElement('span') as HTMLSpanElement;
    let text = document.getElementById('text') as HTMLInputElement;
    let value = text.value;
    span.textContent = value;

    let button = document.createElement('button') as HTMLButtonElement;
    button.className = 'border border-dark border-2 float-end';
    button.textContent = 'Delete';

    list.appendChild(span);
    list.appendChild(button);
    app.appendChild(list);

    button.addEventListener('click', function(e){
        app.removeChild(list);
    })
}