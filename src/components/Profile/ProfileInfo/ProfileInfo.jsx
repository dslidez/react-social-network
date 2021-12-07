import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/preloader/Preloader";
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = (props) => {

    if (!props.profile) {                  //делает прелоадер если нет профиля
      return <Preloader />
    }
    return (
        <div>
            { /*<div className={s.img} >
                <img src='https://www.bmw.ru/content/dam/bmw/common/all-models/x-series/x6/2021/highlights/bmw-x6-onepager-mc-new-edition-hero-desktop.jpg'/>
            </div>*/}
            <div className={s.DescriptionBlock}>
                <img src={props.profile.photos.large} />
                <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
            </div>
        </div>
    )
}

export default ProfileInfo;