
import synagogueStore from "../stores/synagogueStore"


const url = "https://localhost:7219/api/Synagogue";
var dynamicUrl = "";
var options = {
    method: "",
    headers: {
        "Content-Type": "application/json"
    }
}


const GetTop10 = async (lat, lng) => {
    dynamicUrl = url + `/${lat},${lng}`;
    options.method = "GET";

    try {
        const response = await fetch(url, options);
        if (response.status == 200) {
            const data = await response.json();
            // console.log("GetTop10 - data", data);

            // add to store
            synagogueStore.SetSynagogueList(data);
        }
        else {
            throw new Error("no minyans");
        }
    } catch (error) {
        console.log(error);
    }
}


const AddSynagogue = async (synagogue) => {
    options.method = "POST";
    options.body = JSON.stringify(synagogue);
    try {
        const response = await fetch(url, options);
        if (response.status == 200) {
            const data = await response.json();
            // console.log(data);
        }
        else {
            throw new Error("faild to add");
        }
    } catch (error) {
        console.log(error);
    }
};

export { AddSynagogue, GetTop10 };