// <!----------------------- BURGER MENU ----------------------->

const menu = document.querySelector('.menu__body');
const menuBtn = document.querySelector('.menu__icon');
const overlay = document.querySelector('.overlay');

const body = document.body;

if (menu && menuBtn) {
  menuBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
    menuBtn.classList.toggle('active');
    body.classList.toggle('lock');
    overlay.classList.toggle('active');
  });

  overlay.addEventListener('click', () => {
    menu.classList.remove('active');
    menuBtn.classList.remove('active');
    body.classList.remove('lock');
    overlay.classList.remove('active');
  });

  menu.querySelectorAll('.menu__link').forEach((link) => {
    link.addEventListener('click', () => {
      menu.classList.remove('active');
      menuBtn.classList.remove('active');
      body.classList.remove('lock');
      overlay.classList.remove('active');
    });
  });
}

// <!----------------------- CALL US ----------------------->
const TOKEN = '6364909368:AAE3c3vY6-0LZbSPqJZvDRH5MBCA9chyD4I';
const CHAT_ID = '-1001948266757';
const URL_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;
const success = document.getElementById('success');

document.getElementById('callUs').addEventListener('submit', function (e) {
  e.preventDefault();

  let weCallMessage = `<b>Заказ звонка:</b>\n`;
  weCallMessage += `<b>Имя: </b> ${this.name.value}\n`;
  weCallMessage += `<b>Телефон: </b> ${this.phone.value}\n`;

  axios
    .post(URL_API, {
      chat_id: CHAT_ID,
      parse_mode: 'html',
      text: weCallMessage,
    })
    .then((res) => {
      this.name.value = '';
      this.phone.value = '';
      weSuccess.style.display = 'block';
    })
    .catch((err) => {})
    .finnaly(() => {});
});

// <!----------------------- FREE TRIAL ----------------------->
const freeTrial = document.querySelector('.free-trial');
const freeTrialBtn = document.querySelector('.hero__btn');
// const ftTrialRemove = getElementById('ftSuccess')

freeTrialBtn.addEventListener('click', () => {
  freeTrial.classList.add('active');
  body.classList.toggle('lock');
  overlay.classList.toggle('active');
  // ftTrialRemove.style.display = 'none';

});

overlay.addEventListener('click', () => {
  freeTrial.classList.remove('active');
  body.classList.remove('lock');
  overlay.classList.remove('active');
});


document.getElementById('freeTrial').addEventListener('submit', function (e) {
  e.preventDefault();

  let freeTrialMessage = `<b>Попробовать бесплатно.</b>\n`;
  freeTrialMessage += `<b>Имя: </b> ${this.name.value}\n`;
  freeTrialMessage += `<b>Телефон: </b> ${this.phone.value}\n`;

  axios
    .post(URL_API, {
      chat_id: CHAT_ID,
      parse_mode: 'html',
      text: freeTrialMessage,
    })
    .then((res) => {
      this.name.value = '';
      this.phone.value = '';
      ftSuccess.style.display = 'block';
    })
    .catch((err) => {})
    .finnaly(() => {});
});

let tel1 = document.querySelector('.tel1');

tel1.addEventListener('focus', (_) => {
  if (!/^\+\d*$/.test(tel1.value)) tel1.value = '+7';
});

tel1.addEventListener('keypress', (e) => {
  if (!/\d/.test(e.key)) e.preventDefault();
});

let tel2 = document.querySelector('.tel2');

tel2.addEventListener('focus', (_) => {
  if (!/^\+\d*$/.test(tel2.value)) tel2.value = '+7';
});

tel2.addEventListener('keypress', (e) => {
  if (!/\d/.test(e.key)) e.preventDefault();
});
