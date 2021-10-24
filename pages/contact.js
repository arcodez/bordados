import { Contact } from "../components/Contact"
import { Layout } from "../components/Layout"
import Head from "next/head";

const contact = () => (
    <Layout>
        <Head>
            <title>Contact</title>
        </Head>
        <Contact />
    </Layout>
)

export default contact