import './cardcarousel.scss';
export default function CardCarousel(props){
    return (
        <div className="cardcarousel" >
            <div className="cardcarousel__bgimage">
                <img src={props.image} alt="book"/>
            </div>
            <div className="cardcarousel__content" id={'cardcarousel_'+props.index % 3}>
                <div className="cardcarousel__content__image">
                    <img src={props.image} alt="book"/>
                </div>
                <div className="cardcarousel__content__text">
                    <div className="cardcarousel__content__text__title">
                        {props.title}
                    </div>
                    <div className="cardcarousel__content__text__desc">
                        {props.text}
                    </div>    
                    
                </div>
                 
            </div>
        </div>
    );
}