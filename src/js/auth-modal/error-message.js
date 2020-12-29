import { alert } from '@pnotify/core';
import "@pnotify/core/dist/PNotify.css";
import "@pnotify/core/dist/BrightTheme.css";


export default function pushError(error) {
    alert({
      title: `${error}`,
      delay: 1500
    });
  }