import { atom, selector } from "recoil";

export const linkAtom = atom({
    key:"linkAtom",
    default:""
})

export const fetchedDataSelector = selector({
    key:"getData",
    get: ({get}) =>{
        const playlistId = get(linkAtom);
        console.log(playlistId)
    }
})