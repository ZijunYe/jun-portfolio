import Link from 'next/link'; 
import Layout from '../components/layout';

export default function ProjectMenu(){
    return(
        <Layout>
            <h1>Project Menu</h1>
            <h2>
                <Link href="/">Back to homepage</Link>
            </h2>
        </Layout>
    ); 
}