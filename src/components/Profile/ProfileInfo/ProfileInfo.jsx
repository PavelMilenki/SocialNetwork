import React, {useState} from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../Common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "../../../assets/images/user.png";
import ProfileDataUser from "./ProfileDataUser";
import ProfileDataForm from "./ProfileDataForm";


const ProfileInfo = (props,) => {

    const [editMode, setEditMode] = useState(false);

    const goToEditMode = () => {
        setEditMode(true)
    };

    if (!props.profile) {
        return <Preloader/>
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0]);
        }
    };

    const onSubmit = (formData) => {
        props.saveProfile(formData).then(
            () => {
                setEditMode(false)
            }
        );
    };

    return (
        <div>
            <div className={s.descriptionBlock}>
                <img className={s.mainPhoto}
                     alt={"avatar"}
                     src={props.profile.photos.large || userPhoto}/>
                {props.isOwner && <input type={"file"} onChange={onMainPhotoSelected}/>}

                <ProfileStatusWithHooks status={props.status}
                                        updateStatus={props.updateStatus}/>
                <h2>Descriptions</h2>
                {editMode
                    ? <ProfileDataForm profile={props.profile}
                                       onSubmit={onSubmit}
                                       initialValues={props.profile}/>
                    : <ProfileDataUser profile={props.profile}
                                       isOwner={props.isOwner}
                                       goToEditMode={goToEditMode}/>}
            </div>
        </div>
    )
};

export default ProfileInfo