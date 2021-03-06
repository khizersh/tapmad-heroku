import Head from "next/head";
import React from "react";
export default function About() {

    return (
        <div>
            <Head>
                <title>Tapmad Refund Policy</title>
                <link rel="icon" href="/favicon.ico" />
                <link rel="manifest" href="/manifest.json" />
            </Head>
            <div
                className="container"
                style={{
                    margin: "15px auto 15px auto",
                    textAlign: "center",
                    color: "#fff",
                }}
            >
                <hr />
                <h1>Refund Policy</h1>
                <div>
                    <ul>
                        <li>
                            To unsubscribe, the user logs in to Tapmad and navigates to the User Profile page and click on the 'unsubscribe' button under the 'Current Status' info. A confirmation pops up and after confirming the unsubscription the user is no longer subscribed to the Tapmad's services until the next billing period. If you have a monthly subscription, your subscription will be cancelled for the next monthly billing cycle. You will not receive any refund for the remainder of your billing period.
                        </li>
                        <li>
                            Office Landline: 021-35155511
                        </li>
                        <li>
                            After getting subscription to Tapmad premium service by paying through the chosen payment method, you'll get the digital access to the content listed on that package on Tapmad for the time period for which you paid i.e. weekly, monthly.
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
