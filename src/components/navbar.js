import logo from "./logo";
import button from "./button"
import nav from "./nav"

function Navbar() {
    return(
        <div className='navbar bg-green-600'>
          <div className='container flex mx-auto items-center'>
             <div className="w-3/12">
               <logo/>
             </div>
             <div className="w-6/12">

               <nav/>
             </div>

             <div className="w-3/12">
               <button variant="outline-yellow">Kontak</button>
             </div>

             <div className="text-center-uppercase"></div>
          </div>
        </div>
    );
}
export default Navbar;