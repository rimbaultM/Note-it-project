const calendar = () => {
    $(".calendar-nav").click(function(){
      $(".calendar").toggle();
    });
    const yearcalendar = new Date().getFullYear();
    const next = document.getElementById("next");
    const prev = document.getElementById("prev");
    const month = document.getElementById("month");
    const year = document.getElementById("year");
    const days = document.getElementById("days");
    const testdate = document.getElementById("testdate")
    const mois = ["JANVIER", "FEVRIER", "MARS", "AVRIL", "MAI", "JUIN", "JUILLET", "AOUT", "SEPTEMBRE", "OCTOBRE", "NOVEMBRE", "DECEMBRE"]
    const day30 = ["01","02","03","04","05","06","07","08","09",10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];

    month.innerText = mois[new Date().getMonth()];
    year.innerText = new Date().getFullYear();

    day30.forEach(adddays);
      function adddays(value) {
        if (month.innerText == "JUIN" || month.innerText == "MAI" || month.innerText == "SEPTEMBRE" || month.innerText == "NOVEMBRE"){
          if (value == 31) {
            days.insertAdjacentHTML('beforeend', "<li class='nope unctivedays'>" + value + "</li>")
          }
          else {
            days.insertAdjacentHTML('beforeend', "<li class='unctivedays'>" + value + "</li>");
            if (mois.indexOf(month.innerText) < 10) {
              document.querySelectorAll('#testdate').forEach(listest);
              function listest(listestrr) {
                const testdatetest = listestrr.innerText.trim();
                if ((year.innerText+"-"+ "0" +(mois.indexOf(month.innerText)+1)+"-"+ value) == testdatetest) {
                  document.querySelectorAll('#days > li:last-child').forEach(addactive);
                  function addactive(li) {
                    if ((listestrr.parentNode.parentNode.parentNode.parentNode.childNodes[1]).classList.contains('notes-title-blue')) {
                      li.classList.add("calendarblue");
                    }
                    else if ((listestrr.parentNode.parentNode.parentNode.parentNode.childNodes[1]).classList.contains('notes-title-red')) {
                      li.classList.add("calendarred");
                    }
                    else if ((listestrr.parentNode.parentNode.parentNode.parentNode.childNodes[1]).classList.contains('notes-title-green')) {
                      li.classList.add("calendargreen");
                    }
                  }
                }
              }
            }
          }
        }
        else if (month.innerText == "FEVRIER"){
          if (value == 31 || value == 30 ) { days.insertAdjacentHTML('beforeend', "<li class='nope'>" + value + "</li>");}
          else {
            days.insertAdjacentHTML('beforeend', "<li id='tert'>" + value + "</li>");
            if (mois.indexOf(month.innerText) < 10) {
              document.querySelectorAll('#testdate').forEach(listest);
              function listest(listestrr) {
                const testdatetest = listestrr.innerText.trim();
                if ((year.innerText+"-"+ "0" +(mois.indexOf(month.innerText)+1)+"-"+ value) == testdatetest) {
                  document.querySelectorAll('#days > li:last-child').forEach(addactive);
                  function addactive(li) {
                    if ((listestrr.parentNode.parentNode.parentNode.parentNode.childNodes[1]).classList.contains('notes-title-blue')) {
                      li.classList.add("calendarblue");
                    }
                    else if ((listestrr.parentNode.parentNode.parentNode.parentNode.childNodes[1]).classList.contains('notes-title-red')) {
                      li.classList.add("calendarred");
                    }
                    else if ((listestrr.parentNode.parentNode.parentNode.parentNode.childNodes[1]).classList.contains('notes-title-green')) {
                      li.classList.add("calendargreen");
                    }
                  }
                }
              }
            }
          }
        }
        else{
          days.insertAdjacentHTML('beforeend', "<li class='unctivedays'>" + value + "</li>");
          if (mois.indexOf(month.innerText) < 10) {
            document.querySelectorAll('#testdate').forEach(listest);
            function listest(listestrr) {
              const testdatetest = listestrr.innerText.trim();
              if ((year.innerText+"-"+ "0" +(mois.indexOf(month.innerText)+1)+"-"+ value) == testdatetest) {
                document.querySelectorAll('#days > li:last-child').forEach(addactive);
                function addactive(li) {
                  if ((listestrr.parentNode.parentNode.parentNode.parentNode.childNodes[1]).classList.contains('notes-title-blue')) {
                      li.classList.add("calendarblue");
                    }
                    else if ((listestrr.parentNode.parentNode.parentNode.parentNode.childNodes[1]).classList.contains('notes-title-red')) {
                      li.classList.add("calendarred");
                    }
                    else if ((listestrr.parentNode.parentNode.parentNode.parentNode.childNodes[1]).classList.contains('notes-title-green')) {
                      li.classList.add("calendargreen");
                    }
                }
              }
            }
          }
        }
      }
}
export {calendar}


