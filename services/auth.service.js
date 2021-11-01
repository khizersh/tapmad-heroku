import { PaymentPackages } from "./apilinks";
import { get } from "./http-service";

export async function getAllPaymentPackages() {
    return (await get(PaymentPackages)).data;
}