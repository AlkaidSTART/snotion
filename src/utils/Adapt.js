function SetSreen() {
    const screenWidth = document.documentElement.clientWidth;
    const basefont = 16;
    const dfont = basefont + (screenWidth - 1200) / 100 * 0.5;
    const minFont = 12;
    const maxFont = 24;
    const finalFont = Math.max(Math.min(dfont, maxFont), minFont);
    document.documentElement.style.fontSize = finalFont + 'px';
}
SetSreen();
window.addEventListener('resize', SetSreen);
export default SetSreen;