import React from "react";
import BackgroundSlider from 'react-background-slider'
import image1 from '../../assets/EindopdrachtMJ-10.jpg'
import image2 from '../../assets/EindopdrachtMJ-11.jpg'
import image3 from '../../assets/EindopdrachtMJ-12.jpg'
import image4 from '../../assets/EindopdrachtMJ-13.jpg'
import image5 from '../../assets/EindopdrachtMJ-14.jpg'



const SildeShow = () => {
    return (

            <div>
                <BackgroundSlider
                    images={[image1, image2, image3, image4,image5]}
                    duration={8}
                    transition={1.5}
                />
            </div>

    )
}

export default SildeShow;