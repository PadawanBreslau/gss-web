import { call } from 'redux-saga/effects';

export function* registerPush() {
  try {
    if (!navigator.serviceWorker) return;
    const registration = yield navigator.serviceWorker.ready;

    const permission = yield call(Notification.requestPermission);
    if (permission !== 'granted') {
      console.log('Notifications permission denied'); // eslint-disable-line no-console
      return;
    }

    let subscription = yield registration.pushManager.getSubscription();
    if (!subscription) {
      subscription = yield registration.pushManager.subscribe({
        userVisibleOnly: true,
      });
    }
    console.log('[PUSH SUBSCRIPTION READY]'); // eslint-disable-line no-console
    // TODO: send subscription to backend
  } catch (err) {
    console.error('Error subscribing to push notifications', err); // eslint-disable-line no-console
  }
}

export default function* defaultSaga() {
  yield registerPush();
}
