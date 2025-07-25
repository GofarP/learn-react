import './Practice.css'
export default function header() {
    return (
        <div>
            <HeaderHelloWorld text="Baru Masukin Teks" number="1" />
            <SubText />
        </div>
    );
}

function HeaderHelloWorld({ text = "Lupa Masukin Text", number = 0 }) {
    return (
        <div>
            <h1 class="text-3xl text-red-600 font-bold underline">
                Hello world!
            </h1>
            <h3 className="content">{number % 2 == 0 ? text.toUpperCase() : text.toLowerCase()}</h3>
        </div>
    )

}

function SubText({ text = "Lupa Text" }) {
    return (
        <p>{text}</p>
    )
}

