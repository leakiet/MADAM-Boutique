import React from 'react'
import './Blogs.css'
import { Link } from 'react-router-dom'
import Blog2_1 from '../Assets/Blog2_1.webp'
import Blog2_2 from '../Assets/Blog2_2.webp'
import Blog2_3 from '../Assets/Blog2_3.webp'
import Blog2_4 from '../Assets/Blog2_4.webp'
import Blog2_5 from '../Assets/Blog2_5.webp'

function Blog_2() {
    return (
        <div className='Blogs'>
            <div className="path">
                <Link to='/'>HOME /</Link>
                <Link to='/blog'>BLOG /</Link>
                <span>3 WAYS TO WEAR BEAUTIFUL SHIRT PROPERLY</span>
            </div>
            <hr />
            <div className="Blog-content">
                <h2>3 WAYS TO WEAR BEAUTIFUL SHIRT PROPERLY</h2>
                <hr/>
                <h4>18/11/2023</h4>
                <hr/>
                <p>
                    It is not natural that shirts are constantly sought after by office women for their wardrobes. That's because of its ability to vary widely, suitable for many style trends. Let's take a look at some of the following mixing methods with MADAM BOUTIQUE:<br /><br />

                    𝟏. High-waisted straight-leg pants <br /><br />

                    The style of mixing with wide-leg pants is certainly no longer strange to office girls. Perhaps this is the simplest way to mix clothes for her on busy days when she doesn't know which outfit to choose for the day. The set has office-standard advantages and brings comfort and elegant style to the wearer<br /><br />

                    High-waisted pants are an indispensable key item when attached to a shirt as an extremely effective miracle in concealing flaws in your waist and hips.<br /><br />
                </p>
                <img src={Blog2_1} alt='shirt blog' />
                <p>
                    Besides, this outfit also helps you feel comfortable for all activities during the day, avoiding stuffiness and restriction like pencil skirts or tight pants. Ladies can combine them with high heels to further enhance their figure and effectively cheat their height
                </p>
                <img src={Blog2_2} alt='shirt blog' />
                <p>
                    Besides the two basic color tones white and black, don't hesitate to experience other trendy and modern color tones such as blue, beige brown, pink,... to let F5 style herself!<br /><br />

                    To coordinate clothes with these new color tones, you can choose a safe option when combining with a white or black shirt, or wear a whole set of tonal clothes.
                </p>
                <img src={Blog2_3} alt='shirt blog' />

                <p>
                    𝟐. Pencil skirt <br /><br />

                    The pencil skirt is a skirt shape designed to hug the 2nd and 3rd rounds, gradually bunching up along the women's legs. This design is quite picky about the body shape but in return can maximize the figure. So if you have a well-proportioned body, don't miss this item. The shirt and pencil skirt set is always a favorite choice of office ladies. This way of mixing clothes is not only suitable for an environment that requires professionalism but also shows the modern fashion style of the wearer. <br /><br />


                    The stylized shirt mixed with a light pencil skirt, recreates feminine beauty and flatters every body shape.<br /><br />


                    There is no denying the high applicability of a black pencil skirt. She can freely combine it with shirts of many different colors, but the more vibrant and outstanding colors will bring you a unique experience. Interesting about fashion.
                </p>
                <img src={Blog2_4} alt='shirt blog' />
                <p>
                    3. Midi skirt <br /><br />


                    Youthful and equally modern when mixed with a long, flared skirt with slight volume, you can wear it to work or on the street on the weekend while still ensuring femininity.
                </p>
                <img src={Blog2_5} alt='shirt blog' />

                <p>
                    Join MADAM BOUTIQUE to update the latest fashion trends, cool outfit tips, quality products and attractive promotions by following the MADAM BOUTIQUE fanpage and visiting the website MADAMBOUTIQUE.COM!
                </p>

            </div>

        </div>
    )
}

export default Blog_2
