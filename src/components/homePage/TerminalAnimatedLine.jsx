function TerminalAnimatedLine({text,delay,last}) {
    if (!last) {
        return ( 
            <p className="max-w-fit tracking-tighter terminal-text " 
            style={{ animationDelay: `${delay}s` }}> {text}</p>
        );
    } else {
       return ( 
            <p className="max-w-fit tracking-tighter terminal-text terminal-text-end " 
            style={{ animationDelay: `${delay}s` }}> {text}</p>
        );
    }
    
}

export default TerminalAnimatedLine;