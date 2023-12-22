import React from 'react'
import './Blogs.css'
import { Link } from 'react-router-dom'
import Blog3_1 from '../Assets/Blog3_1.webp'
import Blog3_2 from '../Assets/Blog3_2.webp'
import Blog3_3 from '../Assets/Blog3_3.webp'
import Blog3_4 from '../Assets/Blog3_4.webp'
import Blog3_5 from '../Assets/Blog3_5.webp'


function Blog_3() {
    return (
        <div className='Blogs'>
            <div className="path">
                <Link to='/'>HOME /</Link>
                <Link to='/blog'>BLOG /</Link>
                <span>SUIT - FASHION TREND FOR POWERFUL LADIES</span>
            </div>
            <hr />
            <div className="Blog-content">
                <h2>SUIT - FASHION TREND FOR POWERFUL LADIES</h2>
                <hr />
                <h4>06/12/2023</h4>
                <hr />
                <img src={Blog3_5} alt='Lady on Suite Blog' />
                <p>
                    The golden age of power suits for women has returned to the fashion world with trendy designs and color palettes updated with the latest trends. As fashion evolves in modern society, the lines between men's and women's clothing are increasingly blurred. From agendas reserved only for men, suits have stepped out of the norm to become a symbol of style and show strength for women.<br /><br />
                    The feeling of wanting to change your style to become more attractive and sharper is not just a woman's thought. They often choose to upgrade their image with trendy suits.<br />
                    Let's take a look at the important factors that determine the style of your outfit with MADAM BOUTIQUE!<br /><br />

                    1. Color <br />
                    Combining a ton - sur - ton suit set with the same material and color is always a safe choice while still maintaining the fashion and style of the wearer. Girls can wear this uniform set to important meetings to confidently show off their temperament.<br />
                    Not limited by cool and dark colors or classic striped patterns like gentlemen's suits, girls' suits always have the fullest and most vibrant color palette. From eye-catching colors to gentle pastel colors, designers are using them as creatively as possible. Bright red, ten o'clock pink or faded grass are all smart choices for this year's Autumn Winter Collection.
                </p>
                <img src={Blog3_1} alt='Lady on Suite Blog' />
                <p>
                    Choosing bright, striking colors not only helps you express your style but also avoids the mature and serious look of this design. When combining a suit with this color tone, you should choose a T-shirt, shirt or accessory with basic white or black tones to create a sense of harmony for your overall outfit.
                </p>
                <img src={Blog3_2} alt='Lady on Suite Blog' />
                <p>
                    2. Design<br /><br />

                    The basic vest design favored by girls is still a fitted shirt, with a clever waist design that accentuates the body's curves. You can combine it with straight-leg pants or wide-leg pants, both contributing to the effect of making the outfit more stylish.
                    The loose shape of the pants not only helps hide the shortcomings of the legs but also creates the feeling of increasing height.
                </p>
                <img src={Blog3_3} alt='Lady on Suite Blog' />
                <p>
                    In addition, stylized highlights in slanted and sharp cut details are also utilized to become the main beauty of these product models. For women who love the black tone, this suit is definitely the perfect choice. The chain belt detail at the waist creates a highlight that makes the outfit more eye-catching and unique.
                </p>
                <img src={Blog3_4} alt='Lady on Suite Blog' />
                <p>
                    The straight-leg pants in the suit coordinate perfectly with pointy high heels to make you look much taller. With this type of pants, you should choose a product with a moderate length to create youthfulness and effectively cheat the length of your legs.<br /><br />

                    From the fashion catwalk to the streets and even in the workplace, suits are gradually changing in shape towards menswear. Cuts on more diverse materials bring completely new experiences to the wearer, while still exuding generosity and style.
                </p>
            </div>
        </div>
    )
}

export default Blog_3
