
    //function to filter elements
    filterSelection("all");
    function filterSelection(c) {
      var x, i;
      x = document.getElementsByClassName("col");
      if (c == "all") c = "";
      for (i = 0; i < x.length; i++) {
        RemoveClass(x[i], "c-show");
        if (x[i].className.indexOf(c) > -1) AddClass(x[i], "c-show");
      }
    }
    
    //adds class .c-show and .c-active from cards and button respectively
    function AddClass(element, name) {
      var i, arr1, arr2;
      arr1 = element.className.split(" ");
      arr2 = name.split(" ");
      for (i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
      }
    }
    
    //removes the class .c-show from card
    function RemoveClass(element, name) {
      var i, arr1, arr2;
      arr1 = element.className.split(" ");
      arr2 = name.split(" ");
      for (i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
          arr1.splice(arr1.indexOf(arr2[i]), 1);     
        }
      }
      element.className = arr1.join(" ");
    }
    
    // Add active class to the current button (highlight it)
    var tabsList = document.getElementById("c-tabs"); //ul
    var listItems = tabsList.getElementsByClassName("c-bar-button"); //array of buttons(li)
    for (var i = 0; i < listItems.length; i++) {
      listItems[i].addEventListener("click", function(){
        var current = document.getElementsByClassName("c-active");
        current[0].className = current[0].className.replace("c-active", "");
        this.className += " c-active";
      });
    }

    //scroll-buttons
    function leftScroll() {
      const left = document.querySelector(".c-bar");
      left.scrollBy(-200, 0);
    }
    function rightScroll() {
      const right = document.querySelector(".c-bar");
      right.scrollBy(200, 0);
    }
    
//search using card-title.textContent or badge.textContent
  searchBar("all");
    function searchBar() {
      var x, i;
      x = document.getElementById('search').value;
      if (x == "all") x = "";
      for (i = 0; i < x.length; i++) {
        RemoveClass(x[i], "c-show");
        if (x[i].className.indexOf(d) > -1) AddClass(x[i], "c-show");
      }
    }

    function detectEnter(){
      var input = document.getElementById('search');
      input.addEventListener("keypress", function(event) {
      if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("searchBtn").click();
      }
    });
    }
    