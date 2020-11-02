/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage container.
 */
import { defineMessages } from 'react-intl';

export const scope = 'app.containers.HomePage';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'Strona wirtualnego szlaku przez całe Sudety',
  },
  lead: {
    id: `${scope}.lead`,
    defaultMessage: '500km trasy, 20km przewyższenia, mnóstwo gór, historii i bez nadmiernych asfaltów',
  },
});
