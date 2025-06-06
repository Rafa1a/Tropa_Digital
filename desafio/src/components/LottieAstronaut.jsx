import { Player } from '@lottiefiles/react-lottie-player';
import astronauta from '../../public/astronauta.json'

export default function LottieAstronaut() { 
    return (
      <div className='bg-white rounded-full '>
        <Player
            autoplay
            loop
            src= {astronauta}
            style={{ height: '300px', width: '300px' }}
        />
      </div>
    )
}