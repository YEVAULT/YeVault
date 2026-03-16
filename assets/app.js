function qClass(q){
  if(!q)return'q-na';const l=q.toLowerCase();
  if(l.includes('high'))return'q-high';
  if(l.includes('cd'))return'q-cd';
  if(l.includes('low'))return'q-low';
  if(l.includes('record'))return'q-rec';
  if(l.includes('confirm'))return'q-conf';
  if(l.includes('not avail')||l.includes('unavail'))return'q-na';
  return'q-other';
}

let allData=null,currentTab='u',currentLabel='Songs';

function loadData(){allData=JSON.parse(atob(RAW));}

function switchTab(key,label){
  currentTab=key;currentLabel=label;
  document.querySelectorAll('.nav-tab').forEach(b=>b.classList.toggle('active',b.dataset.tab===key));
  document.getElementById('search-box').value='';
  renderEras(allData[key]);
}

function renderEras(eraObj,filter=''){
  const list=document.getElementById('era-list');
  const keys=Object.keys(eraObj);
  let total=keys.reduce((s,k)=>s+eraObj[k].length,0);
  document.getElementById('nav-eras').textContent=keys.length;
  document.getElementById('nav-songs').textContent=total.toLocaleString();

  let filtered={};
  if(filter){
    const f=filter.toLowerCase();
    Object.entries(eraObj).forEach(([era,songs])=>{
      const matched=songs.filter(([name])=>name.toLowerCase().includes(f));
      if(matched.length||era.toLowerCase().includes(f))
        filtered[era]=matched.length?matched:songs;
    });
  } else {
    filtered=eraObj;
  }

  list.innerHTML='';
  if(Object.keys(filtered).length===0){
    list.innerHTML='<div class="no-results">no results found</div>';
    return;
  }

  Object.entries(filtered).forEach(([era,songs])=>{
    const wrap=document.createElement('div');
    wrap.className='era-wrap';
    const row=document.createElement('div');
    row.className='era-row';
    row.innerHTML=`
      <div class="era-row-name">${era}</div>
      <div class="era-row-right">
        <div class="era-pill">${songs.length} ${currentLabel}</div>
        <svg class="era-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6,9 12,15 18,9"/></svg>
      </div>`;

    const panel=document.createElement('div');
    panel.className='songs-panel';
    const inner=document.createElement('div');
    inner.className='songs-inner';

    row.onclick=()=>{
      const isOpen=panel.classList.contains('open');
      document.querySelectorAll('.songs-panel.open').forEach(p=>{
        p.classList.remove('open');
        p.closest('.era-wrap').querySelector('.era-row').classList.remove('active');
      });
      if(!isOpen){
        panel.classList.add('open');
        row.classList.add('active');
        if(!inner.dataset.loaded){
          inner.dataset.loaded='1';
          songs.forEach(([name,quality,length,url],i)=>{
            const el=document.createElement(url?'a':'div');
            el.className='song-item'+(url?'':' no-link');
            if(url){el.href=url;el.target='_blank';el.rel='noopener noreferrer';}
            el.innerHTML=`
              <div class="song-num">${i+1}</div>
              <div class="song-name" title="${name.replace(/"/g,'&quot;')}">${name}</div>
              ${quality?`<div class="song-quality ${qClass(quality)}">${quality}</div>`:''}
              <div class="song-len">${length}</div>
              <div class="ext-icon">
                ${url?'<svg viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15,3 21,3 21,9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>':''}
              </div>`;
            inner.appendChild(el);
          });
        }
        setTimeout(()=>row.scrollIntoView({behavior:'smooth',block:'nearest'}),50);
      }
    };

    panel.appendChild(inner);
    wrap.appendChild(row);
    wrap.appendChild(panel);
    list.appendChild(wrap);
  });
}

let searchTimer;
function onSearch(val){
  clearTimeout(searchTimer);
  searchTimer=setTimeout(()=>renderEras(allData[currentTab],val),120);
}

loadData();
renderEras(allData['u']);