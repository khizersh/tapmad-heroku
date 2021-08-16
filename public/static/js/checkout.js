import { trigger } from "./linkers";

export default class Checkout {
    constructor(publicKey) {
        Checkout.initializeCheckout(publicKey);
        this.listenForToken();
    }
    static initializeCheckout(key) {
        Frames.init(key.toString());
    }

    listenForToken() {
        Frames.addEventHandler(
            Frames.Events.CARD_TOKENIZED,
            (event) => {
                trigger("tokenSuccess", event);
            }
        );
    }
    sumbitCardTransaction() {
        Frames.submitCard();
    }
}