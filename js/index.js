document.addEventListener('DOMContentLoaded',()=>{
  const recentHead=document.querySelector('.section-head.recent');
  if(recentHead){recentHead.style.cursor='pointer';recentHead.setAttribute('role','link');recentHead.setAttribute('tabindex','0');recentHead.onclick=()=>location.href='recent.html';recentHead.onkeydown=e=>{if(e.key==='Enter')location.href='recent.html'}}
  const items=sightings();
  const count=document.querySelector('#sightingCount');
  const species=document.querySelector('#speciesCount');
  if(count)count.textContent=items.length+21;
  if(species)species.textContent=new Set(items.map(x=>x.animal).filter(Boolean)).size+5;
  const feed=document.querySelector('#feed');
  if(feed)feed.innerHTML=items.slice(0,3).map(x=>`<article><div class="animal">${x.image?`<img src="${x.image}" alt="${x.animal||'제보 사진'}">`:(x.emoji||'🌊')}</div><div><strong>${x.animal||'AI 분석 생물'}${x.danger?' <span class="danger-tag">주의 생물</span>':''}</strong><p>${x.place||'부산'} · ${x.count||1}마리</p><small>${x.note||'새로운 해양생물 관찰 제보'} · ${x.time||'방금 전'}</small></div></article>`).join('');
  if(!window.L)return;
  const locations={'해운대':[35.1587,129.1604],'광안리':[35.1532,129.1186],'송정':[35.1806,129.2018],'다대포':[35.0470,128.9667],'기장':[35.2440,129.2221],'일광':[35.2645,129.2335],'기타':[35.145,129.115]};
  const card=document.querySelector('.satellite-card');
  card.insertAdjacentHTML('beforeend','<div class="map-pages"><button class="map-page active" data-page="danger">위험생물 지도</button><button class="map-page" data-page="protected">보호생물 지도</button></div>');
  const map=L.map('busanSatellite',{zoomControl:false,attributionControl:false,scrollWheelZoom:false}).setView([35.145,129.115],10);
  L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',{maxZoom:19}).addTo(map);
  L.control.zoom({position:'bottomright'}).addTo(map);
  const danger=L.layerGroup(),protected=L.layerGroup();
  const markerIcon=(isDanger,label)=>L.divIcon({className:'beach-marker',html:`<span class="${isDanger?'danger':'safe'}"></span><b>${label}</b><small>${isDanger?'주의 관찰':'보호 관찰'}</small>`,iconSize:[78,38],iconAnchor:[39,38]});
  const add=(group,place,animal,isDanger,count=1)=>L.marker(locations[place]||locations['기타'],{icon:markerIcon(isDanger,place)}).bindPopup(`<b>${place} ${isDanger?'위험생물':'보호생물'} 제보</b><br>${animal} · ${count}마리`).addTo(group);
  add(danger,'해운대','노무라입깃해파리',true,3);
  add(danger,'다대포','위험생물 제보 위치',true,1);
  add(protected,'송정','푸른바다거북',false,1);
  add(protected,'광안리','상괭이',false,1);
  add(protected,'일광','저어새',false,2);
  items.forEach(item=>{
    const isDanger=item.danger||/해파리|쏠종개/.test(item.animal||'');
    add(isDanger?danger:protected,item.place||'기타',item.animal||'AI 분석 생물',isDanger,item.count||1);
  });
  const show=page=>{
    map.removeLayer(danger);map.removeLayer(protected);(page==='danger'?danger:protected).addTo(map);
    card.querySelectorAll('.map-page').forEach(b=>b.classList.toggle('active',b.dataset.page===page));
    document.querySelector('.map-legend').innerHTML=page==='danger'?'<span><i class="dot red"></i>위험생물 제보 구역</span>':'<span><i class="dot green"></i>보호생물 관찰 구역</span>';
  };
  show('danger');
  card.querySelector('.map-pages').onclick=e=>{const b=e.target.closest('.map-page');if(b)show(b.dataset.page)};
});
