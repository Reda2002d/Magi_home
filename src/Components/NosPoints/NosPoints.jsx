import './NosPoints.css'
import arrows from '../../../public/images/NosPointsImages/arrows.png'

import { Canvas } from '@react-three/fiber'
import Model from './Model'
import { Environment } from '@react-three/drei'

export default function NosPoints() {

    return (
        <div className='nos-points'>

            <h2>Nos Points</h2>
            <div className='nos-points-wrraper'>
                <img src={arrows} alt="" />
                <Canvas className='canvas'>
                    <Model />
                    <Environment preset='sunset' />
                </Canvas>

                <div className="cards"></div>
                <div className="cards"></div>
                <div className="cards"></div>
                <div className="cards"></div>
            </div>
        </div>
    )
}
