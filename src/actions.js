const uid = () => Math.random().toString(34).slice(2);

export function addTodo(text) {
  return {
    type: 'ADD_TODO',
    payload: {
      id: uid(),
      isDone: false,
      text: text,
      priority: false
    }
  };
}

export function toggleTodo(id) {
  return {
    type: 'TOGGLE_TODO',
    payload: id
  }
}

export function clearCompleted() {
  return {
    type: 'CLEAR_COMPLETED'
  }
}

export function deleteTodo(id) {
  return {
    type: 'DELETE_TODO',
    payload: id
  }
}

export function togglePriority(id) {
  return {
    type: 'TOGGLE_PRIORITY',
    payload: id
  }
}
