export const form = () => {
    let form = document.querySelector('.form'),
        buttonSubmit = form.querySelector('.button_submit');

    buttonSubmit.addEventListener('submit', (event) => {
        event.preventDefault();
        let data = new FormData(form);
        console.log(data);
        let output = "";
        for (const entry of data) {
            console.log(output = entry[0] + "=" + entry[1] + "\r");
        }
        event.preventDefault();
    }, false);
}
