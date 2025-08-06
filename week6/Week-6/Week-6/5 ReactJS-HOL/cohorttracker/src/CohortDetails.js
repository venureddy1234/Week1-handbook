import React from 'react';
import styles from './CohortDetails.module.css';

function CohortDetails(props) {
    const cohort = props.cohort;

    return (
        <div className={styles.box}>
            <h3 style={{ color: cohort.currentStatus.toLowerCase().trim() === "ongoing" ? "green" : "blue" }}>
                Cohort: {cohort.name} ({cohort.cohortCode}) -
                <span> {cohort.technology}</span>
            </h3>

            <dl>
                <dt>Started On</dt>
                <dd>{cohort.startDate}</dd>
                <dt>Current Status</dt>
                <dd>{cohort.currentStatus}</dd>
                <dt>Coach</dt>
                <dd>{cohort.coachName}</dd>
                <dt>Trainer</dt>
                <dd>{cohort.trainerName}</dd>
            </dl>
        </div>
    );
}

export default CohortDetails;
