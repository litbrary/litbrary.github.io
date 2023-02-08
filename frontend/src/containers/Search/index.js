import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSearchParams } from 'react-router-dom';
import './search.scss';
import CarouselBody from '../../components/carouselbody';
import Loading from '../../components/loading';

export default function Search() {  
    const [searchParams] = useSearchParams();
    const [book, setBook] = useState(null);
    const [reload, setReload] = useState(true);
    const filterby = searchParams.get("filterby");
    const keyword = searchParams.get("keyword");
    var baseURL = "";
    if (filterby === "book") {
        baseURL = "https://litbrary.pythonanywhere.com/book/?search="+keyword+"&num=12";
    } else if (filterby === "genre") {
        baseURL = "https://litbrary.pythonanywhere.com/book/?cat="+keyword+"&num=12";
    }

    useEffect(() => {
        axios.get(baseURL).then((response) => {
        setBook(response.data);
        setReload(false);
        });
    }, [baseURL]);
    
    if(reload){
        return <Loading/>
    }

    if (!book) return null;
    
    
    return (
        <div className="search">
            <div className="search__result">
                <h1>Search For "{keyword}"</h1>
                <div className="search__result__cardbook">
                <CarouselBody data={book}/>
                </div>               
            </div>
            <div className="search__recommendation">
                <h1>You may also like this</h1>
                <div className="search__recommendation__cardbook">
                    <CarouselBody data={book}/>
                </div>     
            </div>
        </div>
    );
}