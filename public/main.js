const update = document.querySelector("#update-button");
const deleteButton = document.querySelector("#delete-button");
const messageDiv = document.querySelector('#message')

update.addEventListener('click', _ => {
    fetch('/quotes', {
            "method": 'put',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name: 'Abbas',
                quote: 'Here I replace your quote.'
            })
        })
        .then(res => {
            if (res.ok) return res.json()
        })
        .then(response => {
            window.location.reload(true);
        })
});

deleteButton.addEventListener('click', _ => {
    fetch('/quotes', {
            "method": 'delete',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name: 'Abbas'
            })
        })
        .then(res => {
            if (res.ok) return res.json
        })
        .then(response => {
            if (response === 'No quotes to delete') {
                messageDiv.textContent = 'No more quotes to delete!';
            } else {
                window.location.reload();
            }
        })
});