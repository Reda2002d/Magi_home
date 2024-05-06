import './BestProduct.css'
import { useRef } from 'react';
import { useScroll, useTransform, motion as m } from 'framer-motion';
import Picture1 from '../../../public/images/BestProductsImages/IMG1.png';
import Picture2 from '../../../public/images/BestProductsImages/IMG2.png';
import Picture3 from '../../../public/images/BestProductsImages/IMG3.png';
import Picture4 from '../../../public/images/BestProductsImages/IMG4.png';
import Picture5 from '../../../public/images/BestProductsImages/IMG5.png';
import Picture6 from '../../../public/images/BestProductsImages/IMG6.png'
import Picture7 from '../../../public/images/BestProductsImages/IMG7.png'


export default function BestProduct() {
    const container = useRef(null);

    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end']
    })

    const scale1 = useTransform(scrollYProgress, [0, 1], [1, .4]);
    const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
    const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
    const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
    const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
    const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);

    const moveX1 = useTransform(scrollYProgress, [0, 1], [0, 70]);
    const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

    const pictures = [
        {
            src: Picture1,
            scale: scale4
        },
        {
            src: Picture2,
            scale: scale5
        },
        {
            src: Picture3,
            scale: scale6
        },
        {
            src: Picture4,
            scale: scale5
        },
        {
            src: Picture5,
            scale: scale6
        },
        {
            src: Picture6,
            scale: scale8
        },
        {
            src: Picture7,
            scale: scale9
        }
    ]

    
    return (
        <div className="best-product">
            <h2>Nos meillieurs produits</h2>
            <div ref={container} className='best-product-wrraper'>
                <div className='sticky'>
                    {
                        pictures.map(({ src, scale }, index) => {
                            return <m.div key={index} style={{ scale }} className='el'>
                                <div  className='imageContainer'>
                                    <m.img
                                    
                                        style={index === 0 ? { scale: scale1, x: moveX1 } : {}}
                                        src={src}
                                        alt="image"
                                    ></m.img>
                                    {index === 0 ?
                                        <m.div
                                            className='text-wrraper'
                                            style={{ opacity: opacity, x: moveX1 }}
                                        >
                                            <h3>Lorem ipsum dolor sit.</h3>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos placeat dolorum quibusdam quae possimus ab totam voluptate eius error, eos dolore deleniti veritatis, nulla suscipit sint! Incidunt illo magni alias,Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos deserunt voluptate repellat temporibus modi nobis tenetur, corporis molestiae velit earum.</p>
                                        </m.div>
                                        :
                                        ''}
                                </div>
                            </m.div>
                        })
                    }
                </div>
            </div>
        </div >

    )
}