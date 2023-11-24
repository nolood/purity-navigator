import { Map, YMaps } from "@pbe/react-yandex-maps";

const MainMap = () => {
  return (
    <section className="section">
      <div className="container">
        <h1 className="title">Main Map</h1>
        <YMaps>
          <Map defaultState={{ center: [55.751574, 37.573856], zoom: 9 }} />
        </YMaps>
      </div>
    </section>
  );
};

export default MainMap;
