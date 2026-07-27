function PageSchema({ id, content, className = "" }) {
    return ( 
        <section id={id} className={`w-full min-h-screen flex justify-center items-center py-20 ${className}`}>
            <div className="w-full px-4 md:px-12 flex flex-col items-center">
                {content}
            </div>
        </section>
    );
}

export default PageSchema;