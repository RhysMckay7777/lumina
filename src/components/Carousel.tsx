import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Solana from '@/assets/images/partners/solana.png';
import Bybit from '@/assets/images/partners/bybit.png';
import Gate from '@/assets/images/partners/gate.png';
import Helio from '@/assets/images/partners/helio.png';
import Hacken from '@/assets/images/partners/hacken.png';
import Magic from '@/assets/images/partners/magic.png';
import Opensea from '@/assets/images/partners/opensea.png';

export default function Carousel() {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        centerMode: true,
        variableWidth: true,
        navigator: false,
        className: "slider variable-width",
    };
    return (
        <div className="slider-container lg:max-w-5xl max-w-xs md:max-w-2xl mx-auto mt-20 overflow-hidden">
            <Slider {...settings}>
                {
                    Logos.map((items, id) => (
                        <div key={id} className="flex items-center mx-5 h-10">
                            <div>
                                <img
                                    src={items.logoImg}
                                    alt={items.alternnative}
                                    // height={items.height}
                                    // width={items.width}
                                    className="lg:h-10 h-5 md:h-7 w-auto object-contain"
                                />
                            </div>
                        </div>
                    ))
                }
            </Slider>
        </div>
    );
}


const Logos = [
    {
        logoImg: Solana,
        alternnative: 'Solana',
        height: 35,
        width: 167
    },
    {
        logoImg: Bybit,
        alternnative: 'Bybit',
        height: 35, width: 82,
    },
    {
        logoImg: Gate,
        alternnative: 'Gate.io',
        height: 35, width: 119,
    },
    {
        logoImg: Helio,
        alternnative: 'Helio',
        height: 35, width: 75,
    },
    {
        logoImg: Hacken,
        alternnative: 'Hacken',
        height: 35, width: 149,
    },
    {
        logoImg: Magic,
        alternnative: 'Magic Eden',
        height: 35, width: 160,
    },
    {
        logoImg: Opensea,
        alternnative: 'OpenSea',
        height: 35, width: 158,
    },

]