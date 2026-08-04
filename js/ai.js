document.addEventListener('DOMContentLoaded',()=>{const animals=[
['노무라입깃해파리','🪼','danger','위험생물','큰 갈색 우산과 길게 늘어진 촉수','우산 지름이 매우 커질 수 있는 대형 해파리예요. 쏘이면 통증과 피부 손상이 생길 수 있어 만지지 마세요.'],
['보름달물해파리','🌕','danger','위험생물','투명한 우산 속 네 개의 둥근 무늬','보름달처럼 보이는 생식소가 특징이에요. 독성은 약하지만 피부 자극을 일으킬 수 있어요.'],
['유령해파리','👻','danger','위험생물','하얗고 반투명한 우산, 긴 실 같은 촉수','물속에서 희미하게 보여 발견하기 어려워요. 접촉을 피하고 해변 안전요원의 안내를 따라주세요.'],
['상괭이','🐬','protect','보호종','등지느러미 없이 매끈한 회색 몸','우리 연안에서 사는 작은 고래예요. 입꼬리가 올라가 웃는 얼굴처럼 보이며, 해양보호생물입니다.'],
['푸른바다거북','🐢','protect','보호종','매끈한 등딱지와 노 모양 앞지느러미','따뜻한 바다를 오가며 해초를 먹어요. 해양보호생물로, 발견해도 가까이 다가가거나 만지면 안 돼요.'],
['붉은바다거북','🐢','protect','보호종','붉은 갈색의 큰 머리와 단단한 등딱지','강한 턱을 가진 바다거북이에요. 그물·플라스틱에 얽히기 쉬워 보호가 필요합니다.'],
['저어새','🦢','endangered','멸종위기종','끝이 주걱처럼 넓적한 긴 부리','얕은 갯벌에서 부리를 좌우로 저어 먹이를 찾는 새예요. 국내 멸종위기 야생생물 Ⅰ급입니다.'],
['검은머리갈매기','🐦','endangered','멸종위기종','번식기에 검게 변하는 머리와 붉은 부리','우리나라 서해안 갯벌에서 번식하는 희귀한 갈매기예요. 국내 멸종위기 야생생물 Ⅱ급입니다.'],
['쏠종개','🐟','danger','주의 생물','검은 줄무늬와 가슴·등의 단단한 가시','바다 메기류로 가시에 독샘이 있어 찔리면 통증이 심할 수 있어요. 맨손으로 잡지 마세요.']
];const guide=document.querySelector('#speciesGuide');const render=filter=>{guide.innerHTML=animals.filter(x=>filter==='all'||x[2]===filter).map((x,i)=>`<article class="species-card ${x[2]}" data-id="${i}"><div class="species-emoji">${x[1]}</div><div class="species-copy"><span class="species-tag ${x[2]}">${x[3]}</span><h2>${x[0]}</h2><p><b>생김새</b> ${x[4]}</p></div><button class="detail-toggle" aria-label="${x[0]} 자세히 보기">＋</button><div class="species-detail"><b>핵심 특징</b><p>${x[5]}</p></div></article>`).join('')};render('all');document.querySelector('.guide-filter').onclick=e=>{const b=e.target.closest('button');if(!b)return;document.querySelectorAll('.guide-filter button').forEach(x=>x.classList.remove('selected'));b.classList.add('selected');render(b.dataset.filter)};guide.onclick=e=>{const card=e.target.closest('.species-card');if(!card)return;card.classList.toggle('open');card.querySelector('.detail-toggle').textContent=card.classList.contains('open')?'－':'＋'}});
