const State = { Created: {}, Doing: {}, Done: {} };
State.Created.next = State.Doing;
State.Created.name = 'created';
State.Doing.next = State.Done;
State.Doing.name = 'doing';
State.Done.next = State.Created;
State.Done.name = 'done';

export default State;
