function toggleDropdown(id) {
  var element = document.getElementsByClassName("HeaderDropdownContainer");
  var lastOpened = -1;
  for (var i = 0; i < element.length; i++) {
    if (element[id].classList.contains("hide") == false) {
      lastOpened = i;
    } else {
      element[i].classList.add("hide");
    }
  }
  var check = element[id].classList.contains("hide");
  if (check == true) {
    element[id].classList.remove("hide");
    element[id].classList.add("scale-up-ver-top");
    // document
    //   .getElementsByClassName("HeaderContainer")[0]
    //   .classList.add("slide-bottom");
  } else {
    element[id].classList.add("hide");
    element[id].classList.remove("scale-up-ver-top");
    // slide-bottom
  }
}
