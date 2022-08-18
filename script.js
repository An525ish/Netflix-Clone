var tabs = document.querySelectorAll('.tabs');
var tabItems = document.querySelectorAll('.tab-items');

tabs.forEach(item => item.addEventListener('click', addBorder))
function addBorder(e){
    rmvborder();
    this.classList.add('tab-border');
    hideDisplay();
    var toShow = document.querySelector(`#${this.id}-cntnt`);
    toShow.classList.add('show');
}

function rmvborder(){
    tabs.forEach(item => item.classList.remove('tab-border'));
}

function hideDisplay(){
    tabItems.forEach(item => item.classList.remove('show'));
}