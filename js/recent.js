document.addEventListener('DOMContentLoaded',()=>{
  const day=24*60*60*1000;
  const now=Date.now();
  const recent=sightings().filter(item=>typeof item.id==='number'&&item.id>now-day);
  const list=document.querySelector('#recentList');
  const empty=document.querySelector('#emptyMessage');
  if(!recent.length){empty.hidden=false;return}
  list.innerHTML=recent.map(item=>`<article><div class="animal">${item.image?`<img src="${item.image}" alt="${item.animal||'제보 사진'}">`:(item.emoji||'🌊')}</div><div><strong>${item.animal||'AI 분석 생물'}${item.danger?' <span class="danger-tag">주의 생물</span>':''}</strong><p>${item.place||'부산'} · ${item.count||1}마리</p><small>${item.note||'관찰 메모 없음'} · ${item.time||'방금 전'}</small></div></article>`).join('');
});
