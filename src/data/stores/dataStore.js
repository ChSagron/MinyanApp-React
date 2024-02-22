import { makeObservable, observable, action, runInAction } from 'mobx';

class DataStore {
    user = {};
    darkMode = true;
    findMinyan = {};
    optionalResults = [];


    constructor() {
        makeObservable(this, {
            user: observable,
            SetUser: action.bound,

            darkMode: observable,
            setDarkMode: action,

            findMinyan: observable,
            SetFindMinyan: action,

            AddMinyanIfGabai: action.bound,
        });

    }


    SetUser(data) {
        runInAction(() => {
            this.user = data;
            // console.log("SetUser - user:" , this.user);
            if (data.isGabai === true) {
                sortMinyans();
            }
        });
    }

    setDarkMode() {
        console.log("setDarkMode - darkMode:", this.darkMode);
        this.darkMode = !this.darkMode;
    }


    AddMinyanIfGabai(minyan) {
        if (this.user.isGabai === true) {
            var newUser = this.user;
            newUser.synagogue.minyans.push(minyan);
            this.user = newUser;
            sortMinyans();
            console.log("AddMinyanIfGabai - update user:" , this.user);
        }
    }


    SetFindMinyan(form) {
        this.findForm = { ...form };
        console.log("SetFindMinyan - findForm", this.findForm);
    }
}


const dataStore = new DataStore();

export default dataStore;



// todo! → pass to minyan store
// todo! → check when adding new - prtial sorting
// ♥ sort minyans list → fixed first - order by prayer. unfixed order by date-time
const sortMinyans = () => {

    dataStore.user.synagogue.minyans.sort((a, b) => {
        if (a.isFixed !== b.isFixed) {
            return a.isFixed ? -1 : 1; // isFixed first (true before false)
        } else if (a.prayer !== b.prayer) {
            return a.prayer - b.prayer; // order by prayer
        } else {
            // isFixed & prayer are same → order by dateTime
            return new Date(a.dateTime) - new Date(b.dateTime);
        }
    });

    console.log("minyans sorted", dataStore.user.synagogue.minyans); // ---
}
