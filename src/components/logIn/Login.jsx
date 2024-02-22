import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { observer } from "mobx-react";
import { Button, Card, TextField } from "@mui/material";
import { Login } from "../../data/servers/dataServer";
import dataStore from "../../data/stores/dataStore"


const LogIn = (observer(() => {

    const [login, setLogin] = useState(
        {
            nickname: "",
            password: "",
        })

    const [isLogin, setIsLogin] = useState();

    const handleChange = (event) => {
        const { name, value } = event.target;
        setLogin({ ...login, [name]: value });
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsLogin(await Login(login.nickname, login.password));
    }

    const navigate = useNavigate()

    useEffect(() => {

        // ♥ login screen → Username and password verification against the server
        // ♥ navigate to right screen → if gabai to synagogue view, if user to the find form
        if (isLogin === true) {
            if (dataStore.user.isGabai === true) {
                if (dataStore.user.synagogue === null) {
                    navigate("/synagogueForm");
                }
                else {
                    navigate("/synagogueView");
                }
            }
            else {
                navigate("/findMinyan");
            }
        }
        else if (isLogin === false) {

            // ♥ case not found → massage & clean inputs
            alert("לא נמצאו פרטי המשתמש");
            setLogin({
                nickname: "",
                password: "",
            });
        }

    }, [isLogin])


    // get user from local storage
    // var storedUser = localStorage.getItem('user');
    // var parsedUser = JSON.parse(storedUser);


    return (
        <>
            <form>

                <TextField
                    label="שם משתמש"
                    name="nickname"
                    value={login.nickname}
                    onChange={handleChange}
                />
                <br />
                <TextField
                    label="שם משתמש"
                    name="password"
                    value={login.password}
                    onChange={handleChange}
                />
                <br />
                <Button onClick={handleSubmit}>התחבר</Button>
                <br />

                <Card variant="none">

                    <Link to="/resetPass" color="primary">
                        שכחתי סיסמא
                    </Link>
                    <br />
                    <Link to="/register">
                        עדיין לא מחובר? הרשם  עכשיו!
                    </Link>
                    <br />
                    <Link to="/findMinyan">
                        התחבר כאורח
                    </Link>

                </Card>
            </form>
        </>
    );
}))

export default LogIn;