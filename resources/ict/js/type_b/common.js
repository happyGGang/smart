function adjustPersonWrapLeft() {
    const personWrap = document.querySelector('.person_wrap');
    const loginDiv = document.querySelector('.login');
    const screenWidth = window.innerWidth;

    if (screenWidth === 3840) {
        if (loginDiv) {
            personWrap.style.left = '2380px';
        } else {
            personWrap.style.left = '2878px';
        }
    } else if (screenWidth === 2160) {
        if (loginDiv) {
            personWrap.style.left = '33%';
        } else {
            personWrap.style.left = '55%';
        }
    } else if (screenWidth === 1920) {
        if (loginDiv) {
            personWrap.style.left = '1190px';
        } else {
            personWrap.style.left = '1439px';
        }
    } else if (screenWidth === 1080) {
        if (loginDiv) {
            personWrap.style.left = '33%';
        } else {
            personWrap.style.left = '55%';
        }
    }
}

window.addEventListener('load', adjustPersonWrapLeft);
window.addEventListener('resize', adjustPersonWrapLeft);
