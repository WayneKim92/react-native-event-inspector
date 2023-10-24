// TODO: Make it!

export interface EventHistoryType<T> {
  name: T;
}

class EventHistory<T> {
  private eventHistoryStack: T[] = [];

  constructor() {}

  public pushEvent(event: T) {
    this.eventHistoryStack.push(event);
  }

  public popEvent() {
    this.eventHistoryStack.pop();
  }
  clearEvent() {
    this.eventHistoryStack = [];
  }
}

export class EventInspector {
  private eventHistory: EventHistory<EventHistoryType<EVENTS>>;

  constructor() {
    this.eventHistory = new EventHistory<EventHistoryType<EVENTS>>();
  }

  public addEvent(event: EventHistoryType<EVENTS>) {
    this.eventHistory.pushEvent(event);
  }


}

type EVENTS = 'Event' | 'Event2';
