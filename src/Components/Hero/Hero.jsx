import { Link } from 'react-router-dom'
import './Hero.css'

export default function Hero() {
    return (
        <div className='hero'>

            <div className="hero-text">
                <h1>Lorem ipsum dolor</h1>
                <h3>Lorem, ipsum dolor sit amet consectetur adipisicing elit</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam enim doloribus accusantium consequatur praesentium dolore eius! Dicta aliquid ipsam aspernatur atque quasi quod ducimus dolor impedit dolorem itaque deleniti asperiores magni eaque perspiciatis in explicabo rem velit voluptate</p>
                <Link>Click Me</Link>
            </div>

            <div className="hero-img">
                {/* <img src="" alt="" /> */}
                <div className="img"></div>
            </div>
        </div>
    )
}
