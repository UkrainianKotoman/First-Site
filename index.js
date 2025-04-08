function changeFontSize(step) {
    let body = document.body;

    let currentSize = parseFloat(window.getComputedStyle(body, null).getPropertyValue('font-size'));
    
    body.style.fontSize = (currentSize + step) + 'px';
} 
