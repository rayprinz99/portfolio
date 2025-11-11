// LOOP TYPING AND DELETE EFFECT

const words =  ["Geospatial Data Scientist", "Web Developer", "PC Hardware Engineer"];
let i = 0;
let timer;
function typingEffect(){
      let word = words[i].split("");
      let loopTyping = function(){
            if(word.length > 0){
                  document.getElementById('skillset').innerHTML += word.shift();    
            }
            else{
                  deletingEffect()
                  return false
            }
            timer = setTimeout (loopTyping, 500)
      }
      loopTyping()
}

function deletingEffect(){
      let word = words[i].split("")
      let loopDeleting = function(){
            if (word.length > 0) {
                  word.pop()
                  document.getElementById('skillset').innerHTML = word.join("")
            }
            else{
                  if(words.length > (i + 1)){
                        i++
                  }
                  else{
                        i = 0
                  }
                  typingEffect()
                  return false
            }
            timer = setTimeout(loopDeleting, 200)
      }
      loopDeleting()
}
typingEffect()


// ABOUT TABS TOGGLE

onload = function(){
      let spanTexts = document.getElementsByClassName("about")
            for(spanText of spanTexts){
                  spanText.classList.add("active")
            }
      }

let tablinks = document.getElementsByClassName("tab-links");
let tabcontents = document.getElementsByClassName("tab-contents");
function opentab(tabname){
      for (tablink of tablinks){
            tablink.classList.remove("active-link");
      }
      for (tabcontent of tabcontents){
            tabcontent.classList.remove("active-tab");
      }
      event.currentTarget.classList.add("active-link");
      document.getElementById(tabname).classList.add("active-tab");
}

// MOBILE NAV MENU

let sidemenu = document.getElementById("sidemenu");

function openmenu(){
      sidemenu.style.right="0";
}

function closemenu(){
      sidemenu.style.right="-200px";
}

// Contact Form
      const scriptURL = 'https://script.google.com/macros/s/AKfycbxm7hVQrJfmqhRtkzCv5p8C5pSinZB05VYHEBm5rNR_dwJU7PCEcai2Xq1uzbQY_nNiwQ/exec'
      const form = document.forms['submit-to-google-sheet']
      const msg = document.getElementById("msg")

      form.addEventListener('submit', e => {
        e.preventDefault()
        fetch(scriptURL, { method: 'POST', body: new FormData(form)})
          .then(response => {
                msg.innerHTML = "Message Sent Successfully"
                setTimeout(function(){
                      msg.innerHTML = ""
                },5000)
                form.reset()
          })
          .catch(error => console.error('Error!', error.message))
      })
    
