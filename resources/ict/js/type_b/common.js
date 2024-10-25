function adjustPersonWrapLeft() {
    const personWrap = document.querySelector('.person_wrap');
    const loginDiv = document.querySelector('.user');
    const screenWidth = window.innerWidth;

    let loginWidth = 0;  
    let extraWidth = 0; 

    if (loginDiv) {
        loginWidth = loginDiv.getBoundingClientRect().width;

        
        if (screenWidth === 3840) {
            extraWidth = 54;
        } else if (screenWidth === 1920) {
            extraWidth = 54; 
        } else if (screenWidth === 1080) {
            extraWidth = 27; 
        } else if (screenWidth === 2160) {
            extraWidth = 27; 
        }
    }

    if (screenWidth === 3840) {
        if (loginDiv) {
        personWrap.style.left = loginDiv ? `${2878 - loginWidth - extraWidth}px` : '2380px';
        }else{
         personWrap.style.left = '2878px';  
        }
    } else if (screenWidth === 2160) {
        if (loginDiv) {
        personWrap.style.left = loginDiv ? `calc(55% - ${loginWidth + extraWidth}px)` : '33%';
        }else{
            personWrap.style.left = '55%';  
        }
    } else if (screenWidth === 1920) {
        if (loginDiv) {
        personWrap.style.left = loginDiv ? `${1439 - loginWidth - extraWidth}px` : '1190px';
        }else{
            personWrap.style.left = '1439px';    
        }
    } else if (screenWidth === 1080) {
        if (loginDiv) {
            personWrap.style.left = loginDiv ? `calc(55% - ${loginWidth + extraWidth}px)` : '33%';
            }else{
                personWrap.style.left = '55%';  
            }
    }
}

window.addEventListener('load', adjustPersonWrapLeft);
window.addEventListener('resize', adjustPersonWrapLeft);
