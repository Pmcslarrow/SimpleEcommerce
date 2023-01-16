import largeCamera from '../images/camera-large.jpg'
import normalCamera from '../images/camera.jpg'
import iphone from '../images/iphone.jpg'

export default function Features()
{
    return (
        <div>

            <div className="grid grid-cols-3 grid-rows-2 gap-10 place-items-center">

                <section className="col-span-2 row-span-2 grayscale transition ease-in-out hover:grayscale-0 hover:scale-105">
                    <div>
                        <img src={largeCamera} alt="An image of a floating camera" />
                    </div>
                </section>


                <section className="grayscale transition ease-in-out hover:grayscale-0 hover:scale-105">
                    <div>
                        <img src={normalCamera} alt="Picture of a camera" />
                    </div>
                </section>

                <section className="grayscale transition ease-in-out duration-100 hover:grayscale-0 hover:scale-105">
                    <div>
                        <img src={iphone} alt="" />
                    </div>
                </section>
            </div>

        </div>
    )
}