import React from 'react';
import { Link } from 'react-router-dom';
import { Eco, EmojiEvents, ThumbUp, Forward } from '@material-ui/icons';
import './rules.scss';

const RulesComponent = () => (
  <div className="rules-content">
    <div className="rules-header">
      Najważniejsze dla nas jest, byście spędzili świetny czas w górach. Ale skoro jest trasa, to
      na pewno będą chętni by &#39;odznaczyć&#39; swoją obecność czy ustanowić rekord trasy. Dlatego
      ustaliliśmy kilka arbitralnych zasad nt. przejścia szlaku by mógł być przez nas uznany za
      ukończony lub wliczony do naszych rekordów.
    </div>

    <div className="rules-subheader">Zasady ogólne</div>
    <div className="rules-list">
      <div className="rules-list-element">
        <Eco />
        <span className="element">
          Nie śmiecimy, nie hałasujemy, nie niszczymy przyrody, pomagamy sobie nawzajem i jesteśmy sobie nawzajem przyjaźni.
        </span>
      </div>
      <div className="rules-list-element">
        <Eco />
        <span className="element">
          Nie oceniamy sposobu, w jaki inni zdobywają szlak. Jedni lubią biegać, drudzy siedzieć wieczorami
          przy ognisku, jeszcze inni robią 10 zdjęć na każdy kilometr wędrówki. Każdy sposób przejścia trasy jest dobry.
        </span>
      </div>
    </div>

    <div className="rules-subheader">Ukończenie GSS 2.0</div>
    <div className="rules-list">
      <div className="rules-list-element">
        <Forward />
        <span className="element">Należy przejść wszystkie odcinki, z których składa się trasa</span>
      </div>
      <div className="rules-list-element">
        <Forward />
        <span className="element">Odcinek można przejść wariantem głównym lub wariantem alternatywnym</span>
      </div>
      <div className="rules-list-element">
        <Forward />
        <span className="element">Odcinki można przechodzić etapami w różnych terminach.</span>
      </div>
      <div className="rules-list-element">
        <Forward />
        <span className="element">Trasę można przejść w obie strony. Oficjalnym początkiem jest Bardo</span>
      </div>
      <div className="rules-list-element">
        <Forward />
        <span className="element">
          Pozwalamy na własne <Link to="/own_route"><span className='ownRoute'>modyfikacje trasy</span></Link>
        </span>
      </div>
    </div>

    <div className="rules-subheader">Rekord na GSS 2.0</div>
    <div className="rules-list">
      <div className="rules-list-element">
        <EmojiEvents />
        <span className="element">Należy przejść wszystkie odcinki z których składa się trasa</span>
      </div>
      <div className="rules-list-element">
        <EmojiEvents />
        <span className="element">Trasę należy przejść głównym wariantem GSS 2.0, bez wariantów alternatywnych lub własnych modyfikacji</span>
      </div>
      <div className="rules-list-element">
        <EmojiEvents />
        <span className="element">
          Trasę należy przejść za jednym podejściem, przerwy wliczają się w czas próby
        </span>
      </div>
      <div className="rules-list-element">
        <EmojiEvents />
        <span className="element">
          Rekord jest niezależny od kierunku, ale będą też oddzielne klasyfikacje
        </span>
      </div>
    </div>

    <div className="rules-subheader">Weryfikacja</div>
    <div className="rules-list">
      <div className="rules-list-element">
        <ThumbUp />
        <span className="element">
          Jeśli chcesz być na liście oficjalnych finisherów GSS 2.0 musisz to w jakiś sposób
          zweryfikować, jednak wystarczy nam cokolwiek - relacja na stronie internetowej, zdjęcia, pliki z trasą, filmy.
        </span>
      </div>
      <div className="rules-list-element">
        <ThumbUp />
        <span className="element">
          W przypadku walczących o rekord podstawą do weryfikacji będzie plik lub pliki z
          przebiegiem aktywności lub inny dowód zawierający godzinę startu i mety.
        </span>
      </div>
    </div>
  </div>
);

export default RulesComponent;
