import {useState} from 'react';



const ProfessionTile = (props) => {

    const {profession,color, choiceKey, addToProfessionList, removeFromProfessionList} = props;

    const [selected, setSelected] = useState(false);
    
    const toggleSelection = (e) => {
        if(selected)
        {
            removeFromProfessionList(e);
        }

        else
        {
            addToProfessionList(e);
        }

        setSelected(!selected);
    }

    return (
        <h6 key={choiceKey} className="profession-tile" id={`profession-${choiceKey}`} onClick = {toggleSelection} style={{color: selected ? "white" : color, border: `1px solid ${color}`, backgroundColor: selected ? color : "white"}} >{profession}</h6>
    );

}

export default ProfessionTile;