import axios from 'axios';
import React, {useState ,useEffect} from 'react';
import DeleteButton from './DeleteButton';
import Headers from './Headers';

const PlayerPerent = () => {
    const [Players, setPlayers] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/players/list")
        .then(res=> setPlayers(res.data))
        .catch(err => console.log(err));
    }, [])
 
const deleteHandler = PlayerId => {
    const tempArr = Players.filter( player => player._id !== PlayerId);
    setPlayers(tempArr);
}

return(
    <div>
       <Headers/>

        <table className="table" style = {{margin : "auto",marginTop : "50px", width : "500px"}}>
                <tbody>
                    <tr>
                        <td>Team Name</td>
                        <td>Preffered Postion</td>
                        <td>Actions</td>
                    </tr>
                {
                    Players.map((play, idx)=>{
                        return(
                            <tr key={idx}>
                                <td>
                                    {play.TeamName}
                                </td>
                                <td>
                                    {play.Postion}
                                </td>
                            
                                <td><DeleteButton deleteId={play._id} callback={deleteHandler}/></td>

                            </tr>
                        )
                    })
                }
                </tbody>
            </table>
                
    </div>
)

}

export default PlayerPerent;