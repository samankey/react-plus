import { useSetAtom } from 'jotai';
import { alertOpenAtom } from './alert.atom';
import { useCallback } from 'react';
import { nanoid } from 'nanoid';

export enum AlertStatus {
  OK = 'OK',
  CANCEL = 'CANCEL',
}

export function useAlert() {
  const setAlertOpen = useSetAtom(alertOpenAtom);

  const open = useCallback(
    async ({ title, content }: { title: string; content: string }) => {
      return await new Promise<AlertStatus>((resolve) => {
        setAlertOpen({
          id: nanoid(),
          title,
          content,
          resolve,
        });
      });
    },
    []
  );

  return {
    open,
  };
}
