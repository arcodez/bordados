import { Faq } from "../components/Faq";
import { Layout } from "../components/Layout";
import Head from "next/head";

const faq = () => {
    return (
        <Layout>
            <Head>
                <title>
                    Preguntas frecuentes
                </title>
            </Head>
            <Faq />
        </Layout>
    )
}

export default faq