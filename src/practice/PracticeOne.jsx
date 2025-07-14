import './Practice.css'
export default function header() {
    return (
        <div>
            <HeaderHelloWorld text="Baru Masukin Teks" />
        </div>
    );
}

function HeaderHelloWorld({ text = "Lupa Masukin Text", number }) {
    return (
        <div>
            <h3 className="content">{text.toUpperCase()}</h3>
        </div>
    )
}

