import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";

const StyledAccordionComponent = styled.div`
	display: flex;
	flex-direction: column;
	alig-items: center;
	justify-content: center;
	background: #fff;
	margin-bottom: 4vw;
`;

const StyledContainer = styled.div`
	box-shadow: 2px 10px 35px 1px rgba(153, 153, 153, 0.3);
	width: 80%;
	margin: auto;

	@media screen and (max-width: 800px) {
		width: 90%;
	}
`;

const StyledWrap = styled.div`
	background: #000;
	color: rgb(255, 255, 255);
	display: flex;
	-webkit-box-pack: justify;
	justify-content: center;
	-webkit-box-align: center;
	align-items: center;
	width: 100%;
	text-align: center;
	cursor: pointer;
	h1 {
		padding: 2rem;
		font-size: 2rem;
		color: #daa520;
	}
	span {
		margin-right: 1.5rem;
	}
`;

const StyledDropDown = styled.div`
	margin-top: 2vw;

	@media screen and (max-width: 800px) {
		margin-top: 4vw;
	}
`;

const AccordionComponent = ({ items }) => {
	const [clicked, setClicked] = useState(null);
	const toggle = (index) => {
		if (clicked === index) {
			return setClicked(null);
		}
		setClicked(index);
	};
	return (
		<StyledAccordionComponent>
			<StyledContainer>
				{items.map((item, index) => {
					return (
						<>
							<StyledWrap onClick={() => toggle(index)} key={index}>
								<h1>{item.question}</h1>
								<span>{clicked === index ? <FiMinus /> : <FiPlus />}</span>
							</StyledWrap>
							{clicked === index ? (
								<StyledDropDown>
									<div>{item.answer}</div>
								</StyledDropDown>
							) : null}
						</>
					);
				})}
			</StyledContainer>
		</StyledAccordionComponent>
	);
};

export default AccordionComponent;
