window.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('gameCanvas');
    const ctx = canvas.getContext('2d');


    const btn1 = document.getElementById('btn1');
    const btn2 = document.getElementById('btn2');


    btn1.addEventListener('click', () => {
        window.open('https://alyn-istic.itch.io/crumbling-corpses');
    });


    btn2.addEventListener('click', () => {
        window.open('https://sluo1.itch.io/dead-and-decayed-pt1 ');
    });
});
