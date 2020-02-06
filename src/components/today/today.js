import React from 'react';
import './today.css';

function Today () {
    const actualDate = new Date();
    const monthName = ['Styczeń', 'Luty', 'Marzec', 'Kwiecień', 'Maj', 'Czerwiec', 'Lipiec', 'Sierpień', 'Wrzesień', 'Październik', 'Listopad', 'Grudzień'];
    const actualMonth = actualDate.getMonth();
    const actualDay = actualDate.getDate();
    const actualYear = actualDate.getFullYear();

    return (
        <div>
            <h1>{actualDay + ' ' + monthName[actualMonth] + ' ' + actualYear}</h1>
        </div>
    )
}

export default Today;