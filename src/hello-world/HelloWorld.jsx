export default function HelloWorld() {
    const props={
        text:"Hello World From Spread Syntax"
    }
    return (
        <div>
            <HeaderHelloWorld {...props}/>
            <ParagraphHelloWorld />
        </div>
    )
}

function HeaderHelloWorld({text="No Text Found"}) {
    return (
        <h1 style={{ color:"red", backgroundColor:"aqua" }}>{text.toUpperCase()}</h1>
    )
}

function ParagraphHelloWorld() {
    const text = "Selamat Belajar React"
    const style={
        color:"blue",
        backgroundColor:"yellow"
    }
    return (
        <p style={style}>{text.toLowerCase()}</p>
    )
}