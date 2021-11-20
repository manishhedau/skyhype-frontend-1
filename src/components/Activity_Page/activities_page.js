import './styles/activities_page.css';
import ProfileLinkSection from '../Profile_Link_Section/profile_link_section';
import AddLinkButton from './add_link_button';
import ActivityList from './activity_list';
import SpotlightSection from './spotlight_section';


import { useSelector, useDispatch } from 'react-redux';
import { addAcitivityLink } from '../../stores/activityLinksReducer';
import { useState } from 'react';

const ActivityPage = (props) => {

    const dispatch = useDispatch();
    const userData = useSelector((state) => state.entities.activityLinks);
    const [currentList, setCurrentList] = useState(userData);

    console.log(currentList);

    const addLink = async (e) => {
        e.preventDefault();

        setCurrentList(prevList => {

            const newLink = {
                link: "",
                title: "",
                spotlight: "",
                schedule: new Date().toString(),
                click_count: 0,
                isActive: false
            }

            dispatch(addAcitivityLink({ newLink }))
            return [newLink, ...prevList];
        });
    }

    const deleteLink = async (index) => {

        const tempList = [...currentList];
        tempList.splice(index, 1);

        setCurrentList(tempList);
        console.log("List after deletion: \n", currentList);
    }

    const updateLink = (index, linkTitle, url) => {
        const tempList = [...currentList];
        tempList[index] = {title: linkTitle, url};

        setCurrentList(tempList);
    }

    return (
        <div className="activities-page">

            <div className="responsive-profile-link" style={{marginBottom: "1rem"}}>
                <ProfileLinkSection />
            </div>

            <SpotlightSection/>

            <div className="add-link-controls">
                <AddLinkButton addLink={addLink} />
            </div>

            <ActivityList currentList={currentList} updateLink={updateLink} deleteLink={deleteLink} />

        </div>
    );
}

export default ActivityPage;