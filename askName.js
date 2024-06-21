function askName() {
    const name = prompt("Введите ваше имя:");
    if (name) {
        localStorage.setItem('userName', name);
        greetUser(name);
    }
}
