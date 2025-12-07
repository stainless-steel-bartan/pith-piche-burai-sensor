document.getElementById('userForm').addEventListener('submit', function(e) {
    e.preventDefault();
    

    const gender = document.getElementById('gender').value;
    const age = document.getElementById('age').value;
    const married = document.getElementById('married').value;
    

    localStorage.setItem('userGender', gender);
    localStorage.setItem('userAge', age);
    localStorage.setItem('userMarried', married);
    

    window.location.href = 'index.html';
});