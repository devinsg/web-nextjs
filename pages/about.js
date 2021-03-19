import {useEffect} from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css'
import Footer from '../components/footer';

const About = function () {
    useEffect(() => {
        console.log('- useEffect - about .....');
        if(utag) {
            utag.view({
            "tealium_event": "product_view",
            "page_type"    : "product_quick_view",
            "page_name"    : "about_us",
            "product_id"   : ["12345"],
            "product_name" : ["Lucky Shirt"]
            });
        }
        // When page loads
        //trackPageLoad({a: 'a'}); // this will call utag.view(myDataLayer)
        // When button is clicked
        //trackEvent({b: 'b'}); // this will call utag.link(myDataLayer)
    }, []);

    return <div className={styles.container}>
        <Head>
            <title>About Us</title>
            <link rel="icon" href="/favicon.ico" />
            <script src="//tags.tiqcdn.com/utag/hsbc/hk-rbwm-gsp/dev/utag.sync.js" type="text/javascript" async=""></script>            
        </Head>
        <main className={styles.main}>
            <script src="/static/tealium/utag_data.js" type="text/javascript" async=""></script>
            <script src="/static/tealium/utag.js" type="text/javascript" async=""></script>
            <h1 className="title">
                <a href="/index">Back to home</a>
            </h1>
            <div>About Us</div>
        </main>
        <Footer />
    </div>
};
  
export default About;