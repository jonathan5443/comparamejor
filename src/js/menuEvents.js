class MenuEvents {
  constructor() {
    this.menu = document.querySelector("nav");
    this.menuIcon = document.querySelector(".burger-container");
    this.closeMenuIcon = document.querySelector(".close-menu-container");
    this.menuItemWithChild = document.querySelectorAll(".has-child");
    this.addEventListeners();
  }

  addEventListeners() {
    this.menuIcon.addEventListener('click', this.toggleMenuVisibility.bind(this));
    this.closeMenuIcon.addEventListener('click', this.toggleMenuVisibility.bind(this));
    for (let i = 0; i < this.menuItemWithChild.length; ++i) {
      this.menuItemWithChild[i].addEventListener("click", this.showChildMobile.bind(this))
      this.menuItemWithChild[i].addEventListener("mouseover", this.showChildDesktop.bind(this))
    };
  }

  toggleMenuVisibility() {
    if (this.menu.className == "show-mobile") {
      this.menu.classList.add("hide-mobile")
      this.menu.classList.remove("show-mobile");
    } else {
      this.menu.classList.add("show-mobile")
      this.menu.classList.remove("hide-mobile");
    }
  }

  showChildMobile(element) {
    const child = element.target.nextSibling;
    if (child.classList.contains("hide-mobile")) {
      child.classList.add("show-mobile")
      child.classList.remove("hide-mobile")
    } else {
      child.classList.add("hide-mobile")
      child.classList.remove("show-mobile");
    }
  }

  showChildDesktop(element) {
    const child = element.target.nextSibling;
    if (child.classList.contains("hide-desktop")) {
      child.classList.add("show-desktop")
      child.classList.remove("hide-desktop")
    } else {
      child.classList.add("hide-desktop")
      child.classList.remove("show-desktop");
    }
  }
}