import { Player } from '@lottiefiles/react-lottie-player';
import loading from '../../public/loading.json'

export default function Lottie() { 
    return (
        <Player
            autoplay
            loop
            src= {loading}
            style={{ height: '25px', width: '70px' }}
        />
    )
}