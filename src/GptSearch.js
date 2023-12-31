import GptSearchRes from "./GptSearchRes";
import Header from "./Header";

const GptSearch = ()=>{
    return (
        <div>
            <div className="fixed ">
                <img className="h-screen object-cover md:h-[100%]" src="https://assets.nflxext.com/ffe/siteui/vlv3/b4c7f092-0488-48b7-854d-ca055a84fb4f/5b22968d-b94f-44ec-bea3-45dcf457f29e/IN-en-20231204-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="logo"/>
            </div>
            <div className="">
            <Header/>
            </div>
            <GptSearchRes/>
        </div>
    )
}

export default GptSearch;