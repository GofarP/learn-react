import './HelloWorld.css'
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
        <h1 className='title'>{text.toUpperCase()}</h1>
    )
}

function ParagraphHelloWorld() {
    const text = "Selamat Belajar React"
    const style={
        color:"blue",
        backgroundColor:"yellow"
    }
    return (
        <p className='content'>{text.toLowerCase()}</p>
    )
}