import React from 'react'
import { TextNewComponent } from '../TextNewComponent/TextNewComponent'

export const TextAnotherComponent = () => {
    return (
        <div className='mt-10 flex flex-col gap-4'>
            <div className='flex flex-col gap-1 mb-[16px]'>
                <h2 className='text-[24px]'>Another blog post</h2>
                <p className='text-[12px]'>March 23, 2020 by <a className="text-[#90CAF9]">Matt</a></p>
            </div>
            <p>
                Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean eu leo quam.<br />
                Pellentesque ornare sem lacinia quam venenatis vestibulum. Sed posuere consectetur est at lobortis. Cras mattis<br />
                consectetur purus sit amet fermentum.
            </p>
            <p>
                Curabitur blandit tempus porttitor. Nullam quis risus eget urna mollis ornare vel eu leo. Nullam id dolor id nibh <br />
                ultricies vehicula ut id elit.
            </p>
            <p>
                Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean <br />
                lacinia bibendum nulla sed consectetur.
            </p>
            <p>
                Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus, nisi erat<br />
                orttitor ligula, eget lacinia odio sem nec elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
            </p>

            <TextNewComponent/>
        </div>
    )
}
