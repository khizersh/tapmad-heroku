import React, { useEffect, useState } from "react";
import { getFaqs } from "../services/apilinks";
import { get } from "../services/http-service";

export default function FAQ() {
  const [data, setData] = useState([]);
  useEffect(async () => {
    const resp = await get(getFaqs);
    if (resp.data) {
      if (resp.data.data.length > 0) {
        setData(resp.data.data);
      }
    }
  }, []);

  return (
    <>
      <Head>
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [{
                "@type": "Question",
                "name": "What is Tapmad?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "TAPMAD is Pakistan's leading on-demand video streaming platform that offers live TV Streaming of 100+ local, regional and international channels. With Tapmad Premium, you can instantly watch your favorite web-series, drama serials, TV shows, online movies and live sports (including EPL & Ad Free PSL) anytime anywhere. \nWatch Live TV streaming including all Pakistani news channels, 20+ international channels such as BBC World News, CNN, Animal Planet, National Geographic, Discovery, and Voice of America. "
                }
              },
              {
                "@type": "Question",
                "name": "How do I subscribe to Tapmad TV?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Tapmad Premium is quick and easy. There are four different ways to subscribe to Tapmad TV. \n<ul>\n<li>Sim Card,</li>\n<li>Credit/Debit Card</li>\n<li>EasyPaisa</li>\n<li>Jazz Cash</li>\n</ul>\nWatch our subscription guide <a href=\"https://bit.ly/3dV8BBA\">here</a>. "
                }
              },
              {
                "@type": "Question",
                "name": "How to subscribe Tapmad TV with EasyPaisa?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Subscribe with Easy Paisa and get access to Tapmad Premium for just Rs. 5 (for the first month only). After the first month, regular subscription charges will be deducted from your account."
                }
              },
              {
                "@type": "Question",
                "name": "How to unsubscribe from Tapmad?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "To cancel your Tapmad subscription follow these steps;\n<ul>\n<li>Log in to your Tapmad TV account (via website/app).</li>\n<li>Click on “User Profile”.</li>\n<li>Click on the \"Unsubscribe\" button to cancel your subscription.</li>\n</ul>"
                }
              },
              {
                "@type": "Question",
                "name": "Is Tapmad TV FREE?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Freemium users can watch limited collection of movies, web series, TV shows and Live TV Channels for FREE. The Premium subscription get free access to 80+ national and regional live news channels, Pakistani Drama Channels and International TV Channels including Hum TV, Express Entertainment, Neo News, Samaa News, 92 News HD, Baby TV and Cartoon Network and 50+ channels. "
                }
              },
              {
                "@type": "Question",
                "name": "What is Tapmad Premium?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Tapmad Premium is simply a non-stop entertainment. With Premium subscription of Tapmad TV, you can watch 100+ Live TV channels, latest movies and English shows (including Pakistani, Indian and American TV channels).\nZee entertainment channels, and full episodes of Indian dramas, web-series, latest movies and American TV shows for just Rs.25/week or Rs.100/month. "
                }
              },
              {
                "@type": "Question",
                "name": "Promo codes",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "You can avail free trial with special promo codes. After the end of trial period, regular subscription fee will be charged. You can cancel your free trial or unsubscribe any time from your profile page. "
                }
              },
              {
                "@type": "Question",
                "name": "Is Tapmad TV available on all devices?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Tapmad TV app is available for Web, Android and IOS users in Pakistan. Also the chrome-cast feature enables you to watch live stream on your android TV."
                }
              },
              {
                "@type": "Question",
                "name": "Can I watch Tapmad on Smart TV?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Tapmad TV app is also available for your Android / Smart TV. Using chrome-cast, you can watch Tapmad TV on Samsung, TCL, Haier and other Smart TV brands."
                }
              },
              {
                "@type": "Question",
                "name": "I am having slow streaming or buffering problem.",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Poor network or bad internet connection is the most common reason for slow streaming or buffering. Check video setting and select a different (lower) quality to stream the video in case of poor internet connection."
                }
              },
              {
                "@type": "Question",
                "name": "I can’t log in / sign up to Tapmad Premium, what should I do?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "If you are having trouble logging in or signing up to your Tapmad account, then please contact us at [ support@tapmad.com ]. We will get back to you with the best possible solution as soon as possible."
                }
              }
              ]
            })
          }}
        />
      </Head>
      <div>
        <div className="container ng-scope">
          <div className="row">
            <div className="col-lg-12">
              <br />
              <br />
              <br />
              <br />
              <h1 style={{ textAlign: "center" }}>FAQs</h1>
              <p>
                Here you will find answers to some frequently asked questions
                about Tapmad TV subscription and our services.
            </p>

              {data.length
                ? data.map((m, i) => (
                  <>
                    <h5 key={i}>{m.question}</h5>
                    {m.type == "heading" ? (
                      <div className="heading">
                        <h3>{m.answer}</h3>
                      </div>
                    ) : m.anchor != null ? (
                      <p
                        dangerouslySetInnerHTML={{
                          __html: m.answer.replace(m.changeFrom, m.changeTo),
                        }}
                      ></p>
                    ) : (
                      <>{m.answer}</>
                    )}

                    {m.type == "list" ? (
                      <ul className="faqs-ul">
                        {m.bullets.split(",").map((n, j) => (
                          <li key={j}>{n}</li>
                        ))}
                      </ul>
                    ) : (
                      ""
                    )}
                  </>
                ))
                : null}
              {/* <h5>What is Tapmad?</h5>
            <p>
              {" "}
              TAPMAD is Pakistan's leading on-demand video streaming platform
              that offers live TV Streaming of 80+ local, regional and
              international channels. With Tapmad Premium app subscription you
              can instantly watch your favorite web-series, drama serials, TV
              shows, online movies and live sports anytime anywhere. Tapmad TV
              is an app offers IOS and Android Users to watch Live TV streaming
              including all Pakistani news channels and 20+ international
              channels such as BBC World News, CNN, Animal Planet, National
              Geographic, Discovery, and Voice of America.
            </p>
            <br />

            <h5>How do I subscribe to Tapmad TV?</h5>

            <p>
              We've made signing up to Tapmad as easy as possible. Subscribing
              to Tapmad Premium is quick and easy. There are four different ways
              to subscribe to Tapmad TV.{" "}
            </p>
            <ul className="faqs-ul">
              <li>Sim Card</li>
              <li>Credit/Debit Card</li>
              <li>Easy Paisa</li>
              <li>Jazz Cash</li>
            </ul>

            <br />
            <h5>How do I unsubscribe from Tapmad?</h5>
            <p>To cancel your Tapmad subscription follow these steps;</p>
            <ul className="faqs-ul">
              <li>Log in to your Tapmad TV account (via website).</li>
              <li>Click on Account under your name.</li>
              <li>
                Then choose to "edit" your subscription under "Billing
                Information"
              </li>
              <li>
                Click on the "cancel" option to cancel or turn off your Tapmad
                subscription.
              </li>
            </ul>
            <p></p>

            <br />

            <div className="heading">
              <h3>Tapmad Plans</h3>
            </div>

            <h5>Is Tapmad TV FREE?</h5>
            <p>
              You can watch limited collection of movies, web series and Live TV
              Channels for FREE at Tapamad. Tapmad TV give free access to 80+
              national and regional live news channels, Pakistani Drama Channels
              and International TV Channels including Hum TV, Express
              Entertainment, Samaa News, 92 News HD, Baby TV and Cartoon
              Network.
              <br />
              All Indian TV channels, Zee TV Shows, Indian dramas, latest
              Bollywood movies, English TV shows and are only accessible with
              Tapmad Premium.{" "}
            </p>

            <br />
            <h5>What is Tapmad premium?</h5>
            <p>
              Tapmad Premium is simply a non-stop entertainment. With Premium
              subscription of Tapmad TV, you can watch 80+ Live TV channels
              (including Pakistani, Indian and American TV channels), Zee
              entertainment channels, and full episodes of Indian dramas,
              web-series, latest movies and American TV shows for just
              Rs.25/week. Pay with Easy Paisa and get access to Tapmad Premium
              for just Rs. 5 (for the first month only).{" "}
            </p>

            <br />

            <div className="heading">
              <h3>Tapmad App</h3>
            </div>

            <h5>Is Tapmad TV available on all devices?</h5>
            <p>
              Tapmad TV app is available for Web, Android and IOS users in
              Pakistan.{" "}
            </p>

            <br />
            <h5>Can I watch Tapmad on Smart TV?</h5>
            <p>
              You can also access Tapmad on your Changhong Ruba Smart TV. We are
              trying our best and working truly hard to extend our boundaries.
              Hope you will soon be able to access Tapmad TV on Samsung, TCL,
              Haier and other Smart TV brands.
            </p>
            <br />
            <div className="heading">
              <h3>Site Issues</h3>
            </div>

            <h5>I am having slow streaming or buffering problem.</h5>
            <p>
              Poor network or bad internet connection is the most common reason
              for slow streaming or buffering. Check video setting and select a
              different (lower) quality to stream the video in case of poor
              internet connection.
            </p>

            <br />
            <h5>
              I can’t log in / sign up to Tapmad Premium, what should I do?
            </h5>
            <p>
              If you are having trouble logging in or signing up to your Tapmad
              account, then please contact us at{" "}
              <a href="mailto:customerservice@tapmad.com">
                <i>
                  <u>customerservice@tapmad.com</u>
                </i>
              </a>
              . We will get back to you with the best possible solution as soon
              as possible.
            </p> */}

              <br />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
