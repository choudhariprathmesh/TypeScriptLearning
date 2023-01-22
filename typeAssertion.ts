function load(): unknown {
    return 'Hello World ';
     }
    let hello = load();
    // const trimmed = hello.trim();
const trimmed = ( hello as string).trim();
