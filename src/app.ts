import m from 'mithril';
import 'material-icons/iconfont/material-icons.css';
import 'materialize-css/dist/css/materialize.min.css';
import './css/style.css';
import { routingSvc } from './services/routing-service';
import { registerServiceWorker } from './services/register-service-worker';

console.log(JSON.stringify(process.env));

registerServiceWorker({
  onSuccess: (registration) => console.log('SW registered: ', registration),
  onUpdate: (registration) => console.log('SW updated: ', registration),
});
// if ('serviceWorker' in navigator) {
//   window.addEventListener('load', () => {
//     navigator.serviceWorker
//       .register('/service-worker.js')
//       .then((registration) => {
//         console.log('SW registered: ', registration);
//       })
//       .catch((registrationError) => {
//         console.log('SW registration failed: ', registrationError);
//       });
//   });
// }

m.route(document.body, routingSvc.defaultRoute, routingSvc.routingTable());
