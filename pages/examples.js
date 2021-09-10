import { Bordados } from "../components/Examples/Bordados";
import { Estampados } from "../components/Examples/Estampados";
import { Serigrafia } from "../components/Examples/Serigrafia";
import { Sublimacion } from "../components/Examples/Sublimacion";
import { Layout } from "../components/Layout";

export default function Examples() {
    return (
        <Layout>
            <Estampados />
            <Bordados />
            <Sublimacion />
            <Serigrafia />
        </Layout>
    )
}