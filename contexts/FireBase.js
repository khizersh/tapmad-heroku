import React from "react";
import app from "firebase/app";
import "firebase/database";

export const FirebaseContext = React.createContext(null);

export default function FireBaseProvider({ children }) {
    const [firebase, setFirebase] = React.useState(null);

    const config = {
        apiKey: "AIzaSyBANDPB72l0xyUbX9AsxcOKsSkm1rPGE8A",
        authDomain: "tapmad-tv-159112.firebaseapp.com",
        databaseURL: "https://tapmad-tv-159112.firebaseio.com/",
        storageBucket: "tapmad-tv-159112.appspot.com",
    };

    if (!app.apps.length) {
        app.initializeApp(config);
        const firebaseConfig = {
            app: app,
            database: app.database(),
            api: {
                getLiveUsers,
            },
        };
        setFirebase(firebaseConfig);
    }

    function getLiveUsers() {
        if (firebase) {
            firebase.database.ref("Game").on("value", (snapshot) => {
                const vals = snapshot.val();
                const _records = [];
                // for (var key in vals) {
                //     if (vals[key]) {
                //         _records.push({
                //             ...vals[key],
                //             id: key,
                //         });
                //     }
                // }
                // setFirebase({ ...firebase, streams: [..._records] });
                console.log("Context ", vals);
            });
        }
    }


    return (
        <>
            <FirebaseContext.Provider value={firebase}>
                {children}
            </FirebaseContext.Provider>
        </>
    );
}