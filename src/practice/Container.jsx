import './Practice.css'
export default function Container({children}){
    return(
        <div>
            <h1 className="title">This is the header</h1>
            {children}
            <footer className='footer'>
                <h2>This is the footer</h2>
            </footer>
        </div>
    );
}