import React, { useContext, useEffect, useState } from "react";

import { Button } from "primereact/button";
import AuthContext from "../AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";

export const Login = () => {
    let location = useLocation();
    let navigate = useNavigate();
    let from = location.state?.from?.pathname || "/";

    const { signIn, signOut } = useContext(AuthContext);

    useEffect(() => {
        signOut();
    }, []);

    const login = () => {
        signIn();
        navigate(from, { replace: true });
    };
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div className="p-grid login-demo">
            <div className="login-panel">
                <div className="text-center mb-5">
                    <div className="text-900 text-3xl font-medium mb-3">Hoş Geldiniz</div>
                    <span className="text-600 font-medium line-height-3">Hesabınız yok mu?</span>
                    <a className="font-medium no-underline ml-2 text-blue-500 cursor-pointer">Tıklayın!</a>
                </div>
                <InputText placeholder="Email" id="inputtext" value={email} onChange={(e) => setEmail(e.target.value)} />
                <Password placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <Button onClick={() => login()}>
                    <span className="p-button-label">LOGIN</span>
                </Button>
            </div>
        </div>
    );
};
