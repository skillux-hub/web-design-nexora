(() => {
  'use strict';
  const $ = s => document.querySelector(s), $$ = s => [...document.querySelectorAll(s)];
  const root = document.documentElement, reduced = matchMedia('(prefers-reduced-motion: reduce)');
  let mode = root.dataset.motionMode || 'auto', paused = false, hover = false, focus = false, slide = 0, timer;
  const titles = ['Websites that move<br>business forward.', 'Digital platforms.<br>Connected thinking.'];
  const descriptions = ['Bring your brand, products and people together.<br>A better digital experience starts here.', 'Make everyday interactions feel effortless.<br>Useful technology, designed around your business.'];
  const motionEnabled = () => mode === 'full' || (mode === 'auto' && !reduced.matches);
  function schedule() {
    clearInterval(timer);
    $('.platform').style.animationPlayState = paused || document.hidden ? 'paused' : 'running';
    if (motionEnabled() && !paused && !hover && !focus && !document.hidden) timer = setInterval(() => showSlide((slide + 1) % 2), 6500);
    $('#play').textContent = !motionEnabled() || paused ? 'Play' : 'Pause';
    $('#play').setAttribute('aria-label', !motionEnabled() || paused ? 'Play slideshow' : 'Pause slideshow');
  }
  function setMode(value) { mode = value; root.dataset.motionMode = value; root.classList.toggle('motion-off', !motionEnabled()); $('#motion').value = value; schedule(); }
  function showSlide(value) {
    slide = value; $('.hero').classList.toggle('alt', slide === 1); $('h1').innerHTML = titles[slide]; $('#hero-description').innerHTML = descriptions[slide];
    $$('.dot').forEach((b,i) => { b.classList.toggle('active',i === slide); b.setAttribute('aria-pressed', String(i === slide)); });
    if (motionEnabled()) { $('.hero-copy').classList.remove('panel-enter'); void $('.hero-copy').offsetWidth; $('.hero-copy').classList.add('panel-enter'); }
  }
  $('#next').onclick = () => {showSlide((slide+1)%2);schedule();};
  $('#previous').onclick = () => {showSlide((slide+1)%2);schedule();};
  $$('.dot').forEach(b => b.onclick = () => {showSlide(Number(b.dataset.slide));schedule();});
  $('#play').onclick = () => { if (!motionEnabled()) {paused=false;setMode('full');} else {paused=!paused;schedule();} };
  $('.hero').addEventListener('mouseenter', () => {hover=true;schedule();});
  $('.hero').addEventListener('mouseleave', () => {hover=false;schedule();});
  $('.hero').addEventListener('focusin', () => {focus=true;schedule();});
  $('.hero').addEventListener('focusout', e => { if (!$('.hero').contains(e.relatedTarget)) {focus=false;schedule();} });
  document.addEventListener('visibilitychange',schedule);
  reduced.addEventListener('change', () => setMode(mode));
  $('#motion').onchange = e => setMode(e.target.value); setMode(mode);
  if (motionEnabled()) $('.hero-copy').classList.add('panel-enter');
  function updateHeader(){ $('header').classList.toggle('scrolled',scrollY>50); }
  window.addEventListener('scroll',updateHeader,{passive:true});updateHeader();
  function closeMenu(){ $('nav').classList.remove('open');$('.menu').setAttribute('aria-expanded','false'); }
  $('.menu').onclick = () => {const open=$('nav').classList.toggle('open');$('.menu').setAttribute('aria-expanded',String(open));};
  $$('nav a').forEach(a => a.addEventListener('click',closeMenu));
  document.addEventListener('keydown', e => {if(e.key==='Escape')closeMenu();});
  const services = [
    ['Your brand, beautifully connected.','A distinctive website gives your business a home. We shape your story, organize your content and build an experience that helps visitors take the next step.'],
    ['A better way to browse and buy.','Help people find the right product with clear collections, useful details and a thoughtful purchase journey. Plan your catalogue, payment provider and fulfilment together.'],
    ['Technology that fits your work.','Turn complex requirements into a straightforward platform. Map your workflows, connect the tools you use and give your team a more useful everyday experience.'],
    ['Great experiences, on the move.','Build for the moments that matter on a small screen. Responsive interfaces and focused journeys make your services useful wherever your customers are.']
  ];
  function selectService(index,moveFocus=false){
    $$('[data-service]').forEach((b,i)=>{b.setAttribute('aria-selected',String(i===index));b.tabIndex=i===index?0:-1;if(i===index&&moveFocus)b.focus();});
    $('#service-title').textContent=services[index][0];$('#service-description').textContent=services[index][1];$('#service-panel').setAttribute('aria-labelledby','tab-'+index);
    const panel=$('.service-text');panel.classList.remove('panel-enter');if(motionEnabled()){void panel.offsetWidth;panel.classList.add('panel-enter');}
  }
  $$('[data-service]').forEach((b,i)=>{b.onclick=()=>selectService(i);b.onkeydown=e=>{let n=i;if(['ArrowDown','ArrowRight'].includes(e.key))n=(i+1)%4;else if(['ArrowUp','ArrowLeft'].includes(e.key))n=(i+3)%4;else if(e.key==='Home')n=0;else if(e.key==='End')n=3;else return;e.preventDefault();selectService(n,true);};});
  $$('[data-filter]').forEach(b=>b.onclick=()=>{
    $$('[data-filter]').forEach(x=>{x.classList.toggle('selected',x===b);x.setAttribute('aria-pressed',String(x===b));});
    let count=0;$$('[data-project]').forEach(card=>{card.hidden=b.dataset.filter!=='All'&&card.dataset.category!==b.dataset.filter;if(!card.hidden)count++;});$('.result-count').textContent=count+' project'+(count===1?'':'s');
  });
  const dialog=$('#detail');let opener;
  function openDetail(button,title,description,media){opener=button;$('#detail-title').textContent=title;$('#detail-description').textContent=description;$('#detail-media').replaceChildren();if(media)$('#detail-media').append(media);dialog.showModal();document.body.style.overflow='hidden';}
  $$('[data-project]').forEach(b=>b.onclick=()=>{const media=b.querySelector('.project-preview').cloneNode(true);openDetail(b,b.querySelector('.project-copy strong').textContent,'A concept direction for '+b.dataset.category.toLowerCase()+'. The layout pairs a clear brand story with practical navigation and a responsive content structure. Use this direction as a starting point for a project brief.',media);});
  $$('[data-detail]').forEach(b=>b.onclick=()=>openDetail(b,b.dataset.detail,b.dataset.description));
  $('#close-dialog').onclick=()=>dialog.close();dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close();}});
  dialog.addEventListener('close',()=>{document.body.style.overflow='';opener?.focus();});
  $('#discuss').onclick=()=>{dialog.close();location.hash='contact';$('#inquiry input').focus({preventScroll:true});};
  let downloadUrl;
  $('#inquiry').addEventListener('submit',e=>{e.preventDefault();const data=new FormData(e.currentTarget);const text='Project brief\n\nName: '+data.get('name')+'\nEmail: '+data.get('email')+'\n\nProject:\n'+data.get('brief');if(downloadUrl)URL.revokeObjectURL(downloadUrl);downloadUrl=URL.createObjectURL(new Blob([text],{type:'text/plain;charset=utf-8'}));$('#download').href=downloadUrl;$('#download').hidden=false;$('#form-status').textContent='Your brief is ready to download. Nothing has been sent.';});
  $('#year').textContent=new Date().getFullYear();
  const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){if(motionEnabled()){entry.target.classList.remove('entering');void entry.target.offsetWidth;entry.target.classList.add('entering');}}else entry.target.classList.remove('entering');}),{threshold:.1});
  $$('.reveal').forEach((el,i)=>{el.style.animationDelay=(i%4)*65+'ms';observer.observe(el);});
})();
