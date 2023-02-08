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
            <div className="mybooks__borrowed">
                <h1>Borrowed Books</h1>
                <div className="mybooks__borrowed__cardmybook">
                    {books.map((item) => (
                        item.isReturned ? null: (item.book === null ? null : <CardMyBook key={item.id} id={item.book.id} image={item.book.imgUrl} title={item.book.title} author={item.book.author} date={item.endDate}/>)
                    ))}
                </div>               
            </div>
            <div className="mybooks__history">
                <h1>History</h1>
                <div className="mybooks__history__cardmybook">
                    {books.map((item) => (
                        item.isReturned ? (item.book === null ? null : <CardMyBook key={item.id} id={item.book.id} image={item.book.imgUrl} title={item.book.title} author={item.book.author} date={item.endDate}/>) : null
                    ))}
                </div>     
            </div>
        </div>
    );
}