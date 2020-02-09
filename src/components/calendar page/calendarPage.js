import React from 'react';
import './calendarPage.css';

function CalendarPage() {
    const monthName = ['Styczeń', 'Luty', 'Marzec', 'Kwiecień', 'Maj', 'Czerwiec', 'Lipiec', 'Sierpień', 'Wrzesień', 'Październik', 'Listopad', 'Grudzień'];
    const actualDate = new Date();
    const actualYear = actualDate.getFullYear();
    const actualMonth = actualDate.getMonth();

    let selectedYear = 2020;
    let selectedMonth = 2;
    let selectedMonthcount = selectedMonth + 1;

    const lastDayOfMounth = (month, year) => new Date(year, month, 0).getDate();
    const firstDayOfMounth = new Date(selectedYear, selectedMonth, 1).getDay();
    const daySwitch = (day) => day === 0 ? 6 : day -1; //offset of the days of the month from the week days table and handling sunday the first cases
    const tableCells = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42];
   
    function tableSetter() {
        for(let i = 0; i < 42; i++) {
            tableCells[i] -= daySwitch(firstDayOfMounth);
            if (tableCells[i] < 1) {    
                tableCells[i] = null
            }
            if (tableCells[i] > lastDayOfMounth(selectedMonthcount, selectedYear)) {
                tableCells[i] = null
            }
        }
    }
    tableSetter();
    return (
        <table>
            <thead>
                <tr className="table_head">
                    <th colSpan='7'>{monthName[selectedMonth] + " " + selectedYear}</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th>Pon</th>
                    <th>Wt</th>
                    <th>Śr</th>
                    <th>Czw</th>
                    <th>Pt</th>
                    <th>So</th>
                    <th>Nd</th>
                </tr>
                <tr>
                    <td>{tableCells[0]}</td>
                    <td>{tableCells[1]}</td>
                    <td>{tableCells[2]}</td>
                    <td>{tableCells[3]}</td>
                    <td>{tableCells[4]}</td>
                    <td>{tableCells[5]}</td>
                    <td>{tableCells[6]}</td>
                </tr>
                <tr>
                    <td>{tableCells[7]}</td>
                    <td>{tableCells[8]}</td>
                    <td>{tableCells[9]}</td>
                    <td>{tableCells[10]}</td>
                    <td>{tableCells[11]}</td>
                    <td>{tableCells[12]}</td>
                    <td>{tableCells[13]}</td>
                </tr>
                <tr>
                    <td>{tableCells[14]}</td>
                    <td>{tableCells[15]}</td>
                    <td>{tableCells[16]}</td>
                    <td>{tableCells[17]}</td>
                    <td>{tableCells[18]}</td>
                    <td>{tableCells[19]}</td>
                    <td>{tableCells[20]}</td>
                </tr>
                <tr>
                    <td>{tableCells[21]}</td>
                    <td>{tableCells[22]}</td>
                    <td>{tableCells[23]}</td>
                    <td>{tableCells[24]}</td>
                    <td>{tableCells[25]}</td>
                    <td>{tableCells[26]}</td>
                    <td>{tableCells[27]}</td>
                </tr>
                <tr>
                    <td>{tableCells[28]}</td>
                    <td>{tableCells[29]}</td>
                    <td>{tableCells[30]}</td>
                    <td>{tableCells[31]}</td>
                    <td>{tableCells[32]}</td>
                    <td>{tableCells[33]}</td>
                    <td>{tableCells[34]}</td>
                </tr>
                <tr>
                    <td>{tableCells[35]}</td>
                    <td>{tableCells[36]}</td>
                    <td>{tableCells[37]}</td>
                    <td>{tableCells[38]}</td>
                    <td>{tableCells[39]}</td>
                    <td>{tableCells[40]}</td>
                    <td>{tableCells[41]}</td>
                </tr>
            </tbody>
            <tfoot>
                <tr><td></td></tr>
            </tfoot>
        </table>
    )
}

export default CalendarPage