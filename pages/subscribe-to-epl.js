import React, { useEffect, useRef } from "react";
import AuthProvider from "../contexts/AuthContext";
import Register from "../modules/auth/Register";
import requestIp from "request-ip";
import { isAuthentictedUser } from "../services/utils";

export default function SignUp(props) {
    useEffect(() => {
        if (isAuthentictedUser()) {
            try {
                setTimeout(() => {
                    document.getElementsByClassName('package1')[0].addEventListener('click', function (event) {
                        event.stopPropagation();
                    })
                }, 2000)

            } catch (err) {
                console.log(err);
            }
        }
    }, [props.auth])
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
