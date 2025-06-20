export default function Layout(props) {

    const { children } = props

    const header = (
        <header>
            <h1 className="text-gradient">The Brogram</h1>
            <p><strong>The 30 Simple Workouts Program</strong></p>
        </header>
    )

    const footer = (
        <footer>
            <p>By <a target="_blank" href="https://www.linkedin.com/in/vladimir-pavlov-0126b7368/">Vladimir Pavlov</a> see the repo on <a target="_blank" href="https://github.com/VladimirPavlovv">GitHub</a> styled with <a target="_blank" href="https://www.fantacss.smoljames.com/">FantaCSS</a></p>
        </footer>
    )

    return (
        <>
            {header}
            {children}
            {footer}
        </>
    )
}