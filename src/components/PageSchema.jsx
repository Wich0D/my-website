import NavButton from "./NavButton";

function PageSchema({pageId,content}) {
    return ( 
        <main className='flex justify-center items-center gap-10'>
            <NavButton pageId={pageId} left={true}/>
            <section className="flex justify-center items-center  min-h-screen  mt-5
                flex-col bg-main-purple p-12  rounded-4xl gap-10 max-w-3/4 ">
                {content}
            </section>
            <NavButton pageId={pageId} left={false}/>
        </main>
     );
}

export default PageSchema;