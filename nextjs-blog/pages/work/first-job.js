import Link from 'next/link'; 
import Layout from '../components/layout';

export default function FirstJob(){
    return(
        <Layout>
            <h1>First Job</h1>
            <h2>
                <Link href="/">Back to homepage</Link>
            </h2>
        </Layout>
    ); 
}