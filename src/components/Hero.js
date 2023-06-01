import logo from "../images/big-logo.png";
import DefaultButton from "./Button";

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-banner">
        <img src={logo} className="nav-logo" alt="SpeedForce Racing" />
        <p>
          Speed Force Racing has just finished our 13th season of quality,
          competitive league racing. Now recruiting for F1 23, all abilities are
          welcome.
        </p>
        <p>
          Join our Discord server for information on how to join. Recruiting
          now!
        </p>
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
