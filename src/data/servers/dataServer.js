import dataStore from "../stores/dataStore"

const url = "https://localhost:7219/api/User";
var dynamicUrl = "";
var options = {
    method: "",
    headers: {
        "Content-Type": "application/json",
    }
};


const AddUser = async (user) => {
    options.method = "POST";
    options.body = JSON.stringify(user);

    try {
        const response = await fetch(url, options);
        if (response.status == 200) {

            const data = await response.json();

            // add user to store
            dataStore.SetUser(data);

            // todo! → add jwt to localStorage
            // localStorage.setItem('user', JSON.stringify(user));
        }
        else {
            throw new Error("register faild");
        }
    } catch (error) {
        console.log(error);
    }
};


const Login = async (nickname, password) => {
    dynamicUrl = url + `/${nickname},${password}`;
    options.method = "GET";

    try {
        const response = await fetch(dynamicUrl, options);
        if (response.status == 200) {
            const user = await response.json();

            // add user to store
            await dataStore.SetUser(user);
            // JSON.parse(JSON.stringify(dataStore.user.synagogue));
            // const JSONuser = JSON.parse(user);

            // add jwt to localStorage
            // localStorage.setItem('user', JSON.stringify(user));

            return true;
        }
        else {
            throw new Error("details not found");
        }
    } catch (error) {
        console.log(error);
        return false;
    }
}



export { AddUser, Login };