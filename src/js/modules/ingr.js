export const ingr = () => {
    let options = document.querySelectorAll('.cal');
    let optval = [];
    let i = 0;
    for (opt of options) {
        optval[i] = opt.textContent;
        i++;
    }
    i = 0;
    for (opt of options) {
        opt.textContent = optval[i] * 2;
        i++;
    }

    function personSum() {
        let sum = document.getElementById('doses').value;

        i = 0;
        for (opt of options) {
            opt.textContent = optval[i] * sum;
            i++;
        }

    }
}
