class MessageView {
  constructor() {
    this.buttonEl = document.querySelector('#show-message-button');
    this.hideButtonEl = document.querySelector("#hide-message-button");

    this.buttonEl.addEventListener('click', () => {
       this.displayMessage();
    });

    this.hideButtonEl.addEventListener('click', () => {
      this.hideMessage()
    });
  }

  displayMessage() {
    const divEl = document.createElement("div");
    divEl.id = "message";
    let inputValue = document.querySelector("#message-input");
    divEl.innerText = inputValue.value;
    document.querySelector('#main-container').append(divEl);

    console.log('Thanks for clicking me!');
  }

  hideMessage() {
    document.querySelector('#message').remove();
  }
}

module.exports = MessageView;