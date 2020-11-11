import React from 'react';
import Image from 'images/own_alt.png';
import './rules.scss';

const OwnRouteComponent = () => (
  <div className='rules-content'>
    <div className='rules-header'>
      Nigdy nie wiesz, co na trasie akurat się wydarzy. Każdy turysta czy biegacz planuje swoją wycieczkę inaczej. GSS 2.0 przeprowadziliśmy
      raczej z dala od miejscowości i w niektórych miejscach mamy kilkudziesięcio kilometrowe przeloty bez większej cywilizacji. Aby wyjść naprzeciw
      zdobywcom tej trasy pozwalamy, aby nieco modyfikować trasę, by unikać bezsensownego chodzenia w celach noclegowych czy aprowizacyjnych.
    </div>

    <div className='rules-subheader'>
      Kiedy można wybrać własny wariant? Nasza filozofia tutaj jest prosta - jeśli wybrana przez Was trasa nie jest łatwiejsza niż oficjalny
      przebieg szlaku. Jeśli wasza alternatywa ma więcej kilometrów bądź przewyższeń to możecie spokojnie taką opcję użyć.
    </div>

    <div className='rules-example'>
      <div className='rules-example-image'>
        <img src={Image} width='100%'/>
      </div>
      <div className='rules-example-explanation'>
        Trasa GSS 2.0 przebiega zielonym szlakiem między <strong>Przełęczą Lądecką</strong> a <strong>ruinami zamku Karpień</strong>. Turyści mogą jednak chcieć <strong>zejść do Lądka</strong>, aby uzupełnić zapasy, albo
        skorzystać z noclegu. Po zejściu żółtym szlakiem do centrum miasta nie ma najmniejszego sensu, by wracał tę samą nieciekawą drogą, zamiast wrócić
        na szlak niebieskim szlakiem przez ładną górę Trojak.

      </div>
    </div>
  </div>
);

export default OwnRouteComponent;
