import interestsInfo from './interests.json';
import colors from '../Analytics_Page/datasets/colors.json';
import './interests-page.css';
import InterestTile from './interest-tile';
import { useHistory } from 'react-router-dom';

// console.log(interestsInfo);
console.log(colors);

const getRandomColor = () => {
    const colorIndex = Math.floor(Math.random() * 256);

    return colorIndex;
}

const InterestsPage = () => {
    const history = useHistory();

    const handleClick = () => {
        history.push("/user-profession");
    }

    return (
        <div id="interests-page">

            <div id="interest-description">
                <p>Choose interests that you'd like to share. Choose a minimum of 5</p>
                <p>Passions (0/5)</p>
            </div>

            <div id="interests-container">
                {interestsInfo.interests.map((interest, index) => {

                    const color = colors[getRandomColor()].hexString;

                    return (

                        // <div key={index} className="interests-tile" style={{color: color, border: `1px solid ${color}`}}>
                        //     <h6>{interest}</h6>
                        // </div>

                        <InterestTile interest={interest} color={color} />

                    );
                })}
            </div>

            <button className="btn btn-dark" onClick={handleClick}>Save</button>

        </div>
    );
}

export default InterestsPage;