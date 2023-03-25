class MobileNavBar {
    constructor(mobileMenu , listItens, navLinks){
        this.mobileMenu = document.querySelector(mobileMenu);
        this.listItens = document.querySelector(listItens);
        this.navLinks = document.querySelector(navLinks);
        this.activeClass = "active";
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        this.listItens.classList.toggle(this.activeClass);
    }

    addClickEvent() {
        this.mobileMenu.addEventListener("click", this.handleClick)
    }

    init() {
        if(this.mobileMenu){
            this.addClickEvent();
        }
        return this;
    }
}
    const mobileNavBar = new MobileNavBar(
        ".mobile-menu",
        ".list-itens",
        ".list-itens li",
    );

    mobileNavBar.init()

