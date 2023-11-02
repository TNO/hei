import m from 'mithril';
import { Select } from 'mithril-materialized';
import { render } from 'mithril-ui-form';
import { Dashboards } from '../models';
import { MeiosisComponent } from '../services';

const md = (highlight = false) => `#### About

This website offers an overview of state-of-the-art interventions to enhance human performance. In order to use it, contact TNO to obtain the JSON database file describing all interventions.

##### Disclaimer

**This platform is intended for informational purposes only and it does not provide medical advice.** It is not a substitute for professional medical advice, diagnosis or treatment. The information, including but not limited to, text, graphics, images and other material contained on this website are for informational purposes only. No material on this site is intended to be a substitute for professional medical advice, diagnosis or treatment. The use and/or implementation of information presented on this platform is users own responsibility. TNO is not liable for the information which is offered on and/or via this platform.

##### How to use this platform

###### Ministry of Defence employee

<p class="${highlight ? 'red-text' : ''
  }">In order to use this platform, you will need to upload a configuration file (JSON) on the home page. You can request the latest version of this configuration file by contacting the HCSE (Human Capability & Survivability Enhancement) program leader, [Olaf Binsch](mailto:olaf.binsch@tno.nl). Without this file, there will be no interventions displayed on the platform.</p>

You can use this platform to browse through the collection of intervention technologies on the overview page. You can use filters in the Advanced Search bar to specify what you are looking for in an intervention.

By selecting ‘Compare’, recognizable by the <i class="material-icons">balance</i> icon, for different intervention technologies, you can view them alongside each other on the Compare page. Bookmarking an intervention allows you to find them more easily next time you visit the platform. If you have any questions about the HCSE interventions, you can contact the expert that is listed at the bottom of each intervention page.

###### Administrator

If you are an administrator and you want to contribute to the platform by adding or updating an HCSE intervention, you can change the current user to administrator. This allows you to add and change interventions using the button "Add new intervention". Remember that the changes will only be saved locally on your own PC. If you want to implement your changes in the master file, do the following:

1. Make sure you have uploaded the latest configuration file from the HCSE sharepoint folder
2. Implement you changes or additions to the platform
3. Download your new configuration file (.json) and place this file in the HCSE sharepoint folder as the new master file. Make sure to move the previous version into the Archive folder.

**HCSE program leader:** [Olaf Binsch](mailto:olaf.binsch@tno.nl)<br>**Email:** olaf.binsch@tno.nl 
`;

export const AboutPage: MeiosisComponent = () => {
  return {
    oninit: ({
      attrs: {
        actions: { setPage },
      },
    }) => setPage(Dashboards.ABOUT),
    view: ({
      attrs: {
        state: { curUser, model },
        actions: { saveCurUser },
      },
    }) => {
      const isCleared = !model || !model.interventions || model.interventions.length === 0;
      if (!curUser) saveCurUser('mod');
      return [
        m('.row', [
          [
            m(Select, {
              key: curUser,
              label: 'Current user',
              initialValue: curUser,
              placeholder: 'Select user',
              options: [
                { id: 'mod', label: 'Defence employee' },
                { id: 'admin', label: 'Administrator' },
              ],
              // data: users.reduce((acc, cur) => {
              //   acc[cur.name] = cur.url || null;
              //   return acc;
              // }, {} as Record<string, string | null>),
              onchange: (v) => v && saveCurUser(v[0] as string),
              className: 'col s6',
            }),
          ],
          // m(FlatButton, {
          //   label: 'Logout',
          //   onclick: () => saveCurUser(''),
          //   iconName: 'logout',
          //   className: 'col s6',
          // }),
        ]),
        m('.row', m.trust(render(md(isCleared)))),
      ];
    },
  };
};
