import dataStore from "../stores/dataStore";
import minyansStore from "../stores/minyansStore";
import synagogueStore from "../stores/synagogueStore";


const url = "https://localhost:7219/api/Minyan";
var dynamicUrl = "";
var options = {
    method: "",
    headers: {
        "Content-Type": "application/json"
    }
}


// todo! → get minyans according to the search result
const GetMinyans = async () => {
    options.method = "GET";
    try {
        const response = await fetch(url, options);
        if (response.status == 200) {
            const data = await response.json();
            // console.log("GetMinyans - data:", data);
            minyansStore.SetOptionalMinyansList(data);
        }
        else {
            throw new Error("no minyan");
        }
    } catch (error) {
        console.log(error);
    }
};



const AddMinyanToSynagogue = async (minyan, id) => {
    dynamicUrl = url + `/${id}`;
    options.method = "POST";
    options.body = JSON.stringify(minyan);
    try {
        const response = await fetch(dynamicUrl, options);
        if (response.status == 200) {
            const data = await response.json();
            console.log("AddMinyanToSynagogue - data:", data);

            // add minyan to store
            dataStore.AddMinyanIfGabai(data);
            alert("minyan added successfully");

            // add minyan to synagogue store
            synagogueStore.AddMinyanToSynagogue(data, dataStore.user.synagogue.id);
            console.log("synagogueStore.AddMinyanToSynagogue - update synagogue list:", synagogueStore.synagogueList); // ---
        }
        else {
            throw new Error("date/time already exists");
        }

    } catch (error) {
        alert("faild to add - date/time already exists");
        console.log(error);
    }
}

export { GetMinyans, AddMinyanToSynagogue };