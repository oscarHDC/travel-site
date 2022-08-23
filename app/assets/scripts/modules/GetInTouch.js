class GetInTouch {
  constructor() {
    this.modalCloseButton = document.querySelector(".modal__close");
    this.button = document.querySelectorAll(".btn");
    this.modal = document.querySelector(".modal");
    this.events();
  }

  events() {
    this.modalCloseButton.addEventListener("click", () => this.toggleButton());

    this.btn.addEventListener("click", function () {
      this.modal.classList.add("modal-no-visible");
      console.log("a");
    });
  }

  toggleButton() {
    this.modal.classList.remove("modal-no-visible");
  }
}

export default GetInTouch;
