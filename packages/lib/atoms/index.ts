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

export const userNameAtom = atom({
    key : "userNameAtom",
    default : "Anonymous"
});