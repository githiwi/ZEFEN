import teddy from "../audio/teddy.mp3";
import TeddyAfro from "../artist/TeddyAfro.jpg";
import mulatu from "../artist/mulatu.jpg";
import mehamud from "../artist/mehamud.jpg";
import maritu from "../artist/maritu.jpeg";
import gigi from "../artist/gigi.jpeg";
import gashaberamola from "../artist/gashaberamola.jpg";
import kukusebsebe from "../artist/kukusebsebe.jpg";
import aster from "../artist/aster.jpg";
import asterewedalew from "../audio/asterewedalew.mp3";
import gigiabayie from "../audio/gigiabayie.mp3";
import kukumotihen from "../audio/kukumotihen.mp3";
import mahmoudegdayenesh from "../audio/mahmoudegdayenesh.mp3";
import tizita from "../audio/tizita.mp3";

const DataCategories = {
  box1: {
    title: " ባቲ",
    description: "This is genre A description.",
    songs: [
      {
        title: "Song 1",
        artist: "Tedrose Kasahun ",
        image: TeddyAfro,
        music: teddy,
      },
      {
        title: "Song 2",
        artist: "Aster Aweke",
        image: aster,
        music: asterewedalew,
      },
    ],
  },
  box2: {
    title: " አምባሰል",
    description: "This is genre B description.",
    songs: [
      {
        title: "Song 1",
        artist: "Egegayew shibabaw",
        image: gigi,
        music: gigiabayie,
      },
      {
        title: "Song 2",
        artist: "Kuku sebsebe",
        image: kukusebsebe,
        music: kukumotihen,
      },
    ],
  },
  box3: {
    title: " ትዝታ",
    description: "This is genre C description.",
    songs: [
      {
        title: "Song 1",
        artist: "Mehamud ahmed 1",
        image: mehamud,
        music: mahmoudegdayenesh,
      },
      {
        title: "Song 2",
        artist: "Maritu",
        image: maritu,
        music: tizita,
      },
    ],
  },
  box4: {
    title: " አምባሰል",
    description: "This is genre D description.",
    songs: [
      {
        title: "Song 1",
        artist: "Egegayew shibabaw",
        image: gigi,
        music: gigiabayie,
      },
      {
        title: "Song 3",
        artist: "Artist 2",
        image: aster,
        music: asterewedalew,
      },
    ],
  },
};
export default DataCategories;
