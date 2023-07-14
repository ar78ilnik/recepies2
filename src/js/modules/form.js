export const form = () => {
    let search = document.querySelector('.search');

    search.addEventListener('submit', (event) => {
        let data = new FormData(search);
        console.log(data);
        let output = "";
        for (const entry of data) {
            console.log(output = entry[0] + "=" + entry[1] + "\r");
        }
        event.preventDefault();
    }, false);
}
