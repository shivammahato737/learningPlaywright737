class BasePage{
    constructor (pageName){
        this.pageName = pageName
    }
    open() {
        console.log("Opening the page" + this.pageName);
    }
    close(){
        console.log("closing the page" + this.pageName);
        

    }

}
class loginPage extends BasePage{
    constructor(){
    console.log("which user has logged in");
    
}
}
let page = new loginPage()
page.open()
page.close()