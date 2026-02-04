import NavButton from "./NavButton";

function PageSchema({ pageId, content }) {
    return ( 
        <main className="flex justify-center items-center md:gap-10 min-h-dvh">
            <div className="hidden md:flex">
                <NavButton pageId={pageId} left={true} /> 
            </div>
            <section className="flex flex-col items-start 
                w-[calc(100vw-10px)] md:w-auto md:max-w-3/4 
                max-h-[85vh] md:max-h-[90vh] 
                bg-main-purple p-6 md:p-12 
                rounded-3xl md:rounded-4xl 
                mt-16 md:mt-5
                overflow-y-auto overscroll-none no-scrollbar"> 
                
                <div className="w-full flex flex-col items-center">
                    {content}
                </div>
            </section>
            
            <div className="hidden md:flex">
                <NavButton pageId={pageId} left={false} />
            </div>
        </main>
    );
}

export default PageSchema;