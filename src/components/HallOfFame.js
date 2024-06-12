import AccordionComponent from "./AccordionComponent";
import { hofConfig } from "../data";
import { currentHofConfig } from "../data";
import SectionTitle from "./SectionTitle";

const HallOfFame = () => {
	return (
		<section className="section" id="hallOfFame">
			<SectionTitle sectionTitle="Hall of Fame"></SectionTitle>
			<div className="fameFlex">
				{currentHofConfig.map((seasonNum) => {
					const { id, season, src } = seasonNum;
					return (
						<div className="flexDiv">
							<div key={id}>
								<h2>Season {season}</h2>
								<img src={src} alt={`Season ${season} Champions`} />
							</div>
						</div>
					);
				})}
			</div>
			<AccordionComponent
				items={[
					{
						question: "Seasons 1-12",
						answer: (
							<div className="fameFlex">
								{hofConfig.map((seasonNum) => {
									const { id, season, src } = seasonNum;
									return (
										<div className="flexDiv">
											<div key={id}>
												<h2>Season {season}</h2>
												<img src={src} alt={`Season ${season} Champions`} />
											</div>
										</div>
									);
								})}
							</div>
						),
					},
				]}
			/>
		</section>
	);
};

export default HallOfFame;
