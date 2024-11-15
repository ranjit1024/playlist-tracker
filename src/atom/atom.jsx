import { useMemo } from "react";
import { atom, selector } from "recoil";

export const linkAtom = atom({
  key: "linkAtom",
  default: "",
});

export const fetchedDataSelector = selector({
  key: "getData",
  get: ({ get }) => {
    const playlistId = get(linkAtom);
    console.log(playlistId);

    const playlistData = fetch(
      "https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=25&playlistId=PLB97yPrFwo5hpOay4v2nnDuUCZQMwyQzF&key=AIzaSyCF3pZViomusJa496PxOQ-ZeKa9E765AOY"
    ).then((res) =>
      res.json().then((finaldata) =>
        finaldata.items.map((item) => {
          const responseData = {
            title: item.snippet.title,
            thumbnail: item.snippet.thumbnails.default,
          };
          console.log(responseData);
        })
      )
    );
  },
});

export const fetchedDataAtom = atom({
  key:""
});
