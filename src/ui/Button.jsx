import { Link } from "react-router-dom"

function Button({ children, disabled, to, type, onClick }) {


    const base = "bg-yellow-400 text-sm uppercase font-semibold tracking-wide text-stone-800 inline-block rounded-full  hover:bg-yellow-300 transition-colors duration-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:bg-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed "
    const styles = {

        primary: base + ' py-2.5 px-4 md:px-6 md:py-3.5',
        small: base + ' py-2 px-2 md:px-5 md:py-2.5 text-xs',
        round: base + ' py-1 px-2.5 md:px-3.5 md:py-2 text-sm',
        secondary: " text-sm  py-3 px-4 md:px-6 md:py-4 uppercase font-semibold tracking-wide text-stone-400 inline-block border-2 border-stone-300 rounded-full hover:text-stone-800 hover:bg-stone-300 transition-colors duration-300 focus:text-stone-800 focus:outline-none focus:ring focus:ring-stone-200 focus:bg-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed "
    }
    if (to) return <Link to={to} className={styles[type]}>{children}</Link>

    if (onClick) return (
        <button onClick={onClick} className={styles[type]} disabled={disabled} >
            {children}

        </button>
    )


    return (
        <button className={styles[type]} disabled={disabled} >
            {children}

        </button>
    )
}

export default Button
