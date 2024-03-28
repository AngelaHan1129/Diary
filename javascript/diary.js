
var dateInput = document.getElementById('dateInput');

dateInput.addEventListener('focus', function() {
    dateInput.value = '';
    dateInput.setAttribute('placeholder', '年/月/日');
});

dateInput.addEventListener('blur', function() {
    if (dateInput.value === '') {
        dateInput.setAttribute('placeholder', '');
    }
});