/*--- https://blog.logrocket.com/how-to-build-component-library-react-typescript/

https://github.com/GovTechSG/sgds-govtech-react/blob/v2/rollup.config.js

 */

import { PATH } from './config/path.config';
import {
    createConfig,
    getFolders,
    safePackageName,
} from './config/rollup.config';

const packageJson = require(PATH.packagejson);

//--- folders including root access point
// const folders = ['', ...getFolders(pathSrc)];

const folders = getFolders(PATH.src);

const config = folders
    .map((folder) =>
        createConfig(
            packageJson,
            folder ? `${folder}/` : '',
            'index.ts'
        )
    )
    .flat();

//

export default config;