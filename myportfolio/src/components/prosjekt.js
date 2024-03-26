import React from "react";

const prosjektListe = [
    "Kart over treningssentre",
    "DatingApp",
    "Reiseplanlegger",
    "Minesweeper"
];

const prosjekter = prosjektListe.map((prosjekt) =>
    <li>{prosjekt}</li>
);

function Prosjekt() {
    return (
        <div>

            <ol>
                {prosjektListe.map((prosjekt) =>
                <li>{prosjekt}</li>
                )}
            </ol>
        </div>
    );
}

export default Prosjekt;