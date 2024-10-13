export  default function Newsletter(){
    return (
        <>
        <div className="w-full h-auto  flex flex-col items-center justify-evenly gap-8 mb-16 newsletter">
        <p className="text-3xl font-serif font-bold tracking-wide">Never Miss A Recipe!</p>
        <p className="tracking-wide font-thin text-gray-700">Join thousands of our subscribers and get our best recipes delivered each week!</p>
        <form action="" className="w-full flex flex-col items-center gap-2">
            <input type="email" placeholder="Email Address" className="text-left w-1/2 border border-1 border-gray-400 py-1 px-3 "/>
            <button id="btn">SUBSCRIBE</button>
        </form>
        </div>
        </>
    )
}
