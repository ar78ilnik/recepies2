export const func = () => {
    console.log('1');
    const header = document.querySelector('.header');
    const buttonMenu = header.querySelector('.button_menu');
    const listHeader = header.querySelector('.list_header');

    buttonMenu.addEventListener('click', () => {
        let expanded = buttonMenu.getAttribute('aria-expanded') === 'true' || false;
        buttonMenu.setAttribute('aria-expanded', !expanded);
        buttonMenu.classList.toggle('button_menu--open');
        listHeader.classList.toggle('list_header--open');
    })
}
