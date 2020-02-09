import React from 'react';
import './plannerSection.css';
import PlannerSectionCell from '../planner section cell/plannerSectionCell.js';

function PlannerSection() {

    return(
        <div>
            <h1>Schedule</h1>
            <div>
                <PlannerSectionCell/>
            </div>
        </div>
    )
}

export default PlannerSection;