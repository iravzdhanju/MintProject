import { useWallet, WalletStatus } from "@terra-money/wallet-provider";
import React from "react";
import { CW20TokensSample } from "./CW20TokensSample";
import { NetworkSample } from "./NetworkSample";
import { QuerySample } from "./QuerySample";
import { SignBytesSample } from "./SignBytesSample";
import { SignSample } from "./SignSample";
import { TxSample } from "./TxSample";

import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";

const user = {
  name: "Tom Cook",
  email: "tom@example.com",
  imageUrl:
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};
const navigation = [
  { name: "Dashboard", href: "#", current: true },
  { name: "Team", href: "#", current: false },
  { name: "Projects", href: "#", current: false },
  { name: "Calendar", href: "#", current: false },
  { name: "Reports", href: "#", current: false },
];
const userNavigation = [
  { name: "Your Profile", href: "#" },
  { name: "Settings", href: "#" },
  { name: "Sign out", href: "#" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export function HomePage() {
  const {
    status,
    network,
    wallets,
    availableConnectTypes,
    availableInstallTypes,
    availableConnections,
    supportFeatures,
    connect,
    install,
    disconnect,
  } = useWallet();

  return (
    <div>
      {/* <h1>Connect Sample</h1>
      <section>
        <pre>
          {JSON.stringify(
            {
              status,
              network,
              wallets,
              supportFeatures: Array.from(supportFeatures),
              availableConnectTypes,
              availableInstallTypes,
            },
            null,
            2,
          )}
        </pre>
      </section>

      <footer>
        {status === WalletStatus.WALLET_NOT_CONNECTED && (
          <>
            {availableInstallTypes.map((connectType) => (
              <button
                key={'install-' + connectType}
                onClick={() => install(connectType)}
              >
                Install {connectType}
              </button>
            ))}
            {availableConnectTypes.map((connectType) => (
              <button
                key={'connect-' + connectType}
                onClick={() => connect(connectType)}
              >
                Connect {connectType}
              </button>
            ))}
            <br />
            {availableConnections.map(
              ({ type, name, icon, identifier = '' }) => (
                <button
                  key={'connection-' + type + identifier}
                  onClick={() => connect(type, identifier)}
                >
                  <img
                    src={icon}
                    alt={name}
                    style={{ width: '1em', height: '1em' }}
                  />
                  {name} [{identifier}]
                </button>
              ),
            )}
          </>
        )}
        {status === WalletStatus.WALLET_CONNECTED && (
          <button onClick={() => disconnect()}>Disconnect</button>
        )}

      </footer> */}

      <div className="container"></div>

      {/* <div className="h-screen bg-black">
        <div className="md:container md:mx-auto bg-indigo-500 w-16 md:w-32 lg:w-48">
          <h3 className="decoration-gray-50">Status - {status}</h3> */}

      {/* <div className="div">
            {availableConnectTypes.map((connectType) => (
              <button
                key={"connect-" + connectType}
                onClick={() => connect(connectType)}
              >
                Connect {connectType}
              </button>
            ))}
          </div>

          <div className="buttons">
            {status === WalletStatus.WALLET_CONNECTED && (
              <button onClick={() => disconnect()}>Disconnect</button>
            )}
          </div> */}
      {/* <h3 className='decoration-gray-50'>Connected Network - {network}</h3> */}
      {/* <h3 className='decoration-gray-50'>{status}</h3> */}
      {/* <QuerySample />
          <TxSample />
          <SignSample />
          <SignBytesSample />
          <CW20TokensSample />

          <NetworkSample />
        </div>
      </div> */}
    </div>
  );
}
