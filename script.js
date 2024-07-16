// for changing image on clicking cards




// for changing color of cards on hovering
document.getElementById('card1').addEventListener('mouseover', ()=>{
    document.getElementById('card1').style.backgroundColor = '#F1244C';
    document.getElementById('card1').style.color = 'white';
});
document.getElementById('card1').addEventListener('mouseout', ()=>{
    document.getElementById('card1').style.backgroundColor = 'rgb(227, 233, 232)';
    document.getElementById('card1').style.color = 'black';
});
document.getElementById('card2').addEventListener('mouseover', ()=>{
    document.getElementById('card2').style.backgroundColor = '#F1244C';
    document.getElementById('card2').style.color = 'white';
});
document.getElementById('card2').addEventListener('mouseout', ()=>{
    document.getElementById('card2').style.backgroundColor = 'rgb(227, 233, 232)';
    document.getElementById('card2').style.color = 'black';
});
document.getElementById('card3').addEventListener('mouseover', ()=>{
    document.getElementById('card3').style.backgroundColor = '#F1244C';
    document.getElementById('card3').style.color = 'white';
});
document.getElementById('card3').addEventListener('mouseout', ()=>{
    document.getElementById('card3').style.backgroundColor = 'rgb(227, 233, 232)';
    document.getElementById('card3').style.color = 'black';
});
document.querySelectorAll('.cards').forEach(item => {
    item.addEventListener('click', function() {
        document.querySelectorAll('.cards').forEach(i => i.classList.remove('active'));
        this.classList.add('active');
        const newImageSrc = this.getAttribute('data-image');
        document.querySelector('.image img').src = newImageSrc;
    });
});