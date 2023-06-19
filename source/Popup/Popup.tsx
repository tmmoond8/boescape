import * as React from "react";
// import { browser, Tabs } from "webextension-polyfill-ts";

import "./styles.scss";

// function openWebPage(url: string): Promise<Tabs.Tab> {
//   return browser.tabs.create({ url });
// }

const Popup: React.FC = () => {
  const [log, setLog] = React.useState("");
  const handleClick = (): void => {
    const chrome = (globalThis as any).chrome;
    if (!chrome) {
      setLog("return");
      return;
    }
    setLog("gogo");
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs: any) => {
      chrome.tabs.executeScript(tabs[0].id, {
        code: `
          document.body.style.backgroundColor = "red"
        `,
      });
    });
  };

  return (
    <section id="popup">
      <h2>이스케이프 문자 </h2>
      <label htmlFor="escape-activation">
        <input
          id="escape-activation"
          type="checkbox"
          onChange={(e) => {
            handleClick();
            // if (e.target.checked) {
            // }
            console.log("e", e.target.checked);
          }}
        />
        활성화2
        <p>{log}</p>
      </label>
    </section>
  );
};

export default Popup;
