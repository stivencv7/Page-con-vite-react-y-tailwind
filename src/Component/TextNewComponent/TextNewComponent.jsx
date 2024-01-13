export const TextNewComponent = () => {
    return (
        <div className='mt-10 flex flex-col gap-4'>
            <div className='flex flex-col gap-1 mb-[16px]'>
                <h2 className='text-[24px]'>New feature</h2>
                <p className='text-[12px]'>March 14, 2020 by <a className="text-[#90CAF9]">Tom</a></p>
            </div>
            <p>
                Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean lacinia<br />
                bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac<br />
                cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.<br />
            </p>
            <ul className='list-disc pl-[40px] flex flex-col gap-2' >
                <li >Praesent commodo cursus magna, vel scelerisque nisl consectetur et.</li>
                <li>Donec id elit non mi porta gravida at eget metus.</li>
                <li>Nulla vitae elit libero, a pharetra augue.</li>
            </ul>

            <p>
                Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean <br />
                lacinia bibendum nulla sed consectetur.
            </p>
            <p>Donec ullamcorper nulla non metus auctor fringilla. Nulla vitae elit libero, a pharetra augue.</p>
            
        </div>
    )
}
