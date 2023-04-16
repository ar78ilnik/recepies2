export const forms = () => {
    console.log('forms');
    const formes = document.querySelectorAll('form'),
        inputes = formes.querySelectorAll('input');

    formes.addEventListener('submit', (event) => {
        console.log('11');
    });
}
