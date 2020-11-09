import React, {useState , useEffect} from 'react';
import Head from 'next/head';

import IndexHeader from '../components/Indexheader';
import IndexLogo from '../components/IndexLogo';
import IndexSearch from '../components/IndexSearch';
import CategoryList from '../components/CategoryList';


const categoryData = [
    {
        title: "note"
    },
    {
        title: "calc"
    },
    {
        title: "account"
    },
    {
        title: "todo"
    },
    {
        title: "맛집"
    },
    {
        title: "취미"
    },
    {
        title: "운동"
    },
    {
        title: "쇼핑"
    },
];

const Home = () => {

    const [width, setWidth] = useState('600px');
    // resize width
    useEffect(() => {
        function handleResize() {
            // console.log('resized to: ', window.innerWidth, 'x', window.innerHeight);
            if(window.innerWidth > 760){
                setWidth('600px');
            }else if(window.innerWidth < 760 && window.innerWidth > 576){
                setWidth('450px');
            }else {
                setWidth('340px');
            }
            // console.log(categoryWidth)
        }
        window.addEventListener('resize', handleResize);
    });

    return(
        <div>
            <Head>
                <meta charSet="utf-8"/>
                <title>Home | NodeMap</title>
            </Head>
            <IndexHeader />
            <IndexLogo />
            <IndexSearch width={width} />
            <CategoryList width={width} data={categoryData}/>
        </div>)
    };

export default Home;