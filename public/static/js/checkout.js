import { trigger } from "./linkers";

export default class Checkout {
  constructor(publicKey) {
    Checkout.initializeCheckout(publicKey);
    this.listenForToken();
  }
  static initializeCheckout(key) {
    // Frames.init(key.toString());
    Frames.init({
      publicKey: key.toString(),

      style: {
        placeholder: {
          base: {
            color: "red",
          },
        },
        autofill: {
            backgroundColor: "yellow"
          },
      },
    });
  }

  listenForToken() {
    Frames.addEventHandler(Frames.Events.CARD_TOKENIZED, (event) => {
      trigger("tokenSuccess", event);
    });
  }
  sumbitCardTransaction() {
    Frames.submitCard();
  }
}
