import Link from 'next/link'; 
import Layout from '../components/layout';

export default function Journal(){
    return(
        <Layout>
            <h1>Runner Journal</h1>
            <h2>Coming soon!</h2>
            <h3>
                <Link href="/">Back to homepage</Link>
            </h3>
        </Layout>
    ); 
}