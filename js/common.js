const STORAGE_KEY='oceanSightings';
const seed=[
 {id:1,animal:'푸른바다거북',place:'송정',count:1,note:'방파제 근처에서 천천히 헤엄치고 있었어요.',emoji:'🐢',time:'12분 전'},
 {id:2,animal:'노무라입깃해파리',place:'해운대',count:3,note:'투명한 큰 해파리 여러 마리를 발견했어요.',emoji:'🪼',time:'35분 전',danger:true},
 {id:3,animal:'돌고래',place:'광안리',count:2,note:'수면 위로 뛰어오르는 모습이 보였어요.',emoji:'🐬',time:'1시간 전'}
];
function sightings(){try{return JSON.parse(localStorage.getItem(STORAGE_KEY))||seed}catch{return seed}}
function saveSightings(items){localStorage.setItem(STORAGE_KEY,JSON.stringify(items))}
function toast(message){const el=document.querySelector('#toast');if(!el)return;el.textContent=message;el.classList.add('show');clearTimeout(window.toastTimer);window.toastTimer=setTimeout(()=>el.classList.remove('show'),2600)}
