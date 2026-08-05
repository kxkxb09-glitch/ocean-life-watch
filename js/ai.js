const animals=[
['노무라입깃해파리','🪼','danger','위험생물','큰 갈색 우산과 길게 늘어진 촉수','우산 지름이 매우 커질 수 있는 대형 해파리예요. 쏘이면 통증과 피부 손상이 생길 수 있어 만지지 마세요.','assets/nomura-jellyfish.png'],
['보름달물해파리','🪼','danger','위험생물','투명한 우산 안에 네 개의 고리 모양 생식소','촉수에 닿으면 따갑거나 붉어질 수 있어요. 물가에 많이 모여 있으면 가까이 가지 마세요.','assets/moon-jellyfish.png'],
['유령해파리','🪼','danger','위험생물','희고 투명한 몸과 길게 흐르는 촉수','투명해서 물속에서 잘 보이지 않을 수 있습니다. 발견하면 거리를 두고 관찰하세요.','assets/ghost-jellyfish.jpg'],
['상괭이','🐬','protect','보호종','등지느러미 없이 둥근 머리와 입가의 미소','우리 연안에서 만나는 작은 돌고래예요. 조용히 지켜보고 먹이를 주지 마세요.','assets/finless-porpoise.png'],
['푸른바다거북','🐢','protect','보호종','매끈한 등딱지와 앞지느러미','보호가 필요한 바다거북입니다. 충분한 거리를 두고 이동을 방해하지 마세요.','assets/green-sea-turtle.png'],
['붉은바다거북','🐢','protect','보호종','붉은 갈색의 단단한 등딱지','보호종으로 지정되어 있어요. 발견 위치를 기록해 보호 활동에 도움을 주세요.','assets/loggerhead-sea-turtle.png'],
['저어새','🐦','endangered','멸종위기종','숟가락처럼 넓적한 검은 부리','갯벌에서 먹이를 찾는 멸종위기종입니다. 번식과 휴식을 방해하지 않도록 멀리서 관찰하세요.','assets/black-faced-spoonbill.png'],
['검은머리갈매기','🐦','endangered','멸종위기종','번식기에 검은 머리와 붉은 부리','보호가 필요한 철새예요. 무리 가까이 다가가지 말고 사진만 남겨주세요.','assets/saunders-gull.png'],
['쏠종개','🐟','danger','위험생물','가슴지느러미와 등지느러미의 날카로운 가시','독가시에 찔릴 수 있으니 맨손으로 잡거나 만지지 마세요.','assets/striped-catfish.png']
];
const guide=document.querySelector('#speciesGuide');
const render=filter=>{guide.innerHTML=animals.filter(x=>filter==='all'||x[2]===filter).map(x=>`<article class="species-card ${x[2]}"><div class="species-emoji">${x[6]?`<img src="${x[6]}" alt="${x[0]}">`:x[1]}</div><div class="species-copy"><span class="species-tag ${x[2]}">${x[3]}</span><h2>${x[0]}</h2><p><b>생김새</b> ${x[4]}</p></div><button class="detail-toggle" aria-label="${x[0]} 자세히 보기">＋</button><div class="species-detail"><b>핵심 특징</b><p>${x[5]}</p></div></article>`).join('')};
render('all');
document.querySelector('.guide-filter').onclick=e=>{const b=e.target.closest('button');if(!b)return;document.querySelectorAll('.guide-filter button').forEach(x=>x.classList.remove('selected'));b.classList.add('selected');render(b.dataset.filter)};
guide.onclick=e=>{const card=e.target.closest('.species-card');if(!card)return;card.classList.toggle('open');card.querySelector('.detail-toggle').textContent=card.classList.contains('open')?'－':'＋'};
