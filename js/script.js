
document.querySelector('.enter-btn').addEventListener('click', () => {
    let input = Number(document.querySelector('.input-box').value);
    let result = 1;

    if (input >= 0) {
        for (let i = 1; i <= input; i++) {
            result *= i;
        }
        document.querySelector('.result-screen').innerHTML = `${input}! = ${result}`;
    } else {
        document.querySelector('.result-screen').innerHTML = "Please enter a non-negative number.";
    }
});


document.querySelectorAll('.nav-right button').forEach(button => {
    button.addEventListener('click', () => {
        const theme = button.getAttribute('data-bs-theme-value');
        if (theme === 'dark') {
            document.body.classList.remove('light');
            document.body.classList.add('dark');
            document.querySelector('.navbar').classList.add('dark');
            document.querySelector('footer').classList.add('dark');
        } else if (theme === 'light') {
            document.body.classList.remove('dark');
            document.body.classList.add('light');
            document.querySelector('.navbar').classList.remove('dark');
            document.querySelector('footer').classList.remove('dark');
        }
    });
});