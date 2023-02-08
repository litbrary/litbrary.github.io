import './cardgenre.scss';
import {Link} from 'react-router-dom';

export default function CardGenre(props){
    return (
        
        <div>
            <Link className="cardgenre" style={{textDecoration: "none"}}id={'genre_'+props.id % 3} to={'/search?filterby=genre&keyword='+props.title}>
                <div className="cardgenre__content">                
                    <div className="cardgenre__content__title">
                        {props.title}
                    </div>
                    <div className="cardgenre__content__symbol">
                        {props.symbol}
                    </div>   
                </div>
            </Link>
        </div>
    );
}