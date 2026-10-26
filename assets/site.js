(function(){
 var BP=900;
 var d=document, de=d.documentElement;
 var drawer=d.getElementById('mobmenu'), overlay=d.getElementById('moboverlay'), hamb=d.querySelector('.hamb');
 function openM(){ if(!drawer) return; drawer.classList.add('open'); overlay.classList.add('open'); de.style.overflow='hidden'; hamb.setAttribute('aria-expanded','true'); var c=drawer.querySelector('.mob-close'); if(c) c.focus(); }
 function closeM(){ if(!drawer) return; drawer.classList.remove('open'); overlay.classList.remove('open'); de.style.overflow=''; hamb.setAttribute('aria-expanded','false'); }
 if(hamb){ hamb.addEventListener('click',openM); }
 if(overlay){ overlay.addEventListener('click',closeM); }
 if(drawer){ drawer.addEventListener('click',function(e){ var t=e.target; if(t.closest('.mob-close')||t.closest('a')) closeM(); }); }
 d.addEventListener('keydown',function(e){ if(e.key==='Escape'){ closeM(); } });
 window.addEventListener('resize',function(){ if(window.innerWidth>BP) closeM(); });
 var items=d.querySelectorAll('.faq-item');
 items.forEach(function(it){
  var q=it.querySelector('.faq-q'), a=it.querySelector('.faq-a');
  q.addEventListener('click',function(){
   var open=it.classList.toggle('open');
   q.setAttribute('aria-expanded',open?'true':'false');
   a.style.maxHeight=open?a.scrollHeight+'px':'0px';
  });
 });
 window.addEventListener('resize',function(){ items.forEach(function(it){ if(it.classList.contains('open')){ var a=it.querySelector('.faq-a'); a.style.maxHeight=a.scrollHeight+'px'; } }); });
})();
