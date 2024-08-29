import {atom} from "recoil"

export const balanceAtom = atom({
    key : "balanceAtom",
    default : 0
});

export const userDataAtom = atom({
    key : "userDataAtom",
    default : {
        id : ""
    }
});