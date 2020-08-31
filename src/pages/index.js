import React from "react";
import Tabs from "../components/tabs/tabs";
import Title from "../components/layout/header/title";

export default function Home() {
  return (
    <div>
      <Title />
      <Tabs response={response} />
    </div>
  );
}

const response = {
  error: "OK",
  limit: 100,
  offset: 0,
  number_of_page_results: 100,
  number_of_total_results: 745102,
  status_code: 1,
  results: [
    {
      aliases: null,
      api_detail_url: "https://comicvine.gamespot.com/api/issue/4000-6/",
      cover_date: "1952-10-01",
      date_added: "2008-06-06 11:10:16",
      date_last_updated: "2015-07-11 12:08:20",
      deck: null,
      description:
        "<p>The horrors of:</p><p>- Lost race!</p><p>- The man germ!</p><p>- Man in the hood!</p><p>- The things!</p><p>-Stories behind the stars, featuring the legendary battle between Hercules, Hydra and Iolaus!</p><p>Plus, two page long prose-stories.</p>",
      has_staff_review: false,
      id: 6,
      image: {
        icon_url:
          "https://comicvine1.cbsistatic.com/uploads/square_avatar/5/58993/2645776-chamber_of_chills__13_cgc_8.5.jpg",
        medium_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_medium/5/58993/2645776-chamber_of_chills__13_cgc_8.5.jpg",
        screen_url:
          "https://comicvine1.cbsistatic.com/uploads/screen_medium/5/58993/2645776-chamber_of_chills__13_cgc_8.5.jpg",
        screen_large_url:
          "https://comicvine1.cbsistatic.com/uploads/screen_kubrick/5/58993/2645776-chamber_of_chills__13_cgc_8.5.jpg",
        small_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_small/5/58993/2645776-chamber_of_chills__13_cgc_8.5.jpg",
        super_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_large/5/58993/2645776-chamber_of_chills__13_cgc_8.5.jpg",
        thumb_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_avatar/5/58993/2645776-chamber_of_chills__13_cgc_8.5.jpg",
        tiny_url:
          "https://comicvine1.cbsistatic.com/uploads/square_mini/5/58993/2645776-chamber_of_chills__13_cgc_8.5.jpg",
        original_url:
          "https://comicvine1.cbsistatic.com/uploads/original/5/58993/2645776-chamber_of_chills__13_cgc_8.5.jpg",
        image_tags: "All Images",
      },
      issue_number: "13",
      name: "The Lost Race",
      site_detail_url:
        "https://comicvine.gamespot.com/chamber-of-chills-magazine-13-the-lost-race/4000-6/",
      store_date: null,
      volume: {
        api_detail_url: "https://comicvine.gamespot.com/api/volume/4050-1487/",
        id: 1487,
        name: "Chamber of Chills Magazine",
        site_detail_url:
          "https://comicvine.gamespot.com/chamber-of-chills-magazine/4050-1487/",
      },
    },
    {
      aliases: null,
      api_detail_url: "https://comicvine.gamespot.com/api/issue/4000-7/",
      cover_date: null,
      date_added: "2008-06-06 11:10:16",
      date_last_updated: "2008-06-06 11:32:53",
      deck: null,
      description: null,
      has_staff_review: false,
      id: 7,
      image: {
        icon_url:
          "https://comicvine1.cbsistatic.com/uploads/square_avatar/0/4/8-1488-7-1-fighting-fronts-.jpg",
        medium_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_medium/0/4/8-1488-7-1-fighting-fronts-.jpg",
        screen_url:
          "https://comicvine1.cbsistatic.com/uploads/screen_medium/0/4/8-1488-7-1-fighting-fronts-.jpg",
        screen_large_url:
          "https://comicvine1.cbsistatic.com/uploads/screen_kubrick/0/4/8-1488-7-1-fighting-fronts-.jpg",
        small_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/8-1488-7-1-fighting-fronts-.jpg",
        super_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_large/0/4/8-1488-7-1-fighting-fronts-.jpg",
        thumb_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_avatar/0/4/8-1488-7-1-fighting-fronts-.jpg",
        tiny_url:
          "https://comicvine1.cbsistatic.com/uploads/square_mini/0/4/8-1488-7-1-fighting-fronts-.jpg",
        original_url:
          "https://comicvine1.cbsistatic.com/uploads/original/0/4/8-1488-7-1-fighting-fronts-.jpg",
        image_tags: "All Images",
      },
      issue_number: "3",
      name: null,
      site_detail_url:
        "https://comicvine.gamespot.com/fighting-fronts-3/4000-7/",
      store_date: null,
      volume: {
        api_detail_url: "https://comicvine.gamespot.com/api/volume/4050-1488/",
        id: 1488,
        name: "Fighting Fronts!",
        site_detail_url:
          "https://comicvine.gamespot.com/fighting-fronts/4050-1488/",
      },
    },
    {
      aliases: null,
      api_detail_url: "https://comicvine.gamespot.com/api/issue/4000-8/",
      cover_date: "1952-10-31",
      date_added: "2008-06-06 11:10:16",
      date_last_updated: "2017-03-13 08:55:38",
      deck: null,
      description: null,
      has_staff_review: false,
      id: 8,
      image: {
        icon_url:
          "https://comicvine1.cbsistatic.com/uploads/square_avatar/0/4/9-1489-8-1-tomb-of-terror.jpg",
        medium_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_medium/0/4/9-1489-8-1-tomb-of-terror.jpg",
        screen_url:
          "https://comicvine1.cbsistatic.com/uploads/screen_medium/0/4/9-1489-8-1-tomb-of-terror.jpg",
        screen_large_url:
          "https://comicvine1.cbsistatic.com/uploads/screen_kubrick/0/4/9-1489-8-1-tomb-of-terror.jpg",
        small_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/9-1489-8-1-tomb-of-terror.jpg",
        super_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_large/0/4/9-1489-8-1-tomb-of-terror.jpg",
        thumb_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_avatar/0/4/9-1489-8-1-tomb-of-terror.jpg",
        tiny_url:
          "https://comicvine1.cbsistatic.com/uploads/square_mini/0/4/9-1489-8-1-tomb-of-terror.jpg",
        original_url:
          "https://comicvine1.cbsistatic.com/uploads/original/0/4/9-1489-8-1-tomb-of-terror.jpg",
        image_tags: "All Images",
      },
      issue_number: "5",
      name: null,
      site_detail_url:
        "https://comicvine.gamespot.com/tomb-of-terror-5/4000-8/",
      store_date: null,
      volume: {
        api_detail_url: "https://comicvine.gamespot.com/api/volume/4050-1489/",
        id: 1489,
        name: "Tomb of Terror",
        site_detail_url:
          "https://comicvine.gamespot.com/tomb-of-terror/4050-1489/",
      },
    },
    {
      aliases: null,
      api_detail_url: "https://comicvine.gamespot.com/api/issue/4000-9/",
      cover_date: "1952-10-01",
      date_added: "2008-06-06 11:10:05",
      date_last_updated: "2008-06-06 11:32:53",
      deck: null,
      description: null,
      has_staff_review: false,
      id: 9,
      image: {
        icon_url:
          "https://comicvine1.cbsistatic.com/uploads/square_avatar/0/4/10-1418-9-1-witches-tales.jpg",
        medium_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_medium/0/4/10-1418-9-1-witches-tales.jpg",
        screen_url:
          "https://comicvine1.cbsistatic.com/uploads/screen_medium/0/4/10-1418-9-1-witches-tales.jpg",
        screen_large_url:
          "https://comicvine1.cbsistatic.com/uploads/screen_kubrick/0/4/10-1418-9-1-witches-tales.jpg",
        small_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/10-1418-9-1-witches-tales.jpg",
        super_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_large/0/4/10-1418-9-1-witches-tales.jpg",
        thumb_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_avatar/0/4/10-1418-9-1-witches-tales.jpg",
        tiny_url:
          "https://comicvine1.cbsistatic.com/uploads/square_mini/0/4/10-1418-9-1-witches-tales.jpg",
        original_url:
          "https://comicvine1.cbsistatic.com/uploads/original/0/4/10-1418-9-1-witches-tales.jpg",
        image_tags: "All Images",
      },
      issue_number: "15",
      name: null,
      site_detail_url:
        "https://comicvine.gamespot.com/witches-tales-15/4000-9/",
      store_date: null,
      volume: {
        api_detail_url: "https://comicvine.gamespot.com/api/volume/4050-1418/",
        id: 1418,
        name: "Witches Tales",
        site_detail_url:
          "https://comicvine.gamespot.com/witches-tales/4050-1418/",
      },
    },
    {
      aliases: null,
      api_detail_url: "https://comicvine.gamespot.com/api/issue/4000-10/",
      cover_date: "1950-03-01",
      date_added: "2008-06-06 11:09:36",
      date_last_updated: "2012-05-28 05:53:16",
      deck: null,
      description:
        "<p>Volume 7 Issue 02</p><p>Stories In This Issue...</p><p>Airboy</p><p>Yermak - Of the Steppers</p><p>The Breaks of the Game</p><p>Championship Stuff</p><p>The Heap</p>",
      has_staff_review: false,
      id: 10,
      image: {
        icon_url:
          "https://comicvine1.cbsistatic.com/uploads/square_avatar/0/4/11-1069-10-1-airboy-comics.jpg",
        medium_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_medium/0/4/11-1069-10-1-airboy-comics.jpg",
        screen_url:
          "https://comicvine1.cbsistatic.com/uploads/screen_medium/0/4/11-1069-10-1-airboy-comics.jpg",
        screen_large_url:
          "https://comicvine1.cbsistatic.com/uploads/screen_kubrick/0/4/11-1069-10-1-airboy-comics.jpg",
        small_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/11-1069-10-1-airboy-comics.jpg",
        super_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_large/0/4/11-1069-10-1-airboy-comics.jpg",
        thumb_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_avatar/0/4/11-1069-10-1-airboy-comics.jpg",
        tiny_url:
          "https://comicvine1.cbsistatic.com/uploads/square_mini/0/4/11-1069-10-1-airboy-comics.jpg",
        original_url:
          "https://comicvine1.cbsistatic.com/uploads/original/0/4/11-1069-10-1-airboy-comics.jpg",
        image_tags: "All Images",
      },
      issue_number: "73",
      name: null,
      site_detail_url:
        "https://comicvine.gamespot.com/airboy-comics-73/4000-10/",
      store_date: null,
      volume: {
        api_detail_url: "https://comicvine.gamespot.com/api/volume/4050-1069/",
        id: 1069,
        name: "Airboy Comics",
        site_detail_url:
          "https://comicvine.gamespot.com/airboy-comics/4050-1069/",
      },
    },
    {
      aliases: null,
      api_detail_url: "https://comicvine.gamespot.com/api/issue/4000-11/",
      cover_date: "1952-10-01",
      date_added: "2008-06-06 11:09:51",
      date_last_updated: "2012-06-29 11:20:33",
      deck: null,
      description: null,
      has_staff_review: false,
      id: 11,
      image: {
        icon_url:
          "https://comicvine1.cbsistatic.com/uploads/square_avatar/0/4/12-1253-11-1-black-diamond-wester.jpg",
        medium_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_medium/0/4/12-1253-11-1-black-diamond-wester.jpg",
        screen_url:
          "https://comicvine1.cbsistatic.com/uploads/screen_medium/0/4/12-1253-11-1-black-diamond-wester.jpg",
        screen_large_url:
          "https://comicvine1.cbsistatic.com/uploads/screen_kubrick/0/4/12-1253-11-1-black-diamond-wester.jpg",
        small_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/12-1253-11-1-black-diamond-wester.jpg",
        super_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_large/0/4/12-1253-11-1-black-diamond-wester.jpg",
        thumb_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_avatar/0/4/12-1253-11-1-black-diamond-wester.jpg",
        tiny_url:
          "https://comicvine1.cbsistatic.com/uploads/square_mini/0/4/12-1253-11-1-black-diamond-wester.jpg",
        original_url:
          "https://comicvine1.cbsistatic.com/uploads/original/0/4/12-1253-11-1-black-diamond-wester.jpg",
        image_tags: "All Images",
      },
      issue_number: "39",
      name: null,
      site_detail_url:
        "https://comicvine.gamespot.com/black-diamond-western-39/4000-11/",
      store_date: null,
      volume: {
        api_detail_url: "https://comicvine.gamespot.com/api/volume/4050-1253/",
        id: 1253,
        name: "Black Diamond Western",
        site_detail_url:
          "https://comicvine.gamespot.com/black-diamond-western/4050-1253/",
      },
    },
    {
      aliases: null,
      api_detail_url: "https://comicvine.gamespot.com/api/issue/4000-12/",
      cover_date: "1952-10-01",
      date_added: "2008-06-06 11:09:30",
      date_last_updated: "2013-07-06 20:50:08",
      deck: null,
      description: null,
      has_staff_review: false,
      id: 12,
      image: {
        icon_url:
          "https://comicvine1.cbsistatic.com/uploads/square_avatar/0/4/13-942-12-1-boy-comics.jpg",
        medium_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_medium/0/4/13-942-12-1-boy-comics.jpg",
        screen_url:
          "https://comicvine1.cbsistatic.com/uploads/screen_medium/0/4/13-942-12-1-boy-comics.jpg",
        screen_large_url:
          "https://comicvine1.cbsistatic.com/uploads/screen_kubrick/0/4/13-942-12-1-boy-comics.jpg",
        small_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/13-942-12-1-boy-comics.jpg",
        super_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_large/0/4/13-942-12-1-boy-comics.jpg",
        thumb_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_avatar/0/4/13-942-12-1-boy-comics.jpg",
        tiny_url:
          "https://comicvine1.cbsistatic.com/uploads/square_mini/0/4/13-942-12-1-boy-comics.jpg",
        original_url:
          "https://comicvine1.cbsistatic.com/uploads/original/0/4/13-942-12-1-boy-comics.jpg",
        image_tags: "All Images",
      },
      issue_number: "82",
      name: null,
      site_detail_url: "https://comicvine.gamespot.com/boy-comics-82/4000-12/",
      store_date: null,
      volume: {
        api_detail_url: "https://comicvine.gamespot.com/api/volume/4050-942/",
        id: 942,
        name: "Boy Comics",
        site_detail_url: "https://comicvine.gamespot.com/boy-comics/4050-942/",
      },
    },
    {
      aliases: null,
      api_detail_url: "https://comicvine.gamespot.com/api/issue/4000-13/",
      cover_date: "1952-10-01",
      date_added: "2008-06-06 11:10:07",
      date_last_updated: "2008-06-06 11:32:53",
      deck: null,
      description: null,
      has_staff_review: false,
      id: 13,
      image: {
        icon_url:
          "https://comicvine1.cbsistatic.com/uploads/square_avatar/0/4/14-1441-13-1-best-of-the-west.jpg",
        medium_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_medium/0/4/14-1441-13-1-best-of-the-west.jpg",
        screen_url:
          "https://comicvine1.cbsistatic.com/uploads/screen_medium/0/4/14-1441-13-1-best-of-the-west.jpg",
        screen_large_url:
          "https://comicvine1.cbsistatic.com/uploads/screen_kubrick/0/4/14-1441-13-1-best-of-the-west.jpg",
        small_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/14-1441-13-1-best-of-the-west.jpg",
        super_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_large/0/4/14-1441-13-1-best-of-the-west.jpg",
        thumb_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_avatar/0/4/14-1441-13-1-best-of-the-west.jpg",
        tiny_url:
          "https://comicvine1.cbsistatic.com/uploads/square_mini/0/4/14-1441-13-1-best-of-the-west.jpg",
        original_url:
          "https://comicvine1.cbsistatic.com/uploads/original/0/4/14-1441-13-1-best-of-the-west.jpg",
        image_tags: "All Images",
      },
      issue_number: "5",
      name: null,
      site_detail_url:
        "https://comicvine.gamespot.com/best-of-the-west-5/4000-13/",
      store_date: null,
      volume: {
        api_detail_url: "https://comicvine.gamespot.com/api/volume/4050-1441/",
        id: 1441,
        name: "Best of the West",
        site_detail_url:
          "https://comicvine.gamespot.com/best-of-the-west/4050-1441/",
      },
    },
    {
      aliases: null,
      api_detail_url: "https://comicvine.gamespot.com/api/issue/4000-15/",
      cover_date: null,
      date_added: "2008-06-06 11:09:47",
      date_last_updated: "2008-06-06 11:32:53",
      deck: null,
      description: null,
      has_staff_review: false,
      id: 15,
      image: {
        icon_url:
          "https://comicvine1.cbsistatic.com/uploads/square_avatar/0/4/16-1223-15-1-tim-holt.jpg",
        medium_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_medium/0/4/16-1223-15-1-tim-holt.jpg",
        screen_url:
          "https://comicvine1.cbsistatic.com/uploads/screen_medium/0/4/16-1223-15-1-tim-holt.jpg",
        screen_large_url:
          "https://comicvine1.cbsistatic.com/uploads/screen_kubrick/0/4/16-1223-15-1-tim-holt.jpg",
        small_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/16-1223-15-1-tim-holt.jpg",
        super_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_large/0/4/16-1223-15-1-tim-holt.jpg",
        thumb_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_avatar/0/4/16-1223-15-1-tim-holt.jpg",
        tiny_url:
          "https://comicvine1.cbsistatic.com/uploads/square_mini/0/4/16-1223-15-1-tim-holt.jpg",
        original_url:
          "https://comicvine1.cbsistatic.com/uploads/original/0/4/16-1223-15-1-tim-holt.jpg",
        image_tags: "All Images",
      },
      issue_number: "32",
      name: null,
      site_detail_url: "https://comicvine.gamespot.com/tim-holt-32/4000-15/",
      store_date: null,
      volume: {
        api_detail_url: "https://comicvine.gamespot.com/api/volume/4050-1223/",
        id: 1223,
        name: "Tim Holt",
        site_detail_url: "https://comicvine.gamespot.com/tim-holt/4050-1223/",
      },
    },
    {
      aliases: null,
      api_detail_url: "https://comicvine.gamespot.com/api/issue/4000-16/",
      cover_date: "1952-10-31",
      date_added: "2008-06-06 11:10:16",
      date_last_updated: "2018-04-27 12:16:04",
      deck: null,
      description:
        "<p><em>A murderer runs from the police and finds himself in a bar. He seems to be alone with just a bartender until the ghosts of those he's killed keep him company.</em></p><h2>Stories in this issue:</h2><ul><li>Hands Off!</li><li>Revenge From Beyond (short story prose)</li><li>The Corpse!</li><li>I Didn't See a Thing!</li><li>The Stroke of Midnight!</li></ul>",
      has_staff_review: false,
      id: 16,
      image: {
        icon_url:
          "https://comicvine1.cbsistatic.com/uploads/square_avatar/0/4/17-1497-16-1-journey-into-mystery.jpg",
        medium_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_medium/0/4/17-1497-16-1-journey-into-mystery.jpg",
        screen_url:
          "https://comicvine1.cbsistatic.com/uploads/screen_medium/0/4/17-1497-16-1-journey-into-mystery.jpg",
        screen_large_url:
          "https://comicvine1.cbsistatic.com/uploads/screen_kubrick/0/4/17-1497-16-1-journey-into-mystery.jpg",
        small_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/17-1497-16-1-journey-into-mystery.jpg",
        super_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_large/0/4/17-1497-16-1-journey-into-mystery.jpg",
        thumb_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_avatar/0/4/17-1497-16-1-journey-into-mystery.jpg",
        tiny_url:
          "https://comicvine1.cbsistatic.com/uploads/square_mini/0/4/17-1497-16-1-journey-into-mystery.jpg",
        original_url:
          "https://comicvine1.cbsistatic.com/uploads/original/0/4/17-1497-16-1-journey-into-mystery.jpg",
        image_tags: "All Images",
      },
      issue_number: "3",
      name: "Hands Off!",
      site_detail_url:
        "https://comicvine.gamespot.com/journey-into-mystery-3-hands-off/4000-16/",
      store_date: "1952-07-01",
      volume: {
        api_detail_url: "https://comicvine.gamespot.com/api/volume/4050-1497/",
        id: 1497,
        name: "Journey into Mystery",
        site_detail_url:
          "https://comicvine.gamespot.com/journey-into-mystery/4050-1497/",
      },
    },
    {
      aliases: null,
      api_detail_url: "https://comicvine.gamespot.com/api/issue/4000-17/",
      cover_date: "1952-10-01",
      date_added: "2008-06-06 11:10:07",
      date_last_updated: "2010-04-09 14:27:13",
      deck: null,
      description:
        "<u><b>Features Include:</b></u><br/>The Kidnaping Of General Syin!<br/>Soup's On<br/>Revenge<br/>Last Request!<br/>Forest of Terror",
      has_staff_review: false,
      id: 17,
      image: {
        icon_url:
          "https://comicvine1.cbsistatic.com/uploads/square_avatar/0/4/18-1433-17-1-spy-cases.jpg",
        medium_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_medium/0/4/18-1433-17-1-spy-cases.jpg",
        screen_url:
          "https://comicvine1.cbsistatic.com/uploads/screen_medium/0/4/18-1433-17-1-spy-cases.jpg",
        screen_large_url:
          "https://comicvine1.cbsistatic.com/uploads/screen_kubrick/0/4/18-1433-17-1-spy-cases.jpg",
        small_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/18-1433-17-1-spy-cases.jpg",
        super_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_large/0/4/18-1433-17-1-spy-cases.jpg",
        thumb_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_avatar/0/4/18-1433-17-1-spy-cases.jpg",
        tiny_url:
          "https://comicvine1.cbsistatic.com/uploads/square_mini/0/4/18-1433-17-1-spy-cases.jpg",
        original_url:
          "https://comicvine1.cbsistatic.com/uploads/original/0/4/18-1433-17-1-spy-cases.jpg",
        image_tags: "All Images",
      },
      issue_number: "13",
      name: "The Kidnaping Of General Syin!",
      site_detail_url:
        "https://comicvine.gamespot.com/spy-cases-13-the-kidnaping-of-general-syin/4000-17/",
      store_date: null,
      volume: {
        api_detail_url: "https://comicvine.gamespot.com/api/volume/4050-1433/",
        id: 1433,
        name: "Spy Cases",
        site_detail_url: "https://comicvine.gamespot.com/spy-cases/4050-1433/",
      },
    },
    {
      aliases: null,
      api_detail_url: "https://comicvine.gamespot.com/api/issue/4000-20/",
      cover_date: "1952-10-01",
      date_added: "2008-06-06 11:09:46",
      date_last_updated: "2008-06-06 11:32:53",
      deck: null,
      description: null,
      has_staff_review: false,
      id: 20,
      image: {
        icon_url:
          "https://comicvine1.cbsistatic.com/uploads/square_avatar/0/4/21-1213-20-1-wild-western.jpg",
        medium_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_medium/0/4/21-1213-20-1-wild-western.jpg",
        screen_url:
          "https://comicvine1.cbsistatic.com/uploads/screen_medium/0/4/21-1213-20-1-wild-western.jpg",
        screen_large_url:
          "https://comicvine1.cbsistatic.com/uploads/screen_kubrick/0/4/21-1213-20-1-wild-western.jpg",
        small_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/21-1213-20-1-wild-western.jpg",
        super_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_large/0/4/21-1213-20-1-wild-western.jpg",
        thumb_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_avatar/0/4/21-1213-20-1-wild-western.jpg",
        tiny_url:
          "https://comicvine1.cbsistatic.com/uploads/square_mini/0/4/21-1213-20-1-wild-western.jpg",
        original_url:
          "https://comicvine1.cbsistatic.com/uploads/original/0/4/21-1213-20-1-wild-western.jpg",
        image_tags: "All Images",
      },
      issue_number: "24",
      name: null,
      site_detail_url:
        "https://comicvine.gamespot.com/wild-western-24/4000-20/",
      store_date: null,
      volume: {
        api_detail_url: "https://comicvine.gamespot.com/api/volume/4050-1213/",
        id: 1213,
        name: "Wild Western",
        site_detail_url:
          "https://comicvine.gamespot.com/wild-western/4050-1213/",
      },
    },
    {
      aliases: null,
      api_detail_url: "https://comicvine.gamespot.com/api/issue/4000-23/",
      cover_date: "1952-10-01",
      date_added: "2008-06-06 11:09:32",
      date_last_updated: "2013-08-09 04:42:54",
      deck: null,
      description: null,
      has_staff_review: false,
      id: 23,
      image: {
        icon_url:
          "https://comicvine1.cbsistatic.com/uploads/square_avatar/0/4/22-989-23-1-blackhawk.jpg",
        medium_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_medium/0/4/22-989-23-1-blackhawk.jpg",
        screen_url:
          "https://comicvine1.cbsistatic.com/uploads/screen_medium/0/4/22-989-23-1-blackhawk.jpg",
        screen_large_url:
          "https://comicvine1.cbsistatic.com/uploads/screen_kubrick/0/4/22-989-23-1-blackhawk.jpg",
        small_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/22-989-23-1-blackhawk.jpg",
        super_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_large/0/4/22-989-23-1-blackhawk.jpg",
        thumb_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_avatar/0/4/22-989-23-1-blackhawk.jpg",
        tiny_url:
          "https://comicvine1.cbsistatic.com/uploads/square_mini/0/4/22-989-23-1-blackhawk.jpg",
        original_url:
          "https://comicvine1.cbsistatic.com/uploads/original/0/4/22-989-23-1-blackhawk.jpg",
        image_tags: "All Images",
      },
      issue_number: "57",
      name: "Slavery In Siberia",
      site_detail_url:
        "https://comicvine.gamespot.com/blackhawk-57-slavery-in-siberia/4000-23/",
      store_date: null,
      volume: {
        api_detail_url: "https://comicvine.gamespot.com/api/volume/4050-1819/",
        id: 1819,
        name: "Blackhawk",
        site_detail_url: "https://comicvine.gamespot.com/blackhawk/4050-1819/",
      },
    },
    {
      aliases: null,
      api_detail_url: "https://comicvine.gamespot.com/api/issue/4000-26/",
      cover_date: "1952-10-31",
      date_added: "2008-06-06 11:10:02",
      date_last_updated: "2017-02-20 11:08:41",
      deck: null,
      description: null,
      has_staff_review: false,
      id: 26,
      image: {
        icon_url:
          "https://comicvine1.cbsistatic.com/uploads/square_avatar/0/4/25-1399-26-1-blue-bolt-weird-tale.jpg",
        medium_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_medium/0/4/25-1399-26-1-blue-bolt-weird-tale.jpg",
        screen_url:
          "https://comicvine1.cbsistatic.com/uploads/screen_medium/0/4/25-1399-26-1-blue-bolt-weird-tale.jpg",
        screen_large_url:
          "https://comicvine1.cbsistatic.com/uploads/screen_kubrick/0/4/25-1399-26-1-blue-bolt-weird-tale.jpg",
        small_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/25-1399-26-1-blue-bolt-weird-tale.jpg",
        super_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_large/0/4/25-1399-26-1-blue-bolt-weird-tale.jpg",
        thumb_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_avatar/0/4/25-1399-26-1-blue-bolt-weird-tale.jpg",
        tiny_url:
          "https://comicvine1.cbsistatic.com/uploads/square_mini/0/4/25-1399-26-1-blue-bolt-weird-tale.jpg",
        original_url:
          "https://comicvine1.cbsistatic.com/uploads/original/0/4/25-1399-26-1-blue-bolt-weird-tale.jpg",
        image_tags: "All Images",
      },
      issue_number: "115",
      name: null,
      site_detail_url:
        "https://comicvine.gamespot.com/blue-bolt-weird-tales-of-terror-115/4000-26/",
      store_date: null,
      volume: {
        api_detail_url: "https://comicvine.gamespot.com/api/volume/4050-1399/",
        id: 1399,
        name: "Blue Bolt Weird Tales of Terror",
        site_detail_url:
          "https://comicvine.gamespot.com/blue-bolt-weird-tales-of-terror/4050-1399/",
      },
    },
    {
      aliases: null,
      api_detail_url: "https://comicvine.gamespot.com/api/issue/4000-28/",
      cover_date: "1952-10-01",
      date_added: "2008-06-06 11:10:09",
      date_last_updated: "2008-06-06 11:32:53",
      deck: null,
      description: null,
      has_staff_review: false,
      id: 28,
      image: {
        icon_url:
          "https://comicvine1.cbsistatic.com/uploads/square_avatar/0/4/27-1457-28-1-g-i-joe.jpg",
        medium_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_medium/0/4/27-1457-28-1-g-i-joe.jpg",
        screen_url:
          "https://comicvine1.cbsistatic.com/uploads/screen_medium/0/4/27-1457-28-1-g-i-joe.jpg",
        screen_large_url:
          "https://comicvine1.cbsistatic.com/uploads/screen_kubrick/0/4/27-1457-28-1-g-i-joe.jpg",
        small_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/27-1457-28-1-g-i-joe.jpg",
        super_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_large/0/4/27-1457-28-1-g-i-joe.jpg",
        thumb_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_avatar/0/4/27-1457-28-1-g-i-joe.jpg",
        tiny_url:
          "https://comicvine1.cbsistatic.com/uploads/square_mini/0/4/27-1457-28-1-g-i-joe.jpg",
        original_url:
          "https://comicvine1.cbsistatic.com/uploads/original/0/4/27-1457-28-1-g-i-joe.jpg",
        image_tags: "All Images",
      },
      issue_number: "16",
      name: null,
      site_detail_url: "https://comicvine.gamespot.com/gi-joe-16/4000-28/",
      store_date: null,
      volume: {
        api_detail_url: "https://comicvine.gamespot.com/api/volume/4050-1457/",
        id: 1457,
        name: "G.I. Joe",
        site_detail_url: "https://comicvine.gamespot.com/gi-joe/4050-1457/",
      },
    },
    {
      aliases: null,
      api_detail_url: "https://comicvine.gamespot.com/api/issue/4000-29/",
      cover_date: "1952-10-01",
      date_added: "2008-06-06 11:10:19",
      date_last_updated: "2013-02-10 16:31:41",
      deck: null,
      description: "<br/>",
      has_staff_review: false,
      id: 29,
      image: {
        icon_url:
          "https://comicvine1.cbsistatic.com/uploads/square_avatar/0/4/28-1503-29-1-uncanny-tales.jpg",
        medium_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_medium/0/4/28-1503-29-1-uncanny-tales.jpg",
        screen_url:
          "https://comicvine1.cbsistatic.com/uploads/screen_medium/0/4/28-1503-29-1-uncanny-tales.jpg",
        screen_large_url:
          "https://comicvine1.cbsistatic.com/uploads/screen_kubrick/0/4/28-1503-29-1-uncanny-tales.jpg",
        small_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/28-1503-29-1-uncanny-tales.jpg",
        super_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_large/0/4/28-1503-29-1-uncanny-tales.jpg",
        thumb_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_avatar/0/4/28-1503-29-1-uncanny-tales.jpg",
        tiny_url:
          "https://comicvine1.cbsistatic.com/uploads/square_mini/0/4/28-1503-29-1-uncanny-tales.jpg",
        original_url:
          "https://comicvine1.cbsistatic.com/uploads/original/0/4/28-1503-29-1-uncanny-tales.jpg",
        image_tags: "All Images",
      },
      issue_number: "3",
      name: null,
      site_detail_url:
        "https://comicvine.gamespot.com/uncanny-tales-3/4000-29/",
      store_date: null,
      volume: {
        api_detail_url: "https://comicvine.gamespot.com/api/volume/4050-1503/",
        id: 1503,
        name: "Uncanny Tales",
        site_detail_url:
          "https://comicvine.gamespot.com/uncanny-tales/4050-1503/",
      },
    },
    {
      aliases: null,
      api_detail_url: "https://comicvine.gamespot.com/api/issue/4000-30/",
      cover_date: "1952-10-01",
      date_added: "2008-06-06 11:09:18",
      date_last_updated: "2010-11-06 14:01:23",
      deck: null,
      description:
        "<p>1. Nancy <br/> <br/>2. Captain and the Kids <br/> <br/>3. Casey Ruggles</p>",
      has_staff_review: false,
      id: 30,
      image: {
        icon_url:
          "https://comicvine1.cbsistatic.com/uploads/square_avatar/0/4/29-874-30-1-sparkler-comics.jpg",
        medium_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_medium/0/4/29-874-30-1-sparkler-comics.jpg",
        screen_url:
          "https://comicvine1.cbsistatic.com/uploads/screen_medium/0/4/29-874-30-1-sparkler-comics.jpg",
        screen_large_url:
          "https://comicvine1.cbsistatic.com/uploads/screen_kubrick/0/4/29-874-30-1-sparkler-comics.jpg",
        small_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/29-874-30-1-sparkler-comics.jpg",
        super_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_large/0/4/29-874-30-1-sparkler-comics.jpg",
        thumb_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_avatar/0/4/29-874-30-1-sparkler-comics.jpg",
        tiny_url:
          "https://comicvine1.cbsistatic.com/uploads/square_mini/0/4/29-874-30-1-sparkler-comics.jpg",
        original_url:
          "https://comicvine1.cbsistatic.com/uploads/original/0/4/29-874-30-1-sparkler-comics.jpg",
        image_tags: "All Images",
      },
      issue_number: "107",
      name: null,
      site_detail_url:
        "https://comicvine.gamespot.com/sparkler-comics-107/4000-30/",
      store_date: null,
      volume: {
        api_detail_url: "https://comicvine.gamespot.com/api/volume/4050-874/",
        id: 874,
        name: "Sparkler Comics",
        site_detail_url:
          "https://comicvine.gamespot.com/sparkler-comics/4050-874/",
      },
    },
    {
      aliases: null,
      api_detail_url: "https://comicvine.gamespot.com/api/issue/4000-31/",
      cover_date: "1952-10-01",
      date_added: "2008-06-06 11:09:53",
      date_last_updated: "2011-01-09 17:32:04",
      deck: null,
      description: null,
      has_staff_review: false,
      id: 31,
      image: {
        icon_url:
          "https://comicvine1.cbsistatic.com/uploads/square_avatar/0/4/30-1283-31-1-marvel-tales.jpg",
        medium_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_medium/0/4/30-1283-31-1-marvel-tales.jpg",
        screen_url:
          "https://comicvine1.cbsistatic.com/uploads/screen_medium/0/4/30-1283-31-1-marvel-tales.jpg",
        screen_large_url:
          "https://comicvine1.cbsistatic.com/uploads/screen_kubrick/0/4/30-1283-31-1-marvel-tales.jpg",
        small_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/30-1283-31-1-marvel-tales.jpg",
        super_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_large/0/4/30-1283-31-1-marvel-tales.jpg",
        thumb_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_avatar/0/4/30-1283-31-1-marvel-tales.jpg",
        tiny_url:
          "https://comicvine1.cbsistatic.com/uploads/square_mini/0/4/30-1283-31-1-marvel-tales.jpg",
        original_url:
          "https://comicvine1.cbsistatic.com/uploads/original/0/4/30-1283-31-1-marvel-tales.jpg",
        image_tags: "All Images",
      },
      issue_number: "109",
      name: "A Sight For Sore Eyes",
      site_detail_url:
        "https://comicvine.gamespot.com/marvel-tales-109-a-sight-for-sore-eyes/4000-31/",
      store_date: null,
      volume: {
        api_detail_url: "https://comicvine.gamespot.com/api/volume/4050-1283/",
        id: 1283,
        name: "Marvel Tales",
        site_detail_url:
          "https://comicvine.gamespot.com/marvel-tales/4050-1283/",
      },
    },
    {
      aliases: null,
      api_detail_url: "https://comicvine.gamespot.com/api/issue/4000-32/",
      cover_date: "1952-10-01",
      date_added: "2008-06-06 11:10:05",
      date_last_updated: "2009-11-24 19:36:33",
      deck: null,
      description:
        "<h2> Five amazing war stories!!  </h2><br/>Surrender, Hell!<br/>The Deadliest Enemy - Text story<br/>Troop Movement<br/>Surprise Attack!<br/>Barbed Wire",
      has_staff_review: false,
      id: 32,
      image: {
        icon_url:
          "https://comicvine1.cbsistatic.com/uploads/square_avatar/0/4/31-1423-32-1-battle.jpg",
        medium_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_medium/0/4/31-1423-32-1-battle.jpg",
        screen_url:
          "https://comicvine1.cbsistatic.com/uploads/screen_medium/0/4/31-1423-32-1-battle.jpg",
        screen_large_url:
          "https://comicvine1.cbsistatic.com/uploads/screen_kubrick/0/4/31-1423-32-1-battle.jpg",
        small_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/31-1423-32-1-battle.jpg",
        super_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_large/0/4/31-1423-32-1-battle.jpg",
        thumb_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_avatar/0/4/31-1423-32-1-battle.jpg",
        tiny_url:
          "https://comicvine1.cbsistatic.com/uploads/square_mini/0/4/31-1423-32-1-battle.jpg",
        original_url:
          "https://comicvine1.cbsistatic.com/uploads/original/0/4/31-1423-32-1-battle.jpg",
        image_tags: "All Images",
      },
      issue_number: "13",
      name: "Surrender, Hell!",
      site_detail_url:
        "https://comicvine.gamespot.com/battle-13-surrender-hell/4000-32/",
      store_date: null,
      volume: {
        api_detail_url: "https://comicvine.gamespot.com/api/volume/4050-1423/",
        id: 1423,
        name: "Battle",
        site_detail_url: "https://comicvine.gamespot.com/battle/4050-1423/",
      },
    },
    {
      aliases: null,
      api_detail_url: "https://comicvine.gamespot.com/api/issue/4000-33/",
      cover_date: "1952-10-01",
      date_added: "2008-06-06 11:09:41",
      date_last_updated: "2013-02-08 20:54:54",
      deck: null,
      description: null,
      has_staff_review: false,
      id: 33,
      image: {
        icon_url:
          "https://comicvine1.cbsistatic.com/uploads/square_avatar/0/4/32-1172-33-1-lone-ranger-the.jpg",
        medium_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_medium/0/4/32-1172-33-1-lone-ranger-the.jpg",
        screen_url:
          "https://comicvine1.cbsistatic.com/uploads/screen_medium/0/4/32-1172-33-1-lone-ranger-the.jpg",
        screen_large_url:
          "https://comicvine1.cbsistatic.com/uploads/screen_kubrick/0/4/32-1172-33-1-lone-ranger-the.jpg",
        small_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/32-1172-33-1-lone-ranger-the.jpg",
        super_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_large/0/4/32-1172-33-1-lone-ranger-the.jpg",
        thumb_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_avatar/0/4/32-1172-33-1-lone-ranger-the.jpg",
        tiny_url:
          "https://comicvine1.cbsistatic.com/uploads/square_mini/0/4/32-1172-33-1-lone-ranger-the.jpg",
        original_url:
          "https://comicvine1.cbsistatic.com/uploads/original/0/4/32-1172-33-1-lone-ranger-the.jpg",
        image_tags: "All Images",
      },
      issue_number: "52",
      name: "The Outlaw's Fiancee",
      site_detail_url:
        "https://comicvine.gamespot.com/the-lone-ranger-52-the-outlaws-fiancee/4000-33/",
      store_date: null,
      volume: {
        api_detail_url: "https://comicvine.gamespot.com/api/volume/4050-1172/",
        id: 1172,
        name: "The Lone Ranger",
        site_detail_url:
          "https://comicvine.gamespot.com/the-lone-ranger/4050-1172/",
      },
    },
    {
      aliases: null,
      api_detail_url: "https://comicvine.gamespot.com/api/issue/4000-35/",
      cover_date: "1952-11-01",
      date_added: "2008-06-06 11:10:20",
      date_last_updated: "2019-10-16 00:35:52",
      deck: null,
      description: null,
      has_staff_review: false,
      id: 35,
      image: {
        icon_url:
          "https://comicvine1.cbsistatic.com/uploads/square_avatar/0/4/34-1534-35-1-space-adventures.jpg",
        medium_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_medium/0/4/34-1534-35-1-space-adventures.jpg",
        screen_url:
          "https://comicvine1.cbsistatic.com/uploads/screen_medium/0/4/34-1534-35-1-space-adventures.jpg",
        screen_large_url:
          "https://comicvine1.cbsistatic.com/uploads/screen_kubrick/0/4/34-1534-35-1-space-adventures.jpg",
        small_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/34-1534-35-1-space-adventures.jpg",
        super_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_large/0/4/34-1534-35-1-space-adventures.jpg",
        thumb_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_avatar/0/4/34-1534-35-1-space-adventures.jpg",
        tiny_url:
          "https://comicvine1.cbsistatic.com/uploads/square_mini/0/4/34-1534-35-1-space-adventures.jpg",
        original_url:
          "https://comicvine1.cbsistatic.com/uploads/original/0/4/34-1534-35-1-space-adventures.jpg",
        image_tags: "All Images",
      },
      issue_number: "3",
      name: null,
      site_detail_url:
        "https://comicvine.gamespot.com/space-adventures-3/4000-35/",
      store_date: "1952-09-01",
      volume: {
        api_detail_url: "https://comicvine.gamespot.com/api/volume/4050-1534/",
        id: 1534,
        name: "Space Adventures",
        site_detail_url:
          "https://comicvine.gamespot.com/space-adventures/4050-1534/",
      },
    },
    {
      aliases: null,
      api_detail_url: "https://comicvine.gamespot.com/api/issue/4000-37/",
      cover_date: "1952-11-01",
      date_added: "2008-06-06 11:10:08",
      date_last_updated: "2015-03-17 04:05:13",
      deck: null,
      description: null,
      has_staff_review: false,
      id: 37,
      image: {
        icon_url:
          "https://comicvine1.cbsistatic.com/uploads/square_avatar/0/4/36-1446-37-1-forbidden-worlds.jpg",
        medium_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_medium/0/4/36-1446-37-1-forbidden-worlds.jpg",
        screen_url:
          "https://comicvine1.cbsistatic.com/uploads/screen_medium/0/4/36-1446-37-1-forbidden-worlds.jpg",
        screen_large_url:
          "https://comicvine1.cbsistatic.com/uploads/screen_kubrick/0/4/36-1446-37-1-forbidden-worlds.jpg",
        small_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/36-1446-37-1-forbidden-worlds.jpg",
        super_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_large/0/4/36-1446-37-1-forbidden-worlds.jpg",
        thumb_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_avatar/0/4/36-1446-37-1-forbidden-worlds.jpg",
        tiny_url:
          "https://comicvine1.cbsistatic.com/uploads/square_mini/0/4/36-1446-37-1-forbidden-worlds.jpg",
        original_url:
          "https://comicvine1.cbsistatic.com/uploads/original/0/4/36-1446-37-1-forbidden-worlds.jpg",
        image_tags: "All Images",
      },
      issue_number: "11",
      name: null,
      site_detail_url:
        "https://comicvine.gamespot.com/forbidden-worlds-11/4000-37/",
      store_date: null,
      volume: {
        api_detail_url: "https://comicvine.gamespot.com/api/volume/4050-1446/",
        id: 1446,
        name: "Forbidden Worlds",
        site_detail_url:
          "https://comicvine.gamespot.com/forbidden-worlds/4050-1446/",
      },
    },
    {
      aliases: null,
      api_detail_url: "https://comicvine.gamespot.com/api/issue/4000-38/",
      cover_date: "1952-11-01",
      date_added: "2008-06-06 11:10:02",
      date_last_updated: "2012-10-07 10:08:21",
      deck: null,
      description: null,
      has_staff_review: false,
      id: 38,
      image: {
        icon_url:
          "https://comicvine1.cbsistatic.com/uploads/square_avatar/0/4/37-1379-38-1-operation-peril.jpg",
        medium_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_medium/0/4/37-1379-38-1-operation-peril.jpg",
        screen_url:
          "https://comicvine1.cbsistatic.com/uploads/screen_medium/0/4/37-1379-38-1-operation-peril.jpg",
        screen_large_url:
          "https://comicvine1.cbsistatic.com/uploads/screen_kubrick/0/4/37-1379-38-1-operation-peril.jpg",
        small_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/37-1379-38-1-operation-peril.jpg",
        super_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_large/0/4/37-1379-38-1-operation-peril.jpg",
        thumb_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_avatar/0/4/37-1379-38-1-operation-peril.jpg",
        tiny_url:
          "https://comicvine1.cbsistatic.com/uploads/square_mini/0/4/37-1379-38-1-operation-peril.jpg",
        original_url:
          "https://comicvine1.cbsistatic.com/uploads/original/0/4/37-1379-38-1-operation-peril.jpg",
        image_tags: "All Images",
      },
      issue_number: "13",
      name: null,
      site_detail_url:
        "https://comicvine.gamespot.com/operation-peril-13/4000-38/",
      store_date: null,
      volume: {
        api_detail_url: "https://comicvine.gamespot.com/api/volume/4050-1379/",
        id: 1379,
        name: "Operation: Peril",
        site_detail_url:
          "https://comicvine.gamespot.com/operation-peril/4050-1379/",
      },
    },
    {
      aliases: null,
      api_detail_url: "https://comicvine.gamespot.com/api/issue/4000-39/",
      cover_date: "1952-10-01",
      date_added: "2008-06-06 11:10:19",
      date_last_updated: "2008-06-06 11:32:53",
      deck: null,
      description: null,
      has_staff_review: false,
      id: 39,
      image: {
        icon_url:
          "https://comicvine1.cbsistatic.com/uploads/square_avatar/0/4/38-1513-39-1-out-of-the-night.jpg",
        medium_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_medium/0/4/38-1513-39-1-out-of-the-night.jpg",
        screen_url:
          "https://comicvine1.cbsistatic.com/uploads/screen_medium/0/4/38-1513-39-1-out-of-the-night.jpg",
        screen_large_url:
          "https://comicvine1.cbsistatic.com/uploads/screen_kubrick/0/4/38-1513-39-1-out-of-the-night.jpg",
        small_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/38-1513-39-1-out-of-the-night.jpg",
        super_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_large/0/4/38-1513-39-1-out-of-the-night.jpg",
        thumb_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_avatar/0/4/38-1513-39-1-out-of-the-night.jpg",
        tiny_url:
          "https://comicvine1.cbsistatic.com/uploads/square_mini/0/4/38-1513-39-1-out-of-the-night.jpg",
        original_url:
          "https://comicvine1.cbsistatic.com/uploads/original/0/4/38-1513-39-1-out-of-the-night.jpg",
        image_tags: "All Images",
      },
      issue_number: "5",
      name: null,
      site_detail_url:
        "https://comicvine.gamespot.com/out-of-the-night-5/4000-39/",
      store_date: null,
      volume: {
        api_detail_url: "https://comicvine.gamespot.com/api/volume/4050-1513/",
        id: 1513,
        name: "Out of the Night",
        site_detail_url:
          "https://comicvine.gamespot.com/out-of-the-night/4050-1513/",
      },
    },
    {
      aliases: null,
      api_detail_url: "https://comicvine.gamespot.com/api/issue/4000-40/",
      cover_date: "1952-11-01",
      date_added: "2008-06-06 11:10:09",
      date_last_updated: "2018-12-05 22:50:52",
      deck: null,
      description: null,
      has_staff_review: false,
      id: 40,
      image: {
        icon_url:
          "https://comicvine1.cbsistatic.com/uploads/square_avatar/0/4/39-1458-40-1-mister-mystery.jpg",
        medium_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_medium/0/4/39-1458-40-1-mister-mystery.jpg",
        screen_url:
          "https://comicvine1.cbsistatic.com/uploads/screen_medium/0/4/39-1458-40-1-mister-mystery.jpg",
        screen_large_url:
          "https://comicvine1.cbsistatic.com/uploads/screen_kubrick/0/4/39-1458-40-1-mister-mystery.jpg",
        small_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/39-1458-40-1-mister-mystery.jpg",
        super_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_large/0/4/39-1458-40-1-mister-mystery.jpg",
        thumb_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_avatar/0/4/39-1458-40-1-mister-mystery.jpg",
        tiny_url:
          "https://comicvine1.cbsistatic.com/uploads/square_mini/0/4/39-1458-40-1-mister-mystery.jpg",
        original_url:
          "https://comicvine1.cbsistatic.com/uploads/original/0/4/39-1458-40-1-mister-mystery.jpg",
        image_tags: "All Images",
      },
      issue_number: "8",
      name: null,
      site_detail_url:
        "https://comicvine.gamespot.com/mister-mystery-8/4000-40/",
      store_date: null,
      volume: {
        api_detail_url: "https://comicvine.gamespot.com/api/volume/4050-1458/",
        id: 1458,
        name: "Mister Mystery",
        site_detail_url:
          "https://comicvine.gamespot.com/mister-mystery/4050-1458/",
      },
    },
    {
      aliases: null,
      api_detail_url: "https://comicvine.gamespot.com/api/issue/4000-44/",
      cover_date: "1952-11-30",
      date_added: "2008-06-06 11:10:20",
      date_last_updated: "2016-12-14 18:14:06",
      deck: null,
      description: null,
      has_staff_review: false,
      id: 44,
      image: {
        icon_url:
          "https://comicvine1.cbsistatic.com/uploads/square_avatar/0/4/43-1536-44-1-weird-terror.jpg",
        medium_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_medium/0/4/43-1536-44-1-weird-terror.jpg",
        screen_url:
          "https://comicvine1.cbsistatic.com/uploads/screen_medium/0/4/43-1536-44-1-weird-terror.jpg",
        screen_large_url:
          "https://comicvine1.cbsistatic.com/uploads/screen_kubrick/0/4/43-1536-44-1-weird-terror.jpg",
        small_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/43-1536-44-1-weird-terror.jpg",
        super_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_large/0/4/43-1536-44-1-weird-terror.jpg",
        thumb_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_avatar/0/4/43-1536-44-1-weird-terror.jpg",
        tiny_url:
          "https://comicvine1.cbsistatic.com/uploads/square_mini/0/4/43-1536-44-1-weird-terror.jpg",
        original_url:
          "https://comicvine1.cbsistatic.com/uploads/original/0/4/43-1536-44-1-weird-terror.jpg",
        image_tags: "All Images",
      },
      issue_number: "2",
      name: null,
      site_detail_url: "https://comicvine.gamespot.com/weird-terror-2/4000-44/",
      store_date: null,
      volume: {
        api_detail_url: "https://comicvine.gamespot.com/api/volume/4050-1536/",
        id: 1536,
        name: "Weird Terror",
        site_detail_url:
          "https://comicvine.gamespot.com/weird-terror/4050-1536/",
      },
    },
    {
      aliases: null,
      api_detail_url: "https://comicvine.gamespot.com/api/issue/4000-45/",
      cover_date: "1952-07-01",
      date_added: "2008-06-06 11:10:10",
      date_last_updated: "2017-11-29 16:21:51",
      deck: null,
      description: null,
      has_staff_review: false,
      id: 45,
      image: {
        icon_url:
          "https://comicvine1.cbsistatic.com/uploads/square_avatar/2/23749/742375-61905_20060908110829_large.jpg",
        medium_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_medium/2/23749/742375-61905_20060908110829_large.jpg",
        screen_url:
          "https://comicvine1.cbsistatic.com/uploads/screen_medium/2/23749/742375-61905_20060908110829_large.jpg",
        screen_large_url:
          "https://comicvine1.cbsistatic.com/uploads/screen_kubrick/2/23749/742375-61905_20060908110829_large.jpg",
        small_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_small/2/23749/742375-61905_20060908110829_large.jpg",
        super_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_large/2/23749/742375-61905_20060908110829_large.jpg",
        thumb_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_avatar/2/23749/742375-61905_20060908110829_large.jpg",
        tiny_url:
          "https://comicvine1.cbsistatic.com/uploads/square_mini/2/23749/742375-61905_20060908110829_large.jpg",
        original_url:
          "https://comicvine1.cbsistatic.com/uploads/original/2/23749/742375-61905_20060908110829_large.jpg",
        image_tags: "All Images",
      },
      issue_number: "4",
      name: null,
      site_detail_url:
        "https://comicvine.gamespot.com/the-adventures-of-rex-the-wonder-dog-4/4000-45/",
      store_date: null,
      volume: {
        api_detail_url: "https://comicvine.gamespot.com/api/volume/4050-1468/",
        id: 1468,
        name: "The Adventures of Rex the Wonder Dog",
        site_detail_url:
          "https://comicvine.gamespot.com/the-adventures-of-rex-the-wonder-dog/4050-1468/",
      },
    },
    {
      aliases: null,
      api_detail_url: "https://comicvine.gamespot.com/api/issue/4000-47/",
      cover_date: "1952-11-30",
      date_added: "2008-06-06 11:10:03",
      date_last_updated: "2016-03-24 18:21:07",
      deck: null,
      description: null,
      has_staff_review: false,
      id: 47,
      image: {
        icon_url:
          "https://comicvine1.cbsistatic.com/uploads/square_avatar/0/4/46-1404-47-1-big-town.jpg",
        medium_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_medium/0/4/46-1404-47-1-big-town.jpg",
        screen_url:
          "https://comicvine1.cbsistatic.com/uploads/screen_medium/0/4/46-1404-47-1-big-town.jpg",
        screen_large_url:
          "https://comicvine1.cbsistatic.com/uploads/screen_kubrick/0/4/46-1404-47-1-big-town.jpg",
        small_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/46-1404-47-1-big-town.jpg",
        super_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_large/0/4/46-1404-47-1-big-town.jpg",
        thumb_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_avatar/0/4/46-1404-47-1-big-town.jpg",
        tiny_url:
          "https://comicvine1.cbsistatic.com/uploads/square_mini/0/4/46-1404-47-1-big-town.jpg",
        original_url:
          "https://comicvine1.cbsistatic.com/uploads/original/0/4/46-1404-47-1-big-town.jpg",
        image_tags: "All Images",
      },
      issue_number: "18",
      name: null,
      site_detail_url: "https://comicvine.gamespot.com/big-town-18/4000-47/",
      store_date: "1952-09-26",
      volume: {
        api_detail_url: "https://comicvine.gamespot.com/api/volume/4050-1404/",
        id: 1404,
        name: "Big Town",
        site_detail_url: "https://comicvine.gamespot.com/big-town/4050-1404/",
      },
    },
    {
      aliases: null,
      api_detail_url: "https://comicvine.gamespot.com/api/issue/4000-49/",
      cover_date: "1952-11-30",
      date_added: "2008-06-06 11:09:41",
      date_last_updated: "2018-11-24 20:06:09",
      deck: null,
      description:
        "<p><em>The Man of a Thousand Faces!</em></p><p>A  gang of criminals kidnap a master of disguise, intending to force him to impersonate the DA in order to stage phoney raids on gambling dens and confiscate all their money. Unwittingly, they kidnap the DA himself. </p><p><em>The Case of the Modern Raffles! </em></p><p>A series of hotel thefts in a swank part of town baffles the police, as the only man identified by the victims seems to have been nowhere near the loot. </p><p><em>The Case of the Chattering Wife </em></p><p>An impoverished gambler plots to murder his bookie Hiring a couple of actors to impersonate himself and his wife in order to establish a foolproof alibi, he believes that he has committed the perfect murder. </p><p><em>The Crime File</em></p><p>A text story. </p><p><em>About a Uniform!</em></p><p>Short factual story about the creation of the first NYPD officer uniform. </p><p><em>Racket in Diamonds</em></p><p>A gang of criminals sets up a racket stealing and reselling industrial diamond tools, taking advantage of the recent shortage.</p>",
      has_staff_review: false,
      id: 49,
      image: {
        icon_url:
          "https://comicvine1.cbsistatic.com/uploads/square_avatar/0/4/48-1169-49-1-mr-district-attorne.jpg",
        medium_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_medium/0/4/48-1169-49-1-mr-district-attorne.jpg",
        screen_url:
          "https://comicvine1.cbsistatic.com/uploads/screen_medium/0/4/48-1169-49-1-mr-district-attorne.jpg",
        screen_large_url:
          "https://comicvine1.cbsistatic.com/uploads/screen_kubrick/0/4/48-1169-49-1-mr-district-attorne.jpg",
        small_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/48-1169-49-1-mr-district-attorne.jpg",
        super_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_large/0/4/48-1169-49-1-mr-district-attorne.jpg",
        thumb_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_avatar/0/4/48-1169-49-1-mr-district-attorne.jpg",
        tiny_url:
          "https://comicvine1.cbsistatic.com/uploads/square_mini/0/4/48-1169-49-1-mr-district-attorne.jpg",
        original_url:
          "https://comicvine1.cbsistatic.com/uploads/original/0/4/48-1169-49-1-mr-district-attorne.jpg",
        image_tags: "All Images",
      },
      issue_number: "30",
      name: "The Man of a Thousand Faces!",
      site_detail_url:
        "https://comicvine.gamespot.com/mr-district-attorney-30-the-man-of-a-thousand-face/4000-49/",
      store_date: null,
      volume: {
        api_detail_url: "https://comicvine.gamespot.com/api/volume/4050-1169/",
        id: 1169,
        name: "Mr. District Attorney",
        site_detail_url:
          "https://comicvine.gamespot.com/mr-district-attorney/4050-1169/",
      },
    },
    {
      aliases: null,
      api_detail_url: "https://comicvine.gamespot.com/api/issue/4000-50/",
      cover_date: "1952-11-01",
      date_added: "2008-06-06 11:10:11",
      date_last_updated: "2013-03-29 07:00:34",
      deck: null,
      description:
        '<h4>Last Man!</h4><p><i>At first glance he looked like any other dogface fighting up and down the 38th parallel. He wore the same uniform, ate the same food, fired the same weapons -- and yet, there was something about him that marked him apart from every soldier...</i></p><figure data-align="center" data-img-src="https://static.comicvine.com/uploads/original/9/98822/2334863-armyatwar.jpg" data-ref-id="1300-2334863" data-size="large" data-embed-type="image" data-ratio="0.45805739514349"><a class="fluid-height" style="padding-bottom:45.8%" href="https://static.comicvine.com/uploads/original/9/98822/2334863-armyatwar.jpg" data-ref-id="1300-2334863"><img alt="No Caption Provided" src="https://comicvine1.cbsistatic.com/uploads/original/9/98822/2334863-armyatwar.jpg" srcset="https://comicvine1.cbsistatic.com/uploads/original/9/98822/2334863-armyatwar.jpg 906w, https://comicvine1.cbsistatic.com/uploads/scale_medium/9/98822/2334863-armyatwar.jpg 480w" sizes="(max-width: 906px) 100vw, 906px" data-width="906"></a></figure><h4>Replacement!</h4><p><i>In a combat zone, there are three things a man worries about: his life, equipment, and the time when he will be rotated back home. The first two he can take care of himself -- the last depends on his replacement!</i></p><figure data-align="center" data-img-src="https://static.comicvine.com/uploads/original/9/98822/2334864-armyatwar.jpg" data-ref-id="1300-2334864" data-size="large" data-embed-type="image" data-ratio="1.4370629370629"><a class="fluid-height" style="padding-bottom:143.7%" href="https://static.comicvine.com/uploads/original/9/98822/2334864-armyatwar.jpg" data-ref-id="1300-2334864"><img alt="No Caption Provided" src="https://comicvine1.cbsistatic.com/uploads/original/9/98822/2334864-armyatwar.jpg" srcset="https://comicvine1.cbsistatic.com/uploads/original/9/98822/2334864-armyatwar.jpg 286w" sizes="(max-width: 286px) 100vw, 286px" data-width="286"></a></figure>',
      has_staff_review: false,
      id: 50,
      image: {
        icon_url:
          "https://comicvine1.cbsistatic.com/uploads/square_avatar/0/4/49-1472-50-1-our-army-at-war.jpg",
        medium_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_medium/0/4/49-1472-50-1-our-army-at-war.jpg",
        screen_url:
          "https://comicvine1.cbsistatic.com/uploads/screen_medium/0/4/49-1472-50-1-our-army-at-war.jpg",
        screen_large_url:
          "https://comicvine1.cbsistatic.com/uploads/screen_kubrick/0/4/49-1472-50-1-our-army-at-war.jpg",
        small_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/49-1472-50-1-our-army-at-war.jpg",
        super_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_large/0/4/49-1472-50-1-our-army-at-war.jpg",
        thumb_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_avatar/0/4/49-1472-50-1-our-army-at-war.jpg",
        tiny_url:
          "https://comicvine1.cbsistatic.com/uploads/square_mini/0/4/49-1472-50-1-our-army-at-war.jpg",
        original_url:
          "https://comicvine1.cbsistatic.com/uploads/original/0/4/49-1472-50-1-our-army-at-war.jpg",
        image_tags: "All Images",
      },
      issue_number: "4",
      name: null,
      site_detail_url:
        "https://comicvine.gamespot.com/our-army-at-war-4/4000-50/",
      store_date: null,
      volume: {
        api_detail_url: "https://comicvine.gamespot.com/api/volume/4050-1472/",
        id: 1472,
        name: "Our Army at War",
        site_detail_url:
          "https://comicvine.gamespot.com/our-army-at-war/4050-1472/",
      },
    },
    {
      aliases: null,
      api_detail_url: "https://comicvine.gamespot.com/api/issue/4000-51/",
      cover_date: "1952-11-01",
      date_added: "2008-06-06 11:10:14",
      date_last_updated: "2013-03-08 03:16:37",
      deck: null,
      description:
        "<ol><li><i>Death has Five Guises</i> (Johnny Peril)</li><li><i>The Man Who Cried Werewolf</i></li><li><i>The Tattooed Terror</i></li></ol>",
      has_staff_review: false,
      id: 51,
      image: {
        icon_url:
          "https://comicvine1.cbsistatic.com/uploads/square_avatar/0/4/50-1474-51-1-sensation-mystery.jpg",
        medium_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_medium/0/4/50-1474-51-1-sensation-mystery.jpg",
        screen_url:
          "https://comicvine1.cbsistatic.com/uploads/screen_medium/0/4/50-1474-51-1-sensation-mystery.jpg",
        screen_large_url:
          "https://comicvine1.cbsistatic.com/uploads/screen_kubrick/0/4/50-1474-51-1-sensation-mystery.jpg",
        small_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/50-1474-51-1-sensation-mystery.jpg",
        super_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_large/0/4/50-1474-51-1-sensation-mystery.jpg",
        thumb_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_avatar/0/4/50-1474-51-1-sensation-mystery.jpg",
        tiny_url:
          "https://comicvine1.cbsistatic.com/uploads/square_mini/0/4/50-1474-51-1-sensation-mystery.jpg",
        original_url:
          "https://comicvine1.cbsistatic.com/uploads/original/0/4/50-1474-51-1-sensation-mystery.jpg",
        image_tags: "All Images",
      },
      issue_number: "112",
      name: "Death Has Five Guesses",
      site_detail_url:
        "https://comicvine.gamespot.com/sensation-mystery-112-death-has-five-guesses/4000-51/",
      store_date: null,
      volume: {
        api_detail_url: "https://comicvine.gamespot.com/api/volume/4050-1474/",
        id: 1474,
        name: "Sensation Mystery",
        site_detail_url:
          "https://comicvine.gamespot.com/sensation-mystery/4050-1474/",
      },
    },
    {
      aliases: null,
      api_detail_url: "https://comicvine.gamespot.com/api/issue/4000-52/",
      cover_date: "1952-11-01",
      date_added: "2008-06-06 11:10:21",
      date_last_updated: "2012-01-20 06:30:22",
      deck: null,
      description: null,
      has_staff_review: false,
      id: 52,
      image: {
        icon_url:
          "https://comicvine1.cbsistatic.com/uploads/square_avatar/0/4/51-1543-52-1-star-spangled-war-st.jpg",
        medium_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_medium/0/4/51-1543-52-1-star-spangled-war-st.jpg",
        screen_url:
          "https://comicvine1.cbsistatic.com/uploads/screen_medium/0/4/51-1543-52-1-star-spangled-war-st.jpg",
        screen_large_url:
          "https://comicvine1.cbsistatic.com/uploads/screen_kubrick/0/4/51-1543-52-1-star-spangled-war-st.jpg",
        small_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/51-1543-52-1-star-spangled-war-st.jpg",
        super_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_large/0/4/51-1543-52-1-star-spangled-war-st.jpg",
        thumb_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_avatar/0/4/51-1543-52-1-star-spangled-war-st.jpg",
        tiny_url:
          "https://comicvine1.cbsistatic.com/uploads/square_mini/0/4/51-1543-52-1-star-spangled-war-st.jpg",
        original_url:
          "https://comicvine1.cbsistatic.com/uploads/original/0/4/51-1543-52-1-star-spangled-war-st.jpg",
        image_tags: "All Images",
      },
      issue_number: "3",
      name: null,
      site_detail_url:
        "https://comicvine.gamespot.com/star-spangled-war-stories-3/4000-52/",
      store_date: null,
      volume: {
        api_detail_url: "https://comicvine.gamespot.com/api/volume/4050-1543/",
        id: 1543,
        name: "Star Spangled War Stories",
        site_detail_url:
          "https://comicvine.gamespot.com/star-spangled-war-stories/4050-1543/",
      },
    },
    {
      aliases: null,
      api_detail_url: "https://comicvine.gamespot.com/api/issue/4000-53/",
      cover_date: "1952-11-01",
      date_added: "2008-06-06 11:09:56",
      date_last_updated: "2012-04-15 01:57:46",
      deck: null,
      description: "<br/>",
      has_staff_review: false,
      id: 53,
      image: {
        icon_url:
          "https://comicvine1.cbsistatic.com/uploads/square_avatar/0/4/52-1328-53-1-strange-adventures.jpg",
        medium_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_medium/0/4/52-1328-53-1-strange-adventures.jpg",
        screen_url:
          "https://comicvine1.cbsistatic.com/uploads/screen_medium/0/4/52-1328-53-1-strange-adventures.jpg",
        screen_large_url:
          "https://comicvine1.cbsistatic.com/uploads/screen_kubrick/0/4/52-1328-53-1-strange-adventures.jpg",
        small_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/52-1328-53-1-strange-adventures.jpg",
        super_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_large/0/4/52-1328-53-1-strange-adventures.jpg",
        thumb_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_avatar/0/4/52-1328-53-1-strange-adventures.jpg",
        tiny_url:
          "https://comicvine1.cbsistatic.com/uploads/square_mini/0/4/52-1328-53-1-strange-adventures.jpg",
        original_url:
          "https://comicvine1.cbsistatic.com/uploads/original/0/4/52-1328-53-1-strange-adventures.jpg",
        image_tags: "All Images",
      },
      issue_number: "26",
      name: null,
      site_detail_url:
        "https://comicvine.gamespot.com/strange-adventures-26/4000-53/",
      store_date: null,
      volume: {
        api_detail_url: "https://comicvine.gamespot.com/api/volume/4050-1328/",
        id: 1328,
        name: "Strange Adventures",
        site_detail_url:
          "https://comicvine.gamespot.com/strange-adventures/4050-1328/",
      },
    },
    {
      aliases: null,
      api_detail_url: "https://comicvine.gamespot.com/api/issue/4000-54/",
      cover_date: "1952-11-01",
      date_added: "2008-06-06 11:09:05",
      date_last_updated: "2017-11-29 22:28:09",
      deck: null,
      description:
        "<p> </p><ol><li> <i>Citadel of Doom</i> (Superman vs Lex Luthor) <br /><p>\"Only  Luthor, the Man of Steel's arch-foe offers a safe haven against  catastrophe in his 'Citadel of Doom!'\"Lex Luthor: You see, even Superman  is helpless against these meteors and other disasters that will destroy  Metropolis!</p></li><li><i>The End of the Planet! </i>(Superman, Lois  Lane, Jimmy Olsen, Perry White / written by Edmond Hamilton) - When John  Wilton, a rival newspaperman buys the Daily Planet and shuts it down,  the entire staff is out of work!</li><li><i>Can Everybody Speak the Same?</i> (full text article by Dick Keene)<br /></li><li><i>The Revenge That Took Three Hundred Years</i> (Superman, Inspector Hawkins / written by Alvin Schwartz) </li></ol>",
      has_staff_review: false,
      id: 54,
      image: {
        icon_url:
          "https://comicvine1.cbsistatic.com/uploads/square_avatar/0/4/53-773-54-1-superman.jpg",
        medium_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_medium/0/4/53-773-54-1-superman.jpg",
        screen_url:
          "https://comicvine1.cbsistatic.com/uploads/screen_medium/0/4/53-773-54-1-superman.jpg",
        screen_large_url:
          "https://comicvine1.cbsistatic.com/uploads/screen_kubrick/0/4/53-773-54-1-superman.jpg",
        small_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/53-773-54-1-superman.jpg",
        super_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_large/0/4/53-773-54-1-superman.jpg",
        thumb_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_avatar/0/4/53-773-54-1-superman.jpg",
        tiny_url:
          "https://comicvine1.cbsistatic.com/uploads/square_mini/0/4/53-773-54-1-superman.jpg",
        original_url:
          "https://comicvine1.cbsistatic.com/uploads/original/0/4/53-773-54-1-superman.jpg",
        image_tags: "All Images",
      },
      issue_number: "79",
      name: "Citadel of Doom",
      site_detail_url:
        "https://comicvine.gamespot.com/superman-79-citadel-of-doom/4000-54/",
      store_date: null,
      volume: {
        api_detail_url: "https://comicvine.gamespot.com/api/volume/4050-773/",
        id: 773,
        name: "Superman",
        site_detail_url: "https://comicvine.gamespot.com/superman/4050-773/",
      },
    },
    {
      aliases: null,
      api_detail_url: "https://comicvine.gamespot.com/api/issue/4000-55/",
      cover_date: "1952-11-01",
      date_added: "2008-06-06 11:09:58",
      date_last_updated: "2017-11-29 22:29:10",
      deck: null,
      description: null,
      has_staff_review: false,
      id: 55,
      image: {
        icon_url:
          "https://comicvine1.cbsistatic.com/uploads/square_avatar/0/4/54-1329-55-1-tomahawk.jpg",
        medium_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_medium/0/4/54-1329-55-1-tomahawk.jpg",
        screen_url:
          "https://comicvine1.cbsistatic.com/uploads/screen_medium/0/4/54-1329-55-1-tomahawk.jpg",
        screen_large_url:
          "https://comicvine1.cbsistatic.com/uploads/screen_kubrick/0/4/54-1329-55-1-tomahawk.jpg",
        small_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/54-1329-55-1-tomahawk.jpg",
        super_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_large/0/4/54-1329-55-1-tomahawk.jpg",
        thumb_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_avatar/0/4/54-1329-55-1-tomahawk.jpg",
        tiny_url:
          "https://comicvine1.cbsistatic.com/uploads/square_mini/0/4/54-1329-55-1-tomahawk.jpg",
        original_url:
          "https://comicvine1.cbsistatic.com/uploads/original/0/4/54-1329-55-1-tomahawk.jpg",
        image_tags: "All Images",
      },
      issue_number: "14",
      name: null,
      site_detail_url: "https://comicvine.gamespot.com/tomahawk-14/4000-55/",
      store_date: null,
      volume: {
        api_detail_url: "https://comicvine.gamespot.com/api/volume/4050-1329/",
        id: 1329,
        name: "Tomahawk",
        site_detail_url: "https://comicvine.gamespot.com/tomahawk/4050-1329/",
      },
    },
    {
      aliases: null,
      api_detail_url: "https://comicvine.gamespot.com/api/issue/4000-56/",
      cover_date: "1952-11-30",
      date_added: "2008-06-06 11:09:41",
      date_last_updated: "2018-05-04 23:07:59",
      deck: null,
      description: null,
      has_staff_review: false,
      id: 56,
      image: {
        icon_url:
          "https://comicvine1.cbsistatic.com/uploads/square_avatar/0/4/55-1171-56-1-western-comics.jpg",
        medium_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_medium/0/4/55-1171-56-1-western-comics.jpg",
        screen_url:
          "https://comicvine1.cbsistatic.com/uploads/screen_medium/0/4/55-1171-56-1-western-comics.jpg",
        screen_large_url:
          "https://comicvine1.cbsistatic.com/uploads/screen_kubrick/0/4/55-1171-56-1-western-comics.jpg",
        small_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/55-1171-56-1-western-comics.jpg",
        super_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_large/0/4/55-1171-56-1-western-comics.jpg",
        thumb_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_avatar/0/4/55-1171-56-1-western-comics.jpg",
        tiny_url:
          "https://comicvine1.cbsistatic.com/uploads/square_mini/0/4/55-1171-56-1-western-comics.jpg",
        original_url:
          "https://comicvine1.cbsistatic.com/uploads/original/0/4/55-1171-56-1-western-comics.jpg",
        image_tags: "All Images",
      },
      issue_number: "36",
      name: "Duel in the Dark!",
      site_detail_url:
        "https://comicvine.gamespot.com/western-comics-36-duel-in-the-dark/4000-56/",
      store_date: null,
      volume: {
        api_detail_url: "https://comicvine.gamespot.com/api/volume/4050-1171/",
        id: 1171,
        name: "Western Comics",
        site_detail_url:
          "https://comicvine.gamespot.com/western-comics/4050-1171/",
      },
    },
    {
      aliases: null,
      api_detail_url: "https://comicvine.gamespot.com/api/issue/4000-59/",
      cover_date: "1952-11-01",
      date_added: "2008-06-06 11:09:43",
      date_last_updated: "2008-06-06 11:32:54",
      deck: null,
      description: null,
      has_staff_review: false,
      id: 59,
      image: {
        icon_url:
          "https://comicvine1.cbsistatic.com/uploads/square_avatar/0/4/58-1176-59-1-tarzan.jpg",
        medium_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_medium/0/4/58-1176-59-1-tarzan.jpg",
        screen_url:
          "https://comicvine1.cbsistatic.com/uploads/screen_medium/0/4/58-1176-59-1-tarzan.jpg",
        screen_large_url:
          "https://comicvine1.cbsistatic.com/uploads/screen_kubrick/0/4/58-1176-59-1-tarzan.jpg",
        small_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/58-1176-59-1-tarzan.jpg",
        super_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_large/0/4/58-1176-59-1-tarzan.jpg",
        thumb_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_avatar/0/4/58-1176-59-1-tarzan.jpg",
        tiny_url:
          "https://comicvine1.cbsistatic.com/uploads/square_mini/0/4/58-1176-59-1-tarzan.jpg",
        original_url:
          "https://comicvine1.cbsistatic.com/uploads/original/0/4/58-1176-59-1-tarzan.jpg",
        image_tags: "All Images",
      },
      issue_number: "38",
      name: null,
      site_detail_url: "https://comicvine.gamespot.com/tarzan-38/4000-59/",
      store_date: null,
      volume: {
        api_detail_url: "https://comicvine.gamespot.com/api/volume/4050-1176/",
        id: 1176,
        name: "Tarzan",
        site_detail_url: "https://comicvine.gamespot.com/tarzan/4050-1176/",
      },
    },
    {
      aliases: null,
      api_detail_url: "https://comicvine.gamespot.com/api/issue/4000-60/",
      cover_date: "1952-11-30",
      date_added: "2008-06-06 11:10:24",
      date_last_updated: "2017-06-14 10:00:43",
      deck: null,
      description: null,
      has_staff_review: false,
      id: 60,
      image: {
        icon_url:
          "https://comicvine1.cbsistatic.com/uploads/square_avatar/0/4/59-1562-60-1-tom-corbett-space-c.jpg",
        medium_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_medium/0/4/59-1562-60-1-tom-corbett-space-c.jpg",
        screen_url:
          "https://comicvine1.cbsistatic.com/uploads/screen_medium/0/4/59-1562-60-1-tom-corbett-space-c.jpg",
        screen_large_url:
          "https://comicvine1.cbsistatic.com/uploads/screen_kubrick/0/4/59-1562-60-1-tom-corbett-space-c.jpg",
        small_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/59-1562-60-1-tom-corbett-space-c.jpg",
        super_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_large/0/4/59-1562-60-1-tom-corbett-space-c.jpg",
        thumb_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_avatar/0/4/59-1562-60-1-tom-corbett-space-c.jpg",
        tiny_url:
          "https://comicvine1.cbsistatic.com/uploads/square_mini/0/4/59-1562-60-1-tom-corbett-space-c.jpg",
        original_url:
          "https://comicvine1.cbsistatic.com/uploads/original/0/4/59-1562-60-1-tom-corbett-space-c.jpg",
        image_tags: "All Images",
      },
      issue_number: "4",
      name: null,
      site_detail_url:
        "https://comicvine.gamespot.com/tom-corbett-space-cadet-4/4000-60/",
      store_date: null,
      volume: {
        api_detail_url: "https://comicvine.gamespot.com/api/volume/4050-1562/",
        id: 1562,
        name: "Tom Corbett, Space Cadet",
        site_detail_url:
          "https://comicvine.gamespot.com/tom-corbett-space-cadet/4050-1562/",
      },
    },
    {
      aliases: null,
      api_detail_url: "https://comicvine.gamespot.com/api/issue/4000-61/",
      cover_date: "1952-11-01",
      date_added: "2008-06-06 11:09:49",
      date_last_updated: "2008-06-06 11:32:54",
      deck: null,
      description: null,
      has_staff_review: false,
      id: 61,
      image: {
        icon_url:
          "https://comicvine1.cbsistatic.com/uploads/square_avatar/0/4/60-1247-61-1-tom-amp-jerry-comi.jpg",
        medium_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_medium/0/4/60-1247-61-1-tom-amp-jerry-comi.jpg",
        screen_url:
          "https://comicvine1.cbsistatic.com/uploads/screen_medium/0/4/60-1247-61-1-tom-amp-jerry-comi.jpg",
        screen_large_url:
          "https://comicvine1.cbsistatic.com/uploads/screen_kubrick/0/4/60-1247-61-1-tom-amp-jerry-comi.jpg",
        small_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/60-1247-61-1-tom-amp-jerry-comi.jpg",
        super_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_large/0/4/60-1247-61-1-tom-amp-jerry-comi.jpg",
        thumb_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_avatar/0/4/60-1247-61-1-tom-amp-jerry-comi.jpg",
        tiny_url:
          "https://comicvine1.cbsistatic.com/uploads/square_mini/0/4/60-1247-61-1-tom-amp-jerry-comi.jpg",
        original_url:
          "https://comicvine1.cbsistatic.com/uploads/original/0/4/60-1247-61-1-tom-amp-jerry-comi.jpg",
        image_tags: "All Images",
      },
      issue_number: "100",
      name: null,
      site_detail_url:
        "https://comicvine.gamespot.com/tom-jerry-comics-100/4000-61/",
      store_date: null,
      volume: {
        api_detail_url: "https://comicvine.gamespot.com/api/volume/4050-1247/",
        id: 1247,
        name: "Tom & Jerry Comics",
        site_detail_url:
          "https://comicvine.gamespot.com/tom-jerry-comics/4050-1247/",
      },
    },
    {
      aliases: null,
      api_detail_url: "https://comicvine.gamespot.com/api/issue/4000-62/",
      cover_date: "1952-11-01",
      date_added: "2008-06-06 11:09:36",
      date_last_updated: "2008-06-06 11:32:54",
      deck: null,
      description: null,
      has_staff_review: false,
      id: 62,
      image: {
        icon_url:
          "https://comicvine1.cbsistatic.com/uploads/square_avatar/0/4/61-1098-62-1-walter-lantz-new-fun.jpg",
        medium_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_medium/0/4/61-1098-62-1-walter-lantz-new-fun.jpg",
        screen_url:
          "https://comicvine1.cbsistatic.com/uploads/screen_medium/0/4/61-1098-62-1-walter-lantz-new-fun.jpg",
        screen_large_url:
          "https://comicvine1.cbsistatic.com/uploads/screen_kubrick/0/4/61-1098-62-1-walter-lantz-new-fun.jpg",
        small_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/61-1098-62-1-walter-lantz-new-fun.jpg",
        super_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_large/0/4/61-1098-62-1-walter-lantz-new-fun.jpg",
        thumb_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_avatar/0/4/61-1098-62-1-walter-lantz-new-fun.jpg",
        tiny_url:
          "https://comicvine1.cbsistatic.com/uploads/square_mini/0/4/61-1098-62-1-walter-lantz-new-fun.jpg",
        original_url:
          "https://comicvine1.cbsistatic.com/uploads/original/0/4/61-1098-62-1-walter-lantz-new-fun.jpg",
        image_tags: "All Images",
      },
      issue_number: "189",
      name: null,
      site_detail_url:
        "https://comicvine.gamespot.com/walter-lantz-new-funnies-189/4000-62/",
      store_date: null,
      volume: {
        api_detail_url: "https://comicvine.gamespot.com/api/volume/4050-1098/",
        id: 1098,
        name: "Walter Lantz New Funnies",
        site_detail_url:
          "https://comicvine.gamespot.com/walter-lantz-new-funnies/4050-1098/",
      },
    },
    {
      aliases: null,
      api_detail_url: "https://comicvine.gamespot.com/api/issue/4000-63/",
      cover_date: "1952-11-01",
      date_added: "2008-06-06 11:10:08",
      date_last_updated: "2008-06-06 11:32:54",
      deck: null,
      description: null,
      has_staff_review: false,
      id: 63,
      image: {
        icon_url:
          "https://comicvine1.cbsistatic.com/uploads/square_avatar/0/4/62-1443-63-1-frontline-combat.jpg",
        medium_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_medium/0/4/62-1443-63-1-frontline-combat.jpg",
        screen_url:
          "https://comicvine1.cbsistatic.com/uploads/screen_medium/0/4/62-1443-63-1-frontline-combat.jpg",
        screen_large_url:
          "https://comicvine1.cbsistatic.com/uploads/screen_kubrick/0/4/62-1443-63-1-frontline-combat.jpg",
        small_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/62-1443-63-1-frontline-combat.jpg",
        super_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_large/0/4/62-1443-63-1-frontline-combat.jpg",
        thumb_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_avatar/0/4/62-1443-63-1-frontline-combat.jpg",
        tiny_url:
          "https://comicvine1.cbsistatic.com/uploads/square_mini/0/4/62-1443-63-1-frontline-combat.jpg",
        original_url:
          "https://comicvine1.cbsistatic.com/uploads/original/0/4/62-1443-63-1-frontline-combat.jpg",
        image_tags: "All Images",
      },
      issue_number: "9",
      name: null,
      site_detail_url:
        "https://comicvine.gamespot.com/frontline-combat-9/4000-63/",
      store_date: null,
      volume: {
        api_detail_url: "https://comicvine.gamespot.com/api/volume/4050-1443/",
        id: 1443,
        name: "Frontline Combat",
        site_detail_url:
          "https://comicvine.gamespot.com/frontline-combat/4050-1443/",
      },
    },
    {
      aliases: null,
      api_detail_url: "https://comicvine.gamespot.com/api/issue/4000-64/",
      cover_date: "1952-12-01",
      date_added: "2008-06-06 11:10:02",
      date_last_updated: "2018-10-09 11:27:51",
      deck: null,
      description: null,
      has_staff_review: false,
      id: 64,
      image: {
        icon_url:
          "https://comicvine1.cbsistatic.com/uploads/square_avatar/0/4/63-1398-64-1-haunt-of-fear.jpg",
        medium_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_medium/0/4/63-1398-64-1-haunt-of-fear.jpg",
        screen_url:
          "https://comicvine1.cbsistatic.com/uploads/screen_medium/0/4/63-1398-64-1-haunt-of-fear.jpg",
        screen_large_url:
          "https://comicvine1.cbsistatic.com/uploads/screen_kubrick/0/4/63-1398-64-1-haunt-of-fear.jpg",
        small_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/63-1398-64-1-haunt-of-fear.jpg",
        super_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_large/0/4/63-1398-64-1-haunt-of-fear.jpg",
        thumb_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_avatar/0/4/63-1398-64-1-haunt-of-fear.jpg",
        tiny_url:
          "https://comicvine1.cbsistatic.com/uploads/square_mini/0/4/63-1398-64-1-haunt-of-fear.jpg",
        original_url:
          "https://comicvine1.cbsistatic.com/uploads/original/0/4/63-1398-64-1-haunt-of-fear.jpg",
        image_tags: "All Images",
      },
      issue_number: "16",
      name: null,
      site_detail_url:
        "https://comicvine.gamespot.com/haunt-of-fear-16/4000-64/",
      store_date: null,
      volume: {
        api_detail_url: "https://comicvine.gamespot.com/api/volume/4050-1398/",
        id: 1398,
        name: "Haunt of Fear",
        site_detail_url:
          "https://comicvine.gamespot.com/haunt-of-fear/4050-1398/",
      },
    },
    {
      aliases: null,
      api_detail_url: "https://comicvine.gamespot.com/api/issue/4000-65/",
      cover_date: "1952-11-01",
      date_added: "2008-06-06 11:09:21",
      date_last_updated: "2008-06-06 11:32:54",
      deck: null,
      description: null,
      has_staff_review: false,
      id: 65,
      image: {
        icon_url:
          "https://comicvine1.cbsistatic.com/uploads/square_avatar/0/4/64-898-65-1-captain-marvel-adven.jpg",
        medium_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_medium/0/4/64-898-65-1-captain-marvel-adven.jpg",
        screen_url:
          "https://comicvine1.cbsistatic.com/uploads/screen_medium/0/4/64-898-65-1-captain-marvel-adven.jpg",
        screen_large_url:
          "https://comicvine1.cbsistatic.com/uploads/screen_kubrick/0/4/64-898-65-1-captain-marvel-adven.jpg",
        small_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/64-898-65-1-captain-marvel-adven.jpg",
        super_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_large/0/4/64-898-65-1-captain-marvel-adven.jpg",
        thumb_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_avatar/0/4/64-898-65-1-captain-marvel-adven.jpg",
        tiny_url:
          "https://comicvine1.cbsistatic.com/uploads/square_mini/0/4/64-898-65-1-captain-marvel-adven.jpg",
        original_url:
          "https://comicvine1.cbsistatic.com/uploads/original/0/4/64-898-65-1-captain-marvel-adven.jpg",
        image_tags: "All Images",
      },
      issue_number: "138",
      name: null,
      site_detail_url:
        "https://comicvine.gamespot.com/captain-marvel-adventures-138/4000-65/",
      store_date: null,
      volume: {
        api_detail_url: "https://comicvine.gamespot.com/api/volume/4050-898/",
        id: 898,
        name: "Captain Marvel Adventures",
        site_detail_url:
          "https://comicvine.gamespot.com/captain-marvel-adventures/4050-898/",
      },
    },
    {
      aliases: null,
      api_detail_url: "https://comicvine.gamespot.com/api/issue/4000-66/",
      cover_date: "1952-11-01",
      date_added: "2008-06-06 11:09:32",
      date_last_updated: "2017-05-04 19:33:23",
      deck: null,
      description: null,
      has_staff_review: false,
      id: 66,
      image: {
        icon_url:
          "https://comicvine1.cbsistatic.com/uploads/square_avatar/0/4/65-953-66-1-captain-marvel-jr-.jpg",
        medium_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_medium/0/4/65-953-66-1-captain-marvel-jr-.jpg",
        screen_url:
          "https://comicvine1.cbsistatic.com/uploads/screen_medium/0/4/65-953-66-1-captain-marvel-jr-.jpg",
        screen_large_url:
          "https://comicvine1.cbsistatic.com/uploads/screen_kubrick/0/4/65-953-66-1-captain-marvel-jr-.jpg",
        small_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/65-953-66-1-captain-marvel-jr-.jpg",
        super_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_large/0/4/65-953-66-1-captain-marvel-jr-.jpg",
        thumb_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_avatar/0/4/65-953-66-1-captain-marvel-jr-.jpg",
        tiny_url:
          "https://comicvine1.cbsistatic.com/uploads/square_mini/0/4/65-953-66-1-captain-marvel-jr-.jpg",
        original_url:
          "https://comicvine1.cbsistatic.com/uploads/original/0/4/65-953-66-1-captain-marvel-jr-.jpg",
        image_tags: "All Images",
      },
      issue_number: "115",
      name: "The Mad Mongol Monster",
      site_detail_url:
        "https://comicvine.gamespot.com/captain-marvel-jr-115-the-mad-mongol-monster/4000-66/",
      store_date: null,
      volume: {
        api_detail_url: "https://comicvine.gamespot.com/api/volume/4050-953/",
        id: 953,
        name: "Captain Marvel, Jr.",
        site_detail_url:
          "https://comicvine.gamespot.com/captain-marvel-jr/4050-953/",
      },
    },
    {
      aliases: null,
      api_detail_url: "https://comicvine.gamespot.com/api/issue/4000-67/",
      cover_date: "1952-11-01",
      date_added: "2008-06-06 11:09:36",
      date_last_updated: "2011-04-09 11:58:57",
      deck: null,
      description: null,
      has_staff_review: false,
      id: 67,
      image: {
        icon_url:
          "https://comicvine1.cbsistatic.com/uploads/square_avatar/0/4/66-1066-67-1-marvel-family-the.jpg",
        medium_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_medium/0/4/66-1066-67-1-marvel-family-the.jpg",
        screen_url:
          "https://comicvine1.cbsistatic.com/uploads/screen_medium/0/4/66-1066-67-1-marvel-family-the.jpg",
        screen_large_url:
          "https://comicvine1.cbsistatic.com/uploads/screen_kubrick/0/4/66-1066-67-1-marvel-family-the.jpg",
        small_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/66-1066-67-1-marvel-family-the.jpg",
        super_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_large/0/4/66-1066-67-1-marvel-family-the.jpg",
        thumb_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_avatar/0/4/66-1066-67-1-marvel-family-the.jpg",
        tiny_url:
          "https://comicvine1.cbsistatic.com/uploads/square_mini/0/4/66-1066-67-1-marvel-family-the.jpg",
        original_url:
          "https://comicvine1.cbsistatic.com/uploads/original/0/4/66-1066-67-1-marvel-family-the.jpg",
        image_tags: "All Images",
      },
      issue_number: "77",
      name: "The Beastman Strikes",
      site_detail_url:
        "https://comicvine.gamespot.com/the-marvel-family-77-the-beastman-strikes/4000-67/",
      store_date: null,
      volume: {
        api_detail_url: "https://comicvine.gamespot.com/api/volume/4050-1066/",
        id: 1066,
        name: "The Marvel Family",
        site_detail_url:
          "https://comicvine.gamespot.com/the-marvel-family/4050-1066/",
      },
    },
    {
      aliases: null,
      api_detail_url: "https://comicvine.gamespot.com/api/issue/4000-68/",
      cover_date: "1952-11-01",
      date_added: "2008-06-06 11:09:18",
      date_last_updated: "2008-06-06 11:32:54",
      deck: null,
      description: null,
      has_staff_review: false,
      id: 68,
      image: {
        icon_url:
          "https://comicvine1.cbsistatic.com/uploads/square_avatar/0/4/67-843-68-1-whiz-comics.jpg",
        medium_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_medium/0/4/67-843-68-1-whiz-comics.jpg",
        screen_url:
          "https://comicvine1.cbsistatic.com/uploads/screen_medium/0/4/67-843-68-1-whiz-comics.jpg",
        screen_large_url:
          "https://comicvine1.cbsistatic.com/uploads/screen_kubrick/0/4/67-843-68-1-whiz-comics.jpg",
        small_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/67-843-68-1-whiz-comics.jpg",
        super_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_large/0/4/67-843-68-1-whiz-comics.jpg",
        thumb_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_avatar/0/4/67-843-68-1-whiz-comics.jpg",
        tiny_url:
          "https://comicvine1.cbsistatic.com/uploads/square_mini/0/4/67-843-68-1-whiz-comics.jpg",
        original_url:
          "https://comicvine1.cbsistatic.com/uploads/original/0/4/67-843-68-1-whiz-comics.jpg",
        image_tags: "All Images",
      },
      issue_number: "151",
      name: null,
      site_detail_url:
        "https://comicvine.gamespot.com/whiz-comics-151/4000-68/",
      store_date: null,
      volume: {
        api_detail_url: "https://comicvine.gamespot.com/api/volume/4050-843/",
        id: 843,
        name: "Whiz Comics",
        site_detail_url: "https://comicvine.gamespot.com/whiz-comics/4050-843/",
      },
    },
    {
      aliases: null,
      api_detail_url: "https://comicvine.gamespot.com/api/issue/4000-71/",
      cover_date: "1952-11-01",
      date_added: "2008-06-06 11:10:16",
      date_last_updated: "2008-06-06 11:32:54",
      deck: null,
      description: null,
      has_staff_review: false,
      id: 71,
      image: {
        icon_url:
          "https://comicvine1.cbsistatic.com/uploads/square_avatar/0/4/70-1487-71-1-chamber-of-chills.jpg",
        medium_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_medium/0/4/70-1487-71-1-chamber-of-chills.jpg",
        screen_url:
          "https://comicvine1.cbsistatic.com/uploads/screen_medium/0/4/70-1487-71-1-chamber-of-chills.jpg",
        screen_large_url:
          "https://comicvine1.cbsistatic.com/uploads/screen_kubrick/0/4/70-1487-71-1-chamber-of-chills.jpg",
        small_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/70-1487-71-1-chamber-of-chills.jpg",
        super_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_large/0/4/70-1487-71-1-chamber-of-chills.jpg",
        thumb_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_avatar/0/4/70-1487-71-1-chamber-of-chills.jpg",
        tiny_url:
          "https://comicvine1.cbsistatic.com/uploads/square_mini/0/4/70-1487-71-1-chamber-of-chills.jpg",
        original_url:
          "https://comicvine1.cbsistatic.com/uploads/original/0/4/70-1487-71-1-chamber-of-chills.jpg",
        image_tags: "All Images",
      },
      issue_number: "14",
      name: null,
      site_detail_url:
        "https://comicvine.gamespot.com/chamber-of-chills-magazine-14/4000-71/",
      store_date: null,
      volume: {
        api_detail_url: "https://comicvine.gamespot.com/api/volume/4050-1487/",
        id: 1487,
        name: "Chamber of Chills Magazine",
        site_detail_url:
          "https://comicvine.gamespot.com/chamber-of-chills-magazine/4050-1487/",
      },
    },
    {
      aliases: null,
      api_detail_url: "https://comicvine.gamespot.com/api/issue/4000-72/",
      cover_date: "1952-11-01",
      date_added: "2008-06-06 11:10:16",
      date_last_updated: "2008-06-06 11:32:54",
      deck: null,
      description: null,
      has_staff_review: false,
      id: 72,
      image: {
        icon_url:
          "https://comicvine1.cbsistatic.com/uploads/square_avatar/0/4/71-1489-72-1-tomb-of-terror.jpg",
        medium_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_medium/0/4/71-1489-72-1-tomb-of-terror.jpg",
        screen_url:
          "https://comicvine1.cbsistatic.com/uploads/screen_medium/0/4/71-1489-72-1-tomb-of-terror.jpg",
        screen_large_url:
          "https://comicvine1.cbsistatic.com/uploads/screen_kubrick/0/4/71-1489-72-1-tomb-of-terror.jpg",
        small_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/71-1489-72-1-tomb-of-terror.jpg",
        super_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_large/0/4/71-1489-72-1-tomb-of-terror.jpg",
        thumb_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_avatar/0/4/71-1489-72-1-tomb-of-terror.jpg",
        tiny_url:
          "https://comicvine1.cbsistatic.com/uploads/square_mini/0/4/71-1489-72-1-tomb-of-terror.jpg",
        original_url:
          "https://comicvine1.cbsistatic.com/uploads/original/0/4/71-1489-72-1-tomb-of-terror.jpg",
        image_tags: "All Images",
      },
      issue_number: "6",
      name: null,
      site_detail_url:
        "https://comicvine.gamespot.com/tomb-of-terror-6/4000-72/",
      store_date: null,
      volume: {
        api_detail_url: "https://comicvine.gamespot.com/api/volume/4050-1489/",
        id: 1489,
        name: "Tomb of Terror",
        site_detail_url:
          "https://comicvine.gamespot.com/tomb-of-terror/4050-1489/",
      },
    },
    {
      aliases: null,
      api_detail_url: "https://comicvine.gamespot.com/api/issue/4000-73/",
      cover_date: "1952-11-01",
      date_added: "2008-06-06 11:10:05",
      date_last_updated: "2008-06-06 11:32:54",
      deck: null,
      description: null,
      has_staff_review: false,
      id: 73,
      image: {
        icon_url:
          "https://comicvine1.cbsistatic.com/uploads/square_avatar/0/4/72-1418-73-1-witches-tales.jpg",
        medium_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_medium/0/4/72-1418-73-1-witches-tales.jpg",
        screen_url:
          "https://comicvine1.cbsistatic.com/uploads/screen_medium/0/4/72-1418-73-1-witches-tales.jpg",
        screen_large_url:
          "https://comicvine1.cbsistatic.com/uploads/screen_kubrick/0/4/72-1418-73-1-witches-tales.jpg",
        small_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/72-1418-73-1-witches-tales.jpg",
        super_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_large/0/4/72-1418-73-1-witches-tales.jpg",
        thumb_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_avatar/0/4/72-1418-73-1-witches-tales.jpg",
        tiny_url:
          "https://comicvine1.cbsistatic.com/uploads/square_mini/0/4/72-1418-73-1-witches-tales.jpg",
        original_url:
          "https://comicvine1.cbsistatic.com/uploads/original/0/4/72-1418-73-1-witches-tales.jpg",
        image_tags: "All Images",
      },
      issue_number: "16",
      name: null,
      site_detail_url:
        "https://comicvine.gamespot.com/witches-tales-16/4000-73/",
      store_date: null,
      volume: {
        api_detail_url: "https://comicvine.gamespot.com/api/volume/4050-1418/",
        id: 1418,
        name: "Witches Tales",
        site_detail_url:
          "https://comicvine.gamespot.com/witches-tales/4050-1418/",
      },
    },
    {
      aliases: null,
      api_detail_url: "https://comicvine.gamespot.com/api/issue/4000-74/",
      cover_date: "1952-11-01",
      date_added: "2008-06-06 11:09:36",
      date_last_updated: "2012-10-06 09:32:55",
      deck: null,
      description:
        "<p>Volume 9 Issue 10</p><p>1. Airboy</p><p>2. The Black Wingman</p><p>3. The First College Football Game</p><p>4. The Heap</p>",
      has_staff_review: false,
      id: 74,
      image: {
        icon_url:
          "https://comicvine1.cbsistatic.com/uploads/square_avatar/0/4/73-1069-74-1-airboy-comics.jpg",
        medium_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_medium/0/4/73-1069-74-1-airboy-comics.jpg",
        screen_url:
          "https://comicvine1.cbsistatic.com/uploads/screen_medium/0/4/73-1069-74-1-airboy-comics.jpg",
        screen_large_url:
          "https://comicvine1.cbsistatic.com/uploads/screen_kubrick/0/4/73-1069-74-1-airboy-comics.jpg",
        small_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/73-1069-74-1-airboy-comics.jpg",
        super_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_large/0/4/73-1069-74-1-airboy-comics.jpg",
        thumb_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_avatar/0/4/73-1069-74-1-airboy-comics.jpg",
        tiny_url:
          "https://comicvine1.cbsistatic.com/uploads/square_mini/0/4/73-1069-74-1-airboy-comics.jpg",
        original_url:
          "https://comicvine1.cbsistatic.com/uploads/original/0/4/73-1069-74-1-airboy-comics.jpg",
        image_tags: "All Images",
      },
      issue_number: "105",
      name: null,
      site_detail_url:
        "https://comicvine.gamespot.com/airboy-comics-105/4000-74/",
      store_date: null,
      volume: {
        api_detail_url: "https://comicvine.gamespot.com/api/volume/4050-1069/",
        id: 1069,
        name: "Airboy Comics",
        site_detail_url:
          "https://comicvine.gamespot.com/airboy-comics/4050-1069/",
      },
    },
    {
      aliases: null,
      api_detail_url: "https://comicvine.gamespot.com/api/issue/4000-75/",
      cover_date: "1952-11-01",
      date_added: "2008-06-06 11:09:51",
      date_last_updated: "2008-06-06 11:32:54",
      deck: null,
      description: null,
      has_staff_review: false,
      id: 75,
      image: {
        icon_url:
          "https://comicvine1.cbsistatic.com/uploads/square_avatar/0/4/74-1253-75-1-black-diamond-wester.jpg",
        medium_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_medium/0/4/74-1253-75-1-black-diamond-wester.jpg",
        screen_url:
          "https://comicvine1.cbsistatic.com/uploads/screen_medium/0/4/74-1253-75-1-black-diamond-wester.jpg",
        screen_large_url:
          "https://comicvine1.cbsistatic.com/uploads/screen_kubrick/0/4/74-1253-75-1-black-diamond-wester.jpg",
        small_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/74-1253-75-1-black-diamond-wester.jpg",
        super_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_large/0/4/74-1253-75-1-black-diamond-wester.jpg",
        thumb_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_avatar/0/4/74-1253-75-1-black-diamond-wester.jpg",
        tiny_url:
          "https://comicvine1.cbsistatic.com/uploads/square_mini/0/4/74-1253-75-1-black-diamond-wester.jpg",
        original_url:
          "https://comicvine1.cbsistatic.com/uploads/original/0/4/74-1253-75-1-black-diamond-wester.jpg",
        image_tags: "All Images",
      },
      issue_number: "40",
      name: null,
      site_detail_url:
        "https://comicvine.gamespot.com/black-diamond-western-40/4000-75/",
      store_date: null,
      volume: {
        api_detail_url: "https://comicvine.gamespot.com/api/volume/4050-1253/",
        id: 1253,
        name: "Black Diamond Western",
        site_detail_url:
          "https://comicvine.gamespot.com/black-diamond-western/4050-1253/",
      },
    },
    {
      aliases: null,
      api_detail_url: "https://comicvine.gamespot.com/api/issue/4000-76/",
      cover_date: "1952-11-01",
      date_added: "2008-06-06 11:09:30",
      date_last_updated: "2009-05-21 04:18:36",
      deck: null,
      description: "<br/>",
      has_staff_review: false,
      id: 76,
      image: {
        icon_url:
          "https://comicvine1.cbsistatic.com/uploads/square_avatar/0/4/75-942-76-1-boy-comics.jpg",
        medium_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_medium/0/4/75-942-76-1-boy-comics.jpg",
        screen_url:
          "https://comicvine1.cbsistatic.com/uploads/screen_medium/0/4/75-942-76-1-boy-comics.jpg",
        screen_large_url:
          "https://comicvine1.cbsistatic.com/uploads/screen_kubrick/0/4/75-942-76-1-boy-comics.jpg",
        small_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/75-942-76-1-boy-comics.jpg",
        super_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_large/0/4/75-942-76-1-boy-comics.jpg",
        thumb_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_avatar/0/4/75-942-76-1-boy-comics.jpg",
        tiny_url:
          "https://comicvine1.cbsistatic.com/uploads/square_mini/0/4/75-942-76-1-boy-comics.jpg",
        original_url:
          "https://comicvine1.cbsistatic.com/uploads/original/0/4/75-942-76-1-boy-comics.jpg",
        image_tags: "All Images",
      },
      issue_number: "83",
      name: null,
      site_detail_url: "https://comicvine.gamespot.com/boy-comics-83/4000-76/",
      store_date: null,
      volume: {
        api_detail_url: "https://comicvine.gamespot.com/api/volume/4050-942/",
        id: 942,
        name: "Boy Comics",
        site_detail_url: "https://comicvine.gamespot.com/boy-comics/4050-942/",
      },
    },
    {
      aliases: null,
      api_detail_url: "https://comicvine.gamespot.com/api/issue/4000-77/",
      cover_date: "1952-11-01",
      date_added: "2008-06-06 11:09:18",
      date_last_updated: "2008-06-06 11:32:54",
      deck: null,
      description: null,
      has_staff_review: false,
      id: 77,
      image: {
        icon_url:
          "https://comicvine1.cbsistatic.com/uploads/square_avatar/0/4/76-886-77-1-daredevil-comics.jpg",
        medium_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_medium/0/4/76-886-77-1-daredevil-comics.jpg",
        screen_url:
          "https://comicvine1.cbsistatic.com/uploads/screen_medium/0/4/76-886-77-1-daredevil-comics.jpg",
        screen_large_url:
          "https://comicvine1.cbsistatic.com/uploads/screen_kubrick/0/4/76-886-77-1-daredevil-comics.jpg",
        small_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/76-886-77-1-daredevil-comics.jpg",
        super_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_large/0/4/76-886-77-1-daredevil-comics.jpg",
        thumb_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_avatar/0/4/76-886-77-1-daredevil-comics.jpg",
        tiny_url:
          "https://comicvine1.cbsistatic.com/uploads/square_mini/0/4/76-886-77-1-daredevil-comics.jpg",
        original_url:
          "https://comicvine1.cbsistatic.com/uploads/original/0/4/76-886-77-1-daredevil-comics.jpg",
        image_tags: "All Images",
      },
      issue_number: "92",
      name: null,
      site_detail_url:
        "https://comicvine.gamespot.com/daredevil-comics-92/4000-77/",
      store_date: null,
      volume: {
        api_detail_url: "https://comicvine.gamespot.com/api/volume/4050-886/",
        id: 886,
        name: "Daredevil Comics",
        site_detail_url:
          "https://comicvine.gamespot.com/daredevil-comics/4050-886/",
      },
    },
    {
      aliases: null,
      api_detail_url: "https://comicvine.gamespot.com/api/issue/4000-78/",
      cover_date: "1952-11-01",
      date_added: "2008-06-06 11:10:05",
      date_last_updated: "2008-06-06 11:32:54",
      deck: null,
      description: null,
      has_staff_review: false,
      id: 78,
      image: {
        icon_url:
          "https://comicvine1.cbsistatic.com/uploads/square_avatar/0/4/77-1422-78-1-astonishing.jpg",
        medium_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_medium/0/4/77-1422-78-1-astonishing.jpg",
        screen_url:
          "https://comicvine1.cbsistatic.com/uploads/screen_medium/0/4/77-1422-78-1-astonishing.jpg",
        screen_large_url:
          "https://comicvine1.cbsistatic.com/uploads/screen_kubrick/0/4/77-1422-78-1-astonishing.jpg",
        small_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/77-1422-78-1-astonishing.jpg",
        super_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_large/0/4/77-1422-78-1-astonishing.jpg",
        thumb_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_avatar/0/4/77-1422-78-1-astonishing.jpg",
        tiny_url:
          "https://comicvine1.cbsistatic.com/uploads/square_mini/0/4/77-1422-78-1-astonishing.jpg",
        original_url:
          "https://comicvine1.cbsistatic.com/uploads/original/0/4/77-1422-78-1-astonishing.jpg",
        image_tags: "All Images",
      },
      issue_number: "19",
      name: null,
      site_detail_url: "https://comicvine.gamespot.com/astonishing-19/4000-78/",
      store_date: null,
      volume: {
        api_detail_url: "https://comicvine.gamespot.com/api/volume/4050-1422/",
        id: 1422,
        name: "Astonishing",
        site_detail_url:
          "https://comicvine.gamespot.com/astonishing/4050-1422/",
      },
    },
    {
      aliases: null,
      api_detail_url: "https://comicvine.gamespot.com/api/issue/4000-79/",
      cover_date: "1952-11-01",
      date_added: "2008-06-06 11:09:44",
      date_last_updated: "2008-06-06 11:32:54",
      deck: null,
      description: null,
      has_staff_review: false,
      id: 79,
      image: {
        icon_url:
          "https://comicvine1.cbsistatic.com/uploads/square_avatar/0/4/78-1199-79-1-kid-colt-outlaw.jpg",
        medium_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_medium/0/4/78-1199-79-1-kid-colt-outlaw.jpg",
        screen_url:
          "https://comicvine1.cbsistatic.com/uploads/screen_medium/0/4/78-1199-79-1-kid-colt-outlaw.jpg",
        screen_large_url:
          "https://comicvine1.cbsistatic.com/uploads/screen_kubrick/0/4/78-1199-79-1-kid-colt-outlaw.jpg",
        small_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/78-1199-79-1-kid-colt-outlaw.jpg",
        super_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_large/0/4/78-1199-79-1-kid-colt-outlaw.jpg",
        thumb_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_avatar/0/4/78-1199-79-1-kid-colt-outlaw.jpg",
        tiny_url:
          "https://comicvine1.cbsistatic.com/uploads/square_mini/0/4/78-1199-79-1-kid-colt-outlaw.jpg",
        original_url:
          "https://comicvine1.cbsistatic.com/uploads/original/0/4/78-1199-79-1-kid-colt-outlaw.jpg",
        image_tags: "All Images",
      },
      issue_number: "23",
      name: null,
      site_detail_url:
        "https://comicvine.gamespot.com/kid-colt-outlaw-23/4000-79/",
      store_date: null,
      volume: {
        api_detail_url: "https://comicvine.gamespot.com/api/volume/4050-1199/",
        id: 1199,
        name: "Kid Colt Outlaw",
        site_detail_url:
          "https://comicvine.gamespot.com/kid-colt-outlaw/4050-1199/",
      },
    },
    {
      aliases: null,
      api_detail_url: "https://comicvine.gamespot.com/api/issue/4000-81/",
      cover_date: "1952-11-01",
      date_added: "2008-06-06 11:10:19",
      date_last_updated: "2010-02-16 09:13:37",
      deck: null,
      description:
        "<u><b>Features Include:</b></u><br/>Combat Casey<br/>Second Chance<br/>The Bookworm<br/>The Red Horde!",
      has_staff_review: false,
      id: 81,
      image: {
        icon_url:
          "https://comicvine1.cbsistatic.com/uploads/square_avatar/0/4/80-1506-81-1-war-combat.jpg",
        medium_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_medium/0/4/80-1506-81-1-war-combat.jpg",
        screen_url:
          "https://comicvine1.cbsistatic.com/uploads/screen_medium/0/4/80-1506-81-1-war-combat.jpg",
        screen_large_url:
          "https://comicvine1.cbsistatic.com/uploads/screen_kubrick/0/4/80-1506-81-1-war-combat.jpg",
        small_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/80-1506-81-1-war-combat.jpg",
        super_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_large/0/4/80-1506-81-1-war-combat.jpg",
        thumb_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_avatar/0/4/80-1506-81-1-war-combat.jpg",
        tiny_url:
          "https://comicvine1.cbsistatic.com/uploads/square_mini/0/4/80-1506-81-1-war-combat.jpg",
        original_url:
          "https://comicvine1.cbsistatic.com/uploads/original/0/4/80-1506-81-1-war-combat.jpg",
        image_tags: "All Images",
      },
      issue_number: "5",
      name: "Combat Casey",
      site_detail_url:
        "https://comicvine.gamespot.com/war-combat-5-combat-casey/4000-81/",
      store_date: null,
      volume: {
        api_detail_url: "https://comicvine.gamespot.com/api/volume/4050-1506/",
        id: 1506,
        name: "War Combat",
        site_detail_url: "https://comicvine.gamespot.com/war-combat/4050-1506/",
      },
    },
    {
      aliases: null,
      api_detail_url: "https://comicvine.gamespot.com/api/issue/4000-85/",
      cover_date: "1952-11-01",
      date_added: "2008-06-06 11:09:32",
      date_last_updated: "2013-08-09 07:36:08",
      deck: null,
      description: null,
      has_staff_review: false,
      id: 85,
      image: {
        icon_url:
          "https://comicvine1.cbsistatic.com/uploads/square_avatar/0/4/84-989-85-1-blackhawk.jpg",
        medium_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_medium/0/4/84-989-85-1-blackhawk.jpg",
        screen_url:
          "https://comicvine1.cbsistatic.com/uploads/screen_medium/0/4/84-989-85-1-blackhawk.jpg",
        screen_large_url:
          "https://comicvine1.cbsistatic.com/uploads/screen_kubrick/0/4/84-989-85-1-blackhawk.jpg",
        small_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/84-989-85-1-blackhawk.jpg",
        super_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_large/0/4/84-989-85-1-blackhawk.jpg",
        thumb_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_avatar/0/4/84-989-85-1-blackhawk.jpg",
        tiny_url:
          "https://comicvine1.cbsistatic.com/uploads/square_mini/0/4/84-989-85-1-blackhawk.jpg",
        original_url:
          "https://comicvine1.cbsistatic.com/uploads/original/0/4/84-989-85-1-blackhawk.jpg",
        image_tags: "All Images",
      },
      issue_number: "58",
      name: "King Cobra",
      site_detail_url:
        "https://comicvine.gamespot.com/blackhawk-58-king-cobra/4000-85/",
      store_date: null,
      volume: {
        api_detail_url: "https://comicvine.gamespot.com/api/volume/4050-1819/",
        id: 1819,
        name: "Blackhawk",
        site_detail_url: "https://comicvine.gamespot.com/blackhawk/4050-1819/",
      },
    },
    {
      aliases: null,
      api_detail_url: "https://comicvine.gamespot.com/api/issue/4000-88/",
      cover_date: "1952-11-01",
      date_added: "2008-06-06 11:10:21",
      date_last_updated: "2008-06-06 11:32:54",
      deck: null,
      description: null,
      has_staff_review: false,
      id: 88,
      image: {
        icon_url:
          "https://comicvine1.cbsistatic.com/uploads/square_avatar/0/4/87-1539-88-1-weird-tales-of-the-f.jpg",
        medium_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_medium/0/4/87-1539-88-1-weird-tales-of-the-f.jpg",
        screen_url:
          "https://comicvine1.cbsistatic.com/uploads/screen_medium/0/4/87-1539-88-1-weird-tales-of-the-f.jpg",
        screen_large_url:
          "https://comicvine1.cbsistatic.com/uploads/screen_kubrick/0/4/87-1539-88-1-weird-tales-of-the-f.jpg",
        small_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/87-1539-88-1-weird-tales-of-the-f.jpg",
        super_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_large/0/4/87-1539-88-1-weird-tales-of-the-f.jpg",
        thumb_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_avatar/0/4/87-1539-88-1-weird-tales-of-the-f.jpg",
        tiny_url:
          "https://comicvine1.cbsistatic.com/uploads/square_mini/0/4/87-1539-88-1-weird-tales-of-the-f.jpg",
        original_url:
          "https://comicvine1.cbsistatic.com/uploads/original/0/4/87-1539-88-1-weird-tales-of-the-f.jpg",
        image_tags: "All Images",
      },
      issue_number: "4",
      name: null,
      site_detail_url:
        "https://comicvine.gamespot.com/weird-tales-of-the-future-4/4000-88/",
      store_date: null,
      volume: {
        api_detail_url: "https://comicvine.gamespot.com/api/volume/4050-1539/",
        id: 1539,
        name: "Weird Tales of the Future",
        site_detail_url:
          "https://comicvine.gamespot.com/weird-tales-of-the-future/4050-1539/",
      },
    },
    {
      aliases: null,
      api_detail_url: "https://comicvine.gamespot.com/api/issue/4000-89/",
      cover_date: "1952-11-30",
      date_added: "2008-06-06 11:10:20",
      date_last_updated: "2017-03-13 08:56:49",
      deck: null,
      description: null,
      has_staff_review: false,
      id: 89,
      image: {
        icon_url:
          "https://comicvine1.cbsistatic.com/uploads/square_avatar/0/4/88-1523-89-1-tales-of-horror.jpg",
        medium_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_medium/0/4/88-1523-89-1-tales-of-horror.jpg",
        screen_url:
          "https://comicvine1.cbsistatic.com/uploads/screen_medium/0/4/88-1523-89-1-tales-of-horror.jpg",
        screen_large_url:
          "https://comicvine1.cbsistatic.com/uploads/screen_kubrick/0/4/88-1523-89-1-tales-of-horror.jpg",
        small_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/88-1523-89-1-tales-of-horror.jpg",
        super_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_large/0/4/88-1523-89-1-tales-of-horror.jpg",
        thumb_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_avatar/0/4/88-1523-89-1-tales-of-horror.jpg",
        tiny_url:
          "https://comicvine1.cbsistatic.com/uploads/square_mini/0/4/88-1523-89-1-tales-of-horror.jpg",
        original_url:
          "https://comicvine1.cbsistatic.com/uploads/original/0/4/88-1523-89-1-tales-of-horror.jpg",
        image_tags: "All Images",
      },
      issue_number: "3",
      name: null,
      site_detail_url:
        "https://comicvine.gamespot.com/tales-of-horror-3/4000-89/",
      store_date: null,
      volume: {
        api_detail_url: "https://comicvine.gamespot.com/api/volume/4050-1523/",
        id: 1523,
        name: "Tales of Horror",
        site_detail_url:
          "https://comicvine.gamespot.com/tales-of-horror/4050-1523/",
      },
    },
    {
      aliases: null,
      api_detail_url: "https://comicvine.gamespot.com/api/issue/4000-92/",
      cover_date: "1952-11-01",
      date_added: "2008-06-06 11:10:05",
      date_last_updated: "2009-11-24 19:37:33",
      deck: null,
      description:
        "<h2> Five amazing war stories!!</h2>  <br/>The Anger of Colonel Wu-San<br/>Report From Korea - Text story<br/>Hang Fire!<br/>The Death of Aunt Maggie<br/>Spearhead!",
      has_staff_review: false,
      id: 92,
      image: {
        icon_url:
          "https://comicvine1.cbsistatic.com/uploads/square_avatar/0/4/90-1423-92-1-battle.jpg",
        medium_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_medium/0/4/90-1423-92-1-battle.jpg",
        screen_url:
          "https://comicvine1.cbsistatic.com/uploads/screen_medium/0/4/90-1423-92-1-battle.jpg",
        screen_large_url:
          "https://comicvine1.cbsistatic.com/uploads/screen_kubrick/0/4/90-1423-92-1-battle.jpg",
        small_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/90-1423-92-1-battle.jpg",
        super_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_large/0/4/90-1423-92-1-battle.jpg",
        thumb_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_avatar/0/4/90-1423-92-1-battle.jpg",
        tiny_url:
          "https://comicvine1.cbsistatic.com/uploads/square_mini/0/4/90-1423-92-1-battle.jpg",
        original_url:
          "https://comicvine1.cbsistatic.com/uploads/original/0/4/90-1423-92-1-battle.jpg",
        image_tags: "All Images",
      },
      issue_number: "14",
      name: "The Anger Of Colonel Wu-San",
      site_detail_url:
        "https://comicvine.gamespot.com/battle-14-the-anger-of-colonel-wu-san/4000-92/",
      store_date: null,
      volume: {
        api_detail_url: "https://comicvine.gamespot.com/api/volume/4050-1423/",
        id: 1423,
        name: "Battle",
        site_detail_url: "https://comicvine.gamespot.com/battle/4050-1423/",
      },
    },
    {
      aliases: null,
      api_detail_url: "https://comicvine.gamespot.com/api/issue/4000-93/",
      cover_date: "1952-11-01",
      date_added: "2008-06-06 11:10:09",
      date_last_updated: "2008-06-06 11:32:54",
      deck: null,
      description: null,
      has_staff_review: false,
      id: 93,
      image: {
        icon_url:
          "https://comicvine1.cbsistatic.com/uploads/square_avatar/0/4/91-1461-93-1-strange-mysteries.jpg",
        medium_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_medium/0/4/91-1461-93-1-strange-mysteries.jpg",
        screen_url:
          "https://comicvine1.cbsistatic.com/uploads/screen_medium/0/4/91-1461-93-1-strange-mysteries.jpg",
        screen_large_url:
          "https://comicvine1.cbsistatic.com/uploads/screen_kubrick/0/4/91-1461-93-1-strange-mysteries.jpg",
        small_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/91-1461-93-1-strange-mysteries.jpg",
        super_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_large/0/4/91-1461-93-1-strange-mysteries.jpg",
        thumb_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_avatar/0/4/91-1461-93-1-strange-mysteries.jpg",
        tiny_url:
          "https://comicvine1.cbsistatic.com/uploads/square_mini/0/4/91-1461-93-1-strange-mysteries.jpg",
        original_url:
          "https://comicvine1.cbsistatic.com/uploads/original/0/4/91-1461-93-1-strange-mysteries.jpg",
        image_tags: "All Images",
      },
      issue_number: "8",
      name: null,
      site_detail_url:
        "https://comicvine.gamespot.com/strange-mysteries-8/4000-93/",
      store_date: null,
      volume: {
        api_detail_url: "https://comicvine.gamespot.com/api/volume/4050-1461/",
        id: 1461,
        name: "Strange Mysteries",
        site_detail_url:
          "https://comicvine.gamespot.com/strange-mysteries/4050-1461/",
      },
    },
    {
      aliases: null,
      api_detail_url: "https://comicvine.gamespot.com/api/issue/4000-94/",
      cover_date: "1952-11-01",
      date_added: "2008-06-06 11:09:42",
      date_last_updated: "2013-02-09 11:49:26",
      deck: null,
      description: null,
      has_staff_review: false,
      id: 94,
      image: {
        icon_url:
          "https://comicvine1.cbsistatic.com/uploads/square_avatar/0/4/92-1172-94-1-lone-ranger-the.jpg",
        medium_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_medium/0/4/92-1172-94-1-lone-ranger-the.jpg",
        screen_url:
          "https://comicvine1.cbsistatic.com/uploads/screen_medium/0/4/92-1172-94-1-lone-ranger-the.jpg",
        screen_large_url:
          "https://comicvine1.cbsistatic.com/uploads/screen_kubrick/0/4/92-1172-94-1-lone-ranger-the.jpg",
        small_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/92-1172-94-1-lone-ranger-the.jpg",
        super_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_large/0/4/92-1172-94-1-lone-ranger-the.jpg",
        thumb_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_avatar/0/4/92-1172-94-1-lone-ranger-the.jpg",
        tiny_url:
          "https://comicvine1.cbsistatic.com/uploads/square_mini/0/4/92-1172-94-1-lone-ranger-the.jpg",
        original_url:
          "https://comicvine1.cbsistatic.com/uploads/original/0/4/92-1172-94-1-lone-ranger-the.jpg",
        image_tags: "All Images",
      },
      issue_number: "53",
      name: "Terror Trail",
      site_detail_url:
        "https://comicvine.gamespot.com/the-lone-ranger-53-terror-trail/4000-94/",
      store_date: null,
      volume: {
        api_detail_url: "https://comicvine.gamespot.com/api/volume/4050-1172/",
        id: 1172,
        name: "The Lone Ranger",
        site_detail_url:
          "https://comicvine.gamespot.com/the-lone-ranger/4050-1172/",
      },
    },
    {
      aliases: null,
      api_detail_url: "https://comicvine.gamespot.com/api/issue/4000-96/",
      cover_date: null,
      date_added: "2008-06-06 11:10:04",
      date_last_updated: "2008-06-06 11:32:54",
      deck: null,
      description: null,
      has_staff_review: false,
      id: 96,
      image: {
        icon_url:
          "https://comicvine1.cbsistatic.com/uploads/square_avatar/0/4/94-1408-96-1-cisco-kid-the.jpg",
        medium_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_medium/0/4/94-1408-96-1-cisco-kid-the.jpg",
        screen_url:
          "https://comicvine1.cbsistatic.com/uploads/screen_medium/0/4/94-1408-96-1-cisco-kid-the.jpg",
        screen_large_url:
          "https://comicvine1.cbsistatic.com/uploads/screen_kubrick/0/4/94-1408-96-1-cisco-kid-the.jpg",
        small_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/94-1408-96-1-cisco-kid-the.jpg",
        super_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_large/0/4/94-1408-96-1-cisco-kid-the.jpg",
        thumb_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_avatar/0/4/94-1408-96-1-cisco-kid-the.jpg",
        tiny_url:
          "https://comicvine1.cbsistatic.com/uploads/square_mini/0/4/94-1408-96-1-cisco-kid-the.jpg",
        original_url:
          "https://comicvine1.cbsistatic.com/uploads/original/0/4/94-1408-96-1-cisco-kid-the.jpg",
        image_tags: "All Images",
      },
      issue_number: "12",
      name: null,
      site_detail_url: "https://comicvine.gamespot.com/cisco-kid-12/4000-96/",
      store_date: null,
      volume: {
        api_detail_url: "https://comicvine.gamespot.com/api/volume/4050-1408/",
        id: 1408,
        name: "Cisco Kid",
        site_detail_url: "https://comicvine.gamespot.com/cisco-kid/4050-1408/",
      },
    },
    {
      aliases: null,
      api_detail_url: "https://comicvine.gamespot.com/api/issue/4000-100/",
      cover_date: "1952-12-31",
      date_added: "2008-06-06 11:10:08",
      date_last_updated: "2017-04-17 03:17:35",
      deck: null,
      description: null,
      has_staff_review: false,
      id: 100,
      image: {
        icon_url:
          "https://comicvine1.cbsistatic.com/uploads/square_avatar/0/4/97-1446-100-1-forbidden-worlds.jpg",
        medium_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_medium/0/4/97-1446-100-1-forbidden-worlds.jpg",
        screen_url:
          "https://comicvine1.cbsistatic.com/uploads/screen_medium/0/4/97-1446-100-1-forbidden-worlds.jpg",
        screen_large_url:
          "https://comicvine1.cbsistatic.com/uploads/screen_kubrick/0/4/97-1446-100-1-forbidden-worlds.jpg",
        small_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/97-1446-100-1-forbidden-worlds.jpg",
        super_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_large/0/4/97-1446-100-1-forbidden-worlds.jpg",
        thumb_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_avatar/0/4/97-1446-100-1-forbidden-worlds.jpg",
        tiny_url:
          "https://comicvine1.cbsistatic.com/uploads/square_mini/0/4/97-1446-100-1-forbidden-worlds.jpg",
        original_url:
          "https://comicvine1.cbsistatic.com/uploads/original/0/4/97-1446-100-1-forbidden-worlds.jpg",
        image_tags: "All Images",
      },
      issue_number: "12",
      name: null,
      site_detail_url:
        "https://comicvine.gamespot.com/forbidden-worlds-12/4000-100/",
      store_date: null,
      volume: {
        api_detail_url: "https://comicvine.gamespot.com/api/volume/4050-1446/",
        id: 1446,
        name: "Forbidden Worlds",
        site_detail_url:
          "https://comicvine.gamespot.com/forbidden-worlds/4050-1446/",
      },
    },
    {
      aliases: null,
      api_detail_url: "https://comicvine.gamespot.com/api/issue/4000-101/",
      cover_date: "1952-11-01",
      date_added: "2008-06-06 11:10:20",
      date_last_updated: "2017-12-28 16:04:22",
      deck: null,
      description:
        '<p>The Were-Snake of Karnak- A reporter and his photographer girlfriend parachute into Egypt to look into reports of a cult of snake worshipers, and soon find themselves confronted by a snake goddess. </p><p>Horror in the Swamp- A text story.</p><p>The Bat and the Brain- A man builds a bat robot that he can command with his mind. Soon, a malevolent presence is drawn to his lab. </p><p>The Unholy Dead- In Egypt, a photographer encounters a beautiful woman in a tomb, and soon finds himself falling afoul of an ancient curse.</p><p>"True" Ghost Experiences- Allegedly true story of Vera Parkinson, who once encountered a ghost.</p><p> </p>',
      has_staff_review: false,
      id: 101,
      image: {
        icon_url:
          "https://comicvine1.cbsistatic.com/uploads/square_avatar/0/4/98-1514-101-1-skeleton-hand-in-sec.jpg",
        medium_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_medium/0/4/98-1514-101-1-skeleton-hand-in-sec.jpg",
        screen_url:
          "https://comicvine1.cbsistatic.com/uploads/screen_medium/0/4/98-1514-101-1-skeleton-hand-in-sec.jpg",
        screen_large_url:
          "https://comicvine1.cbsistatic.com/uploads/screen_kubrick/0/4/98-1514-101-1-skeleton-hand-in-sec.jpg",
        small_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/98-1514-101-1-skeleton-hand-in-sec.jpg",
        super_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_large/0/4/98-1514-101-1-skeleton-hand-in-sec.jpg",
        thumb_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_avatar/0/4/98-1514-101-1-skeleton-hand-in-sec.jpg",
        tiny_url:
          "https://comicvine1.cbsistatic.com/uploads/square_mini/0/4/98-1514-101-1-skeleton-hand-in-sec.jpg",
        original_url:
          "https://comicvine1.cbsistatic.com/uploads/original/0/4/98-1514-101-1-skeleton-hand-in-sec.jpg",
        image_tags: "All Images",
      },
      issue_number: "2",
      name: null,
      site_detail_url:
        "https://comicvine.gamespot.com/skeleton-hand-in-secrets-of-the-supernatural-2/4000-101/",
      store_date: null,
      volume: {
        api_detail_url: "https://comicvine.gamespot.com/api/volume/4050-1514/",
        id: 1514,
        name: "Skeleton Hand in Secrets of the Supernatural",
        site_detail_url:
          "https://comicvine.gamespot.com/skeleton-hand-in-secrets-of-the-supernatural/4050-1514/",
      },
    },
    {
      aliases: null,
      api_detail_url: "https://comicvine.gamespot.com/api/issue/4000-102/",
      cover_date: "1952-12-01",
      date_added: "2008-06-06 11:10:20",
      date_last_updated: "2011-08-28 04:11:19",
      deck: null,
      description: null,
      has_staff_review: false,
      id: 102,
      image: {
        icon_url:
          "https://comicvine1.cbsistatic.com/uploads/square_avatar/0/4/99-1516-102-1-fighting-undersea-co.jpg",
        medium_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_medium/0/4/99-1516-102-1-fighting-undersea-co.jpg",
        screen_url:
          "https://comicvine1.cbsistatic.com/uploads/screen_medium/0/4/99-1516-102-1-fighting-undersea-co.jpg",
        screen_large_url:
          "https://comicvine1.cbsistatic.com/uploads/screen_kubrick/0/4/99-1516-102-1-fighting-undersea-co.jpg",
        small_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/99-1516-102-1-fighting-undersea-co.jpg",
        super_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_large/0/4/99-1516-102-1-fighting-undersea-co.jpg",
        thumb_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_avatar/0/4/99-1516-102-1-fighting-undersea-co.jpg",
        tiny_url:
          "https://comicvine1.cbsistatic.com/uploads/square_mini/0/4/99-1516-102-1-fighting-undersea-co.jpg",
        original_url:
          "https://comicvine1.cbsistatic.com/uploads/original/0/4/99-1516-102-1-fighting-undersea-co.jpg",
        image_tags: "All Images",
      },
      issue_number: "4",
      name: null,
      site_detail_url:
        "https://comicvine.gamespot.com/fighting-undersea-commandos-4/4000-102/",
      store_date: null,
      volume: {
        api_detail_url: "https://comicvine.gamespot.com/api/volume/4050-1516/",
        id: 1516,
        name: "Fighting Undersea Commandos",
        site_detail_url:
          "https://comicvine.gamespot.com/fighting-undersea-commandos/4050-1516/",
      },
    },
    {
      aliases: null,
      api_detail_url: "https://comicvine.gamespot.com/api/issue/4000-104/",
      cover_date: "1952-12-01",
      date_added: "2008-06-06 11:10:02",
      date_last_updated: "2018-07-04 19:33:13",
      deck: null,
      description: null,
      has_staff_review: false,
      id: 104,
      image: {
        icon_url:
          "https://comicvine1.cbsistatic.com/uploads/square_avatar/0/4/101-1403-104-1-all-star-western.jpg",
        medium_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_medium/0/4/101-1403-104-1-all-star-western.jpg",
        screen_url:
          "https://comicvine1.cbsistatic.com/uploads/screen_medium/0/4/101-1403-104-1-all-star-western.jpg",
        screen_large_url:
          "https://comicvine1.cbsistatic.com/uploads/screen_kubrick/0/4/101-1403-104-1-all-star-western.jpg",
        small_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/101-1403-104-1-all-star-western.jpg",
        super_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_large/0/4/101-1403-104-1-all-star-western.jpg",
        thumb_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_avatar/0/4/101-1403-104-1-all-star-western.jpg",
        tiny_url:
          "https://comicvine1.cbsistatic.com/uploads/square_mini/0/4/101-1403-104-1-all-star-western.jpg",
        original_url:
          "https://comicvine1.cbsistatic.com/uploads/original/0/4/101-1403-104-1-all-star-western.jpg",
        image_tags: "All Images",
      },
      issue_number: "68",
      name:
        "Six Bullets for Sheriff Trigger / Threat of the Seneca Frogman / The Ambush of the Painted Wagon / Dangerous Decoy",
      site_detail_url:
        "https://comicvine.gamespot.com/all-star-western-68-six-bullets-for-sheriff-trigge/4000-104/",
      store_date: "1952-10-24",
      volume: {
        api_detail_url: "https://comicvine.gamespot.com/api/volume/4050-1403/",
        id: 1403,
        name: "All-Star Western",
        site_detail_url:
          "https://comicvine.gamespot.com/all-star-western/4050-1403/",
      },
    },
    {
      aliases: null,
      api_detail_url: "https://comicvine.gamespot.com/api/issue/4000-107/",
      cover_date: "1952-12-01",
      date_added: "2008-06-06 11:10:03",
      date_last_updated: "2017-12-01 16:48:06",
      deck: null,
      description:
        '<p>"The Unknown Spaceman,"   <br /> "S.O.S. in Space,"  <br />"Cosmic Capsule,"  <br />"Rocketeer For Hire" (pencils by Carmine Infantino).  <br />Superman stars in a one-page public service announcement, "UNICEF Spells Help for the Children of the World!" </p>',
      has_staff_review: false,
      id: 107,
      image: {
        icon_url:
          "https://comicvine1.cbsistatic.com/uploads/square_avatar/0/4/103-1406-107-1-mystery-in-space.jpg",
        medium_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_medium/0/4/103-1406-107-1-mystery-in-space.jpg",
        screen_url:
          "https://comicvine1.cbsistatic.com/uploads/screen_medium/0/4/103-1406-107-1-mystery-in-space.jpg",
        screen_large_url:
          "https://comicvine1.cbsistatic.com/uploads/screen_kubrick/0/4/103-1406-107-1-mystery-in-space.jpg",
        small_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/103-1406-107-1-mystery-in-space.jpg",
        super_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_large/0/4/103-1406-107-1-mystery-in-space.jpg",
        thumb_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_avatar/0/4/103-1406-107-1-mystery-in-space.jpg",
        tiny_url:
          "https://comicvine1.cbsistatic.com/uploads/square_mini/0/4/103-1406-107-1-mystery-in-space.jpg",
        original_url:
          "https://comicvine1.cbsistatic.com/uploads/original/0/4/103-1406-107-1-mystery-in-space.jpg",
        image_tags: "All Images",
      },
      issue_number: "11",
      name: null,
      site_detail_url:
        "https://comicvine.gamespot.com/mystery-in-space-11/4000-107/",
      store_date: null,
      volume: {
        api_detail_url: "https://comicvine.gamespot.com/api/volume/4050-1406/",
        id: 1406,
        name: "Mystery In Space",
        site_detail_url:
          "https://comicvine.gamespot.com/mystery-in-space/4050-1406/",
      },
    },
    {
      aliases: null,
      api_detail_url: "https://comicvine.gamespot.com/api/issue/4000-109/",
      cover_date: "1952-12-01",
      date_added: "2008-06-06 11:10:14",
      date_last_updated: "2008-06-06 11:32:54",
      deck: null,
      description: null,
      has_staff_review: false,
      id: 109,
      image: {
        icon_url:
          "https://comicvine1.cbsistatic.com/uploads/square_avatar/0/4/104-1473-109-1-phantom-stranger-th.jpg",
        medium_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_medium/0/4/104-1473-109-1-phantom-stranger-th.jpg",
        screen_url:
          "https://comicvine1.cbsistatic.com/uploads/screen_medium/0/4/104-1473-109-1-phantom-stranger-th.jpg",
        screen_large_url:
          "https://comicvine1.cbsistatic.com/uploads/screen_kubrick/0/4/104-1473-109-1-phantom-stranger-th.jpg",
        small_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/104-1473-109-1-phantom-stranger-th.jpg",
        super_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_large/0/4/104-1473-109-1-phantom-stranger-th.jpg",
        thumb_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_avatar/0/4/104-1473-109-1-phantom-stranger-th.jpg",
        tiny_url:
          "https://comicvine1.cbsistatic.com/uploads/square_mini/0/4/104-1473-109-1-phantom-stranger-th.jpg",
        original_url:
          "https://comicvine1.cbsistatic.com/uploads/original/0/4/104-1473-109-1-phantom-stranger-th.jpg",
        image_tags: "All Images",
      },
      issue_number: "3",
      name:
        "Ghosts for Sale/UNICEF Spells Help for the Children of the World!/Dead Man's Hand/How to Spot a Witch/The Man Who Carved Death/The Eerie Eddys/The Day of Destiny",
      site_detail_url:
        "https://comicvine.gamespot.com/the-phantom-stranger-3-ghosts-for-saleunicef-spell/4000-109/",
      store_date: null,
      volume: {
        api_detail_url: "https://comicvine.gamespot.com/api/volume/4050-1473/",
        id: 1473,
        name: "The Phantom Stranger",
        site_detail_url:
          "https://comicvine.gamespot.com/the-phantom-stranger/4050-1473/",
      },
    },
    {
      aliases: null,
      api_detail_url: "https://comicvine.gamespot.com/api/issue/4000-110/",
      cover_date: "1952-12-01",
      date_added: "2008-06-06 11:10:21",
      date_last_updated: "2012-01-20 06:30:43",
      deck: null,
      description: null,
      has_staff_review: false,
      id: 110,
      image: {
        icon_url:
          "https://comicvine1.cbsistatic.com/uploads/square_avatar/0/4/105-1543-110-1-star-spangled-war-st.jpg",
        medium_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_medium/0/4/105-1543-110-1-star-spangled-war-st.jpg",
        screen_url:
          "https://comicvine1.cbsistatic.com/uploads/screen_medium/0/4/105-1543-110-1-star-spangled-war-st.jpg",
        screen_large_url:
          "https://comicvine1.cbsistatic.com/uploads/screen_kubrick/0/4/105-1543-110-1-star-spangled-war-st.jpg",
        small_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/105-1543-110-1-star-spangled-war-st.jpg",
        super_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_large/0/4/105-1543-110-1-star-spangled-war-st.jpg",
        thumb_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_avatar/0/4/105-1543-110-1-star-spangled-war-st.jpg",
        tiny_url:
          "https://comicvine1.cbsistatic.com/uploads/square_mini/0/4/105-1543-110-1-star-spangled-war-st.jpg",
        original_url:
          "https://comicvine1.cbsistatic.com/uploads/original/0/4/105-1543-110-1-star-spangled-war-st.jpg",
        image_tags: "All Images",
      },
      issue_number: "4",
      name: null,
      site_detail_url:
        "https://comicvine.gamespot.com/star-spangled-war-stories-4/4000-110/",
      store_date: null,
      volume: {
        api_detail_url: "https://comicvine.gamespot.com/api/volume/4050-1543/",
        id: 1543,
        name: "Star Spangled War Stories",
        site_detail_url:
          "https://comicvine.gamespot.com/star-spangled-war-stories/4050-1543/",
      },
    },
    {
      aliases: null,
      api_detail_url: "https://comicvine.gamespot.com/api/issue/4000-111/",
      cover_date: "1952-12-01",
      date_added: "2008-06-06 11:09:56",
      date_last_updated: "2017-12-01 16:53:39",
      deck: null,
      description: "<p>=</p>",
      has_staff_review: false,
      id: 111,
      image: {
        icon_url:
          "https://comicvine1.cbsistatic.com/uploads/square_avatar/0/4/106-1328-111-1-strange-adventures.jpg",
        medium_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_medium/0/4/106-1328-111-1-strange-adventures.jpg",
        screen_url:
          "https://comicvine1.cbsistatic.com/uploads/screen_medium/0/4/106-1328-111-1-strange-adventures.jpg",
        screen_large_url:
          "https://comicvine1.cbsistatic.com/uploads/screen_kubrick/0/4/106-1328-111-1-strange-adventures.jpg",
        small_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/106-1328-111-1-strange-adventures.jpg",
        super_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_large/0/4/106-1328-111-1-strange-adventures.jpg",
        thumb_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_avatar/0/4/106-1328-111-1-strange-adventures.jpg",
        tiny_url:
          "https://comicvine1.cbsistatic.com/uploads/square_mini/0/4/106-1328-111-1-strange-adventures.jpg",
        original_url:
          "https://comicvine1.cbsistatic.com/uploads/original/0/4/106-1328-111-1-strange-adventures.jpg",
        image_tags: "All Images",
      },
      issue_number: "27",
      name: null,
      site_detail_url:
        "https://comicvine.gamespot.com/strange-adventures-27/4000-111/",
      store_date: null,
      volume: {
        api_detail_url: "https://comicvine.gamespot.com/api/volume/4050-1328/",
        id: 1328,
        name: "Strange Adventures",
        site_detail_url:
          "https://comicvine.gamespot.com/strange-adventures/4050-1328/",
      },
    },
    {
      aliases: null,
      api_detail_url: "https://comicvine.gamespot.com/api/issue/4000-113/",
      cover_date: "1952-12-01",
      date_added: "2008-06-06 11:17:47",
      date_last_updated: "2008-06-06 11:47:00",
      deck: null,
      description: null,
      has_staff_review: false,
      id: 113,
      image: {
        icon_url:
          "https://comicvine1.cbsistatic.com/uploads/square_avatar/0/3125/161642-6575-113-2-looney-tunes-and-mer.jpg",
        medium_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_medium/0/3125/161642-6575-113-2-looney-tunes-and-mer.jpg",
        screen_url:
          "https://comicvine1.cbsistatic.com/uploads/screen_medium/0/3125/161642-6575-113-2-looney-tunes-and-mer.jpg",
        screen_large_url:
          "https://comicvine1.cbsistatic.com/uploads/screen_kubrick/0/3125/161642-6575-113-2-looney-tunes-and-mer.jpg",
        small_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_small/0/3125/161642-6575-113-2-looney-tunes-and-mer.jpg",
        super_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_large/0/3125/161642-6575-113-2-looney-tunes-and-mer.jpg",
        thumb_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_avatar/0/3125/161642-6575-113-2-looney-tunes-and-mer.jpg",
        tiny_url:
          "https://comicvine1.cbsistatic.com/uploads/square_mini/0/3125/161642-6575-113-2-looney-tunes-and-mer.jpg",
        original_url:
          "https://comicvine1.cbsistatic.com/uploads/original/0/3125/161642-6575-113-2-looney-tunes-and-mer.jpg",
        image_tags: "All Images",
      },
      issue_number: "134",
      name: null,
      site_detail_url:
        "https://comicvine.gamespot.com/looney-tunes-and-merrie-melodies-134/4000-113/",
      store_date: null,
      volume: {
        api_detail_url: "https://comicvine.gamespot.com/api/volume/4050-6575/",
        id: 6575,
        name: "Looney Tunes and Merrie Melodies",
        site_detail_url:
          "https://comicvine.gamespot.com/looney-tunes-and-merrie-melodies/4050-6575/",
      },
    },
    {
      aliases: null,
      api_detail_url: "https://comicvine.gamespot.com/api/issue/4000-114/",
      cover_date: "1952-11-30",
      date_added: "2008-06-06 11:09:42",
      date_last_updated: "2017-12-11 13:16:57",
      deck: null,
      description: null,
      has_staff_review: false,
      id: 114,
      image: {
        icon_url:
          "https://comicvine1.cbsistatic.com/uploads/square_avatar/0/4/108-1174-114-1-popeye.jpg",
        medium_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_medium/0/4/108-1174-114-1-popeye.jpg",
        screen_url:
          "https://comicvine1.cbsistatic.com/uploads/screen_medium/0/4/108-1174-114-1-popeye.jpg",
        screen_large_url:
          "https://comicvine1.cbsistatic.com/uploads/screen_kubrick/0/4/108-1174-114-1-popeye.jpg",
        small_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/108-1174-114-1-popeye.jpg",
        super_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_large/0/4/108-1174-114-1-popeye.jpg",
        thumb_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_avatar/0/4/108-1174-114-1-popeye.jpg",
        tiny_url:
          "https://comicvine1.cbsistatic.com/uploads/square_mini/0/4/108-1174-114-1-popeye.jpg",
        original_url:
          "https://comicvine1.cbsistatic.com/uploads/original/0/4/108-1174-114-1-popeye.jpg",
        image_tags: "All Images",
      },
      issue_number: "22",
      name: null,
      site_detail_url: "https://comicvine.gamespot.com/popeye-22/4000-114/",
      store_date: null,
      volume: {
        api_detail_url: "https://comicvine.gamespot.com/api/volume/4050-1174/",
        id: 1174,
        name: "Popeye",
        site_detail_url: "https://comicvine.gamespot.com/popeye/4050-1174/",
      },
    },
    {
      aliases: null,
      api_detail_url: "https://comicvine.gamespot.com/api/issue/4000-115/",
      cover_date: "1952-12-01",
      date_added: "2008-06-06 11:09:43",
      date_last_updated: "2008-06-13 13:11:45",
      deck: null,
      description: null,
      has_staff_review: false,
      id: 115,
      image: {
        icon_url:
          "https://comicvine1.cbsistatic.com/uploads/square_avatar/0/4/109-1176-115-1-tarzan.jpg",
        medium_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_medium/0/4/109-1176-115-1-tarzan.jpg",
        screen_url:
          "https://comicvine1.cbsistatic.com/uploads/screen_medium/0/4/109-1176-115-1-tarzan.jpg",
        screen_large_url:
          "https://comicvine1.cbsistatic.com/uploads/screen_kubrick/0/4/109-1176-115-1-tarzan.jpg",
        small_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/109-1176-115-1-tarzan.jpg",
        super_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_large/0/4/109-1176-115-1-tarzan.jpg",
        thumb_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_avatar/0/4/109-1176-115-1-tarzan.jpg",
        tiny_url:
          "https://comicvine1.cbsistatic.com/uploads/square_mini/0/4/109-1176-115-1-tarzan.jpg",
        original_url:
          "https://comicvine1.cbsistatic.com/uploads/original/0/4/109-1176-115-1-tarzan.jpg",
        image_tags: "All Images",
      },
      issue_number: "39",
      name: null,
      site_detail_url: "https://comicvine.gamespot.com/tarzan-39/4000-115/",
      store_date: null,
      volume: {
        api_detail_url: "https://comicvine.gamespot.com/api/volume/4050-1176/",
        id: 1176,
        name: "Tarzan",
        site_detail_url: "https://comicvine.gamespot.com/tarzan/4050-1176/",
      },
    },
    {
      aliases: null,
      api_detail_url: "https://comicvine.gamespot.com/api/issue/4000-116/",
      cover_date: "1952-12-01",
      date_added: "2008-06-06 11:09:49",
      date_last_updated: "2008-06-06 11:32:54",
      deck: null,
      description: null,
      has_staff_review: false,
      id: 116,
      image: {
        icon_url:
          "https://comicvine1.cbsistatic.com/uploads/square_avatar/0/4/110-1247-116-1-tom-amp-jerry-comi.jpg",
        medium_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_medium/0/4/110-1247-116-1-tom-amp-jerry-comi.jpg",
        screen_url:
          "https://comicvine1.cbsistatic.com/uploads/screen_medium/0/4/110-1247-116-1-tom-amp-jerry-comi.jpg",
        screen_large_url:
          "https://comicvine1.cbsistatic.com/uploads/screen_kubrick/0/4/110-1247-116-1-tom-amp-jerry-comi.jpg",
        small_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/110-1247-116-1-tom-amp-jerry-comi.jpg",
        super_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_large/0/4/110-1247-116-1-tom-amp-jerry-comi.jpg",
        thumb_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_avatar/0/4/110-1247-116-1-tom-amp-jerry-comi.jpg",
        tiny_url:
          "https://comicvine1.cbsistatic.com/uploads/square_mini/0/4/110-1247-116-1-tom-amp-jerry-comi.jpg",
        original_url:
          "https://comicvine1.cbsistatic.com/uploads/original/0/4/110-1247-116-1-tom-amp-jerry-comi.jpg",
        image_tags: "All Images",
      },
      issue_number: "101",
      name: null,
      site_detail_url:
        "https://comicvine.gamespot.com/tom-jerry-comics-101/4000-116/",
      store_date: null,
      volume: {
        api_detail_url: "https://comicvine.gamespot.com/api/volume/4050-1247/",
        id: 1247,
        name: "Tom & Jerry Comics",
        site_detail_url:
          "https://comicvine.gamespot.com/tom-jerry-comics/4050-1247/",
      },
    },
    {
      aliases: null,
      api_detail_url: "https://comicvine.gamespot.com/api/issue/4000-117/",
      cover_date: "1952-12-01",
      date_added: "2008-06-06 11:10:15",
      date_last_updated: "2008-06-06 11:32:54",
      deck: null,
      description: null,
      has_staff_review: false,
      id: 117,
      image: {
        icon_url:
          "https://comicvine1.cbsistatic.com/uploads/square_avatar/0/4/111-1479-117-1-tom-amp-jerry-wint.jpg",
        medium_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_medium/0/4/111-1479-117-1-tom-amp-jerry-wint.jpg",
        screen_url:
          "https://comicvine1.cbsistatic.com/uploads/screen_medium/0/4/111-1479-117-1-tom-amp-jerry-wint.jpg",
        screen_large_url:
          "https://comicvine1.cbsistatic.com/uploads/screen_kubrick/0/4/111-1479-117-1-tom-amp-jerry-wint.jpg",
        small_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/111-1479-117-1-tom-amp-jerry-wint.jpg",
        super_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_large/0/4/111-1479-117-1-tom-amp-jerry-wint.jpg",
        thumb_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_avatar/0/4/111-1479-117-1-tom-amp-jerry-wint.jpg",
        tiny_url:
          "https://comicvine1.cbsistatic.com/uploads/square_mini/0/4/111-1479-117-1-tom-amp-jerry-wint.jpg",
        original_url:
          "https://comicvine1.cbsistatic.com/uploads/original/0/4/111-1479-117-1-tom-amp-jerry-wint.jpg",
        image_tags: "All Images",
      },
      issue_number: "1",
      name: null,
      site_detail_url:
        "https://comicvine.gamespot.com/tom-jerry-winter-carnival-1/4000-117/",
      store_date: null,
      volume: {
        api_detail_url: "https://comicvine.gamespot.com/api/volume/4050-1479/",
        id: 1479,
        name: "Tom & Jerry Winter Carnival",
        site_detail_url:
          "https://comicvine.gamespot.com/tom-jerry-winter-carnival/4050-1479/",
      },
    },
    {
      aliases: null,
      api_detail_url: "https://comicvine.gamespot.com/api/issue/4000-118/",
      cover_date: "1952-12-01",
      date_added: "2008-06-06 11:09:36",
      date_last_updated: "2008-06-06 11:32:54",
      deck: null,
      description: null,
      has_staff_review: false,
      id: 118,
      image: {
        icon_url:
          "https://comicvine1.cbsistatic.com/uploads/square_avatar/0/4/112-1098-118-1-walter-lantz-new-fun.jpg",
        medium_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_medium/0/4/112-1098-118-1-walter-lantz-new-fun.jpg",
        screen_url:
          "https://comicvine1.cbsistatic.com/uploads/screen_medium/0/4/112-1098-118-1-walter-lantz-new-fun.jpg",
        screen_large_url:
          "https://comicvine1.cbsistatic.com/uploads/screen_kubrick/0/4/112-1098-118-1-walter-lantz-new-fun.jpg",
        small_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/112-1098-118-1-walter-lantz-new-fun.jpg",
        super_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_large/0/4/112-1098-118-1-walter-lantz-new-fun.jpg",
        thumb_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_avatar/0/4/112-1098-118-1-walter-lantz-new-fun.jpg",
        tiny_url:
          "https://comicvine1.cbsistatic.com/uploads/square_mini/0/4/112-1098-118-1-walter-lantz-new-fun.jpg",
        original_url:
          "https://comicvine1.cbsistatic.com/uploads/original/0/4/112-1098-118-1-walter-lantz-new-fun.jpg",
        image_tags: "All Images",
      },
      issue_number: "190",
      name: null,
      site_detail_url:
        "https://comicvine.gamespot.com/walter-lantz-new-funnies-190/4000-118/",
      store_date: null,
      volume: {
        api_detail_url: "https://comicvine.gamespot.com/api/volume/4050-1098/",
        id: 1098,
        name: "Walter Lantz New Funnies",
        site_detail_url:
          "https://comicvine.gamespot.com/walter-lantz-new-funnies/4050-1098/",
      },
    },
    {
      aliases: null,
      api_detail_url: "https://comicvine.gamespot.com/api/issue/4000-120/",
      cover_date: "1952-11-01",
      date_added: "2008-06-06 11:10:02",
      date_last_updated: "2019-04-09 22:40:01",
      deck: null,
      description: null,
      has_staff_review: false,
      id: 120,
      image: {
        icon_url:
          "https://comicvine1.cbsistatic.com/uploads/square_avatar/0/4/114-1376-120-1-two-fisted-tales.jpg",
        medium_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_medium/0/4/114-1376-120-1-two-fisted-tales.jpg",
        screen_url:
          "https://comicvine1.cbsistatic.com/uploads/screen_medium/0/4/114-1376-120-1-two-fisted-tales.jpg",
        screen_large_url:
          "https://comicvine1.cbsistatic.com/uploads/screen_kubrick/0/4/114-1376-120-1-two-fisted-tales.jpg",
        small_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/114-1376-120-1-two-fisted-tales.jpg",
        super_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_large/0/4/114-1376-120-1-two-fisted-tales.jpg",
        thumb_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_avatar/0/4/114-1376-120-1-two-fisted-tales.jpg",
        tiny_url:
          "https://comicvine1.cbsistatic.com/uploads/square_mini/0/4/114-1376-120-1-two-fisted-tales.jpg",
        original_url:
          "https://comicvine1.cbsistatic.com/uploads/original/0/4/114-1376-120-1-two-fisted-tales.jpg",
        image_tags: "All Images",
      },
      issue_number: "30",
      name: null,
      site_detail_url:
        "https://comicvine.gamespot.com/two-fisted-tales-30/4000-120/",
      store_date: null,
      volume: {
        api_detail_url: "https://comicvine.gamespot.com/api/volume/4050-1376/",
        id: 1376,
        name: "Two-Fisted Tales",
        site_detail_url:
          "https://comicvine.gamespot.com/two-fisted-tales/4050-1376/",
      },
    },
    {
      aliases: null,
      api_detail_url: "https://comicvine.gamespot.com/api/issue/4000-121/",
      cover_date: "1952-11-01",
      date_added: "2008-06-06 11:10:08",
      date_last_updated: "2008-06-06 11:32:54",
      deck: null,
      description: null,
      has_staff_review: false,
      id: 121,
      image: {
        icon_url:
          "https://comicvine1.cbsistatic.com/uploads/square_avatar/0/4/115-1444-121-1-weird-fantasy.jpg",
        medium_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_medium/0/4/115-1444-121-1-weird-fantasy.jpg",
        screen_url:
          "https://comicvine1.cbsistatic.com/uploads/screen_medium/0/4/115-1444-121-1-weird-fantasy.jpg",
        screen_large_url:
          "https://comicvine1.cbsistatic.com/uploads/screen_kubrick/0/4/115-1444-121-1-weird-fantasy.jpg",
        small_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/115-1444-121-1-weird-fantasy.jpg",
        super_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_large/0/4/115-1444-121-1-weird-fantasy.jpg",
        thumb_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_avatar/0/4/115-1444-121-1-weird-fantasy.jpg",
        tiny_url:
          "https://comicvine1.cbsistatic.com/uploads/square_mini/0/4/115-1444-121-1-weird-fantasy.jpg",
        original_url:
          "https://comicvine1.cbsistatic.com/uploads/original/0/4/115-1444-121-1-weird-fantasy.jpg",
        image_tags: "All Images",
      },
      issue_number: "16",
      name: null,
      site_detail_url:
        "https://comicvine.gamespot.com/weird-fantasy-16/4000-121/",
      store_date: null,
      volume: {
        api_detail_url: "https://comicvine.gamespot.com/api/volume/4050-1444/",
        id: 1444,
        name: "Weird Fantasy",
        site_detail_url:
          "https://comicvine.gamespot.com/weird-fantasy/4050-1444/",
      },
    },
    {
      aliases: null,
      api_detail_url: "https://comicvine.gamespot.com/api/issue/4000-123/",
      cover_date: "1952-12-01",
      date_added: "2008-06-06 11:09:21",
      date_last_updated: "2009-07-30 14:14:35",
      deck: null,
      description: "<br/>",
      has_staff_review: false,
      id: 123,
      image: {
        icon_url:
          "https://comicvine1.cbsistatic.com/uploads/square_avatar/0/4/117-898-123-1-captain-marvel-adven.jpg",
        medium_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_medium/0/4/117-898-123-1-captain-marvel-adven.jpg",
        screen_url:
          "https://comicvine1.cbsistatic.com/uploads/screen_medium/0/4/117-898-123-1-captain-marvel-adven.jpg",
        screen_large_url:
          "https://comicvine1.cbsistatic.com/uploads/screen_kubrick/0/4/117-898-123-1-captain-marvel-adven.jpg",
        small_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/117-898-123-1-captain-marvel-adven.jpg",
        super_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_large/0/4/117-898-123-1-captain-marvel-adven.jpg",
        thumb_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_avatar/0/4/117-898-123-1-captain-marvel-adven.jpg",
        tiny_url:
          "https://comicvine1.cbsistatic.com/uploads/square_mini/0/4/117-898-123-1-captain-marvel-adven.jpg",
        original_url:
          "https://comicvine1.cbsistatic.com/uploads/original/0/4/117-898-123-1-captain-marvel-adven.jpg",
        image_tags: "All Images",
      },
      issue_number: "139",
      name: null,
      site_detail_url:
        "https://comicvine.gamespot.com/captain-marvel-adventures-139/4000-123/",
      store_date: null,
      volume: {
        api_detail_url: "https://comicvine.gamespot.com/api/volume/4050-898/",
        id: 898,
        name: "Captain Marvel Adventures",
        site_detail_url:
          "https://comicvine.gamespot.com/captain-marvel-adventures/4050-898/",
      },
    },
    {
      aliases: null,
      api_detail_url: "https://comicvine.gamespot.com/api/issue/4000-125/",
      cover_date: "1952-12-01",
      date_added: "2008-06-06 11:09:36",
      date_last_updated: "2012-09-27 20:03:45",
      deck: null,
      description: null,
      has_staff_review: false,
      id: 125,
      image: {
        icon_url:
          "https://comicvine1.cbsistatic.com/uploads/square_avatar/0/4/118-1066-125-1-marvel-family-the.jpg",
        medium_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_medium/0/4/118-1066-125-1-marvel-family-the.jpg",
        screen_url:
          "https://comicvine1.cbsistatic.com/uploads/screen_medium/0/4/118-1066-125-1-marvel-family-the.jpg",
        screen_large_url:
          "https://comicvine1.cbsistatic.com/uploads/screen_kubrick/0/4/118-1066-125-1-marvel-family-the.jpg",
        small_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/118-1066-125-1-marvel-family-the.jpg",
        super_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_large/0/4/118-1066-125-1-marvel-family-the.jpg",
        thumb_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_avatar/0/4/118-1066-125-1-marvel-family-the.jpg",
        tiny_url:
          "https://comicvine1.cbsistatic.com/uploads/square_mini/0/4/118-1066-125-1-marvel-family-the.jpg",
        original_url:
          "https://comicvine1.cbsistatic.com/uploads/original/0/4/118-1066-125-1-marvel-family-the.jpg",
        image_tags: "All Images",
      },
      issue_number: "78",
      name: "The Red Vulture Strikes",
      site_detail_url:
        "https://comicvine.gamespot.com/the-marvel-family-78-the-red-vulture-strikes/4000-125/",
      store_date: null,
      volume: {
        api_detail_url: "https://comicvine.gamespot.com/api/volume/4050-1066/",
        id: 1066,
        name: "The Marvel Family",
        site_detail_url:
          "https://comicvine.gamespot.com/the-marvel-family/4050-1066/",
      },
    },
    {
      aliases: null,
      api_detail_url: "https://comicvine.gamespot.com/api/issue/4000-126/",
      cover_date: "1952-12-01",
      date_added: "2008-06-06 11:09:18",
      date_last_updated: "2008-06-06 11:32:54",
      deck: null,
      description: null,
      has_staff_review: false,
      id: 126,
      image: {
        icon_url:
          "https://comicvine1.cbsistatic.com/uploads/square_avatar/0/4/119-839-126-1-master-comics.jpg",
        medium_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_medium/0/4/119-839-126-1-master-comics.jpg",
        screen_url:
          "https://comicvine1.cbsistatic.com/uploads/screen_medium/0/4/119-839-126-1-master-comics.jpg",
        screen_large_url:
          "https://comicvine1.cbsistatic.com/uploads/screen_kubrick/0/4/119-839-126-1-master-comics.jpg",
        small_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/119-839-126-1-master-comics.jpg",
        super_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_large/0/4/119-839-126-1-master-comics.jpg",
        thumb_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_avatar/0/4/119-839-126-1-master-comics.jpg",
        tiny_url:
          "https://comicvine1.cbsistatic.com/uploads/square_mini/0/4/119-839-126-1-master-comics.jpg",
        original_url:
          "https://comicvine1.cbsistatic.com/uploads/original/0/4/119-839-126-1-master-comics.jpg",
        image_tags: "All Images",
      },
      issue_number: "131",
      name: null,
      site_detail_url:
        "https://comicvine.gamespot.com/master-comics-131/4000-126/",
      store_date: null,
      volume: {
        api_detail_url: "https://comicvine.gamespot.com/api/volume/4050-839/",
        id: 839,
        name: "Master Comics",
        site_detail_url:
          "https://comicvine.gamespot.com/master-comics/4050-839/",
      },
    },
    {
      aliases: null,
      api_detail_url: "https://comicvine.gamespot.com/api/issue/4000-127/",
      cover_date: "1952-12-01",
      date_added: "2008-06-06 11:09:18",
      date_last_updated: "2008-06-06 11:32:54",
      deck: null,
      description: null,
      has_staff_review: false,
      id: 127,
      image: {
        icon_url:
          "https://comicvine1.cbsistatic.com/uploads/square_avatar/0/4/120-843-127-1-whiz-comics.jpg",
        medium_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_medium/0/4/120-843-127-1-whiz-comics.jpg",
        screen_url:
          "https://comicvine1.cbsistatic.com/uploads/screen_medium/0/4/120-843-127-1-whiz-comics.jpg",
        screen_large_url:
          "https://comicvine1.cbsistatic.com/uploads/screen_kubrick/0/4/120-843-127-1-whiz-comics.jpg",
        small_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/120-843-127-1-whiz-comics.jpg",
        super_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_large/0/4/120-843-127-1-whiz-comics.jpg",
        thumb_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_avatar/0/4/120-843-127-1-whiz-comics.jpg",
        tiny_url:
          "https://comicvine1.cbsistatic.com/uploads/square_mini/0/4/120-843-127-1-whiz-comics.jpg",
        original_url:
          "https://comicvine1.cbsistatic.com/uploads/original/0/4/120-843-127-1-whiz-comics.jpg",
        image_tags: "All Images",
      },
      issue_number: "152",
      name: null,
      site_detail_url:
        "https://comicvine.gamespot.com/whiz-comics-152/4000-127/",
      store_date: null,
      volume: {
        api_detail_url: "https://comicvine.gamespot.com/api/volume/4050-843/",
        id: 843,
        name: "Whiz Comics",
        site_detail_url: "https://comicvine.gamespot.com/whiz-comics/4050-843/",
      },
    },
    {
      aliases: null,
      api_detail_url: "https://comicvine.gamespot.com/api/issue/4000-128/",
      cover_date: "1952-12-01",
      date_added: "2008-06-06 11:09:04",
      date_last_updated: "2009-07-27 14:37:41",
      deck: null,
      description: null,
      has_staff_review: false,
      id: 128,
      image: {
        icon_url:
          "https://comicvine1.cbsistatic.com/uploads/square_avatar/0/9116/893417-12.jpg",
        medium_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_medium/0/9116/893417-12.jpg",
        screen_url:
          "https://comicvine1.cbsistatic.com/uploads/screen_medium/0/9116/893417-12.jpg",
        screen_large_url:
          "https://comicvine1.cbsistatic.com/uploads/screen_kubrick/0/9116/893417-12.jpg",
        small_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9116/893417-12.jpg",
        super_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_large/0/9116/893417-12.jpg",
        thumb_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_avatar/0/9116/893417-12.jpg",
        tiny_url:
          "https://comicvine1.cbsistatic.com/uploads/square_mini/0/9116/893417-12.jpg",
        original_url:
          "https://comicvine1.cbsistatic.com/uploads/original/0/9116/893417-12.jpg",
        image_tags: "All Images",
      },
      issue_number: "165",
      name: null,
      site_detail_url:
        "https://comicvine.gamespot.com/jumbo-comics-165/4000-128/",
      store_date: null,
      volume: {
        api_detail_url: "https://comicvine.gamespot.com/api/volume/4050-769/",
        id: 769,
        name: "Jumbo Comics",
        site_detail_url:
          "https://comicvine.gamespot.com/jumbo-comics/4050-769/",
      },
    },
    {
      aliases: null,
      api_detail_url: "https://comicvine.gamespot.com/api/issue/4000-131/",
      cover_date: "1952-12-01",
      date_added: "2008-06-06 11:10:21",
      date_last_updated: "2008-06-06 11:32:54",
      deck: null,
      description: null,
      has_staff_review: false,
      id: 131,
      image: {
        icon_url:
          "https://comicvine1.cbsistatic.com/uploads/square_avatar/0/4/124-1537-131-1-weird-mysteries.jpg",
        medium_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_medium/0/4/124-1537-131-1-weird-mysteries.jpg",
        screen_url:
          "https://comicvine1.cbsistatic.com/uploads/screen_medium/0/4/124-1537-131-1-weird-mysteries.jpg",
        screen_large_url:
          "https://comicvine1.cbsistatic.com/uploads/screen_kubrick/0/4/124-1537-131-1-weird-mysteries.jpg",
        small_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/124-1537-131-1-weird-mysteries.jpg",
        super_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_large/0/4/124-1537-131-1-weird-mysteries.jpg",
        thumb_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_avatar/0/4/124-1537-131-1-weird-mysteries.jpg",
        tiny_url:
          "https://comicvine1.cbsistatic.com/uploads/square_mini/0/4/124-1537-131-1-weird-mysteries.jpg",
        original_url:
          "https://comicvine1.cbsistatic.com/uploads/original/0/4/124-1537-131-1-weird-mysteries.jpg",
        image_tags: "All Images",
      },
      issue_number: "2",
      name: null,
      site_detail_url:
        "https://comicvine.gamespot.com/weird-mysteries-2/4000-131/",
      store_date: null,
      volume: {
        api_detail_url: "https://comicvine.gamespot.com/api/volume/4050-1537/",
        id: 1537,
        name: "Weird Mysteries",
        site_detail_url:
          "https://comicvine.gamespot.com/weird-mysteries/4050-1537/",
      },
    },
    {
      aliases: null,
      api_detail_url: "https://comicvine.gamespot.com/api/issue/4000-133/",
      cover_date: "1952-12-01",
      date_added: "2008-06-06 11:09:36",
      date_last_updated: "2012-10-06 09:35:08",
      deck: null,
      description:
        "<p>Volume 9 Issue 11</p><p>1. Airboy</p><p>2. The Twanging String</p><p>3. The Lead Soldiers of Haiti</p><p>4. Money of Yesterday</p><p>5. The Outlaw Champion</p><p>6. The Big Texas Spread</p><p>7. The Heap</p>",
      has_staff_review: false,
      id: 133,
      image: {
        icon_url:
          "https://comicvine1.cbsistatic.com/uploads/square_avatar/0/4/126-1069-133-1-airboy-comics.jpg",
        medium_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_medium/0/4/126-1069-133-1-airboy-comics.jpg",
        screen_url:
          "https://comicvine1.cbsistatic.com/uploads/screen_medium/0/4/126-1069-133-1-airboy-comics.jpg",
        screen_large_url:
          "https://comicvine1.cbsistatic.com/uploads/screen_kubrick/0/4/126-1069-133-1-airboy-comics.jpg",
        small_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/126-1069-133-1-airboy-comics.jpg",
        super_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_large/0/4/126-1069-133-1-airboy-comics.jpg",
        thumb_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_avatar/0/4/126-1069-133-1-airboy-comics.jpg",
        tiny_url:
          "https://comicvine1.cbsistatic.com/uploads/square_mini/0/4/126-1069-133-1-airboy-comics.jpg",
        original_url:
          "https://comicvine1.cbsistatic.com/uploads/original/0/4/126-1069-133-1-airboy-comics.jpg",
        image_tags: "All Images",
      },
      issue_number: "106",
      name: null,
      site_detail_url:
        "https://comicvine.gamespot.com/airboy-comics-106/4000-133/",
      store_date: null,
      volume: {
        api_detail_url: "https://comicvine.gamespot.com/api/volume/4050-1069/",
        id: 1069,
        name: "Airboy Comics",
        site_detail_url:
          "https://comicvine.gamespot.com/airboy-comics/4050-1069/",
      },
    },
    {
      aliases: null,
      api_detail_url: "https://comicvine.gamespot.com/api/issue/4000-134/",
      cover_date: "1952-12-01",
      date_added: "2008-06-06 11:09:51",
      date_last_updated: "2012-06-29 09:26:41",
      deck: null,
      description: null,
      has_staff_review: false,
      id: 134,
      image: {
        icon_url:
          "https://comicvine1.cbsistatic.com/uploads/square_avatar/0/4/127-1253-134-1-black-diamond-wester.jpg",
        medium_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_medium/0/4/127-1253-134-1-black-diamond-wester.jpg",
        screen_url:
          "https://comicvine1.cbsistatic.com/uploads/screen_medium/0/4/127-1253-134-1-black-diamond-wester.jpg",
        screen_large_url:
          "https://comicvine1.cbsistatic.com/uploads/screen_kubrick/0/4/127-1253-134-1-black-diamond-wester.jpg",
        small_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/127-1253-134-1-black-diamond-wester.jpg",
        super_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_large/0/4/127-1253-134-1-black-diamond-wester.jpg",
        thumb_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_avatar/0/4/127-1253-134-1-black-diamond-wester.jpg",
        tiny_url:
          "https://comicvine1.cbsistatic.com/uploads/square_mini/0/4/127-1253-134-1-black-diamond-wester.jpg",
        original_url:
          "https://comicvine1.cbsistatic.com/uploads/original/0/4/127-1253-134-1-black-diamond-wester.jpg",
        image_tags: "All Images",
      },
      issue_number: "41",
      name: null,
      site_detail_url:
        "https://comicvine.gamespot.com/black-diamond-western-41/4000-134/",
      store_date: null,
      volume: {
        api_detail_url: "https://comicvine.gamespot.com/api/volume/4050-1253/",
        id: 1253,
        name: "Black Diamond Western",
        site_detail_url:
          "https://comicvine.gamespot.com/black-diamond-western/4050-1253/",
      },
    },
    {
      aliases: null,
      api_detail_url: "https://comicvine.gamespot.com/api/issue/4000-135/",
      cover_date: "1952-12-01",
      date_added: "2008-06-06 11:09:30",
      date_last_updated: "2012-01-13 14:14:59",
      deck: null,
      description: null,
      has_staff_review: false,
      id: 135,
      image: {
        icon_url:
          "https://comicvine1.cbsistatic.com/uploads/square_avatar/0/4/128-942-135-1-boy-comics.jpg",
        medium_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_medium/0/4/128-942-135-1-boy-comics.jpg",
        screen_url:
          "https://comicvine1.cbsistatic.com/uploads/screen_medium/0/4/128-942-135-1-boy-comics.jpg",
        screen_large_url:
          "https://comicvine1.cbsistatic.com/uploads/screen_kubrick/0/4/128-942-135-1-boy-comics.jpg",
        small_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/128-942-135-1-boy-comics.jpg",
        super_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_large/0/4/128-942-135-1-boy-comics.jpg",
        thumb_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_avatar/0/4/128-942-135-1-boy-comics.jpg",
        tiny_url:
          "https://comicvine1.cbsistatic.com/uploads/square_mini/0/4/128-942-135-1-boy-comics.jpg",
        original_url:
          "https://comicvine1.cbsistatic.com/uploads/original/0/4/128-942-135-1-boy-comics.jpg",
        image_tags: "All Images",
      },
      issue_number: "84",
      name: null,
      site_detail_url: "https://comicvine.gamespot.com/boy-comics-84/4000-135/",
      store_date: null,
      volume: {
        api_detail_url: "https://comicvine.gamespot.com/api/volume/4050-942/",
        id: 942,
        name: "Boy Comics",
        site_detail_url: "https://comicvine.gamespot.com/boy-comics/4050-942/",
      },
    },
    {
      aliases: null,
      api_detail_url: "https://comicvine.gamespot.com/api/issue/4000-136/",
      cover_date: "1952-12-01",
      date_added: "2008-06-06 11:09:18",
      date_last_updated: "2008-06-06 11:32:54",
      deck: null,
      description: null,
      has_staff_review: false,
      id: 136,
      image: {
        icon_url:
          "https://comicvine1.cbsistatic.com/uploads/square_avatar/0/4/129-886-136-1-daredevil-comics.jpg",
        medium_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_medium/0/4/129-886-136-1-daredevil-comics.jpg",
        screen_url:
          "https://comicvine1.cbsistatic.com/uploads/screen_medium/0/4/129-886-136-1-daredevil-comics.jpg",
        screen_large_url:
          "https://comicvine1.cbsistatic.com/uploads/screen_kubrick/0/4/129-886-136-1-daredevil-comics.jpg",
        small_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/129-886-136-1-daredevil-comics.jpg",
        super_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_large/0/4/129-886-136-1-daredevil-comics.jpg",
        thumb_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_avatar/0/4/129-886-136-1-daredevil-comics.jpg",
        tiny_url:
          "https://comicvine1.cbsistatic.com/uploads/square_mini/0/4/129-886-136-1-daredevil-comics.jpg",
        original_url:
          "https://comicvine1.cbsistatic.com/uploads/original/0/4/129-886-136-1-daredevil-comics.jpg",
        image_tags: "All Images",
      },
      issue_number: "93",
      name: null,
      site_detail_url:
        "https://comicvine.gamespot.com/daredevil-comics-93/4000-136/",
      store_date: null,
      volume: {
        api_detail_url: "https://comicvine.gamespot.com/api/volume/4050-886/",
        id: 886,
        name: "Daredevil Comics",
        site_detail_url:
          "https://comicvine.gamespot.com/daredevil-comics/4050-886/",
      },
    },
    {
      aliases: null,
      api_detail_url: "https://comicvine.gamespot.com/api/issue/4000-137/",
      cover_date: "1952-12-01",
      date_added: "2008-06-06 11:10:07",
      date_last_updated: "2008-06-06 11:32:54",
      deck: null,
      description: null,
      has_staff_review: false,
      id: 137,
      image: {
        icon_url:
          "https://comicvine1.cbsistatic.com/uploads/square_avatar/0/4/130-1441-137-1-best-of-the-west.jpg",
        medium_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_medium/0/4/130-1441-137-1-best-of-the-west.jpg",
        screen_url:
          "https://comicvine1.cbsistatic.com/uploads/screen_medium/0/4/130-1441-137-1-best-of-the-west.jpg",
        screen_large_url:
          "https://comicvine1.cbsistatic.com/uploads/screen_kubrick/0/4/130-1441-137-1-best-of-the-west.jpg",
        small_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/130-1441-137-1-best-of-the-west.jpg",
        super_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_large/0/4/130-1441-137-1-best-of-the-west.jpg",
        thumb_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_avatar/0/4/130-1441-137-1-best-of-the-west.jpg",
        tiny_url:
          "https://comicvine1.cbsistatic.com/uploads/square_mini/0/4/130-1441-137-1-best-of-the-west.jpg",
        original_url:
          "https://comicvine1.cbsistatic.com/uploads/original/0/4/130-1441-137-1-best-of-the-west.jpg",
        image_tags: "All Images",
      },
      issue_number: "6",
      name: null,
      site_detail_url:
        "https://comicvine.gamespot.com/best-of-the-west-6/4000-137/",
      store_date: null,
      volume: {
        api_detail_url: "https://comicvine.gamespot.com/api/volume/4050-1441/",
        id: 1441,
        name: "Best of the West",
        site_detail_url:
          "https://comicvine.gamespot.com/best-of-the-west/4050-1441/",
      },
    },
    {
      aliases: null,
      api_detail_url: "https://comicvine.gamespot.com/api/issue/4000-140/",
      cover_date: "1952-12-31",
      date_added: "2008-06-06 11:10:16",
      date_last_updated: "2018-06-01 08:42:00",
      deck: null,
      description:
        "<p><em>Karma works in mysterious ways! Owners of an inn murder their guests in order to steal their money. This arrangement can't last forever though…</em></p><h2>Six Mysterious Stories in this Issue:</h2><ul><li>The Bewitched Bike</li><li>Death Waits Within</li><li>The Locked Door</li><li>Out of the Jungle</li><li>I'm Drowning</li><li>Hiding Place</li></ul>",
      has_staff_review: false,
      id: 140,
      image: {
        icon_url:
          "https://comicvine1.cbsistatic.com/uploads/square_avatar/0/4/133-1497-140-1-journey-into-mystery.jpg",
        medium_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_medium/0/4/133-1497-140-1-journey-into-mystery.jpg",
        screen_url:
          "https://comicvine1.cbsistatic.com/uploads/screen_medium/0/4/133-1497-140-1-journey-into-mystery.jpg",
        screen_large_url:
          "https://comicvine1.cbsistatic.com/uploads/screen_kubrick/0/4/133-1497-140-1-journey-into-mystery.jpg",
        small_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/133-1497-140-1-journey-into-mystery.jpg",
        super_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_large/0/4/133-1497-140-1-journey-into-mystery.jpg",
        thumb_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_avatar/0/4/133-1497-140-1-journey-into-mystery.jpg",
        tiny_url:
          "https://comicvine1.cbsistatic.com/uploads/square_mini/0/4/133-1497-140-1-journey-into-mystery.jpg",
        original_url:
          "https://comicvine1.cbsistatic.com/uploads/original/0/4/133-1497-140-1-journey-into-mystery.jpg",
        image_tags: "All Images",
      },
      issue_number: "4",
      name: "The Bewitched Bike!",
      site_detail_url:
        "https://comicvine.gamespot.com/journey-into-mystery-4-the-bewitched-bike/4000-140/",
      store_date: "1952-09-01",
      volume: {
        api_detail_url: "https://comicvine.gamespot.com/api/volume/4050-1497/",
        id: 1497,
        name: "Journey into Mystery",
        site_detail_url:
          "https://comicvine.gamespot.com/journey-into-mystery/4050-1497/",
      },
    },
    {
      aliases: null,
      api_detail_url: "https://comicvine.gamespot.com/api/issue/4000-142/",
      cover_date: "1952-12-01",
      date_added: "2008-06-06 11:10:01",
      date_last_updated: "2008-06-06 11:32:54",
      deck: null,
      description: null,
      has_staff_review: false,
      id: 142,
      image: {
        icon_url:
          "https://comicvine1.cbsistatic.com/uploads/square_avatar/0/4/135-1366-142-1-war-comics.jpg",
        medium_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_medium/0/4/135-1366-142-1-war-comics.jpg",
        screen_url:
          "https://comicvine1.cbsistatic.com/uploads/screen_medium/0/4/135-1366-142-1-war-comics.jpg",
        screen_large_url:
          "https://comicvine1.cbsistatic.com/uploads/screen_kubrick/0/4/135-1366-142-1-war-comics.jpg",
        small_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/135-1366-142-1-war-comics.jpg",
        super_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_large/0/4/135-1366-142-1-war-comics.jpg",
        thumb_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_avatar/0/4/135-1366-142-1-war-comics.jpg",
        tiny_url:
          "https://comicvine1.cbsistatic.com/uploads/square_mini/0/4/135-1366-142-1-war-comics.jpg",
        original_url:
          "https://comicvine1.cbsistatic.com/uploads/original/0/4/135-1366-142-1-war-comics.jpg",
        image_tags: "All Images",
      },
      issue_number: "14",
      name: null,
      site_detail_url: "https://comicvine.gamespot.com/war-comics-14/4000-142/",
      store_date: null,
      volume: {
        api_detail_url: "https://comicvine.gamespot.com/api/volume/4050-1366/",
        id: 1366,
        name: "War Comics",
        site_detail_url: "https://comicvine.gamespot.com/war-comics/4050-1366/",
      },
    },
    {
      aliases: null,
      api_detail_url: "https://comicvine.gamespot.com/api/issue/4000-143/",
      cover_date: "1952-12-01",
      date_added: "2008-06-06 11:09:46",
      date_last_updated: "2009-07-25 17:35:57",
      deck: null,
      description: "<br/>",
      has_staff_review: false,
      id: 143,
      image: {
        icon_url:
          "https://comicvine1.cbsistatic.com/uploads/square_avatar/0/4/136-1213-143-1-wild-western.jpg",
        medium_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_medium/0/4/136-1213-143-1-wild-western.jpg",
        screen_url:
          "https://comicvine1.cbsistatic.com/uploads/screen_medium/0/4/136-1213-143-1-wild-western.jpg",
        screen_large_url:
          "https://comicvine1.cbsistatic.com/uploads/screen_kubrick/0/4/136-1213-143-1-wild-western.jpg",
        small_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/136-1213-143-1-wild-western.jpg",
        super_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_large/0/4/136-1213-143-1-wild-western.jpg",
        thumb_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_avatar/0/4/136-1213-143-1-wild-western.jpg",
        tiny_url:
          "https://comicvine1.cbsistatic.com/uploads/square_mini/0/4/136-1213-143-1-wild-western.jpg",
        original_url:
          "https://comicvine1.cbsistatic.com/uploads/original/0/4/136-1213-143-1-wild-western.jpg",
        image_tags: "All Images",
      },
      issue_number: "25",
      name: null,
      site_detail_url:
        "https://comicvine.gamespot.com/wild-western-25/4000-143/",
      store_date: null,
      volume: {
        api_detail_url: "https://comicvine.gamespot.com/api/volume/4050-1213/",
        id: 1213,
        name: "Wild Western",
        site_detail_url:
          "https://comicvine.gamespot.com/wild-western/4050-1213/",
      },
    },
    {
      aliases: null,
      api_detail_url: "https://comicvine.gamespot.com/api/issue/4000-145/",
      cover_date: "1952-12-01",
      date_added: "2008-06-06 11:09:32",
      date_last_updated: "2013-08-08 10:30:02",
      deck: null,
      description: null,
      has_staff_review: false,
      id: 145,
      image: {
        icon_url:
          "https://comicvine1.cbsistatic.com/uploads/square_avatar/0/4/138-989-145-1-blackhawk.jpg",
        medium_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_medium/0/4/138-989-145-1-blackhawk.jpg",
        screen_url:
          "https://comicvine1.cbsistatic.com/uploads/screen_medium/0/4/138-989-145-1-blackhawk.jpg",
        screen_large_url:
          "https://comicvine1.cbsistatic.com/uploads/screen_kubrick/0/4/138-989-145-1-blackhawk.jpg",
        small_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/138-989-145-1-blackhawk.jpg",
        super_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_large/0/4/138-989-145-1-blackhawk.jpg",
        thumb_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_avatar/0/4/138-989-145-1-blackhawk.jpg",
        tiny_url:
          "https://comicvine1.cbsistatic.com/uploads/square_mini/0/4/138-989-145-1-blackhawk.jpg",
        original_url:
          "https://comicvine1.cbsistatic.com/uploads/original/0/4/138-989-145-1-blackhawk.jpg",
        image_tags: "All Images",
      },
      issue_number: "59",
      name: "Beachhead on Asteroid X",
      site_detail_url:
        "https://comicvine.gamespot.com/blackhawk-59-beachhead-on-asteroid-x/4000-145/",
      store_date: null,
      volume: {
        api_detail_url: "https://comicvine.gamespot.com/api/volume/4050-1819/",
        id: 1819,
        name: "Blackhawk",
        site_detail_url: "https://comicvine.gamespot.com/blackhawk/4050-1819/",
      },
    },
    {
      aliases: null,
      api_detail_url: "https://comicvine.gamespot.com/api/issue/4000-147/",
      cover_date: "1952-12-31",
      date_added: "2008-06-06 11:10:02",
      date_last_updated: "2017-02-20 11:09:54",
      deck: null,
      description:
        "<p><i><b>The Ghostly Guardians</b></i></p><p><i>Across the battle scared hills of Korea they came, marching in a death-like unison which sent chills of terror through those who witnessed the terrible manifestation. What were these weird spectral creatures that haunted the battle-fields by night? Many wondered, but it remained for a wounded G.I. to solve the mystery of The Ghostly Guardians.</i></p><p><i><b>The Weird Mr. &amp; Mrs. Murder</b></i></p><p><i>You probably heard of husband and wife teams in radio, sports, and in the circus, but have you ever heard of a Mr. and Mrs. Murder? If not hold on to your hats and read about the bloody exploits of Ann and Tom Duncan....</i></p><p><i><b>Death, Danger, And Deceit: A World War II Story</b></i></p><p><i>Five planes fail to return from a routine patrol flight. Then, Blue Bolt takes off and follows the trail of the bullets to the lair of our hidden enemies.</i></p><p><i>But, death, danger and deceit play this game on the side of the Axis.</i></p><p><i><b>Dead Man's Mistake (Text Only Story)</b></i></p><p><i><b>Valley of the Demon Monsters</b></i></p><p><i>Once again Jungle Jo is called upon to protect his Tangane people from an invader... an invader that has never before been seen... a monster with the strength of ten elephants, large as the tallest tree and with a skin that shatters the jungle monarch's steel as if it were wood! Follow Jungle Jo as he enters for the first time the dreaded Forbidden Valley</i></p>",
      has_staff_review: false,
      id: 147,
      image: {
        icon_url:
          "https://comicvine1.cbsistatic.com/uploads/square_avatar/0/4/140-1399-147-1-blue-bolt-weird-tale.jpg",
        medium_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_medium/0/4/140-1399-147-1-blue-bolt-weird-tale.jpg",
        screen_url:
          "https://comicvine1.cbsistatic.com/uploads/screen_medium/0/4/140-1399-147-1-blue-bolt-weird-tale.jpg",
        screen_large_url:
          "https://comicvine1.cbsistatic.com/uploads/screen_kubrick/0/4/140-1399-147-1-blue-bolt-weird-tale.jpg",
        small_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/140-1399-147-1-blue-bolt-weird-tale.jpg",
        super_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_large/0/4/140-1399-147-1-blue-bolt-weird-tale.jpg",
        thumb_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_avatar/0/4/140-1399-147-1-blue-bolt-weird-tale.jpg",
        tiny_url:
          "https://comicvine1.cbsistatic.com/uploads/square_mini/0/4/140-1399-147-1-blue-bolt-weird-tale.jpg",
        original_url:
          "https://comicvine1.cbsistatic.com/uploads/original/0/4/140-1399-147-1-blue-bolt-weird-tale.jpg",
        image_tags: "All Images",
      },
      issue_number: "116",
      name: null,
      site_detail_url:
        "https://comicvine.gamespot.com/blue-bolt-weird-tales-of-terror-116/4000-147/",
      store_date: null,
      volume: {
        api_detail_url: "https://comicvine.gamespot.com/api/volume/4050-1399/",
        id: 1399,
        name: "Blue Bolt Weird Tales of Terror",
        site_detail_url:
          "https://comicvine.gamespot.com/blue-bolt-weird-tales-of-terror/4050-1399/",
      },
    },
    {
      aliases: null,
      api_detail_url: "https://comicvine.gamespot.com/api/issue/4000-148/",
      cover_date: "1952-12-01",
      date_added: "2008-06-06 11:10:20",
      date_last_updated: "2008-06-06 11:32:55",
      deck: null,
      description: null,
      has_staff_review: false,
      id: 148,
      image: {
        icon_url:
          "https://comicvine1.cbsistatic.com/uploads/square_avatar/0/4/141-1522-148-1-fighting-leatherneck.jpg",
        medium_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_medium/0/4/141-1522-148-1-fighting-leatherneck.jpg",
        screen_url:
          "https://comicvine1.cbsistatic.com/uploads/screen_medium/0/4/141-1522-148-1-fighting-leatherneck.jpg",
        screen_large_url:
          "https://comicvine1.cbsistatic.com/uploads/screen_kubrick/0/4/141-1522-148-1-fighting-leatherneck.jpg",
        small_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/141-1522-148-1-fighting-leatherneck.jpg",
        super_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_large/0/4/141-1522-148-1-fighting-leatherneck.jpg",
        thumb_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_avatar/0/4/141-1522-148-1-fighting-leatherneck.jpg",
        tiny_url:
          "https://comicvine1.cbsistatic.com/uploads/square_mini/0/4/141-1522-148-1-fighting-leatherneck.jpg",
        original_url:
          "https://comicvine1.cbsistatic.com/uploads/original/0/4/141-1522-148-1-fighting-leatherneck.jpg",
        image_tags: "All Images",
      },
      issue_number: "6",
      name: null,
      site_detail_url:
        "https://comicvine.gamespot.com/fighting-leathernecks-6/4000-148/",
      store_date: null,
      volume: {
        api_detail_url: "https://comicvine.gamespot.com/api/volume/4050-1522/",
        id: 1522,
        name: "Fighting Leathernecks",
        site_detail_url:
          "https://comicvine.gamespot.com/fighting-leathernecks/4050-1522/",
      },
    },
    {
      aliases: null,
      api_detail_url: "https://comicvine.gamespot.com/api/issue/4000-149/",
      cover_date: "1952-12-01",
      date_added: "2008-06-06 11:10:09",
      date_last_updated: "2008-06-06 11:32:55",
      deck: null,
      description: null,
      has_staff_review: false,
      id: 149,
      image: {
        icon_url:
          "https://comicvine1.cbsistatic.com/uploads/square_avatar/0/4/142-1456-149-1-monty-hall-of-the-u-.jpg",
        medium_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_medium/0/4/142-1456-149-1-monty-hall-of-the-u-.jpg",
        screen_url:
          "https://comicvine1.cbsistatic.com/uploads/screen_medium/0/4/142-1456-149-1-monty-hall-of-the-u-.jpg",
        screen_large_url:
          "https://comicvine1.cbsistatic.com/uploads/screen_kubrick/0/4/142-1456-149-1-monty-hall-of-the-u-.jpg",
        small_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/142-1456-149-1-monty-hall-of-the-u-.jpg",
        super_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_large/0/4/142-1456-149-1-monty-hall-of-the-u-.jpg",
        thumb_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_avatar/0/4/142-1456-149-1-monty-hall-of-the-u-.jpg",
        tiny_url:
          "https://comicvine1.cbsistatic.com/uploads/square_mini/0/4/142-1456-149-1-monty-hall-of-the-u-.jpg",
        original_url:
          "https://comicvine1.cbsistatic.com/uploads/original/0/4/142-1456-149-1-monty-hall-of-the-u-.jpg",
        image_tags: "All Images",
      },
      issue_number: "9",
      name: null,
      site_detail_url:
        "https://comicvine.gamespot.com/monty-hall-of-the-us-marines-9/4000-149/",
      store_date: null,
      volume: {
        api_detail_url: "https://comicvine.gamespot.com/api/volume/4050-1456/",
        id: 1456,
        name: "Monty Hall of the U.S. Marines",
        site_detail_url:
          "https://comicvine.gamespot.com/monty-hall-of-the-us-marines/4050-1456/",
      },
    },
    {
      aliases: null,
      api_detail_url: "https://comicvine.gamespot.com/api/issue/4000-150/",
      cover_date: "1952-12-01",
      date_added: "2008-06-06 11:10:20",
      date_last_updated: "2018-09-10 20:47:35",
      deck: null,
      description: null,
      has_staff_review: false,
      id: 150,
      image: {
        icon_url:
          "https://comicvine1.cbsistatic.com/uploads/square_avatar/0/4/143-1526-150-1-chilling-tales.jpg",
        medium_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_medium/0/4/143-1526-150-1-chilling-tales.jpg",
        screen_url:
          "https://comicvine1.cbsistatic.com/uploads/screen_medium/0/4/143-1526-150-1-chilling-tales.jpg",
        screen_large_url:
          "https://comicvine1.cbsistatic.com/uploads/screen_kubrick/0/4/143-1526-150-1-chilling-tales.jpg",
        small_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/143-1526-150-1-chilling-tales.jpg",
        super_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_large/0/4/143-1526-150-1-chilling-tales.jpg",
        thumb_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_avatar/0/4/143-1526-150-1-chilling-tales.jpg",
        tiny_url:
          "https://comicvine1.cbsistatic.com/uploads/square_mini/0/4/143-1526-150-1-chilling-tales.jpg",
        original_url:
          "https://comicvine1.cbsistatic.com/uploads/original/0/4/143-1526-150-1-chilling-tales.jpg",
        image_tags: "All Images",
      },
      issue_number: "13",
      name: null,
      site_detail_url:
        "https://comicvine.gamespot.com/chilling-tales-13/4000-150/",
      store_date: null,
      volume: {
        api_detail_url: "https://comicvine.gamespot.com/api/volume/4050-1526/",
        id: 1526,
        name: "Chilling Tales",
        site_detail_url:
          "https://comicvine.gamespot.com/chilling-tales/4050-1526/",
      },
    },
    {
      aliases: null,
      api_detail_url: "https://comicvine.gamespot.com/api/issue/4000-152/",
      cover_date: "1952-12-01",
      date_added: "2008-06-06 11:10:19",
      date_last_updated: "2013-02-10 16:32:13",
      deck: null,
      description: "<br/>",
      has_staff_review: false,
      id: 152,
      image: {
        icon_url:
          "https://comicvine1.cbsistatic.com/uploads/square_avatar/0/4/144-1503-152-1-uncanny-tales.jpg",
        medium_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_medium/0/4/144-1503-152-1-uncanny-tales.jpg",
        screen_url:
          "https://comicvine1.cbsistatic.com/uploads/screen_medium/0/4/144-1503-152-1-uncanny-tales.jpg",
        screen_large_url:
          "https://comicvine1.cbsistatic.com/uploads/screen_kubrick/0/4/144-1503-152-1-uncanny-tales.jpg",
        small_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/144-1503-152-1-uncanny-tales.jpg",
        super_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_large/0/4/144-1503-152-1-uncanny-tales.jpg",
        thumb_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_avatar/0/4/144-1503-152-1-uncanny-tales.jpg",
        tiny_url:
          "https://comicvine1.cbsistatic.com/uploads/square_mini/0/4/144-1503-152-1-uncanny-tales.jpg",
        original_url:
          "https://comicvine1.cbsistatic.com/uploads/original/0/4/144-1503-152-1-uncanny-tales.jpg",
        image_tags: "All Images",
      },
      issue_number: "4",
      name: null,
      site_detail_url:
        "https://comicvine.gamespot.com/uncanny-tales-4/4000-152/",
      store_date: null,
      volume: {
        api_detail_url: "https://comicvine.gamespot.com/api/volume/4050-1503/",
        id: 1503,
        name: "Uncanny Tales",
        site_detail_url:
          "https://comicvine.gamespot.com/uncanny-tales/4050-1503/",
      },
    },
    {
      aliases: null,
      api_detail_url: "https://comicvine.gamespot.com/api/issue/4000-153/",
      cover_date: "1952-11-01",
      date_added: "2008-06-06 11:09:18",
      date_last_updated: "2020-03-01 07:25:56",
      deck: null,
      description:
        "<p>1. Nancy <br/> <br/>2. Captain and the Kids <br/> <br/>3. Casey Ruggles (by Warren Tufts)</p>",
      has_staff_review: false,
      id: 153,
      image: {
        icon_url:
          "https://comicvine1.cbsistatic.com/uploads/square_avatar/0/4/145-874-153-1-sparkler-comics.jpg",
        medium_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_medium/0/4/145-874-153-1-sparkler-comics.jpg",
        screen_url:
          "https://comicvine1.cbsistatic.com/uploads/screen_medium/0/4/145-874-153-1-sparkler-comics.jpg",
        screen_large_url:
          "https://comicvine1.cbsistatic.com/uploads/screen_kubrick/0/4/145-874-153-1-sparkler-comics.jpg",
        small_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/145-874-153-1-sparkler-comics.jpg",
        super_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_large/0/4/145-874-153-1-sparkler-comics.jpg",
        thumb_url:
          "https://comicvine1.cbsistatic.com/uploads/scale_avatar/0/4/145-874-153-1-sparkler-comics.jpg",
        tiny_url:
          "https://comicvine1.cbsistatic.com/uploads/square_mini/0/4/145-874-153-1-sparkler-comics.jpg",
        original_url:
          "https://comicvine1.cbsistatic.com/uploads/original/0/4/145-874-153-1-sparkler-comics.jpg",
        image_tags: "All Images",
      },
      issue_number: "108",
      name: null,
      site_detail_url:
        "https://comicvine.gamespot.com/sparkler-comics-108/4000-153/",
      store_date: null,
      volume: {
        api_detail_url: "https://comicvine.gamespot.com/api/volume/4050-874/",
        id: 874,
        name: "Sparkler Comics",
        site_detail_url:
          "https://comicvine.gamespot.com/sparkler-comics/4050-874/",
      },
    },
  ],
  version: "1.0",
};
