function Footer (props){
    const date = new Date()
    return <>
        <footer className="flex flex-col items-center justify-center w-full h-24 border-t bg-gray-100 fixed bottom-0">
            <p>©{date.getFullYear()} - Mauricio Del Río</p>
        </footer>
    </>
}

export default Footer