function qClass(q){
  if(!q) return 'q-na';
  const value=q.toLowerCase();
  if(value.includes('high')) return 'q-high';
  if(value.includes('cd')) return 'q-cd';
  if(value.includes('low')) return 'q-low';
  if(value.includes('record')) return 'q-rec';
  if(value.includes('confirm')) return 'q-conf';
  if(value.includes('not avail')||value.includes('unavail')) return 'q-na';
  return 'q-other';
}

function escapeHTML(value=''){
  return String(value).replace(/[&<>"]/g,char=>({
    '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'
  })[char]);
}

let allData=null;
let currentTab='u';
let currentLabel='songs';
let searchTimer;

function loadData(){
  allData=JSON.parse(atob(RAW));
}

document.addEventListener('keydown',event=>{
  const search=document.getElementById('search-box');
  if(event.key==='/' && document.activeElement!==search){
    event.preventDefault();
    search.focus();
  }
  if(event.key==='Escape' && document.activeElement===search){
    search.blur();
  }
});

window.addEventListener('scroll',()=>{
  const button=document.getElementById('scroll-top');
  button.classList.toggle('visible',window.scrollY>500);
},{passive:true});

function goToTop(){
  window.scrollTo({top:0,behavior:'smooth'});
}

function dismissShopNotice(){
  document.getElementById('shop-popup')?.classList.add('hidden');
}

function switchTab(key,label){
  if(key===currentTab) return;

  currentTab=key;
  currentLabel=label;

  document.querySelectorAll('.nav-tab').forEach(button=>{
    button.classList.toggle('active',button.dataset.tab===key);
  });

  const search=document.getElementById('search-box');
  search.value='';

  const list=document.getElementById('era-list');
  list.classList.remove('switching');
  void list.offsetWidth;
  list.classList.add('switching');

  renderEras(allData[key]);
  list.addEventListener('animationend',()=>list.classList.remove('switching'),{once:true});
}

function renderEras(eraObj,filter=''){
  const list=document.getElementById('era-list');
  const keys=Object.keys(eraObj);
  const total=keys.reduce((sum,key)=>sum+eraObj[key].length,0);

  document.getElementById('nav-eras').textContent=keys.length.toLocaleString();
  document.getElementById('nav-songs').textContent=total.toLocaleString();

  let filtered=eraObj;
  const term=filter.trim().toLowerCase();

  if(term){
    filtered={};
    Object.entries(eraObj).forEach(([era,songs])=>{
      const matched=songs.filter(([name])=>name.toLowerCase().includes(term));
      if(matched.length || era.toLowerCase().includes(term)){
        filtered[era]=matched.length ? matched : songs;
      }
    });
  }

  list.innerHTML='';

  if(!Object.keys(filtered).length){
    list.innerHTML='<div class="no-results">No matching entries</div>';
    return;
  }

  Object.entries(filtered).forEach(([era,songs])=>{
    const wrap=document.createElement('section');
    wrap.className='era-wrap';

    const row=document.createElement('div');
    row.className='era-row';
    row.setAttribute('role','button');
    row.setAttribute('tabindex','0');
    row.setAttribute('aria-expanded','false');
    row.innerHTML=`
      <div class="era-row-name">${escapeHTML(era)}</div>
      <div class="era-row-right">
        <div class="era-pill">${songs.length.toLocaleString()} ${currentLabel}</div>
        <svg class="era-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><polyline points="6,9 12,15 18,9"/></svg>
      </div>`;

    const panel=document.createElement('div');
    panel.className='songs-panel';

    const inner=document.createElement('div');
    inner.className='songs-inner';

    const toggleEra=()=>{
      const isOpen=panel.classList.contains('open');

      document.querySelectorAll('.songs-panel.open').forEach(openPanel=>{
        if(openPanel===panel) return;
        openPanel.classList.remove('open');
        const openRow=openPanel.closest('.era-wrap').querySelector('.era-row');
        openRow.classList.remove('active');
        openRow.setAttribute('aria-expanded','false');
      });

      panel.classList.toggle('open',!isOpen);
      row.classList.toggle('active',!isOpen);
      row.setAttribute('aria-expanded',String(!isOpen));

      if(!isOpen && !inner.dataset.loaded){
        inner.dataset.loaded='1';
        renderSongs(inner,songs);
      }
    };

    row.addEventListener('click',toggleEra);
    row.addEventListener('keydown',event=>{
      if(event.key==='Enter' || event.key===' '){
        event.preventDefault();
        toggleEra();
      }
    });

    panel.appendChild(inner);
    wrap.append(row,panel);
    list.appendChild(wrap);
  });
}

function renderSongs(inner,songs){
  songs.forEach(([name,quality,length,url,notes],index)=>{
    const hasNote=Boolean(notes && notes.trim());
    const item=document.createElement('div');
    item.className='song-item'+(url?'':' no-link')+(hasNote?' has-note':'');

    item.innerHTML=`
      <div class="song-num">${String(index+1).padStart(2,'0')}</div>
      <div class="song-name" title="${escapeHTML(name)}">${escapeHTML(name)}</div>
      ${quality?`<div class="song-quality ${qClass(quality)}">${escapeHTML(quality)}</div>`:'<div></div>'}
      <div class="song-len">${escapeHTML(length||'')}</div>
      <div class="ext-icon" aria-hidden="true">
        ${url?'<svg viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor" fill="none"><path d="M14 5h5v5"/><path d="M10 14 19 5"/><path d="M19 13v5a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h5"/></svg>':''}
      </div>
      ${hasNote?'<button class="note-toggle" type="button" aria-label="Show note">+</button>':'<div></div>'}`;

    if(url){
      item.style.cursor='pointer';
      item.addEventListener('click',event=>{
        if(event.target.closest('.note-toggle')) return;
        window.open(url,'_blank','noopener,noreferrer');
      });
    }

    inner.appendChild(item);

    if(hasNote){
      const note=document.createElement('div');
      note.className='song-note';
      note.textContent=notes;
      inner.appendChild(note);

      item.querySelector('.note-toggle').addEventListener('click',event=>{
        event.stopPropagation();
        const expanded=item.classList.toggle('expanded');
        event.currentTarget.textContent=expanded?'−':'+';
        event.currentTarget.setAttribute('aria-label',expanded?'Hide note':'Show note');
      });
    }
  });
}

function onSearch(value){
  clearTimeout(searchTimer);
  searchTimer=setTimeout(()=>renderEras(allData[currentTab],value),100);
}

loadData();
renderEras(allData[currentTab]);
