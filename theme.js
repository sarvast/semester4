document.addEventListener('DOMContentLoaded', () => {
    // 1. Create and Insert Button
    const navList = document.querySelector('nav ul');
    if (navList) {
        const li = document.createElement('li');
        const btn = document.createElement('button');
        btn.id = 'theme-toggle';
        btn.style.background = 'transparent';
        btn.style.border = 'none';
        btn.style.color = 'var(--text-main)'; // Use variable so it switches automatically
        btn.style.cursor = 'pointer';
        btn.style.fontSize = '1.1rem';
        btn.style.padding = '0.5rem';
        btn.style.marginLeft = '10px';
        btn.style.transition = 'color 0.3s ease';
        btn.setAttribute('aria-label', 'Toggle Dark Mode');
        
        // Initial Icon (will be updated by applyTheme)
        btn.innerHTML = '<i class="fas fa-moon"></i>';
        
        btn.addEventListener('click', toggleTheme);
        li.appendChild(btn);
        navList.appendChild(li);
    }

    // 2. Check and Apply Theme on Load
    const savedTheme = localStorage.getItem('theme') || 'light';
    applyTheme(savedTheme);
});

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    applyTheme(newTheme);
}

function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    
    const btn = document.getElementById('theme-toggle');
    if (btn) {
        if (theme === 'dark') {
            btn.innerHTML = '<i class="fas fa-sun"></i>';
            btn.style.color = '#f59e0b'; // Sun color
        } else {
            btn.innerHTML = '<i class="fas fa-moon"></i>';
            btn.style.color = 'var(--text-main)';
        }
    }
}