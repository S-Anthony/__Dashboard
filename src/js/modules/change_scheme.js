export default function changeScheme () {
    const changeSchemeBtn = document.querySelector('[data-change-scheme]');
    const htmlBlock = document.documentElement;
    let currentScheme = localStorage.getItem('colorScheme') || 'dark';

    function setColorScheme(newScheme = currentScheme, oldScheme) {
        htmlBlock.classList.remove(oldScheme);
        htmlBlock.classList.add(newScheme);
        currentScheme = newScheme;
        localStorage.setItem('colorScheme', newScheme);
    }

    function toggleScheme() {
        const newScheme = currentScheme === 'dark' ? 'light' : 'dark';
        setColorScheme(newScheme, currentScheme);
    }

    setColorScheme();

    changeSchemeBtn.addEventListener('click', () => {
        toggleScheme();
    });
}
