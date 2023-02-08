import './cardbook.scss';
import {Link} from 'react-router-dom';
export default function CardBook(props){
    const checkTitle = (title) => {
        if(title.length > 15){
            return title.slice(0, 15) + '...'
        }else{
            return title
        }
    }
    const checkAuthor = (author) => {
        if(author.length > 15){
            return author.slice(0, 18) + '...'
        }else{
            return author
        }
    }
    return (
            <div className="cardbook">
                <div className="cardbook__container" id={'book_'+props.index % 3}>
                    <Link reloadDocument key={props.id} style={{textDecoration: "none"}} to={"/book/"+props.id}>
                        <div className="cardbook__container__content">
                            <div className="cardbook__container__content__image">
                                <img src={props.image} alt="book"/>
                            </div>
                            <div className="cardbook__container__content__title">
                                {checkTitle(props.title)}
                            </div>
                            <div className="cardbook__container__content__author">
                                {checkAuthor(props.author)}
                            </div>   
                        </div>
                    </Link>
                </div>
            </div>
        
    );
}