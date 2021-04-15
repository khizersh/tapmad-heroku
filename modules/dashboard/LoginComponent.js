import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import swal from "sweetalert";
import { getCredentials } from "../../services/apilinks";
import { Cookie } from "../../services/cookies";
import { get } from "../../services/http-service";
import { DashboardService } from "./Dashboard.Service";
import { useRouter } from "next/router";

const LoginComponent = () => {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [secret, setSecret] = useState("");

  const onCLick = async () => {
    const resp = await get(getCredentials);
    const data = DashboardService.getListOfUsers(resp);
    let isAuthenticated = false;
    if (secret != "@@@///") {
      return swal({
        title: "Not Authtenticated Person!",
        timer: 2000,
        icon: "error",
      });
    }
    if (data.length) {
      data.map((m) => {
        if (m.username == username && m.password == password) {
          if (m.active) {
            isAuthenticated = true;
            return;
          }
        }
      });
    }

    if (isAuthenticated) {
      Cookie.setCookies("adminAuth", 1);
      Cookie.setCookies("secret", "@@@///");

      swal({
        title: "Login Successfully!",
        timer: 2000,
        icon: "success",
      });
      router.push("/dashboard");
    } else {
      swal({
        title: "Not Authtenticated Person!",
        timer: 2000,
        icon: "error",
      });
    }
  };
  return (
    <div className="container-fluid pos">
      <div className="row">
        <div className="col-md-4 col-12"></div>
        <div className="col-md-4 col-12">
          <div className="card shadow">
            <div className="card-title title-login text-center text-white">
              Login
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-12">
                  <Form.Group>
                    <Form.Control
                      type="email"
                      placeholder="Enter username"
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </Form.Group>
                </div>
                <div className="col-12">
                  <Form.Group>
                    <Form.Control
                      type="password"
                      placeholder="Enter password"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </Form.Group>
                </div>
                <div className="col-12">
                  <Form.Group>
                    <Form.Control
                      type="password"
                      placeholder="Enter Secret"
                      onChange={(e) => setSecret(e.target.value)}
                    />
                  </Form.Group>
                </div>
                <div className="col-12 text-center">
                  <Button
                    variant="primary"
                    type="submit"
                    onClick={onCLick}
                    className="text-white"
                  >
                    Submit
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-12"></div>
      </div>
    </div>
  );
};

export default LoginComponent;
