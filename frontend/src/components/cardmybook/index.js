import React from 'react';
import './cardmybook.scss';
import {Link} from 'react-router-dom';
export default function CardMyBook(props){
    return (
        
            <div className="cardmybook">
                <Link className="cardmybook" key={props.id} style={{textDecoration: "none"}} to={"/book/"+props.id}>
                <div className="cardmybook__content">
                    <div className="cardmybook__content__image">                   
                        <img src={props.image} alt="book"/>
                    </div>
                    <div className="cardmybook__content__info">
                        <div className="cardmybook__content__info__title">
                            {props.title}
                        </div>
                        <div className="cardmybook__content__info__author">
                            {props.author}
                        </div> 
                    </div>
                    <div className="cardmybook__content__date">
                        Due Date: <span className="cardmybook__content__date__bold">{props.date}</span>
                    </div>   
                </div>
                </Link>
            </div>
        
    );
}