import { atom, getDefaultStore } from 'jotai';
import { atomWithImmer } from 'jotai-immer';
import { AlertStatus } from './useAlert';

type AlertItemType = {
  id: string;
  title: string;
  content: string;
};
export const alertAtom = atomWithImmer<{
  alerts: Array<AlertItemType & { resolve: (...args: any[]) => void }>;
}>({
  alerts: [],
});

export const alertOpenAtom = atom<
  null,
  [AlertItemType & { resolve: (...args: any[]) => void }],
  void
>(null, (get, set, alertItem) => {
  set(alertAtom, (_atom) => {
    _atom.alerts.push(alertItem);
  });
});

export const alertCloseAtom = atom<null, [string, AlertStatus], void>(
  null,
  (get, set, alertId, status) => {
    const currentAlert = get(alertAtom).alerts.find(
      (item) => item.id === alertId
    );
    if (currentAlert) {
      set(alertAtom, (_atom) => {
        _atom.alerts = _atom.alerts.filter((item) => item.id !== alertId);
      });
      currentAlert.resolve(status);
    }
  }
);
