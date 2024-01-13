import React from 'react'
import { TextAnotherComponent } from '../TextAnotherComponent/TextAnotherComponent'

export const TextComponent = () => {
    return (
        <main>
            <div className='border-b border-soli border-[#80808052] pb-2 mb-5'>
                <h2 className='text-[20px] font-bold text-white'>From the firehose</h2>
            </div>
            <div className='flex flex-col gap-1 mb-[16px]'>
                <h2 className='text-[24px]'>Sample blog post</h2>
                <p className='text-[12px]'>April 1, 2020 by <a className="text-[#90CAF9]">Olivier</a></p>
            </div>

            <div className='flex flex-col gap-4  font-bold'>
                <p>This blog post shows a few different types of content that are supported and styled with Material styles. Basic <br /> 
                    typography, images, and code are all supported. You can extend these by modifying Markdown.js.
                </p>

                <p>
                    Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean eu leo quam.<br/>
                    Pellentesque ornare sem lacinia quam venenatis vestibulum. Sed posuere consectetur est at lobortis. Cras mattis<br/>
                    consectetur purus sit amet fermentum.
                </p>
                <p>
                    Curabitur blandit tempus porttitor. Nullam quis risus eget urna mollis ornare vel eu leo. Nullam id dolor id nibh <br/>
                    ultricies vehicula ut id elit.
                </p>
                <p>
                Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean <br/>
                lacinia bibendum nulla sed consectetur.
                </p>
                <div className='flex flex-col gap-3'>
                    <h6 className='text-[20px]'>Heading</h6>
                    <p>
                        Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus, nisi erat<br/>
                        orttitor ligula, eget lacinia odio sem nec elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                    </p>
                </div>
               <div className='flex flex-col gap-3'>
                    <h6 className='text-[20px]'>Sub-heading</h6>
                    <p>
                        Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean lacinia bibendum<br/>
                        nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac cursus<br/>
                        commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.
                    </p>
                </div>
                <ul className='list-disc pl-[40px] flex flex-col gap-2' >
                    <li >Praesent commodo cursus magna, vel scelerisque nisl consectetur et.</li>
                    <li>Donec id elit non mi porta gravida at eget metus.</li>
                    <li>Nulla vitae elit libero, a pharetra augue.</li>
                </ul>
                <p>Donec ullamcorper nulla non metus auctor fringilla. Nulla vitae elit libero, a pharetra augue.</p>
                <ul className='pl-[40px] list-decimal flex flex-col gap-2' >
                    <li>Vestibulum id ligula porta felis euismod semper.</li>
                    <li>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</li>
                    <li>Maecenas sed diam eget risus varius blandit sit amet non magna.</li>
                </ul>
                <p>
                    Cras mattis consectetur purus sit amet fermentum. Sed posuere consectetur est at lobortis.
                </p>
                <TextAnotherComponent/>
            </div>

        </main>
    )
}
