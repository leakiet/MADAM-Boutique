import React from 'react'
import './Blogs.css'
import Blog1_1 from '../Assets/Blog1_1.webp'
import Blog1_2 from '../Assets/Blog1_2.webp'
import Blog1_3 from '../Assets/Blog1_3.webp'
import { Link } from 'react-router-dom'

function Blog_1() {
    return (
        <div className='Blogs'>
            <div className="path">
                <Link to='/'>HOME /</Link>
                <Link to='/blog'>BLOG /</Link>
                <span>MINIMAL CHIC</span>
            </div>
            <hr />
            <div className="Blog-content">
                <h2>MINIMAL CHIC</h2>
                <hr/>
                <h4>18/12/2023</h4>
                <hr/>
                <p>According to the trend of fashion development, simplicity and comfort are prioritized. Day by day, products are designed in a minimalist style, focusing on minimal details and colors to match customer preferences. As a result, minimalist fashion styles are gaining attention and prominence.</p>

                <p>Today, let's explore more about the minimalist fashion style with MADAM BOUTIQUE and see what makes it special!</p>

                <p><img src={Blog1_1} alt='Minimal Chic Blog' /></p>

                <p>
                    Minimalist style is understood as the dynamic and refined incorporation of the most essential elements by designers into their products. Minimalism extends from the overall design, lines, to decorative details, creating a design that is clean and uncomplicated. Despite utilizing minimalist style, it brings harmony and focal points rather than being monotonous. The limited use of colors is a distinctive feature that identifies this fashion trend.</p>

                <p>This style has undergone many challenges and diverse opinions to secure its position in the fashion world as we see it today. Many designers and celebrities have endorsed and popularized this trend, leading to its strong influence.</p>

               <p>The emergence of minimalist fashion has made clothing more comfortable, especially for women. This trend is considered a liberation from the elaborate dressing styles of the past. Additionally, adopting a minimalist wardrobe is seen as a response to economic trends.</p>

                <p>Minimalist style has gradually made its way onto high-end fashion runways, celebrating elegance while maintaining an air of luxury. Many brands have incorporated the guiding principle of minimalism into their designs, using luxurious and expensive fabrics.</p>

                <p>After several decades of formation and development, minimalist fashion continues to hold a significant place in the fashion world.</p>

            <img src={Blog1_2} alt='Minamal Chic Blog' />

            <p>When styling in the minimalist fashion, it's important to convey simplicity without becoming dull or monotonous. Here are some tips to keep in mind if you want to embrace this dressing style:</p>
        <p>
                1. Create Contrast: Pair a simple designed outfit with standout, impressive accessories that draw attention.<br/><br/>

                2. Minimal Details: Keep clothing details to a minimum, but not entirely absent. Opt for designs with 1-2 accent details to create focal points.<br/><br/>

                3. Contrasting Color Tones: Combine contrasting colors with the outfit to add differentiation and personality.<br/><br/>

                4. Black is Timeless: Black is an optimal and safe choice. It adds sophistication, allure, and minimizes the risk of a fashion faux pas. Black is a perennial favorite, especially in minimalism.<br/><br/>

                5. Other Neutral Colors: Apart from black, consider other neutral tones like white, charcoal, ivory, moss green, beige, pastels, which are gentle and versatile.<br/><br/>

                6. Avoid Overly Bright Colors: Steer clear of overly vibrant and flashy colors such as neon, bright orange, or hot pink, as they can overpower the minimalist aesthetic.<br/><br/>

                7. Simplicity in Makeup and Hair: Keep makeup and hairstyling simple to complement your chosen outfit. Opt for light makeup and uncomplicated hairstyles.<br/><br/>

                8. Comfortable Silhouettes: Choose designs with comfortable silhouettes such as slits, exposed shoulders, and subtle waist cutouts. Simple yet effective in highlighting your body's beauty.<br/><br/>

                9. Fabric Choices: Opt for fabrics that align with the minimalist style, such as silk, velvet, tweed, linen, satin. Besides color, the fabric's design and texture play a crucial role in making your simple outfit stand out.<br/><br/>
                Remember, the key to minimalist fashion is to find the right balance between simplicity and making a statement.</p>
            <img src={Blog1_3} alt='Minimal Chic Blog' />
            <p>
                Have you ever heard about the minimalism fashion style? Is this a style that you are currently or planning to pursue? Share with MADAM BOUTIQUE!</p>


        </div>
        </div >
    )
}

export default Blog_1
