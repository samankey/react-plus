import { Subject, bufferTime, filter, map, timer, zip } from 'rxjs';
/**
 * 참고 자료 Flowchart
 * https://mermaid.live/edit#pako:eNptU8tu00AU_ZWr2XST_EAWSEmc8gFlZ3cxcSa0kEfl2CBUVbLASFEThItqxQgnCqKlIGUxSR3UBfyQ5_ofGHfspIVYsjV3fM65Z861T4nZbzFSIe1O_7V5RC0bnmlGD-RVrepi7CZ3HDBc49wVKw_w3RS95SGUy0-gWtMPnOYLZtqA8VDi0s-XUAacxmJ1lZ7fgbzF90Wy5KB0cBIf5tI1pVDX-80Bs14x67HE6Arn0f-sumJpGxZOfDBpp9Ok5ktI1gvx8X2B1RS2oQ8Kjzt8pcEPHIYgq9TbdGkopr6XcHdvyxI8kqdPgxAni51iOIpwdlGo3IvUiu5SCnDuidFC8C84HecoFUN9i_qEUw-K02UkCU9u54CBJ2bS6IUvN_HGfWAAV6E0kAuqhDQd15FMDxLpeRje6_ih-Blv3ZZAhL44v4QcmWc9ihLuSW0QN2PxbfwvC_ArT5bxo2YNfYeE7BxsR5jj1Uj2VdF4WOzrm1nLmAJxG4vr39lKauSJi7ex-OXmQ8aZn41eJaq-xqf65hXgn0jwZYYQH7g8TerxAmv0VEf1JCXSZVaXHrfkH3Ca7RnEPmJdZpCKXLZYmzod2yBG70xCqWP3D970TFKxLYeViHPSojbTjulzi3ZJpU07A3b2F4gsppQ
 * @returns
 */
export function createTaskQueueObserver<T>(
  /**
   * 최대 대기 목록
   */
  queueSize: number,
  /**
   * 최대 대기 시간
   */
  timeout: number,
  /**
   * 작업 함수
   */
  callback: (data: Array<T>) => void
) {
  const subject = new Subject<T>();
  const observer = zip(
    timer(0, timeout),
    subject.pipe(bufferTime(timeout, undefined, queueSize))
  );
  observer
    .pipe(
      filter((tasks) => !!tasks[1].length),
      map((tasks) => tasks[1])
    )
    .subscribe(callback);
  return (task: T) => {
    subject.next(task);
  };
}
