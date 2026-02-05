import NavButton from "./NavButton";

function PageSchema({ pageId, content }) {
    return ( 
        <main className="relative flex justify-center items-start md:gap-10 min-h-dvh py-10">
            <div className="hidden sc900:flex sticky top-0 h-dvh items-center">
                <NavButton pageId={pageId} left={true} /> 
            </div>
            <section className="flex flex-col items-start 
                w-[calc(100vw-10px)] md:w-auto md:max-w-3/4 
                bg-main-purple p-6 pl-2 pr-2 md:p-12 
                rounded-3xl md:rounded-4xl 
                mt-16 md:mt-20
                /* Ya no hay overflow interno, el scroll es del body */"> 
                
                <div className="w-full flex flex-col items-center">
                    {content}
                </div>
            </section>
            <div className="hidden sc900:flex sticky top-0 h-dvh items-center">
                <NavButton pageId={pageId} left={false} />
            </div>
        </main>
    );
}

export default PageSchema;