import React from 'react';
import {Group, Teams} from '../types';

interface PropsType {
    groupName: Group;
    teams: Teams;
}
const GroupItem = (props: PropsType) => {
    const {groupName, teams} = props;

    return (
        <li>
            <h2>Group {groupName}</h2>
            <table>
                <thead>
                    <tr>
                        <th scope="col">Team</th>
                        <th scope="col">Continent</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td rowSpan={1} className="country-field">
                            <div className="img-wrap">
                                <img src="../assets/countries/AR.gif" alt="" />
                            </div>
                            <p className="country-name">{teams.length ? teams[0].name : ''}</p>
                        </td>
                        <td rowSpan={1}>
                            <p className="continent-name">{teams.length ? teams[0].continent.toUpperCase() : ''}</p>
                        </td>
                    </tr>
                    <tr>
                        <td rowSpan={1} className="country-field">
                            <div className="img-wrap">
                                <img src="../assets/countries/JP.gif" alt="" />
                            </div>
                            <p className="country-name">{teams.length >= 2 ? teams[1].name : ''}</p>
                        </td>
                        <td rowSpan={1}>
                            <p className="continent-name">{teams.length >= 2 ? teams[1].continent.toUpperCase() : ''}</p>
                        </td>
                    </tr>
                    <tr>
                        <td rowSpan={1} className="country-field">
                            <div className="img-wrap">
                                <img src="../assets/countries/KOR.png" alt="" />
                            </div>
                            <p className="country-name">{teams.length >= 3 ? teams[2].name : ''}</p>
                        </td>
                        <td rowSpan={1}>
                            <p className="continent-name">{teams.length >= 3 ? teams[2].continent.toUpperCase() : ''}</p>
                        </td>
                    </tr>
                    <tr>
                        <td rowSpan={1} className="country-field">
                            <div className="img-wrap">
                                <img src="../assets/countries/POR.png" alt="" />
                            </div>
                            <p className="country-name">{teams.length >= 4 ? teams[3].name : ''}</p>
                        </td>
                        <td rowSpan={1}>
                            <p className="continent-name">{teams.length >= 4 ? teams[3].continent.toUpperCase() : ''}</p>
                        </td>
                    </tr>
                </tbody>
            </table>
        </li>
    );
};

export default GroupItem;
