import './BestProduct.css'
import { useRef } from 'react';
import { useScroll, useTransform, motion as m } from 'framer-motion';
// import { useScroll, useTransform, motion } from 'framer-motiom';
import Picture1 from '../../../public/assets/1.jpeg';
import Picture2 from '../../../public/assets/2.jpeg';
import Picture3 from '../../../public/assets/3.jpg';
import Picture4 from '../../../public/assets/4.jpg'
import Picture5 from '../../../public/assets/5.jpg'
import Picture6 from '../../../public/assets/6.jpg'
import Picture7 from '../../../public/assets/7.jpeg'


export default function BestProduct() {
    const container = useRef(null);

    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end']
    })

    const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
    const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
    const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
    const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
    const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);

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
                                <div className='imageContainer'>
                                    <img
                                        src={src}
                                        // fill
                                        alt="image"
                                    />
                                </div>
                            </m.div>
                        })
                    }
                </div>
            </div>
        </div>

    )
}

// ----------------------------------
// import styles from './styles.module.scss';

// import Image from 'next/image';
// import { useScroll, useTransform, motion } from 'framer-motion';

// export function Index() {

//     const container = useRef(null);
//     // const { scrollYProgress } = useScroll({
//     //     target: container,
//     //     offset: ['start start', 'end end']
//     // })

//     // const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
//     // const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
//     // const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
//     // const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
//     // const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);

//     const pictures = [
//         {
//             src: Picture1,
//             scale: scale4
//         },
//         {
//             src: Picture2,
//             scale: scale5
//         },
//         {
//             src: Picture3,
//             scale: scale6
//         },
//         {
//             src: Picture4,
//             scale: scale5
//         },
//         {
//             src: Picture5,
//             scale: scale6
//         },
//         {
//             src: Picture6,
//             scale: scale8
//         },
//         {
//             src: Picture7,
//             scale: scale9
//         }
//     ]

//     return (
//         <div ref={container} className='best-product'>
//             <div className={styles.sticky}>
//                 {
//                     pictures.map(({ src, scale }, index) => {
//                         return <div key={index} style={{ scale }} className={styles.el}>
//                             <div className={styles.imageContainer}>
//                                 <Image
//                                     src={src}
//                                     fill
//                                     alt="image"
//                                 />
//                             </div>
//                         </div>
//                     })
//                 }
//             </div>
//         </div>
//     )
// }
