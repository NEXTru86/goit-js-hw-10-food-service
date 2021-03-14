import './styles.css';

const refs = {
    themeSwitch: document.querySelector('#theme-switch-toggle'),
    themeBody: document.querySelector('body'),
};

refs.themeSwitch.addEventListener('change', onThemeSwitchToggleClick);

const theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const activeTheme = {}

onActiveTheme();

function onThemeSwitchToggleClick(event) {

  if (event.target.checked) {
    activeTheme.theme = theme.DARK,
      refs.themeBody.classList.replace(theme.LIGHT, theme.DARK) ||
      refs.themeBody.classList.add(activeTheme.theme)
  } else {
    activeTheme.theme = theme.LIGHT,
      refs.themeBody.classList.replace(theme.DARK, theme.LIGHT) ||
      refs.themeBody.classList.add(activeTheme.theme)
  };
    
  localStorage.setItem('activeThem', JSON.stringify(activeTheme));
  localStorage.setItem('checked', event.target.checked);
};

function onActiveTheme() {
  const getActiveThem = localStorage.getItem('activeThem');
  const getActiveChecked = localStorage.getItem('checked');
  
  if (getActiveThem) {
    activeTheme.theme = JSON.parse(getActiveThem).theme;
    refs.themeBody.classList.add(activeTheme.theme);
    refs.themeSwitch.checked = JSON.parse(getActiveChecked);
  };
};