//notification for create
    export const showNotif = (title, body) => {
        if(Notification.permission === 'granted') {
          new Notification('title', { body })
        } else if (Notification.permission !== 'denied') {
          Notification.requestPermission().then((permission) => {
            if (permission === 'granted') {
              new Notification('title', {body })
            }
          })
        }
      }
//notification for delete
    export const showNotifDelete = (title, body) => {
        if(Notification.permission === 'granted') {
          new Notification('title', { body })
        } else if (Notification.permission !== 'denied') {
          Notification.requestPermission().then((permission) => {
            if (permission === 'granted') {
              new Notification('title', {body })
            }
          })
        }
      }