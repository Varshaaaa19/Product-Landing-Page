document.querySelector('.hero button').addEventListener('click', function () {
    alert('Search for restaurant!');
});

function showLoginPage() {
    var loginPage = document.getElementById('loginPage');
    loginPage.classList.toggle('open');
}

function showLogin(event) {
    event.stopPropagation(); // Prevents the dropdown from closing
    var loginContent = document.getElementById('loginContent');
    loginContent.classList.toggle('open');
}

// Close the dropdown if clicked outside
window.onclick = function (event) {
    if (!event.target.matches('.user-icon img') && !event.target.matches('.down-arrow')) {
        var dropdowns = document.getElementsByClassName('user-dropdown');
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('open')) {
                openDropdown.classList.remove('open');
            }
        }
    }
};

// Toggle the visibility of the hidden inputs for date, time, and guests
document.querySelectorAll('.arrow').forEach(function (arrow) {
    arrow.addEventListener('click', function () {
        let hiddenInput = this.nextElementSibling;
        if (hiddenInput.style.display === 'none' || hiddenInput.style.display === '') {
            hiddenInput.style.display = 'block';
        } else {
            hiddenInput.style.display = 'none';
        }
    });
});

// Update the displayed values when a hidden input is changed
document.querySelectorAll('.hidden-input').forEach(function (input) {
    input.addEventListener('change', function () {
        let valueSpan = this.previousElementSibling.previousElementSibling;
        valueSpan.textContent = this.value;
        this.style.display = 'none';
    });
});
