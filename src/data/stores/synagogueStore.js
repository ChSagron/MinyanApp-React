import { makeObservable, observable, action } from 'mobx';

class SynagogueStore {
    synagogueList = [];

    constructor() {
        makeObservable(this, {
            synagogueList: observable,
            SetSynagogueList: action,
            AddMinyanToSynagogue: action
        })
    }

    SetSynagogueList(data) {
        this.synagogueList = data;
    }

    AddMinyanToSynagogue(minyan, synagogueId) {
        var s = this.synagogueList.find(s => s.id === synagogueId);
        if (s != null) {
            s.minyans.push(minyan);
            this.synagogueList = [...this.synagogueList];
        }
    }
}

const synagogueStore = new SynagogueStore();

export default synagogueStore;