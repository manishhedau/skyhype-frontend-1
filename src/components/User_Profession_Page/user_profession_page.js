import ProfessionData from './user_professions.json';
import ProfessionTile from './profession_tile';
import './user_profession_page.css'

import { useHistory } from 'react-router-dom';
import { useState } from 'react';

const UserProfessionPage = () => {

    const professionDataList = ProfessionData.userProfessions;
    const [professionList, setProfessionList] = useState([]);

    const addToProfessionList = (e) => {
        const choiceId = parseInt(e.target.id.split('-')[1]);
        setProfessionList(list => [...list, professionDataList[choiceId]]);
        console.log(professionList);
    }

    const removeFromProfessionList = (e) => {
        const choiceId = parseInt(e.target.id.split('-')[1]);

        setProfessionList(list => {
            const targetElement = professionDataList[choiceId];
            console.log(targetElement);
            const targetPosition = professionList.find(elem => elem === targetElement);
            list.splice(targetPosition, 1);
            return list;
        })
    }

    const history = useHistory();

    const handleClick = () => {
        history.push("/dashboard/user/:userId");
    }
    return (
        <div id="user-profession-page">

            <div id="profession-selection-section">
                <h1>Choose the profession that best matches your job profile</h1>

                <div id="professions-list-container">
                    {ProfessionData.userProfessions.map((profession, index) => {
                        
                        return <ProfessionTile removeFromProfessionList={removeFromProfessionList}
                            addToProfessionList={addToProfessionList}
                            choiceKey={index}
                            profession={profession}
                            color={"grey"}
                        />

                    })}
                </div>

                <div id="submit-button">
                    <button className="btn btn-primary" disabled={professionList.length === 1 ? false : true} onClick={handleClick}>Save</button>
                </div>

            </div>

            <div id="wallpaper-section">
                <h1>Skyhype</h1>
            </div>

        </div>

    );
}

export default UserProfessionPage;