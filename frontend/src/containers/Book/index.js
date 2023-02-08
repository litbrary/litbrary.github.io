import React, {useState, useEffect, useRef, useContext} from 'react';
import { UserContext } from '../../App';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './book.scss';
import CarouselBody from '../../components/carouselbody';
import { RangeDatePicker } from "react-google-flight-datepicker";
import withReactContent from 'sweetalert2-react-content'
import "react-google-flight-datepicker/dist/main.css";
import Swal from 'sweetalert2';
import moment from 'moment';
import Loading from '../../components/loading';

export default function Book() {  
    let {id} = useParams();
    const baseURL1 = 'https://litbrary.pythonanywhere.com/book/'+id;
    const baseURL2 = 'https://litbrary.pythonanywhere.com/recsys/?id='+id;
    const [data, setData] = useState({book: null, recommendation: null});
    const [reload, setReload] = useState(true);
    const MySwal = withReactContent(Swal);
    const currentUser = useContext(UserContext);
    let startBorrowing = useRef(new Date());
    let endBorrowing = useRef(new Date());
    
    useEffect(() => {
        const fetchData = async () => {
          const respBook = await axios(baseURL1);
          const respRec = await axios(baseURL2);
          setData({ book: respBook.data, recommendation: respRec.data })
        };
    
        fetchData().then(() => setReload(false));
      },[baseURL1, baseURL2]);

    if(reload){
        return <Loading/>
    }

    if(!data.book || !data.recommendation) return null;
    
    const handleClick = () => {
        axios.post('https://litbrary.pythonanywhere.com/borrowing/', {
            "startDate": moment(startBorrowing.current).format('YYYY-MM-DD').toString(),
            "endDate": moment(endBorrowing.current).format('YYYY-MM-DD').toString(),
            "book": id.toString(),
            "user": currentUser.toString(),
          })
          .then(function () {
            MySwal.fire({
                title: 'Success!',
                text: 'You have successfuly borrow the book',
                icon: 'success',
                confirmButtonText: 'Okay',
                customClass:{
                    fontFamily: 'DM Sans',
                }
              })
          })
          .catch(function () {
            MySwal.fire({
                title: 'Error!',
                text: 'The book is borrowed currently!',
                icon: 'error',
                confirmButtonText: 'Okay',
            })
          });
    }

    return (
        <div className="book">
            <div className="book__detail">
                <div className="book__detail__bgimage">
                    <img src={data.book.imgUrl} alt="book"/>
                </div>
                <div className="book__detail__header" key={data.book.id}>
                    <div className="book__detail__header__info">
                        <div className="book__detail__header__info__title">
                            {data.book.title}
                        </div>
                        <div className="book__detail__header__info__separate">
                        </div>
                        <div className="book__detail__header__info__author">
                            {data.book.author}
                        </div>
                        <div className="book__detail__header__info__publisher">
                            {data.book.publisher}
                        </div>       
                    </div>             
                    <div className="book__detail__header__image">
                        <img src={data.book.imgUrl} alt="book"/>
                    </div>
                </div>
                <div className="book__detail__description">
                    {data.book.desc}
                </div>
                
                <div className="book__detail__calendar">
                    
                    <div className="book__detail__calendar__content">
                    <h1>Borrow Now!</h1>
                        <RangeDatePicker
                            startDate={new Date()}
                            endDate={new Date()}
                            onChange={(startDate, endDate) => {
                                startBorrowing.current = startDate;
                                endBorrowing.current = endDate;
                            }}
                        />
                    </div>
                    <div className="book__detail__calendar__button">
                        <button className="book__detail__calendar__button__style" onClick={handleClick}>Submit</button>
                    </div>
                </div>
            </div> 
            <div className="book__recommendation">
                <h1>You may also like this</h1>
                <div className="book__recommendation__cardbook">
                    <CarouselBody data={data.recommendation}/>
                </div>     
            </div>
        </div>
    );
}