class MenuEvents {
  constructor() {
    this.menu = document.querySelector("nav");
    this.menuIcon = document.querySelector(".burger-container");
    this.closeMenuIcon = document.querySelector(".close-menu-container");
    this.menuItemWithChild = document.querySelectorAll(".has-child");
    this.menuIcon.addEventListener('click', this.toggleMenuVisibility.bind(this));
    this.closeMenuIcon.addEventListener('click', this.toggleMenuVisibility.bind(this));
    for (let i = 0; i < this.menuItemWithChild.length; ++i) {
      this.menuItemWithChild[i].addEventListener('click', this.showChild.bind(this))
    };
  }

  toggleMenuVisibility() {
    if (this.menu.className == 'show') {
      this.menu.classList.add('hide')
      this.menu.classList.remove('show');
    } else {
      this.menu.classList.add('show')
      this.menu.classList.remove('hide');
    }
  }

  showChild(element) {
    const child = element.target.nextSibling;
    if (child.className == "hide") {
      child.classList.add('show')
      child.classList.remove('hide')
    } else {
      child.classList.add('hide')
      child.classList.remove('show');
    }
  }

}