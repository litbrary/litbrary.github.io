import React, { useState, useEffect } from 'react';
import './homepage.scss';
import CardGenre from '../../components/cardgenre';
import {genre} from './constants'
import axios from 'axios';
import CarouselHeader from '../../components/carouselheader';
import CarouselBody from '../../components/carouselbody';
import Loading from '../../components/loading';

export default function HomePage() {  
    const baseURL1 = 'https://litbrary.pythonanywhere.com/recent-release/';
    const baseURL2 = 'https://litbrary.pythonanywhere.com/highlight/';
    const [data, setData] = useState({book:[], highlight:[]});
    const [reload, setReload] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
          const respBook = await axios(baseURL1);
          const respHighlight = await axios(baseURL2);
          setData({ book: respBook.data, highlight: respHighlight.data })
        };
    
        fetchData().then(() => setReload(false));
      },[baseURL1, baseURL2]);

    if(reload){
        return <Loading/>
    }

    if (!data.book || !data.highlight) return null;
    return (
        <div className="homepage">
            <div className="homepage__carousel">
                <CarouselHeader/>
            </div>
            <div className="homepage__popular">
                <h1>Most Popular</h1>
                <div className="homepage__popular__cardbook">
                    <CarouselBody data={data.book.slice(0, 23)}/>
                </div>               
            </div>
            <div className="homepage__genres">
                <h1>Genres</h1>
                <div className="homepage__genres__cardgenre">
                    {genre.map((item) => (
                        <CardGenre key={item.id} id={item.id} title={item.title} symbol={item.symbol}/>
                    ))}
                </div>              
            </div>
            <div className="homepage__foryou">
                <h1>For You</h1>
                <div className="homepage__popular__cardbook">
                    <CarouselBody data={data.book.slice(0, 23)}/>
                </div>     
            </div>
            <div className="homepage__findus">
                <div className="homepage__findus__text">
                    <h1>Find Us</h1>
                    <h2>National Library Singapore</h2>
                    <h3>100 Victoria St, Singapore 188064</h3>
                </div>
                <div className="homepage__findus__map">
                <iframe title="map" id="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.795176264013!2d103.85211941496983!3d1.2975937621020446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da19a524aca129%3A0xf23dddaa8432afc5!2sNational%20Library%20%2F%20Lee%20Kong%20Chian%20Reference%20Library!5e0!3m2!1sen!2sid!4v1671553103877!5m2!1sen!2sid" width="600" height="600" border="none" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"/>
                </div>     
            </div>
        </div>
    );
}