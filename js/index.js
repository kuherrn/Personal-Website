const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
const currentTheme = localStorage.getItem('theme');
const text = document.querySelectorAll('.text');
const pane = document.querySelectorAll('.pane');


if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
    }
}

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        text.forEach(text => text.style.color = "white");
        pane.forEach(pane => pane.style.backgroundColor = '#2e2e2e')
    }
    else {        
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        text.forEach(text => text.style.color = "black");
        pane.forEach(pane => pane.style.backgroundColor = '#eee')
    }    
}

toggleSwitch.addEventListener('change', switchTheme, true);

