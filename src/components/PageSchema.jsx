function PageSchema({ id, content, className = "" }) {
    return ( 
        <section id={id} className={`w-full flex justify-center items-center py-8 md:py-12 ${className}`}>
            <div className="w-full px-4 md:px-12 flex flex-col items-center">
                {content}
            </div>
        </section>
    );
}

export default PageSchema;