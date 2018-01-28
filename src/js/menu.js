class Menu {
  constructor() {
    this.url = "http://localhost:9000/menu"
    this.menuList = document.querySelector("nav > ul");
    this.data = this._requestData();
  }

  _createMenu(parent = this.menuList, items = this.data) {
    for (let i = 0; i < items.length; i++) {
      if (items[i].name) {
        const li = document.createElement("li");
        const a = document.createElement("a");
        const text = document.createTextNode(items[i].name);
        a.href = items[i].url;
        a.appendChild(text);
        li.appendChild(a);
        parent.appendChild(li);
        if (items[i].submenu.length > 0) {
          const ul = document.createElement("ul");
          li.appendChild(ul);
          this._createMenu(ul, items[i].submenu);
        }
      }
    }
  }

  _requestData() {
    fetch(this.url)
      .then(response => {
        if (response.status !== 200) {
          alert(`Looks like there was a problem. Status Code: ${response.status}!`);
          return
        }
        response.json().then(data => {
          this.data = data;
          this._createMenu()
        });
      })
      .catch(error =>
        alert(error)
      );
  }
}