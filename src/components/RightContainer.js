import React from "react";
import Grid from "@material-ui/core/Grid";
import { useTranslation } from "react-i18next";
import I18nFlags from "./auxiliary/I18nFlags";
import MultiParagraph from "./auxiliary/MultiParagraph";
import CustomH2 from "./auxiliary/CustomH2";
import CustomH3 from "./auxiliary/CustomH3";
import Paragraph from "./auxiliary/Paragraph";
import PlaceAndPeriod from "./auxiliary/PlaceAndPeriod";
import Qualifications from "./auxiliary/Qualifications";

const RightContainer = () => {
	const { t, i18n } = useTranslation();

	const changeLanguage = lng => {
		i18n.changeLanguage(lng);
		document.title = t("page-title");
	};

	return (
		<Grid item xs={8} className="right-container">
			<div className="right-content-container">
				<div className="job-period">
					<h1>Marcelo Wippel</h1>
					<div className="flags">
						<I18nFlags changeLanguage={changeLanguage} />
					</div>
				</div>
				<hr />

				<MultiParagraph fields={["bio-1", "bio-2", "bio-3", "bio-4"]} />

				<CustomH2 title="exp-title" />
				<div className="experiences">
					<div>
						<CustomH3 title="exp-occupation-1" />
						<PlaceAndPeriod
							href="https://www.teclogica.com.br/"
							placeName="Teclógica"
							startDate="10/2018"
						/>
						<Paragraph title="exp-1-1" />
						<Paragraph title="exp-1-2">
							<b>Backend Stack: </b>
						</Paragraph>
						<Paragraph title="exp-1-3">
							<b>Frontend Stack: </b>
						</Paragraph>
					</div>
					<div>
						<hr />
						<CustomH3 title="exp-occupation-2" />
						<PlaceAndPeriod
							href="http://www.publica.inf.br/"
							placeName="Pública Tecnologia"
							startDate="08/2016 - 10/2018"
						/>
						<Paragraph title="exp-2-1" />
						<Paragraph title="exp-2-2">
							<b>Backend Stack: </b>
						</Paragraph>
						<Paragraph title="exp-2-3">
							<b>Frontend Stack: </b>
						</Paragraph>
					</div>
					<div>
						<hr />
						<CustomH3 title="exp-occupation-3" />
						<PlaceAndPeriod
							href="http://www.publica.inf.br/"
							placeName="Pública Tecnologia"
							startDate="03/2016 - 08/2016"
						/>
						<Paragraph title="exp-3-1" />
						<Paragraph title="exp-3-2">
							<b>Main Stack: </b>
						</Paragraph>
					</div>
				</div>

				<CustomH2 title="qualifications-title" />
				<Qualifications numbers={[1, 2, 3, 4]} />

				<CustomH2 title="certifications" />
				<div className="certifications">
					<ul className="no-padding-ul">
						<li>Oracle Certified Associate, Java SE 8 Programmer I</li>
						<li>Oracle Certified Professional, Java SE 8 Programmer II</li>
						<li>
							React - The Complete Guide (
							<a
								className="whiteLink"
								href="https://www.udemy.com/certificate/UC-MGGEOZH6/"
								target="_blank"
								rel="noopener noreferrer"
							>
								{t("certificate")}
							</a>
							)
						</li>
					</ul>
				</div>

				<CustomH2 title="languages-title" />
				<div className="languages">
					<ul className="no-padding-ul">
						<li>{t("languages-1")}</li>
						<li>{t("languages-2")}</li>
					</ul>
				</div>
			</div>
		</Grid>
	);
};

export default RightContainer;
