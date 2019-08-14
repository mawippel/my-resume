import React from "react";
import Grid from "@material-ui/core/Grid";
import { useTranslation } from "react-i18next";
import brFlag from "../assets/brazil-flag.png";
import usFlag from "../assets/us-flag.png";

const RightContainer = () => {
	const { t, i18n } = useTranslation();

	const changeLanguage = lng => {
		i18n.changeLanguage(lng);
		document.title = t('page-title')
	};

	return (
		<Grid item xs={8} className="right-container">
			<div>

			</div>
			<div className="right-content-container">
				<div className="job-period">
					<h1>Marcelo Wippel</h1>
					<div className="flags">
						<img
							src={brFlag}
							onClick={() => changeLanguage("pt")}
							alt="Brazil Flag"
							className="flag"
						/>
						<img
							src={usFlag}
							onClick={() => changeLanguage("en")}
							alt="US Flag"
							className="flag"
						/>
					</div>
				</div>
				<hr />
				<div>
					<p>{t("bio-1")}</p>
					<p>{t("bio-2")}</p>
					<p>{t("bio-3")}</p>
					<p>{t("bio-4")}</p>
				</div>

				<h2>{t("exp-title")}</h2>
				<hr />
				<div className='experiences'>
					<div>
						<h3>{t("exp-occupation-1")}</h3>
						<div className="job-period">
							<a href="https://www.teclogica.com.br/">
								<h4 className="job-period-subtitle">Teclógica</h4>
							</a>
							<h4 className="job-period-subtitle">10/2018 - {t("now")}</h4>
						</div>
						<p>{t("exp-1-1")}</p>
						<p>
							<b>Backend Stack:</b> {t("exp-1-2")}
						</p>
						<p>
							<b>Frontend Stack:</b> {t("exp-1-3")}
						</p>
					</div>
					<hr />
					<div>
						<h3>{t("exp-occupation-2")}</h3>
						<div className="job-period">
							<a href="http://www.publica.inf.br/">
								<h4 className="job-period-subtitle">Pública Tecnologia</h4>
							</a>
							<h4 className="job-period-subtitle">08/2016 - 10/2018</h4>
						</div>

						<p>{t("exp-2-1")}</p>
						<p>
							<b>Backend Stack:</b> {t("exp-2-2")}
						</p>
						<p>
							<b>Frontend Stack:</b> {t("exp-2-3")}
						</p>
					</div>

					<hr />
					<div>
						<h3>{t("exp-occupation-3")}</h3>
						<div className="job-period">
							<a href="http://www.publica.inf.br/">
								<h4 className="job-period-subtitle">Pública Tecnologia</h4>
							</a>
							<h4 className="job-period-subtitle">03/2016 - 08/2016</h4>
						</div>

						<p>{t("exp-3-1")}</p>
						<p>
							<b>Main Stack:</b> {t("exp-3-2")}
						</p>
					</div>
				</div>

				<h2>{t("qualifications-title")}</h2>
				<hr />
				<div className='qualifications'>
					<p>{t("qualifications-subtitle-1")}</p>
					<ul>
						<li>{t("qualifications-desc-1")}</li>
					</ul>

					<p>{t("qualifications-subtitle-2")}</p>
					<ul>
						<li>{t("qualifications-desc-2")}</li>
					</ul>

					<p>{t("qualifications-subtitle-3")}</p>
					<ul>
						<li>{t("qualifications-desc-3")}</li>
					</ul>

					<p>{t("qualifications-subtitle-4")}</p>
					<ul>
						<li>{t("qualifications-desc-4")}</li>
					</ul>
				</div>

				<h2>{t('certifications')}</h2>
				<hr />
				<div className='languages'>
					<ul className='no-padding-ul'>
						<li>Oracle Certified Associate, Java SE 8 Programmer I</li>
						<li>Oracle Certified Professional, Java SE 8 Programmer II</li>
						<li>
							React - The Complete Guide (
							<a
								className="whiteLink"
								href="https://www.udemy.com/certificate/UC-MGGEOZH6/"
							>
								{t('certificate')}
							</a>
							)
						</li>
					</ul>
				</div>

				<h2>{t('languages-title')}</h2>
				<hr />
				<div className='languages'>
					<ul className='no-padding-ul'>
						<li>{t('languages-1')}</li>
						<li>{t('languages-2')}</li>
					</ul>
				</div>
			</div>
		</Grid>
	);
};

export default RightContainer;
