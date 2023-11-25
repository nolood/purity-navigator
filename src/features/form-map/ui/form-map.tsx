import { Map, SearchControl, YMaps } from "@pbe/react-yandex-maps";

const FormMap = () => {
  return (
    <div className="w-full">
      <YMaps
        query={{
          lang: "ru_RU",
        }}
      >
        <Map
          width={"100%"}
          height={600}
          defaultState={{ center: [55.751574, 37.573856], zoom: 9 }}
        >
          <SearchControl options={{ float: "right", kind: "street" }} />
        </Map>
      </YMaps>
    </div>
  );
};

export default FormMap;
