import Walls from "./walls";
import axios from "axios";

export default function Home({ allData }) {
  return (
    <div>
      <main>
        <Walls walls={allData} />
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  const res = await axios.get(
    "https://www.reddit.com/r/Analog/.json?&limit=30&raw_json=1"
  );
  const data = await res.data;
  var allData = []; //making array for listing 
  data.data.children.map((item) => {
    try {
      const parent_img = item.data.preview.images[0].resolutions[3].url;
      allData.push({
        id: item.data.id,
        title: item.data.title,
        url: item.data.url,
        author: item.data.author,
        small_img: parent_img,
        permalink: item.data.permalink,
      });
    } catch (e) {
      console.log(e);
    }
  });

  return {
    props: {
      allData,
    },
  };
}