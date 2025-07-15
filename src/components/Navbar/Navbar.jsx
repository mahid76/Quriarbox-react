import { IoIosSearch } from "react-icons/io";
import logo from "../../assets/Logo.png";
import Container from "../Layout/Container";

const Navbar = () => {
	return (
		<div className="py-4 bg-[radial-gradient(at_50%_50%,_rgba(255,255,255,0.7)_0%,_rgba(255,255,255,0.15)_100%)]">
			<Container>
				<div className="flex justify-between items-center">
					<div>
						<img src={logo} alt="" />
					</div>
					<div className="flex items-center ">
						<div>
							<ul className="flex gap-x-[25px] items-center font-primary  font-bold text-[#817382] ">
								<li>
									<a href="#">Home</a>
								</li>
								<li>
									<a href="#">Our services</a>
								</li>
								<li>
									<a href="#">About Us</a>
								</li>
								<li>
									<a href="#">What’s new?</a>
								</li>
							</ul>
						</div>
						<div className="ml-[45px] flex items-center gap-x-[9px]">
							<div>
								<a
									className="w-[49px] h-[49px] rounded-[6px] bg-[#FFEDC9] flex justify-center items-center  "
									href="#"
								>
									<IoIosSearch size={25} color="#FFAF0F" />
								</a>
							</div>
							<div>
                <a className="py-3 px-5 rounded-[5px] font-secondary font-bold text-[20px] text-primary bg-[#FFE4D9]" href="#">
                  Contact us
                </a>
              </div>
						</div>
					</div>
				</div>
			</Container>
		</div>
	);
};

export default Navbar;
