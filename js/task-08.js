const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', hendleSubmite);

function hendleSubmite(event) {
    event.preventDefault();
    const {
        elements: { email, password },
    } = event.currentTarget;

    if (email.value === '' || password.value === '') {
        const massage = 'Please fill in all the fields!';
        return alert(massage);
    }
    const formSubmit = {
        email: email.value,
        password: password.value,
    };
    console.log(formSubmit);
    event.currentTarget.reset();
}
