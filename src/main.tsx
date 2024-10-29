import {chromium} from "playwright";
import {renderToString} from "react-dom/server";
import * as React from 'react'

import App from './component';


(async () => {
  const browser = await chromium.launch({headless: false});
  const page = await browser.newPage();

  const htmlContent = renderToString(<App/>)

  await page.setContent(htmlContent);

  await page.emulateMedia({ media: 'screen' });
  await page.pdf({ path: 'page.pdf' });
})();
