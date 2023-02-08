import './profile.scss';
import React, { useState, useEffect, useContext } from 'react';
import { UserContext } from '../../App';
import axios from 'axios';
import Loading from '../../components/loading';
export default function Profile() {

    const currentUser = useContext(UserContext);
    const baseURL = 'https://litbrary.pythonanywhere.com/user/'+currentUser;
    const [user, setUser] = useState(null);
    const [reload, setReload] = useState(true);

    useEffect(() => {
        axios.get(baseURL).then((response) => {
        setUser(response.data);
        setReload(false);
        });
    }, [baseURL]);

    if(reload){
        return <Loading/>
    }

    if (!user) return null;   

    return (
        <div className="profile">
            <div className="profile__top">
                <div className="profile__top__layer1"/>               
                <div className="profile__top__layer2"/>
                <div className="profile__top__image">
                    <div className="profile__top__image__content">

                    </div>
                </div>            
            </div>
            
                    <div className="profile__body">
                        <div className="profile__body__title">
                            <div>User Id</div>
                            <div>Username</div>
                            <div>Email</div>
                            
                        </div>
                        <div>
                            <div>: {user.id}</div>
                            <div>: {user.username}</div>
                            <div>: {user.email}</div>
                        </div>
                    </div>              
            
        </div>
    );
}