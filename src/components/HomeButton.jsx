import { useNavigate } from 'react-router-dom';
//import RepositoryList from './RepositoryList';
import { Button } from './ui/button';



function HomeButton () {
    let navigate = useNavigate();

    function handleClick(){
        navigate('/')
    }
    return(
        <Button onClick={handleClick}>Go Home</Button>
    )
}

export default HomeButton;