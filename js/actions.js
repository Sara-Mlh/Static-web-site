document.getElementById('.button').addEventListener('click',function(){
    document.querySelector('.registrations-modal').style.display='flex';
});
document.querySelector('.close').addEventListener('click',function(){
    document.querySelector('.registrations-modal').style.display='none';
});