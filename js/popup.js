

//Добавление ссылок на имена
document.querySelectorAll(".setName").forEach((name) => {
  name.addEventListener("click",function(){chrome.tabs.create({url:"https://лостарк.рф/Оружейная/"+name.innerText})});
});
//работа с часами и их частотой обновления
let clock_element = document.querySelector(".clock_style");
document.getElementById("myBtn").addEventListener("click", update_ratio);
updateClock();
let clock_cicle = setInterval(updateClock,document.querySelector("input").value);
function update_ratio(){
  clearInterval(clock_cicle)
  clock_cicle = setInterval(updateClock,document.querySelector("input").value)
}
function updateClock() {

  const date = new Date()
  const time = new Intl.DateTimeFormat('ru-Ru',{
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'
  }).format(date)
  clock_element.innerText = time
}

//
let path= "https://лостарк.рф/Оружейная/";
async function setupOffScreenDocument(path){
  const offscreenUrl = chrome.runtime.getUrl(path);
  const existingContents = await chrome.runtime.getContexts({
    contextTypes: ['OFFSCREEN_DOCUMENT'],
    documentUrls: [offscreenUrl]
  });
  if (existingContexts.length > 0) {
    return;
  }else{
    creating = chrome.offscreen.createDocument({
      url: path,
      reasons: ["DOM_SCRAPING"],
      justification: 'reason for check gems'
    });
    await creating;
    creating = null;
  }
}
chrome.action.onClicked.addListener(async () => {
  await setupOffscreenDocument('off_screen.html');

  // Send message to offscreen document
  chrome.runtime.sendMessage({
    type: '...',
    target: 'offscreen',
    data: '...'
  });
});

