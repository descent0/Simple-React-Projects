export default function Navbar(){
    return(
        <>
        <div className=" flex pl-10 pr-10 items-center justify-between h-[72px] w-screen">
            <div>
                <img src="/brandpage/brand_logo.png" alt="nike-logo" />
            </div>
            <div className="flex w-[333px] h-[24px] justify-evenly text-black">
                <a  href="Menu">Menu</a>
                <a href="Location">Location</a>
                <a href="About">About</a>
                <a href="Contact">Contact</a>
            </div>
            <div>
                <button className="bg-[#D01C28] text-white w-[75px] h-[31px]">Login</button>
            </div>
        </div>
        </>
    );
}