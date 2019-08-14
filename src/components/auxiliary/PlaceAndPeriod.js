import React from 'react';
import { useTranslation } from "react-i18next";

const PlaceAndPeriod = props => {
	const { t } = useTranslation();

	return (
		<div className="job-period">
			<a href={props.href} target="_blank" rel="noopener noreferrer">
				<h4 className="job-period-subtitle">{props.placeName}</h4>
			</a>
			<h4 className="job-period-subtitle">{props.startDate} - {t("now")}</h4>
		</div>
	)
}

export default PlaceAndPeriod;
