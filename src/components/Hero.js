import logo from "../images/big-logo.png";
import DefaultButton from "./Button";
import { socialLinks } from "../data";

const Hero = () => {
	return (
		<section className="hero" id="home">
			<div className="hero-banner">
				<img src={logo} className="nav-logo" alt="SpeedForce Racing" />
				<p>Speed Force Racing are recruiting for our 20th season of clean, competitive league racing for F126 on PS5. All abilities are welcome.</p>
				<p>Join our Discord server for information on how to join us on the grid.</p>
				<a href="https://discord.gg/8hB3MMfGy4">
					<DefaultButton>
						Join our Discord server <i class="fab fa-discord"></i>
					</DefaultButton>
				</a>
				<ul className="footer-icons">
					{socialLinks.map((link) => {
						const { id, href, icon } = link;
						return (
							<li key={id}>
								<a href={href} className="footer-icon">
									<i className={icon}></i>
								</a>
							</li>
						);
					})}
				</ul>
			</div>
		</section>
	);
};

export default Hero;
