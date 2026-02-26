/**
 * Course Chatbot - Embeddable Avatar Widget
 * Updated: Saudi Avatar ("Adeeb")
 */
(function () {
  'use strict';

  const CHATBOT_URL = 'https://course-chatbot1.onrender.com/';
  const WIDGET_ID = '__course-chatbot-widget__';

  if (document.getElementById(WIDGET_ID)) return;

  const style = document.createElement('style');
  style.textContent = `
    @import url('https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700&display=swap');

    #${WIDGET_ID} * { box-sizing: border-box; font-family: 'Cairo', sans-serif; }

    #__cwb {
      position: fixed;
      bottom: 28px;
      right: 28px;
      width: 120px;
      height: 160px;
      border-radius: 12px;
      background: transparent;
      box-shadow: none;
      cursor: pointer;
      border: none;
      padding: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 2147483646;
      transition: transform .25s cubic-bezier(.34,1.56,.64,1);
      overflow: visible;
    }
    #__cwb:hover { transform: scale(1.1); }

    #__cwb .avatar-img {
       width: 100%;
       height: 100%;
       object-fit: contain;
       background: transparent;
       transition: opacity .3s;
    }
    #__cwb .icon-close {
      display: none;
      position: absolute;
      top: 5px;
      right: 5px;
      background: rgba(0,0,0,0.5);
      color: #fff;
      width: 24px;
      height: 24px;
      border-radius: 50%;
      align-items: center;
      justify-content: center;
      font-size: 18px;
      font-weight: bold;
      z-index: 2;
    }
    #__cwb.open .icon-close { display: flex; }

    #__cw-badge {
      position: absolute;
      top: 5px;
      right: 5px;
      width: 26px;
      height: 26px;
      background: #FF4E6A;
      border: 2px solid #fff;
      border-radius: 50%;
      font-size: 14px;
      font-weight: 800;
      color: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      opacity: 0;
      transform: scale(0);
      z-index: 3;
      transition: all .3s cubic-bezier(.34,1.56,.64,1);
      box-shadow: 0 4px 10px rgba(255, 78, 106, 0.4);
    }
    #__cw-badge.show { opacity: 1; transform: scale(1); }

    #__cwp {
      position: fixed;
      bottom: 110px;
      right: 80px;
      width: 400px;
      height: 620px;
      border-radius: 24px;
      overflow: hidden;
      box-shadow: 0 24px 80px rgba(0,0,0,.3);
      z-index: 2147483645;
      display: flex;
      flex-direction: column;
      transform: scale(.8) translateY(40px);
      transform-origin: bottom right;
      opacity: 0;
      pointer-events: none;
      transition: all .4s cubic-bezier(.34,1.56,.64,1);
      border: 1px solid rgba(255,255,255,0.1);
    }
    #__cwp.open { transform: scale(1) translateY(0); opacity: 1; pointer-events: all; }

    #__cwp-header {
      background: linear-gradient(135deg, #6C63FF 0%, #3ECFCF 100%);
      padding: 16px 20px;
      display: flex;
      align-items: center;
      gap: 14px;
      color: #fff;
    }
    #__cwp-avatar-wrap {
      width: 80px;
      height: 100px;
      border-radius: 8px;
      border: 2px solid rgba(255,255,255,0.5);
      overflow: hidden;
      background: transparent;
    }
    #__cwp-avatar-wrap img { width: 100%; height: 100%; object-fit: contain; }

    #__cwp-name { font-weight: 700; font-size: 16px; }
    #__cwp-status { font-size: 12px; opacity: 0.9; display: flex; align-items: center; gap: 6px; }
    .dot { width: 8px; height: 8px; border-radius: 50%; background: #4ade80; }

    #__cwp-body { flex: 1; background: #fff; position: relative; }
    #__cwp-iframe { width: 100%; height: 100%; border: none; }

    @media (max-width: 480px) {
      #__cwp { right: 0; bottom: 0; width: 100%; height: 100%; border-radius: 0; }
    }
  `;
  document.head.appendChild(style);

  const root = document.createElement('div');
  root.id = WIDGET_ID;
  document.body.appendChild(root);

  const btn = document.createElement('button');
  btn.id = '__cwb';
  btn.innerHTML = `
    <img src="/adeeb_full.png" alt="أديب" class="avatar-img">
    <span class="icon-close">×</span>
    <span id="__cw-badge">1</span>
  `;
  root.appendChild(btn);

  const panel = document.createElement('div');
  panel.id = '__cwp';
  panel.innerHTML = `
    <div id="__cwp-header">
      <div id="__cwp-avatar-wrap">
        <img src="adeeb_full.png" alt="أديب">
      </div>
      <div>
        <div id="__cwp-name">أديب - المساعد الذكي</div>
        <div id="__cwp-status"><span class="dot"></span> متصل الآن</div>
      </div>
    </div>
    <div id="__cwp-body">
      <iframe id="__cwp-iframe" src=""></iframe>
    </div>
  `;
  root.appendChild(panel);

  const badge = btn.querySelector('#__cw-badge');
  const iframe = panel.querySelector('#__cwp-iframe');
  let loaded = false;

  setTimeout(() => badge.classList.add('show'), 3000);

  btn.onclick = () => {
    const open = panel.classList.toggle('open');
    btn.classList.toggle('open');
    badge.classList.remove('show');
    if (open && !loaded) {
      iframe.src = CHATBOT_URL;
      loaded = true;
    }
  };
})();


