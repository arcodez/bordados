import { Layout } from "../components/Layout";
import Head from "next/head";
import { ExampleSection } from "../components/Examples/ExampleSection";

let serigrafia = [
  {
    imgUrl:
      "https://www.elinvernaderocreativo.com/wp-content/uploads/2015/12/qu%C3%A9-es-la-serigraf%C3%ADa.png",
    name: "Serigrafia",
  },
  {
    imgUrl:
      "https://www.elinvernaderocreativo.com/wp-content/uploads/2015/12/qu%C3%A9-es-la-serigraf%C3%ADa.png",
    name: "Serigrafia",
  },
  {
    imgUrl:
      "https://www.elinvernaderocreativo.com/wp-content/uploads/2015/12/qu%C3%A9-es-la-serigraf%C3%ADa.png",
    name: "Serigrafia",
  },
  {
    imgUrl:
      "https://www.elinvernaderocreativo.com/wp-content/uploads/2015/12/qu%C3%A9-es-la-serigraf%C3%ADa.png",
    name: "Serigrafia",
  },
];
let estampados = [
  {
    imgUrl:
      "https://i.pinimg.com/originals/de/9a/72/de9a72f1941bf244715e6b03c8677110.jpg",
    name: " Estampados",
  },
  {
    imgUrl:
      "https://i.pinimg.com/originals/de/9a/72/de9a72f1941bf244715e6b03c8677110.jpg",
    name: " Estampados",
  },
  {
    imgUrl:
      "https://i.pinimg.com/originals/de/9a/72/de9a72f1941bf244715e6b03c8677110.jpg",
    name: " Estampados",
  },
  {
    imgUrl:
      "https://i.pinimg.com/originals/de/9a/72/de9a72f1941bf244715e6b03c8677110.jpg",
    name: " Estampados",
  },
  {
    imgUrl:
      "https://i.pinimg.com/originals/de/9a/72/de9a72f1941bf244715e6b03c8677110.jpg",
    name: " Estampados",
  },
];
let sublimaciones = [
  {
    imgUrl:
      "https://le-cdn.website-editor.net/8911c16c1afe4186bbf4ab830aa3e7cb/dms3rep/multi/opt/Sublipalm...-960w.JPG",
    name: "Sublimacion",
  },
  {
    imgUrl:
      "https://le-cdn.website-editor.net/8911c16c1afe4186bbf4ab830aa3e7cb/dms3rep/multi/opt/Sublipalm...-960w.JPG",
    name: "Sublimacion",
  },
  {
    imgUrl:
      "https://le-cdn.website-editor.net/8911c16c1afe4186bbf4ab830aa3e7cb/dms3rep/multi/opt/Sublipalm...-960w.JPG",
    name: "Sublimacion",
  },
  {
    imgUrl:
      "https://le-cdn.website-editor.net/8911c16c1afe4186bbf4ab830aa3e7cb/dms3rep/multi/opt/Sublipalm...-960w.JPG",
    name: "Sublimacion",
  },
  {
    imgUrl:
      "https://le-cdn.website-editor.net/8911c16c1afe4186bbf4ab830aa3e7cb/dms3rep/multi/opt/Sublipalm...-960w.JPG",
    name: "Sublimacion",
  },
];

export default function Examples() {
  return (
    <Layout>
      <Head>
        <title>Ejemplos</title>
      </Head>

      <ExampleSection />
      <ExampleSection
        name="serigrafia"
        desc="La que usa Como una Caja de Pintura"
        card_data={serigrafia}
      />
      <ExampleSection
        name="estampado"
        desc="La que se hace con Pintura"
        card_data={estampados}
      />

      <ExampleSection
        name="sublimacion"
        desc="La mas perrona de Todas, se hace con Planchas de Calor"
        card_data={sublimaciones}
      />
    </Layout>
  );
}
