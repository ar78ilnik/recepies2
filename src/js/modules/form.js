export const forms = () => {
    console.log('forms');
    const formes = document.querySelectorAll('form'),
        inputes = formes.querySelectorAll('input');

    const message = {
        loading: 'Loading...',
        success: 'Thank you...',
        failure: 'Sorry, same thing is wrong...'
    }

    formes.forEach(item => {
        item.addEventListener('submit', (e) => {
            e.preventDefault();
        });
    })
}
