function submitName() {
    const newName = document.getElementById('name-input').value.trim();
    const errorMessage = document.getElementById('error-message');
    if (newName === "") {
        errorMessage.textContent = "Nama tidak boleh kosong!";
    } else {
        const userNameElement = document.getElementById('user-name');
        userNameElement.textContent = newName;
        errorMessage.textContent = "";
    }
}