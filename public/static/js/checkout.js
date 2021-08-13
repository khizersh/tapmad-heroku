export default class Checkout {
    constructor(publicKey) {
        this.publicKey = publicKey;
        initializeCheckout();
    }

    initializeCheckout() {
        Frames.init(this.publicKey);
    }

    listenForToken() {
        var promise = new Promise((resovle, reject) => {
            Frames.addEventHandler(
                Frames.Events.CARD_TOKENIZED,
                function (event) {
                    resovle(event)
                }
            );
        });
        return promise;
    }
    sumbitCardTransaction() {
        Frames.submitCard();
    }
}