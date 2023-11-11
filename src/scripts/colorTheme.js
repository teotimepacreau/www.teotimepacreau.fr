// select
const colorThemes = document.querySelectorAll('[name="theme"]');

// store theme in local storage
const storeTheme = function (theme) {
  localStorage.setItem("theme", theme);
};

//change theme value in local storage on click
colorThemes.forEach((themeOption) => {
  themeOption.addEventListener("click", () => {
    storeTheme(themeOption.id);
    // fallback for no :has() support
    document.documentElement.className = themeOption.id;
  });
});

// set theme when visitor returns
const setTheme = function () {
  const activeTheme = localStorage.getItem("theme");
  colorThemes.forEach((themeOption) => {
    if (themeOption.id === activeTheme) {
      themeOption.checked = true;
    }
  });
  // fallback for no :has() support
  document.documentElement.className = activeTheme;
};



document.onload = setTheme();
