
export const ImgsComponent = () => {
    return (
        <main className="flex flex-col gap-7">
            
            <div className="rounded-[4px] bg-[url(./assets/imgs/rascacielo.jpeg)] bg-cover bg-center h-[14em] xl:h-[23em] w-full p-0 xl:p-[24px] pl-[50px] ">
                <div className="flex flex-col gap-5 w-[100%] xl:w-[50%]">
                    <h1 className="text-[3rem]">Title of a longer featured blog post</h1>
                    
                    <p className="text-[24px] text-white">Multiple lines of text that form the lede, informing new readers quickly and 
                        efficiently about what's most interesting in this post's contents.
                    </p>

                    <a className="text-[#90CAF9]">Continue reading…</a>
                </div>
               

            </div>
           
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-10 p-1 box-border">
                
                <div className="flex bg-[#424242]  w-full rounded-[4px]">
                    <div className=" p-[20px] w-80% xl:w-[75%]">
                        <h2 className="font-bold text-[24px] text-white">Featured post</h2>
                        <h6 className="text-[#FFFFFFB3]">Nov 12</h6>
                        <p className="text-white">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                        <br />
                        <a className="text-[#90CAF9]">Continue reading…</a>
                    </div>
                    <div className="bg-[url(./assets/imgs/rascacielo.jpeg)] bg-cover  w-[21%] xl:w-[25%]">

                    </div>
                </div>
                
                <div className="flex bg-[#424242] w-full rounded-[4px]">
                    
                    <div className="p-[20px] w-80% xl:w-[75%]">
                        <h2 className="font-bold text-[24px] text-white">Featured post</h2>
                        <h6 className="text-[#FFFFFFB3]">Nov 12</h6>
                        <p className="text-white">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                        <br />
                        <a className="text-[#90CAF9]">Continue reading…</a>
                    </div>
                    <div className="bg-[url(./assets/imgs/rascacielo.jpeg)] bg-cover w-[21%] xl:w-[25%]">

                    </div>
                </div>

            </div>
        </main>
    )
}
