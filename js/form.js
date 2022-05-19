class Form{
constructor(){
 this.titleImg = createImg("./images/image main shinchan.jpg","gameTitle")   
}
setElementsPosition() {
    this.titleImg.position(120, 160);
//     this.input.position(width / 2 - 110, height / 2 - 80);
//     this.playButton.position(width / 2 - 90, height / 2 - 20);
//     this.greeting.position(width / 2 - 300, height / 2 - 100);
 }

  setElementsStyle() {
    this.titleImg.class("gameTitle");
    // this.input.class("customInput");
    // this.playButton.class("customButton");
    // this.greeting.class("greeting");
  }

//   hide() {
//     this.greeting.hide();
//     this.playButton.hide();
//     this.input.hide();
//   }
display(){
this.setElementsPosition()
}
}
