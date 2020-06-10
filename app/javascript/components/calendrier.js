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
            days.insertAdjacentHTML('beforeend', "<li class='nope'>" + value + "</li>")
          }
          else {
            days.insertAdjacentHTML('beforeend', "<li>" + value + "</li>");
            if (mois.indexOf(month.innerText) < 10) {
              document.querySelectorAll('#testdate').forEach(listest);
              function listest(listestrr) {
                const testdatetest = listestrr.innerText.trim();
                if ((year.innerText+"-"+ "0" +(mois.indexOf(month.innerText)+1)+"-"+ value) == testdatetest) {
                  document.querySelectorAll('#days > li:last-child').forEach(addactive);
                  function addactive(li) {
                    li.classList.add("activedays");
                  }
                }
                // else if ((year.innerText+"-"+ "0" +(mois.indexOf(month.innerText)+1)+"-"+ value) != testdatetest) {
                //   console.log(testdatetest);
                  // document.querySelectorAll('#days > li:last-child').forEach(adddesactive);
                  // function adddesactive(lidesa) {
                  //    lidesa.classList.remove("activedays");
                  //}
                //}
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
                    li.classList.add("activedays");
                  }
                }
              }
            }
          }
        }
        else{
          days.insertAdjacentHTML('beforeend', "<li>" + value + "</li>");
          if (mois.indexOf(month.innerText) < 10) {
            document.querySelectorAll('#testdate').forEach(listest);
            function listest(listestrr) {
              const testdatetest = listestrr.innerText.trim();
              if ((year.innerText+"-"+ "0" +(mois.indexOf(month.innerText)+1)+"-"+ value) == testdatetest) {
                document.querySelectorAll('#days > li:last-child').forEach(addactive);
                function addactive(li) {
                  li.classList.add("activedays");
                }
              }
            }
          }
        }
      }




        // if (mois.indexOf(month.innerText) < 10) {

        //   document.querySelectorAll('#days').forEach(dayslistnext);
        //   function dayslistnext(daylistnext) {
        //     const dayslistnexthtml = daylistnext.innerText.trim();
        //     console.log((year.innerText+"-"+ "0" +(mois.indexOf(month.innerText)+1)+"-"+ dayslistnexthtml))


        //   }
        // }


        // else if ((year.innerText+"-"+ "0" +(mois.indexOf(month.innerText)+1)+"-"+ value) == testdatetest) {
        //   document.querySelectorAll('#days > li').forEach(addactive);
        //   function addactive(li) {
        //     li.classList.remove("activedays");
        //   }
        //   console.log("coucou");

        // }

        // else if ((year.innerText+"-"+ "0" +(mois.indexOf(month.innerText)+1)+"-"+ value) != testdatetest) {
        //   document.querySelectorAll('#days > li:last-child').forEach(addactive);
        //   function addactive(li) {
        //     console.log("coucou");
        //     // li.classList.remove("activedays");
        //   }
        // }

                        // else if ((year.innerText+"-"+ "0" +(mois.indexOf(month.innerText)+1)+"-"+ value) != testdatetest) {
                //   console.log(testdatetest);
                  // document.querySelectorAll('#days > li:last-child').forEach(adddesactive);
                  // function adddesactive(lidesa) {
                  //    lidesa.classList.remove("activedays");
                  //}



    next.addEventListener("click", function() {
      if (month.innerText == "DECEMBRE") {
        month.innerText = mois[0];
        var thisyear = parseInt(year.innerText, 10);
        return year.innerText = thisyear +1;
      }

      else {
        var nextmonth = (function () {
        var thismonth = month.innerText;
        var thismonthnumber = mois.indexOf(thismonth);

        // insertion du codeselected days pour next manque plus que le remove !!!


        document.querySelectorAll('#testdate').forEach(listest);
        function listest(listestrr) {
                const testdatetest = listestrr.innerText.trim();
          document.querySelectorAll('#days > li').forEach(eachdays);
          function eachdays(eachdays){
            if ((year.innerText+"-"+ "0" +(mois.indexOf(month.innerText)+1)+"-"+ eachdays) != testdatetest) {
              document.querySelectorAll('#days > li:last-child').forEach(adddesactive);
              function adddesactive(lidesa) {
                 lidesa.classList.remove("activedays");
              }
            }
          }
        }







        return function () {thismonthnumber += 1; return thismonthnumber}
        })();
        month.innerText = mois[nextmonth()];
        if (month.innerText == "AVRIL" ||  month.innerText == "JUIN" || month.innerText == "SEPTEMBRE" || month.innerText == "NOVEMBRE"){
          const daysyup = document.querySelector(".yup");
          daysyup.classList.remove("yup");
          daysyup.classList.add("nope");
        }
        else if (month.innerText == "FEVRIER"){
          const daysyup = document.querySelector(".yup");

          daysyup.classList.remove("yup");
          daysyup.classList.add("nope");
        }
        else {
          const daysyup = document.querySelector(".nope");
          daysyup.classList.remove("nope");
          daysyup.classList.add("yup");
        }
      }
    });












    prev.addEventListener("click", function() {
      if (month.innerText == "JANVIER") {
        month.innerText = mois[11];
        var thisyear = parseInt(year.innerText, 10);
        return year.innerText = thisyear -1;
      }
      else {
        var prevmonth = (function () {
        var thismonthprev = month.innerText;
        var thismonthprevnumber = mois.indexOf(thismonthprev);
        return function () {thismonthprevnumber -= 1; return thismonthprevnumber}
        })();
        month.innerText = mois[prevmonth()];
        if (month.innerText == "AVRIL" ||  month.innerText == "JUIN" || month.innerText == "SEPTEMBRE" || month.innerText == "NOVEMBRE"){
          const daysyup = document.querySelector(".yup");
          daysyup.classList.remove("yup");
          daysyup.classList.add("nope");
        }
        else if (month.innerText == "FEVRIER"){
          const daysyup = document.querySelectorAll(".yup");

          daysyup.classList.remove("yup");
          daysyup.classList.add("nope");
        }
        else {
          const daysyup = document.querySelector(".nope");
          daysyup.classList.remove("nope");
          daysyup.classList.add("yup");
        }
      }
    });
}
export {calendar}


