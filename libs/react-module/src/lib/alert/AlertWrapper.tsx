import { useAtom, useAtomValue, useSetAtom } from 'jotai';
import { alertAtom, alertCloseAtom } from './alert.atom';
import { Alert } from '@gubgoo-backoffice/design-system';
import { AlertStatus } from './useAlert';
import { AlertBackdropStyle, AlertWrapperStyle } from './alert.css';
const AlertBackdrop = ({ children }: React.PropsWithChildren) => {
  return (
    <div className={AlertWrapperStyle}>
      <div className={AlertBackdropStyle}></div>
      <div style={{ zIndex: 2, position: 'relative', minWidth: '250px' }}>
        {children}
      </div>
    </div>
  );
};
export const AlertWrapper = (props: React.PropsWithChildren) => {
  const { alerts } = useAtomValue(alertAtom);
  const setCloseAlert = useSetAtom(alertCloseAtom);
  if (alerts.length > 0) {
    return (
      <AlertBackdrop>
        {alerts.map((alertItem) => {
          return (
            <Alert
              key={alertItem.id}
              title={alertItem.title}
              content={alertItem.content}
              confirm="확인"
              cancel="취소"
              onConfirm={(e) => {
                setCloseAlert(alertItem.id, AlertStatus.OK);
              }}
              onCancel={(e) => {
                setCloseAlert(alertItem.id, AlertStatus.CANCEL);
              }}
            />
          );
        })}
      </AlertBackdrop>
    );
  }
  return null;
};
