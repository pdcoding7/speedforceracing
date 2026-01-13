import logo from "../images/big-logo.png";
import DefaultButton from "./Button";

const Hero = () => {
	return (
		<section className="hero" id="home">
			<div className="hero-banner">
				<img src={logo} className="nav-logo" alt="SpeedForce Racing" />
				<p>Speed Force Racing are recruiting for our 19th season of clean, competitive league racing for F125 on PS5. All abilities are welcome.</p>
				<p>Join our Discord server for information on how to join us on the grid.</p>
				<a href="https://discord.gg/8hB3MMfGy4">
					<DefaultButton>
						Join our Discord server <i class="fab fa-discord"></i>
					</DefaultButton>
				</a>
			</div>
		</section>
	);
};

export default Hero;
