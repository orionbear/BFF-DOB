const count = document.getElementById('count');
const snow = document.getElementById('snow');
const animation = document.getElementById('animation');
const road = document.getElementById('road');
const character = document.getElementById('character');
const giftbox = document.getElementById('giftbox');
const merrywrap = document.getElementById('merrywrap');
const mangabox = document.getElementById('mangabox');
const body = document.body;

const width = window.innerWidth;
const height = window.innerHeight;

const config = {
  birthdate: 'May 21, 2022',
  name: 'Name'
};

Init();

function Init() {
  SetupCoundown();
  SetDriveHeight();
}

function SetupCoundown() {

  const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;

  let countDown = new Date(`${config.birthdate} 00:00:00`).getTime();
  console.log(countDown);

  x = setInterval(function () {
    let now = new Date().getTime(),
      distance = countDown - now;

    document.getElementById('day').innerText = Math.floor(distance / day);
    document.getElementById('hour').innerText = Math.floor(
      (distance % day) / hour
    );
    document.getElementById('minute').innerText = Math.floor(
      (distance % hour) / minute
    );
    document.getElementById('second').innerText = Math.floor(
      (distance % minute) / second
    );
    if(distance <0){
      showGift()
      clearInterval(x);
    }

  })
}

function SetDriveHeight() {

  count.style.width = width + 'px';
}
//hideAll()
function hideAll() {
  count.style.display = 'None';
  snow.style.display = 'None';
  animation.style.display = 'None';
  road.style.display = 'None';
  character.style.display = 'None';
}
box();
merrywrap.style.display = "None";
function box() {
  
  let box = merrywrap.getElementsByClassName('giftbox')[0];
  let step = 1;
  let stepMinutes = [2000, 2000, 1000, 1000];

  function stepClass(step) {
    merrywrap.className = 'merrywrap';
    merrywrap.className = 'merrywrap step-' + step;
  }

  function init() {
    box.addEventListener('click', openBox, false);
  }

  function openBox() {
    giftbox.style.animation = '';
    if (step === 1) {
      box.removeEventListener('click', openBox, false);
    }
    stepClass(step);
    if (step === 3) {
    }
    if (step === 4) {   
      showTime()
      return;
    }
    setTimeout(openBox, stepMinutes[step - 1]);
    step++;
    //   setTimeout(anim, 1900);
  }
  init()
}

function setBody(){
  body.style.display = "flex";
  body.style.align = "center";
  body.style.position = "";

}

function showGift(){
  //Step 1
  merrywrap.style.display = "initial";

  //Step 2
  hideAll();

  //Step 3
  setBody()
 
}

function showTime(){  
  body.style.backgroundImage = 'linear-gradient(120deg, #f093fb 0%, #f5576c 100%)';
  mangabox.style.display = "initial";
  
}