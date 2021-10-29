import { Layout } from "../../Layout";
import Head from "next/head";

export const About = () => {
    return (
        <Layout>
            <Head>
                <title>Acerca de Nosotros</title>
            </Head>

            <div className="about container">
                <div className="about_image">
                    <img src="https://mymodernmet.com/wp/wp-content/uploads/2018/12/us-states-embroidery-lemon-made-shop-7.jpg" alt="" />
                </div>

                <div className="about_text">
                    <div className="borded_box">
                        <h1 className="about_title">About</h1>
                    </div>
                    <div className="about_info">

                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias ullam explicabo corrupti dignissimos doloremque esse, fugiat unde cumque nesciunt eaque repellendus, magnam, deserunt est animi voluptas maiores sed ab accusantium possimus maxime tempora sunt repudiandae minus ad? Quos ratione repellat doloremque nam impedit quaerat ipsa labore corporis, odit, repellendus cupiditate nesciunt quae temporibus quia earum? Eum pariatur, sequi laboriosam est odio aperiam architecto soluta odit provident quo, dolorem, ipsum dignissimos impedit mollitia rem labore. Amet dolore, saepe, libero ad laudantium, voluptatum exercitationem labore consequatur voluptas necessitatibus neque assumenda eius? Laudantium quis at sequi asperiores aliquid necessitatibus perferendis dignissimos esse quaerat?
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias ullam explicabo corrupti dignissimos doloremque esse, fugiat unde cumque nesciunt eaque repellendus, magnam, deserunt est animi voluptas maiores sed ab accusantium possimus maxime tempora sunt repudiandae minus ad? Quos ratione repellat doloremque nam impedit quaerat ipsa labore corporis, odit, repellendus cupiditate nesciunt quae temporibus quia earum? Eum pariatur, sequi laboriosam est odio aperiam architecto soluta odit provident quo, dolorem, ipsum dignissimos impedit mollitia rem labore. Amet dolore, saepe, libero ad laudantium, voluptatum exercitationem labore consequatur voluptas necessitatibus neque assumenda eius? Laudantium quis at sequi asperiores aliquid necessitatibus perferendis dignissimos esse quaerat?
                        </p>
                    </div>
                </div>

                <style jsx>{`
                .about {
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                    margin: 20px auto;
                    gap: 30px;
                }

                .about_image {
                    /* max-width: 500px; */
                    width: 100%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    outline: 3px solid white;
                    outline-offset: -10px;
                  
                }   
                .about_image img {
                    width: 100%;
                    border-radius: 10px;
                }

                .about_text {
                    margin-top: 70px;
                }
                .borded_box {
                    border: 10px solid var(--azul);
                }
                
                .about_title {
                    text-align: center;

                }
                .about_info {
                    text-align: justify;
                }
        `}</style>
            </div>
        </Layout>
    )
}
