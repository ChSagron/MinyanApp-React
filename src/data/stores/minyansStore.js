import { makeObservable, observable, action } from 'mobx';

class MinyansStore {
    optionalMinyansList = [];

    constructor() {
        makeObservable(this, {
            optionalMinyansList: observable,
            SetOptionalMinyansList: action
        })
    }

    SetOptionalMinyansList(data) {
        this.optionalMinyansList = [...data];
        console.log("SetOptionalMinyansList - optionalMinyansList:", this.optionalMinyansList);
    }
}

const minyansStore = new MinyansStore();

export default minyansStore;