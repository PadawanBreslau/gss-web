import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import { Link } from  'react-router-dom';
import { Eco, EmojiEvents, ThumbUp, Forward } from '@material-ui/icons';
import './rules.scss';

const RulesComponent = () => (
  <div className='rules-content'>
    <div className='rules-header'>
      Najważniejsze dla nas jest to, byście spędzili świetny czas w górach. Ale skoro jest trasa, to na pewno będą chętni
      by 'odznaczyć' swoją obecność czy ustanowić rekord trasy. Dlatego ustaliliśmy kilka arbitralnych zasad nt. przejścia szlaku by mógł być
      przez nas uznany za ukończony lub wliczony do naszych rekordów
    </div>

    <div className='rules-subheader'>
      Zasady ogólne
    </div>
    <div className='rules-list'>
      <div className='rules-list-element'><Eco /><span className='element'>Nie śmiecimy, nie hałasujemy, nie niszczymy przyrody, pomagamy sobie nawzajem. To oczywiste</span></div>
      <div className='rules-list-element'><Eco /><span className='element'>Nie oceniamy sposobu, w jaki inni zdobywają szlak. Jedni lubią biegać, drudzy siedzieć przy ognisku. Sam lubię oba.</span></div>
      <div className='rules-list-element'><Eco /><span className='element'>Bądźmy sobie po prostu przyjaźni :)</span></div>
    </div>

    <div className='rules-subheader'>
      Ukończenie GSS 2.0
    </div>
    <div className='rules-list'>
      <div className='rules-list-element'><Forward /><span className='element'>Należy przejść wszystkie odcinki z których składa się trasa</span></div>
      <div className='rules-list-element'><Forward /><span className='element'>Odcinek można przejść wariantem głównym lub alternatywnym</span></div>
      <div className='rules-list-element'><Forward /><span className='element'>Odcinki można przechodzić etapami, nie trzeba wszystkiego na raz</span></div>
      <div className='rules-list-element'><Forward /><span className='element'>Jeśli już kiedyś przeszedłeś dany odcinek, nie musisz go powtarzać. Możesz, jeśli chcesz :)</span></div>
      <div className='rules-list-element'><Forward /><span className='element'>Trasę można przejść w obie strony. Aczkolwiek oficjalnym początkiem jest Bardo</span></div>
      <div className='rules-list-element'><Forward /><span className='element'>Pozwalamy na własne <Link to={'/own_route'}>modyfikacje trasy</Link></span></div>
    </div>

    <div className='rules-subheader'>
       Rekord na GSS 2.0
    </div>
    <div className='rules-list'>
      <div className='rules-list-element'><EmojiEvents /><span className='element'>Należy przejść wszystkie odcinki z których składa się trasa</span></div>
      <div className='rules-list-element'><EmojiEvents /><span className='element'>Trasę należy przejść głównym wariantem GSS 2.0</span></div>
      <div className='rules-list-element'><EmojiEvents /><span className='element'>Trasę należy przejść za jednym podejściem, przerwy wliczają się w czas próby</span></div>
      <div className='rules-list-element'><EmojiEvents /><span className='element'>Rekord jest niezależny od kierunku, ale będą też klasyfikacje oddzielne</span></div>
    </div>

    <div className='rules-subheader'>
       Weryfikacja
    </div>
    <div className='rules-list'>
      <div className='rules-list-element'><ThumbUp /><span className='element'>Jeśli chcesz być na liście oficjalnych finisherów GSS 2.0 musisz to w jakiś sposób zweryfikować, jednak wystarczy nam cokolwiek - relacje, zdjęcia, pliki z trasą ,filmy.</span></div>
      <div className='rules-list-element'><ThumbUp /><span className='element'>W przypadku walczących o rekord podstawą do weryfikacji będzie plik lub pliki z przebiegiem aktywności lub inny dowód jak dla finisherów, ale koniecznie zawierający godzinę startu i mety.</span></div>
    </div>

  </div>
);

export default RulesComponent;
