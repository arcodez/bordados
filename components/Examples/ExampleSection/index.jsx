import { images } from "../../../pages/gallery";
import { ExampleCard } from "../ExampleCard/index,";

export function ExampleSection({
  name = "bordados",
  desc = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni dolore reiciendis corrupti cupiditate ullam nemo. Ducimus dignissimos omnis eaque ullam.",
  card_data = [
    {
      imgUrl:
        "https://images.unsplash.com/photo-1631037513265-ddd7d9a09d56?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=435&q=80g",
      name: " Bordados",
    },
    {
      imgUrl:
        "https://scontent-mia3-1.xx.fbcdn.net/v/t1.6435-9/37809880_426316567873119_5346126465425473536_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=730e14&_nc_ohc=QCz_4h6xW0QAX_le-mL&_nc_ht=scontent-mia3-1.xx&oh=9fc417ed254fc0e61e8d713ff15bbf17&oe=618C516Ag",
      name: " Bordados",
    },
    {
      imgUrl:
        "https://i.pinimg.com/originals/ed/c2/e7/edc2e7009ae4611a008370e997340633.jpg",
      name: " Bordados",
    },
    {
      imgUrl:
        "https://media.vogue.es/photos/5ede239b9d456c839ee48476/2:3/w_2560%2Cc_limit/IMG_5550.JPG",
      name: " Bordados",
    },
    {
      imgUrl:
        "http://www.cursosgratisenlinea.com/wp-content/uploads/2019/12/5dda0b6c0b0020f8cb115bacd31fc238.jpg",
      name: " Bordados",
    },
    {
      imgUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS-DEhYgjjNtrLwd0v2Kl4fqB6WUcQI152XA&usqp=CAU",
      name: " Bordados",
    },
    {
      imgUrl:
        "https://static1.elcorreo.com/www/multimedia/202011/16/media/cortadas/825dc376-9dba-480b-8aba-a5161b3e29e2-k3ZH-U120718733961HVH-624x385@El%20Correo-ElCorreo.jpg",
      name: " Bordados",
    },
    {
      imgUrl:
        "https://i.pinimg.com/originals/ed/c2/e7/edc2e7009ae4611a008370e997340633.jpg",
      name: " Bordados",
    },
    {
      imgUrl:
        "https://mymodernmet.com/wp/wp-content/uploads/2019/08/embroidered-pins-irem-yazici-1.jpg",
      name: " Bordados",
    },
    {
      imgUrl:
        "https://image.made-in-china.com/202f0j10uZLTKgIHupRz/Wholesale-High-Quality-Food-Custom-Logo-Brand-Embroidered-Patches.jpg",
      name: " Bordados",
    },
    {
      imgUrl:
        "https://video-images.vice.com/_uncategorized/1533143960132-bjork-collaborator-james-merrys.jpeg",
      name: " Bordados",
    },
    {
      imgUrl:
        "https://i.pinimg.com/originals/86/46/6e/86466e31b351c2a385786ea64cfa565d.jpg",
      name: " Bordados",
    },
    {
      imgUrl: "https://i.ytimg.com/vi/PJ_pOrmKYqM/maxresdefault.jpg",
      name: " Bordados",
    },
    {
      imgUrl:
        "https://i.pinimg.com/originals/26/98/27/2698271929040667b49dfb5b98043883.jpg",
      name: " Bordados",
    },
    {
      imgUrl:
        "https://img.elo7.com.br/product/original/203C3C3/patch-bordado-super-herois-marvel-termo-colante-8-5cm.jpg",
      name: " Bordados",
    },
    {
      imgUrl:
        "https://i.pinimg.com/originals/1d/de/b7/1ddeb749128d9fd87f69df62d1a2d4c5.jpg",
      name: " Bordados",
    },
    {
      imgUrl:
        "https://impactcreativos.com/wp-content/uploads/2019/10/EFDE02AF-61F4-4145-9FA4-DA63D8D40D02.jpeg",
      name: " Bordados",
    },
    {
      imgUrl:
        "https://http2.mlstatic.com/D_NQ_NP_914719-MLA46321672061_062021-O.jpg",
      name: " Bordados",
    },
  ],
}) {
  return (
    <div className="gallery">
      {card_data.map((image, index) => (
        <ExampleCard key={index} {...image} />
      ))}

      <style jsx>{`
        .gallery {
          width: 90%;
          margin: 10px auto;
          columns: 5 250px;
          column-gap: 10px;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
}
