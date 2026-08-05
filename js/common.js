const STORAGE_KEY='oceanSightings';
const seed=[];
function sightings(){
  try{return JSON.parse(localStorage.getItem(STORAGE_KEY))||seed}catch{return seed}
}
function saveSightings(items){localStorage.setItem(STORAGE_KEY,JSON.stringify(items))}
function toast(message){const el=document.querySelector('#toast');if(!el)return;el.textContent=message;el.classList.add('show');clearTimeout(window.toastTimer);window.toastTimer=setTimeout(()=>el.classList.remove('show'),2600)}
