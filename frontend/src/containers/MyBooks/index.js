import React, {useContext, useEffect, useState} from 'react';
import axios from 'axios';
import {UserContext} from '../../App';
import './mybooks.scss';
import CardMyBook from '../../components/cardmybook';
import Loading from '../../components/loading';

export default function MyBooks() {  
    const user = useContext(UserContext);
    const baseURL = 'https://litbrary.pythonanywhere.com/borrowing/?user='+user;
    const [books, setBooks] = useState(null);
    const [reload, setReload] = useState(true);

    const checkIsCurrent = (date1, date2) => {
        const d1 = new Date(date1);
        const d2 = new Date(date2);
        const d3 = new Date();
        if(d1 <= d3 && d3 <= d2){
            return true;
        }
        return false;
    }
    const checkIsReturned = (date) => {
        const d1 = new Date(date);
        const d2 = new Date();
        if(d1 < d2){
            return true;
        }
        return false;
    }

    const checkIsUpcoming = (date) => {
        const d1 = new Date(date);
        const d2 = new Date();
        if(d1 > d2){
            return true;
        }
        return false;
    }

    useEffect(() => {
        axios.get(baseURL).then((response) => {
            setBooks(response.data);
            setReload(false);
        });
    }, [baseURL]);

    if(reload){
        return <Loading/>
    }
    
    if (!books) return null;
    
    
    return (
        <div className="mybooks">
            <div className="mybooks__section">
                <h1>Currently Borrowed Books</h1>
                <div className="mybooks__section__cardmybook">
                    {console.log(books)}
                    {books.map((item) => {
                        return(checkIsCurrent(item.startDate, item.endDate) ? (item.book === null ? null : <CardMyBook key={item.id} id={item.book.id} image={item.book.imgUrl} title={item.book.title} author={item.book.author} date={item.endDate}/>) : null)
                    })}
                </div>               
            </div>
            <div className="mybooks__section">
                <h1>Upcoming</h1>
                <div className="mybooks__section__cardmybook">
                    {books.map((item) => (
                        checkIsUpcoming(item.startDate) ? (item.book === null ? null : <CardMyBook key={item.id} id={item.book.id} image={item.book.imgUrl} title={item.book.title} author={item.book.author} date={item.endDate}/>) : null
                    ))}
                </div>               
            </div>
            <div className="mybooks__section">
                <h1>History</h1>
                <div className="mybooks__section__cardmybook">
                    {books.map((item) => (
                        checkIsReturned(item.endDate) ? (item.book === null ? null : <CardMyBook key={item.id} id={item.book.id} image={item.book.imgUrl} title={item.book.title} author={item.book.author} date={item.endDate}/>) : null
                    ))}
                </div>     
            </div>
        </div>
    );
}