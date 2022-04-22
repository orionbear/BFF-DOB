const count = document.getElementById('count');
const driveCon = document.getElementById('drive-Con');

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
  })
}

function SetDriveHeight(){
  console.log(height);

  count.style.width = width + 'px';
  


  
}