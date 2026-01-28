import NavButton from "./NavButton";

function PageSchema({pageId,content}) {
    return ( 
        <main className='flex justify-center items-center gap-10'>
            <NavButton pageId={pageId} left={true}/>
            
            {/* 1. Cambiamos items-center por items-start */}
            {/* 2. Aseguramos que el scroll fluya desde el inicio */}
            <section className="flex items-start overflow-y-auto overscroll-none no-scrollbar
                flex-col bg-main-purple p-12 rounded-4xl gap-10 max-w-3/4 max-h-[90vh] mt-5">
                
                {/* Envolvemos el content para asegurar que el contenido interno esté centrado horizontalmente si lo deseas */}
                <div className="w-full flex flex-col items-center">
                    {content}
                </div>
                
            </section>
            
            <NavButton pageId={pageId} left={false}/>
        </main>
    );
}

export default PageSchema;