async function addNavbar() {
    const resp = await fetch("navbar.html");
    const html = await resp.text();
    document.body.insertAdjacentHTML("afterbegin", html);

    const a = Math.random() * (20-1) + 1;
    if(parseInt(a) == 1){
        document.body.setAttribute("style",'background-image:url("img/obunga.png")');
    }
    

}