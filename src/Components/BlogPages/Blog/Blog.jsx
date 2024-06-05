import Banner from '../../Banner/Banner';
import Section from '../Section/Section';
import { Helmet } from 'react-helmet';



export default function BlogMain() {


    return (
        <>
        <Helmet>
        <title>Blogs Page</title>
        <meta
        name="Blog page"
        content="This is my Blog page"
         />

        </Helmet>
        <Banner title="Welcome To Our Blog Pages"
        image="Image/Blog1.jpg"/>
        <Section/>


           
        </>
    );
}
