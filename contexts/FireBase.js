import React, { useEffect } from "react";
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


    useEffect(() => {
        if (!app.apps.length) {
            app.initializeApp(config);
            const firebaseConfig = {
                app: app,
                database: app.database(),
            };
            setFirebase(firebaseConfig);
        } else {
            // setFirebase(firebaseConfig);

        }
    }, [])

    return (
        <>
            <FirebaseContext.Provider value={firebase}>
                {children}
            </FirebaseContext.Provider>
        </>
    );
}