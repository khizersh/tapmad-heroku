// will remove after epl

import React, { useContext, useEffect, useRef } from "react";
import AuthProvider, { Authcontext } from "../contexts/AuthContext";
import Register from "../modules/auth/Register";
import requestIp from "request-ip";
import { isAuthentictedUser } from "../services/utils";
import { MainContext } from "../contexts/MainContext";

export default function SubscribeToEpl(props) {
    const { initialState } = useContext(MainContext);
    useEffect(() => {
        if (initialState.SignUpRendered) {
            if (isAuthentictedUser()) {
                try {
                    document.getElementsByClassName('package1')[0].addEventListener('click', function (event) {
                        event.stopPropagation();
                    })
                } catch (err) {
                    console.log(err);
                }
            }
        }
    }, [initialState.SignUpRendered])

    return (
        <div>
            <AuthProvider>
                <Register {...props} />
            </AuthProvider>
        </div>
    );
}

export function getServerSideProps(context) {
    var ip = requestIp.getClientIp(context.req);
    if (process.env.TAPENV == "local") {
        ip = "39.44.217.70";
    }
    return {
        props: {
            noSideBar: true,
            auth: true,
            ip: ip,
            env: process.env.TAPENV
        },
    };
}
