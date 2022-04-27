window.addEventListener('load', function () {
  const getRandInRange = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  }

  const number = 175
  const site = `https://lifeforms.supply/embed/${number}`;

  const horizontal = getRandInRange(0, window.innerWidth/2);
  const vertical = getRandInRange(100, window.innerHeight-100);

  let inner;

  inner = document.createElement("iframe"); 
  inner.setAttribute('src', site);
  inner.setAttribute('scrolling', "no");
  inner.setAttribute('title', "Lifeforms");
  inner.style.width = '1000px';
  inner.style.height = '500px';
  inner.style.overflow = 'hidden';

  const arrow = document.createElement("img"); 
  arrow.setAttribute('src', 'https://possible.social/arrow.png');
  arrow.style.position = 'fixed';
  arrow.style.width = '30px';
  arrow.style.top = `${vertical+15}px`;
  arrow.style.left = `${horizontal}px`;
  arrow.style.zIndex = "110";

  const question = document.createElement("img"); 
  question.setAttribute('src', 'https://possible.social/question.png');
  question.style.position = 'fixed';
  question.style.width = '25px';
  question.style.top = `${vertical+55}px`;
  question.style.left = `${horizontal}px`;
  question.style.zIndex = "110";

  const a = document.createElement("a"); 
  a.setAttribute('href', `https://lifeforms.supply/${number}`);
  a.appendChild(arrow);

  const a2 = document.createElement("a"); 
  a2.setAttribute('href', "https://lifeforms.supply");
  a2.appendChild(question);

  const portal = document.createElement("div"); 
  portal.style.width = '140px';
  portal.style.height = '150px';
  portal.style.border = 'white';
  portal.style.borderStyle = 'solid';
  portal.style.borderWidth = '10px';
  portal.style.overflow = 'auto';
  portal.style.position = 'fixed';
  portal.style.webkitOverflowScrolling = "touch";
  portal.style.top = `${vertical}px`
  portal.style.left = `${horizontal}px`
  portal.style.zIndex = "100"
  portal.appendChild(inner);

  document.getElementsByTagName('body')[0].appendChild(portal);
  document.getElementsByTagName('body')[0].appendChild(a);
  document.getElementsByTagName('body')[0].appendChild(a2);
})