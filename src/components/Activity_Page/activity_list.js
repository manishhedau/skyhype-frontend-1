import Activity from "./activity_link";
import './styles/activities_page.css'
const ActivityList = (props) => {

    const {currentList, deleteLink, updateLink} = props;

    return (
        <div className="activity-list">
            {
                currentList.map((link,index) => {
                    console.log(link);
                    return <Activity updateLink={updateLink} linkKey={index} deleteLink={deleteLink} activityKey={index} title={link.title} url={link.link}/>
                })
            }
        </div>
    );
}

export default ActivityList;