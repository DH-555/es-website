import type { RequestHandler } from '@sveltejs/kit';

const llmsContent = `# https://appwrite.io/docs/ llms-full.txt

## Appwrite Tutorials
[Skip to content](https://appwrite.io/docs/tutorials#main)

[![appwrite](https://appwrite.io/images/logos/appwrite.svg)![appwrite](https://appwrite.io/images/logos/appwrite-light.svg)](https://appwrite.io/)

[Go to Console](https://cloud.appwrite.io/)

## Web

- [Build an ideas tracker with Nuxt](https://appwrite.io/docs/tutorials/nuxt)
- [Build an ideas tracker with React](https://appwrite.io/docs/tutorials/react)
- [Build an ideas tracker with Vue.js](https://appwrite.io/docs/tutorials/vue)
- [Build an ideas tracker with SvelteKit](https://appwrite.io/docs/tutorials/sveltekit)
- [Build a blog admin panel with Refine](https://appwrite.io/docs/tutorials/refine)

## Mobile and native

- [Build an ideas tracker with Android](https://appwrite.io/docs/tutorials/android)
- [Build an ideas tracker with React Native](https://appwrite.io/docs/tutorials/react-native)

## Auth

- [Server-side authentication with Astro](https://appwrite.io/docs/tutorials/astro-ssr-auth)
- [Server-side authentication with Next.js](https://appwrite.io/docs/tutorials/nextjs-ssr-auth)
- [Server-side authentication with SvelteKit](https://appwrite.io/docs/tutorials/sveltekit-ssr-auth)
- [Authentication with SvelteKit](https://appwrite.io/docs/tutorials/sveltekit-csr-auth)

## Functions

- [Add app subscriptions with Stripe](https://appwrite.io/docs/tutorials/subscriptions-with-stripe)

###### Recommended

- [API reference/Account](https://appwrite.io/docs/references/cloud/client-web/account)
- [API reference/Teams](https://appwrite.io/docs/references/cloud/client-web/teams)
- [API reference/Databases](https://appwrite.io/docs/references/cloud/client-web/databases)
- [API reference/Storage](https://appwrite.io/docs/references/cloud/client-web/storage)

## Appwrite API References
[Skip to content](https://appwrite.io/docs/references#main)

[![appwrite](https://appwrite.io/images/logos/appwrite.svg)![appwrite](https://appwrite.io/images/logos/appwrite-light.svg)](https://appwrite.io/)

[Go to Console](https://cloud.appwrite.io/)

Appwrite lets you build integrations on web, mobile, native, and server platforms through a set of APIs. You can use one of our many [SDKs](https://appwrite.io/docs/sdks) or integrate directly through the [REST API](https://appwrite.io/docs/apis/rest) or [GraphQL API](https://appwrite.io/docs/apis/graphql).

### [Client vs Server APIs](https://appwrite.io/docs/references\#client-vs-server)

Client APIs and SDKs are for integrating with Appwrite to build client-based applications and websites. Client APIs only give access to resources if users have been [granted permissions](https://appwrite.io/docs/advanced/platform/permissions).

Server API and SDKs are for integrating with Appwrite to build backend or server applications. Server APIs are constrained by an [API key's](https://appwrite.io/docs/advanced/platform/api-keys) scope, ignoring user permissions.

### [APIs](https://appwrite.io/docs/references\#api)

Before using the Appwrite APIs, in the **Settings** of your Appwrite project, obtain your **API endpoint** and **Project ID**. Client APIs require an active session, created from [signing up and logging in](https://appwrite.io/docs/products/auth/accounts#signup-login). Server APIs require [API keys](https://appwrite.io/docs/advanced/platform/api-keys).

![Project settings screen](https://appwrite.io/images/docs/quick-starts/dark/project-id.png)

![Project settings screen](https://appwrite.io/images/docs/quick-starts/project-id.png)

- [Add signup, login, logout, and other common authentication methods to client apps.](https://appwrite.io/docs/references/cloud/client-web/account)
- [Manage users from an admin scope to build server integrations.](https://appwrite.io/docs/references/cloud/server-nodejs/users)
- [Group users to share access to documents, files, and functions.](https://appwrite.io/docs/references/cloud/client-web/teams)
- [Scalable and robust database backed by your favorite technologies.](https://appwrite.io/docs/references/cloud/client-web/databases)
- [Build and deploy websites on the internet at scale.](https://appwrite.io/docs/references/cloud/server-nodejs/sites)
- [Securely store files with advanced compression, encryption and image transformations.](https://appwrite.io/docs/references/cloud/client-web/storage)
- [Deploy and scale serverless functions in secure, isolated runtimes.](https://appwrite.io/docs/references/cloud/client-web/functions)
- [Send push notifications, SMS, or emails to users or groups of users using your app.](https://appwrite.io/docs/references/cloud/server-nodejs/messaging)
- [Create and manage temporary access tokens for secure file sharing and resource access control.](https://appwrite.io/docs/references/cloud/server-nodejs/tokens)
- [Utility APIs to customize your app based on your users' location.](https://appwrite.io/docs/references/cloud/client-web/locale)
- [Complete everyday tasks related to your app image, icons, and avatars.](https://appwrite.io/docs/references/cloud/client-web/avatars)

### [Error handling](https://appwrite.io/docs/references\#error-handling)

When building with Appwrite, implement proper error handling to provide user-friendly messages instead of exposing raw error responses. For implementation details and best practices, refer to our [Error handling guide](https://appwrite.io/docs/advanced/platform/error-handling) and [Response codes](https://appwrite.io/docs/advanced/platform/response-codes#error-types) documentation.

###### Recommended

- [API reference/Account](https://appwrite.io/docs/references/cloud/client-web/account)
- [API reference/Teams](https://appwrite.io/docs/references/cloud/client-web/teams)
- [API reference/Databases](https://appwrite.io/docs/references/cloud/client-web/databases)
- [API reference/Storage](https://appwrite.io/docs/references/cloud/client-web/storage)

## Appwrite SDKs Overview
[Skip to content](https://appwrite.io/docs/sdks#main)

[![appwrite](https://appwrite.io/images/logos/appwrite.svg)![appwrite](https://appwrite.io/images/logos/appwrite-light.svg)](https://appwrite.io/)

[Go to Console](https://cloud.appwrite.io/)

Appwrite provides SDK libraries for major programming languages and platforms so you don't have to write code for interacting with our API protocols from scratch.

We're always working on improving and extending the current stack of available platforms and SDKs, listed below is a list of official libraries the Appwrite team is maintaining.

## [Client](https://appwrite.io/docs/sdks\#client)

Client libraries for integrating with Appwrite to build client-based applications and websites. Read one of the many [quick starts](https://appwrite.io/docs/quick-starts) guides for your framework of choice to start building your first application.

|  | Platform | GitHub Repository |  |
| --- | --- | --- | --- |
| ![Javascript logo](https://appwrite.io/images/platforms/dark/javascript.svg)![Javascript logo](https://appwrite.io/images/platforms/javascript.svg) | Web SDK 18.0.0 | [appwrite/sdk-for-web](https://github.com/appwrite/sdk-for-web) |  |
| ![Flutter logo](https://appwrite.io/images/platforms/dark/flutter.svg)![Flutter logo](https://appwrite.io/images/platforms/flutter.svg) | Flutter SDK 16.0.0 | [appwrite/sdk-for-flutter](https://github.com/appwrite/sdk-for-flutter) |  |
| ![React logo](https://appwrite.io/images/platforms/dark/react.svg)![React logo](https://appwrite.io/images/platforms/react.svg) | React Native SDK 0.9.0 | [appwrite/sdk-for-react-native](https://github.com/appwrite/sdk-for-react-native) | beta |
| ![Apple logo](https://appwrite.io/images/platforms/dark/apple.svg)![Apple logo](https://appwrite.io/images/platforms/apple.svg) | Apple SDK 10.0.0 | [appwrite/sdk-for-apple](https://github.com/appwrite/sdk-for-apple) |  |
| ![Android logo](https://appwrite.io/images/platforms/dark/android.svg)![Android logo](https://appwrite.io/images/platforms/android.svg) | Android SDK 8.0.0 | [appwrite/sdk-for-android](https://github.com/appwrite/sdk-for-android) |  |

## [Server](https://appwrite.io/docs/sdks\#server)

Server libraries for integrating with Appwrite to build server side integrations or use inside your [Appwrite Functions](https://appwrite.io/docs/products/functions). Read one of the many [quick starts](https://appwrite.io/docs/quick-starts) guides for your language/runtime of choice to start building your first server integration.

|  | Platform | GitHub Repository |  |
| --- | --- | --- | --- |
| ![Node.js logo](https://appwrite.io/images/platforms/dark/nodejs.svg)![Node.js logo](https://appwrite.io/images/platforms/nodejs.svg) | Node.js SDK 17.0.0 | [appwrite/sdk-for-node](https://github.com/appwrite/sdk-for-node) |  |
| ![Python logo](https://appwrite.io/images/platforms/dark/python.svg)![Python logo](https://appwrite.io/images/platforms/python.svg) | Python SDK 11.0.0 | [appwrite/sdk-for-python](https://github.com/appwrite/sdk-for-python) |  |
| ![Dart logo](https://appwrite.io/images/platforms/dark/dart.svg)![Dart logo](https://appwrite.io/images/platforms/dart.svg) | Dart SDK 16.0.0 | [appwrite/sdk-for-dart](https://github.com/appwrite/sdk-for-dart) |  |
| ![PHP logo](https://appwrite.io/images/platforms/dark/php.svg)![PHP logo](https://appwrite.io/images/platforms/php.svg) | PHP SDK 15.0.0 | [appwrite/sdk-for-php](https://github.com/appwrite/sdk-for-php) |  |
| ![Ruby logo](https://appwrite.io/images/platforms/dark/ruby.svg)![Ruby logo](https://appwrite.io/images/platforms/ruby.svg) | Ruby SDK 16.0.0 | [appwrite/sdk-for-ruby](https://github.com/appwrite/sdk-for-ruby) |  |
| ![.NET logo](https://appwrite.io/images/platforms/dark/dotnet.svg)![.NET logo](https://appwrite.io/images/platforms/dotnet.svg) | .NET SDK 0.13.0 | [appwrite/sdk-for-dotnet](https://github.com/appwrite/sdk-for-dotnet) | beta |
| ![Deno logo](https://appwrite.io/images/platforms/dark/deno.svg)![Deno logo](https://appwrite.io/images/platforms/deno.svg) | Deno SDK 15.0.0 | [appwrite/sdk-for-deno](https://github.com/appwrite/sdk-for-deno) |  |
| ![Go logo](https://appwrite.io/images/platforms/dark/go.svg)![Go logo](https://appwrite.io/images/platforms/go.svg) | Go SDK 0.7.0 | [appwrite/sdk-for-go](https://github.com/appwrite/sdk-for-go) | beta |
| ![Swift logo](https://appwrite.io/images/platforms/dark/swift.svg)![Swift logo](https://appwrite.io/images/platforms/swift.svg) | Swift SDK 10.0.0 | [appwrite/sdk-for-swift](https://github.com/appwrite/sdk-for-swift) |  |
| ![Kotlin logo](https://appwrite.io/images/platforms/dark/kotlin.svg)![Kotlin logo](https://appwrite.io/images/platforms/kotlin.svg) | Kotlin SDK 9.0.0 | [appwrite/sdk-for-kotlin](https://github.com/appwrite/sdk-for-kotlin) |  |

If you would like to help us extend our platforms and SDKs stack, you are more than welcome to contact us or contribute to the [Appwrite SDK Generator](https://github.com/appwrite/sdk-generator) project GitHub repository and read our contribution guide.

## [Protocols](https://appwrite.io/docs/sdks\#protocols)

We are always looking to add new SDKs to our platform. If the SDK you are looking for is still missing, labeled as beta or experimental, or you simply do not want to integrate with an SDK, you can always integrate with Appwrite directly using any standard HTTP, GraphQL, or WebSocket clients and the relevant Appwrite protocol.

Appwrite supports multiple API protocols for maximum flexibility and developer convenience. You can learn more about how to integrate directly with them using one of the following available guides:

- [Integrate with the Appwrite Realtime API](https://appwrite.io/docs/apis/realtime)
- [Integrate with the Appwrite REST API](https://appwrite.io/docs/apis/rest)
- [Integrate with the Appwrite GraphQL API](https://appwrite.io/docs/apis/graphql)

## [Utility classes](https://appwrite.io/docs/sdks\#utility-classes)

Appwrite's SDKs provide useful utility classes to make your development experience easier. Use these classes and methods to reduce guess work and get better code suggestions in your IDE.

### [IDs](https://appwrite.io/docs/sdks\#ids)

Appwrite has utility classes to help you handle IDs. These generate the correct ID format to be passed to the Appwrite APIs.

Client SDKsServer SDKs

Client SDKsServer SDKs

```web-code client-web line-numbers
import { Client, Account } from "appwrite";

// Generate a unique ID
ID.unique()

// Generate a custom ID
ID.custom("my-custom-id")

```

```web-code server-nodejs line-numbers
const sdk = require('node-appwrite');

// Generate a unique ID
sdk.ID.unique()

// Generate a custom ID
sdk.ID.custom("my-custom-id")

```

Appwrite generates unique IDs that are both **random** and **ordered**. Appwrite IDs combine a timestamp prefix based on microseconds and a random UID string, formatted as <timestamp\_hex><uid\_hex>.

### [Enums](https://appwrite.io/docs/sdks\#enums)

Appwrite has enumeration classes for predefined strings used different parameters used for the Appwrite APIs.

These enums are available for authenticator type, name, OAuth provider, password hash types, browsers, authentication factors, index types, credit cards, image gravity, image format, relationship types, SMTP encryption, Function runtime, messaging provider type, compression algorithms, execution methods, and country flags.

Client SDKsServer SDKs

Client SDKsServer SDKs

You can discover the available enums in each SDK at the source.

|  | Platform | Enums |  |
| --- | --- | --- | --- |
| ![Javascript logo](https://appwrite.io/images/platforms/dark/javascript.svg)![Javascript logo](https://appwrite.io/images/platforms/javascript.svg) | Web SDK 14.0.1 | [appwrite/sdk-for-web](https://github.com/appwrite/sdk-for-web/tree/dev/src/enums) |  |
| ![Flutter logo](https://appwrite.io/images/platforms/dark/flutter.svg)![Flutter logo](https://appwrite.io/images/platforms/flutter.svg) | Flutter SDK 12.0.3 | [appwrite/sdk-for-flutter](https://github.com/appwrite/sdk-for-flutter/tree/dev/lib/src/enums) |  |
| ![React logo](https://appwrite.io/images/platforms/dark/react.svg)![React logo](https://appwrite.io/images/platforms/react.svg) | React Native SDK 0.1.0 | [appwrite/sdk-for-react-native](https://github.com/appwrite/sdk-for-react-native) | beta |
| ![Apple logo](https://appwrite.io/images/platforms/dark/apple.svg)![Apple logo](https://appwrite.io/images/platforms/apple.svg) | Apple SDK 5.0.0 | [appwrite/sdk-for-apple](https://github.com/appwrite/sdk-for-apple/tree/dev/Sources/AppwriteEnums) |  |
| ![Android logo](https://appwrite.io/images/platforms/dark/android.svg)![Android logo](https://appwrite.io/images/platforms/android.svg) | Android SDK 5.1.0 | [appwrite/sdk-for-android](https://github.com/appwrite/sdk-for-android/tree/dev/library/src/main/java/io/appwrite/enums) |  |

You can discover the available enums in each SDK at the source.

|  | Platform | Enums |  |
| --- | --- | --- | --- |
| ![Node.js logo](https://appwrite.io/images/platforms/dark/nodejs.svg)![Node.js logo](https://appwrite.io/images/platforms/nodejs.svg) | Node.js SDK 14.1.0 | [appwrite/sdk-for-node](https://github.com/appwrite/sdk-for-node/tree/dev/lib/enums) |  |
| ![Python logo](https://appwrite.io/images/platforms/dark/python.svg)![Python logo](https://appwrite.io/images/platforms/python.svg) | Python SDK 6.1.0 | [appwrite/sdk-for-python](https://github.com/appwrite/sdk-for-python/tree/dev/appwrite/enums) |  |
| ![Dart logo](https://appwrite.io/images/platforms/dark/dart.svg)![Dart logo](https://appwrite.io/images/platforms/dart.svg) | Dart SDK 12.1.0 | [appwrite/sdk-for-dart](https://github.com/appwrite/sdk-for-dart/blob/dev/lib/enums.dart) |  |
| ![PHP logo](https://appwrite.io/images/platforms/dark/php.svg)![PHP logo](https://appwrite.io/images/platforms/php.svg) | PHP SDK 12.1.0 | [appwrite/sdk-for-php](https://github.com/appwrite/sdk-for-php/tree/dev/src/Appwrite/Enums) |  |
| ![Ruby logo](https://appwrite.io/images/platforms/dark/ruby.svg)![Ruby logo](https://appwrite.io/images/platforms/ruby.svg) | Ruby SDK 12.1.0 | [appwrite/sdk-for-ruby](https://github.com/appwrite/sdk-for-ruby/tree/dev/lib/appwrite/enums) |  |
| ![.NET logo](https://appwrite.io/images/platforms/dark/dotnet.svg)![.NET logo](https://appwrite.io/images/platforms/dotnet.svg) | .NET SDK 0.10.1 | [appwrite/sdk-for-dotnet](https://github.com/appwrite/sdk-for-dotnet/tree/dev/src/Appwrite/Enums) |  |
| ![Deno logo](https://appwrite.io/images/platforms/dark/deno.svg)![Deno logo](https://appwrite.io/images/platforms/deno.svg) | Deno SDK 12.1.0 | [appwrite/sdk-for-deno](https://github.com/appwrite/sdk-for-deno/tree/dev/src/enums) |  |
| ![Go logo](https://appwrite.io/images/platforms/dark/go.svg)![Go logo](https://appwrite.io/images/platforms/go.svg) | Go SDK 0.2.0 | [appwrite/sdk-for-go](https://github.com/appwrite/sdk-for-go) | beta |
| ![Swift logo](https://appwrite.io/images/platforms/dark/swift.svg)![Swift logo](https://appwrite.io/images/platforms/swift.svg) | Swift SDK 6.1.0 | [appwrite/sdk-for-swift](https://github.com/appwrite/sdk-for-swift/tree/dev/Sources/AppwriteEnums) |  |
| ![Kotlin logo](https://appwrite.io/images/platforms/dark/kotlin.svg)![Kotlin logo](https://appwrite.io/images/platforms/kotlin.svg) | Kotlin SDK 6.1.0 | [appwrite/sdk-for-kotlin](https://github.com/appwrite/sdk-for-kotlin/tree/dev/src/main/kotlin/io/appwrite/enums) |  |

### [Queries and permissions](https://appwrite.io/docs/sdks\#queries-and-permissions)

Appwrite has utility classes for queries and permissions. You can learn more about [query utility classes](https://appwrite.io/docs/products/databases/queries) and [permissions utility classes](https://appwrite.io/docs/advanced/platform/permissions) in their own pages.

### [File I/O](https://appwrite.io/docs/sdks\#file-io)

Depending on your platform, you will also need some helpers to interface with system I/O. Learn more about [storage input file classes](https://appwrite.io/docs/products/storage/upload-download#input-file).

## [Community](https://appwrite.io/docs/sdks\#community)

If you have created your own framework or any other technology specific integration and would like us to list it here please [contact us](https://appwrite.io/contact-us).

If you would like to help us expand Appwrite's list of SDKs, you can contribute to Appwrite's [SDK Generator](https://github.com/appwrite/sdk-generator) project on GitHub and read our [contribution guide](https://github.com/appwrite/sdk-generator/blob/master/CONTRIBUTING.md).

###### Recommended

- [API reference/Account](https://appwrite.io/docs/references/cloud/client-web/account)
- [API reference/Teams](https://appwrite.io/docs/references/cloud/client-web/teams)
- [API reference/Databases](https://appwrite.io/docs/references/cloud/client-web/databases)
- [API reference/Storage](https://appwrite.io/docs/references/cloud/client-web/storage)

## Appwriter Keyboard
[Skip to content](https://appwrite.io/docs/tooling/appwriter#main)

[![appwrite](https://appwrite.io/images/logos/appwrite.svg)![appwrite](https://appwrite.io/images/logos/appwrite-light.svg)](https://appwrite.io/)

[Go to Console](https://cloud.appwrite.io/)

![The Appwriter](https://appwrite.io/images/docs/keyboard/dark/appwriter.png)

![The Appwriter](https://appwrite.io/images/docs/keyboard/appwriter.png)

The Appwriter is an exclusive mechanical keyboard custom-designed by the Appwrite team. It is optimized to improve developer productivity and is specially tuned to use with the Appwrite Console.

The Appwriter uses icons from the Appwrite Console and Docs on specific keys, making memorizing keyboard shortcuts easier. For example, G then D is the shortcut for navigating to your project's databases, and the icon on the D key matches the icon for Appwrite Databases.

## [What's in the box](https://appwrite.io/docs/tooling/appwriter\#whats-in-the-box)

- Appwriter keyboard

- USB-C data/charging cable

- 2-in-1 keycap and switch puller

- Extra PC layout keycaps

- Information card with a QR code


The keyboard comes with Mac layout keys pre-installed for macOS which can also be swapped with the included PC keycaps.

## [Specifications](https://appwrite.io/docs/tooling/appwriter\#specifications)

| Specification | Details |
| --- | --- |
| Battery | 3000mAh rechargeable battery |
| Design | 75% compact design keyboard |
| Keycaps | 84 custom dye sublimated PBT keycaps |
| Switches | Gateron G Pro yellow pre-lubed switches |
| Connections | Tri-mode connectivity (2.4Ghz wireless / bluetooth / wired USB-C) |
| Case | Noise dampening case-foam |
| RGB backlight | 16 Million colors & multiple lighting effects |
| Switch support | Hot-swappable switches with 3 & 5 pin |
| Rollover | N-key rollover |

## [Quick start](https://appwrite.io/docs/tooling/appwriter\#quick-start)

There are currently three modes to connect the Appwriter to the computer: wired, wireless, and Bluetooth. There is a switch under the keyboard to toggle between B, T, or G, which switch to wired, wireless, or Bluetooth mode, respectively.

### [Wired mode](https://appwrite.io/docs/tooling/appwriter\#wired-mode)

To use the wired mode, connect the USB-C data cable from the keyboard to the computer and push the Appwriter switch towards the T. When connecting the keyboard for the first time using wired mode, your computer will install all required drivers on a successful connection.

The Appwriter's battery will charge while connected using the wired mode. Make sure to use a charger that doesn't exceed a voltage/current = DC5V = 1A (max). Using a charger that exceeds this voltage and current ratings could easily damage your keyboard.

### [Wireless mode](https://appwrite.io/docs/tooling/appwriter\#wireless-mode)

Push the Appwriter switch towards the G if you want to use the wireless mode with the wireless receiver. After switching to wireless mode, long press the FN + 4 keys until the 4 key light flashes quickly, and plug the receiver into a computer USB port.

### [Bluetooth mode](https://appwrite.io/docs/tooling/appwriter\#bluetooth-mode)

To switch the keyboard to Bluetooth mode, push the switch to B. The keyboard can pair to three different devices.

To pair a device, long press the FN and 1, 2, or 3 keys to enter pairing mode. Once the 1, 2, or 3 key flashes quickly, select the Appwriter on your device's Bluetooth devices list.

To connect to a device, short press the FN + 1/2/3 keys depending on the device you want to connect the keyboard with.

## [General keyboard controls](https://appwrite.io/docs/tooling/appwriter\#general-keyboard-controls)

| Shortcut | Action |
| --- | --- |
| FN + Esc | Hold for 3 seconds to reset to factory defaults |
| FN + Win | Disable/enable Win key |
| FN + S | Set keyboard to Mac mode |
| FN + A | Set keyboard to Windows mode |
| FN + Backspace | System power/sleep |
| FN + Delete | Change keyboard backlight effect |
| FN + Home | Change keyboard backlight color |
| FN + Pg Up | Toggle keyboard backlight |
| FN + Up Arrow | Increase keyboard brightness |
| FN + Down Arrow | Decrease keyboard brightness |
| FN + Left Arrow | Slow down keyboard backlight effect |
| FN + Right Arrow | Speed up keyboard backlight effect |

### [Windows mode](https://appwrite.io/docs/tooling/appwriter\#windows-mode)

To switch to Windows mode, switch the preinstalled macOS keycap with the Windows keycap and use the FN + A shortcut to enable Windows mode; this will enable Windows-specific keyboard commands to work, like Ctrl + C or Ctrl + A.

### [MacOS mode](https://appwrite.io/docs/tooling/appwriter\#macos-mode)

To use macOS-specific keyboard commands such as Command + C or Command + A, keep the preinstalled macOS keycaps in and use the FN + S shortcut to enable macOS mode.

## [How to get the Appwriter](https://appwrite.io/docs/tooling/appwriter\#how-to-get-the-appwriter)

The Appwriter is available for preorder in the [Appwrite Store](https://appwrite.store/products/preorder-the-appwriter).

You can also participate in our giveaways and win the Appwriter. Look out for events & giveaways on our social media:

- [Discord](https://appwrite.io/discord)

- [Github](https://github.com/appwrite/appwrite)

- [X](https://x.com/appwrite)

- [YouTube](https://www.youtube.com/c/appwrite)


###### Recommended

- [API reference/Account](https://appwrite.io/docs/references/cloud/client-web/account)
- [API reference/Teams](https://appwrite.io/docs/references/cloud/client-web/teams)
- [API reference/Databases](https://appwrite.io/docs/references/cloud/client-web/databases)
- [API reference/Storage](https://appwrite.io/docs/references/cloud/client-web/storage)

## Appwrite GraphQL API
[Skip to content](https://appwrite.io/docs/apis/graphql#main)

[![appwrite](https://appwrite.io/images/logos/appwrite.svg)![appwrite](https://appwrite.io/images/logos/appwrite-light.svg)](https://appwrite.io/)

[Go to Console](https://cloud.appwrite.io/)

Appwrite supports multiple protocols for accessing the platform, including [REST](https://appwrite.io/docs/apis/rest), [GraphQL](https://appwrite.io/docs/apis/graphql), and [Realtime](https://appwrite.io/docs/apis/realtime).

The GraphQL API allows you to query and mutate any resource type on the Appwrite platform through the endpoint /v1/graphql. Every endpoint available through REST is available through GraphQL, except for OAuth.

## [Requests](https://appwrite.io/docs/apis/graphql\#requests)

Although every query executes through the same endpoint, there are multiple ways to make a GraphQL request. All requests, however, share a common structure.

| Name | Type | Description |
| --- | --- | --- |
| query | string | **Required**, the GraphQL query to execute. |
| operationName | string | **Optional**, if the query contains several named operations, controls which one to execute. |
| variables | object | **Optional**, an object containing variable names and values for the query. Variables are made available to your query with the $ prefix. |

### [GraphQL model parameters](https://appwrite.io/docs/apis/graphql\#graphql-model-parameters)

In Appwrite's GraphQL API, all internal model parameters are prefixed with \_ instead of $ because $ is reserved by GraphQL.

For example, $collectionId in the REST API would be referenced as \_collectionId in the GraphQL API.

### [GET requests](https://appwrite.io/docs/apis/graphql\#get-resquest)

You can execute a GraphQL query via a GET request, passing a query and optionally operationName and variables as query parameters.

### [POST requests](https://appwrite.io/docs/apis/graphql\#post-request)

There are multiple ways to make a GraphQL POST request, differentiated by content type.

JSONGraphQL

JSONGraphQL

There are two ways to make requests with the application/json content type. You can send a JSON object containing a query and optionally operationName and variables, or an array of objects with the same structure.

#### [Object](https://appwrite.io/docs/apis/graphql\#object)

```web-code json line-numbers
{
    "query": "",
    "operationName": "",
    "variables": {}
}

```

#### [Array](https://appwrite.io/docs/apis/graphql\#array)

```web-code json line-numbers
[\
    {\
        "query": "",\
        "operationName": "",\
        "variables": {}\
    }\
]

```

The application/graphql content type can be used to send a query as the raw POST body.

```web-code graphql line-numbers
query GetAccount {
    accountGet {
        _id
        email
    }
}

```

### [Multipart form data](https://appwrite.io/docs/apis/graphql\#multipart-form-data)

The multipart/form-data content type can be used to upload files via GraphQL. In this case, the form data must include the following parts in addition to the files to upload.

| Name | Type | Description |
| --- | --- | --- |
| operations | string | **Required**, JSON encoded GraphQL query and optionally operation name and variables. File variables should contain null values. |
| map | string | **Required**, JSON encoded map of form-data filenames to the operations dot-path to inject the file to, e.g. variables.file. |

## [Responses](https://appwrite.io/docs/apis/graphql\#responses)

A response to a GraphQL request will have the following structure:

| Name | Type | Description |
| --- | --- | --- |
| data | object | The data returned by the query, maps requested field names to their results. |
| errors | object\[\] | An array of errors that occurred during the request. |

The data object will contain a map of requested field names to their results. If no data is returned, the object will not be present in the response.

The errors array will contain error objects, each with their own **message** and **path**. The path will contain the field key that is null due to the error. If no errors occur, the array will not be present in the response.

## [Authentication](https://appwrite.io/docs/apis/graphql\#authentication)

GraphQL authenticates using Appwrite accounts and sessions. Both accounts and sessions can be created with GraphQL using the accountCreate, accountCreateEmailPasswordSession, accountCreateAnonymousSession, or accountCreatePhoneToken mutations.

More information and examples of authenticating users can be found in the dedicated [authentication guide](https://appwrite.io/docs/products/auth).

## [Database queries](https://appwrite.io/docs/apis/graphql\#database-queries)

The GraphQL API can be used to query and manipulate database documents. For detailed examples of how to create, list, update, and delete documents using GraphQL, refer to the [Documents documentation](https://appwrite.io/docs/products/databases/documents).

## [GraphQL vs REST](https://appwrite.io/docs/apis/graphql\#graphql-vs-rest)

There are two main features that make GraphQL appealing when compared to the REST API: **selection sets** and **query batching**.

### [Selection sets](https://appwrite.io/docs/apis/graphql\#selection-sets)

Selection sets can be used to tell a GraphQL API exactly which fields of a particular resource you would like to receive in the response. The server will respond with only those fields, nothing more, nothing less. This gives you full control over what data comes into your application.

For example, to retrieve only the email of a currently authenticated user, you could query the accountGet field, passing only email as the **field selection set**.

```web-code graphql line-numbers
query GetAccount {
    accountGet {
        _id
        email
    }
}

```

Given this query, the GraphQL API will respond with:

```web-code json line-numbers
{
    "data": {
        "accountGet": {
            "_id": "...",
            "email": "..."
        }
    }
}

```

This can be a useful feature for performance, network efficiency, and app responsiveness. As the processing happens on the server, the bandwidth consumed for the request can be dramatically reduced.

## [Query batching](https://appwrite.io/docs/apis/graphql\#query-batching)

GraphQL allows sending multiple queries or mutations in the same request. There are two different ways to batch queries. The simplest way is to include multiple fields in a single query **or** mutation.

```web-code graphql line-numbers
query GetAccountAndLocale {
    accountGet {
        _id
        email
    }
    localeGet {
        ip
    }
}

```

If both field executions succeed, the response will contain a data key for each field, containing the values of the selected fields.

```web-code json line-numbers
{
    "data": {
        "accountGet": {
            "_id": "...",
            "email": "..."
        },
        "localeGet": {
            "ip": "..."
        }
    }
}

```

If there was no authenticated user, the accountGet field would fail to resolve. In such a case the value of the data key for that field will be null, and an object will be added to the errors array instead.

```web-code json line-numbers
{
    "data": {
        "accountGet": null,
        "localeGet": {
            "ip": "...",
            "country": "..."
        }
    },
    "errors": [\
        {\
            "message": "User (role: guest) missing scope (account)",\
            "path": ["accountGet"]\
        }\
    ]
}

```

Batching with a single query or mutation has some down-sides. You cannot mix and match queries and mutations within the same request unless you provide an operationName, in which case you can only execute one query per request.

Additionally, all **variables** must be passed in the same object, which can be cumbersome and hard to maintain.

The second way to batch is to pass an array of queries or mutations in the request. In this way, you can execute queries **and** mutations and keep variables separated for each.

```web-code json line-numbers
[\
    {\
        "query": "query GetAccount { accountGet{ email } }",\
    },\
    {\
        "query": "query GetLocale { localeGet { ip } }"\
    }\
]

```

This allows you to execute complex actions in a single network request.

## [SDK usage](https://appwrite.io/docs/apis/graphql\#sdk-usage)

Appwrite SDKs also support GraphQL in addition to the REST services.

```web-code client-web line-numbers
import { Client, Graphql } from "appwrite";

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your Appwrite Endpoint
    .setProject('<PROJECT_ID>');                // Your project ID

const graphql = new Graphql(client);

const mutation = graphql.mutation({
    query: `mutation CreateAccount(
        $email: String!,
        $password: String!,
        $name: String
    ) {
        accountCreate(
            email: $email,
            password: $password,
            name: $name,
            userId: "unique()"
        ) {
            _id
        }
    }`,
    variables: {
        email: '...',
        password: '...',
        name: '...'
    }
});

mutation.then(response => {
    console.log(response);
}).catch(error => {
    console.log(error);
});

```

###### Recommended

- [API reference/Account](https://appwrite.io/docs/references/cloud/client-web/account)
- [API reference/Teams](https://appwrite.io/docs/references/cloud/client-web/teams)
- [API reference/Databases](https://appwrite.io/docs/references/cloud/client-web/databases)
- [API reference/Storage](https://appwrite.io/docs/references/cloud/client-web/storage)

## Appwrite Migrations Guide
[Skip to content](https://appwrite.io/docs/advanced/migrations#main)

[![appwrite](https://appwrite.io/images/logos/appwrite.svg)![appwrite](https://appwrite.io/images/logos/appwrite-light.svg)](https://appwrite.io/)

[Go to Console](https://cloud.appwrite.io/)

If you're looking to migrate existing projects to Appwrite, Migrations can help you make the move more quickly. You can move your app from Firebase, Supabase, Nhost, and even move between self-hosted and Cloud projects using Migrations. You can also use Migrations to move between two self-hosted instances or even to duplicate projects on the same instance. Migrations will automatically move accounts, database documents, and storage files from one source to another.

## [Sources](https://appwrite.io/docs/advanced/migrations\#sources)

Appwrite supports multiple source destinations for migrating your data. You can transfer data from these sources to a new or existing Appwrite project. Resources marked as 'enabled' are migrated automatically. Resources marked as 'partial' can be migrated but with limitations or caveats; please refer to the guide for each source to learn more. Resources marked as 'manual' require manual migration.

| Source | Users | Databases | Documents | Files | Functions |
| --- | --- | --- | --- | --- | --- |
| [Firebase](https://appwrite.io/docs/advanced/migrations/firebase) | enabled | enabled | partial | enabled | manual |
| [Supabase](https://appwrite.io/docs/advanced/migrations/supabase) | enabled | enabled | partial | enabled | manual |
| [Nhost](https://appwrite.io/docs/advanced/migrations/nhost) | enabled | enabled | partial | enabled | manual |
| [Cloud](https://appwrite.io/docs/advanced/migrations/cloud) | enabled | enabled | enabled | enabled | enabled |
| [Self hosted](https://appwrite.io/docs/advanced/migrations/self-hosted) | enabled | enabled | enabled | enabled | enabled |

## [Limitations](https://appwrite.io/docs/advanced/migrations\#limitations)

Migrations cannot transfer all data perfectly, so certain fields, such as $createdAt and $updatedAt, may not be transferred. More information can be found on the migration page for each source.

Migrations help you jump-start your move, but because each product is unique, complex databases and product unique features like functions might need to be migrated manually. We also recommend you carefully **validate permissions and data integrity** when moving between platforms.

## [Charges](https://appwrite.io/docs/advanced/migrations\#charges)

When you migrate data from another source to Appwrite Cloud, the resource usage during the migration will not count towards your Appwrite Cloud usage charges. However, your source vendor may have data transfer charges. The same is true for moving data between self-hosted Appwrite instances hosted on different cloud providers.

###### Recommended

- [API reference/Account](https://appwrite.io/docs/references/cloud/client-web/account)
- [API reference/Teams](https://appwrite.io/docs/references/cloud/client-web/teams)
- [API reference/Databases](https://appwrite.io/docs/references/cloud/client-web/databases)
- [API reference/Storage](https://appwrite.io/docs/references/cloud/client-web/storage)

## Appwrite Security Overview
[Skip to content](https://appwrite.io/docs/advanced/security#main)

[![appwrite](https://appwrite.io/images/logos/appwrite.svg)![appwrite](https://appwrite.io/images/logos/appwrite-light.svg)](https://appwrite.io/)

[Go to Console](https://cloud.appwrite.io/)

Appwrite helps you build secure apps by applying various security and compliance measures. Appwrite is compliant with [GDPR](https://appwrite.io/docs/advanced/security/gdpr), [CCPA](https://appwrite.io/docs/advanced/security/ccpa), [HIPAA](https://appwrite.io/docs/advanced/security/hipaa), and [SOC 2](https://appwrite.io/docs/advanced/security/soc2).

Appwrite also employs [enhanced password protection and encryption](https://appwrite.io/docs/products/auth/security), [rate limits](https://appwrite.io/docs/advanced/security/abuse-protection), [robust permission systems](https://appwrite.io/docs/advanced/platform/permissions), and [HTTPS/TLS](https://appwrite.io/docs/advanced/security/tls) to protect you and your users' data.

## [Compliance](https://appwrite.io/docs/advanced/security\#compliance)

The safeguarding of your and your users' data is taken seriously at Appwrite. Appwrite works to achieve compliance with a variety of standards to protect sensitive data, as well as maintain trust and credibility.

- [Appwrite is GDPR compliant. Learn about our measures, privacy policy, and find our data processing agreement.](https://appwrite.io/docs/advanced/security/gdpr)
- [Appwrite uses Stripe to handle payment and payment information securely. Learn about Appwrite's PCI compliance.](https://appwrite.io/docs/advanced/security/pci)
- [Appwrite is SOC2 Type I compliant. Learn about Appwrite's measures to meet SOC 2 standards.](https://appwrite.io/docs/advanced/security/soc2)
- [Appwrite is HIPAA compliant. Learn about Appwrite's measures to protect personal health information.](https://appwrite.io/docs/advanced/security/hipaa)
- [Appwrite is CCPA compliant. Learn about our measures to protect consumer privacy under the California Consumer Privacy Act.](https://appwrite.io/docs/advanced/security/ccpa)

## [Measures](https://appwrite.io/docs/advanced/security\#measures)

Appwrite employs a variety of measures to help you build secure applications, faster. Learn about the different ways Appwrite protects you and your users' data and privacy.

- [Secure authentication methods to protect your users and promote better passwords.](https://appwrite.io/docs/products/auth/security)
- [Appwrite encrypts sensitive data and files in Appwrite Databases and Storage.](https://appwrite.io/docs/advanced/security/encryption)
- [Appwrite Cloud enforces HTTPS on all endpoints to prevent on-path attacks like packet sniffing.](https://appwrite.io/docs/advanced/security/https)
- [Appwrite assigns TLS certificates on all Appwrite and user provided domains connected to Appwrite.](https://appwrite.io/docs/advanced/security/https)
- [Appwrite Cloud uses regular backups to prevent data loss and improve resiliency.](https://appwrite.io/docs/advanced/security/backups)
- [Appwrite employs regular third-party penetration tests to find vulnerabilities.](https://appwrite.io/docs/advanced/security/penetration-tests)
- [Appwrite provides detailed audit logs for each product to track and discover suspicious activity.](https://appwrite.io/docs/advanced/security/audit-logs)
- [Appwrite protects against common abuse methods like DoS and brute-force attacks.](https://appwrite.io/docs/advanced/security/abuse-protection)

## [Reporting vulnerabilities](https://appwrite.io/docs/advanced/security\#reporting-vulnerabilities)

If you discover security vulnerabilities, please contact us at security@appwrite.io. Please avoid **posting a public issue** on GitHub or elsewhere online to prevent malicious actors from abusing the vulnerabilities before the Appwrite team has chance to patch the issue.

###### Recommended

- [API reference/Account](https://appwrite.io/docs/references/cloud/client-web/account)
- [API reference/Teams](https://appwrite.io/docs/references/cloud/client-web/teams)
- [API reference/Databases](https://appwrite.io/docs/references/cloud/client-web/databases)
- [API reference/Storage](https://appwrite.io/docs/references/cloud/client-web/storage)

## Appwrite Platform Overview
[Skip to content](https://appwrite.io/docs/advanced/platform#main)

[![appwrite](https://appwrite.io/images/logos/appwrite.svg)![appwrite](https://appwrite.io/images/logos/appwrite-light.svg)](https://appwrite.io/)

[Go to Console](https://cloud.appwrite.io/)

Appwrite is a development platform designed to adapt your unique use cases. Appwrite provides features that help you maintain, scale, and integrate Appwrite with other platforms.

## [Integration](https://appwrite.io/docs/advanced/platform\#integration)

Appwrite is designed to integrate with both frontend and backend apps. Learn about advanced integrations and API response codes.

- [Appwrite allows you to react to events that occur on the platform.](https://appwrite.io/docs/advanced/platform/events)
- [Use webhooks to update backend integrations about Appwrite events.](https://appwrite.io/docs/advanced/platform/webhooks)
- [Learn about response codes and errors returned by Appwrite APIs.](https://appwrite.io/docs/advanced/platform/response-codes)

## [Access control](https://appwrite.io/docs/advanced/platform\#access-control)

Appwrite is secure by default and provides tools for you to manage access control and prevent abuse.

- [Control which users can access which resources.](https://appwrite.io/docs/advanced/platform/permissions)
- [Appwrite has rate limits on some endpoints to prevent abuse.](https://appwrite.io/docs/advanced/platform/rate-limits)
- [Create and manage API keys used by Server SDKs.](https://appwrite.io/docs/advanced/platform/api-keys)
- [Create and manage dev keys used by Client SDKs in dev environments.](https://appwrite.io/docs/advanced/platform/dev-keys)

## [Plans](https://appwrite.io/docs/advanced/platform\#plans)

Learn which plan best suits your organization and how to manage billing.

- [Learn to manage your billing information.](https://appwrite.io/docs/advanced/platform/billing)
- [Learn about Appwrite Free plan. Free plan for hobby projects and learners.](https://appwrite.io/docs/advanced/platform/free)
- [Learn about Appwrite Pro, for growing organizations that need to scale.](https://appwrite.io/docs/advanced/platform/pro)
- [Coming soon.](https://appwrite.io/docs/advanced/platform/scale)
- [Learn about Appwrite Enterprise, for large organizations with advanced needs.](https://appwrite.io/docs/advanced/platform/enterprise)
- [Appwrite provides special plans for open source projects.](https://appwrite.io/docs/advanced/platform/oss)

## [Configuration](https://appwrite.io/docs/advanced/platform\#configuration)

Configure custom domains and customize communication templates.

- [Add a custom domain for your Appwrite APIs.](https://appwrite.io/docs/advanced/platform/custom-domains)
- [Create custom branding and messages when you communicate with users.](https://appwrite.io/docs/advanced/platform/message-templates)

## [Add Ons](https://appwrite.io/docs/advanced/platform\#add-ons)

Learn about additional features and functionalities that Appwrite offers.

- [Learn about Appwrite's different compute add-ons.](https://appwrite.io/docs/advanced/platform/compute)
- [Learn how Appwrite handles SMS-based OTP authentication.](https://appwrite.io/docs/advanced/platform/phone-otp)
- [Learn how to transform images dynamically with Appwrite.](https://appwrite.io/docs/advanced/platform/image-transformations)
- [Learn how Appwrite handles database reads and writes.](https://appwrite.io/docs/advanced/platform/database-reads-and-writes)

###### Recommended

- [API reference/Account](https://appwrite.io/docs/references/cloud/client-web/account)
- [API reference/Teams](https://appwrite.io/docs/references/cloud/client-web/teams)
- [API reference/Databases](https://appwrite.io/docs/references/cloud/client-web/databases)
- [API reference/Storage](https://appwrite.io/docs/references/cloud/client-web/storage)

## Appwrite Network Overview
[Skip to content](https://appwrite.io/docs/products/network#main)

[![appwrite](https://appwrite.io/images/logos/appwrite.svg)![appwrite](https://appwrite.io/images/logos/appwrite-light.svg)](https://appwrite.io/)

[Go to Console](https://cloud.appwrite.io/)

Appwrite's network is designed to deliver low-latency, high-performance experiences for developers and end-users alike. It leverages a robust Content Delivery Network (CDN) with edge locations across multiple regions to ensure fast and reliable data delivery.

With distributed infrastructure and multiple deployment regions, Appwrite enables developers to build globally scalable applications while maintaining data sovereignty. Its architecture integrates seamlessly with APIs, storage, and databases, optimizing both speed and availability.

![Network map](https://appwrite.io/images/docs/network/dark/all-maps.png)

![Network map](https://appwrite.io/images/docs/network/all-maps.png)

## [Components](https://appwrite.io/docs/products/network\#components)

The Appwrite Network is composed of multiple components that work together to deliver a seamless experience for developers and end-users. These components include:

- [Multi-region deployments for geo-redundancy, compliance and low-latency.](https://appwrite.io/docs/products/network/regions)
- [Edge nodes for fast request processing and reduced round-trip times.](https://appwrite.io/docs/products/network/edges)
- [Global infrastructure for optimized routing, enabling faster and more consistent data delivery.](https://appwrite.io/docs/products/network/cdn)
- [Dedicated endpoints for region-specific, edge, and compute workloads.](https://appwrite.io/docs/products/network/endpoints)

### [Region vs Edge](https://appwrite.io/docs/products/network\#region-vs-edge)

In Appwrite, Regions are where all your core data and services live. This includes your databases, auth, functions, messaging, and storage. Regions are the source of truth, handling heavy workloads and ensuring your application runs reliably while keeping your data compliant with local regulations.

Edges are about speed. They process requests closer to your users using smart geo-routing, reducing latency by handling compute tasks at the nearest edge location. Edges are perfect for serving cached content, executing lightweight computations, and optimizing user interactions.

##### Where to execute?

The Appwrite Network is designed for flexibility. You can choose to run your serverless compute workload in your project's home region by using the \[ID\].\[REGION\].appwrite.run endpoint, or on the edge using the \[ID\].appwrite.network endpoint. Both your region and edge endpoints can be customized to use your own custom domain.

## [Architecture](https://appwrite.io/docs/products/network\#architecture)

Appwrite's network is designed to provide a balance between centralized compute and distributed delivery:

- Regions: Core infrastructure and data resides in global regions, where all services like databases, auth, functions, messaging, and storage operate. These regions ensure data sovereignty, compliance, and high availability for critical workloads.

- Edges: Distributed edge locations process requests closer to end-users, leveraging smart geo-routing to minimize latency. These edge handle tasks like caching, static content delivery, and lightweight compute to improve performance.

- Private Routing: Data moves between edge nodes and regions through optimized, low-latency connections to ensure fast and reliable communication.


This setup separates heavy backend processing in regions from latency-sensitive tasks at the edge, enabling efficient handling of global workloads with minimal performance trade-offs.

##### Self-Hosting?

Appwrite's self-hosted setup is designed and optimized for straightforward, single-region environments - making it an ideal choice for small to medium-scale workloads. All Cloud users have access to the Appwrite Network. If you need to scale your self-hosted deployment or require additional solutions, please [contact us](https://appwrite.io/contact-us/enterprise).

## [Features](https://appwrite.io/docs/products/network\#features)

- [Provides dedicated nameservers and DNS management for apex domains with SSL certification.](https://appwrite.io/docs/products/network/dns)
- [Protects against distributed denial-of-service attacks, ensuring uninterrupted access.](https://appwrite.io/docs/products/network/ddos)
- [Encrypts data in transit for secure and private communication.](https://appwrite.io/docs/products/network/tls)
- [Shields applications from common web vulnerabilities and attacks on the application layer.](https://appwrite.io/docs/products/network/waf)
- [Reduces data size in transit to improve transfer speed and efficiency.](https://appwrite.io/docs/products/network/compression)
- [Stores frequently accessed data for faster retrieval and lower latency.](https://appwrite.io/docs/products/network/caching)

###### Recommended

- [API reference/Account](https://appwrite.io/docs/references/cloud/client-web/account)
- [API reference/Teams](https://appwrite.io/docs/references/cloud/client-web/teams)
- [API reference/Databases](https://appwrite.io/docs/references/cloud/client-web/databases)
- [API reference/Storage](https://appwrite.io/docs/references/cloud/client-web/storage)

## Appwrite Authentication
[Skip to content](https://appwrite.io/docs/products/auth#main)

[![appwrite](https://appwrite.io/images/logos/appwrite.svg)![appwrite](https://appwrite.io/images/logos/appwrite-light.svg)](https://appwrite.io/)

[Go to Console](https://cloud.appwrite.io/)

Appwrite Authentication delivers more than just user sign up and log in. Authentication makes it easy to build secure and robust authentication with support for many different authentication methods.

[Add authentication to your app in 5 minutes](https://appwrite.io/docs/products/auth/quick-start)

## [Authentication methods](https://appwrite.io/docs/products/auth\#auth-methods)

Appwrite supports a variety of authentication methods to fit every app and every niche. Explore Appwrite's authentication flows.

- [Email and password login with just a few lines of code secured with state of the art Argon2 hashing.](https://appwrite.io/docs/products/auth/email-password)
- [Log in users without a password using their phone number and SMS verification.](https://appwrite.io/docs/products/auth/phone-sms)
- [Passwordless login with a magic link sent to the user's email.](https://appwrite.io/docs/products/auth/magic-url)
- [Generate a time-based single-use password sent to the user's email.](https://appwrite.io/docs/products/auth/email-otp)
- [Authenticate users with existing accounts from GitHub, Google, Facebook, and 30+ other providers.](https://appwrite.io/docs/products/auth/oauth2)
- [Create guest sessions for visitors and convert to full accounts when they're ready.](https://appwrite.io/docs/products/auth/anonymous)
- [Deligate access for a user through passing JWT tokens.](https://appwrite.io/docs/products/auth/jwt)
- [Authenticate users in server-side rendered applications.](https://appwrite.io/docs/products/auth/server-side-rendering)
- [Implement custom authentication methods like biometric and passkey login by generating custom tokens.](https://appwrite.io/docs/products/auth/custom-token)
- [Implementing MFA to add extra layers of security to your app.](https://appwrite.io/docs/products/auth/mfa)

## [Flexible permissions](https://appwrite.io/docs/products/auth\#flexible-permissions)

When users sign up using Appwrite, their identity is automatically attached to a robust permissions system. Appwrite Authentication provides permissions for individual users and groups of users through [teams](https://appwrite.io/docs/products/auth/teams) and [labels](https://appwrite.io/docs/products/auth/labels).

## [Built in preferences](https://appwrite.io/docs/products/auth\#built-in-preferences)

Appwrite Authentication comes with built-in [preferences](https://appwrite.io/docs/products/auth/accounts#preferences) for users to manage their account settings. Store notification settings, themes, and other user preferences to be shared across devices.

###### Recommended

- [API reference/Account](https://appwrite.io/docs/references/cloud/client-web/account)
- [API reference/Teams](https://appwrite.io/docs/references/cloud/client-web/teams)
- [API reference/Databases](https://appwrite.io/docs/references/cloud/client-web/databases)
- [API reference/Storage](https://appwrite.io/docs/references/cloud/client-web/storage)

## Appwrite Sites
[Skip to content](https://appwrite.io/docs/products/sites#main)

[![appwrite](https://appwrite.io/images/logos/appwrite.svg)![appwrite](https://appwrite.io/images/logos/appwrite-light.svg)](https://appwrite.io/)

[Go to Console](https://cloud.appwrite.io/)

Appwrite Sites empowers developers to host and manage web applications seamlessly within the Appwrite ecosystem. Appwrite Sites provides a fast, scalable, and secure way to deploy web apps directly from source control, allowing for quick iterations and live updates. Each site has a dedicated URL, runs within its own isolated container, and can be configured with custom domains and environment variables.

Appwrite Sites leverages the [Appwrite Network](https://appwrite.io/docs/products/network) infrastructure to enhance your sites' performance and reliability. Your deployed sites automatically benefit from global content distribution across strategic edge locations, reducing latency and improving load times, while also gaining advanced security features including DDoS protection, Web Application Firewall (WAF), and TLS encryption.

## [Getting started](https://appwrite.io/docs/products/sites\#getting-started)

Appwrite Sites lets you host any web application with ease. However, to make this process even simpler, you can begin by exploring starter kits developed by the Appwrite team or leverage a pre-configured template with built-in integrations to implement essential features.

![Create first site](https://appwrite.io/images/docs/sites/dark/create-first-site.png)

![Create first site](https://appwrite.io/images/docs/sites/create-first-site.png)

Try out one of our most popular framework quick-starts:

Or, [setup your first site using your favorite framework >](https://appwrite.io/docs/products/sites/quick-start)

###### Recommended

- [API reference/Account](https://appwrite.io/docs/references/cloud/client-web/account)
- [API reference/Teams](https://appwrite.io/docs/references/cloud/client-web/teams)
- [API reference/Databases](https://appwrite.io/docs/references/cloud/client-web/databases)
- [API reference/Storage](https://appwrite.io/docs/references/cloud/client-web/storage)

## Appwrite Realtime API
[Skip to content](https://appwrite.io/docs/apis/realtime#main)

[![appwrite](https://appwrite.io/images/logos/appwrite.svg)![appwrite](https://appwrite.io/images/logos/appwrite-light.svg)](https://appwrite.io/)

[Go to Console](https://cloud.appwrite.io/)

Appwrite supports multiple protocols for accessing the server, including [REST](https://appwrite.io/docs/apis/rest), [GraphQL](https://appwrite.io/docs/apis/graphql), and [Realtime](https://appwrite.io/docs/apis/realtime). The Appwrite Realtime allows you to listen to any Appwrite events in realtime using the subscribe method.

Instead of requesting new data via HTTP, the subscription will receive new data every time it changes, any connected client receives that update within milliseconds via a WebSocket connection.

This lets you build an interactive and responsive user experience by providing information from all of Appwrite's services in realtime. The example below shows subscribing to realtime events for file uploads.

```web-code client-web line-numbers
import { Client } from "appwrite";

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1')
    .setProject('<PROJECT_ID>');

// Subscribe to files channel
client.subscribe('files', response => {
    if(response.events.includes('buckets.*.files.*.create')) {
        // Log when a new file is uploaded
        console.log(response.payload);
    }
});

```

To subscribe to updates from different Appwrite resources, you need to specify one or more [channels](https://appwrite.io/docs/apis/realtime#channels). The channels offer a wide and powerful selection that will allow you to listen to all possible resources. This allows you to receive updates not only from the database, but from _all_ the services that Appwrite offers.

If you subscribe to a channel, you will receive callbacks for a variety of events related to the channel. The events attribute in the callback can be used to filter and respond to specific events in a channel.

[View a list of all available events](https://appwrite.io/docs/advanced/platform/events).

##### Permissions

All subscriptions are secured by the [permissions system](https://appwrite.io/docs/advanced/platform/permissions) offered by Appwrite, meaning a user will only receive updates to resources they have permission to access.

Using Role.any() on read permissions will allow any client to receive updates.

## [Authentication](https://appwrite.io/docs/apis/realtime\#authentication)

Realtime authenticates using an existing user session. If you authenticate **after** creating a subscription, the subscription will not receive updates for the newly authenticated user. You will need to re-create the subscription to work with the new user.

More information and examples of authenticating users can be found in the dedicated [authentication docs](https://appwrite.io/docs/products/auth).

## [Examples](https://appwrite.io/docs/apis/realtime\#examples)

The examples below will show you how you can use Realtime in various ways.

### [Subscribe to a Channel](https://appwrite.io/docs/apis/realtime\#subscribe-to-a-channel)

In this example we are subscribing to all updates related to our account by using the account channel. This will be triggered by any update related to the authenticated user, like updating the user's name or e-mail address.

```web-code client-web line-numbers
import { Client } from "appwrite";

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1')
    .setProject('<PROJECT_ID>');

client.subscribe('account', response => {
    // Callback will be executed on all account events.
    console.log(response);
});

```

### [Subscribe to Multiple Channels](https://appwrite.io/docs/apis/realtime\#subscribe-to-multiple-channel)

You can also listen to multiple channels at once by passing an array of channels. This will trigger the callback for any events for all channels passed.

In this example we are listening to the document A and all files by subscribing to the databases.A.collections.A.documents.A and files channels.

```web-code client-web line-numbers
import { Client } from "appwrite";

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1')
    .setProject('<PROJECT_ID>');

client.subscribe(['collections.A.documents.A', 'files'], response => {
    // Callback will be executed on changes for documents A and all files.
    console.log(response);
});

```

### [Unsubscribe](https://appwrite.io/docs/apis/realtime\#unsubscribe)

If you no longer want to receive updates from a subscription, you can unsubscribe so that your callbacks are no longer called. Leaving old subscriptions alive and resubscribing can result in duplicate subscriptions and cause race conditions.

```web-code client-web line-numbers
import { Client } from "appwrite";

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1')
    .setProject('<PROJECT_ID>');

const unsubscribe = client.subscribe('files', response => {
    // Callback will be executed on changes for all files.
    console.log(response);
});

// Closes the subscription.
unsubscribe();

```

## [Payload](https://appwrite.io/docs/apis/realtime\#payload)

The payload from the subscription will contain following properties:

| Name | Type | Description |
| --- | --- | --- |
| events | string\[\] | The [Appwrite events](https://appwrite.io/docs/advanced/platform/events) that triggered this update. |
| channels | string\[\] | An array of [channels](https://appwrite.io/docs/apis/realtime#channels) that can receive this message. |
| timestamp | string | The [ISO 8601 timestamp](https://en.wikipedia.org/wiki/ISO_8601) in UTC timezone from the server |
| payload | object | Payload contains the data equal to the response model. |

If you subscribe to the documents channel and a document the user is allowed to read is updated, you will receive an object containing information about the event and the updated document.

The response will look like this:

```web-code json line-numbers
{
  "events": [\
    "databases.default.collections.sample.documents.63c98b9baea0938e1206.update",\
    "databases.*.collections.*.documents.*.update",\
    "databases.default.collections.*.documents.63c98b9baea0938e1206.update",\
    "databases.*.collections.*.documents.63c98b9baea0938e1206.update",\
    "databases.*.collections.sample.documents.63c98b9baea0938e1206.update",\
    "databases.default.collections.sample.documents.*.update",\
    "databases.*.collections.sample.documents.*.update",\
    "databases.default.collections.*.documents.*.update",\
    "databases.default.collections.sample.documents.63c98b9baea0938e1206",\
    "databases.*.collections.*.documents.*",\
    "databases.default.collections.*.documents.63c98b9baea0938e1206",\
    "databases.*.collections.*.documents.63c98b9baea0938e1206",\
    "databases.*.collections.sample.documents.63c98b9baea0938e1206",\
    "databases.default.collections.sample.documents.*",\
    "databases.*.collections.sample.documents.*",\
    "databases.default.collections.*.documents.*",\
    "databases.default.collections.sample",\
    "databases.*.collections.*",\
    "databases.default.collections.*",\
    "databases.*.collections.sample",\
    "databases.default",\
    "databases.*"\
  ],
  "channels": [\
    "documents",\
    "databases.default.collections.sample.documents",\
    "databases.default.collections.sample.documents.63c98b9baea0938e1206"\
  ],
  "timestamp": "2023-01-19 18:30:04.051",
  "payload": {
    "ip": "127.0.0.1",
    "stringArray": [\
      "sss"\
    ],
    "email": "joe@example.com",
    "stringRequired": "req",
    "float": 3.3,
    "boolean": false,
    "integer": 3,
    "enum": "apple",
    "stringDefault": "default",
    "datetime": "2023-01-19T10:27:09.428+00:00",
    "url": "https://appwrite.io",
    "$id": "63c98b9baea0938e1206",
    "$createdAt": "2023-01-19T18:27:39.715+00:00",
    "$updatedAt": "2023-01-19T18:30:04.040+00:00",
    "$permissions": [],
    "$collectionId": "sample",
    "$databaseId": "default"
  }
}

```

## [Channels](https://appwrite.io/docs/apis/realtime\#channels)

A list of all channels available you can subscribe to. IDs cannot be wildcards.

| Channel | Description |
| --- | --- |
| account | All account related events (session create, name update...) |
| databases.\[ID\].collections.\[ID\].documents | Any create/update/delete events to any document in a collection |
| documents | Any create/update/delete events to any document |
| databases.\[ID\].collections.\[ID\].documents.\[ID\] | Any update/delete events to a given document |
| files | Any create/update/delete events to any file |
| buckets.\[ID\].files.\[ID\] | Any update/delete events to a given file of the given bucket |
| buckets.\[ID\].files | Any update/delete events to any file of the given bucket |
| teams | Any create/update/delete events to a any team |
| teams.\[ID\] | Any update/delete events to a given team |
| memberships | Any create/update/delete events to a any membership |
| memberships.\[ID\] | Any update/delete events to a given membership |
| executions | Any update to executions |
| executions.\[ID\] | Any update to a given execution |
| functions.\[ID\] | Any execution event to a given function |

## [Custom endpoint](https://appwrite.io/docs/apis/realtime\#custom-endpoint)

The SDK will guess the endpoint of the Realtime API when setting the endpoint of your Appwrite instance. If you are running Appwrite with a custom proxy and changed the route of the Realtime API, you can call the setEndpointRealtime method on the Client SDK and set your new endpoint value.

By default the endpoint is wss://<REGION>.cloud.appwrite.io/v1/realtime.

```web-code client-web line-numbers
import { Client } from "appwrite";
const client = new Client();

client.setEndpointRealtime('wss://<REGION>.cloud.appwrite.io/v1/realtime');

```

## [Limitations](https://appwrite.io/docs/apis/realtime\#limitations)

While the Realtime API offers robust capabilities, there are currently some limitations to be aware of in its implementation.

### [Subscription changes](https://appwrite.io/docs/apis/realtime\#subscription-changes)

The SDK creates a single WebSocket connection for all subscribed channels. Each time a channel is added or unsubscribed, the SDK currently creates a completely new connection and terminates the old one. Therefore, subscriptions to channels should always be done in conjunction with state management so as not to be unnecessarily built up several times by multiple components' life cycles.

### [Server SDKs](https://appwrite.io/docs/apis/realtime\#server-sdks)

We currently are not offering access to realtime with Server SDKs and an API key.

###### Recommended

- [API reference/Account](https://appwrite.io/docs/references/cloud/client-web/account)
- [API reference/Teams](https://appwrite.io/docs/references/cloud/client-web/teams)
- [API reference/Databases](https://appwrite.io/docs/references/cloud/client-web/databases)
- [API reference/Storage](https://appwrite.io/docs/references/cloud/client-web/storage)

## Appwrite MCP Integration
[Skip to content](https://appwrite.io/docs/tooling/mcp#main)

[![appwrite](https://appwrite.io/images/logos/appwrite.svg)![appwrite](https://appwrite.io/images/logos/appwrite-light.svg)](https://appwrite.io/)

[Go to Console](https://cloud.appwrite.io/)

Appwrite offers a [Model Context Protocol](https://modelcontextprotocol.io/) (MCP) server that allows LLMs to directly interact with Appwrite's API. Using the MCP server, you can use applications such as Claude Desktop, Cursor, Windsurf Editor, etc. to interact with your Appwrite project.

## [Getting started](https://appwrite.io/docs/tooling/mcp\#getting-started)

Before launching the MCP server, you must [set up an Appwrite project](https://cloud.appwrite.io/) and create an API key with the necessary scopes enabled.

![Appwrite API key](https://appwrite.io/images/docs/mcp/appwrite/appwrite-api-secret.png)

![Appwrite API key](https://appwrite.io/images/docs/mcp/appwrite/dark/appwrite-api-secret.png)

### [Integrate with popular AI tools](https://appwrite.io/docs/tooling/mcp\#integrate-with-popular-ai-tools)

Install [uv](https://docs.astral.sh/uv/getting-started/installation/) on your system with:

Linux and MacOSWindows

Linux and MacOSWindows

```web-code bash line-numbers
curl -LsSf https://astral.sh/uv/install.sh | sh

```

```web-code powershell line-numbers
powershell -ExecutionPolicy ByPass -c "irm https://astral.sh/uv/install.ps1 | iex"

```

You can now integrate the MCP server with various popular AI-enabled code editors and LLM apps.

##### Want to integrate your AI tool?

If you are building an AI code-generation tool that can integrate with MCP servers and would like to collaborate, join our [Technology Partners](https://appwrite.io/integrations/technology-partner) program.

### [Command-line arguments](https://appwrite.io/docs/tooling/mcp\#command-line-arguments)

Database tools are enabled by default. In addition you can pass arguments to uvx mcp-server-appwrite \[args\] to enable other MCP tools for various Appwrite APIs.

| Argument | Description |
| --- | --- |
| --databases | Enables the Databases API |
| --users | Enables the Users API |
| --teams | Enables the Teams API |
| --storage | Enables the Storage API |
| --functions | Enables the Functions API |
| --messaging | Enables the Messaging API |
| --locale | Enables the Locale API |
| --avatars | Enables the Avatars API |
| --all | Enables all Appwrite APIs |

##### Enable only necessary MCP tools

When an MCP tool is enabled, the tool's definition is passed to the LLM, using up tokens from the model's available context window. As a result, the effective context window is reduced.

The default Appwrite MCP server ships with only the Databases tools (our most commonly used API) enabled to stay within these limits. Additional tools can be enabled using the flags below.

###### Recommended

- [API reference/Account](https://appwrite.io/docs/references/cloud/client-web/account)
- [API reference/Teams](https://appwrite.io/docs/references/cloud/client-web/teams)
- [API reference/Databases](https://appwrite.io/docs/references/cloud/client-web/databases)
- [API reference/Storage](https://appwrite.io/docs/references/cloud/client-web/storage)

## Appwrite Databases
[Skip to content](https://appwrite.io/docs/products/databases#main)

[![appwrite](https://appwrite.io/images/logos/appwrite.svg)![appwrite](https://appwrite.io/images/logos/appwrite-light.svg)](https://appwrite.io/)

[Go to Console](https://cloud.appwrite.io/)

Appwrite Databases let you store and query structured data. Databases provide high-performance and scalable data storage for your key application, business, and user data.

##### Looking for file storage?

Databases store data, if you need to store files like images, PDFs or videos, use [Appwrite Storage](https://appwrite.io/docs/products/storage).

You can organize data into databases, collections, and documents. You can also paginate, order, and query documents. For complex business logic, Appwrite supports relationships to help you model your data.

[Quick start](https://appwrite.io/docs/products/databases/quick-start)

###### Recommended

- [API reference/Account](https://appwrite.io/docs/references/cloud/client-web/account)
- [API reference/Teams](https://appwrite.io/docs/references/cloud/client-web/teams)
- [API reference/Databases](https://appwrite.io/docs/references/cloud/client-web/databases)
- [API reference/Storage](https://appwrite.io/docs/references/cloud/client-web/storage)

## Appwrite REST API
[Skip to content](https://appwrite.io/docs/apis/rest#main)

[![appwrite](https://appwrite.io/images/logos/appwrite.svg)![appwrite](https://appwrite.io/images/logos/appwrite-light.svg)](https://appwrite.io/)

[Go to Console](https://cloud.appwrite.io/)

Appwrite supports multiple protocols for accessing the server, including [REST](https://appwrite.io/docs/apis/rest), [GraphQL](https://appwrite.io/docs/apis/graphql), and [Realtime](https://appwrite.io/docs/apis/realtime). The REST API allows you to access your Appwrite server through HTTP requests without the needing an SDK. Each endpoint in the API represents a specific operation on a specific resource.

## [Headers](https://appwrite.io/docs/apis/rest\#headers)

Appwrite's REST APIs expect certain headers to be included with each request:

| Header |  | Description |
| --- | --- | --- |
| X-Appwrite-Project: \[PROJECT-ID\] | required | The ID of your Appwrite project |
| Content-Type: application/json | required | Content type of the HTTP request. Would usually be application/json. |
| X-Appwrite-Key: \[API-KEY\] | optional | API key used for server authentication. Your API key is a secret, **do not** use it in client applications. |
| X-Appwrite-JWT: \[TOKEN\] | optional | Token used for JWT authentication, tokens can be generated using the [Create JWT](https://appwrite.io/docs/products/auth/jwt) method. |
| X-Appwrite-Response-Format: \[VERSION-NUMBER\] | optional | Version number used for backward compatibility. The response will be formatted to be compatible with the provided version number. This helps Appwrite SDKs keep backward compatibility with Appwrite server API version. |
| X-Fallback-Cookies: \[FALLBACK-COOKIES\] | optional | Fallback cookies used in scenarios where browsers do not allow third-party cookies. Often used when there is no Custom Domain set for your Appwrite API. |

## [Authentication](https://appwrite.io/docs/apis/rest\#authentication)

Appwrite supports multiple authentication methods, including account sessions, API keys, and JWTs. The authentication method you use depends on your use case. Below are examples showing how you can authenticate using the REST API.

### [Client integrations](https://appwrite.io/docs/apis/rest\#client-integration)

You can create account sessions with POST requests to the Account API. Sessions are persisted using secured cookies. You can learn more about session persistence in the Authentication Guide.

The example below shows creating an account session with the Create Account Session with Email endpoint.

```web-code json line-numbers
POST /v1/account/sessions/email HTTP/1.1
Content-Type: application/json
X-Appwrite-Project: [PROJECT_ID]

{
  "email": "example@email.com",
  "password": "password"
}

```

You can find the cookies used to persist the new session in the response headers.

```web-code json line-numbers
Set-Cookie: a_session_61e71ec784ab035f7259_legacy=eyJ0...aSJ9; expires=Tue, 19-Dec-2023 21:26:51 GMT; path=/; domain=.cloud.appwrite.io; secure; httponly
Set-Cookie: a_session_61e71ec784ab035f7259=eyJ0...aSJ9; expires=Tue, 19-Dec-2023 21:26:51 GMT; path=/; domain=.cloud.appwrite.io; secure; httponly; samesite=None

```

These cookies are used in subsequent requests to authenticate the user.

```web-code json line-numbers
GET /v1/account HTTP/1.1
Cookie: a_session_61e71ec784ab035f7259_legacy=eyJ0...aSJ9; a_session_61e71ec784ab035f7259=eyJ0...aSJ9
Content-Type: application/json
X-Appwrite-Project: [PROJECT_ID]

```

### [Server integrations](https://appwrite.io/docs/apis/rest\#server-integrations)

Server integrations use API keys to authenticate and are typically used for backend applications.

Server APIs are authenticated with API keys instead of account sessions. Simply pass an [API key](https://appwrite.io/docs/advanced/platform/api-keys) in the X-Appwrite-key: \[API-KEY\] header with the appropriate scopes.

```web-code json line-numbers
GET /v1/databases/{databaseId}/collections/{collectionId}/documents HTTP/1.1
Content-Type: application/json
X-Appwrite-Project: [PROJECT_ID]
X-Appwrite-Key: [API_KEY]

```

### [JWT](https://appwrite.io/docs/apis/rest\#jwt)

JWT authentication is frequently used by server applications to act on behalf of a user. Users generate tokens using the [Create JWT](https://appwrite.io/docs/references/cloud/client-web/account#createJWT) endpoint. When issuing requests authenticated with a JWT, Appwrite will treat the request like it is from the authenticated user.

```web-code json line-numbers
GET /v1/account HTTP/1.1
Content-Type: application/json
X-Appwrite-Project: [PROJECT_ID]
X-Appwrite-JWT: [TOKEN]

```

## [Files](https://appwrite.io/docs/apis/rest\#files)

Appwrite implements resumable, chunked uploads for files larger than 5MB. Chunked uploads send files in chunks of 5MB to reduce memory footprint and increase resilience when handling large files. Appwrite SDKs will automatically handle chunked uploads, but it is possible to implement this with the REST API directly.

Upload endpoints in Appwrite, such as \[Create File\] (/docs/references/cloud/client-web/storage#createFile) and \[Create Deployment\] (/docs/references/cloud/server-nodejs/functions#createDeployment), are different from other endpoints. These endpoints take multipart form data instead of JSON data. To implement chunked uploads, you will need to implement the following headers. If you wish, this logic is already available in any of the [Appwrite SDKs](https://appwrite.io/docs/sdks).

| Header |  | Description |
| --- | --- | --- |
| X-Appwrite-Project: \[PROJECT-ID\] | required | The ID of your Appwrite project |
| Content-Type: multipart/form-data; boundary=\[FORM-BOUNDARY\] | required | Contains the content type of the HTTP request and provides a [boundary](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/POST) that is used to parse the form data. |
| Content-Range: bytes \[BYTE-RANGE\] | required | Contains information about which bytes are being transmitted in this chunk, with the format \[FIRST-BYTE\]-\[LAST-BYTE\]/\[TOTAL-BYTES\]. |
| X-Appwrite-ID: \[FILE-ID\] | required | Contains ID of the file this chunk belongs to. |
| X-Appwrite-Key: \[API-KEY\] | optional | API key used for server authentication. Your API key is a secret, **do not** use it in client applications. |

The multipart form data is structured as follows:

| Key |  | Value | File Name | Description |
| --- | --- | --- | --- | --- |
| fileId | optional | \[FILE-ID\] | N/A | Contains the file ID of the new file. Only used by file chunks following the first chunk uploaded. |
| file | required | \[CHUNK-DATA\] | \[FILE-NAME\] | Contains file chunk data. |
| permissions | required | \[PERMISSION ARRAY\] | N/A | Contains an array of permission strings about who can access the new file. |

While cURL and fetch are great tools to explore other REST endpoints, it's impractical to use for chunked file uploads because you need to split files into chunks.

The multipart form data posted to file upload endpoints have the following format:

```web-code json line-numbers
POST /v1/storage/buckets/default/files HTTP/1.1
Content-Type: multipart/form-data; boundary=----WebKitFormBoundarye0m6iNBQNHlzTpVM
X-Appwrite-Project: demo-project
Content-Range: bytes 10485760-12582912/12582912
X-Appwrite-ID: 6369b0bc1dcf4ff59051

------WebKitFormBoundarye0m6iNBQNHlzTpVM
Content-Disposition: form-data; name="fileId"

unique()
------WebKitFormBoundarye0m6iNBQNHlzTpVM
Content-Disposition: form-data; name="file"; filename="file.txt"
Content-Type: application/octet-stream

[CHUNKED-DATA]
------WebKitFormBoundarye0m6iNBQNHlzTpVM
Content-Disposition: form-data; name="permissions[]"

read("user:627a958ded6424a98a9f")
------WebKitFormBoundarye0m6iNBQNHlzTpVM--

```

## [Images](https://appwrite.io/docs/apis/rest\#images)

Some use cases do not allow custom headers, such as embedding images from Appwrite in HTML. In these cases, you can provide the Appwrite project ID using the query parameter project.

```web-code HTML line-numbers
<img src="[ENDPOINT]/v1/storage/buckets/[BUCKET_ID]/files/[FILE_ID]/preview?project=[PROJECT_ID]"/>

```

## [Permissions](https://appwrite.io/docs/apis/rest\#permissions)

Appwrite SDKs have helpers to generate permission string formats, but when using Appwrite without SDKs, you'd need to create the strings yourself.

| Query method | API string |
| --- | --- |
| Permission.read() | read("\[PERMISSION\_ROLE\]") |
| Permission.create() | read("\[PERMISSION\_ROLE\]") |
| Permission.update() | update("\[PERMISSION\_ROLE\]") |
| Permission.delete() | delete("\[PERMISSION\_ROLE\]") |
| Permission.write() | write("\[PERMISSION\_ROLE\]") |

### [Roles](https://appwrite.io/docs/apis/rest\#roles)

Appwrite SDKs have helpers to generate roles string formats, but when using Appwrite without SDKs, you'd need to create the strings yourself.

| Role method | API string |
| --- | --- |
| Role.any() | any |
| Role.guests() | guests |
| Role.users() | users |
| Role.users(\[STATUS\]) | users/\[STATUS\] |
| Role.user(\[USER\_ID\]) | user:\[USER\_ID\] |
| Role.user(\[USER\_ID\], \[STATUS\]) | user:\[USER\_ID\]/\[STATUS\] |
| Role.team(\[TEAM\_ID\]) | team:\[TEAM\_ID\] |
| Role.team(\[TEAM\_ID\], \[ROLE\]) | team:\[TEAM\_ID\]/\[ROLE\] |
| Role.member(\[MEMBERSHIP\_ID\]) | member:\[MEMBERSHIP\_ID\] |

## [Unique ID](https://appwrite.io/docs/apis/rest\#unique-id)

Appwrite's SDKs have a helper ID.unique() to generate unique IDs. When using Appwrite without an SDK, pass the string "unique()" into the ID parameter.

## [Queries](https://appwrite.io/docs/apis/rest\#queries)

Appwrite's SDKs provide a Query class to generate JSON query strings. When using Appwrite without an SDK, you can template your own JSON strings. You can discover the query methods available in the [Queries page.](https://appwrite.io/docs/products/databases/queries)

### [Query string format](https://appwrite.io/docs/apis/rest\#queries-string-format)

Appwrite Queries are escaped JSON strings, which look like this.

```web-code json line-numbers
"{\"method\":\"equal\",\"attribute\":\"name\",\"values\":[\"John\"]}"

```

Query strings are passed to Appwrite using the queries parameter. You can attach multiple query strings by including the array parameter multiple times in the query string: queries\[\]="..."&queries\[\]="..."

For example, the unescaped query string might look like this.

```web-code text line-numbers
?queries[0]={"method":"equal","attribute":"name","values":["John"]}&queries[1]={"method":"limit","values":[6]}

```

The JSON has a general format like this.

```web-code json line-numbers
{
  "method": "<QUERY_METHOD>",
  "attribute": "<ATTRIBUTE>",
  "values": [\
    <VALUE1>,\
    <VALUE2>,\
    ...\
  ]
}

```

##### Best practice

When using greater than, greater than or equal to, less than, or less than or equal to, it is not recommended to pass in multiple values. While the API will accept multiple values and return results with **or logic**, it's best practice to pass in only one value for performance reasons.

For example, to query for all documents with the name "John" or "Jane", the query string would look like this.

```web-code json line-numbers
{
  "method": "equal",
  "attribute": "name",
  "values": [\
    "John",\
    "Jane"\
  ]
}

```

Here are some more examples of the JSON query format. When in doubt, you can use the Appwrite SDKs to generate the query strings for you.

```web-code json line-numbers
{
  "method": "isNull",
  "attribute": "name"
}
{
  "method": "select",
  "values": ["name", "age", "email"]
}
{
  "method": "between",
  "attribute": "age",
  "values": [18, 30]
}
{
  "method": "cursorAfter",
  "values": ["documentId"]
}

```

### [Query nesting](https://appwrite.io/docs/apis/rest\#query-nesting)

Some Appwrite query methods, like and and or, allow you to nest queries. When using Appwrite without an SDK, you can template your own JSON strings.

In these cases, attribute is empty and values is an array of queries.

```web-code json line-numbers
{
  "method": "and",
  "values": [\
    {\
      "method": "equal",\
      "attribute": "name",\
      "values": ["John"]\
    },\
    {\
      "method": "between",\
      "attribute": "age",\
      "values": [20, 30]\
    }\
  ]
}

```

## [Rate limits](https://appwrite.io/docs/apis/rest\#rate-limits)

Appwrite's REST APIs are protected by the same rate limit policies, just like when using an SDK. Each API has a different rate limit, which is documented in the References section of each service in the Appwrite documentation.

[Learn more about Rate Limits](https://appwrite.io/docs/advanced/platform/rate-limits).

## [Specifications](https://appwrite.io/docs/apis/rest\#specifications)

Appwrite provides a full REST API specification in the OpenAPI 3 and Swagger 2 formats every release. These can be accessed through Appwrite's GitHub repository and rendered using a variety of parsers and tools.

[Find the REST API specification for your Appwrite version](https://github.com/appwrite/appwrite/tree/master/app/config/specs).

###### Recommended

- [API reference/Account](https://appwrite.io/docs/references/cloud/client-web/account)
- [API reference/Teams](https://appwrite.io/docs/references/cloud/client-web/teams)
- [API reference/Databases](https://appwrite.io/docs/references/cloud/client-web/databases)
- [API reference/Storage](https://appwrite.io/docs/references/cloud/client-web/storage)

## Appwrite Functions Overview
[Skip to content](https://appwrite.io/docs/products/functions#main)

[![appwrite](https://appwrite.io/images/logos/appwrite.svg)![appwrite](https://appwrite.io/images/logos/appwrite-light.svg)](https://appwrite.io/)

[Go to Console](https://cloud.appwrite.io/)

Appwrite Functions unlock limitless potential for developers to extend Appwrite with code snippets. Appwrite Functions are user-defined functions that can start small and scale big, deploying automatically from source control. These Functions can be triggered by HTTP requests, SDK methods, server events, webhooks, and scheduled executions. Each function will have its own URL, execute in its own isolated container, and have its own configurable environment variables and permissions.

## [Getting started](https://appwrite.io/docs/products/functions\#getting-started)

Appwrite Functions let you build anything you can imagine, but this flexibility makes it difficult to know where to start. Start exploring by cloning one of the quick start templates or using a template with pre-built integration to quickly implement features.

![Create project screen](https://appwrite.io/images/docs/functions/dark/template.png)

![Create project screen](https://appwrite.io/images/docs/functions/template.png)

[Quick start](https://appwrite.io/docs/products/functions/quick-start)

###### Recommended

- [API reference/Account](https://appwrite.io/docs/references/cloud/client-web/account)
- [API reference/Teams](https://appwrite.io/docs/references/cloud/client-web/teams)
- [API reference/Databases](https://appwrite.io/docs/references/cloud/client-web/databases)
- [API reference/Storage](https://appwrite.io/docs/references/cloud/client-web/storage)

## Appwrite Assistant
[Skip to content](https://appwrite.io/docs/tooling/assistant#main)

[![appwrite](https://appwrite.io/images/logos/appwrite.svg)![appwrite](https://appwrite.io/images/logos/appwrite-light.svg)](https://appwrite.io/)

[Go to Console](https://cloud.appwrite.io/)

The **Appwrite Assistant** is an AI-powered tool engineered to augment Appwrite-related tasks with technical precision. It operates on a foundation of training data sourced from the Appwrite documentation website, enabling it to furnish insights into Appwrite's features, APIs, and documentation. Additionally, it offers functionality for code snippet generation, sample project creation, and problem troubleshooting.

![Using Appwrite Assistant's AI features](https://appwrite.io/images/docs/assistant/dark/ask-ai.png)

![Using Appwrite Assistant's AI features](https://appwrite.io/images/docs/assistant/ask-ai.png)

##### Development

While the Appwrite Assistant remains under active development and is considered experimental, it undergoes incremental refinement. Its proficiency in comprehending user queries and delivering relevant responses improves with sustained usage.

## [Getting started](https://appwrite.io/docs/tooling/assistant\#getting-started)

To engage the Appwrite Assistant, access the Command Center within your Appwrite Console, and proceed to the Ask the AI tab in the navigation.

## [Querying](https://appwrite.io/docs/tooling/assistant\#querying)

The Appwrite Assistant accommodates queries related to Appwrite, encompassing topics such as:

- How to add platform in the console?

- How to integrate Appwrite in my Flutter project?

- How can I create a user account?

- How to store a file in a bucket?


## [Optimizations](https://appwrite.io/docs/tooling/assistant\#optimizations)

For optimal utilization of the Appwrite Assistant, consider the following recommendations:

- **Precision**: Articulate queries with specificity.

- **Natural Language**: The Assistant comprehends plain English, obviating the need for technical terminology.

- **Query Refinement**: In cases of misinterpretation, rephrase queries.

- **Manual Documentation Search**: In scenarios where the Assistant falls short, manually search the Appwrite documentation.


## [Privacy](https://appwrite.io/docs/tooling/assistant\#privacy)

When you use the Appwrite Assistant, your questions are sent to OpenAI to generate a response. OpenAI may collect and store your questions and responses for the purposes of improving their services.

###### Recommended

- [API reference/Account](https://appwrite.io/docs/references/cloud/client-web/account)
- [API reference/Teams](https://appwrite.io/docs/references/cloud/client-web/teams)
- [API reference/Databases](https://appwrite.io/docs/references/cloud/client-web/databases)
- [API reference/Storage](https://appwrite.io/docs/references/cloud/client-web/storage)

## Appwrite Messaging
[Skip to content](https://appwrite.io/docs/products/messaging#main)

[![appwrite](https://appwrite.io/images/logos/appwrite.svg)![appwrite](https://appwrite.io/images/logos/appwrite-light.svg)](https://appwrite.io/)

[Go to Console](https://cloud.appwrite.io/)

Appwrite Messaging helps you communicate with your users through push notifications, emails, and SMS text messages. Sending personalized communication for marketing, updates, and realtime alerts can increase user engagement and retention. You can also use Appwrite Messaging to implement security checks and custom authentication flows.

![Messaging overview](https://appwrite.io/images/docs/messaging/dark/message-overview.png)

![Messaging overview](https://appwrite.io/images/docs/messaging/message-overview.png)

Explore what you can build with Appwrite Messaging.

- [Send newsletters, invoices, promotions and other emails.](https://appwrite.io/docs/products/messaging/send-email-messages)
- [Send SMS messages straight to your user's phone.](https://appwrite.io/docs/products/messaging/send-sms-messages)
- [Send push notifications to your user's devices.](https://appwrite.io/docs/products/messaging/send-push-notifications)

###### Recommended

- [API reference/Account](https://appwrite.io/docs/references/cloud/client-web/account)
- [API reference/Teams](https://appwrite.io/docs/references/cloud/client-web/teams)
- [API reference/Databases](https://appwrite.io/docs/references/cloud/client-web/databases)
- [API reference/Storage](https://appwrite.io/docs/references/cloud/client-web/storage)

## Appwrite Storage
[Skip to content](https://appwrite.io/docs/products/storage#main)

[![appwrite](https://appwrite.io/images/logos/appwrite.svg)![appwrite](https://appwrite.io/images/logos/appwrite-light.svg)](https://appwrite.io/)

[Go to Console](https://cloud.appwrite.io/)

Appwrite Storage allows you to manage files in your project. You can use it to store images, videos, documents, and other files for your projects. It provides APIs to upload, download, delete, and list files, with many added utilities.

##### Looking for a database?

Appwrite Storage stores files like images, PDFs or videos. If you need to store data like profiles, recipes, or transactions, use [Appwrite Databases](https://appwrite.io/docs/products/databases).

## [Get started](https://appwrite.io/docs/products/storage\#get-started)

Get started with Appwrite Storage. Learn to setup up a bucket, upload, and download your first file.

[Quick start](https://appwrite.io/docs/products/storage/quick-start)

###### Recommended

- [API reference/Account](https://appwrite.io/docs/references/cloud/client-web/account)
- [API reference/Teams](https://appwrite.io/docs/references/cloud/client-web/teams)
- [API reference/Databases](https://appwrite.io/docs/references/cloud/client-web/databases)
- [API reference/Storage](https://appwrite.io/docs/references/cloud/client-web/storage)

## AI Application Development
[Skip to content](https://appwrite.io/docs/products/ai#main)

[![appwrite](https://appwrite.io/images/logos/appwrite.svg)![appwrite](https://appwrite.io/images/logos/appwrite-light.svg)](https://appwrite.io/)

[Go to Console](https://cloud.appwrite.io/)

Appwrite allows you to build powerful AI powered applications with ease. Leverage Appwrite's powerful functions architecture and start building the future.

## [Explore capabilities](https://appwrite.io/docs/products/ai\#explore-capabilities)

Detailed explanations and deep dives into how you can implement different machine techniques in your Appwrite projects.

- [![](https://appwrite.io/images/docs/ai/computer-vision-dark.png)![](https://appwrite.io/images/docs/ai/computer-vision-light.png)**Computer vision** \\
Label and understand the contents of images](https://appwrite.io/docs/products/ai/computer-vision)
- [![](https://appwrite.io/images/docs/ai/natural-language-dark.png)![](https://appwrite.io/images/docs/ai/natural-language-light.png)**Natural language processing** \\
Understand and generate human language](https://appwrite.io/docs/products/ai/natural-language)
- [![](https://appwrite.io/images/docs/ai/audio-processing-dark.png)![](https://appwrite.io/images/docs/ai/audio-processing-light.png)**Audio processing** \\
Process and generate audio data](https://appwrite.io/docs/products/ai/audio-processing)

## [Show me some code](https://appwrite.io/docs/products/ai\#show-me-some-code)

If you learn best from code examples, follow one of our tutorials.

#### [Computer vision](https://appwrite.io/docs/products/ai\#computer-vision)

- [Understand and label the contents of images](https://appwrite.io/docs/products/ai/tutorials/image-classification)
- [Detect and label objects in images](https://appwrite.io/docs/products/ai/tutorials/object-detection)

#### [Natural language](https://appwrite.io/docs/products/ai\#natural-language)

- [Generate human-like text](https://appwrite.io/docs/products/ai/tutorials/text-generation)
- [Translate text between languages](https://appwrite.io/docs/products/ai/tutorials/language-translation)

#### [Audio processing](https://appwrite.io/docs/products/ai\#audio-processing)

- [Process speech audio into text](https://appwrite.io/docs/products/ai/tutorials/speech-recognition)
- [Convert text into speech](https://appwrite.io/docs/products/ai/tutorials/text-to-speech)
- [Generate music from a text prompt](https://appwrite.io/docs/products/ai/tutorials/music-generation)

###### Recommended

- [API reference/Account](https://appwrite.io/docs/references/cloud/client-web/account)
- [API reference/Teams](https://appwrite.io/docs/references/cloud/client-web/teams)
- [API reference/Databases](https://appwrite.io/docs/references/cloud/client-web/databases)
- [API reference/Storage](https://appwrite.io/docs/references/cloud/client-web/storage)

## Appwrite Quick Starts
[Skip to content](https://appwrite.io/docs/quick-starts#main)

[![appwrite](https://appwrite.io/images/logos/appwrite.svg)![appwrite](https://appwrite.io/images/logos/appwrite-light.svg)](https://appwrite.io/)

[Go to Console](https://cloud.appwrite.io/)

## Web app

## Mobile and native

## Server

###### Recommended

- [API reference/Account](https://appwrite.io/docs/references/cloud/client-web/account)
- [API reference/Teams](https://appwrite.io/docs/references/cloud/client-web/teams)
- [API reference/Databases](https://appwrite.io/docs/references/cloud/client-web/databases)
- [API reference/Storage](https://appwrite.io/docs/references/cloud/client-web/storage)

## Appwrite Integration Guide
[Skip to content](https://appwrite.io/docs/advanced/integration#main)

[![appwrite](https://appwrite.io/images/logos/appwrite.svg)![appwrite](https://appwrite.io/images/logos/appwrite-light.svg)](https://appwrite.io/)

[Go to Console](https://cloud.appwrite.io/)

Integration

###### Recommended

- [API reference/Account](https://appwrite.io/docs/references/cloud/client-web/account)
- [API reference/Teams](https://appwrite.io/docs/references/cloud/client-web/teams)
- [API reference/Databases](https://appwrite.io/docs/references/cloud/client-web/databases)
- [API reference/Storage](https://appwrite.io/docs/references/cloud/client-web/storage)

## Idea Tracker Tutorial
[Skip to content](https://appwrite.io/docs/tutorials/nuxt/step-1#main)

[![appwrite](https://appwrite.io/images/logos/appwrite.svg)![appwrite](https://appwrite.io/images/logos/appwrite-light.svg)](https://appwrite.io/)

[Go to Console](https://cloud.appwrite.io/)

**Idea tracker**: an app to track all the side project ideas that you'll start, but probably never finish. In this tutorial, you will build Idea tracker with Appwrite and Nuxt.

![Create project screen](https://appwrite.io/images/docs/tutorials/dark/idea-tracker.png)

![Create project screen](https://appwrite.io/images/docs/tutorials/idea-tracker.png)

## [Concepts](https://appwrite.io/docs/tutorials/nuxt/step-1\#)

This tutorial will introduce the following concepts:

1. Setting up your first project

2. Authentication

3. Navigation

4. Databases and collections

5. Queries


## [Prerequisites](https://appwrite.io/docs/tutorials/nuxt/step-1\#)

1. Basic knowledge of JavaScript.

2. Have [Node.js](https://nodejs.org/en) and [NPM](https://www.npmjs.com/) installed on your computer.


[Step 2: Create app](https://appwrite.io/docs/tutorials/nuxt/step-2)

###### Recommended

- [API reference/Account](https://appwrite.io/docs/references/cloud/client-web/account)
- [API reference/Teams](https://appwrite.io/docs/references/cloud/client-web/teams)
- [API reference/Databases](https://appwrite.io/docs/references/cloud/client-web/databases)
- [API reference/Storage](https://appwrite.io/docs/references/cloud/client-web/storage)

## Idea Tracker Tutorial
[Skip to content](https://appwrite.io/docs/tutorials/vue/step-1#main)

[![appwrite](https://appwrite.io/images/logos/appwrite.svg)![appwrite](https://appwrite.io/images/logos/appwrite-light.svg)](https://appwrite.io/)

[Go to Console](https://cloud.appwrite.io/)

**Idea tracker**: an app to track all the side project ideas that you'll start, but probably never finish. In this tutorial, you will build Idea tracker with Appwrite and Vue.

![Create project screen](https://appwrite.io/images/docs/tutorials/dark/idea-tracker.png)

![Create project screen](https://appwrite.io/images/docs/tutorials/idea-tracker.png)

## [Concepts](https://appwrite.io/docs/tutorials/vue/step-1\#concepts)

This tutorial will introduce the following concepts:

1. Setting up your first project

2. Authentication

3. Databases and collections

4. Queries and pagination


## [Prerequisites](https://appwrite.io/docs/tutorials/vue/step-1\#prerequisites)

1. Basic knowledge of JavaScript and Vue.

2. Have [Node.js](https://nodejs.org/en) and [NPM](https://www.npmjs.com/) installed on your computer.


[Step 2: Create app](https://appwrite.io/docs/tutorials/vue/step-2)

###### Recommended

- [API reference/Account](https://appwrite.io/docs/references/cloud/client-web/account)
- [API reference/Teams](https://appwrite.io/docs/references/cloud/client-web/teams)
- [API reference/Databases](https://appwrite.io/docs/references/cloud/client-web/databases)
- [API reference/Storage](https://appwrite.io/docs/references/cloud/client-web/storage)

## Blog Admin Panel
[Skip to content](https://appwrite.io/docs/tutorials/refine/step-1#main)

[![appwrite](https://appwrite.io/images/logos/appwrite.svg)![appwrite](https://appwrite.io/images/logos/appwrite-light.svg)](https://appwrite.io/)

[Go to Console](https://cloud.appwrite.io/)

**Blog admin panel**: a CRUD app to manage Blog content. In this tutorial, you will build admin panel app with Appwrite and [Refine](https://github.com/refinedev/refine).

![Create project screen](https://appwrite.io/images/docs/tutorials/refine/refine-admin-panel-dark.png)

![Create project screen](https://appwrite.io/images/docs/tutorials/refine/refine-admin-panel-light.png)

## [Concepts](https://appwrite.io/docs/tutorials/refine/step-1\#concepts)

This tutorial will introduce the following concepts:

1. Setting up your first project

2. Authentication

3. Databases and collections

4. Queries and pagination


## [Prerequisites](https://appwrite.io/docs/tutorials/refine/step-1\#prerequisites)

1. Basic knowledge of Typescript and React.

2. Have [Node.js](https://nodejs.org/en) and [NPM](https://www.npmjs.com/) installed on your computer


[Step 2: Create app](https://appwrite.io/docs/tutorials/refine/step-2)

###### Recommended

- [API reference/Account](https://appwrite.io/docs/references/cloud/client-web/account)
- [API reference/Teams](https://appwrite.io/docs/references/cloud/client-web/teams)
- [API reference/Databases](https://appwrite.io/docs/references/cloud/client-web/databases)
- [API reference/Storage](https://appwrite.io/docs/references/cloud/client-web/storage)

## Appwrite Database Documents
[Skip to content](https://appwrite.io/docs/products/databases/documents#main)

[![appwrite](https://appwrite.io/images/logos/appwrite.svg)![appwrite](https://appwrite.io/images/logos/appwrite-light.svg)](https://appwrite.io/)

[Go to Console](https://cloud.appwrite.io/)

Each piece of data or information in Appwrite Databases is a document. Documents have a structure defined by the parent collection.

## [Create documents](https://appwrite.io/docs/products/databases/documents\#create-documents)

##### Permissions required

You must grant **create** permissions to users at the **collection level** before users can create documents. [Learn more about permissions](https://appwrite.io/docs/products/databases/documents#permissions)

In most use cases, you will create documents programmatically.

```web-code client-web line-numbers
import { Client, Databases, ID } from "appwrite";

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1')
    .setProject('<PROJECT_ID>');

const databases = new Databases(client);

const promise = databases.createDocument(
    '<DATABASE_ID>',
    '[COLLECTION_ID]',
    ID.unique(),
    {}
);

promise.then(function (response) {
    console.log(response);
}, function (error) {
    console.log(error);
});

```

During testing, you might prefer to create documents in the Appwrite Console. To do so, navigate to the **Documents** tab of your collection and click the **Add document** button.

## [List documents](https://appwrite.io/docs/products/databases/documents\#list-documents)

##### Permissions required

You must grant **read** permissions to users at the **collection level** before users can read documents. [Learn more about permissions](https://appwrite.io/docs/products/databases/documents#permissions)

Documents can be retrieved using the [List Document](https://appwrite.io/docs/references/cloud/client-web/databases#listDocuments) endpoint.

Results can be filtered, sorted, and paginated using Appwrite's shared set of query methods. You can find a full guide on querying in the [Queries Guide](https://appwrite.io/docs/products/databases/queries).

By default, results are limited to the **first 25 items**. You can change this through [pagination](https://appwrite.io/docs/products/databases/pagination).

```web-code client-web line-numbers
import { Client, Databases, Query } from "appwrite";

const client = new Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1")
    .setProject("<PROJECT_ID>")

const databases = new Databases(client);

let promise = databases.listDocuments(
    "<DATABASE_ID>",
    "<COLLECTION_ID>",
    [\
        Query.equal('title', 'Avatar')\
    ]
);

promise.then(function (response) {
    console.log(response);
}, function (error) {
    console.log(error);
});

```

## [Permissions](https://appwrite.io/docs/products/databases/documents\#permissions)

In Appwrite, permissions can be granted at the collection level and the document level. Before a user can create a document, you need to grant create permissions to the user.

Read, update, and delete permissions can be granted at both the collection and document level. Users only need to be granted access at either the collection or document level to access documents.

[Learn about configuring permissions](https://appwrite.io/docs/products/databases/permissions).

###### Recommended

- [API reference/Account](https://appwrite.io/docs/references/cloud/client-web/account)
- [API reference/Teams](https://appwrite.io/docs/references/cloud/client-web/teams)
- [API reference/Databases](https://appwrite.io/docs/references/cloud/client-web/databases)
- [API reference/Storage](https://appwrite.io/docs/references/cloud/client-web/storage)

## FCM Integration Guide
[Skip to content](https://appwrite.io/docs/products/messaging/fcm#main)

[![appwrite](https://appwrite.io/images/logos/appwrite.svg)![appwrite](https://appwrite.io/images/logos/appwrite-light.svg)](https://appwrite.io/)

[Go to Console](https://cloud.appwrite.io/)

Firebase Cloud Messaging (FCM) lets you send push notifications to your iOS, Android, and web apps through Appwrite Messaging. Before you can deliver messages, you must connect to a messaging provider.

To add FCM as a provider, navigate to **Messaging** \> **Providers** \> **Add provider** \> **Push notification**.

![Add a FCM provider](https://appwrite.io/images/docs/messaging/providers/fcm/dark/provider.png)

![Add a FCM provider](https://appwrite.io/images/docs/messaging/providers/fcm/provider.png)

Give your provider a name > choose **FCM** \> click **Save and continue**. The provider will be saved to your project, but not enabled until you complete its configuration.

In the **Configure** step, you will need to provide details from your Firebase console to connect your Appwrite project.

You will need to provide the following information from the **Firebase console**.

##### Enable FCM

FCM must be enabled on your Firebase project.

Head to Firebase console -> Settings -> Project settings -> Cloud Messaging. If FCM is disabled, click the three-dots menu and open the link. On the following page, click **Enable** (it might take a few minutes for the action to complete).

Head to **Project settings** \> **Service accounts** \> **Generate new private key**.

![FCM admin key](https://appwrite.io/images/docs/messaging/providers/fcm/dark/admin-key.png)

![FCM admin key](https://appwrite.io/images/docs/messaging/providers/fcm/admin-key.png)

After all the relevant details are provided, you can enable the provider.

Some additional configuration is required to enable push notifications in your mobile app.

Android with FCMiOS with FCM

Android with FCMiOS with FCM

1. Install the com.google.firebase:firebase-messaging Firebase SDK.

2. In your Firebase console, navigate to **Settings** \> **General** \> **Your apps** \> add an **Android** app.

3. Register and download your google-services.json config file.

4. Add google-services.json at the root of your project.

5. Add Google Services class path to your app-level Gradle dependencies block "com.google.gms:google-services:4.4.0".

6. Add Google Services plugin to your app-level Gradle in the plugins block as "com.google.gms.google-services".

7. Add notification handler service to AndroidManifest.xml inside the application tag, alongside other activities. Find an example of this service in the [Send push notification](https://appwrite.io/docs/products/messaging/send-push-notifications#add-targets) journey.


```web-code xml line-numbers
<service android:name="<YOUR_NOTIFICATION_HANDLER_SERVICE>" android:exported="false">
    <intent-filter>
        <action android:name="com.google.firebase.MESSAGING_EVENT" />
    </intent-filter>
</service>

```

1. In your Firebase console, navigate to **Settings** \> **General** \> **Your apps** \> add an **iOS** app.

2. Register and download your GoogleService-Info.plist and add it to the root of your project.

3. Head to **Apple Developer Member Center** \> **Program resources** \> **Certificates, Identifiers & Profiles** \> **Keys**. The key needs **Apple Push Notification Service** enabled.

4. Create a new key, note down the key ID and download your key.

5. In Firebase console, go to _Settings_\\* \> **Cloud Messaging** \> **APNs authentication key** \> click **Upload**. Upload your key here.

6. Add push notification capability to your app by clicking your root-level app in XCode > **Signing & Capabilities** \>  Capabilities > Search for **Push Notifications**.

7. If using SwiftUI, disable swizzling by setting FirebaseAppDelegateProxyEnabled to NO in your Info.plist.


Push notification requires special handling on the client side. Follow the [Send push notification](https://appwrite.io/docs/products/messaging/send-push-notifications) flow to test your provider.

ConsoleServer SDK

ConsoleServer SDK

You can update or delete a provider in the Appwrite Console.

Navigate to **Messaging** \> **Providers** \> click your provider. In the settings, you can update a provider's configuration or delete the provider.

To update or delete providers programmatically, use an [Appwrite Server SDK](https://appwrite.io/docs/sdks#server).

```web-code server-nodejs line-numbers
const sdk = require('node-appwrite');

// Init SDK
const client = new sdk.Client();

const messaging = new sdk.Messaging(client);

client
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<PROJECT_ID>')                 // Your project ID
    .setKey('919c2d18fb5d4...a2ae413da83346ad2') // Your secret API key
;

const provider = await messaging.updateFCMProvider(
        '[PROVIDER_ID]',                         // providerId
        '[NAME]',                                // name (optional)
        false,                                   // enabled (optional)
        {}                                       // serviceAccountJSON (optional)
    );

```

###### Recommended

- [API reference/Account](https://appwrite.io/docs/references/cloud/client-web/account)
- [API reference/Teams](https://appwrite.io/docs/references/cloud/client-web/teams)
- [API reference/Databases](https://appwrite.io/docs/references/cloud/client-web/databases)
- [API reference/Storage](https://appwrite.io/docs/references/cloud/client-web/storage)

## JWT Authentication Guide
[Skip to content](https://appwrite.io/docs/products/auth/jwt#main)

[![appwrite](https://appwrite.io/images/logos/appwrite.svg)![appwrite](https://appwrite.io/images/logos/appwrite-light.svg)](https://appwrite.io/)

[Go to Console](https://cloud.appwrite.io/)

You can extend Appwrite's APIs by building backend apps using [Server SDKs](https://appwrite.io/docs/sdks#server). To secure your backend app's APIs, client apps must prove their identity against your backend app before accessing sensitive information. You can secure these APIs and enforce access permissions in your backend app by using JWT authentication.

If you are already authenticated on your client-side app and need your backend app to **act on behalf of the user**, this guide will walk you through the process.

## [Proof of Identity](https://appwrite.io/docs/products/auth/jwt\#proof-of-identity)

Before making requests to your backend APIs, your client application needs to first create a session **directly with Appwrite** using the account service. This session will act like an ID card for the user and can be used to access resources in Appwrite. The client will **only receive information accessible to the user** based on the resources' [permissions](https://appwrite.io/docs/advanced/platform/permissions).

When you build backend APIs to extend Appwrite's functionality, these APIs should still **respect access permissions** to keep user data secure. Appwrite's backend SDKs allow you to securely act on behalf of a user with the same permissions by using JWT authentication.

## [JWT Authentication](https://appwrite.io/docs/products/auth/jwt\#jwt)

[JSON Web Tokens](https://jwt.io/introduction) (JWTs) are a secure means to transfer information or claims between two parties. JWTs act like temporary copies of the user's ID card that allow Appwrite's Server SDKs to access information on behalf of a user.

You need to create a session using the Client SDKs **before** generating a JWT. The JWT will be a stateless proof of claim for the identity of the authenticated user and expire after 15 minutes or when the session is deleted.

You can generate a JWT like this on a [Client SDK](https://appwrite.io/docs/sdks#client).

```web-code client-web line-numbers
import { Client, Account } from "appwrite";

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<PROJECT_ID>');                 // Your project ID

const account = new Account(client);

const user = await account.createJWT();

```

Your server application can use the JWT to act on behalf of the user by creating a Client instance with the JWT for **each request it receives**. To keep your API secure, **discard the client object** after each request.

Use JWTs tokens like this in a [Server SDK](https://appwrite.io/docs/sdks#server).

```web-code js line-numbers
const { Client } = require('node-appwrite');

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<PROJECT_ID>')                  // Your project ID
    .setJWT('eyJJ9.eyJ...886ca');                // Your secret JSON Web Token

```

## [When should I use JWTs?](https://appwrite.io/docs/products/auth/jwt\#when-to-use)

JWT auth is useful when you need your backend app's Server SDK to be restricted by the same set of permissions.

If your backend app's Server SDK is using an [API key](https://appwrite.io/docs/advanced/platform/api-keys), it will fetch **all resources** regardless of permissions. This means the Server SDK might fetch files and documents your user should not be able to see, which is not helpful when you need to act on behalf of a user.

If your backend app's Server SDK is using a **JWT**, it will only fetch resources your user has permissions to access.

## [Example](https://appwrite.io/docs/products/auth/jwt\#when-to-use-example)

Here's an example collection of birthdays with the following documents. Notice how they all have **different permissions**.

| $id | name | birthday | $permissions |
| --- | --- | --- | --- |
| ac5fc866ad1e | Kevin | 2012-02-03 | "read("user:user-a")" |
| bc7fc866ad1e | Laura | 1999-09-22 | "read("user:user-b")" |
| cc2fc886ad1e | Bob | 1982-05-11 | "read("user:user-c")" |

If you're authenticated on the client-side as user-a and created a JWT 'eyJJ9.eyJ...886ca', you can pass this JWT to a Server SDK on the backend server to fetch only the birthdays user-a can read.

```web-code js line-numbers
const { Client } = require('node-appwrite');

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<PROJECT_ID>')                  // Your project ID
    .setJWT('eyJJ9.eyJ...886ca');                // Your secret JSON Web Token

const databases = new sdk.Databases(client);

const documents = await databases.listDocuments(
    '642f358bf4084c662590',
    '642f3592aa5fc856ad1e'
);
// ... More code to manipulate the results

```

Only Kevin's birthday is returned and documents where user-A has no permissions to access are not returned.

```web-code js line-numbers
{
  "total": 1,
  "documents": [\
    {\
      "name": "Kevin",\
      "birthday": "2012-02-03T00:00:00.000+00:00",\
      "$id": "ac5fc866ad1e",\
      "$permissions": [\
        "read(\"user:user-a\")"\
      ],\
      "$collectionId": "642f3592aa5fc856ad1e",\
      "$databaseId": "642f358bf4084c662590",\
      ...\
    }\
  ]
}

```

If the same request is made where the [Server SDK](https://appwrite.io/docs/sdks#server)'s client is authenticated with an API key instead of a JWT, the results returned will be different.

```web-code js line-numbers
const { Client } = require('node-appwrite');

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<PROJECT_ID>')                  // Your project ID
    .setKey('98fd4...a2ad2');                    // Your secret API key

const databases = new sdk.Databases(client);

const documents = await databases.listDocuments(
    '642f358bf4084c662590',
    '642f3592aa5fc856ad1e'
);
// ... More code to manipulate the results

```

This will return every document regardless of permissions, which could lead to privacy and security problems.

```web-code json line-numbers
{
  "total": 3,
  "documents": [\
    {\
      "name": "Kevin",\
      "birthday": "2012-02-03T00:00:00.000+00:00",\
      "$id": "ac5fc866ad1e",\
      "$permissions": [\
        "read(\"user:user-a\")"\
      ],\
      "$collectionId": "642f3592aa5fc856ad1e",\
      "$databaseId": "642f358bf4084c662590",\
      ...\
    },\
    {\
      "name": "Laura",\
      "birthday": "1999-09-22T11:21:23.334+00:00",\
      "$id": "bc7fc866ad1e",\
      "$permissions": [\
        "read(\"user:user-b\")"\
      ],\
      "$collectionId": "642f3592aa5fc856ad1e",\
      "$databaseId": "642f358bf4084c662590",\
      ...\
    },\
    {\
      "name": "Bob",\
      "birthday": "1982-05-11T12:31:39.381+00:00",\
      "$id": "cc2fc886ad1e",\
      "$permissions": [\
        "read(\"user:user-c\")"\
      ],\
      "$collectionId": "642f3592aa5fc856ad1e",\
      "$databaseId": "642f358bf4084c662590",\
      ...\
    }\
  ]
}

```

If you're integrating existing backend services with Appwrite or adding backend endpoints to perform more complex logic, JWT authentication helps them behave similarly to actual Appwrite endpoints.

###### Recommended

- [API reference/Account](https://appwrite.io/docs/references/cloud/client-web/account)
- [API reference/Teams](https://appwrite.io/docs/references/cloud/client-web/teams)
- [API reference/Databases](https://appwrite.io/docs/references/cloud/client-web/databases)
- [API reference/Storage](https://appwrite.io/docs/references/cloud/client-web/storage)

## Appwrite Events Overview
[Skip to content](https://appwrite.io/docs/advanced/platform/events#main)

[![appwrite](https://appwrite.io/images/logos/appwrite.svg)![appwrite](https://appwrite.io/images/logos/appwrite-light.svg)](https://appwrite.io/)

[Go to Console](https://cloud.appwrite.io/)

Appwrite provides a variety of events that allows your application to react to changes as they happen. A event will fire when a change occurs in your Appwrite project, like when a new user registers or a new file is uploaded to Appwrite. You can subscribe to these events with Appwrite [Functions](https://appwrite.io/docs/products/functions), [Realtime](https://appwrite.io/docs/apis/realtime), or [Webhooks](https://appwrite.io/docs/advanced/platform/webhooks).

You can subscribe to events for specific resources using their ID or subscribe to changes of all resources of the same type by using a wildcard character \* instead of an ID. You can also filter for events of specific actions like create, update, or delete.

You can find a list of events for Storage, Databases, Functions, and Authentication services below.

- Authentication












| Name | Description |
| --- | --- |
| teams.\* | This event triggers on any teams event. Returns [Team Object](https://appwrite.io/docs/references/cloud/models/team) |
| teams.\*.create | This event triggers when a team is created. Returns [Team Object](https://appwrite.io/docs/references/cloud/models/team) |
| teams.\*.delete | This event triggers when a team is deleted. Returns [Team Object](https://appwrite.io/docs/references/cloud/models/team) |
| teams.\*.memberships.\* | This event triggers on any team memberships event. Returns [Membership Object](https://appwrite.io/docs/references/cloud/models/membership) |
| teams.\*.memberships.\*.create | This event triggers when a membership is created. Returns [Membership Object](https://appwrite.io/docs/references/cloud/models/membership) |
| teams.\*.memberships.\*.delete | This event triggers when a membership is deleted. Returns [Membership Object](https://appwrite.io/docs/references/cloud/models/membership) |
| teams.\*.memberships.\*.update | This event triggers when a membership is updated. Returns [Membership Object](https://appwrite.io/docs/references/cloud/models/membership) |
| teams.\*.memberships.\*.update.status | This event triggers when a team memberships status is updated. Returns [Membership Object](https://appwrite.io/docs/references/cloud/models/membership) |
| teams.\*.update | This event triggers when a team is updated. Returns [Team Object](https://appwrite.io/docs/references/cloud/models/team) |
| teams.\*.update.prefs | This event triggers when a team's preferences are updated. Returns [Team Object](https://appwrite.io/docs/references/cloud/models/team) |
| users.\* | This event triggers on any user's event. Returns [User Object](https://appwrite.io/docs/references/cloud/models/user) |
| users.\*.create | This event triggers when a user is created. Returns [User Object](https://appwrite.io/docs/references/cloud/models/user) |
| users.\*.delete | This event triggers when a user is deleted. Returns [User Object](https://appwrite.io/docs/references/cloud/models/user) |
| users.\*.recovery.\* | This event triggers on any user's recovery token event. Returns [Token Object](https://appwrite.io/docs/references/cloud/models/token) |
| users.\*.recovery.\*.create | This event triggers when a recovery token for a user is created. Returns [Token Object](https://appwrite.io/docs/references/cloud/models/token) |
| users.\*.recovery.\*.update | This event triggers when a recovery token for a user is validated. Returns [Token Object](https://appwrite.io/docs/references/cloud/models/token) |
| users.\*.sessions.\* | This event triggers on any user's sessions event. Returns [Session Object](https://appwrite.io/docs/references/cloud/models/session) |
| users.\*.sessions.\*.create | This event triggers when a session for a user is created. Returns [Session Object](https://appwrite.io/docs/references/cloud/models/session) |
| users.\*.sessions.\*.delete | This event triggers when a session for a user is deleted. Returns [Session Object](https://appwrite.io/docs/references/cloud/models/session) |
| users.\*.update | This event triggers when a user is updated. Returns [User Object](https://appwrite.io/docs/references/cloud/models/user) |
| users.\*.update.email | This event triggers when a user's email address is updated. Returns [User Object](https://appwrite.io/docs/references/cloud/models/user) |
| users.\*.update.name | This event triggers when a user's name is updated. Returns [User Object](https://appwrite.io/docs/references/cloud/models/user) |
| users.\*.update.password | This event triggers when a user's password is updated. Returns [User Object](https://appwrite.io/docs/references/cloud/models/user) |
| users.\*.update.prefs | This event triggers when a user's preferences is updated. Returns [User Object](https://appwrite.io/docs/references/cloud/models/user) |
| users.\*.update.status | This event triggers when a user's status is updated. Returns [User Object](https://appwrite.io/docs/references/cloud/models/user) |
| users.\*.verification.\* | This event triggers on any user's verification token event. Returns [Token Object](https://appwrite.io/docs/references/cloud/models/token) |
| users.\*.verification.\*.create | This event triggers when a verification token for a user is created. Returns [Token Object](https://appwrite.io/docs/references/cloud/models/token) |
| users.\*.verification.\*.update | This event triggers when a verification token for a user is validated. Returns [Token Object](https://appwrite.io/docs/references/cloud/models/token) |

- Databases












| Name | Description |
| --- | --- |
| databases.\* | This event triggers on any database event. Returns [Database Object](https://appwrite.io/docs/references/cloud/models/database) |
| databases.\*.collections.\* | This event triggers on any collection event. Returns [Collection Object](https://appwrite.io/docs/references/cloud/models/collection) |
| databases.\*.collections.\*.attributes.\* | This event triggers on any attributes event. Returns [Attribute Object](https://appwrite.io/docs/references/cloud/models/attributeList) |
| databases.\*.collections.\*.attributes.\*.create | This event triggers when an attribute is created. Returns [Attribute Object](https://appwrite.io/docs/references/cloud/models/attributeList) |
| databases.\*.collections.\*.attributes.\*.delete | This event triggers when an attribute is deleted. Returns [Attribute Object](https://appwrite.io/docs/references/cloud/models/attributeList) |
| databases.\*.collections.\*.create | This event triggers when a collection is created. Returns [Collection Object](https://appwrite.io/docs/references/cloud/models/collection) |
| databases.\*.collections.\*.delete | This event triggers when a collection is deleted. Returns [Collection Object](https://appwrite.io/docs/references/cloud/models/collection) |
| databases.\*.collections.\*.documents.\* | This event triggers on any documents event. Returns [Document Object](https://appwrite.io/docs/references/cloud/models/document) |
| databases.\*.collections.\*.documents.\*.create | This event triggers when a document is created. Returns [Document Object](https://appwrite.io/docs/references/cloud/models/document) |
| databases.\*.collections.\*.documents.\*.delete | This event triggers when a document is deleted. Returns [Document Object](https://appwrite.io/docs/references/cloud/models/document) |
| databases.\*.collections.\*.documents.\*.update | This event triggers when a document is updated. Returns [Document Object](https://appwrite.io/docs/references/cloud/models/document) |
| databases.\*.collections.\*.indexes.\* | This event triggers on any indexes event. Returns [Index Object](https://appwrite.io/docs/references/cloud/models/index) |
| databases.\*.collections.\*.indexes.\*.create | This event triggers when an index is created. Returns [Index Object](https://appwrite.io/docs/references/cloud/models/index) |
| databases.\*.collections.\*.indexes.\*.delete | This event triggers when an index is deleted. Returns [Index Object](https://appwrite.io/docs/references/cloud/models/index) |
| databases.\*.collections.\*.update | This event triggers when a collection is updated. Returns [Collection Object](https://appwrite.io/docs/references/cloud/models/collection) |
| databases.\*.create | This event triggers when a database is created. Returns [Database Object](https://appwrite.io/docs/references/cloud/models/database) |
| databases.\*.delete | This event triggers when a database is deleted. Returns [Database Object](https://appwrite.io/docs/references/cloud/models/database) |
| databases.\*.update | This event triggers when a database is updated. Returns [Database Object](https://appwrite.io/docs/references/cloud/models/database) |

- Storage












| Name | Description |
| --- | --- |
| buckets.\* | This event triggers on any buckets event. Returns [Bucket Object](https://appwrite.io/docs/references/cloud/models/bucket) |
| buckets.\*.create | This event triggers when a bucket is created. Returns [Bucket Object](https://appwrite.io/docs/references/cloud/models/bucket) |
| buckets.\*.delete | This event triggers when a bucket is deleted. Returns [Bucket Object](https://appwrite.io/docs/references/cloud/models/bucket) |
| buckets.\*.files.\* | This event triggers on any files event. Returns [File Object](https://appwrite.io/docs/references/cloud/models/file) |
| buckets.\*.files.\*.create | Since the Appwrite SDK chunks files in 5MB increments, this event will trigger for each 5MB chunk. A file is fully uploaded when chunksTotal equals chunksUploaded. Returns [File Object](https://appwrite.io/docs/references/cloud/models/file) |
| buckets.\*.files.\*.delete | This event triggers when a file is deleted. Returns [File Object](https://appwrite.io/docs/references/cloud/models/file) |
| buckets.\*.files.\*.update | This event triggers when a file is updated. Returns [File Object](https://appwrite.io/docs/references/cloud/models/file) |
| buckets.\*.update | This event triggers when a bucket is updated. Returns [Bucket Object](https://appwrite.io/docs/references/cloud/models/bucket) |

- Functions












| Name | Description |
| --- | --- |
| functions.\* | This event triggers on any functions event. Returns [Function Object](https://appwrite.io/docs/references/cloud/models/function) |
| functions.\*.create | This event triggers when a function is created. Returns [Function Object](https://appwrite.io/docs/references/cloud/models/function) |
| functions.\*.delete | This event triggers when a function is deleted. Returns [Function Object](https://appwrite.io/docs/references/cloud/models/function) |
| functions.\*.deployments.\* | This event triggers on any deployments event. Returns [Deployment Object](https://appwrite.io/docs/references/cloud/models/deployment) |
| functions.\*.deployments.\*.create | This event triggers when a deployment is created. Returns [Deployment Object](https://appwrite.io/docs/references/cloud/models/deployment) |
| functions.\*.deployments.\*.delete | This event triggers when a deployment is deleted. Returns [Deployment Object](https://appwrite.io/docs/references/cloud/models/deployment) |
| functions.\*.deployments.\*.update | This event triggers when a deployment is updated. Returns [Deployment Object](https://appwrite.io/docs/references/cloud/models/deployment) |
| functions.\*.executions.\* | This event triggers on any executions event. Returns [Execution Object](https://appwrite.io/docs/references/cloud/models/execution) |
| functions.\*.executions.\*.create | This event triggers when an execution is created. Returns [Execution Object](https://appwrite.io/docs/references/cloud/models/execution) |
| functions.\*.executions.\*.delete | This event triggers when an execution is deleted. Returns [Execution Object](https://appwrite.io/docs/references/cloud/models/execution) |
| functions.\*.executions.\*.update | This event triggers when an execution is updated. Returns [Execution Object](https://appwrite.io/docs/references/cloud/models/execution) |
| functions.\*.update | This event triggers when a function is updated. Returns [Function Object](https://appwrite.io/docs/references/cloud/models/function) |

- Messaging












| Name | Description |
| --- | --- |
| providers.\* | This event triggers on any providers event. Returns [Provider Object](https://appwrite.io/docs/references/cloud/models/provider) |
| providers.\*.create | This event triggers when a provider is created. Returns [Provider Object](https://appwrite.io/docs/references/cloud/models/provider) |
| providers.\*.delete | This event triggers when a provider is deleted. Returns [Provider Object](https://appwrite.io/docs/references/cloud/models/provider) |
| providers.\*.update | This event triggers when a provider is updated. Returns [Provider Object](https://appwrite.io/docs/references/cloud/models/provider) |
| topics.\* | This event triggers on any topic event. Returns [Topic Object](https://appwrite.io/docs/references/cloud/models/topic) |
| topics.\*.create | This event triggers when a topic is created. Returns [Topic Object](https://appwrite.io/docs/references/cloud/models/topic) |
| topics.\*.delete | This event triggers when a topic is deleted. Returns [Topic Object](https://appwrite.io/docs/references/cloud/models/topic) |
| topics.\*.update | This event triggers when a topic is updated. Returns [Topic Object](https://appwrite.io/docs/references/cloud/models/topic) |
| topics.\*.subscribers.\*.create | This event triggers when a subscriber to a topic is created. Returns [Topic Object](https://appwrite.io/docs/references/cloud/models/topic) |
| topics.\*.subscribers.\*.delete | This event triggers when a subscriber to a topic is deleted. Returns [Topic Object](https://appwrite.io/docs/references/cloud/models/topic) |
| messages.\* | This event triggers on any message event. Returns [Message Object](https://appwrite.io/docs/references/cloud/models/message) |
| messages.\*.create | This event triggers when a message is created. Returns [Message Object](https://appwrite.io/docs/references/cloud/models/message) |
| messages.\*.delete | This event triggers when a message is deleted. Returns [Message Object](https://appwrite.io/docs/references/cloud/models/message) |
| messages.\*.update | This event triggers when a message is updated. Returns [Message Object](https://appwrite.io/docs/references/cloud/models/message) |


## [Known limitations](https://appwrite.io/docs/advanced/platform/events\#known-limitations)

When events fire, only existing subscriptions for that event will receive the update. If your client or server side integrations lose network connection temporarily, delivery of the event is not guaranteed.

For self-hosted instances, when the Appwrite containers are shut down and restarted, events with pending webhooks and subscription updates will not be delivered.

A change to a resource can cause multiple events to fire. For example adding a new document with ID "lion-king" to a collection with the ID "movies" will cause all of the below events to fire.

```web-code json line-numbers
{
  "events": [\
      "databases.default.collections.movies.documents.lion-king.create",\
      "databases.*.collections.*.documents.*.create",\
      "databases.default.collections.*.documents.lion-king.create",\
      "databases.*.collections.*.documents.lion-king.create",\
      "databases.*.collections.movies.documents.lion-king.create",\
      "databases.default.collections.movies.documents.*.create",\
      "databases.*.collections.movies.documents.*.create",\
      "databases.default.collections.*.documents.*.create",\
      "databases.default.collections.movies.documents.lion-king",\
      "databases.*.collections.*.documents.*",\
      "databases.default.collections.*.documents.lion-king",\
      "databases.*.collections.*.documents.lion-king",\
      "databases.*.collections.movies.documents.lion-king",\
      "databases.default.collections.movies.documents.*",\
      "databases.*.collections.movies.documents.*",\
      "databases.default.collections.*.documents.*",\
      "databases.default.collections.movies",\
      "databases.*.collections.*",\
      "databases.default.collections.*",\
      "databases.*.collections.movies",\
      "databases.default",\
      "databases.*"\
  ]
}

```

###### Recommended

- [API reference/Account](https://appwrite.io/docs/references/cloud/client-web/account)
- [API reference/Teams](https://appwrite.io/docs/references/cloud/client-web/teams)
- [API reference/Databases](https://appwrite.io/docs/references/cloud/client-web/databases)
- [API reference/Storage](https://appwrite.io/docs/references/cloud/client-web/storage)

## Refine Project Setup
[Skip to content](https://appwrite.io/docs/quick-starts/refine#main)

[![appwrite](https://appwrite.io/images/logos/appwrite.svg)![appwrite](https://appwrite.io/images/logos/appwrite-light.svg)](https://appwrite.io/)

[Go to Console](https://cloud.appwrite.io/)

Learn how to setup your first Refine project powered by Appwrite.

Head to the [Appwrite Console](https://cloud.appwrite.io/console).

![Create project screen](https://appwrite.io/images/docs/quick-starts/dark/create-project.png)

![Create project screen](https://appwrite.io/images/docs/quick-starts/create-project.png)

If this is your first time using Appwrite, create an account and create your first project.

Then, under **Add a platform**, add a **Web app**. The **Hostname** should be localhost.

![Add a platform](https://appwrite.io/images/docs/quick-starts/dark/add-platform.png)

![Add a platform](https://appwrite.io/images/docs/quick-starts/add-platform.png)

You can skip optional steps.

Create a Refine project with Appwrite support.

```web-code sh line-numbers
npm create refine-app@latest -- --preset refine-appwrite

```

Using the refine-appwrite preset eliminates the need for extra dependencies for a quick start.

If you want to integrate Appwrite into an existing Refine app, simply use this command:

```web-code sh line-numbers
npm install @refinedev/appwrite

```

Then follow [this guide on the Refine documentation site](https://refine.dev/docs/packages/documentation/data-providers/appwrite).

Find your project's ID in the **Settings** page.

![Project settings screen](https://appwrite.io/images/docs/quick-starts/dark/project-id.png)

![Project settings screen](https://appwrite.io/images/docs/quick-starts/project-id.png)

Navigate to src/utility/appwriteClient.ts and add your API credentials.

```web-code ts line-numbers
import { Account, Appwrite, Storage } from "@refinedev/appwrite";

const APPWRITE_URL = '<YOUR_API_ENDPOINT>'; // Replace with your Appwrite API Endpoint
const APPWRITE_PROJECT = "<PROJECT_ID>"; // Replace with your project ID

const appwriteClient = new Appwrite();

appwriteClient.setEndpoint(APPWRITE_URL).setProject(APPWRITE_PROJECT);
const account = new Account(appwriteClient);
const storage = new Storage(appwriteClient);

export { account, appwriteClient, storage };

```

Replace the code in src/App.tsx with the following.

```web-code client-web line-numbers
import { Authenticated, Refine } from '@refinedev/core';
import { dataProvider, liveProvider } from '@refinedev/appwrite';
import {
    AuthPage,
    ErrorComponent,
    RefineThemes,
    ThemedLayoutV2,
    useNotificationProvider,
} from '@refinedev/antd';
import routerProvider, {
    CatchAllNavigate,
    NavigateToResource,
} from '@refinedev/react-router-v6';
import '@refinedev/antd/dist/reset.css';

import { App as AntdApp, ConfigProvider } from 'antd';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';

import { appwriteClient } from './utility';
import { authProvider } from './authProvider';

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <ConfigProvider theme={RefineThemes.Blue}>
                <AntdApp>
                    <Refine
                        dataProvider={dataProvider(appwriteClient, {
                            databaseId: '<APPWRITE_DATABASE_ID>',
                        })}
                        liveProvider={liveProvider(appwriteClient, {
                            databaseId: '<APPWRITE_DATABASE_ID>',
                        })}
                        authProvider={authProvider}
                        routerProvider={routerProvider}
                        notificationProvider={useNotificationProvider}
                    >
                        <Routes>
                            <Route
                                element={
                                    <Authenticated
                                        fallback={
                                            <CatchAllNavigate to="/login" />
                                        }
                                    >
                                        <ThemedLayoutV2>
                                            <Outlet />
                                        </ThemedLayoutV2>
                                    </Authenticated>
                                }
                            ></Route>

                            <Route
                                element={
                                    <Authenticated fallback={<Outlet />}>
                                        <NavigateToResource resource="<APPWRITE_COLLECTION_ID>" />
                                    </Authenticated>
                                }
                            >
                                <Route path="/login" element={<AuthPage />} />
                                <Route
                                    path="/register"
                                    element={<AuthPage type="register" />}
                                />
                            </Route>

                            <Route
                                element={
                                    <Authenticated>
                                        <ThemedLayoutV2>
                                            <Outlet />
                                        </ThemedLayoutV2>
                                    </Authenticated>
                                }
                            >
                                <Route path="*" element={<ErrorComponent />} />
                            </Route>
                        </Routes>
                    </Refine>
                </AntdApp>
            </ConfigProvider>
        </BrowserRouter>
    );
};

export default App;

```

Run your project with npm run dev -- --open --port 3000 and open [Localhost on Port 3000](http://localhost:3000/) in your browser.

###### Recommended

- [API reference/Account](https://appwrite.io/docs/references/cloud/client-web/account)
- [API reference/Teams](https://appwrite.io/docs/references/cloud/client-web/teams)
- [API reference/Databases](https://appwrite.io/docs/references/cloud/client-web/databases)
- [API reference/Storage](https://appwrite.io/docs/references/cloud/client-web/storage)

## Self-Hosting Appwrite
[Skip to content](https://appwrite.io/docs/advanced/self-hosting#main)

[![appwrite](https://appwrite.io/images/logos/appwrite.svg)![appwrite](https://appwrite.io/images/logos/appwrite-light.svg)](https://appwrite.io/)

[Go to Console](https://cloud.appwrite.io/)

Appwrite was designed from the ground up with self-hosting in mind. You can install and run Appwrite on any operating system that can run a [Docker CLI](https://www.docker.com/products/docker-desktop). Self-hosted Appwrite instances can be configured flexibly with access to the same features found on Appwrite Cloud.

## [System requirements](https://appwrite.io/docs/advanced/self-hosting\#system-requirements)

Appwrite is designed to run well on both small and large deployments. The minimum requirements to run Appwrite are as little as **2 CPU cores** and **4GB of RAM**, with **2GB of swap memory**, and an operating system that supports Docker.

Appwrite requires [Docker Compose Version 2](https://docs.docker.com/compose/install/). To install Appwrite, make sure your Docker installation is updated to support Composer V2.

##### Upgrading From Older Versions

If you are migrating from an older version of Appwrite, you need to follow the [migration instructions](https://appwrite.io/docs/advanced/self-hosting/update)

## [Install with Docker](https://appwrite.io/docs/advanced/self-hosting\#install-with-docker)

The easiest way to start running your Appwrite server is by running our Docker installer tool from your terminal. Before running the installation command, make sure you have [Docker CLI](https://www.docker.com/products/docker-desktop) installed on your host machine.

You will be prompted to configure the following during the setup command:

1. Your Appwrite instance's HTTP and HTTPS ports.

2. Your Appwrite instance's secret key used to encrypt sensitive data.

3. Your Appwrite instance's main hostname. Appwrite will generate a certificate using this hostname.

4. Your Appwrite instance's DNS A record hostname. Typically set to the same value as your Appwrite instance's hostname.


macOS and LinuxWindows

macOS and LinuxWindows

### [Bash](https://appwrite.io/docs/advanced/self-hosting\#bash)

```web-code sh line-numbers
docker run -it --rm \
    --volume /var/run/docker.sock:/var/run/docker.sock \
    --volume "$(pwd)"/appwrite:/usr/src/code/appwrite:rw \
    --entrypoint="install" \
    appwrite/appwrite:1.7.4

```

### [CMD](https://appwrite.io/docs/advanced/self-hosting\#cmd)

```web-code cmd line-numbers
docker run -it --rm ^
    --volume //var/run/docker.sock:/var/run/docker.sock ^
    --volume "%cd%"/appwrite:/usr/src/code/appwrite:rw ^
    --entrypoint="install" ^
    appwrite/appwrite:1.7.4

```

### [Powershell](https://appwrite.io/docs/advanced/self-hosting\#powershell)

```web-code powershell line-numbers
docker run -it --rm `
    --volume /var/run/docker.sock:/var/run/docker.sock `
    --volume ${pwd}/appwrite:/usr/src/code/appwrite:rw `
    --entrypoint="install" `
    appwrite/appwrite:1.7.4

```

## [One-click setups](https://appwrite.io/docs/advanced/self-hosting\#one-click-setups)

In addition to running Appwrite locally, you can also launch Appwrite using a pre-configured setup. This allows you to get up and running with Appwrite quickly without installing Docker on your local machine.

Choose from one of the providers below:

|  | Provider | Installation Link |
| --- | --- | --- |
| ![DigitalOcean logo](https://appwrite.io/images/one-click/dark/digitalocean.svg)![DigitalOcean logo](https://appwrite.io/images/one-click/digitalocean.svg) | DigitalOcean | [Click to install](https://marketplace.digitalocean.com/apps/appwrite) |
| ![Gitpod logo](https://appwrite.io/images/one-click/dark/gitpod.svg)![Gitpod logo](https://appwrite.io/images/one-click/gitpod.svg) | Gitpod | [Click to install](https://gitpod.io/#https://github.com/appwrite/integration-for-gitpod) |
| ![Akamai logo](https://appwrite.io/images/one-click/dark/akamai.svg)![Akamai logo](https://appwrite.io/images/one-click/akamai.svg) | Akamai Compute | [Click to install](https://www.linode.com/marketplace/apps/appwrite/appwrite/) |
| ![AWS logo](https://appwrite.io/images/one-click/dark/aws.svg)![AWS logo](https://appwrite.io/images/one-click/aws.svg) | AWS Marketplace | [Click to install](https://aws.amazon.com/marketplace/pp/prodview-2hiaeo2px4md6) |

## [Next steps](https://appwrite.io/docs/advanced/self-hosting\#next-steps)

Self-hosting Appwrite gives you more configurable options. Make these configurations to unlock the full power of Appwrite.

[Configure Appwrite Functions](https://appwrite.io/docs/advanced/self-hosting/functions)

[Configure Appwrite Sites](https://appwrite.io/docs/advanced/self-hosting/sites)

[Configure email delivery](https://appwrite.io/docs/advanced/self-hosting/email)

[Configure SMS delivery](https://appwrite.io/docs/advanced/self-hosting/sms)

[Configure Appwrite Storage](https://appwrite.io/docs/advanced/self-hosting/storage)

[Configure TLS Certificates](https://appwrite.io/docs/advanced/self-hosting/tls-certificates)

## [Manual (Docker Compose)](https://appwrite.io/docs/advanced/self-hosting\#manual)

For advanced Docker users, the manual installation might seem more familiar. To set up Appwrite manually, download the Appwrite base [docker-compose.yml](https://appwrite.io/install/compose) and [.env](https://appwrite.io/install/env) files, then move them inside a directory named appwrite. After the download completes, update the different environment variables as you wish in the .env file and start the Appwrite stack using the following Docker command:

```web-code bash line-numbers
docker compose up -d --remove-orphans

```

Once the Docker installation completes, go to your machine's hostname or IP address on your browser to access the Appwrite Console. Please note that on hosts that are not Linux-native, the server might take a few minutes to start after installation completes.

## [Stop](https://appwrite.io/docs/advanced/self-hosting\#stop)

You can stop your Appwrite containers by using the following command executed from the same directory as your docker-compose.yml file.

```web-code bash line-numbers
docker compose stop

```

## [Uninstall](https://appwrite.io/docs/advanced/self-hosting\#uninstall)

To stop and remove your Appwrite containers, you can use the following command executed from the same directory as your docker-compose.yml file.

```web-code bash line-numbers
docker compose down -v

```

###### Recommended

- [API reference/Account](https://appwrite.io/docs/references/cloud/client-web/account)
- [API reference/Teams](https://appwrite.io/docs/references/cloud/client-web/teams)
- [API reference/Databases](https://appwrite.io/docs/references/cloud/client-web/databases)
- [API reference/Storage](https://appwrite.io/docs/references/cloud/client-web/storage)

## SendGrid Email Integration
[Skip to content](https://appwrite.io/docs/products/messaging/sendgrid#main)

[![appwrite](https://appwrite.io/images/logos/appwrite.svg)![appwrite](https://appwrite.io/images/logos/appwrite-light.svg)](https://appwrite.io/)

[Go to Console](https://cloud.appwrite.io/)

SendGrid lets you send customized email messages to your users. These emails can be sent immediately or scheduled. You can send emails for purposes like reminders, promotions, announcements, and even custom authentication flows.

To add SendGrid as a provider, navigate to **Messaging** \> **Providers** \> **Add provider** \> **Email**.

![Add a SMTP provider](https://appwrite.io/images/docs/messaging/providers/sendgrid/dark/add-sendgrid.png)

![Add a SMTP provider](https://appwrite.io/images/docs/messaging/providers/sendgrid/add-sendgrid.png)

Give your provider a name > choose **SendGrid** \> click **Save and continue**. The provider will be saved to your project, but not enabled until you complete its configuration.

In the **Configure** step, you will need to provide details from your SendGrid dashboard to connect your Appwrite project.

![Configure SMTP provider](https://appwrite.io/images/docs/messaging/providers/sendgrid/dark/configure-sendgrid.png)

![Configure SMTP provider](https://appwrite.io/images/docs/messaging/providers/sendgrid/configure-sendgrid.png)

You will need to provide the following information from your **SendGrid dashboard**.

| Field name |  |
| --- | --- |
| API key | Head to Settings -> API Keys -> Create API Key. |
| Sender email | The provider sends emails from this sender email. The sender email must either be an email under an [authenticated domain](https://www.twilio.com/docs/sendgrid/ui/account-and-settings/how-to-set-up-domain-authentication) or a [verified sender identity](https://www.twilio.com/docs/sendgrid/ui/sending-email/sender-verification). |
| Sender name | The sender name that appears in the emails sent from this provider. |
| Reply-to email | The reply-to email that appears in the emails sent from this provider. The reply-to email must either be an email under an authenticated domain or a verified sender identity. |
| Reply-to name | The reply-to name that appears in the emails sent from this provider. |

After adding the following details, click **Save and continue** to enable the provider.

Before sending your first message, make sure you've configured [a topic](https://appwrite.io/docs/products/messaging/topics) and [a target](https://appwrite.io/docs/products/messaging/targets) to send messages to.

To send a test message, navigate to **Messaging** \> **Messages** \> **Create message** \> **Email**.

![Create email message](https://appwrite.io/images/docs/messaging/messages/dark/create-email-message.png)

![Create email message](https://appwrite.io/images/docs/messaging/messages/create-email-message.png)

Add your message and in the targets step, select one of your test targets. Set the schedule to **Now** and click **Send**.

Verify that you can receive the message in your inbox. If not, check for logs in the Appwrite Console or in your provider's logs.

To send a message programmatically, use an [Appwrite Server SDK](https://appwrite.io/docs/sdks#server).

You can follow the [Send email messages](https://appwrite.io/docs/products/messaging/send-email-messages) journey to send your first push notification and test your provider.

You can update or delete a provider in the Appwrite Console.

Navigate to **Messaging** \> **Providers** \> click your provider. In the settings, you can update a provider's configuration or delete the provider.

To update or delete providers programmatically, use an [Appwrite Server SDK](https://appwrite.io/docs/sdks#server).

###### Recommended

- [API reference/Account](https://appwrite.io/docs/references/cloud/client-web/account)
- [API reference/Teams](https://appwrite.io/docs/references/cloud/client-web/teams)
- [API reference/Databases](https://appwrite.io/docs/references/cloud/client-web/databases)
- [API reference/Storage](https://appwrite.io/docs/references/cloud/client-web/storage)

## Multi-Factor Authentication
[Skip to content](https://appwrite.io/docs/products/auth/mfa#main)

[![appwrite](https://appwrite.io/images/logos/appwrite.svg)![appwrite](https://appwrite.io/images/logos/appwrite-light.svg)](https://appwrite.io/)

[Go to Console](https://cloud.appwrite.io/)

Multi-factor authentication (MFA) greatly increases the security of your apps by adding additional layers of protection. When MFA is enabled, a malicious actor needs to compromise multiple authentication factors to gain unauthorized access. Appwrite Authentication lets you easily implement MFA in your apps, letting you build more securely and quickly.

##### Looking for MFA on your Console account?

This page covers MFA for your app's end-users. If you are looking for MFA on your Appwrite Console account, please refer to the [Console MFA page](https://appwrite.io/docs/advanced/security/mfa).

Appwrite currently allows two factors of authentication. More factors of authentication will be available soon.

Here are the steps to implement MFA in your application.

Initialize your Appwrite SDK's Client, Account, and Avatars. You'll use Avatars API to generate a QR code for the TOTP authenticator app, you can skip this import if you're not using TOTP.

Before enabling MFA, you should display recovery codes to the user. The codes are single use passwords the user can use to access their account if they lose access to their MFA email, phone, or authenticator app. These codes can **only be generated once**, warn the users to save them.

The code will look like this, display them to the user and remind them to save the codes in a secure place.

```web-code json line-numbers
{
    "recoveryCodes": [\
        "b654562828",\
        "a97c13d8c0",\
        "311580b5f3",\
        "c4262b3f88",\
        "7f6761afb4",\
        "55a09989be",\
    ]
}

```

These codes can be used to complete the [Complete challenge](https://appwrite.io/docs/products/auth/mfa#complete-challenge) step if the user loses access to their MFA factors. Generate the recovery codes by calling account.createMfaRecoveryCodes().

Any verified email, phone number, or TOTP authenticator app can be used as a factor for MFA. Before they can be used as a factor, they need to be verified.

First, set your user's email if they haven't already.

Then, initiate verification for the email by calling account.createEmailVerification(). Calling createEmailVerification will send a verification email to the user's email address with a link with the query parameter userId and secret.

After the user clicks the link in the email, they will be redirected to your site with the query parameters userId and secret. If you're on a mobile platform, you will need to create the appropriate deep link to handle the verification.

Finally, verify the email by calling account.updateVerification() with userId and secret.

First, set your user's phone number if they haven't already.

Then, initiate verification for the phone number by calling account.createPhoneVerification().

After the user receives the verification code, they can verify their phone number by calling account.updatePhoneVerification().

First, add a TOTP authenticator to the user's account by calling account.addAuthenticator().

This will create a secret and a URI. The URI is a URL that can be used to generate a QR code for the user to scan with their TOTP authenticator app.

You can generate a QR code for the user to scan by calling avatars.getQR().

If the user is unable to scan QR codes, you can display the secret to the user.

Finally prompt the user to enter a TOTP from their authenticator app, then verify the authenticator by calling account.verifyMfaAuthenticator().

You can enable MFA on your account by calling account.updateMFA(). You will need to have added more than 1 factors of authentication to an account before the MFA is enforced.

Begin your login flow with the default authentication method used by your app, for example, email password.

Upon successful login in the first authentication step, check the status of the login by calling account.get(). If more than one factors are required, you will receive the error user\_more\_factors\_required. Redirect the user in your app to perform the MFA challenge.

You can check which factors are enabled for an account using account.listMfaFactors(). The returned object will be formatted like this.

```web-code client-web line-numbers
{
    totp: true, // time-based one-time password
    email: false, // email
    phone: true // phone
}

```

Based on the factors available, initialize an additional auth step. Calling these methods will send a challenge to the user. You will need to save the challenge ID to complete the challenge in a later step.

Appwrite will use a verified email on the user's account to send the challenge code via email. Note that this is only valid as a second factor if the user did not initialize their login with email OTP.

Appwrite will use a verified phone number on the user's account to send the challenge code via SMS. You cannot use this method if the user initialized their login with phone OTP.

Initiate a challenge for users to complete using an authenticator app.

Once the user receives the challenge code, you can pass the code back to Appwrite to complete the challenge.

After completing the challenge, the user is now authenticated and all requests will be authorized. You can confirm this by running account.get()

In case your user needs to recover their account, they can use the recovery codes generated in the first step with the recovery code factor. Initialize the challenge by calling account.createMfaChallenge() with the factor recoverycode.

Then complete the challenge by calling account.updateMfaChallenge() with the challenge ID and the recovery code.

###### Recommended

- [API reference/Account](https://appwrite.io/docs/references/cloud/client-web/account)
- [API reference/Teams](https://appwrite.io/docs/references/cloud/client-web/teams)
- [API reference/Databases](https://appwrite.io/docs/references/cloud/client-web/databases)
- [API reference/Storage](https://appwrite.io/docs/references/cloud/client-web/storage)

## Kotlin Quick Start
[Skip to content](https://appwrite.io/docs/quick-starts/kotlin#main)

[![appwrite](https://appwrite.io/images/logos/appwrite.svg)![appwrite](https://appwrite.io/images/logos/appwrite-light.svg)](https://appwrite.io/)

[Go to Console](https://cloud.appwrite.io/)

Learn how to setup your first Kotlin project powered by Appwrite.

Head to the [Appwrite Console](https://cloud.appwrite.io/console).

##### Server SDK

This tutorial is for the Kotlin Server SDK, meant for server and backend applications. If you're trying to build a client-side app, like an Android app, follow the [Start with Android guide](https://appwrite.io/docs/quick-starts/android).

If this is your first time using Appwrite, create an account and create your first project.

![Create project screen](https://appwrite.io/images/docs/quick-starts/dark/create-project.png)

![Create project screen](https://appwrite.io/images/docs/quick-starts/create-project.png)

Then, under **Integrate with your server**, add an **API Key** with the following scopes.

![Server integrations](https://appwrite.io/images/docs/quick-starts/dark/integrate-server.png)

![Server integrations](https://appwrite.io/images/docs/quick-starts/integrate-server.png)

| Category | Required scopes | Purpose |
| --- | --- | --- |
| Database | databases.write | Allows API key to create, update, and delete [databases](https://appwrite.io/docs/products/databases/databases). |
|  | collections.write | Allows API key to create, update, and delete [collections](https://appwrite.io/docs/products/databases/collections). |
|  | attributes.write | Allows API key to create, update, and delete [attributes](https://appwrite.io/docs/products/databases/collections#attributes). |
|  | documents.read | Allows API key to read [documents](https://appwrite.io/docs/products/databases/documents). |
|  | documents.write | Allows API key to create, update, and delete [documents](https://appwrite.io/docs/products/databases/documents). |

Other scopes are optional.

![Project settings screen](https://appwrite.io/images/docs/quick-starts/dark/project-id.png)

![Project settings screen](https://appwrite.io/images/docs/quick-starts/project-id.png)

Create a Kotlin application by opening **IntelliJ IDEA** \> **New Project** and create a **Kotlin** application. This quick start will use **Gradle** as the build system, with the Kotlin DSL. You can follow with Maven or IntelliJ if you're more comfortable.

Follow the wizard and open your new project.

Open your build.gradle.kts file and implement the following dependency.

```web-code groovy line-numbers
dependencies {
    ... other dependencies
    implementation("io.appwrite:sdk-for-kotlin:9.0.0")
}

```

Find your project ID in the **Settings** page. Also, click on the **View API Keys** button to find the API key that was created earlier.

![Project settings screen](https://appwrite.io/images/docs/quick-starts/dark/project-id.png)

![Project settings screen](https://appwrite.io/images/docs/quick-starts/project-id.png)

Open the file Main.kt and initialize the Appwrite Client. Replace <PROJECT\_ID> with your project ID and <YOUR\_API\_KEY> with your API key.

```web-code kotlin line-numbers
import io.appwrite.Client
import io.appwrite.ID
import io.appwrite.services.Databases
import io.appwrite.models.Database
import io.appwrite.models.Collection
import kotlinx.coroutines.coroutineScope

val client = Client()
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1")
    .setProject("<PROJECT_ID>")
    .setKey("<YOUR_API_KEY>");

```

Once the Appwrite Client is initialized, create a function to configure a todo collection.

```web-code kotlin line-numbers
val databases = Databases(client)

var todoDatabase: Database? = null
var todoCollection: Collection? = null

suspend fun prepareDatabase() {
    todoDatabase = databases.create(ID.unique(), "TodosDB")
    todoCollection = databases.createCollection(todoDatabase?.id!!, ID.unique(), "Todos")

    databases.createStringAttribute(
        databaseId = todoDatabase?.id!!,
        collectionId = todoCollection?.id!!,
        key = "title",
        size = 255,
        required = true
    )

    databases.createStringAttribute(
        databaseId = todoDatabase?.id!!,
        collectionId = todoCollection?.id!!,
        key = "description",
        size = 255,
        required = false,
        default = "This is a test description."
    )

    databases.createBooleanAttribute(
        databaseId = todoDatabase?.id!!,
        collectionId = todoCollection?.id!!,
        key = "isComplete",
        required = true
    )
}

```

Create a function to add some mock data into your new collection.

```web-code kotlin line-numbers
suspend fun seedDatabase() {
    val testTodo1 = mapOf(
        "title" to "Buy apples",
        "description" to "At least 2KGs",
        "isComplete" to true
    )

    val testTodo2 = mapOf(
        "title" to "Wash the apples",
        "isComplete" to true
    )

    val testTodo3 = mapOf(
        "title" to "Cut the apples",
        "description" to "Don't forget to pack them in a box",
        "isComplete" to false
    )

    databases.createDocument(
        databaseId = todoDatabase?.id!!,
        collectionId = todoCollection?.id!!,
        documentId = ID.unique(),
        data = testTodo1
    )

    databases.createDocument(
        databaseId = todoDatabase?.id!!,
        collectionId = todoCollection?.id!!,
        documentId = ID.unique(),
        data = testTodo2
    )

    databases.createDocument(
        databaseId = todoDatabase?.id!!,
        collectionId = todoCollection?.id!!,
        documentId = ID.unique(),
        data = testTodo3
    )
}

```

Create a function to retrieve the mock todo data.

```web-code kotlin line-numbers
suspend fun getTodos() {
    val todos = databases.listDocuments(todoDatabase?.id!!, todoCollection?.id!!)
    for (todo in todos.documents) {
        println(
            """
            Title: ${todo.data["title"]}
            Description: ${todo.data["description"]}
            Is Todo Complete: ${todo.data["isComplete"]}
            """.trimIndent()
        )
    }
}

suspend fun main() = coroutineScope {
    prepareDatabase()
    seedDatabase()
    getTodos()
}

```

Run your project with IntelliJ and view the response in your console.

###### Recommended

- [API reference/Account](https://appwrite.io/docs/references/cloud/client-web/account)
- [API reference/Teams](https://appwrite.io/docs/references/cloud/client-web/teams)
- [API reference/Databases](https://appwrite.io/docs/references/cloud/client-web/databases)
- [API reference/Storage](https://appwrite.io/docs/references/cloud/client-web/storage)

## Flutter Appwrite Setup
[Skip to content](https://appwrite.io/docs/quick-starts/flutter#main)

[![appwrite](https://appwrite.io/images/logos/appwrite.svg)![appwrite](https://appwrite.io/images/logos/appwrite-light.svg)](https://appwrite.io/)

[Go to Console](https://cloud.appwrite.io/)

Learn how to setup your first Flutter project powered by Appwrite.

Create a Flutter project.

```web-code sh line-numbers
flutter create my_app && cd my_app

```

Head to the [Appwrite Console](https://cloud.appwrite.io/console).

![Create project screen](https://appwrite.io/images/docs/quick-starts/dark/create-project.png)

![Create project screen](https://appwrite.io/images/docs/quick-starts/create-project.png)

If this is your first time using Appwrite, create an account and create your first project.

Then, under **Add a platform**, add a **Flutter app**. You can choose between many different platfroms.

WebiOSAndroidLinuxmacOSWindows

WebiOS
More

Add your app **name** and **Hostname**. If you're testing your app locally, **Hostname** should be localhost.

For web, in order to capture the OAuth2 callback URL and send it to the application using JavaScript postMessage(), you need to create an html file inside ./web folder of your Flutter project. For example auth.html with the following content.

```web-code html line-numbers
<!DOCTYPE html>
<title>Authentication complete</title>
<p>Authentication is complete. If this does not happen automatically, please close the window.</p>
<script>
  window.opener.postMessage({
    'flutter-web-auth-2': window.location.href
  }, window.location.origin);
  window.close();
</script>

```

The redirection URL passed to the authentication service must be the same as the URL on which the application is running including schema, host, and port if applicable. The path must point to the created HTML file, /auth.html in this case. The callbackUrlScheme parameter in the authenticate() method isn't applicable when you're developing for web platforms. This means you can use this parameter to define URL schemes specifically for native platforms without affecting the web version of your Flutter application.

##### Flutter web cross-domain communication & cookies

While running Flutter Web, make sure your Appwrite project and your Flutter client use the same top-level domain and protocol (HTTP or HTTPS) to communicate. When communicating between different domains or protocols, you may receive HTTP status error 401 because some modern browsers block cross-site or insecure cookies for enhanced privacy. In production, Appwrite allows you to set multiple [custom-domains](https://appwrite.io/docs/advanced/platform/custom-domains) for each project.

Add your app **name** and **Bundle ID**. You can find your **Bundle Identifier** in the **General** tab for your app's primary target in XCode.

The Appwrite SDK uses ASWebAuthenticationSession on iOS 12+ and SFAuthenticationSession on iOS 11 to allow OAuth authentication. You have to change your iOS Deployment Target in Xcode to be iOS >= 11 to be able to build your app on an emulator or a real device.

1. In **XCode**, open Runner.xcworkspace in your app's iOS folder.

2. To view your app's settings, select the Runner project in the XCode project navigator. Then, in the main view sidebar, select the **Runner target**.

3. Select the **General** tab.

4. In **Deployment Info** \> **Target**, select iOS 11.0 or above


Add your app's **name** and **package name**, Your package name is generally the **applicationId** in your app-level [build.gradle](https://github.com/appwrite/playground-for-flutter/blob/master/android/app/build.gradle#L41) file.

In order to capture the Appwrite OAuth callback url, the following activity needs to be added inside the <application> tag, along side the existing <activity> tags in your [AndroidManifest.xml](https://github.com/appwrite/playground-for-flutter/blob/master/android/app/src/main/AndroidManifest.xml). Be sure to replace the **\[PROJECT\_ID\]** string with your actual Appwrite project ID. You can find your Appwrite project ID in you project settings screen in your Appwrite Console.

```web-code xml line-numbers
<manifest ...>
  ...
  <application ...>
    ...
    <!-- Add this inside the `<application>` tag, along side the existing `<activity>` tags -->
    <activity android:name="com.linusu.flutter_web_auth_2.CallbackActivity" android:exported="true">
      <intent-filter android:label="flutter_web_auth_2">
        <action android:name="android.intent.action.VIEW" />
        <category android:name="android.intent.category.DEFAULT" />
        <category android:name="android.intent.category.BROWSABLE" />
        <data android:scheme="appwrite-callback-[PROJECT_ID]" />
      </intent-filter>
    </activity>
  </application>
</manifest>

```

Add your app **name** and **package name**. Your package name is generally the **name** in your [pubspec.yaml](https://github.com/appwrite/playground-for-flutter/blob/master/pubspec.yaml#L1) file. If you cannot find the correct package name, run the application in Linux and make any request with proper exception handling. You should get the application ID needed to add in the received error message.

Add your app **name** and **Bundle ID**. You can find your **Bundle Identifier** in the **General** tab for your app's primary target in XCode.

The Appwrite SDK uses ASWebAuthenticationSession on macOS 10.15+ to allow OAuth authentication. You have to change your macOS **Deployment Target** in XCode to be macOS >= 10.15 to be able to build your app for macOS.

In order to capture the Appwrite OAuth 2 callback url, the following URL scheme needs to added to your Info.plist.

```web-code xml line-numbers
<key>CFBundleURLTypes</key>
<array>
<dict>
    <key>CFBundleTypeRole</key>
    <string>Editor</string>
    <key>CFBundleURLName</key>
    <string>io.appwrite</string>
    <key>CFBundleURLSchemes</key>
    <array>
        <string>appwrite-callback-[PROJECT_ID]</string>
    </array>
</dict>
</array>

```

For **Windows**, add your app _name_ and _package name_. Your package name is generally the **name** in your [pubspec.yaml](https://github.com/appwrite/playground-for-flutter/blob/master/pubspec.yaml#L1) file. If you cannot find the correct package name, run the application in Windows, and make any request with proper exception handling. You should get the application ID needed to add in the received error message.

![Add a platform](https://appwrite.io/images/docs/quick-starts/dark/add-platform.png)

![Add a platform](https://appwrite.io/images/docs/quick-starts/add-platform.png)

You can skip optional steps.

Install the Appwrite SDK for Flutter.

```web-code sh line-numbers
flutter pub add appwrite:17.0.0

```

Find your project's ID in the **Settings** page.

![Project settings screen](https://appwrite.io/images/docs/quick-starts/dark/project-id.png)

![Project settings screen](https://appwrite.io/images/docs/quick-starts/project-id.png)

Open the generated lib/main.dart and add the following code to it, replace <PROJECT\_ID> with your project ID. This imports and initializes Appwrite.

```web-code dart line-numbers
import 'package:flutter/material.dart';
import 'package:appwrite/appwrite.dart';
import 'package:appwrite/models.dart' as models;

void main() {
  WidgetsFlutterBinding.ensureInitialized();
  Client client = Client()
      .setEndpoint("https://<REGION>.cloud.appwrite.io/v1")
      .setProject("<PROJECT_ID>");
  Account account = Account(client);

  runApp(MaterialApp(
    home: MyApp(account: account),
  ));
}
class MyApp extends StatefulWidget {
  final Account account;

  MyApp({required this.account});

  @override
  MyAppState createState() {
    return MyAppState();
  }
}

```

Then, append the following widgets to lib/main.dart create your login page.

```web-code dart line-numbers
class MyAppState extends State<MyApp> {
  models.User? loggedInUser;
  final TextEditingController emailController = TextEditingController();
  final TextEditingController passwordController = TextEditingController();
  final TextEditingController nameController = TextEditingController();

  Future<void> login(String email, String password) async {
    await widget.account.createEmailPasswordSession(email: email, password: password);
    final user = await widget.account.get();
    setState(() {
      loggedInUser = user;
    });
  }

  Future<void> register(String email, String password, String name) async {
    await widget.account.create(
        userId: ID.unique(), email: email, password: password, name: name);
    await login(email, password);
  }

  Future<void> logout() async {
    await widget.account.deleteSession(sessionId: 'current');
    setState(() {
      loggedInUser = null;
    });
  }

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        body: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: <Widget>[\
            Text(loggedInUser != null\
                ? 'Logged in as ${loggedInUser!.name}'\
                : 'Not logged in'),\
            SizedBox(height: 16.0),\
            TextField(\
              controller: emailController,\
              decoration: InputDecoration(labelText: 'Email'),\
            ),\
            SizedBox(height: 16.0),\
            TextField(\
              controller: passwordController,\
              decoration: InputDecoration(labelText: 'Password'),\
              obscureText: true,\
            ),\
            SizedBox(height: 16.0),\
            TextField(\
              controller: nameController,\
              decoration: InputDecoration(labelText: 'Name'),\
            ),\
            SizedBox(height: 16.0),\
            Row(\
              mainAxisAlignment: MainAxisAlignment.start,\
              children: <Widget>[\
                ElevatedButton(\
                  onPressed: () {\
                    login(emailController.text, passwordController.text);\
                  },\
                  child: Text('Login'),\
                ),\
                SizedBox(width: 16.0),\
                ElevatedButton(\
                  onPressed: () {\
                    register(emailController.text, passwordController.text,\
                        nameController.text);\
                  },\
                  child: Text('Register'),\
                ),\
                SizedBox(width: 16.0),\
                ElevatedButton(\
                  onPressed: () {\
                    logout();\
                  },\
                  child: Text('Logout'),\
                ),\
              ],\
            ),\
          ],
        ),
      ),
    );
  }
}

```

Run your project with flutter run and select a browser, platform, or emulator to run your project.

###### Recommended

- [API reference/Account](https://appwrite.io/docs/references/cloud/client-web/account)
- [API reference/Teams](https://appwrite.io/docs/references/cloud/client-web/teams)
- [API reference/Databases](https://appwrite.io/docs/references/cloud/client-web/databases)
- [API reference/Storage](https://appwrite.io/docs/references/cloud/client-web/storage)

## MSG91 SMS Integration
[Skip to content](https://appwrite.io/docs/products/messaging/msg91#main)

[![appwrite](https://appwrite.io/images/logos/appwrite.svg)![appwrite](https://appwrite.io/images/logos/appwrite-light.svg)](https://appwrite.io/)

[Go to Console](https://cloud.appwrite.io/)

MSG91 lets you send customized SMS messages to your users. These SMS messages can be sent immediately or scheduled. You can send SMS messages for purposes like reminders, promotions, announcements, and even custom authentication flows.

To add MSG91 as a provider, navigate to **Messaging** \> **Providers** \> **Add provider** \> **SMS**.

![Add a MSG91 provider](https://appwrite.io/images/docs/messaging/providers/msg91/dark/provider.png)

![Add a MSG91 provider](https://appwrite.io/images/docs/messaging/providers/msg91/provider.png)

Give your provider a name > choose **MSG91** \> click **Save and continue**. The provider will be saved to your project, but not enabled until you complete its configuration.

In the **Configure** step, you will need to provide details from your MSG91 dashboard to connect your Appwrite project.

You will need to provide the following information from your **MSG91 dashboard**.

| Field name |  |
| --- | --- |
| Auth key | Click to open the Username dropdown > **Authkey** \> **Verify your mobile number** \> **Create Authkey**. |
| Sender ID | Head to MSG91 dashboard > **SMS** \> **Sender ID** \> **Create sender ID**. |
| Sender number |  |

After adding the following details, click **Save and continue** to enable the provider.

Before sending your first message, make sure you've configured [a topic](https://appwrite.io/docs/products/messaging/topics) and [a target](https://appwrite.io/docs/products/messaging/targets) to send messages to.

To send a test message, navigate to **Messaging** \> **Messages** \> **Create message** \> **SMS**.

![Create an SMS message](https://appwrite.io/images/docs/messaging/messages/dark/create-sms-message.png)

![Create an SMS message](https://appwrite.io/images/docs/messaging/messages/create-sms-message.png)

Add your message and in the targets step, select one of your test targets. Set the schedule to **Now** and click **Send**.

Verify that you can receive the message in your inbox. If not, check for logs in the Appwrite Console or in your provider's logs.

To send a message programmatically, use an [Appwrite Server SDK](https://appwrite.io/docs/sdks#server).

You can follow the [Send email messages](https://appwrite.io/docs/products/messaging/send-sms-messages) journey to send your first push notification and test your provider.

You can update or delete a provider in the Appwrite Console.

Navigate to **Messaging** \> **Providers** \> click your provider. In the settings, you can update a provider's configuration or delete the provider.

To update or delete providers programmatically, use an [Appwrite Server SDK](https://appwrite.io/docs/sdks#server).

###### Recommended

- [API reference/Account](https://appwrite.io/docs/references/cloud/client-web/account)
- [API reference/Teams](https://appwrite.io/docs/references/cloud/client-web/teams)
- [API reference/Databases](https://appwrite.io/docs/references/cloud/client-web/databases)
- [API reference/Storage](https://appwrite.io/docs/references/cloud/client-web/storage)

## Next.js Appwrite Setup
[Skip to content](https://appwrite.io/docs/quick-starts/nextjs#main)

[![appwrite](https://appwrite.io/images/logos/appwrite.svg)![appwrite](https://appwrite.io/images/logos/appwrite-light.svg)](https://appwrite.io/)

[Go to Console](https://cloud.appwrite.io/)

Learn how to setup your first Next.js project powered by Appwrite.

Head to the [Appwrite Console](https://cloud.appwrite.io/console).

![Create project screen](https://appwrite.io/images/docs/quick-starts/dark/create-project.png)

![Create project screen](https://appwrite.io/images/docs/quick-starts/create-project.png)

If this is your first time using Appwrite, create an account and create your first project.

Then, under **Add a platform**, add a **Web app**. The **Hostname** should be localhost.

![Add a platform](https://appwrite.io/images/docs/quick-starts/dark/add-platform.png)

![Add a platform](https://appwrite.io/images/docs/quick-starts/add-platform.png)

You can skip optional steps.

Create a Next.js project by running the following command:

```web-code sh line-numbers
npx create-next-app@latest && cd my-app

```

When prompted, configure your project with these recommended settings:

- **Would you like to use TypeScript?** → No

- **Would you like to use ESLint?** → Yes

- **Would you like to use Tailwind CSS?** → No (unless you plan to use it)

- **Would you like to use src/ directory?** → Yes/No (either works for this tutorial)

- **Would you like to use App Router?** → Yes

- **Would you like to customize the default import alias?** → No


These settings will create a minimal Next.js setup that's perfect for getting started with Appwrite.

Install the JavaScript Appwrite SDK.

```web-code sh line-numbers
npm install appwrite@18.1.1

```

Find your project's ID in the **Settings** page.

![Project settings screen](https://appwrite.io/images/docs/quick-starts/dark/project-id.png)

![Project settings screen](https://appwrite.io/images/docs/quick-starts/project-id.png)

Create a new file app/appwrite.js and add the following code to it, replace <PROJECT\_ID> with your project ID.

```web-code client-web line-numbers
import { Client, Account } from 'appwrite';

export const client = new Client();

client
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1')
    .setProject('<PROJECT_ID>'); // Replace with your project ID

export const account = new Account(client);
export { ID } from 'appwrite';

```

Create or update app/page.js file and add the following code to it.

```web-code js line-numbers
"use client";
import { useState } from "react";
import { account, ID } from "./appwrite";

const LoginPage = () => {
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const login = async (email, password) => {
    const session = await account.createEmailPasswordSession(email, password);
    setLoggedInUser(await account.get());
  };

  const register = async () => {
    await account.create(ID.unique(), email, password, name);
    login(email, password);
  };

  const logout = async () => {
    await account.deleteSession("current");
    setLoggedInUser(null);
  };

  if (loggedInUser) {
    return (
      <div>
        <p>Logged in as {loggedInUser.name}</p>
        <button type="button" onClick={logout}>
          Logout
        </button>
      </div>
    );
  }

  return (
    <div>
      <p>Not logged in</p>
      <form>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="button" onClick={() => login(email, password)}>
          Login
        </button>
        <button type="button" onClick={register}>
          Register
        </button>
      </form>
    </div>
  );
};

export default LoginPage;

```

Run your project with npm run dev and open [Localhost on Port 3000](http://localhost:3000/) in your browser.

Don't forget to add some CSS to suit your style.

###### Recommended

- [API reference/Account](https://appwrite.io/docs/references/cloud/client-web/account)
- [API reference/Teams](https://appwrite.io/docs/references/cloud/client-web/teams)
- [API reference/Databases](https://appwrite.io/docs/references/cloud/client-web/databases)
- [API reference/Storage](https://appwrite.io/docs/references/cloud/client-web/storage)

## SvelteKit Appwrite Setup
[Skip to content](https://appwrite.io/docs/quick-starts/sveltekit#main)

[![appwrite](https://appwrite.io/images/logos/appwrite.svg)![appwrite](https://appwrite.io/images/logos/appwrite-light.svg)](https://appwrite.io/)

[Go to Console](https://cloud.appwrite.io/)

Learn how to setup your first SvelteKit project powered by Appwrite.

Head to the [Appwrite Console](https://cloud.appwrite.io/console).

![Create project screen](https://appwrite.io/images/docs/quick-starts/dark/create-project.png)

![Create project screen](https://appwrite.io/images/docs/quick-starts/create-project.png)

If this is your first time using Appwrite, create an account and create your first project.

Then, under **Add a platform**, add a **Web app**. The **Hostname** should be localhost.

![Add a platform](https://appwrite.io/images/docs/quick-starts/dark/add-platform.png)

![Add a platform](https://appwrite.io/images/docs/quick-starts/add-platform.png)

You can skip optional steps.

Create a SvelteKit project.

```web-code sh line-numbers
npx sv create

```

Install the JavaScript Appwrite SDK.

```web-code sh line-numbers
npm install appwrite@18.1.1

```

Find your project's ID in the **Settings** page.

![Project settings screen](https://appwrite.io/images/docs/quick-starts/dark/project-id.png)

![Project settings screen](https://appwrite.io/images/docs/quick-starts/project-id.png)

Create a new file src/lib/appwrite.js and add the following code to it, replace <PROJECT\_ID> with your project ID.

```web-code client-web line-numbers
import { Client, Account } from 'appwrite';

export const client = new Client();

client
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1')
    .setProject('<PROJECT_ID>'); // Replace with your project ID

export const account = new Account(client);
export { ID } from 'appwrite';

```

Replace the contents of src/routes/+page.svelte with the following code.

```web-code html line-numbers
<script>
    import { account, ID } from '$lib/appwrite';

    let loggedInUser = null;

    async function login(email, password) {
        await account.createEmailPasswordSession(email, password);
        loggedInUser = await account.get();
    }

    async function register(email, password) {
        await account.create(ID.unique(), email, password);
        login(email, password);
    }

    function submit(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        const type = e.submitter.dataset.type;

        if (type === "login") {
            login(formData.get('email'), formData.get('password'));
        } else if (type === "register") {
            register(formData.get('email'), formData.get('password'));
        }
    }

    async function logout() {
        await account.deleteSession('current');
        loggedInUser = null;
    }
</script>

<p>
    {loggedInUser ? `Logged in as ${loggedInUser.name}` : 'Not logged in'}
</p>

<form on:submit={submit}>
    <input type="email" placeholder="Email" name="email" required />
    <input type="password" placeholder="Password" name="password" required />

    <button type="submit" data-type="login">Login</button>
    <button type="submit" data-type="register">Register</button>
</form>

<button on:click={logout}>Logout</button>

```

Run your project with npm run dev and open [localhost on port 5173](http://localhost:5173/) in your browser.

###### Recommended

- [API reference/Account](https://appwrite.io/docs/references/cloud/client-web/account)
- [API reference/Teams](https://appwrite.io/docs/references/cloud/client-web/teams)
- [API reference/Databases](https://appwrite.io/docs/references/cloud/client-web/databases)
- [API reference/Storage](https://appwrite.io/docs/references/cloud/client-web/storage)

## Python Appwrite Quickstart
[Skip to content](https://appwrite.io/docs/quick-starts/python#main)

[![appwrite](https://appwrite.io/images/logos/appwrite.svg)![appwrite](https://appwrite.io/images/logos/appwrite-light.svg)](https://appwrite.io/)

[Go to Console](https://cloud.appwrite.io/)

Learn how to setup your first Python project powered by Appwrite.

Head to the [Appwrite Console](https://cloud.appwrite.io/console).

If this is your first time using Appwrite, create an account and create your first project.

![Create project screen](https://appwrite.io/images/docs/quick-starts/dark/create-project.png)

![Create project screen](https://appwrite.io/images/docs/quick-starts/create-project.png)

Then, under **Integrate with your server**, add an **API Key** with the following scopes.

![Server integrations](https://appwrite.io/images/docs/quick-starts/dark/integrate-server.png)

![Server integrations](https://appwrite.io/images/docs/quick-starts/integrate-server.png)

| Category | Required scopes | Purpose |
| --- | --- | --- |
| Database | databases.write | Allows API key to create, update, and delete [databases](https://appwrite.io/docs/products/databases/databases). |
|  | collections.write | Allows API key to create, update, and delete [collections](https://appwrite.io/docs/products/databases/collections). |
|  | attributes.write | Allows API key to create, update, and delete [attributes](https://appwrite.io/docs/products/databases/collections#attributes). |
|  | documents.read | Allows API key to read [documents](https://appwrite.io/docs/products/databases/documents). |
|  | documents.write | Allows API key to create, update, and delete [documents](https://appwrite.io/docs/products/databases/documents). |

Other scopes are optional.

![Project settings screen](https://appwrite.io/images/docs/quick-starts/dark/project-id.png)

![Project settings screen](https://appwrite.io/images/docs/quick-starts/project-id.png)

Create a directory for the project.

```web-code sh line-numbers
mkdir my_app
cd my_app

```

After that, create a virtual environment in this directory and activate it.

```web-code sh line-numbers
# Create a venv
python -m venv .venv

# Active the venv in Unix shell
source .venv/bin/activate

# Or in Powershell
.venv/Scripts/Activate.ps1

```

Finally, create a file my\_app.py.

Install the Python Appwrite SDK.

```web-code sh line-numbers
pip install appwrite==11.0.0

```

Find your project ID in the **Settings** page. Also, click on the **View API Keys** button to find the API key that was created earlier.

![Project settings screen](https://appwrite.io/images/docs/quick-starts/dark/project-id.png)

![Project settings screen](https://appwrite.io/images/docs/quick-starts/project-id.png)

Open my\_app.py and initialize the Appwrite Client. Replace <PROJECT\_ID> with your project ID and <YOUR\_API\_KEY> with your API key.

```web-code py line-numbers
from appwrite.client import Client
from appwrite.services.databases import Databases
from appwrite.id import ID

client = Client()
client.set_endpoint('https://<REGION>.cloud.appwrite.io/v1')
client.set_project('<PROJECT_ID>')
client.set_key('<YOUR_API_KEY>')

```

Once the Appwrite Client is initialized, create a function to configure a todo collection.

```web-code py line-numbers
databases = Databases(client)

todoDatabase = None
todoCollection = None

def prepare_database():
  global todoDatabase
  global todoCollection

  todoDatabase = databases.create(
    database_id=ID.unique(),
    name='TodosDB'
  )

  todoCollection = databases.create_collection(
    database_id=todoDatabase['$id'],
    collection_id=ID.unique(),
    name='Todos'
  )

  databases.create_string_attribute(
    database_id=todoDatabase['$id'],
    collection_id=todoCollection['$id'],
    key='title',
    size=255,
    required=True
  )

  databases.create_string_attribute(
    database_id=todoDatabase['$id'],
    collection_id=todoCollection['$id'],
    key='description',
    size=255,
    required=False,
    default='This is a test description.'
  )

  databases.create_boolean_attribute(
    database_id=todoDatabase['$id'],
    collection_id=todoCollection['$id'],
    key='isComplete',
    required=True
  )

```

Create a function to add some mock data into your new collection.

```web-code py line-numbers
def seed_database():
  testTodo1 = {
    'title': "Buy apples",
    'description': "At least 2KGs",
    'isComplete': True
  }

  testTodo2 = {
    'title': "Wash the apples",
    'isComplete': True
  }

  testTodo3 = {
    'title': "Cut the apples",
    'description': "Don\'t forget to pack them in a box",
    'isComplete': False
  }

  databases.create_document(
    database_id=todoDatabase['$id'],
    collection_id=todoCollection['$id'],
    document_id=ID.unique(),
    data=testTodo1
  )

  databases.create_document(
    database_id=todoDatabase['$id'],
    collection_id=todoCollection['$id'],
    document_id=ID.unique(),
    data=testTodo2
  )

  databases.create_document(
    database_id=todoDatabase['$id'],
    collection_id=todoCollection['$id'],
    document_id=ID.unique(),
    data=testTodo3
  )

```

Create a function to retrieve the mock todo data, then execute the functions in \_main\_.

```web-code py line-numbers
def get_todos():
  todos = databases.list_documents(
    database_id=todoDatabase['$id'],
    collection_id=todoCollection['$id']
  )
  for todo in todos['documents']:
    print(f"Title: {todo['title']}\nDescription: {todo['description']}\nIs Todo Complete: {todo['isComplete']}\n\n")

if __name__ == "__main__":
  prepare_database()
  seed_database()
  get_todos()

```

Run your project with python my\_app.py and view the response in your console.

###### Recommended

- [API reference/Account](https://appwrite.io/docs/references/cloud/client-web/account)
- [API reference/Teams](https://appwrite.io/docs/references/cloud/client-web/teams)
- [API reference/Databases](https://appwrite.io/docs/references/cloud/client-web/databases)
- [API reference/Storage](https://appwrite.io/docs/references/cloud/client-web/storage)

## Appwrite Edge Network
[Skip to content](https://appwrite.io/docs/products/network/edges#main)

[![appwrite](https://appwrite.io/images/logos/appwrite.svg)![appwrite](https://appwrite.io/images/logos/appwrite-light.svg)](https://appwrite.io/)

[Go to Console](https://cloud.appwrite.io/)

Appwrite edges are strategically distributed locations designed to process requests closer to your users. These edge nodes handle latency-sensitive operations, such as caching, routing, and quick computations, to deliver faster, more efficient interactions while reducing the load on your application's core infrastructure.

![Edges map](https://appwrite.io/images/docs/network/dark/edges-map.png)

![Edges map](https://appwrite.io/images/docs/network/edges-map.png)

##### We're expanding!

Currently, Appwrite's edge network includes 3 locations. We are actively working to expand the number of edge locations globally. New locations will be strategically prioritized to ensure the best possible global coverage and performance for all users.

## [List](https://appwrite.io/docs/products/network/edges\#)

Appwrite edges are globally distributed, ensuring low-latency interactions for users around the world. Here's a list of locations with active or upcoming edge support:

| Location | Code | Status |
| --- | --- | --- |
| Frankfurt | FRA | Available |
| New York | NYC | Available |
| Sydney | SYD | Available |
| Singapore | SGP | 2025 |
| San Francisco | SFO | 2025 |
| Bangalore | BLR | 2025 |
| Amsterdam | AMS | 2025 |
| London | LON | 2025 |
| Toronto | TOR | 2025 |

Edges complement Appwrite regions, working together to provide fast, reliable, and scalable application performance.

## [Routing](https://appwrite.io/docs/products/network/edges\#)

Appwrite's edges handle geo-aware routing to balance traffic across the network efficiently. When a user makes a request, it is directed to the nearest available edge node based on their geographic location. This ensures optimal performance by minimizing latency and distributing traffic evenly across edge nodes.

Geo-aware routing helps handle high traffic loads by intelligently directing requests to the best-performing edge, reducing congestion and maintaining consistent response times. By leveraging this approach, Appwrite ensures that your application delivers fast and reliable experiences to users worldwide.

##### Edge vs Region

Use an edge when compute needs to happen close to your users, like serving static content, doing local computation or data processing. Use a region when compute needs to happen closer to your data, such as frequent access to your Appwrite database or storage.

## [Design](https://appwrite.io/docs/products/network/edges\#)

Edges are optimized to reduce latency and improve user experience by processing operations closer to the source of requests. Key aspects include:

- Geo-routing: Smart routing ensures user requests are served by the optimal edge node.

- Caching: Frequently accessed data is cached at edges to reduce round-trips to core regions.

- Lightweight compute: Handles quick, resource-efficient computations for real-time tasks.

- Optimization: The edge network planned locations are strategically designed with fewer, high-capacity edges to maximize cache efficiency and achieve higher cache-hit ratios.


Edges enhance Appwrite's ability to deliver fast, reliable experiences by optimizing interactions and reducing latency for end-users. Together with regions, they create a robust infrastructure designed for modern, globally distributed applications.

##### Self-Hosting?

Appwrite's self-hosted deployments operate in a single region by default. The geo-distributed edge network with its routing features is available to Cloud users. For edge infrastructure in self-hosted environments or multi-region setups, please [contact us](https://appwrite.io/contact-us/enterprise) to explore enterprise options.

###### Recommended

- [API reference/Account](https://appwrite.io/docs/references/cloud/client-web/account)
- [API reference/Teams](https://appwrite.io/docs/references/cloud/client-web/teams)
- [API reference/Databases](https://appwrite.io/docs/references/cloud/client-web/databases)
- [API reference/Storage](https://appwrite.io/docs/references/cloud/client-web/storage)

## Abuse Policy Overview
[Skip to content](https://appwrite.io/docs/advanced/platform/abuse#main)

[![appwrite](https://appwrite.io/images/logos/appwrite.svg)![appwrite](https://appwrite.io/images/logos/appwrite-light.svg)](https://appwrite.io/)

[Go to Console](https://cloud.appwrite.io/)

Appwrite is committed to providing a fair, secure, and high-quality experience for all users. This Abuse Policy, as part of our overall Fair Use Policy, outlines unacceptable behaviors and the steps you can take to report any suspected abuse. Our goal is to maintain a safe environment where everyone can build, innovate, and collaborate without fear of harmful or illegal activity.

## [Prohibited activities](https://appwrite.io/docs/advanced/platform/abuse\#)

The following actions are prohibited on the Appwrite platform and may lead to immediate suspension or termination:

- **Illegal and harmful content:** Sharing any content that is illegal, infringing (e.g., copyright infringement), harmful, threatening, defamatory, obscene, harassing, or otherwise objectionable. This includes distributing malware, viruses, or any malicious code.

- **Unauthorized access and disruption:** Accessing or attempting to access any system, data, or account without authorization. This includes:


  - Hacking

  - Penetration testing without approval

  - Denial-of-Service (DoS) attacks

  - Disrupting Appwrite Cloud's integrity or performance (e.g., excessive resource usage, unauthorized load testing)


- **Deceptive practices:** Engaging in any fraudulent or deceptive activity, such as:


  - Phishing

  - Misleading others

  - Circumventing payment obligations


- **Unsolicited communications:** Sending spam, unauthorized advertising, or any form of improper solicitation.

- **Misuse of resources:**


  - Using Appwrite Cloud for cryptocurrency mining without authorization

  - Violating any applicable laws or regulations

  - Using the Education plan for non-educational or commercial purposes


## [Reporting Abuse](https://appwrite.io/docs/advanced/platform/abuse\#)

If you observe or suspect any prohibited activity, please report it as soon as possible to [abuse@appwrite.io](mailto:abuse@appwrite.io).

Please include any relevant details (e.g., specific URLs, project IDs, or screenshots) so that we can effectively investigate and address the issue. We will review each report confidentially and take any necessary actions, which may include account suspension, service termination, or referral to law enforcement.

###### Recommended

- [API reference/Account](https://appwrite.io/docs/references/cloud/client-web/account)
- [API reference/Teams](https://appwrite.io/docs/references/cloud/client-web/teams)
- [API reference/Databases](https://appwrite.io/docs/references/cloud/client-web/databases)
- [API reference/Storage](https://appwrite.io/docs/references/cloud/client-web/storage)

## Appwrite Rendering Strategies
[Skip to content](https://appwrite.io/docs/products/sites/rendering#main)

[![appwrite](https://appwrite.io/images/logos/appwrite.svg)![appwrite](https://appwrite.io/images/logos/appwrite-light.svg)](https://appwrite.io/)

[Go to Console](https://cloud.appwrite.io/)

Rendering refers to how your web application's content is processed and delivered to users. Appwrite Sites supports two primary rendering strategies, each with its own advantages and use cases. Understanding these strategies will help you choose the right approach for your project and optimize for performance, SEO, and user experience.

- [Host a static site or SPA](https://appwrite.io/docs/products/sites/rendering/static)
- [Host an SSR site](https://appwrite.io/docs/products/sites/rendering/ssr)

## [Differences](https://appwrite.io/docs/products/sites/rendering\#differences)

There are several differences between how static hosting and SSR work on Appwrite Sites.

| Static/SPA/PWA | SSR |
| --- | --- |
| Pages are rendered at build time only | Pages are rendered every time a request is made to the server |
| All console.log and console.error outputs at run-time are be displayed in the browser console | console.log and console.error outputs on server-side functions in the web app will be displayed in the response logs on Appwrite |
| The default 404 error page is Appwrite-branded (can be updated) | The default 404 error page is taken from the framework |
| Faster cold starts | Slower cold starts |
| Can access environment variables only during build-time | Can access environment variables during build-time and run-time |
| Supported for all frameworks | Limited support for certain frameworks (learn more on [Frameworks page](https://appwrite.io/docs/products/sites/frameworks)) |

## [Choosing the right approach](https://appwrite.io/docs/products/sites/rendering\#choosing-the-right-approach)

When deciding between static and SSR for your Appwrite Sites project, consider these factors:

### [Use static hosting when:](https://appwrite.io/docs/products/sites/rendering\#use-static-hosting-when)

- Your content doesn't change frequently

- You want maximum performance with minimal server load

- Your site is primarily client-side with limited data requirements

- SEO is important but your content is relatively stable

- You need compatibility with any web framework


### [Use SSR when:](https://appwrite.io/docs/products/sites/rendering\#use-ssr-when)

- Your content changes frequently or is user-specific

- You need server-side access to data before rendering

- SEO is critical for dynamic, frequently changing content

- You want to reduce client-side JavaScript load

- You're using a supported SSR framework (Next.js, Nuxt, etc.)


Many modern applications use a hybrid approach, leveraging static generation for stable content and SSR for dynamic pages. Some frameworks (like Next.js, Nuxt, and SvelteKit support) both approaches within the same application. The SSR rendering strategy in Appwrite Sites supports such applications.

###### Recommended

- [API reference/Account](https://appwrite.io/docs/references/cloud/client-web/account)
- [API reference/Teams](https://appwrite.io/docs/references/cloud/client-web/teams)
- [API reference/Databases](https://appwrite.io/docs/references/cloud/client-web/databases)
- [API reference/Storage](https://appwrite.io/docs/references/cloud/client-web/storage)

## Appwrite MCP Integration
[Skip to content](https://appwrite.io/docs/tooling/mcp/claude#main)

[![appwrite](https://appwrite.io/images/logos/appwrite.svg)![appwrite](https://appwrite.io/images/logos/appwrite-light.svg)](https://appwrite.io/)

[Go to Console](https://cloud.appwrite.io/)

Learn how you can add the Appwrite MCP server to Claude Desktop.

##### Pre-requisite: Install uv

You must install [uv](https://docs.astral.sh/uv/getting-started/installation/) on your system to use the MCP server.

In the Claude Desktop app, open the app's **Settings** page (press CTRL + , on Windows or CMD + , on MacOS) and head to the **Developer** tab.

![Claude Settings](https://appwrite.io/images/docs/mcp/claude/claude-settings.png)

Clicking on the **Edit Config** button will take you to the claude\_desktop\_config.json file. In case the file is missing, please visit the [Model Context Protocol](https://modelcontextprotocol.io/quickstart/user#2-add-the-filesystem-mcp-server) docs.

After opening the file, add the following info:

```web-code json line-numbers
{
    "mcpServers": {
        "appwrite": {
            "command": "uvx",
            "args": [\
                "mcp-server-appwrite",\
                "--users"\
            ],
            "env": {
                "APPWRITE_PROJECT_ID": "your-project-id",
                "APPWRITE_API_KEY": "your-api-key",
                "APPWRITE_ENDPOINT": "https://<REGION>.cloud.appwrite.io/v1"
            }
        }
    }
}

```

##### Enable other MCP tools

To enable additional tools, learn more about [command-line arguments](https://appwrite.io/docs/tooling/mcp#command-line-arguments).

Restart the Claude Desktop app, click on the MCP tools button (at the bottom right section of the prompt input) and click on it to view available Appwrite MCP tools.

![Appwrite MCP tools](https://appwrite.io/images/docs/mcp/claude/claude-mcp-tools.png)

##### uvx ENOENT error

In case you see a uvx ENOENT error, ensure that you either add uvx to the PATH environment variable on your system or use the full path to your uvx installation in the config file.

Enter a prompt to list all users in your Appwrite project.

![List users in Appwrite project](https://appwrite.io/images/docs/mcp/claude/claude-list-users.png)

###### Recommended

- [API reference/Account](https://appwrite.io/docs/references/cloud/client-web/account)
- [API reference/Teams](https://appwrite.io/docs/references/cloud/client-web/teams)
- [API reference/Databases](https://appwrite.io/docs/references/cloud/client-web/databases)
- [API reference/Storage](https://appwrite.io/docs/references/cloud/client-web/storage)

## Appwrite Caching Overview
[Skip to content](https://appwrite.io/docs/products/network/caching#main)

[![appwrite](https://appwrite.io/images/logos/appwrite.svg)![appwrite](https://appwrite.io/images/logos/appwrite-light.svg)](https://appwrite.io/)

[Go to Console](https://cloud.appwrite.io/)

Appwrite employs a multi-layered caching approach to enhance the performance of your applications. By utilizing caching at the **region**, **edge**, and **CDN** levels, Appwrite ensures faster response times, optimized resource usage, and efficient handling of dynamic workloads.

## [Region-level](https://appwrite.io/docs/products/network/caching\#)

At the region level, Appwrite provides smart in-memory caching for various resources:

- **Documents**: Frequently accessed documents are cached in memory and automatically purged when updated, ensuring data consistency without manual intervention.

- **Storage files**: Frequently accessed files are cached in memory to reduce disk reads and improve performance.

- **Image transformations**: Processed images (e.g., resized or converted) are cached in memory for faster repeated requests, reducing processing overhead.


Region-level caching is tightly integrated with Appwrite's APIs, optimizing performance while preserving data integrity.

## [Edge-level](https://appwrite.io/docs/products/network/caching\#)

At the edge, Appwrite employs smart caching for specific use cases:

- **Compute builds**: Caches build artifacts for faster deployments and reduced latency during function executions.

- **Cold starts**: Pre-loads frequently accessed resources, reducing latency for new requests and improving application responsiveness.


Edge-level caching complements region-level caching, ensuring optimal performance for globally distributed applications.

## [Private caching](https://appwrite.io/docs/products/network/caching\#)

Appwrite's CDN layer includes **private caching**, a caching strategy designed to handle the dynamic and permission-sensitive nature of Appwrite's APIs and resources securely.

**What is private caching?**

In the HTTP context, private caching allows responses to be cached but ensures they are only served to the specific user or client that requested them. This is achieved using HTTP headers that control caching behavior. For example:

- Cache-Control: private, max-age=3600

Indicates that the response can be cached, but only in a private cache (e.g., the user's browser).

- Cache-Control: no-store

Ensures that no part of the response is cached, useful for highly sensitive or frequently changing data.

- Vary: Authorization

Signals that the cached response varies based on the Authorization header, ensuring permission-specific responses are cached and served appropriately.


**Why use private caching?**

Appwrite's APIs often deliver personalized or restricted content based on user roles and permissions. Private caching ensures:

- **Security**: Sensitive resources are securely cached and only served to the correct user.

- **Permission awareness**: API responses are tailored to each user's permissions, ensuring consistent behavior.

- **Performance**: By caching user-specific responses, private caching reduces backend load while maintaining secure and accurate data delivery.


This approach prevents the accidental exposure of user-specific or restricted data through shared caches while still enabling performance optimizations where possible.

## [Caching rules](https://appwrite.io/docs/products/network/caching\#)

Enterprise customers can collaborate with their Appwrite success manager to define custom caching rules tailored to their applications. This includes:

- Setting custom caching durations for specific resources.

- Defining exclusion rules for sensitive or frequently changing data.

- Optimizing cache invalidation strategies for complex workflows.


For more information on upgrading to the enterprise plan, [contact sales](https://appwrite.io/contact-us/enterprise).

###### Recommended

- [API reference/Account](https://appwrite.io/docs/references/cloud/client-web/account)
- [API reference/Teams](https://appwrite.io/docs/references/cloud/client-web/teams)
- [API reference/Databases](https://appwrite.io/docs/references/cloud/client-web/databases)
- [API reference/Storage](https://appwrite.io/docs/references/cloud/client-web/storage)

## Secure Authentication
[Skip to content](https://appwrite.io/docs/advanced/security/authentication#main)

[![appwrite](https://appwrite.io/images/logos/appwrite.svg)![appwrite](https://appwrite.io/images/logos/appwrite-light.svg)](https://appwrite.io/)

[Go to Console](https://cloud.appwrite.io/)

Appwrite helps you implement secure authentication in your applications by using password hashing to protect passwords in storage. Appwrite also provides tools to help users pick better passwords, making them harder to break.

## [Persistence](https://appwrite.io/docs/advanced/security/authentication\#)

Appwrite handles the persistence of the session in a consistent way across SDKs. After authenticating with an SDK, the SDK will persist the session so that the user will not need to log in again the next time they open the app. The mechanism for persistence depends on the SDK.

##### Best Practice

Only keep user sessions active as long as needed and maintain exactly **one** instance of the Client SDK in your app to avoid conflicting session data.

|  | Framework | Storage method |
| :-: | :-: | :-: |
| ![Javascript logo](https://appwrite.io/images/platforms/dark/javascript.svg)![Javascript logo](https://appwrite.io/images/platforms/javascript.svg) | Web | Uses a secure session cookie and falls back to local storage when a session cookie is not available. |
| ![Javascript logo](https://appwrite.io/images/platforms/dark/flutter.svg)![Javascript logo](https://appwrite.io/images/platforms/flutter.svg) | Flutter | Uses a session cookie stored in Application Documents through the **path\_provider** package. |
| ![Javascript logo](https://appwrite.io/images/platforms/dark/apple.svg)![Javascript logo](https://appwrite.io/images/platforms/apple.svg) | Apple | Uses a session cookie stored in **UserDefaults**. |
| ![Javascript logo](https://appwrite.io/images/platforms/dark/android.svg)![Javascript logo](https://appwrite.io/images/platforms/android.svg) | Android | Uses a session cookie stored in **SharedPreferences**. |

## [Session limits](https://appwrite.io/docs/advanced/security/authentication\#)

In Appwrite versions 1.2 and above, you can limit the number of active sessions created per user to prevent the accumulation of unused but active sessions. New sessions created by the same user past the session limit delete the oldest session.

You can change the session limit in the **Security** tab of the Auth Service in your Appwrite Console. The default session limit is 10 with a maximum configurable limit of 100.

## [Permissions](https://appwrite.io/docs/advanced/security/authentication\#)

Security is very important to protect users' data and privacy. Appwrite uses a [permissions model](https://appwrite.io/docs/advanced/platform/permissions) coupled with user sessions to ensure users need correct permissions to access resources. With all Appwrite services, including databases and storage, access is granted at the collection, bucket, document, or file level. These permissions are enforced for client SDKs and server SDKs when using JWT, but are ignored when using a server SDK with an API key.

## [Password history](https://appwrite.io/docs/advanced/security/authentication\#)

Password history prevents users from reusing recent passwords. This protects user accounts from security risks by enforcing a new password every time it's changed.

Password history can be enabled in the Auth service's **Security** tab on the Appwrite Console. You can choose how many previous passwords to remember, up to a maximum of 20, and block users from reusing them.

## [Password dictionary](https://appwrite.io/docs/advanced/security/authentication\#)

Password dictionary protects users from using bad passwords. It compares the user's password to the [10,000 most common passwords](https://github.com/danielmiessler/SecLists/blob/master/Passwords/Common-Credentials/10k-most-common.txt) and throws an error if there's a match. Together with [rate limits](https://appwrite.io/docs/advanced/platform/rate-limits), password dictionary will significantly reduce the chance of a malicious actor guessing user passwords.

Password dictionary can be enabled in the Auth service's **Security** tab on the Appwrite Console.

## [Password hashing](https://appwrite.io/docs/advanced/security/authentication\#)

Appwrite protects passwords by using the [Argon2](https://github.com/P-H-C/phc-winner-argon2) password-hashing algorithm.

Argon 2 is a resilient and secure password hashing algorithm that is also the winner of the [Password Hashing Competition](https://www.password-hashing.net/).

Appwrite combines Argon 2 with the use of techniques such as salting, adjustable work factors, and memory hardness to securely handle passwords.

If an user is imported into Appwrite with hash differnt than Argon2, the password will be re-hashed on first successful user's sign in. This ensures all passwords are stored as securely as possible.

## [Personal data](https://appwrite.io/docs/advanced/security/authentication\#)

Encourage passwords that are hard to guess by disallowing users to pick passwords that contain personal data. Personal data includes the user's name, email, and phone number.

Disallowing personal data can be enabled in the Auth service's **Security** tab on the Appwrite Console.

## [Session alerts](https://appwrite.io/docs/advanced/security/authentication\#)

Enable email alerts for your users so that whenever another session is created for their account, they will be alerted to the new session.

You won't receive notifications when logging in using [Magic URL](https://appwrite.io/docs/products/auth/magic-url), [Email OTP](https://appwrite.io/docs/products/auth/email-otp), or [OAuth2](https://appwrite.io/docs/products/auth/oauth2) since these authentication methods already verify user access to their systems, establishing the authentication's legitimacy.

To toggle session alerts, navigate to **Auth** \> **Security** \> **Session alerts**.

## [Memberships privacy](https://appwrite.io/docs/advanced/security/authentication\#)

In certain use cases, your app may not need to share members' personal information with others. You can safeguard privacy by marking specific membership details as private. To configure this setting, navigate to **Auth** \> **Security** \> **Memberships privacy**

These details can be made private:

- userName \- The member's name

- userEmail \- The member's email address

- mfa \- Whether the member has enabled multi-factor authentication


## [Mock phone numbers](https://appwrite.io/docs/advanced/security/authentication\#)

Creating and using mock phone numbers allows users to test SMS authentication without needing an actual phone number. This can be useful for testing edge cases where a user doesn't have a phone number but needs to sign in to your application using SMS.

To create a mock phone number, navigate to **Auth** \> **Security** \> Mock Phone Numbers. After defining a mock phone number, you need to define a specific OTP code that will be used for SMS sign-in instead of the SMS secret code sent to a real phone number.

###### Recommended

- [API reference/Account](https://appwrite.io/docs/references/cloud/client-web/account)
- [API reference/Teams](https://appwrite.io/docs/references/cloud/client-web/teams)
- [API reference/Databases](https://appwrite.io/docs/references/cloud/client-web/databases)
- [API reference/Storage](https://appwrite.io/docs/references/cloud/client-web/storage)

## Vue Appwrite Setup
[Skip to content](https://appwrite.io/docs/quick-starts/vue#main)

[![appwrite](https://appwrite.io/images/logos/appwrite.svg)![appwrite](https://appwrite.io/images/logos/appwrite-light.svg)](https://appwrite.io/)

[Go to Console](https://cloud.appwrite.io/)

Learn how to setup your first Vue project powered by Appwrite.

Head to the [Appwrite Console](https://cloud.appwrite.io/console).

![Create project screen](https://appwrite.io/images/docs/quick-starts/dark/create-project.png)

![Create project screen](https://appwrite.io/images/docs/quick-starts/create-project.png)

If this is your first time using Appwrite, create an account and create your first project.

Then, under **Add a platform**, add a **Web app**. The **Hostname** should be localhost.

![Add a platform](https://appwrite.io/images/docs/quick-starts/dark/add-platform.png)

![Add a platform](https://appwrite.io/images/docs/quick-starts/add-platform.png)

You can skip optional steps.

Create a Vue project.

```web-code sh line-numbers
npm init vue@latest my-app && cd my-app

```

Install the JavaScript Appwrite SDK.

```web-code sh line-numbers
npm install appwrite@18.1.1

```

Find your project's ID in the **Settings** page.

![Project settings screen](https://appwrite.io/images/docs/quick-starts/dark/project-id.png)

![Project settings screen](https://appwrite.io/images/docs/quick-starts/project-id.png)

Create a new file src/lib/appwrite.js and add the following code to it, replace <PROJECT\_ID> with your project ID.

```web-code client-web line-numbers
import { Client, Account} from 'appwrite';

export const client = new Client();

client
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1')
    .setProject('<PROJECT_ID>'); // Replace with your project ID

export const account = new Account(client);
export { ID } from 'appwrite';

```

Add the following code to src/App.vue.

```web-code html line-numbers
<template>
  <div>
    <p>
      {{ loggedInUser ? `Logged in as ${loggedInUser.name}` : 'Not logged in' }}
    </p>

    <form>
      <input type="email" placeholder="Email" v-model="email" />
      <input type="password" placeholder="Password" v-model="password" />
      <input type="text" placeholder="Name" v-model="name" />
      <button type="button" @click="login(email, password)">Login</button>
      <button type="button" @click="register">
        Register
      </button>
      <button type="button" @click="logout">
        Logout
      </button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { account, ID } from './lib/appwrite.js';

const loggedInUser = ref(null);
const email = ref('');
const password = ref('');
const name = ref('');

const login = async (email, password) => {
  await account.createEmailPasswordSession(email, password);
  loggedInUser.value = await account.get();
};

const register = async () => {
  await account.create(ID.unique(), email.value, password.value, name.value);
  login(email.value, password.value);
};

const logout = async () => {
  await account.deleteSession('current');
  loggedInUser.value = null;
};
</script>

```

Run your project with npm run dev -- --open --port 3000 and open [Localhost on Port 3000](http://localhost:3000/) in your browser.

###### Recommended

- [API reference/Account](https://appwrite.io/docs/references/cloud/client-web/account)
- [API reference/Teams](https://appwrite.io/docs/references/cloud/client-web/teams)
- [API reference/Databases](https://appwrite.io/docs/references/cloud/client-web/databases)
- [API reference/Storage](https://appwrite.io/docs/references/cloud/client-web/storage)

## Appwrite .NET Quick Start
[Skip to content](https://appwrite.io/docs/quick-starts/dotnet#main)

[![appwrite](https://appwrite.io/images/logos/appwrite.svg)![appwrite](https://appwrite.io/images/logos/appwrite-light.svg)](https://appwrite.io/)

[Go to Console](https://cloud.appwrite.io/)

Learn how to setup your first .NET project powered by Appwrite.

Head to the [Appwrite Console](https://cloud.appwrite.io/console).

If this is your first time using Appwrite, create an account and create your first project.

![Create project screen](https://appwrite.io/images/docs/quick-starts/dark/create-project.png)

![Create project screen](https://appwrite.io/images/docs/quick-starts/create-project.png)

Then, under **Integrate with your server**, add an **API Key** with the following scopes.

![Server integrations](https://appwrite.io/images/docs/quick-starts/dark/integrate-server.png)

![Server integrations](https://appwrite.io/images/docs/quick-starts/integrate-server.png)

| Category | Required scopes | Purpose |
| --- | --- | --- |
| Database | databases.write | Allows API key to create, update, and delete [databases](https://appwrite.io/docs/products/databases/databases). |
|  | collections.write | Allows API key to create, update, and delete [collections](https://appwrite.io/docs/products/databases/collections). |
|  | attributes.write | Allows API key to create, update, and delete [attributes](https://appwrite.io/docs/products/databases/collections#attributes). |
|  | documents.read | Allows API key to read [documents](https://appwrite.io/docs/products/databases/documents). |
|  | documents.write | Allows API key to create, update, and delete [documents](https://appwrite.io/docs/products/databases/documents). |

Other scopes are optional.

![Project settings screen](https://appwrite.io/images/docs/quick-starts/dark/project-id.png)

![Project settings screen](https://appwrite.io/images/docs/quick-starts/project-id.png)

Create a .NET CLI application.

```web-code sh line-numbers
dotnet new console -o MyApp
cd MyApp

```

Install the .NET Appwrite SDK.

```web-code sh line-numbers
dotnet add package Appwrite --version 0.13.0

```

Find your project ID in the **Settings** page. Also, click on the **View API Keys** button to find the API key that was created earlier.

![Project settings screen](https://appwrite.io/images/docs/quick-starts/dark/project-id.png)

![Project settings screen](https://appwrite.io/images/docs/quick-starts/project-id.png)

Open the file Program.cs and initialize the Appwrite Client. Replace <PROJECT\_ID> with your project ID and <YOUR\_API\_KEY> with your API key.

```web-code csharp line-numbers
using Appwrite;
using Appwrite.Models;
using Appwrite.Services;

var client = new Client();

client
    .SetEndpoint("https://<REGION>.cloud.appwrite.io/v1")
    .SetProject("<PROJECT_ID>")
    .SetKey("<YOUR_API_KEY>");

```

Once the Appwrite Client is initialized, create a function to configure a todo collection.

```web-code csharp line-numbers
var databases = new Databases(client);

Database todoDatabase;
Collection todoCollection;

todoDatabase = await databases.Create(
    databaseId: ID.Unique(),
    name: "TodosDB"
);

todoCollection = await databases.CreateCollection(
    databaseId: todoDatabase.Id,
    collectionId: ID.Unique(),
    name: "Todos"
);

await databases.CreateStringAttribute(
    databaseId: todoDatabase.Id,
    collectionId: todoCollection.Id,
    key: "title",
    size: 255,
    required: true
);

await databases.CreateStringAttribute(
    databaseId: todoDatabase.Id,
    collectionId: todoCollection.Id,
    key: "description",
    size: 255,
    required: false,
    xdefault: "This is a test description"
);

await databases.CreateBooleanAttribute(
    databaseId: todoDatabase.Id,
    collectionId: todoCollection.Id,
    key: "isComplete",
    required: true
);

```

Create a function to add some mock data into your new collection.

```web-code csharp line-numbers
var testTodo1 = new Dictionary<string, object>()
{
    {"title", "Buy apples"},
    {"description", "At least 2KGs"},
    {"isComplete", true}
};

var testTodo2 = new Dictionary<string, object>()
{
    {"title", "Wash the apples"},
    {"isComplete", true}
};

var testTodo3 = new Dictionary<string, object>()
{
    {"title", "Cut the apples"},
    {"description", "Don't forget to pack them in a box"},
    {"isComplete", false}
};

await databases.CreateDocument(
    databaseId: todoDatabase.Id,
    collectionId: todoCollection.Id,
    documentId: ID.Unique(),
    data: testTodo1
);

await databases.CreateDocument(
    databaseId: todoDatabase.Id,
    collectionId: todoCollection.Id,
    documentId: ID.Unique(),
    data: testTodo2
);

await databases.CreateDocument(
    databaseId: todoDatabase.Id,
    collectionId: todoCollection.Id,
    documentId: ID.Unique(),
    data: testTodo3
);

```

Create a function to retrieve the mock todo data.

```web-code csharp line-numbers
var todos = await databases.ListDocuments(
    databaseId: todoDatabase.Id,
    collectionId: todoCollection.Id
);

foreach (var todo in todos.Documents)
{
    Console.WriteLine($"Title: {todo.Data["title"]}\nDescription: {todo.Data["description"]}\nIs Todo Complete: {todo.Data["isComplete"]}\n\n");
}

```

Run your project with dotnet run and view the response in your console.

###### Recommended

- [API reference/Account](https://appwrite.io/docs/references/cloud/client-web/account)
- [API reference/Teams](https://appwrite.io/docs/references/cloud/client-web/teams)
- [API reference/Databases](https://appwrite.io/docs/references/cloud/client-web/databases)
- [API reference/Storage](https://appwrite.io/docs/references/cloud/client-web/storage)

## Appwrite Database Relationships
[Skip to content](https://appwrite.io/docs/products/databases/relationships#main)

[![appwrite](https://appwrite.io/images/logos/appwrite.svg)![appwrite](https://appwrite.io/images/logos/appwrite-light.svg)](https://appwrite.io/)

[Go to Console](https://cloud.appwrite.io/)

Relationships describe how documents in different collections are associated, so that related documents can be read, updated, or deleted together. Entities in real-life often associate with each other in an organic and logical way, like a person and their dog, an album and its songs, or friends in a social network.

These types of association between entities can be modeled in Appwrite using relationships.

##### Experimental feature

Appwrite Relationships is an experimental feature. The API and behavior are subject to change in future versions.

## [Relationship Attributes](https://appwrite.io/docs/products/databases/relationships\#relationship-attributes)

Relationships are represented in a collection using **relationship attributes**. The relationship attribute contains the ID of related documents, which it references during read, update, and delete operations. This attribute is **null** if a document has no related documents.

## [When to use a relationship](https://appwrite.io/docs/products/databases/relationships\#when-to-use-relationships)

Relationships help reduce redundant information. For example, a user can create many posts in your app. You can model this without relationships by keeping a copy of the user's information in all the documents representing posts, but this creates a lot of duplicate information in your database about the user.

## [Benefits of relationships](https://appwrite.io/docs/products/databases/relationships\#benefit-of-relationships)

Duplicated records waste storage, but more importantly, makes the database much harder to maintain. If the user changes their user name, you will have to update dozens or hundreds of records, a problem commonly known as an update anomaly in databases. You can avoid duplicate information by storing users and posts in separate collections and relating a user and their posts through a relationship.

## [Tradeoff](https://appwrite.io/docs/products/databases/relationships\#trade-offs)

Consider using relationships when the same information is found in multiple places to avoid duplicates. However, relationships come with the tradeoff of slowing down queries. For applications where the best read and write performance is important, it may be acceptable to tolerate duplicate data.

## [Directionality](https://appwrite.io/docs/products/databases/relationships\#directionality)

Appwrite relationships can be one-way or two-way.

| Type | Description |
| --- | --- |
| One-way | The relationship is only visible to one side of the relation. This is similar to a tree data structure. |
| Two-way | The relationship is visible to both sides of the relationship. This is similar to a graph data structure. |

## [Types](https://appwrite.io/docs/products/databases/relationships\#types)

Appwrite provides four different relationship types to enforce different associative rules between documents.

| Type | Description |
| --- | --- |
| One-to-one | A document can only be related to one and only one document. |
| One-to-many | A document can be related to many other documents. |
| Many-to-one | Many documents can be related to a single document. |
| Many-to-many | A document can be related to many other documents. |

## [On-delete](https://appwrite.io/docs/products/databases/relationships\#on-delete)

Appwrite also allows you to define the behavior of a relationship when a document is deleted.

| Type | Description |
| --- | --- |
| Restrict | If a document has at least one related document, it cannot be deleted. |
| Cascade | If a document has related documents, when it is deleted, the related documents are also deleted. |
| Set null | If a document has related documents, when it is deleted, the related documents are kept with their relationship attribute set to null. |

## [Creating relationships](https://appwrite.io/docs/products/databases/relationships\#create-relationships)

You can define relationships in the Appwrite Console, or using a [Server SDK](https://appwrite.io/docs/sdks#server)

ConsoleSDK

ConsoleSDK

You can create relationships in the Appwrite Console by adding a relationship attribute to a collection.

1. In your project, navigate to **Databases** \> **Select your database** \> **Select your collection** \> **Attributes** \> **Create attribute**.

2. Select **Relationship** as the attribute type.

3. In the **Relationship** modal, select the [relationship type](https://appwrite.io/docs/products/databases/relationships#types) and pick the related collection and attributes.

4. Pick relationship attribute key(s) to represent the related collection. Relationship attribute keys are used to reference the related collection in queries, so pick something that's intuitive and easy to remember.

5. Select desired [on delete](https://appwrite.io/docs/products/databases/relationships#on-delete) behavior.

6. Click the **Create** button to create the relationship.


Here's an example that adds a relationship between the collections **movies** and **reviews**. A relationship attribute with the key reviews is added to the movies collection, and another relationship attribute with the key movie is added to the reviews collection.

```web-code js line-numbers
const { Client, Databases } = require('node-appwrite');

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<PROJECT_ID>');               // Your project ID

const databases = new Databases(client);

databases.createRelationshipAttribute(
    'marvel',     // Database ID
    'movies',     // Collection ID
    'reviews',    // Related collection ID
    'oneToMany',  // Relationship type
    true,         // Is two-way
    'reviews',    // Attribute key
    'movie',      // Two-way attribute key
    'cascade'     // On delete action
);

```

## [Creating documents](https://appwrite.io/docs/products/databases/relationships\#create-documents)

If a collection has relationship attributes, you can create documents in two ways. You create both parent and child at the same time using a **nested** syntax or link parent and child documents through **references**\*.

NestedReference

NestedReference

You can create both the **parent** and **child** at once in a relationship by nesting data.

```web-code js line-numbers
const { Client, Databases, ID } = require('node-appwrite');

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<PROJECT_ID>');               // Your project ID

const databases = new Databases(client);

await databases.createDocument(
    'marvel',
    'movies',
    ID.unique(),
    {
        title: 'Spiderman',
        year: 2002,
        reviews: [\
            { author: 'Bob', text: 'Great movie!' },\
            { author: 'Alice', text: 'Loved it!' }\
        ]
    }
)

```

### [Edge case behaviors](https://appwrite.io/docs/products/databases/relationships\#edge-case-behaviors)

- If a nested child document is included and **no child document ID** is provided, the child document will be given a unique ID.

- If a nested child document is included and **no conflicting child document ID** exists, the child document will be **created**.

- If a nested child document is included and the **child document ID already exists**, the child document will be **updated**.


If the child documents are already present in the related collection, you can create the parent and **reference the child documents** using their IDs. Here's an example connecting reviews to a movie.

```web-code js line-numbers
const { Client, Databases, ID } = require('node-appwrite');

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<PROJECT_ID>');               // Your project ID

const databases = new Databases(client);

await databases.createDocument(
    'marvel',
    'movies',
    ID.unique(),
    {
        title: 'Spiderman',
        year: 2002,
        reviews: [\
            '<REVIEW_ID_1>',\
            '<REVIEW_ID_2>'\
        ]
    }
)

```

## [Queries](https://appwrite.io/docs/products/databases/relationships\#queries)

Queries are currently not available in the experimental version of Appwrite Relationships but will be added in a later version.

## [Update Relationships](https://appwrite.io/docs/products/databases/relationships\#update)

Relationships can be updated by updating the relationship attribute.

```web-code js line-numbers
const { Client, Databases } = require('node-appwrite');

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<PROJECT_ID>');               // Your project ID

const databases = new Databases(client);

await databases.updateDocument(
    'marvel',
    'movies',
    'spiderman',
    {
        title: 'Spiderman',
        year: 2002,
        reviews: [\
            'review4',\
            'review5'\
        ]
    }
);

```

## [Delete relationships](https://appwrite.io/docs/products/databases/relationships\#delete)

### [Unlink relationships, retain documents](https://appwrite.io/docs/products/databases/relationships\#unlink)

If you need to unlink documents in a relationship but retain the documents, you can do this by **updating the relationship attribute** and removing the ID of the related document.

If a document can be related to **only one document**, you can delete the relationship by setting the relationship attribute to null.

If a document can be related to **more than one document**, you can delete the relationship by setting the relationship attribute to an empty list.

### [Delete relationships and documents](https://appwrite.io/docs/products/databases/relationships\#delete-both)

If you need to delete the documents as well as unlink the relationship, the approach depends on the [on-delete behavior](https://appwrite.io/docs/products/databases/relationships#on-delete) of a relationship.

If the on-delete behavior is **restrict**, the link between the documents needs to be deleted first before the documents can be deleted **individually**.

If the on-delete behavior is **set null**, deleting a document will leave related documents in place with their relationship attribute **set to null**. If you wish to also delete related documents, they must be deleted **individually**.

If the on-delete behavior is **cascade**, deleting the parent documents also deletes **related child documents**, except for many-to-one relationships. In many-to-one relationships, there are multiple parent documents related to a single child document, and when the child document is deleted, the parents are deleted in cascade.

```web-code js line-numbers
const { Client, Databases } = require('node-appwrite');

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<PROJECT_ID>');               // Your project ID

const databases = new Databases(client);

await databases.deleteDocument(
    'marvel',
    'movies',
    'spiderman'
);

```

## [Permissions](https://appwrite.io/docs/products/databases/relationships\#permissions)

To access documents in a relationship, you must have permission to access both the parent and child documents.

When creating both the parent and child documents, the child document will **inherit permissions** from its parent.

You can also provide explicit permissions to the child document if they should be **different from their parent**.

```web-code js line-numbers
const { Client, Databases, ID } = require('node-appwrite');

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<PROJECT_ID>');               // Your project ID

const databases = new Databases(client);

await databases.createDocument(
    'marvel',
    'movies',
    ID.unique(),
    {
        title: 'Spiderman',
        year: 2002,
        reviews: [\
            {\
                author: 'Bob',\
                text: 'Great movie!',\
                $permissions: [\
                    Permission.read(Role.any())\
                ]\
            },\
        ]
    }
);

```

When creating, updating, or deleting in a relationship, you must have permission to access all documents referenced. If the user does not have read permission to any document, an exception will be thrown.

## [Limitations](https://appwrite.io/docs/products/databases/relationships\#limitations)

Relationships can be nested between collections, but are restricted to a **max depth of three levels**. Relationship attribute key, type, and directionality can't be updated. On-delete behavior is the only option that can be updated for relationship attributes.

###### Recommended

- [API reference/Account](https://appwrite.io/docs/references/cloud/client-web/account)
- [API reference/Teams](https://appwrite.io/docs/references/cloud/client-web/teams)
- [API reference/Databases](https://appwrite.io/docs/references/cloud/client-web/databases)
- [API reference/Storage](https://appwrite.io/docs/references/cloud/client-web/storage)

## Appwrite Sites Hosting
[Skip to content](https://appwrite.io/docs/products/sites/frameworks#main)

[![appwrite](https://appwrite.io/images/logos/appwrite.svg)![appwrite](https://appwrite.io/images/logos/appwrite-light.svg)](https://appwrite.io/)

[Go to Console](https://cloud.appwrite.io/)

Appwrite Sites allows web apps developed with a variety of frameworks to be hosted and served to your users. Appwrite Sites allows web apps developed with a variety of frameworks to be hosted and served to your users. When we say a framework is "supported," it means Appwrite can automatically detect, build, and optimize deployments for that framework with minimal configuration from you.

## [Zero-configuration approach](https://appwrite.io/docs/products/sites/frameworks\#zero-configuration-approach)

Appwrite Sites uses a zero-config approach to make deployments as frictionless as possible. When you deploy a project, Appwrite:

1. Automatically detects your framework based on your package dependencies and configuration files (like next.config.js, nuxt.config.js, etc.)

2. Selects one of the [SSR](https://appwrite.io/docs/products/sites/rendering/ssr) or [Static](https://appwrite.io/docs/products/sites/rendering/static) rendering strategies

3. Sets up the appropriate install command, build command, and output directory


This means you can focus on building your application while Appwrite handles the deployment complexities.

## [Supported frameworks](https://appwrite.io/docs/products/sites/frameworks\#supported-frameworks)

|  | Framework | Rendering strategy |
| --- | --- | --- |
|  | [**Next.js**](https://appwrite.io/docs/products/sites/quick-start/nextjs) | SSRStatic |
|  | [**Nuxt**](https://appwrite.io/docs/products/sites/quick-start/nuxt) | SSRStatic |
|  | [**SvelteKit**](https://appwrite.io/docs/products/sites/quick-start/sveltekit) | SSRStatic |
|  | [**Angular**](https://appwrite.io/docs/products/sites/quick-start/angular) | SSRStatic |
|  | [**Astro**](https://appwrite.io/docs/products/sites/quick-start/astro) | SSRStatic |
| ![Remix logo](https://appwrite.io/images/platforms/dark/remix.svg)![Remix logo](https://appwrite.io/images/platforms/light/remix.svg) | [**Remix**](https://appwrite.io/docs/products/sites/quick-start/remix) | SSRStatic |
|  | [**Flutter Web**](https://appwrite.io/docs/products/sites/quick-start/flutter) | Static |
|  | [**React Native**](https://appwrite.io/docs/products/sites/quick-start/react-native) | Static |
|  | [**Other JavaScript**](https://appwrite.io/docs/products/sites/quick-start/vanilla) | Static |

### [Using unsupported frameworks](https://appwrite.io/docs/products/sites/frameworks\#using-unsupported-frameworks)

Even with "unsupported" frameworks, Appwrite will attempt to detect the correct build configuration. If your preferred framework isn't officially supported, you can still deploy it to Appwrite Sites using:

1. **Manual configuration**: You can specify a custom install command, build command, and output directory in your build setting by selecting the **Other** framework option.

2. **Static builds**: Most JavaScript frameworks (and some non-JavaScript ones) can generate static builds that work with Appwrite Sites.


###### Recommended

- [API reference/Account](https://appwrite.io/docs/references/cloud/client-web/account)
- [API reference/Teams](https://appwrite.io/docs/references/cloud/client-web/teams)
- [API reference/Databases](https://appwrite.io/docs/references/cloud/client-web/databases)
- [API reference/Storage](https://appwrite.io/docs/references/cloud/client-web/storage)

## Solid Project Setup
[Skip to content](https://appwrite.io/docs/quick-starts/solid#main)

[![appwrite](https://appwrite.io/images/logos/appwrite.svg)![appwrite](https://appwrite.io/images/logos/appwrite-light.svg)](https://appwrite.io/)

[Go to Console](https://cloud.appwrite.io/)

Learn how to setup your first Solid project powered by Appwrite.

Head to the [Appwrite Console](https://cloud.appwrite.io/console).

![Create project screen](https://appwrite.io/images/docs/quick-starts/dark/create-project.png)

![Create project screen](https://appwrite.io/images/docs/quick-starts/create-project.png)

If this is your first time using Appwrite, create an account and create your first project.

Then, under **Add a platform**, add a **Web app**. The **Hostname** should be localhost.

![Add a platform](https://appwrite.io/images/docs/quick-starts/dark/add-platform.png)

![Add a platform](https://appwrite.io/images/docs/quick-starts/add-platform.png)

You can skip optional steps.

Create a Vite project.

```web-code sh line-numbers
npm create vite@latest my-app -- --template solid && cd my-app

```

Install the JavaScript Appwrite SDK.

```web-code sh line-numbers
npm install appwrite@18.1.1

```

Find your project's ID in the **Settings** page.

![Project settings screen](https://appwrite.io/images/docs/quick-starts/dark/project-id.png)

![Project settings screen](https://appwrite.io/images/docs/quick-starts/project-id.png)

Create a new file src/lib/appwrite.js and add the following code to it, replace <PROJECT\_ID> with your project ID.

```web-code client-web line-numbers
import { Client, Account } from 'appwrite';

export const client = new Client();

client
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1')
    .setProject('<PROJECT_ID>'); // Replace with your project ID

export const account = new Account(client);
export { ID } from 'appwrite';

```

Add the following code to src/App.jsx.

```web-code client-web line-numbers
import { createSignal } from 'solid-js'
import { account, ID } from './lib/appwrite';

const App = () => {
    const [loggedInUser, setLoggedInUser] = createSignal(null);
    const [email, setEmail] = createSignal('');
    const [password, setPassword] = createSignal('');
    const [name, setName] = createSignal('');

    async function login(email, password) {
        await account.createEmailPasswordSession(email, password);
        setLoggedInUser(await account.get());
    }

    async function register(email, password, name) {
        await account.create(ID.unique(), email, password, name);
        login(email, password);
    }

    async function logout() {
        await account.deleteSession('current');
        setLoggedInUser(null);
    }

    if (loggedInUser()) {
        return (
            <div>
                <p>Logged in as {loggedInUser().name}</p>
                <button onClick={logout}>Logout</button>
            </div>
        );
    }

    return (
        <div>
            <p>Not logged in</p>
            <form>
                <input type="email" placeholder="Email" value={email()} onChange={e => setEmail(e.target.value)} />
                <input type="password" placeholder="Password" value={password()} onChange={e => setPassword(e.target.value)} />
                <input type="text" placeholder="Name" value={name()} onChange={e => setName(e.target.value)} />
                <button type="button" onClick={() => login(email(), password())}>
                    Login
                </button>
                <button type="button" onClick={() => register(email(), password(), name())}>
                    Register
                </button>
            </form>
        </div>
    );
};

export default App;

```

Run your project with npm run dev -- --open --port 3000 and open [Localhost on Port 3000](http://localhost:3000/) in your browser.

###### Recommended

- [API reference/Account](https://appwrite.io/docs/references/cloud/client-web/account)
- [API reference/Teams](https://appwrite.io/docs/references/cloud/client-web/teams)
- [API reference/Databases](https://appwrite.io/docs/references/cloud/client-web/databases)
- [API reference/Storage](https://appwrite.io/docs/references/cloud/client-web/storage)

## Database Queries
[Skip to content](https://appwrite.io/docs/products/databases/queries#main)

[![appwrite](https://appwrite.io/images/logos/appwrite.svg)![appwrite](https://appwrite.io/images/logos/appwrite-light.svg)](https://appwrite.io/)

[Go to Console](https://cloud.appwrite.io/)

Many list endpoints in Appwrite allow you to filter, sort, and paginate results using queries. Appwrite provides a common set of syntax to build queries.

## [Query class](https://appwrite.io/docs/products/databases/queries\#query-class)

Appwrite SDKs provide a Query class to help you build queries. The Query class has methods for each type of supported query operation.

## [Building queries](https://appwrite.io/docs/products/databases/queries\#building-queries)

Queries are passed to an endpoint through the queries parameter as an array of query strings, which can be generated using the Query class.

Each query method is logically separated via AND operations. For OR operation, pass multiple values into the query method separated by commas. For example Query.equal('title', \['Avatar', 'Lord of the Rings'\]) will fetch the movies Avatar or Lord of the Rings.

##### Default pagination behavior

By default, results are limited to the **first 25 items**. You can change this through [pagination](https://appwrite.io/docs/products/databases/pagination).

```web-code client-web line-numbers
import { Client, Databases, Query } from "appwrite";

const client = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1')
    .setProject('<PROJECT_ID>');

const databases = new Databases(client);

databases.listDocuments(
    '<DATABASE_ID>',
    '[COLLECTION_ID]',
    [\
        Query.equal('title', ['Avatar', 'Lord of the Rings']),\
        Query.greaterThan('year', 1999)\
    ]
);

```

## [Query operators](https://appwrite.io/docs/products/databases/queries\#query-operators)

### [Select](https://appwrite.io/docs/products/databases/queries\#select)

The select operator allows you to specify which attributes should be returned from a document. This is useful for optimizing response size and only retrieving the data you need.

```web-code client-web line-numbers
Query.select(["name", "title"])

```

### [Comparison operators](https://appwrite.io/docs/products/databases/queries\#comparison)

#### [Equal](https://appwrite.io/docs/products/databases/queries\#equal)

Returns document if attribute is equal to any value in the provided array.

```web-code client-web line-numbers
Query.equal("title", ["Iron Man"])

```

#### [Not equal](https://appwrite.io/docs/products/databases/queries\#not-equal)

Returns document if attribute is not equal to any value in the provided array.

```web-code client-web line-numbers
Query.notEqual("title", "Iron Man")

```

#### [Less than](https://appwrite.io/docs/products/databases/queries\#less-than)

Returns document if attribute is less than the provided value.

```web-code client-web line-numbers
Query.lessThan("score", 10)

```

#### [Less than or equal](https://appwrite.io/docs/products/databases/queries\#less-than-equal)

Returns document if attribute is less than or equal to the provided value.

```web-code client-web line-numbers
Query.lessThanEqual("score", 10)

```

#### [Greater than](https://appwrite.io/docs/products/databases/queries\#greater-than)

Returns document if attribute is greater than the provided value.

```web-code client-web line-numbers
Query.greaterThan("score", 10)

```

#### [Greater than or equal](https://appwrite.io/docs/products/databases/queries\#greater-than-equal)

Returns document if attribute is greater than or equal to the provided value.

```web-code client-web line-numbers
Query.greaterThanEqual("score", 10)

```

#### [Between](https://appwrite.io/docs/products/databases/queries\#between)

Returns document if attribute value falls between the two values. The boundary values are inclusive and can be strings or numbers.

```web-code client-web line-numbers
Query.between("price", 5, 10)

```

### [Null checks](https://appwrite.io/docs/products/databases/queries\#null-checks)

#### [Is null](https://appwrite.io/docs/products/databases/queries\#is-null)

Returns documents where attribute value is null.

```web-code client-web line-numbers
Query.isNull("name")

```

#### [Is not null](https://appwrite.io/docs/products/databases/queries\#is-not-null)

Returns documents where attribute value is **not** null.

```web-code client-web line-numbers
Query.isNotNull("name")

```

### [String operations](https://appwrite.io/docs/products/databases/queries\#string-operations)

#### [Starts with](https://appwrite.io/docs/products/databases/queries\#starts-with)

Returns documents if a string attribute starts with a substring.

```web-code client-web line-numbers
Query.startsWith("name", "Once upon a time")

```

#### [Ends with](https://appwrite.io/docs/products/databases/queries\#ends-with)

Returns documents if a string attribute ends with a substring.

```web-code client-web line-numbers
Query.endsWith("name", "happily ever after.")

```

#### [Contains](https://appwrite.io/docs/products/databases/queries\#contains)

Returns documents if the array attribute contains the specified elements or if a string attribute contains the specified substring.

```web-code client-web line-numbers
// For arrays
Query.contains("ingredients", ['apple', 'banana'])

// For strings
Query.contains("name", "Tom")

```

#### [Search](https://appwrite.io/docs/products/databases/queries\#search)

Searches string attributes for provided keywords. Requires a [full-text index](https://appwrite.io/docs/products/databases/collections#indexes) on queried attributes.

```web-code client-web line-numbers
Query.search("text", "key words")

```

### [Logical operators](https://appwrite.io/docs/products/databases/queries\#logical-operators)

#### [AND](https://appwrite.io/docs/products/databases/queries\#and)

Returns document if it matches all of the nested sub-queries in the array passed in.

```web-code client-web line-numbers
Query.and([\
    Query.lessThan("size", 10),\
    Query.greaterThan("size", 5)\
])

```

#### [OR](https://appwrite.io/docs/products/databases/queries\#or)

Returns document if it matches any of the nested sub-queries in the array passed in.

```web-code client-web line-numbers
Query.or([\
    Query.lessThan("size", 5),\
    Query.greaterThan("size", 10)\
])

```

### [Ordering](https://appwrite.io/docs/products/databases/queries\#ordering)

#### [Order descending](https://appwrite.io/docs/products/databases/queries\#order-desc)

Orders results in descending order by attribute. Attribute must be indexed.

```web-code client-web line-numbers
Query.orderDesc("attribute")

```

#### [Order ascending](https://appwrite.io/docs/products/databases/queries\#order-asc)

Orders results in ascending order by attribute. Attribute must be indexed.

```web-code client-web line-numbers
Query.orderAsc("attribute")

```

### [Pagination](https://appwrite.io/docs/products/databases/queries\#pagination)

#### [Limit](https://appwrite.io/docs/products/databases/queries\#limit)

Limits the number of results returned by the query. Used for [pagination](https://appwrite.io/docs/products/databases/pagination).

```web-code client-web line-numbers
Query.limit(25)

```

#### [Offset](https://appwrite.io/docs/products/databases/queries\#offset)

Offset the results returned by skipping some of the results. Used for [pagination](https://appwrite.io/docs/products/databases/pagination).

```web-code client-web line-numbers
Query.offset(0)

```

#### [Cursor after](https://appwrite.io/docs/products/databases/queries\#cursor-after)

Places the cursor after the specified resource ID. Used for [pagination](https://appwrite.io/docs/products/databases/pagination).

```web-code client-web line-numbers
Query.cursorAfter("62a7...f620")

```

#### [Cursor before](https://appwrite.io/docs/products/databases/queries\#cursor-before)

Places the cursor before the specified resource ID. Used for [pagination](https://appwrite.io/docs/products/databases/pagination).

```web-code client-web line-numbers
Query.cursorBefore("62a7...a600")

```

## [Complex queries](https://appwrite.io/docs/products/databases/queries\#complex-queries)

You can create complex queries by combining AND and OR operations. For example, to find items that are either books under $20 or magazines under $10:

```web-code client-web line-numbers
const results = await databases.listDocuments(
    '<DATABASE_ID>',
    '<COLLECTION_ID>',
    [\
        Query.or([\
            Query.and([\
                Query.equal('category', ['books']),\
                Query.lessThan('price', 20)\
            ]),\
            Query.and([\
                Query.equal('category', ['magazines']),\
                Query.lessThan('price', 10)\
            ])\
        ])\
    ]
);

```

This example demonstrates how to combine OR and AND operations. The query uses Query.or() to match either condition: books under $20 OR magazines under $10. Each condition within the OR is composed of two AND conditions - one for the category and one for the price threshold. The database will return documents that match either of these combined conditions.

###### Recommended

- [API reference/Account](https://appwrite.io/docs/references/cloud/client-web/account)
- [API reference/Teams](https://appwrite.io/docs/references/cloud/client-web/teams)
- [API reference/Databases](https://appwrite.io/docs/references/cloud/client-web/databases)
- [API reference/Storage](https://appwrite.io/docs/references/cloud/client-web/storage)

## Appwrite Billing Management
[Skip to content](https://appwrite.io/docs/advanced/platform/billing#main)

[![appwrite](https://appwrite.io/images/logos/appwrite.svg)![appwrite](https://appwrite.io/images/logos/appwrite-light.svg)](https://appwrite.io/)

[Go to Console](https://cloud.appwrite.io/)

Appwrite allows you to configure billing per organization. You can access your organizations billing information under the **Billing** tab of your organization.

## [Plans](https://appwrite.io/docs/advanced/platform/billing\#plans)

You can view or change your organization's plan under the **Billing** section. You'll also find the expected cost, as well as the start and end date of the current billing period.

### [Billing period](https://appwrite.io/docs/advanced/platform/billing\#billing-period)

Billing periods begin the day you change your plan, and lasts 30 days. Your resource limits are reset at the beginning of each billing period.

Charges are applied at different times:

- **Seats and add-ons** are billed at the start of the billing period

- **Additional usage** (like bandwidth, execution time, and GB-hours) is billed at the start of the following billing period based on your actual usage


## [Payment history](https://appwrite.io/docs/advanced/platform/billing\#payment-history)

You can view and download you past invoices under **Payment history**. You can click the three-dots menu to view and download your invoices.

## [Payment methods](https://appwrite.io/docs/advanced/platform/billing\#payment-methods)

Appwrite Cloud accepts credit and debit cards as payment methods and will bill the card at the end of each billing cycle. Appwrite accepts Visa, Mastercard, American Express, Discover & Diners Club, China UnionPay, Japan Credit Bureau (JCB), Cartes Bancairies, and eftpos Australia.

## [Billing addresss](https://appwrite.io/docs/advanced/platform/billing\#billing-addresss)

Your billing address will be displayed on your invoices and used when Appwrite Cloud bills your payment method at the end of a billing cycle.

## [Tax ID](https://appwrite.io/docs/advanced/platform/billing\#tax-id)

If you'd like you or your company's tax ID displayed on your generated invoice, you can provide it under **Tax ID**.

## [Budget cap](https://appwrite.io/docs/advanced/platform/billing\#budget-cap)

Appwrite allows you to set budget caps when on your organizations. Appwrite will automatically scale your projects by purchasing add-ons as they require more resources. Budget caps limit the amount of automatic scaling and prevent unexpected bills. This budget cap does **not include the plan's recurring cost**, only add-ons.

You can enable budget caps under **Budget cap**, toggle the option **Enable budget cap**. You will be able to set a budget cap in USD.

### [Budget alerts](https://appwrite.io/docs/advanced/platform/billing\#budget-alerts)

When you enable budget cap, you'll be able to configure alerts under **Budget alerts** to warn you when you organization is near the budget cap. By default, an email alert will be sent at 75% of the budget cap. You can add up to three check points that send budget alerts when reached.

## [Redeem credit](https://appwrite.io/docs/advanced/platform/billing\#redeem-credit)

If you received a redeemable code for Appwrite Cloud credits, you can redeem them in the **Available credit** section. When you redeem credit, the credit balance will be automatically applied to the next billing cycle.

## [Recurring payments for Indian developers](https://appwrite.io/docs/advanced/platform/billing\#recurring-payments-for-indian-developers)

The Reserve Bank of India (RBI) mandates additional security measures for recurring payments on **Indian cards**. Appwrite is obligated to ask for verification before billing your card. Appwrite asks for verification for up to $150 in case you use add-ons. Confirming the verification will not charge your card. When you are charged at the end of the billing period, you will not be charged more than your monthly plan plus add-ons used.

If you set a budget cap, the verification will remain at $150, but the budget cap will still be applied for your add-ons. Again, you will not be charged when confirming the verification. When you are charged at the end of the billing period, you will not be charged more than your monthly plan plus add-ons used.

If you need higher limits, [contact us](mailto:billing@appwrite.io).

###### Recommended

- [API reference/Account](https://appwrite.io/docs/references/cloud/client-web/account)
- [API reference/Teams](https://appwrite.io/docs/references/cloud/client-web/teams)
- [API reference/Databases](https://appwrite.io/docs/references/cloud/client-web/databases)
- [API reference/Storage](https://appwrite.io/docs/references/cloud/client-web/storage)

## Dart Appwrite Quickstart
[Skip to content](https://appwrite.io/docs/quick-starts/dart#main)

[![appwrite](https://appwrite.io/images/logos/appwrite.svg)![appwrite](https://appwrite.io/images/logos/appwrite-light.svg)](https://appwrite.io/)

[Go to Console](https://cloud.appwrite.io/)

Learn how to setup your first Dart project powered by Appwrite.

Head to the [Appwrite Console](https://cloud.appwrite.io/console).

![Create project screen](https://appwrite.io/images/docs/quick-starts/dark/create-project.png)

![Create project screen](https://appwrite.io/images/docs/quick-starts/create-project.png)

If this is your first time using Appwrite, create an account and create your first project.

Then, under **Integrate with your server**, add an **API Key** with the following scopes.

| Category | Required scopes | Purpose |
| --- | --- | --- |
| Database | databases.write | Allows API key to create, update, and delete [databases](https://appwrite.io/docs/products/databases/databases). |
|  | collections.write | Allows API key to create, update, and delete [collections](https://appwrite.io/docs/products/databases/collections). |
|  | attributes.write | Allows API key to create, update, and delete [attributes](https://appwrite.io/docs/products/databases/collections#attributes). |
|  | documents.read | Allows API key to read [documents](https://appwrite.io/docs/products/databases/documents). |
|  | documents.write | Allows API key to create, update, and delete [documents](https://appwrite.io/docs/products/databases/documents). |

Other scopes are optional.

![Create project screen](https://appwrite.io/images/docs/quick-starts/dark/integrate-server.png)

![Create project screen](https://appwrite.io/images/docs/quick-starts/integrate-server.png)

Create a Dart CLI application.

```web-code sh line-numbers
dart create -t console my_app
cd my_app

```

After entering the project directory, remove the lib/ and test/ directories.

Install the Dart Appwrite SDK.

```web-code sh line-numbers
dart pub add dart_appwrite:16.0.0

```

Find your project ID in the **Settings** page.

![Project settings screen](https://appwrite.io/images/docs/quick-starts/dark/project-id.png)

![Project settings screen](https://appwrite.io/images/docs/quick-starts/project-id.png)

Also, click on the **View API Keys** button to find the API key that was created earlier.

Open bin/my\_app.dart and initialize the Appwrite Client. Replace <PROJECT\_ID> with your project ID and <YOUR\_API\_KEY> with your API key.

```web-code dart line-numbers
import 'package:dart_appwrite/dart_appwrite.dart';

var client = Client();

Future<void> main() async {
  client
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1")
    .setProject("<PROJECT_ID>")
    .setKey("<YOUR_API_KEY>");
}

```

Once the Appwrite Client is initialized, create a function to configure a todo collection.

```web-code dart line-numbers
var databases;
var todoDatabase;
var todoCollection;

Future<void> prepareDatabase() async {
  databases = Databases(client);

  todoDatabase = await databases.create(
    databaseId: ID.unique(),
    name: 'TodosDB'
  );

  todoCollection = await databases.createCollection(
    databaseId: todoDatabase.$id,
    collectionId: ID.unique(),
    name: 'Todos'
  );

  await databases.createStringAttribute(
    databaseId: todoDatabase.$id,
    collectionId: todoCollection.$id,
    key: 'title',
    size: 255,
    xrequired: true
  );

  await databases.createStringAttribute(
    databaseId: todoDatabase.$id,
    collectionId: todoCollection.$id,
    key: 'description',
    size: 255,
    xrequired: false,
    xdefault: 'This is a test description'
  );

  await databases.createBooleanAttribute(
    databaseId: todoDatabase.$id,
    collectionId: todoCollection.$id,
    key: 'isComplete',
    xrequired: true
  );
}

```

Create a function to add some mock data into your new collection.

```web-code dart line-numbers
Future<void> seedDatabase() async {
  var testTodo1 = {
    'title': 'Buy apples',
    'description': 'At least 2KGs',
    'isComplete': true
  };

  var testTodo2 = {
    'title': 'Wash the apples',
    'isComplete': true
  };

  var testTodo3 = {
    'title': 'Cut the apples',
    'description': 'Don\'t forget to pack them in a box',
    'isComplete': false
  };

  await databases.createDocument(
    databaseId: todoDatabase.$id,
    collectionId: todoCollection.$id,
    documentId: ID.unique(),
    data: testTodo1
  );

  await databases.createDocument(
    databaseId: todoDatabase.$id,
    collectionId: todoCollection.$id,
    documentId: ID.unique(),
    data: testTodo2
  );

  await databases.createDocument(
    databaseId: todoDatabase.$id,
    collectionId: todoCollection.$id,
    documentId: ID.unique(),
    data: testTodo3
  );
}

```

Create a function to retrieve the mock todo data.

```web-code dart line-numbers
Future<void> getTodos() async {
  var todos = await databases.listDocuments(
    databaseId: todoDatabase.$id,
    collectionId: todoCollection.$id
  );

  todos.documents.forEach((todo) {
    print('Title: ${todo.data['title']}\nDescription: ${todo.data['description']}\nIs Todo Complete: ${todo.data['isComplete']}\n\n');
  });
}

```

Finally, revisit the main() function and call the functions created in previous steps.

```web-code dart line-numbers
Future<void> main() async {
  client
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1")
    .setProject("<PROJECT_ID>")
    .setKey("<YOUR_API_KEY>");

    await prepareDatabase();
    await Future.delayed(const Duration(seconds: 1));
    await seedDatabase();
    await getTodos();
}

```

Run your project with dart run bin/my\_app.dart and view the response in your console.

###### Recommended

- [API reference/Account](https://appwrite.io/docs/references/cloud/client-web/account)
- [API reference/Teams](https://appwrite.io/docs/references/cloud/client-web/teams)
- [API reference/Databases](https://appwrite.io/docs/references/cloud/client-web/databases)
- [API reference/Storage](https://appwrite.io/docs/references/cloud/client-web/storage)

## Messaging Overview
[Skip to content](https://appwrite.io/docs/products/messaging/messages#main)

[![appwrite](https://appwrite.io/images/logos/appwrite.svg)![appwrite](https://appwrite.io/images/logos/appwrite-light.svg)](https://appwrite.io/)

[Go to Console](https://cloud.appwrite.io/)

Each time you send or schedule a push notification, email, or SMS text, it's recorded in Appwrite as a **message** is displayed in the **Messages** tab.

![Add a target](https://appwrite.io/images/docs/messaging/messages/dark/messages-overview.png)

![Add a target](https://appwrite.io/images/docs/messaging/messages/messages-overview.png)

## [Messages](https://appwrite.io/docs/products/messaging/messages\#messages)

Each message displays with the following information.

| Column | Description |
| --- | --- |
| Message ID | The unique ID of the message. |
| Description | The developer defined description of the message. End users do not see this description. |
| Message | The message delivered to end users. |
| Type | Type of message, either Push, Email, and SMS. |
| Status | Indicates the status of the message, can be one of draft, scheduled, processing, failed, success. |
| Scheduled at | Indicates the scheduled delivery time of the message. |
| Delivered at | Indicates the time at which the message was successfully delivered. |

## [Messages types](https://appwrite.io/docs/products/messaging/messages\#messages-types)

There are three types of messages

| Message type | Description |
| --- | --- |
| Push notifications | Push notifications are alerts that show up on a user device's notification center. This can be used to deliver messages to the user whether their application is open or not. |
| Emails | Emails let you deliver rich content to a users' inbox. Appwrite allows you to send customized HTML email messages so you can include links, styling, and more. |
| SMS | SMS messages let you deliver text messages to your user's phone. This helps you reach your user, even when their device do not have internet access. |

## [Messages lifecycle](https://appwrite.io/docs/products/messaging/messages\#messages-lifecycle)

Messages can begin as a draft, or proceed directly to processing if it's sent immediately. If the message is scheduled to be sent later, its status is set to scheduled, then to processing at schedule time. After attempted delivery, it is marked as sent or failed depending on if the message was successfully delivered.

![Message lifecycle](https://appwrite.io/images/docs/messaging/dark/message-status.png)

![Message lifecycle](https://appwrite.io/images/docs/messaging/message-status.png)

## [Choosing a message type](https://appwrite.io/docs/products/messaging/messages\#choosing-a-message-type)

Choosing the right type of notification to reach your audience is important for your app's success. Here are some common factors to consider when deciding what type of message should be sent.

| Message type | Description |
| --- | --- |
| Time-sensitive messages | Push notifications or SMS messages are ideal for time-sensitive messages, as they are typically checked frequently and opened within minutes, ensuring prompt attention. |
| Guaranteed delivery | Emails and SMS messages are more reliable for guaranteed delivery of important messages like invoices and order confirmations, as push notifications can be easily missed. |
| Content-rich messages | Emails are best suited for delivering content-rich messages like promotional letters, detailed updates, and newsletters, thanks to support for HTML, allowing for rich text, links, and styling. |
| Increasing engagement | Push notifications are effective for increasing engagement with users, as they can be clicked on to link directly to your app, promoting immediate interaction. |
| Accessibility and reach | Emails and SMS messages allow you to reach users even before they have installed your app, making them suitable for announcement-type messages that require broad accessibility. |

## [Composing messages](https://appwrite.io/docs/products/messaging/messages\#composing-messages)

Different types of messages have different content and configurable options. Here are the different components that make up a message.

Push notificationsEmailsSMS

Push notificationsEmails
More

| Parameter | Required | Description |
| --- | --- | --- |
| messageId | required | The title of the push notification. This is the headline text that recipients see first. |
| title | optional | The title of the push notification. This is the headline text that recipients see first. Can be omitted for background notifications. |
| body | optional | The main content or body of the push notification. Provides the details or message you want to convey. Can be omitted for background notifications. |
| data | optional | Extra key-value pairs that apps can use to handle the notification more effectively, such as directing users to a specific part of the app. |
| action | optional | Specifies which activity or view controller to open within the app when the notification is tapped. |
| icon | optional | Sets the icon of the notification, used only for Android devices. This can help in branding the notification. |
| sound | optional | Sets the sound to use for the notification. For Android, the sound file must be located in /res/raw; for Apple devices, it must be in the app's main bundle or the Library/Sounds folder of the app container. |
| color | optional | Specifies a color tint for the notification icon, used only for Android devices. This can be used to align with brand colors. |
| tag | optional | Can be used to replace an existing notification with the same tag, used only for Android devices. Useful for updating or canceling notifications. |
| badge | optional | Sets the number to display next to the app's icon, indicating the number of notifications or updates. Setting to 0 removes any existing badge. Must be an integer. For Apple devices only. |
| contentAvailable | optional | For iOS devices only. When set, wakes up the app in the background without showing a notification. Used to update app data remotely. Requires priority to be set to normal. **Note:** APNS may throttle if sending more than 2-3 background notifications per hour. For Android, similar functionality can be achieved by sending a data-only notification without title and body. |
| critical | optional | For iOS devices only. Marks the notification as critical to bypass silent and do not disturb settings. Requires the app to have the critical notification entitlement from Apple. |
| priority | optional | Sets notification priority to normal or high. Normal priority delivers at the most convenient time based on battery life and may group notifications. High priority delivers immediately. |
| draft | optional | If the message is a draft, can be true or false. |
| scheduledAt | optional | An ISO date time string specifying when the push notification should be sent. |

| Parameter | Required | Description |
| --- | --- | --- |
| subject | required | The subject line of the email. This is what recipients see first in their inbox. |
| content | required | The main content of the email. This can be plain text or HTML, depending on the html flag. |
| cc | optional | An array of target IDs to be included in the carbon copy (CC) field. These recipients can see each other's email addresses. |
| bcc | optional | An array of target IDs to be included in the blind carbon copy (BCC) field. These recipients cannot see each other's email addresses. |
| html | optional | A boolean indicating whether the content is in HTML format. This allows for rich text, links, and styling in the email content. |
| draft | optional | If the message is a draft, can be true or false. |
| scheduledAt | optional | An ISO date time string specifying when the email should be sent. |

| Parameter | Required | Description |
| --- | --- | --- |
| content | required | The main content of the SMS. This should be concise and clear, as SMS messages have character limits. |
| draft | optional | If the message is a draft, can be true or false. |
| scheduledAt | optional | An ISO date time string specifying when the SMS should be sent. |

## [Sending a message](https://appwrite.io/docs/products/messaging/messages\#create-a-message)

You can create a message with a Server SDK. You can send a push notification like this.

```web-code server-nodejs line-numbers
const sdk = require('node-appwrite');

// Init SDK
const client = new sdk.Client();

const messaging = new sdk.Messaging(client);

client
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<PROJECT_ID>')                 // Your project ID
    .setKey('919c2d18fb5d4...a2ae413da83346ad2') // Your secret API key
;

const message = await messaging.createPush(
        '[MESSAGE_ID]',                          // messageId
        '[TITLE]',                               // title
        '[BODY]',                                // body
        [],                                      // topics (optional)
        [],                                      // users (optional)
        [],                                      // targets (optional)
        {},                                      // data (optional)
        '[ACTION]',                              // action (optional)
        '[ICON]',                                // icon (optional)
        '[SOUND]',                               // sound (optional)
        '[COLOR]',                               // color (optional)
        '[TAG]',                                 // tag (optional)
        1,                                       // badge (optional)
        false,                                   // contentAvailable (optional)
        false,                                   // critical (optional)
        'normal',                                // priority (optional)
        true,                                    // draft (optional)
        ''                                       // scheduledAt (optional)
    );

```

[Learn more about sending a push notification](https://appwrite.io/docs/products/messaging/send-push-notifications)

You can send an email like this.

```web-code server-nodejs line-numbers
const sdk = require('node-appwrite');

// Init SDK
const client = new sdk.Client();

const messaging = new sdk.Messaging(client);

client
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<PROJECT_ID>')                 // Your project ID
    .setKey('919c2d18fb5d4...a2ae413da83346ad2') // Your secret API key
;

const message - await messaging.createEmail(
        '[MESSAGE_ID]',                          // messageId
        '[SUBJECT]',                             // subject
        '[CONTENT]',                             // content
        [],                                      // topics (optional)
        [],                                      // users (optional)
        [],                                      // targets (optional)
        [],                                      // cc (optional)
        [],                                      // bcc (optional)
        true,                                    // draft (optional)
        false,                                   // html (optional)
        ''                                       // scheduledAt (optional)
    );

```

[Learn more about sending an email](https://appwrite.io/docs/products/messaging/send-email-messages)

You can send an SMS message like this.

```web-code server-nodejs line-numbers
const sdk = require('node-appwrite');

// Init SDK
const client = new sdk.Client();

const messaging = new sdk.Messaging(client);

client
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<PROJECT_ID>')                 // Your project ID
    .setKey('919c2d18fb5d4...a2ae413da83346ad2') // Your secret API key
;

const message = await messaging.createSms(
        '[MESSAGE_ID]',                          // messageId
        '[CONTENT]',                             // content
        [],                                      // topics (optional)
        [],                                      // users (optional)
        [],                                      // targets (optional)
        true,                                    // draft (optional)
        ''                                       // scheduledAt (optional)
    );

```

[Learn more about sending a SMS message](https://appwrite.io/docs/products/messaging/send-sms-messages)

###### Recommended

- [API reference/Account](https://appwrite.io/docs/references/cloud/client-web/account)
- [API reference/Teams](https://appwrite.io/docs/references/cloud/client-web/teams)
- [API reference/Databases](https://appwrite.io/docs/references/cloud/client-web/databases)
- [API reference/Storage](https://appwrite.io/docs/references/cloud/client-web/storage)

## Appwrite Database Backups
[Skip to content](https://appwrite.io/docs/products/databases/backups#main)

[![appwrite](https://appwrite.io/images/logos/appwrite.svg)![appwrite](https://appwrite.io/images/logos/appwrite-light.svg)](https://appwrite.io/)

[Go to Console](https://cloud.appwrite.io/)

Appwrite Backups enable seamless, **encrypted** database backups on Cloud. All backups are **hot** backups, ensuring zero downtime and fast recovery. Learn how to efficiently back up your databases to ensure data security and smooth recovery.

##### Backups are available on Appwrite Cloud for all Pro, Scale, and Enterprise customers.

Appwrite Backups allow you to automate database backups using backup policies, supporting pre-defined, custom retention & other options. You can also create manual backups whenever necessary.

## [Backup policies](https://appwrite.io/docs/products/databases/backups\#backup-policies)

Backup policies allow you to automate your backup process. The Scale and Enterprise plans allow for more customization and offer options like how often backups should occur, how long they should be retained, and when they should run.

### [Creating a backup policy](https://appwrite.io/docs/products/databases/backups\#creating-backup-policy)

To automate your database backups, you need to create backup policies that run at scheduled intervals.

![Create databases screen](https://appwrite.io/images/docs/databases/dark/databases.png)

![Create databases screen](https://appwrite.io/images/docs/databases/databases.png)

1. In the Appwrite Console's sidebar, click **Databases**

2. Create or select & navigate to your database and click on the **Backups** Tab

3. Click on **Create Policies** & select a pre-defined policy




   - On a **Pro** plan, you get access to a Daily backup policy


![Pro plan policy](https://appwrite.io/images/docs/databases/dark/pro-policy.png)

![Pro plan policy](https://appwrite.io/images/docs/databases/pro-policy.png)

   - On **Scale** and **Enterprise** plans, you get access to more & custom policies




     - Select a pre-defined policy

       ![Scale plan policies](https://appwrite.io/images/docs/databases/dark/scale-policies.png)





       ![Scale plan policies](https://appwrite.io/images/docs/databases/scale-policies.png)

     - Or create a custom policy and adjust the settings as you like

       ![Custom policies for Scale plan](https://appwrite.io/images/docs/databases/dark/scale-custom-policies.png)





       ![Custom policies for Scale plan](https://appwrite.io/images/docs/databases/scale-custom-policies.png)


4. Click on **Create**


Your database is now set up for automated backups with just a few clicks. Note that you can always navigate to the same tab and click **Create Manual** to create a backup on-demand.

## [Manual backups](https://appwrite.io/docs/products/databases/backups\#manual-backups)

You can always create an on-demand backup whenever necessary.

1. In the Appwrite Console's sidebar, click **Databases**

2. Select & navigate to your database and click on the **Backups** Tab

3. Click on **Manual Backup**


Depending on the size of your database, the backup process may take some time to complete. You can monitor its progress via the floating status bar at the bottom of your screen.

## [Restoring backups](https://appwrite.io/docs/products/databases/backups\#restoring-backups)

To restore a database, you must have a backup of the database you want to restore.

![Create databases screen](https://appwrite.io/images/docs/databases/dark/restore.png)

![Create databases screen](https://appwrite.io/images/docs/databases/restore.png)

1. In the Appwrite Console's sidebar, click **Databases**

2. Select & navigate to your database and click on the **Backups** Tab

3. Click on the options menu in the far corner of your backup

4. In the dropdown menu, click **Restore**.

5. Enter the new database name and an optional database ID

6. Click **Restore**


Depending on the size of your database, the restoration process may take some time. You can observe its status in a floating bar across your project.

## [Backup security & performance](https://appwrite.io/docs/products/databases/backups\#backup-security-and-performance)

All backups created with Appwrite are:

1. **Encrypted**: All backups are securely encrypted to ensure your data remains protected at all times.

2. **Remotely stored**: Backups are stored in a remote location, providing an additional layer of security and ensuring your data is always recoverable.

3. **Hot backups**: Backups are hot, meaning they occur with zero downtime, allowing you to recover data quickly without interrupting your projects and services.


## [Best practices](https://appwrite.io/docs/products/databases/backups\#best-practices)

To ensure your backups are robust and effective, consider the following best practices:

1. **Schedule regular backups**: Add multiple backup policies based on the frequency of database changes. Daily or weekly backups are often sufficient for most use cases.

2. **Retain critical backups longer**: Use custom policies with longer retention to keep backups of critical data for extended periods, ensuring historical records are available when needed.

3. **Optimize backup policies based on data sensitivity**: Tailor your backup frequency and retention settings according to the sensitivity and importance of the data. Critical data may require more frequent backups, while less essential data can have longer retention and fewer backups.


###### Recommended

- [API reference/Account](https://appwrite.io/docs/references/cloud/client-web/account)
- [API reference/Teams](https://appwrite.io/docs/references/cloud/client-web/teams)
- [API reference/Databases](https://appwrite.io/docs/references/cloud/client-web/databases)
- [API reference/Storage](https://appwrite.io/docs/references/cloud/client-web/storage)

## Messaging Targets Overview
[Skip to content](https://appwrite.io/docs/products/messaging/targets#main)

[![appwrite](https://appwrite.io/images/logos/appwrite.svg)![appwrite](https://appwrite.io/images/logos/appwrite-light.svg)](https://appwrite.io/)

[Go to Console](https://cloud.appwrite.io/)

Targets are different ways a user can be reached. For example, a user might have two emails, a phone number as well as a phone and a tablet with your app installed. This means, the user has five different targets that you can deliver messages to.

![Target overview](https://appwrite.io/images/docs/messaging/targets/dark/target-overview.png)

![Target overview](https://appwrite.io/images/docs/messaging/targets/target-overview.png)

## [Topics and targets](https://appwrite.io/docs/products/messaging/targets\#)

A user can have multiple targets, such as emails, phone numbers, and devices with your app installed. These targets can subscribe to a topic, so when messages are published to a topic, all subscribed targets receive the message.

[Learn more about topics](https://appwrite.io/docs/products/messaging/topics)

## [Types of targets](https://appwrite.io/docs/products/messaging/targets\#)

There are three types of targets you can use to reach your targets.

| Target Type | Description |
| --- | --- |
| **Email** | Allows you to send emails to the user's email. |
| **SMS** | Allows you to send SMS messages to the user's phone. |
| **Push notification** | Allows you to send push notifications to the user's device. |

## [Add a target](https://appwrite.io/docs/products/messaging/targets\#)

Before you can send messages, make sure you have the appropriate targets added for your user.

### [Add email target](https://appwrite.io/docs/products/messaging/targets\#)

Verified emails for users that signed up with [email password](https://appwrite.io/docs/products/auth/email-password), [magic URL](https://appwrite.io/docs/products/auth/magic-url), and [email OTP](https://appwrite.io/docs/products/auth/email-otp) login will already have an email target.

### [Add SMS target](https://appwrite.io/docs/products/messaging/targets\#)

Verified phone numbers for users that signed up with [Phone OTP](https://appwrite.io/docs/products/auth/phone-sms) login will already have a phone target.

### [Add push notification target](https://appwrite.io/docs/products/messaging/targets\#)

Push notifications require configuration on both the Appwrite platform and your client app's code.

1. In your Firebase console, navigate to **Settings** \> **General** \> **Your apps** \> add an **iOS** app.

2. Register and download your google-services.json config file.

3. Head to **Apple Developer Member Center** \> **Program resources** \> **Certificates, Identifiers & Profiles** \> **Keys**. The key needs **Apple Push Notification Service** enabled.

4. Create a new key, note down the key ID and download your key.

5. In Firebase console, go to _Settings_\\* \> **Cloud Messaging** \> **APNs authentication key** \> click **Upload**. Upload your key here.

6. Add push notification capability to your app by clicking your root-level app in XCode > **Signing & Capabilities** \>  Capabilities > Search for **Push Notifications**.

7. If using SwiftUI, disable swizzling by setting FirebaseAppDelegateProxyEnabled to NO in your Info.plist.


![Enable Push Notification in XCode](https://appwrite.io/images/docs/messaging/targets/dark/xcode-enable-pn.png)

![Enable Push Notification in XCode](https://appwrite.io/images/docs/messaging/targets/xcode-enable-pn.png)

1. In your Firebase console, navigate to **Settings** \> **General** \> **Your apps** \> add an **Android** app.

2. Register and download your google-services.json config file.

3. Add google-services.json at the root of your project.

4. Add Google Services class path to your app-level Gradle dependencies block "com.google.gms:google-services:4.4.0".

5. Add Google Services plugin to your app-level Gradle in the plugins block as "com.google.gms.google-services".

6. Add notification handler service to AndroidManifest.xml inside the application tag, alongside other activities. Find an example of this service in the [Send push notification](https://appwrite.io/docs/products/messaging/send-push-notifications#add-targets) journey.


```web-code xml line-numbers
<service android:name="<YOUR_NOTIFICATION_HANDLER_SERVICE>" android:exported="false">
    <intent-filter>
        <action android:name="com.google.firebase.MESSAGING_EVENT" />
    </intent-filter>
</service>

```

1. Head to **Apple Developer Member Center** \> **Program resources** \> **Certificates, Identifiers & Profiles** \> **Keys**. The key needs **Apple Push Notification Service** enabled.

2. Create a new key, note down the key ID and download your key.

3. Add push notification capability to your app by clicking your root-level app in XCode > **Signing & Capabilities** \>  Capabilities > Search for **Push Notifications**.


![Enable Push Notification in XCode](https://appwrite.io/images/docs/messaging/targets/dark/xcode-enable-pn.png)

![Enable Push Notification in XCode](https://appwrite.io/images/docs/messaging/targets/xcode-enable-pn.png)

###### Recommended

- [API reference/Account](https://appwrite.io/docs/references/cloud/client-web/account)
- [API reference/Teams](https://appwrite.io/docs/references/cloud/client-web/teams)
- [API reference/Databases](https://appwrite.io/docs/references/cloud/client-web/databases)
- [API reference/Storage](https://appwrite.io/docs/references/cloud/client-web/storage)

## Appwrite Pro Plan
[Skip to content](https://appwrite.io/docs/advanced/platform/pro#main)

[![appwrite](https://appwrite.io/images/logos/appwrite.svg)![appwrite](https://appwrite.io/images/logos/appwrite-light.svg)](https://appwrite.io/)

[Go to Console](https://cloud.appwrite.io/)

Appwrite Cloud's Pro plan is designed for professional developers or development teams that need to build applications at scale. When applications outgrows Appwrite's Free plan organizations can switch to Pro plan to continue growing its apps. You can learn more about Pro plan on the [pricing page](https://appwrite.io/pricing).

## [Create a Pro plan organization](https://appwrite.io/docs/advanced/platform/pro\#)

Appwrite's plans are applied to an entire organization. Get started with a Pro plan organization by visiting the [pricing page](https://appwrite.io/pricing) and click **Start building** or create a new organization from the Appwrite Console and select **Pro plan**.

### [Switch to Free plan](https://appwrite.io/docs/advanced/platform/pro\#)

Head to the overview of your organization through the profile menu on the top right of your Appwrite Console. Under the **Billing** tab, you can click **Change plan** to update your organization's plan.

## [Resource limits](https://appwrite.io/docs/advanced/platform/pro\#)

Each plan in Appwrite Cloud has a set of resource limits. You can find the details of these resource limits in the in the [pricing page](https://appwrite.io/pricing).

Additional resources are automatically purchased when your orgnization goes over the resource limits to continue scaling until the budget cap is reached. Each resource limit is applied per billing period and resets at the beginning of each billing period.

### [Budget cap](https://appwrite.io/docs/advanced/platform/pro\#)

Appwrite allows organizations to set budget caps when using a Pro plan. Appwrite will automatically scale Pro plan projects as they require more resources. Budget caps limit the amount of automatic scaling and prevent unexpected bills.

Organization budget caps can be set by navigating to the organization's **Billing** tab, under **Budget cap**, toggle and set a budget cap. Appwrite will send emails to warn organization members when near the budget cap.

### [Check resource usage](https://appwrite.io/docs/advanced/platform/pro\#)

You can check your organization's resource usage for the current billing cycle by navigating to your organization, under the **Usage** tab.

### [Reaching resource limits](https://appwrite.io/docs/advanced/platform/pro\#)

Reaching your organization's resource limits will have the following effects until the current billing period ends.

| Component | Consequence |
| --- | --- |
| **Bandwidth** | More bandwidth will be purchased automatically until your organization reaches a budget cap. If the organization uses a Free plan or a budget cap is reached, API access will be denied until your organization's plan is upgraded or your budget cap is increased. |
| Importing projects via migrations disabled, but you can still export your projects. |
| Platform creation disabled. |
| **Users** | Creating new accounts and team invitations disabled. |
| **Compute** | Function executions are disabled. |
| **Realtime** | Realtime subscriptions disabled. |
| **Storage** | File uploads are disabled. Persists across billing periods until the amount of storage used is below the plan limit. |

### [Switching to Free plan and reaching limits](https://appwrite.io/docs/advanced/platform/pro\#)

When an orgnization switches from Pro or Scale plan to Free plan, the organization's projects will be able to take advantage of the existing limits until the end of the current billing period. After the billing period ends, the Free plan limits and consequences will apply.

If an organisation has multiple members after the billing period ends, all admins besides the original creator of the organization will be removed. The following consequences should also apply at the project level if the Free plan per-project resource limits have been exceeded.

| Component | Action |
| --- | --- |
| **Platforms** | If more than 3 platforms have been created, disable them in order of date created (oldest ones first). |
| **Webhooks** | If more than 2 webhooks have been created, disable them in order of date created (oldest ones first). |
| **Teams** | If more than 100 teams have been created, disable them in order of date created (oldest ones first). |
| **Databases** | If more than 1 database has been created, disable them in order of date created (oldest ones first). |
| **Buckets** | If more than 3 buckets have been created, disable them in order of date created (oldest ones first). |
| **Functions** | If more than 5 functions have been created, disable them in order of date created (oldest ones first). |

###### Recommended

- [API reference/Account](https://appwrite.io/docs/references/cloud/client-web/account)
- [API reference/Teams](https://appwrite.io/docs/references/cloud/client-web/teams)
- [API reference/Databases](https://appwrite.io/docs/references/cloud/client-web/databases)
- [API reference/Storage](https://appwrite.io/docs/references/cloud/client-web/storage)

## Appwrite Command Center
[Skip to content](https://appwrite.io/docs/tooling/command-center#main)

[![appwrite](https://appwrite.io/images/logos/appwrite.svg)![appwrite](https://appwrite.io/images/logos/appwrite-light.svg)](https://appwrite.io/)

[Go to Console](https://cloud.appwrite.io/)

The Appwrite **Command Center** is designed to improve the developer experience by enabling straightforward navigation and exploration of features, settings, and sections of the Appwrite Console. The Command Center is enhanced with [AI capabilities](https://appwrite.io/docs/tooling/assistant) and is the home of the Appwrite assistant. It allows you to execute tasks and access features within the Appwrite Console efficiently using keyboard shortcuts and advanced context-aware search.

![Command center](https://appwrite.io/images/docs/command-center/dark/command-center.png)

![Command center](https://appwrite.io/images/docs/command-center/command-center.png)

## [Getting started](https://appwrite.io/docs/tooling/command-center\#getting-started)

You can access the Command Center by pressing ⌘ \+ K on Mac or Ctrl \+ K on Windows and Linux devices or by clicking the search icon in the Console top navigation bar. A modal will appear, presenting a search input and a list of commands relevant to your current Console context.

The Command Center emphasizes keyboard navigation. You can browse through commands using the up and down arrow keys and execute them with the Enter key. The search input lets you quickly filter and find specific commands or entities within the Console. Additionally, some commands have dedicated keyboard shortcuts that can be used for immediate execution without opening the Command Center.

## [Navigation](https://appwrite.io/docs/tooling/command-center\#navigation)

The Command Center includes a variety of navigation commands that are also useful for exploring the different options and features the Console offers. You can quickly access different sections like Databases, Auth, Security, and Functions screens using the Command Center. You will also find context-sensitive commands on each page that adapt based on your current location within the Console, providing relevant options and shortcuts.

## [Resource creation](https://appwrite.io/docs/tooling/command-center\#resource-creation)

The Command Center offers context-sensitive commands for creating entities like buckets, functions, database attributes, etc. Specific commands trigger the opening of new panels, facilitating deeper interaction and task completion directly from the Command Center.

## [AI Assistant](https://appwrite.io/docs/tooling/command-center\#ai-assistant)

An integral part of the Command Center is the [Appwrite AI Assistant](https://appwrite.io/docs/tooling/assistant), trained on Appwrite's extensive documentation, content, and knowledge base. The Assistant can answer Appwrite-related queries with detailed explanations, step-by-step instructions, and relevant code snippets, enhancing your ability to utilize Appwrite quickly and efficiently.

## [Keyboard optimization](https://appwrite.io/docs/tooling/command-center\#keyboard-optimization)

Many developers favor keyboard interactions for efficiency and speed. The Command Center was designed with keyboard optimization in mind. It caters to the needs of keyboard-centric developers, enabling various tasks and efficient navigation across the Console without relying on a mouse or trackpad.

You can use your up and down arrow keys to navigate between different commands and your Enter and Escape keys to enter and exit specific context screens. The Command Center also includes many built-in shortcuts that can be used from any console screen and allow greater productivity.

###### Recommended

- [API reference/Account](https://appwrite.io/docs/references/cloud/client-web/account)
- [API reference/Teams](https://appwrite.io/docs/references/cloud/client-web/teams)
- [API reference/Databases](https://appwrite.io/docs/references/cloud/client-web/databases)
- [API reference/Storage](https://appwrite.io/docs/references/cloud/client-web/storage)

## Appwrite Compute Options
[Skip to content](https://appwrite.io/docs/advanced/platform/compute#main)

[![appwrite](https://appwrite.io/images/logos/appwrite.svg)![appwrite](https://appwrite.io/images/logos/appwrite-light.svg)](https://appwrite.io/)

[Go to Console](https://cloud.appwrite.io/)

##### Note

Pricing changes will take effect on March 1st, 2025. Learn more on our [blog announcement](https://appwrite.io/blog/post/introducing-new-compute-capabilities-appwrite-functions) for more information.

Appwrite's paid plans give you the ability to change your function's allocated CPU Cores and Memory, enabling functions and builds to perform more computionally demanding actions quicker.

These options enable greater performance and flexibility, allowing developers to optimize their functions based on specific requirements. For instance, resource-intensive tasks such as real-time data processing or complex computational operations can now be executed more efficiently. Additionally, enhanced memory configurations support larger datasets and more demanding applications, broadening the scope of what can be achieved with Appwrite Functions.

## [Specifications](https://appwrite.io/docs/advanced/platform/compute\#)

Appwrite Cloud has the following specifications available:

| Memory | CPU cores | Hourly usage |
| --- | --- | --- |
| 512MB | 0.5 | 0.25 |
| 512MB | 1 | 0.5 |
| 1GB | 1 | 1 |
| 2GB | 2 | 4 |
| 4GB | 2 | 8 |
| 4GB | 4 | 16 |

##### Note

Only customers on either Pro or Scale are able to change their specification from the default 512MB & 0.5 CPU option. For custom compute options please contact our [sales team](https://appwrite.io/contact-us/enterprise).

## [GB-Hours](https://appwrite.io/docs/advanced/platform/compute\#)

GB-hours is a metric used to quantify the consumption of compute resources by combining both memory usage and the duration of that usage. Specifically, it represents the number of gigabytes (GB) of memory utilized multiplied by the number of hours those resources are active. This metric provides a comprehensive view of resource usage over time, allowing for accurate tracking, optimization, and billing based on actual compute needs.

How It Works:

- Memory allocation: Determine the amount of memory (in GB) that your application or function requires while running.

- Duration: Measure the total time (in hours) that the allocated memory is in use.

- Calculation: Multiply the memory allocated by the duration to obtain the total GB-hours consumed.


**Example:**

Assuming you have a function that requires 4 GB of memory to operate. If this function runs continuously for 2 hours, the compute resource usage would be:

**4GB \* 2 hours = 8 GB-hours**

This means the function has consumed 8 GB-hours of compute resources.

### [Pricing](https://appwrite.io/docs/advanced/platform/compute\#)

- Free plan includes up to 100 GB-hours of execution and build time per month.

- Pro and Scale plans include up to 1,000GB of execution and build time per month. Additional usage is available at a rate of $0.09 per GB-hour.


Once the monthly GB-hours limit is reached, additional usage will automatically apply add-ons to your Pro or Scale account. It is recommended to set budget alerts and a budget cap to prevent unexpected payments.

###### Recommended

- [API reference/Account](https://appwrite.io/docs/references/cloud/client-web/account)
- [API reference/Teams](https://appwrite.io/docs/references/cloud/client-web/teams)
- [API reference/Databases](https://appwrite.io/docs/references/cloud/client-web/databases)
- [API reference/Storage](https://appwrite.io/docs/references/cloud/client-web/storage)

## Appwrite Storage Permissions
[Skip to content](https://appwrite.io/docs/products/storage/permissions#main)

[![appwrite](https://appwrite.io/images/logos/appwrite.svg)![appwrite](https://appwrite.io/images/logos/appwrite-light.svg)](https://appwrite.io/)

[Go to Console](https://cloud.appwrite.io/)

Permissions define who can access files within a bucket. By default **no permissions** are granted to any users, so no user can access any files. Permissions exist at two levels, bucket level and file level permissions.

In Appwrite, permissions are **granted**, meaning a user has no access by default and receive access when granted. A user with access granted at either bucket level or file level will be able to access a file. Users **don't need access at both levels** to access files.

## [Bucket level](https://appwrite.io/docs/products/storage/permissions\#)

Bucket level permissions apply to every file in the bucket. If a user has read, create, update, or delete permissions at the bucket level, the user can access **all files** inside the bucket.

Configure bucket level permissions by navigating to **Your bucket** \> **Settings** \> **Permissions**.

[Learn more about permissions and roles](https://appwrite.io/docs/advanced/platform/permissions)

## [File level](https://appwrite.io/docs/products/storage/permissions\#)

File level permissions grant access to individual files. If a user has read, create, update, or delete permissions at the file level, the user can access the **individual file**.

File level permissions are only applied if File Security is enabled in the settings of your bucket. Enable file level permissions by navigating to **Your bucket** \> **Settings** \> **File security**.

File level permissions are configured in individual [files](https://appwrite.io/docs/products/storage/permissions#file-level).

[Learn more about permissions and roles](https://appwrite.io/docs/advanced/platform/permissions)

###### Recommended

- [API reference/Account](https://appwrite.io/docs/references/cloud/client-web/account)
- [API reference/Teams](https://appwrite.io/docs/references/cloud/client-web/teams)
- [API reference/Databases](https://appwrite.io/docs/references/cloud/client-web/databases)
- [API reference/Storage](https://appwrite.io/docs/references/cloud/client-web/storage)

## Messaging Providers Overview
[Skip to content](https://appwrite.io/docs/products/messaging/providers#main)

[![appwrite](https://appwrite.io/images/logos/appwrite.svg)![appwrite](https://appwrite.io/images/logos/appwrite-light.svg)](https://appwrite.io/)

[Go to Console](https://cloud.appwrite.io/)

Appwrite allows you to connect to a variety of third-party messaging providers to deliver push notifications, emails, and SMS messages to your users. Before you can deliver messages, you must connect to a messaging provider.

## [Push notifications](https://appwrite.io/docs/products/messaging/providers\#)

Send push notifications, which are little notification messages that appear on a user's browser or device to alert them of events or updates. Configure one of the following providers to send push notifications.

- [Send push notifications to apps on Apple devices through Apple Push Notification service (APNs).](https://appwrite.io/docs/products/messaging/apns)
- [Send push notifications to Android, Apple, or Web app with Firebase Cloud Messaging (FCM).](https://appwrite.io/docs/products/messaging/fcm)

## [Email](https://appwrite.io/docs/products/messaging/providers\#)

Deliver customized emails to users to send reminders, updates, promotions, and custom authentication logic.

- [Deliver custom email messages to users using Mailgun.](https://appwrite.io/docs/products/messaging/mailgun)
- [Deliver custom email messages to users using SendGrid.](https://appwrite.io/docs/products/messaging/sendgrid)
- [Deliver custom email messages to users using standard SMTP settings.](https://appwrite.io/docs/products/messaging/smtp)

## [SMS](https://appwrite.io/docs/products/messaging/providers\#)

Send customized SMS messages to users by phone to send reminders, updates, promotions, and one-time passwords.

- [Deliver custom SMS messages to users using Twilio.](https://appwrite.io/docs/products/messaging/twilio)
- [Deliver custom SMS messages to users using MSG91.](https://appwrite.io/docs/products/messaging/msg91)
- [Deliver custom SMS messages to users using Telesign.](https://appwrite.io/docs/products/messaging/telesign)
- [Deliver custom SMS messages to users using Textmagic.](https://appwrite.io/docs/products/messaging/textmagic)
- [Deliver custom SMS messages to users using Vonage.](https://appwrite.io/docs/products/messaging/vonage)

###### Recommended

- [API reference/Account](https://appwrite.io/docs/references/cloud/client-web/account)
- [API reference/Teams](https://appwrite.io/docs/references/cloud/client-web/teams)
- [API reference/Databases](https://appwrite.io/docs/references/cloud/client-web/databases)
- [API reference/Storage](https://appwrite.io/docs/references/cloud/client-web/storage)

## Appwrite Database Permissions
[Skip to content](https://appwrite.io/docs/products/databases/permissions#main)

[![appwrite](https://appwrite.io/images/logos/appwrite.svg)![appwrite](https://appwrite.io/images/logos/appwrite-light.svg)](https://appwrite.io/)

[Go to Console](https://cloud.appwrite.io/)

Permissions define who can access documents in a collection. By default **no permissions** are granted to any users, so no user can access any documents. Permissions exist at two levels, collection level and document level permissions.

In Appwrite, permissions are **granted**, meaning a user has no access by default and receive access when granted. A user with access granted at either collection level or document level will be able to access a document. Users **don't need access at both levels** to access documents.

## [Collection level](https://appwrite.io/docs/products/databases/permissions\#collection-level)

Collection level permissions apply to every document in the collection. If a user has read, create, update, or delete permissions at the collection level, the user can access **all documents** inside the collection.

Configure collection level permissions by navigating to **Your collection** \> **Settings** \> **Permissions**.

[Learn more about permissions and roles](https://appwrite.io/docs/advanced/platform/permissions)

## [Document level](https://appwrite.io/docs/products/databases/permissions\#document-level)

Document level permissions grant access to individual documents. If a user has read, create, update, or delete permissions at the document level, the user can access the **individual document**.

Document level permissions are only applied if Document Security is enabled in the settings of your collection. Enable document level permissions by navigating to **Your collection** \> **Settings** \> **Document security**.

Document level permissions are configured in individual documents.

[Learn more about permissions and roles](https://appwrite.io/docs/advanced/platform/permissions)

## [Common use cases](https://appwrite.io/docs/products/databases/permissions\#common-use-cases)

For examples of how to implement common permission patterns, including creating private documents that are only accessible to their creators, see the [permissions examples](https://appwrite.io/docs/advanced/platform/permissions#examples) in our platform documentation.

###### Recommended

- [API reference/Account](https://appwrite.io/docs/references/cloud/client-web/account)
- [API reference/Teams](https://appwrite.io/docs/references/cloud/client-web/teams)
- [API reference/Databases](https://appwrite.io/docs/references/cloud/client-web/databases)
- [API reference/Storage](https://appwrite.io/docs/references/cloud/client-web/storage)

## Firebase to Appwrite Migration
[Skip to content](https://appwrite.io/docs/advanced/migrations/firebase#main)

[![appwrite](https://appwrite.io/images/logos/appwrite.svg)![appwrite](https://appwrite.io/images/logos/appwrite-light.svg)](https://appwrite.io/)

[Go to Console](https://cloud.appwrite.io/)

Appwrite migrations help you quickly migrate your data from Firebase or other [sources](https://appwrite.io/docs/advanced/migrations#sources) to Appwrite. You can follow the instructions on the Appwrite Console migration wizard or use this guide to perform your data migration. While migrations are a great way to move your data from other services to Appwrite and get started quickly, they're not perfect. Make sure to understand the different [limitations](https://appwrite.io/docs/advanced/migrations/firebase#limitations) before completing your migration.

##### Charges

When you migrate data from Firebase to Appwrite Cloud, the resource usage during the migration will not count towards your Appwrite Cloud usage charges. However, Firebase, may have data transfer charges.

To begin migrating to Appwrite, follow these steps.

1. Open your Firebase console.

2. Access your **Project Settings** by clicking the gear icon.

3. Click on **Service Accounts**, then click on the **Manage service account permissions** link, which will redirect you to the Google Cloud Console.

4. Click on **Create Service Account**, provide a name, ID, and description, and click **Continue**.

5. Grant the service account the following roles


| Role | Description |
| --- | --- |
| Firebase Viewer | Read access to your entire Firebase project, including Database and Storage. |
| Identity Toolkit Viewer | Read access to your users, including their hash config. |

1. Find the service account you just created.

2. Click the triple-dot icon to the right to see more options and click the **Manage keys** botton.

3. Click **Add Key** and select **Create new key**. Choose **JSON** as the key type and click **Create**. This will download a JSON file to your computer.


1. Create a new project and navigate to the **Migrations** tab in **Project Settings**.

2. Click on the **Create Migration** button and select **Firebase** as your source.

3. Paste the contents of your JSON file into the textbox and follow the migration wizard to select which resources you need to migrate. Finally click **Start migration** to begin the migration process.


1. In your Appwrite Console, navigate to **Overview** \> **Integrations** \> **Platforms**, add the platforms for your Web, Flutter, Android, and iOS apps. Appwrite will reject requests from unknown web, Flutter, and mobile apps to protect from malicious attacks. You app **must be added as a platform** for Appwrite to accept requests.

2. Remember to [add appropriate permissions](https://appwrite.io/docs/advanced/platform/permissions) to the migrated resources to protect user data and privacy.

3. Migrate functions manually, by [pick a runtime](https://appwrite.io/docs/products/functions/runtimes) and [learn to develop Appwrite Functions](https://appwrite.io/docs/products/functions/develop).

4. Explore Appwrite's unique features by exploring the rest of the [Appwrite Documentation](https://appwrite.io/docs).


## [Limitations](https://appwrite.io/docs/advanced/migrations/firebase\#)

Not all vendors make their APIs publicly accessible or easy to use for extracting and fully owning your data. Furthermore, due to varying design philosophies, certain resources cannot be migrated on a one-to-one basis. Below, you'll find a list of some known limitations when migrating data from Firebase to Appwrite. It's advisable to review this list before initiating your migration or deploying your product in a production environment.

- Appwrite Migrations only supports Firestore as a database source; Realtime Database is currently not supported.

- At the moment, only top-level document migration is supported. Nested documents will not be migrated automatically.

- OAuth users will not be migrated because the sessions are managed by the third-party OAuth provider. Users will need to re-authenticate with your OAuth provider after the migration is complete.

- Functions are not automatically migrated because of syntax and runtime differences.


###### Recommended

- [API reference/Account](https://appwrite.io/docs/references/cloud/client-web/account)
- [API reference/Teams](https://appwrite.io/docs/references/cloud/client-web/teams)
- [API reference/Databases](https://appwrite.io/docs/references/cloud/client-web/databases)
- [API reference/Storage](https://appwrite.io/docs/references/cloud/client-web/storage)

## Appwrite Web Integration
[Skip to content](https://appwrite.io/docs/quick-starts/web#main)

[![appwrite](https://appwrite.io/images/logos/appwrite.svg)![appwrite](https://appwrite.io/images/logos/appwrite-light.svg)](https://appwrite.io/)

[Go to Console](https://cloud.appwrite.io/)

Learn how to add Appwrite to your web apps.

Head to the [Appwrite Console](https://cloud.appwrite.io/console).

![Create project screen](https://appwrite.io/images/docs/quick-starts/dark/create-project.png)

![Create project screen](https://appwrite.io/images/docs/quick-starts/create-project.png)

If this is your first time using Appwrite, create an account and create your first project.

Then, under **Add a platform**, add a **Web app**. The **Hostname** should be localhost or the domain on which you're hosting your web app.

![Add a platform](https://appwrite.io/images/docs/quick-starts/dark/add-platform.png)

![Add a platform](https://appwrite.io/images/docs/quick-starts/add-platform.png)

You can skip optional steps.

You can install the Appwrite Web SDK using a package manager.

```web-code sh line-numbers
npm install appwrite@18.1.1

```

You can also add the Appwrite Web SDK using CDN by adding a script tag to your HTML file. The SDK will be available globally through the Appwrite namespace.

```web-code html line-numbers
<script src="https://cdn.jsdelivr.net/npm/appwrite@17.0.0"></script>

```

If you installed via npm, you can import Client and Account from the Appwrite SDK.

```web-code client-web line-numbers
import { Client, Account } from 'appwrite';

export const client = new Client();

client
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1')
    .setProject('<PROJECT_ID>'); // Replace with your project ID

export const account = new Account(client);
export { ID } from 'appwrite';

```

If you're using CDN, the library loads directly in your browser as a global object, so you access it through Appwrite instead of imports.

```web-code js line-numbers
const client = new Appwrite.Client()

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('<PROJECT_ID>') // Replace with your project ID

export const account = new Appwrite.Account(client)
export const databases = new Appwrite.Databases(client)

```

If you prefer TypeScript, you can import TypeScript models from the Appwrite SDK.

```web-code ts line-numbers
// appwrite.ts

import { Client, Databases, Account } from "appwrite";
// Import type models for Appwrite
import { type Models } from 'appwrite';

const client: Client = new Client();

client
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1')
    .setProject('<PROJECT_ID>'); // Replace with your project ID

export const account: Account = new Account(client);
export const database: Databases = new Databases(client);

// You then use the imported type definitions like this
const authUser: Models.Session = await account.createEmailPasswordSession(email, password);

```

Sometimes you'll need to extend TypeScript models with your own type definitions.

For example, when you fetch a list of documents from a collection, you can define the expected structure of the documents like this.

```web-code ts line-numbers
interface Idea extends Models.Document {
    title: string;
    description: string;
    userId: string;
}

```

When you fetch documents, you can use this new Idea interface like this.

```web-code ts line-numbers
const response = await database.listDocuments(
    ideasDatabaseId,
    ideasCollectionId,
    [Query.orderDesc("$createdAt"), Query.limit(queryLimit)]
);
const ideas = response.documents as Idea[];

```

The Appwrite SDK works with your favorite Web frameworks.

Learn to use Appwrite by adding authentication to a simple web app.

- [Get started with Appwrite and Next.js](https://appwrite.io/docs/quick-starts/nextjs)
- [Get started with Appwrite and React](https://appwrite.io/docs/quick-starts/react)
- [Get started with Appwrite and Vue.js](https://appwrite.io/docs/quick-starts/vue)
- [Get started with Appwrite and Nuxt](https://appwrite.io/docs/quick-starts/nuxt)
- [Get started with Appwrite and SvelteKit](https://appwrite.io/docs/quick-starts/sveltekit)
- [Get started with Appwrite and Angular](https://appwrite.io/docs/quick-starts/angular)

Learn to use Appwrite by building an idea tracker app.

- [Get started with Appwrite and React](https://appwrite.io/docs/tutorials/react)
- [Get started with Appwrite and Vue.js](https://appwrite.io/docs/tutorials/vue)
- [Get started with Appwrite and Nuxt](https://appwrite.io/docs/tutorials/nuxt)
- [Get started with Appwrite and SvelteKit](https://appwrite.io/docs/tutorials/sveltekit)

###### Recommended

- [API reference/Account](https://appwrite.io/docs/references/cloud/client-web/account)
- [API reference/Teams](https://appwrite.io/docs/references/cloud/client-web/teams)
- [API reference/Databases](https://appwrite.io/docs/references/cloud/client-web/databases)
- [API reference/Storage](https://appwrite.io/docs/references/cloud/client-web/storage)

## Appwrite Database Collections
[Skip to content](https://appwrite.io/docs/products/databases/collections#main)

[![appwrite](https://appwrite.io/images/logos/appwrite.svg)![appwrite](https://appwrite.io/images/logos/appwrite-light.svg)](https://appwrite.io/)

[Go to Console](https://cloud.appwrite.io/)

Appwrite uses collections as containers of documents. Each collection contains many documents identical in structure. The terms collections and documents are used because the Appwrite JSON REST API resembles the API of a traditional NoSQL database, making it intuitive and user-friendly, even though Appwrite uses SQL under the hood.

That said, Appwrite is designed to support both SQL and NoSQL database adapters like MariaDB, MySQL, or MongoDB in future versions.

## [Create collection](https://appwrite.io/docs/products/databases/collections\#create-collection)

You can create collections using the Appwrite Console, a [Server SDK](https://appwrite.io/docs/sdks#server), or using the [CLI](https://appwrite.io/docs/tooling/command-line/installation).

ConsoleServer SDKCLI

ConsoleServer SDK
More

You can create a collection by heading to the **Databases** page, navigate to a [database](https://appwrite.io/docs/products/databases/databases), and click **Create collection**.

You can also create collections programmatically using a [Server SDK](https://appwrite.io/docs/sdks#server). Appwrite [Server SDKs](https://appwrite.io/docs/sdks#server) require an [API key](https://appwrite.io/docs/advanced/platform/api-keys).

```web-code server-nodejs line-numbers
const sdk = require('node-appwrite');

// Init SDK
const client = new sdk.Client();

const databases = new sdk.Databases(client);

client
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<PROJECT_ID>') // Your project ID
    .setKey('919c2d18fb5d4...a2ae413da83346ad2') // Your secret API key
;

const promise = databases.createCollection('<DATABASE_ID>', '[COLLECTION_ID]', '[NAME]');

promise.then(function (response) {
    console.log(response);
}, function (error) {
    console.log(error);
});

```

You can also configure **permissions** in the createCollection method, learn more about the createCollection in the [API references](https://appwrite.io/docs/references).

##### Before proceeding

Ensure you [**install**](https://appwrite.io/docs/tooling/command-line/installation#getting-started) the CLI, [**log in**](https://appwrite.io/docs/tooling/command-line/installation#login) to your Appwrite account, and [**initialize**](https://appwrite.io/docs/tooling/command-line/installation#initialization) your Appwrite project.

To create your collection using the CLI, first use the appwrite init collections command to initialize your collection.

```web-code sh line-numbers
appwrite init collections

```

Then push your collection using the appwrite push collections command.

```web-code sh line-numbers
appwrite push collections

```

This will create your collection in the Console with all of your appwrite.json configurations.

[Learn more about the CLI collections commands](https://appwrite.io/docs/tooling/command-line/collections#commands)

## [Permissions](https://appwrite.io/docs/products/databases/collections\#permissions)

Appwrite uses permissions to control data access. For security, only users that are granted permissions can access a resource. This helps prevent accidental data leaks by forcing you to make more concious decisions around permissions.

By default, Appwrite doesn't grant permissions to any users when a new collection is created. This means users can't create new documents or read, update, and delete existing documents.

[Learn about configuring permissions](https://appwrite.io/docs/products/databases/permissions).

## [Attributes](https://appwrite.io/docs/products/databases/collections\#attributes)

All documents in a collection follow the same structure. Attributes are used to define the structure of your documents and help the Appwrite's API validate your users' input. Add your first attribute by clicking the **Add attribute** button.

You can choose between the following types.

| Attribute | Description |
| --- | --- |
| string | String attribute. |
| integer | Integer attribute. |
| float | Float attribute. |
| boolean | Boolean attribute. |
| datetime | Datetime attribute formatted as an ISO 8601 string. |
| enum | Enum attribute. |
| ip | IP address attribute for IPv4 and IPv6. |
| email | Email address attribute. |
| url | URL attribute. |
| relationship | Relationship attribute relates one collection to another. [Learn more about relationships.](https://appwrite.io/docs/products/databases/relationships) |

If an attribute must be populated in all documents, set it as required. If not, you may optionally set a default value. Additionally, decide if the attribute should be a single value or an array of values.

If needed, you can change an attribute's key, default value, size (for strings), and whether it is required or not after creation.

You can increase a string attribute's size without any restrictions. When decreasing size, you must ensure that your existing data is less than or equal to the new size, or the operation will fail.

## [Indexes](https://appwrite.io/docs/products/databases/collections\#indexes)

Databases use indexes to quickly locate data without having to search through every document for matches. To ensure the best performance, Appwrite recommends an index for every attribute queried. If you plan to query multiple attributes in a single query, creating an index with **all** queried attributes will yield optimal performance.

The following indexes are currently supported:

| Type | Description |
| --- | --- |
| key | Plain Index to allow queries. |
| unique | Unique Index to disallow duplicates. |
| fulltext | For searching within string attributes. Required for the [search query method](https://appwrite.io/docs/products/databases/queries#query-class). |

You can create an index by navigating to your collection's **Indexes** tab or by using your favorite [Server SDK](https://appwrite.io/docs/sdks#server).

###### Recommended

- [API reference/Account](https://appwrite.io/docs/references/cloud/client-web/account)
- [API reference/Teams](https://appwrite.io/docs/references/cloud/client-web/teams)
- [API reference/Databases](https://appwrite.io/docs/references/cloud/client-web/databases)
- [API reference/Storage](https://appwrite.io/docs/references/cloud/client-web/storage)

## Mailgun Email Integration
[Skip to content](https://appwrite.io/docs/products/messaging/mailgun#main)

[![appwrite](https://appwrite.io/images/logos/appwrite.svg)![appwrite](https://appwrite.io/images/logos/appwrite-light.svg)](https://appwrite.io/)

[Go to Console](https://cloud.appwrite.io/)

Mailgun lets you send customized email messages to your users. These emails can be sent immediately or scheduled. You can send emails for purposes like reminders, promotions, announcements, and even custom authentication flows.

To add Mailgun as a provider, navigate to **Messaging** \> **Providers** \> **Add provider** \> **Email**.

![Add a SMTP provider](https://appwrite.io/images/docs/messaging/providers/mailgun/dark/add-mailgun.png)

![Add a SMTP provider](https://appwrite.io/images/docs/messaging/providers/mailgun/add-mailgun.png)

Give your provider a name > choose **Mailgun** \> click **Save and continue**. The provider will be saved to your project, but not enabled until you complete its configuration.

In the **Configure** step, you will need to provide details from your Mailgun dashboard to connect your Appwrite project.

![Configure SMTP provider](https://appwrite.io/images/docs/messaging/providers/mailgun/dark/configure-mailgun.png)

![Configure SMTP provider](https://appwrite.io/images/docs/messaging/providers/mailgun/configure-mailgun.png)

You will need to provide the following information from your **Mailgun dashboard**.

| Field name |  |
| --- | --- |
| API key | Head to Profile -> API Security -> Add new key. |
| Domain | Head to Sending -> Domains -> Add new domain. Follow [Mailgun's instructions](https://help.mailgun.com/hc/en-us/articles/360026833053-Domain-Verification-Walkthrough) to verify the domain name. |
| EU region | Enable the EU region setting if your domain is within the European Union. |
| Sender email | The provider sends emails from this sender email. The sender email needs to be an email under the configured domain. |
| Sender name | The sender name that appears in the emails sent from this provider. |
| Reply-to email | The reply-to email that appears in the emails sent from this provider. The reply-to email needs to be an email under the configured domain. |
| Reply-to name | The reply-to name that appears in the emails sent from this provider. |

After adding the following details, click **Save and continue** to enable the provider.

Before sending your first message, make sure you've configured [a topic](https://appwrite.io/docs/products/messaging/topics) and [a target](https://appwrite.io/docs/products/messaging/targets) to send messages to.

ConsoleServer SDK

ConsoleServer SDK

To send a test message, navigate to **Messaging** \> **Messages** \> **Create message** \> **Email**.

![Create email message](https://appwrite.io/images/docs/messaging/messages/dark/create-email-message.png)

![Create email message](https://appwrite.io/images/docs/messaging/messages/create-email-message.png)

Add your message and in the targets step, select one of your test targets. Set the schedule to **Now** and click **Send**.

Verify that you can receive the message in your inbox. If not, check for logs in the Appwrite Console or in your provider's logs.

To send a message programmatically, use an [Appwrite Server SDK](https://appwrite.io/docs/sdks#server).

```web-code server-nodejs line-numbers
const sdk = require('node-appwrite');

// Init SDK
const client = new sdk.Client();

const messaging = new sdk.Messaging(client);

client
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<PROJECT_ID>') // Your project ID
    .setKey('<API_KEY>') // Your secret API key
;

const message = await messaging.createEmail('<MESSAGE_ID>', '<SUBJECT>', '<CONTENT>');

```

You can follow the [Send email messages](https://appwrite.io/docs/products/messaging/send-push-notifications) journey to send your first push notification and test your provider.

ConsoleServer SDK

ConsoleServer SDK

You can update or delete a provider in the Appwrite Console.

Navigate to **Messaging** \> **Providers** \> click your provider. In the settings, you can update a provider's configuration or delete the provider.

To update or delete providers programmatically, use an [Appwrite Server SDK](https://appwrite.io/docs/sdks#server).

```web-code server-nodejs line-numbers
const sdk = require('node-appwrite');

// Init SDK
const client = new sdk.Client();

const messaging = new sdk.Messaging(client);

client
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<PROJECT_ID>') // Your project ID
    .setKey('<API_KEY>') // Your secret API key
;

// update provider
messaging.updateSendgridProvider(
    '<PROVIDER_ID>',
    '<PROVIDER_NAME>',
    '<API_KEY>',
    '<DOMAIN>',
    '<IS_EU_REGION?>',
    '<SENDER_NAME>',
    '<SENDER_EMAIL>',
    '<REPLY_TO_NAME>',
    '<REPLY_TO_EMAIL>',
    '<ENABLED?>',
).then(function (response) {
    console.log(response);
}, function (error) {
    console.log(error);
});

// delete provider
messaging.deleteProvider('<PROVIDER_ID>')
.then(function (response) {
    console.log(response);
}, function (error) {
    console.log(error);
});

```

###### Recommended

- [API reference/Account](https://appwrite.io/docs/references/cloud/client-web/account)
- [API reference/Teams](https://appwrite.io/docs/references/cloud/client-web/teams)
- [API reference/Databases](https://appwrite.io/docs/references/cloud/client-web/databases)
- [API reference/Storage](https://appwrite.io/docs/references/cloud/client-web/storage)

## Appwrite Site Logs
[Skip to content](https://appwrite.io/docs/products/sites/logs#main)

[![appwrite](https://appwrite.io/images/logos/appwrite.svg)![appwrite](https://appwrite.io/images/logos/appwrite-light.svg)](https://appwrite.io/)

[Go to Console](https://cloud.appwrite.io/)

Each time a URL path on an Appwrite Site is requested, a log is created. Each log has a unique ID. You can find site logs logged in the **Logs** tab.

## [Logs table](https://appwrite.io/docs/products/sites/logs\#logs-table)

In your site's **Logs** tab, you will see a table of your recent logs. The following information is shown in this table:

| Column | Description |
| --- | --- |
| Log ID | Unique identifier for each log |
| Status code | The HTTP status of the request |
| Created | Timestamp of when the log was created |
| Method | The HTTP method used to create the request |
| Path | The URL path the request was made to |
| Duration | The time taken for the request |

## [Log details](https://appwrite.io/docs/products/sites/logs\#log-details)

When you click on a log, you will be shown a set of log details.

![Log details](https://appwrite.io/images/docs/sites/dark/log-details.png)

![Log details](https://appwrite.io/images/docs/sites/log-details.png)

You can find both request and response information, including parameters and headers.

##### Response logs for SSR apps

If your app uses **SSR hosting** on Appwrite Sites, you can also observe console.log and console.error outputs in the response logs.

## [Disable logs](https://appwrite.io/docs/products/sites/logs\#disable-logs)

You can optionally disable logging for your site, which will exclude console.log and console.error outputs from the response logs and make site responses slightly faster. Here are the steps to disable logs:

1. Navigate to your site on Appwrite Console.

2. Under the **Settings** tab, find the **Logging** section.

3. Disable logs and click on the **Update** button.


![Logging settings](https://appwrite.io/images/docs/sites/dark/logging-settings.png)

![Logging settings](https://appwrite.io/images/docs/sites/logging-settings.png)

## [Log retention](https://appwrite.io/docs/products/sites/logs\#log-retention)

Logs are not retained forever in order to be compliant with GDPR and other data privacy standards. Free plan organizations will retain logs for 24 hours, Pro plan organizations will retain logs for 7 days.

If you need longer log retention, you can log to an Appwrite collection. Remember to configure proper permissions and implement Appwrite Functions or other scheduled tasks to expire and clean up logs.

###### Recommended

- [API reference/Account](https://appwrite.io/docs/references/cloud/client-web/account)
- [API reference/Teams](https://appwrite.io/docs/references/cloud/client-web/teams)
- [API reference/Databases](https://appwrite.io/docs/references/cloud/client-web/databases)
- [API reference/Storage](https://appwrite.io/docs/references/cloud/client-web/storage)

## Deno Quick Start
[Skip to content](https://appwrite.io/docs/quick-starts/deno#main)

[![appwrite](https://appwrite.io/images/logos/appwrite.svg)![appwrite](https://appwrite.io/images/logos/appwrite-light.svg)](https://appwrite.io/)

[Go to Console](https://cloud.appwrite.io/)

Learn how to setup your first Deno project powered by Appwrite.

Head to the [Appwrite Console](https://cloud.appwrite.io/console).

If this is your first time using Appwrite, create an account and create your first project.

![Create project screen](https://appwrite.io/images/docs/quick-starts/dark/create-project.png)

![Create project screen](https://appwrite.io/images/docs/quick-starts/create-project.png)

Then, under **Integrate with your server**, add an **API Key** with the following scopes.

![Create project screen](https://appwrite.io/images/docs/quick-starts/dark/integrate-server.png)

![Create project screen](https://appwrite.io/images/docs/quick-starts/integrate-server.png)

| Category | Required scopes | Purpose |
| --- | --- | --- |
| Database | databases.write | Allows API key to create, update, and delete [databases](https://appwrite.io/docs/products/databases/databases). |
|  | collections.write | Allows API key to create, update, and delete [collections](https://appwrite.io/docs/products/databases/collections). |
|  | attributes.write | Allows API key to create, update, and delete [attributes](https://appwrite.io/docs/products/databases/collections#attributes). |
|  | documents.read | Allows API key to read [documents](https://appwrite.io/docs/products/databases/documents). |
|  | documents.write | Allows API key to create, update, and delete [documents](https://appwrite.io/docs/products/databases/documents). |

Other scopes are optional.

Create a Deno CLI application.

```web-code sh line-numbers
mkdir my-app
cd my-app
echo "console.log('Hello, Deno!');" > mod.ts

```

Install the Deno Appwrite SDK by importing it deno.land/x at the top of your file.

```web-code sh line-numbers
// import all as sdk
import * as sdk from "https://deno.land/x/appwrite@15.0.0/mod.ts";

// import only what you need
import { Client, ... other imports } from "https://deno.land/x/appwrite/mod.ts";

```

Find your project ID in the **Settings** page. Also, click on the **View API Keys** button to find the API key that was created earlier.

![Project settings screen](https://appwrite.io/images/docs/quick-starts/dark/project-id.png)

![Project settings screen](https://appwrite.io/images/docs/quick-starts/project-id.png)

Open mod.ts in your IDE and initialize the Appwrite Client. Replace <PROJECT\_ID> with your project ID and <YOUR\_API\_KEY> with your API key.

```web-code ts line-numbers
import { Client, ID, Databases, Models } from "https://deno.land/x/appwrite/mod.ts";

const client: Client = new Client();

client
    .setEndpoint("https://<REGION>.cloud.appwrite.io/v1")
    .setProject("<PROJECT_ID>")
    .setKey("<YOUR_API_KEY>");

```

Once the Appwrite Client is initialized, create a function to configure a todo collection.

```web-code ts line-numbers
const databases: Databases = new Databases(client);

var todoDatabase: Models.Database;
var todoCollection: Models.Collection;

interface Todo {
    title: string;
    description: string;
    isComplete?: boolean;
}

async function prepareDatabase(): Promise<void> {
    todoDatabase = await databases.create(
        ID.unique(),
        'TodosDB'
    );

    todoCollection = await databases.createCollection(
        todoDatabase.$id,
        ID.unique(),
        'Todos'
    );

    await databases.createStringAttribute(
        todoDatabase.$id,
        todoCollection.$id,
        'title',
        255,
        true
    );

    await databases.createStringAttribute(
        todoDatabase.$id,
        todoCollection.$id,
        'description',
        255, false,
        'This is a test description'
    );
    await databases.createBooleanAttribute(
        todoDatabase.$id,
        todoCollection.$id,
        'isComplete',
        true
    );
}

```

Create a function to add some mock data into your new collection.

```web-code ts line-numbers
async function seedDatabase(): Promise<void> {
    const testTodo1: Todo = {
        title: 'Buy apples',
        description: 'At least 2KGs',
        isComplete: true
    };

    const testTodo2: Todo = {
        title: 'Wash the apples',
        isComplete: true
    };

    const testTodo3: Todo = {
        title: 'Cut the apples',
        description: 'Don\'t forget to pack them in a box',
        isComplete: false
    };

    await databases.createDocument(
        todoDatabase.$id,
        todoCollection.$id,
        ID.unique(),
        testTodo1
    );
    await databases.createDocument(
        todoDatabase.$id,
        todoCollection.$id,
        ID.unique(),
        testTodo2
    );
    await databases.createDocument(
        todoDatabase.$id,
        todoCollection.$id,
        ID.unique(),
        testTodo3
    );
}

```

Create a function to retrieve the mock todo data and a function to execute the requests in order. Run the functions to by calling runAllTasks();.

```web-code ts line-numbers
async function getTodos(): Promise<void> {
    const todos = await databases.listDocuments(
        todoDatabase.$id,
        todoCollection.$id
    );

    todos.documents.forEach((todo: Todo) => {
        console.log(`Title: ${todo.title}\nDescription: ${todo.description}\nIs Todo Complete: ${todo.isComplete}\n\n`);
    });
}

async function runAllTasks(): Promise<void> {
    await prepareDatabase();
    await seedDatabase();
    await getTodos();
}
runAllTasks();

```

Run your project with deno mod.ts and view the response in your console.

###### Recommended

- [API reference/Account](https://appwrite.io/docs/references/cloud/client-web/account)
- [API reference/Teams](https://appwrite.io/docs/references/cloud/client-web/teams)
- [API reference/Databases](https://appwrite.io/docs/references/cloud/client-web/databases)
- [API reference/Storage](https://appwrite.io/docs/references/cloud/client-web/storage)

## Supabase to Appwrite Migration
[Skip to content](https://appwrite.io/docs/advanced/migrations/supabase#main)

[![appwrite](https://appwrite.io/images/logos/appwrite.svg)![appwrite](https://appwrite.io/images/logos/appwrite-light.svg)](https://appwrite.io/)

[Go to Console](https://cloud.appwrite.io/)

Appwrite migrations help you quickly migrate your data from Supabase or other [sources](https://appwrite.io/docs/advanced/migrations#sources) to Appwrite. You can follow the instructions on the Appwrite Console migration wizard or use this guide to perform your data migration. While migrations are a great way to move your data from other services to Appwrite and get started quickly, they're not perfect. Make sure to understand the different [limitations](https://appwrite.io/docs/advanced/migrations/supabase#limitations) before completing your migration.

##### Charges

When you migrate data from Supabase to Appwrite Cloud, the resource usage during the migration will not count towards your Appwrite Cloud usage charges. However, Supabase, may have data transfer charges.

Find all of the following credentials from your Supabase project.

| Field | Description |
| --- | --- |
| **Host** | The host of your Supabase Database, this can be found in your Supabase project settings under **Database Settings** and **Host**. |
| **Port** | The port of your Supabase Database, this can be found in your Supabase project settings under **Database Settings** and **Port**. By default, this is **5432**. |
| **Username** | The username of your Supabase Database, this can be found in your Supabase project settings under **Database Settings** and **Username**. |
| **Password** | The password of your Supabase Database, this was set when you created your Supabase project. If you forgot your password, you can reset it within **Database Settings**. |
| **Endpoint** | This is the endpoint of your Supabase instance under **Project Settings > API**. This is used to migrate your files. |
| **API Key** | This is the key of your Supabase instance under **Project Settings > API**. This is used to migrate your files. Make sure to use the hidden **service\_role** key. |

Before migrating to Appwrite make sure you've read the [migration overview](https://appwrite.io/docs/advanced/migrations) page.

1. Create a new project and click on the **Migrations** tab in **Project Settings**.

2. Click on the **Create Migration** button and select **Supabase** as your source.

3. Enter the credentials from the [Obtain credentials](https://appwrite.io/docs/advanced/migrations/supabase#obtain-credentials) step and click **Next**.

4. Select the resources you want to migrate and finally click **Start migration** to begin the migration process.


1. In your Appwrite Console, navigate to **Overview** \> **Integrations** \> **Platforms**, add the platforms for your Web, Flutter, Android, and iOS apps. Appwrite will reject requests from unknown web, Flutter, and mobile apps to protect from malicious attacks. You app **must be added as a platform** for Appwrite to accept requests.

2. Remember to [add appropriate permissions](https://appwrite.io/docs/advanced/platform/permissions) to the migrated resources to protect user data and privacy.

3. Migrate functions manually, by [pick a runtime](https://appwrite.io/docs/products/functions/runtimes) and [learn to develop Appwrite Functions](https://appwrite.io/docs/products/functions/develop).

4. Explore Appwrite's unique features by exploring the rest of the [Appwrite Documentation](https://appwrite.io/docs).


## [Limitations](https://appwrite.io/docs/advanced/migrations/supabase\#)

Not all vendors make their APIs publicly accessible or easy to use for extracting and fully owning your data. Furthermore, due to varying design philosophies, certain resources cannot be migrated on a one-to-one basis. Below, you'll find a list of some known limitations when migrating data from Supabase to Appwrite. It's advisable to review this list before initiating your migration or deploying your product in a production environment.

- Appwrite's Databases services support a different set of features as PostgreSQL. Some features like advanced indexes, Postgres functions, and scheduling will not be migrated.

- OAuth users will not be migrated because the sessions are managed by the third-party OAuth provider. Users will need to re-authenticate with your OAuth provider after the migration is complete.

- Functions are not automatically migrated because of syntax and runtime differences.


###### Recommended

- [API reference/Account](https://appwrite.io/docs/references/cloud/client-web/account)
- [API reference/Teams](https://appwrite.io/docs/references/cloud/client-web/teams)
- [API reference/Databases](https://appwrite.io/docs/references/cloud/client-web/databases)
- [API reference/Storage](https://appwrite.io/docs/references/cloud/client-web/storage)

## PHP Quick Start
[Skip to content](https://appwrite.io/docs/quick-starts/php#main)

[![appwrite](https://appwrite.io/images/logos/appwrite.svg)![appwrite](https://appwrite.io/images/logos/appwrite-light.svg)](https://appwrite.io/)

[Go to Console](https://cloud.appwrite.io/)

Learn how to setup your first PHP project powered by Appwrite.

Head to the [Appwrite Console](https://cloud.appwrite.io/console).

If this is your first time using Appwrite, create an account and create your first project.

![Create project screen](https://appwrite.io/images/docs/quick-starts/dark/create-project.png)

![Create project screen](https://appwrite.io/images/docs/quick-starts/create-project.png)

Then, under **Integrate with your server**, add an **API Key** with the following scopes.

![Create project screen](https://appwrite.io/images/docs/quick-starts/dark/integrate-server.png)

![Create project screen](https://appwrite.io/images/docs/quick-starts/integrate-server.png)

| Category | Required scopes | Purpose |
| --- | --- | --- |
| Database | databases.write | Allows API key to create, update, and delete [databases](https://appwrite.io/docs/products/databases/databases). |
|  | collections.write | Allows API key to create, update, and delete [collections](https://appwrite.io/docs/products/databases/collections). |
|  | attributes.write | Allows API key to create, update, and delete [attributes](https://appwrite.io/docs/products/databases/collections#attributes). |
|  | documents.read | Allows API key to read [documents](https://appwrite.io/docs/products/databases/documents). |
|  | documents.write | Allows API key to create, update, and delete [documents](https://appwrite.io/docs/products/databases/documents). |

Other scopes are optional.

Create a PHP CLI application.

```web-code sh line-numbers
mkdir my-app
cd my-app
composer init

```

Install the PHP Appwrite SDK.

```web-code sh line-numbers
composer require appwrite/appwrite:15.0.0

```

Find your project ID in the **Settings** page. Also, click on the **View API Keys** button to find the API key that was created earlier.

![Project settings screen](https://appwrite.io/images/docs/quick-starts/dark/project-id.png)

![Project settings screen](https://appwrite.io/images/docs/quick-starts/project-id.png)

Create a new file index.php and initialize the Appwrite Client. Replace <PROJECT\_ID> with your project ID and <YOUR\_API\_KEY> with your API key.

```web-code php line-numbers
<?php
require_once 'vendor/autoload.php';

use Appwrite\Client;
use Appwrite\Services\Databases;
use Appwrite\ID;

$client = new Client();

$client
    ->setEndpoint('https://<REGION>.cloud.appwrite.io/v1')
    ->setProject('<PROJECT_ID>')
    ->setKey('<YOUR_API_KEY>');

```

Once the Appwrite Client is initialized, create a function to configure a todo collection.

```web-code php line-numbers
$databases = new Databases($client);

function prepareDatabase($databases) {
    $todoDatabase = $databases->create(
        databaseId: ID::unique(),
        name: 'TodosDB'
    );

    $todoCollection = $databases->createCollection(
        databaseId: $todoDatabase['$id'],
        collectionId: ID::unique(),
        name: 'Todos'
    );

    $databases->createStringAttribute(
        databaseId: $todoDatabase['$id'],
        collectionId: $todoCollection['$id'],
        key: 'title',
        size: 255,
        required: true
    );

    $databases->createStringAttribute(
        databaseId: $todoDatabase['$id'],
        collectionId: $todoCollection['$id'],
        key: 'description',
        size: 255,
        required: false,
    );

    $databases->createBooleanAttribute(
        databaseId: $todoDatabase['$id'],
        collectionId: $todoCollection['$id'],
        key: 'isComplete',
        required: true
    );

    return [$todoDatabase, $todoCollection];
}

```

Create a function to add some mock data into your new collection.

```web-code php line-numbers
function seedDatabase($databases, $todoDatabase, $todoCollection) {
    $testTodo1 = [\
        'title' => 'Buy apples',\
        'description' => 'At least 2KGs',\
        'isComplete' => true\
    ];

    $testTodo2 = [\
        'title' => 'Wash the apples',\
        'isComplete' => true\
    ];

    $testTodo3 = [\
        'title' => 'Cut the apples',\
        'description' => 'Don\'t forget to pack them in a box',\
        'isComplete' => false\
    ];

    $databases->createDocument(
        $todoDatabase['$id'],
        $todoCollection['$id'],
        ID::unique(),
        $testTodo1
    );

    $databases->createDocument(
        $todoDatabase['$id'],
        $todoCollection['$id'],
        ID::unique(),
        $testTodo2
    );

    $databases->createDocument(
        $todoDatabase['$id'],
        $todoCollection['$id'],
        ID::unique(),
        $testTodo3
    );
}

```

Create a function to retrieve the mock todo data and a function to execute the requests in order. Run the functions to by calling runAllTasks();.

```web-code php line-numbers
function getTodos($databases, $todoDatabase, $todoCollection) {
    $todos = $databases->listDocuments(
        $todoDatabase['$id'],
        $todoCollection['$id']
    );

    foreach ($todos['documents'] as $todo) {
        echo "Title: {$todo['title']}\n" .
            "Description: {$todo['description']}\n" .
            "Is Todo Complete: {$todo['isComplete']}\n\n";
   }
}

function runAllTasks($databases) {
    [$todoDatabase, $todoCollection] = prepareDatabase($databases);
    seedDatabase($databases, $todoDatabase, $todoCollection);
    getTodos($databases, $todoDatabase, $todoCollection);
}

runAllTasks($databases);

```

Run your project with php src/index.php and view the response in your console.

###### Recommended

- [API reference/Account](https://appwrite.io/docs/references/cloud/client-web/account)
- [API reference/Teams](https://appwrite.io/docs/references/cloud/client-web/teams)
- [API reference/Databases](https://appwrite.io/docs/references/cloud/client-web/databases)
- [API reference/Storage](https://appwrite.io/docs/references/cloud/client-web/storage)

## Secure HTTPS Connections
[Skip to content](https://appwrite.io/docs/advanced/security/https#main)

[![appwrite](https://appwrite.io/images/logos/appwrite.svg)![appwrite](https://appwrite.io/images/logos/appwrite-light.svg)](https://appwrite.io/)

[Go to Console](https://cloud.appwrite.io/)

Appwrite Cloud serves all endpoints over an HTTPS connection by default. Requests made through an unsecure HTTP connection will be redirected to.

Redirected requests will show a 301 response status.

```web-code http line-numbers
HTTP/1.1 301 Moved Permanently
Content-Type: application/json
Location: https://<REGION>.cloud.appwrite.io/v1/<ENDPOINT>

```

Appwrite Cloud does not support HTTP, which is a common practice in modern development, because unencrypted HTTP traffic is dangerous and exposes sensitive user data to malicious attackers.

## [Strict-Transport-Security](https://appwrite.io/docs/advanced/security/https\#strict-transport-security)

Appwrite uses the [Strict-Transport-Security header](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Strict-Transport-Security) to inform browsers that the website should only be accessed using HTTPS, further protecting against man-in-the-middle attacks such as protocol downgrade attacks and cookie hijacking. By enforcing HTTPS, Appwrite Cloud's endpoint will always be served over a secure connection, which helps protect users' data and privacy.

## [Custom domains](https://appwrite.io/docs/advanced/security/https\#custom-domains)

You can add a [custom domain](https://appwrite.io/docs/advanced/platform/custom-domains) to your Appwrite project so you can access Appwrite API endpoints on your own domain. Appwrite will [generate TLS certificates](https://appwrite.io/docs/advanced/security/tls) for your domain and enforce HTTPS communication.

## [Function domains](https://appwrite.io/docs/advanced/security/https\#function-domains)

Appwrite generates domains for Appwrite Functions so they can be executed through HTTPS requests. Appwrite also [generates TLS certificates](https://appwrite.io/docs/advanced/security/tls) for these domains to enforce HTTPS communication.

###### Recommended

- [API reference/Account](https://appwrite.io/docs/references/cloud/client-web/account)
- [API reference/Teams](https://appwrite.io/docs/references/cloud/client-web/teams)
- [API reference/Databases](https://appwrite.io/docs/references/cloud/client-web/databases)
- [API reference/Storage](https://appwrite.io/docs/references/cloud/client-web/storage)

## Appwrite MCP Integration
[Skip to content](https://appwrite.io/docs/tooling/mcp/windsurf#main)

[![appwrite](https://appwrite.io/images/logos/appwrite.svg)![appwrite](https://appwrite.io/images/logos/appwrite-light.svg)](https://appwrite.io/)

[Go to Console](https://cloud.appwrite.io/)

Learn how you can add the Appwrite MCP server to Windsurf Editor.

##### Pre-requisite: Install uv

You must install [uv](https://docs.astral.sh/uv/getting-started/installation/) on your system to use the MCP server.

Open the **Windsurf Settings** page, head to the **Cascade** tab, find the **Model Context Protocol (MCP) Servers** section, and click on the **View raw config** button.

![Add MCP server](https://appwrite.io/images/docs/mcp/windsurf/windsurf-add-mcp-server.png)

Update the mcp\_config.json file to include the following:

```web-code json line-numbers
{
  "mcpServers": {
    "appwrite": {
      "command": "uvx",
      "args": [\
        "mcp-server-appwrite",\
        "--databases",\
        "--users"\
      ],
      "env": {
        "APPWRITE_PROJECT_ID": "your-project-id",
        "APPWRITE_API_KEY": "your-api-key",
        "APPWRITE_ENDPOINT": "https://<REGION>.cloud.appwrite.io/v1"
      }
    }
  }
}

```

Once you save the details, head back to the MCP Servers section in the Windsurf Settings and click on the **Refresh** button.

##### Enable other MCP tools

To enable additional tools, learn more about [command-line arguments](https://appwrite.io/docs/tooling/mcp#command-line-arguments).

Open Cascade chat in the Windsurf Editor and add a prompt to query the database.

![Create user in Appwrite project](https://appwrite.io/images/docs/mcp/windsurf/windsurf-cascade-chat.png)

###### Recommended

- [API reference/Account](https://appwrite.io/docs/references/cloud/client-web/account)
- [API reference/Teams](https://appwrite.io/docs/references/cloud/client-web/teams)
- [API reference/Databases](https://appwrite.io/docs/references/cloud/client-web/databases)
- [API reference/Storage](https://appwrite.io/docs/references/cloud/client-web/storage)

## Web Application Firewall
[Skip to content](https://appwrite.io/docs/products/network/waf#main)

[![appwrite](https://appwrite.io/images/logos/appwrite.svg)![appwrite](https://appwrite.io/images/logos/appwrite-light.svg)](https://appwrite.io/)

[Go to Console](https://cloud.appwrite.io/)

The Web Application Firewall (WAF) is a critical feature of the Appwrite Network, designed to protect applications from common web vulnerabilities and attacks. Available exclusively to enterprise customers, WAF can be configured through your Appwrite success manager to meet the specific security needs of your application.

##### Availability

The WAF feature is available exclusively to enterprise customers as part of the Appwrite enterprise offering. Setup and configuration are managed through your dedicated Appwrite success manager, who ensures that the WAF aligns with your application's requirements and evolves with emerging security threats.

The WAF functions as a protective barrier at the application layer (Layer 7) of the OSI model, where it inspects and filters HTTP/HTTPS traffic in real-time. It is specifically designed to safeguard your application by analyzing request headers, payloads, and query strings to identify malicious patterns or anomalies. The WAF intercepts traffic before it reaches your application, blocking threats such as:

- SQL injection: Malicious input targeting database queries is identified and neutralized by inspecting payloads and request parameters.

- Cross-site scripting (XSS): WAF detects and blocks scripts attempting to manipulate or steal client-side data through injection into the DOM or other contexts.

- Cross-site request forgery (CSRF): By analyzing session headers and request origins, the WAF ensures only legitimate actions are processed.

- DDoS attacks: Although primarily focused on Layer 7 attacks, the WAF works in tandem with other mitigation systems to handle floods of application-level requests.


## [Design](https://appwrite.io/docs/products/network/waf\#design)

1. **Traffic inspection** The WAF analyzes all incoming HTTP/HTTPS requests in real-time, matching them against a dynamic set of security rules.

2. **Threat mitigation** Suspicious requests are blocked before they reach your application, ensuring uninterrupted service and secure user interactions.

3. **Custom rules** Enterprise customers can work with their success manager to define custom rules tailored to their specific application requirements.


## [Key features](https://appwrite.io/docs/products/network/waf\#key-features)

- Real-time protection: Continuous monitoring and blocking of malicious traffic.

- Customizable rulesets: Configure WAF policies to align with your application's unique architecture.

- Compliance support: Meet security standards and regulatory requirements by safeguarding sensitive data.

- Seamless integration: Fully integrated into the Appwrite network, ensuring optimal performance and low-latency security enforcement.


## [Getting started](https://appwrite.io/docs/products/network/waf\#getting-started)

If you're an enterprise customer, reach out to your success manager to enable WAF for your applications. They'll guide you through the setup process, help configure custom rules, and ensure your application is fully protected.

For more information on upgrading to the enterprise plan, [contact sales](https://appwrite.io/contact-us/enterprise).

### [Configuration](https://appwrite.io/docs/products/network/waf\#configuration)

Appwrite's WAF is designed to adapt to the specific needs of your applications. Tailored rules and actions can be implemented to address evolving security threats and traffic patterns effectively.

#### [Rules](https://appwrite.io/docs/products/network/waf\#rules)

The WAF supports the creation of fine-grained rules using logical expressions. These rules define how incoming traffic is inspected and handled.

1. **Expression-based rules**

Use logical expressions to create granular filters for incoming requests. These expressions operate on HTTP request fields, headers, cookies, and metadata.Examples of configurable expressions:


   - **URL matching**: Block or allow traffic based on URL patterns (e.g., /v1/functions/\*).

   - **Request method**: Filter traffic based on HTTP methods (e.g., GET, POST, PUT).

   - **Header inspection**: Inspect headers like User-Agent, Authorization, or X-Forwarded-For.

   - **Cookie validation**: Check for specific cookies or validate their values to identify bot or malicious traffic.

   - **Rate limiting**: Match requests based on IP or session-level rate thresholds.

   - **Geolocation rules**: Allow or block traffic based on the geographic location of the user.


2. **Regular expressions (Regex)**

Use regex patterns for more advanced filtering, such as matching complex URL structures, payloads, or specific query parameters.

3. **IP Filtering**

Define rules to block, allow, or challenge traffic from specific IP ranges or CIDR blocks.


#### [Actions](https://appwrite.io/docs/products/network/waf\#actions)

Based on the defined rules, the WAF can perform various actions to handle traffic appropriately.

1. **Allow**

Allows the request to pass through to the backend without modification.

2. **Block**

Rejects the request entirely, responding with an appropriate HTTP status code (e.g., 403 Forbidden).

3. **Challenge**

Issues a challenge (e.g., CAPTCHA) to validate whether the request originates from a legitimate user.

4. **Redirect**

Redirects the request to a specified URL. Useful for handling deprecated endpoints or re-routing unauthorized traffic.

5. **Log**

Records the request in detailed logs for further analysis without altering the request flow.

6. **Rate limiting**

Throttles traffic from specific IPs or sessions that exceed defined thresholds, reducing the risk of abuse or overload.

7. **Modify request**

Dynamically alters request components, such as headers, query parameters, or cookies.


#### [Examples](https://appwrite.io/docs/products/network/waf\#examples)

##### [Blocking malicious bots](https://appwrite.io/docs/products/network/waf\#blocking-malicious-bots)

- **Expression**: Match requests with suspicious User-Agent strings or invalid headers.

- **Action**: Block or issue a CAPTCHA challenge to confirm legitimate traffic.


##### [Preventing SQL injection](https://appwrite.io/docs/products/network/waf\#preventing-sql-injection)

- **Expression**: Match payloads or query strings containing SQL keywords like SELECT, DROP, or --.

- **Action**: Block the request and log it for analysis.


##### [Rate limiting by endpoint](https://appwrite.io/docs/products/network/waf\#rate-limiting-by-endpoint)

- **Expression**: Limit requests to sensitive endpoints (e.g., /login) to prevent abuse.

- **Action**: Throttle or temporarily block repeated requests from the same IP.


##### [Geo-based blocking](https://appwrite.io/docs/products/network/waf\#geo-based-blocking)

- **Expression**: Match requests originating from specific regions or countries.

- **Action**: Block or redirect users to a region-specific notice page.


##### [Header enforcement](https://appwrite.io/docs/products/network/waf\#header-enforcement)

- **Expression**: Check for required headers (e.g., Authorization) on API requests.

- **Action**: Block requests missing critical headers.


###### Recommended

- [API reference/Account](https://appwrite.io/docs/references/cloud/client-web/account)
- [API reference/Teams](https://appwrite.io/docs/references/cloud/client-web/teams)
- [API reference/Databases](https://appwrite.io/docs/references/cloud/client-web/databases)
- [API reference/Storage](https://appwrite.io/docs/references/cloud/client-web/storage)

## Appwrite Functions Guide
[Skip to content](https://appwrite.io/docs/products/functions/develop#main)

[![appwrite](https://appwrite.io/images/logos/appwrite.svg)![appwrite](https://appwrite.io/images/logos/appwrite-light.svg)](https://appwrite.io/)

[Go to Console](https://cloud.appwrite.io/)

Appwrite Functions offer a familiar interface if you've developed REST endpoints. Each function is handled following a request and response pattern.

## [Lifecycle](https://appwrite.io/docs/products/functions/develop\#)

There is a clear lifecycle for all Appwrite Functions, from beginning to end. Here's everything that happens during a function execution.

1. The function is invoked.

2. The active [deployment](https://appwrite.io/docs/products/functions/deployments)'s executor will handle the request.

3. The Executor passes in request information like headers, body or path through the context.req object of your exported function.

4. The runtime executes the code you defined, you can log through the context.log() or context.error() methods.

5. Function terminates when you return results using return context.res.text(), return context.res.json() or similar.


[Locally developed functions](https://appwrite.io/docs/products/functions/develop-locally) follow the same lifecycle on your local machine.

### [Entrypoint](https://appwrite.io/docs/products/functions/develop\#)

You'll find all of these steps in a simple function like this. Notice the exported entry point that the executor will call.

If you prefer to learn through more examples like this, explore the [examples page](https://appwrite.io/docs/products/functions/examples).

## [Context object](https://appwrite.io/docs/products/functions/develop\#)

Context is an object passed into every function to handle communication to both the end users, and logging to the Appwrite Console. All input, output, and logging **must be handled through the context object** passed in.

You'll find these properties in the context object.

| Property | Description |
| --- | --- |
| req | Contains request information like method, body, and headers. See full examples [in the request section](https://appwrite.io/docs/products/functions/develop#request). |
| res | Contains methods to build a response and return information. See full examples [in the response section](https://appwrite.io/docs/products/functions/develop#response). |
| log() | Method to log information to the Appwrite Console, end users will not be able to see these logs. See full examples [in the logging section](https://appwrite.io/docs/products/functions/develop#logging). |
| error() | Method to log errors to the Appwrite Console, end users will not be able to see these errors. See full examples [in the logging section](https://appwrite.io/docs/products/functions/develop#logging). |

##### Depreciation notice

Use req.bodyText instead of req.bodyRaw. Use res.text instead of res.send. Use req.bodyText or req.bodyJson instead of req.body depending on the expected input data type.

#### [Destructuring assignment](https://appwrite.io/docs/products/functions/develop\#)

Some languages, namely JavaScript, support destructuring. You'll see us use destructuring in examples, which has the following syntax.

[Learn more about destructuring assignment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment).

### [Request](https://appwrite.io/docs/products/functions/develop\#)

If you pass data into an Appwrite Function, it'll be found in the request object. This includes all invocation inputs from Appwrite SDKs, HTTP calls, Appwrite events, or browsers visiting the configured domain. Explore the request object with the following function, which logs all request params to the Appwrite Console.

#### [Request types](https://appwrite.io/docs/products/functions/develop\#)

| Request | Description |
| --- | --- |
| req.bodyText | Returns text that has been converted from binary data. |
| req.bodyJson | Parses the body text as JSON. |
| req.bodyBinary | Returns the binary body. |

#### [Headers](https://appwrite.io/docs/products/functions/develop\#)

Appwrite Functions will always receive a set of headers that provide meta data about the function execution. These are provided alongside any custom headers sent to the function.

| Variable | Description |
| --- | --- |
| x-appwrite-trigger | Describes how the function execution was invoked. Possible values are http, schedule or event. |
| x-appwrite-event | If the function execution was triggered by an event, describes the triggering event. |
| x-appwrite-key | The dynamic API key is used for server authentication. [Learn more about dynamic api keys](https://appwrite.io/docs/products/functions/develop#dynamic-api-key). |
| x-appwrite-user-id | If the function execution was invoked by an authenticated user, display the user ID. This doesn't apply to Appwrite Console users or API keys. |
| x-appwrite-user-jwt | JWT token generated from the invoking user's session. Used to authenticate Server SDKs to respect access permissions. [Learn more about JWT tokens](https://appwrite.io/docs/products/auth/jwt). |
| x-appwrite-country-code | Displays the country code of the configured locale. |
| x-appwrite-continent-code | Displays the continent code of the configured locale. |
| x-appwrite-continent-eu | Describes if the configured local is within the EU. |

### [Response](https://appwrite.io/docs/products/functions/develop\#)

Use the response object to send a response to the function caller. This could be a user, client app, or an integration. The response information **will not be logged** to the Appwrite Console. There are several possible ways to send a response, explore them in the following Appwrite Function.

#### [Response types](https://appwrite.io/docs/products/functions/develop\#)

| Response | Description |
| --- | --- |
| empty | Sends a response with a code 204 No Content status. |
| json | Converts the data into a JSON string and sets the content-type header to application/json. |
| binary | Packages binary bytes, the status code, and the headers into an object. |
| redirect | Redirects the client to the specified URL link. |
| text | Converts the body using UTF-8 encoding into a binary Buffer. |

To get the different response types, set one of the following query parameters in the [generated domain](https://appwrite.io/docs/products/functions/domains) of your function.

| Type | Query Param | Example |
| --- | --- | --- |
| text | /?type=text | https://64d4d22db370ae41a32e.appwrite.global/?type=text |
| json | /?type=json | https://64d4d22db370ae41a32e.appwrite.global/?type=json |
| redirect | /?type=redirect | https://64d4d22db370ae41a32e.appwrite.global/?type=redirect |
| html | /?type=html | https://64d4d22db370ae41a32e.appwrite.global/?type=html |
| empty | / | https://64d4d22db370ae41a32e.appwrite.global/ |

### [Logging](https://appwrite.io/docs/products/functions/develop\#)

To protect user privacy, the request and response objects are not logged to the Appwrite Console by default.

We support the spread operator across most of the languages, meaning you can write code that is more concise and flexible.

This means, to see logs or debug function executions you need to use the log() and error() methods. These logs are only visible to developers with access to the Appwrite Console.

Here's an example of using logs and errors.

You can access these logs through the following steps.

1. In Appwrite Console, navigate to Functions.

2. Click to open a function you wish to inspect.

3. Under the Executions tab, click on an execution.

4. In the Response section, you'll be able to view logs under the Logs and Errors tabs.


## [Accessing environment variables](https://appwrite.io/docs/products/functions/develop\#)

If you need to pass constants or secrets to Appwrite Functions, you can use environment variables.

| Variable | Description | Available at Build and/or Run Time |
| --- | --- | --- |
| APPWRITE\_FUNCTION\_API\_ENDPOINT | The API endpoint of the running function | Both |
| APPWRITE\_VERSION | The Appwrite version used to run the function | Both |
| APPWRITE\_REGION | The region where the function will run from | Both |
| APPWRITE\_FUNCTION\_API\_KEY | The function API key is used for server authentication | Build time |
| APPWRITE\_FUNCTION\_ID | The ID of the running function. | Both |
| APPWRITE\_FUNCTION\_NAME | The Name of the running function. | Both |
| APPWRITE\_FUNCTION\_DEPLOYMENT | The deployment ID of the running function. | Both |
| APPWRITE\_FUNCTION\_PROJECT\_ID | The project ID of the running function. | Both |
| APPWRITE\_FUNCTION\_RUNTIME\_NAME | The runtime of the running function. | Both |
| APPWRITE\_FUNCTION\_RUNTIME\_VERSION | The runtime version of the running function. | Both |

[Learn to add variables to you function](https://appwrite.io/docs/products/functions/functions#environment-variables)

You can access the environment variables through the systems library of each language.

## [Dependencies](https://appwrite.io/docs/products/functions/develop\#)

To install your dependencies before your function is built, you should add the relevant install command to the top your function's **Build setting** \> **Commands**. You can find this setting under **Functions** \> your function > **Settings** \> **Configuration** \> **Build settings**.

Make sure to include dependency files like package.json, composer.json, requirements.txt, etc. in your function's configured [root directory](https://appwrite.io/docs/products/functions/deploy-from-git#root-directory). Do not include the dependency folders like node\_modules, vendor, etc. in your function's root directory. The dependencies installed for your local OS may not work in the executor environments

Your function's dependencies should be managed by the package manager of each language. By default, we include the following package managers in each runtime.

|  | Language | Package Manager | Commands |
| --- | --- | --- | --- |
| ![Node.js logo](https://appwrite.io/images/platforms/dark/nodejs.svg)![Node.js logo](https://appwrite.io/images/platforms/nodejs.svg) | Node.js | NPM | npm install |
| ![PHP logo](https://appwrite.io/images/platforms/dark/php.svg)![PHP logo](https://appwrite.io/images/platforms/php.svg) | PHP | Composer | composer install |
| ![Python logo](https://appwrite.io/images/platforms/dark/python.svg)![Python logo](https://appwrite.io/images/platforms/python.svg) | Python | pip | pip install -r requirements.txt |
| ![Ruby logo](https://appwrite.io/images/platforms/dark/ruby.svg)![Ruby logo](https://appwrite.io/images/platforms/ruby.svg) | Ruby | Bundler | bundle install |
| ![Deno logo](https://appwrite.io/images/platforms/dark/deno.svg)![Deno logo](https://appwrite.io/images/platforms/deno.svg) | Deno | deno | deno cache <ENTRYPOINT\_FILE> |
| ![Go logo](https://appwrite.io/images/platforms/dark/go.svg)![Go logo](https://appwrite.io/images/platforms/go.svg) | Go | Go Modules | N/A |
| ![Dart logo](https://appwrite.io/images/platforms/dark/dart.svg)![Dart logo](https://appwrite.io/images/platforms/dart.svg) | Dart | pub | pub get |
| ![Swift logo](https://appwrite.io/images/platforms/dark/swift.svg)![Swift logo](https://appwrite.io/images/platforms/swift.svg) | Swift | Swift Package Manager | swift package resolve |
| ![.NET logo](https://appwrite.io/images/platforms/dark/dotnet.svg)![.NET logo](https://appwrite.io/images/platforms/dotnet.svg) | .NET | NuGet | dotnet restore |
| ![Bun logo](https://appwrite.io/images/platforms/dark/bun.svg)![Bun logo](https://appwrite.io/images/platforms/bun.svg) | Bun | bun | bun install |
| ![Kotlin logo](https://appwrite.io/images/platforms/dark/kotlin.svg)![Kotlin logo](https://appwrite.io/images/platforms/kotlin.svg) | Kotlin | Gradle | N/A |
| ![Java logo](https://appwrite.io/images/platforms/dark/java.svg)![Java logo](https://appwrite.io/images/platforms/java.svg) | Java | Gradle | N/A |
| ![C++ logo](https://appwrite.io/images/platforms/dark/c.svg)![C++ logo](https://appwrite.io/images/platforms/c.svg) | C++ | None | N/A |

## [Using Appwrite in a function](https://appwrite.io/docs/products/functions/develop\#)

Appwrite can be used in your functions by adding the relevant SDK to your function's dependencies. Authenticating with Appwrite is done via a dynamic API key or a JWT token.

### [Dynamic API key](https://appwrite.io/docs/products/functions/develop\#)

Dynamic API keys are the same as [API keys](https://appwrite.io/docs/advanced/platform/api-keys) but are automatically generated. They are generated in your functions per execution. However, you can only use dynamic API keys inside Appwrite functions.

During the build process, dynamic API keys are automatically provided as the environment variable APPWRITE\_FUNCTION\_API\_KEY. This environment variable doesn't need to be initialized.

During execution, dynamic API keys are automatically provided in the x-appwrite-key [header](https://appwrite.io/docs/products/functions/develop#headers).

Dynamic API keys grant access and operate without sessions. They allow your function to act as an admin-type role instead of acting on behalf of a user. Update the function settings to configure the scopes of the function.

1. In Appwrite Console, navigate to **Functions**.

2. Click to open a function you wish to configure.

3. Under the **Settings** tab, navigate to **Scopes**.

4. Select the scopes you want to grant the dynamic key.

5. It is best practice to allow only necessary permissions.


### [Using with JWT](https://appwrite.io/docs/products/functions/develop\#)

JWTs allow you to act on behalf of an user in your Appwrite Function. When using JWTs, you will be able to access and change **only** the resources with the same permissions as the user account that signed the JWT. This preserves the permissions you configured on each resource.

If the Appwrite Function is invoked by an authenticated user, the x-appwrite-user-jwt header is automatically passed in.

## [Code structure](https://appwrite.io/docs/products/functions/develop\#)

As your functions grow, you may find yourself needing to split your code into multiple files. This helps you keep your codebase maintainable and easy to read. Here's how you can accomplish code splitting.

```web-code server-nodejs line-numbers
// src/utils.js
export function add(a, b) {
    return a + b;
}

```

```web-code server-nodejs line-numbers
// src/main.js
import { add } from './utils.js';

export default function ({ res }) {
    return res.text(add(1, 2));
}

```

```web-code php line-numbers
<?php
// src/utils.php
function add($a, $b) {
    return $a + $b;
}

```

```web-code php line-numbers
<?php
// src/main.php
require_once(__DIR__ . '/utils.php');

return function ($context) {
    return $context->res->text(add(1, 2));
};

```

```web-code python line-numbers
# src/utils.py
def add(a, b):
    return a + b

```

```web-code python line-numbers
# src/main.py
from .utils import add

def main(context):
    return context.res.text(add(1, 2))

```

```web-code ruby line-numbers
# lib/utils.rb
def add(a, b)
    return a + b
end

```

```web-code ruby line-numbers
# lib/main.rb
require_relative 'utils'

def main(context)
    return context.res.text(add(1, 2))
end

```

```web-code deno line-numbers
// src/utils.ts
export function add(a: number, b: number): number {
    return a + b;
}

```

```web-code deno line-numbers
// src/main.ts
import { add } from './utils.ts';

export default function ({res}: {res: any}) {
    return res.text(add(1, 2));
}

```

```web-code go line-numbers
// src/utils/go.mod
module example.com/utils

go 1.23.0

```

```web-code go line-numbers
// src/utils/utils.go
package utils

func Add(a int, b int) int {
  return a + b
}

```

```web-code go line-numbers
// src/main/go.mod
module example.com/main

go 1.23.0

replace example.com/utils => ../utils // Run go mod edit -replace example.com/go=../go

require example.com/utils v0.0.0-00010101000000-000000000000 // Run go mod tidy

```

```web-code go line-numbers
// src/main/main.go
package main

import "example.com/utils"

func main() {
  // Get a greeting message and print it.
  message := utils.Add(5, 4)
  print(message)
}

```

```web-code dart line-numbers
// lib/utils.dart
int add(int a, int b) {
    return a + b;
}

```

```web-code dart line-numbers
// lib/main.dart
import 'dart:async';

import 'package:package_name/utils.dart';

Future<dynamic> main(final context) async {
    return context.res.text(add(1, 2));
}

```

```web-code swift line-numbers
// Sources/utils.swift
func add(_ a: Int, _ b: Int) -> Int {
    return a + b
}

```

```web-code swift line-numbers
// Sources/index.swift
import Foundation

func main(context: RuntimeContext) async throws -> RuntimeOutput {
    return context.res.text(add(1, 2))
}

```

```web-code csharp line-numbers
// src/Utils.cs
namespace DotNetRuntime
{
    public static class Utils
    {
        public static int Add(int a, int b)
        {
            return a + b;
        }
    }
}

```

```web-code csharp line-numbers
// src/Index.cs
namespace DotNetRuntime
{
    public class Handler {
        public async Task<RuntimeOutput> Main(RuntimeContext Context)
        {
            return Context.Res.Text(Utils.Add(1, 2));
        }
    }
}

```

```web-code kotlin line-numbers
// src/Utils.kt
package io.openruntimes.kotlin.src

object Utils {
    fun add(a: Int, b: Int): Int {
        return a + b
    }
}

```

```web-code kotlin line-numbers
// src/Main.kt
package io.openruntimes.kotlin.src

import io.openruntimes.kotlin.RuntimeContext
import io.openruntimes.kotlin.RuntimeOutput
import io.openruntimes.kotlin.Utils

class Main {
    fun main(context: RuntimeContext): RuntimeOutput {
        return context.res.text(Utils.add(1, 2))
    }
}

```

```web-code java line-numbers
// src/Utils.java
package io.openruntimes.java.src;

class Utils {
    public static int add(int a, int b) {
        return a + b;
    }
}

```

```web-code java line-numbers
package io.openruntimes.java.src;

import io.openruntimes.java.RuntimeContext;
import io.openruntimes.java.RuntimeOutput;
import io.openruntimes.java.Utils;

public class Main {
    public RuntimeOutput main(RuntimeContext context) throws Exception {
        return context.res.text(Utils.add(1, 2));
    }
}

```

###### Recommended

- [API reference/Account](https://appwrite.io/docs/references/cloud/client-web/account)
- [API reference/Teams](https://appwrite.io/docs/references/cloud/client-web/teams)
- [API reference/Databases](https://appwrite.io/docs/references/cloud/client-web/databases)
- [API reference/Storage](https://appwrite.io/docs/references/cloud/client-web/storage)

## Appwrite Functions Domains
[Skip to content](https://appwrite.io/docs/products/functions/domains#main)

[![appwrite](https://appwrite.io/images/logos/appwrite.svg)![appwrite](https://appwrite.io/images/logos/appwrite-light.svg)](https://appwrite.io/)

[Go to Console](https://cloud.appwrite.io/)

Each deployed function can have its own domain, generated or developer defined. You can use this domain to execute Appwrite Functions through HTTP methods. You can use common practices like using paths, query parameters, headers, HTTP methods, formdata, and all the typical HTTP concepts to implement Appwrite Functions.

Appwrite generates TLS certificates to enforce HTTPS on all Appwrite Functions domains, generated or custom. These domains are safe to use and access in production.

[Learn about Function development](https://appwrite.io/docs/products/functions/develop)

## [Generated domains](https://appwrite.io/docs/products/functions/domains\#generated-domains)

1. In the Appwrite Console's sidebar, click **Functions**.

2. Under the **Domains** tab, you'll find the generated domain from Appwrite.


The domain usually has this format.

```web-code bash line-numbers
https://64d4d22db370ae41a32e.appwrite.global

```

## [Add a custom domain](https://appwrite.io/docs/products/functions/domains\#add-a-custom-domain)

1. Navigate to the Appwrite Console's **Functions** page.

2. Navigate to the **Domains** tab.

3. Click on **Create domain**.

4. Input your domain and click **Next**.

5. Copy the **CNAME** record and add it to your domain registrar.

6. Click **Go to console** and wait for verification and certificate generation.


DNS records can take up to 48 hours to propagate.

When both **VERIFICATION STATUS** and **CERTIFICATE STATUS** are green, the new domain is ready to use.

###### Recommended

- [API reference/Account](https://appwrite.io/docs/references/cloud/client-web/account)
- [API reference/Teams](https://appwrite.io/docs/references/cloud/client-web/teams)
- [API reference/Databases](https://appwrite.io/docs/references/cloud/client-web/databases)
- [API reference/Storage](https://appwrite.io/docs/references/cloud/client-web/storage)

## User Account Identities
[Skip to content](https://appwrite.io/docs/products/auth/identities#main)

[![appwrite](https://appwrite.io/images/logos/appwrite.svg)![appwrite](https://appwrite.io/images/logos/appwrite-light.svg)](https://appwrite.io/)

[Go to Console](https://cloud.appwrite.io/)

Identities enable linking multiple authentication methods to a single user account. This allows users to access a unified account through various OAuth2 providers.

An identity is another way to refer to a user account. A single user can have multiple identities, each corresponding to different authentication methods. Currently, identities are primarily used with OAuth2 providers. When a user logs in via an OAuth2 provider, an identity is created and linked to their Appwrite account. This system enables:

- Connecting multiple OAuth2 accounts to a single Appwrite account

- Maintaining consistent access regardless of login method

- Tracking which external providers are linked to an account


## [Use cases](https://appwrite.io/docs/products/auth/identities\#)

Identities are primarily used in the following scenarios:

1. **OAuth2 authentication**: When users authenticate through any OAuth2 provider

2. **Account management**: When users want to link or unlink external provider accounts

3. **User profile consolidation**: When maintaining a single user profile across multiple authentication methods


## [Create new identities](https://appwrite.io/docs/products/auth/identities\#)

To create a new identity:

1. The user must be logged into their Appwrite account

2. Initiate the OAuth2 authentication flow for the desired provider

3. The new identity will be automatically created and linked to the current account


For implementation details and code examples, refer to the [OAuth2 documentation](https://appwrite.io/docs/products/auth/oauth2).

## [Manage email addresses](https://appwrite.io/docs/products/auth/identities\#)

Each email address must be unique across all users and identities. For example, if a user with email joe@example.com creates an identity using other@company.com, that second email becomes reserved. This means no other user can create either a new account or a new identity using other@company.com. This restriction helps maintain consistent user identity across your application.

## [List and delete identities](https://appwrite.io/docs/products/auth/identities\#)

Users and administrators can manage identities through various operations available in the Account API:

- [List identities](https://appwrite.io/docs/references/cloud/client-web/account#listIdentities)

- [Delete an identity](https://appwrite.io/docs/references/cloud/client-web/account#deleteIdentity)


For detailed API specifications and code examples, refer to the [Account API Reference](https://appwrite.io/docs/references/cloud/client-web/account).

## [Clean up identities](https://appwrite.io/docs/products/auth/identities\#)

When a user account is deleted:

- Associated identities (and related targets) are removed via a background job

- This deletion is asynchronous and may not be immediate due to queue processing times

- In testing scenarios where instant deletion is required, manually remove identities (and targets) before deleting the user account


## [Best practices](https://appwrite.io/docs/products/auth/identities\#)

A good user experience typically includes clear visibility of connected providers and straightforward identity management.

Verify email addresses where possible and implement proper session management. Secure identity deletion can help prevent unauthorized access.

Testing should ideally cover the cleanup of test identities and email conflict scenarios.

###### Recommended

- [API reference/Account](https://appwrite.io/docs/references/cloud/client-web/account)
- [API reference/Teams](https://appwrite.io/docs/references/cloud/client-web/teams)
- [API reference/Databases](https://appwrite.io/docs/references/cloud/client-web/databases)
- [API reference/Storage](https://appwrite.io/docs/references/cloud/client-web/storage)

## Appwrite Security Features
[Skip to content](https://appwrite.io/docs/products/auth/security#main)

[![appwrite](https://appwrite.io/images/logos/appwrite.svg)![appwrite](https://appwrite.io/images/logos/appwrite-light.svg)](https://appwrite.io/)

[Go to Console](https://cloud.appwrite.io/)

Appwrite provides many security features to keep both your Appwrite project and your user's information secure.

## [Persistence](https://appwrite.io/docs/products/auth/security\#persistence)

Appwrite handles the persistence of the session in a consistent way across SDKs. After authenticating with an SDK, the SDK will persist the session so that the user will not need to log in again the next time they open the app. The mechanism for persistence depends on the SDK.

##### Best Practice

Only keep user sessions active as long as needed and maintain exactly **one** instance of the Client SDK in your app to avoid conflicting session data.

|  | Framework | Storage method |
| :-: | :-: | :-: |
| ![Javascript logo](https://appwrite.io/images/platforms/dark/javascript.svg)![Javascript logo](https://appwrite.io/images/platforms/javascript.svg) | Web | Uses a secure session cookie and falls back to local storage when a session cookie is not available. |
| ![Javascript logo](https://appwrite.io/images/platforms/dark/flutter.svg)![Javascript logo](https://appwrite.io/images/platforms/flutter.svg) | Flutter | Uses a session cookie stored in Application Documents through the **path\_provider** package. |
| ![Javascript logo](https://appwrite.io/images/platforms/dark/apple.svg)![Javascript logo](https://appwrite.io/images/platforms/apple.svg) | Apple | Uses a session cookie stored in **UserDefaults**. |
| ![Javascript logo](https://appwrite.io/images/platforms/dark/android.svg)![Javascript logo](https://appwrite.io/images/platforms/android.svg) | Android | Uses a session cookie stored in **SharedPreferences**. |

## [Session limits](https://appwrite.io/docs/products/auth/security\#session-limits)

In Appwrite versions 1.2 and above, you can limit the number of active sessions created per user to prevent the accumulation of unused but active sessions. New sessions created by the same user past the session limit delete the oldest session.

You can change the session limit in the **Security** tab of the Auth Service in your Appwrite Console. The default session limit is 10 with a maximum configurable limit of 100.

## [Permissions](https://appwrite.io/docs/products/auth/security\#permissions)

Security is very important to protect users' data and privacy. Appwrite uses a [permissions model](https://appwrite.io/docs/advanced/platform/permissions) coupled with user sessions to ensure users need correct permissions to access resources. With all Appwrite services, including databases and storage, access is granted at the collection, bucket, document, or file level. These permissions are enforced for client SDKs and server SDKs when using JWT, but are ignored when using a server SDK with an API key.

## [Password history](https://appwrite.io/docs/products/auth/security\#password-history)

Password history prevents users from reusing recent passwords. This protects user accounts from security risks by enforcing a new password every time it's changed.

Password history can be enabled in the Auth service's **Security** tab on the Appwrite Console. You can choose how many previous passwords to remember, up to a maximum of 20, and block users from reusing them.

## [Password dictionary](https://appwrite.io/docs/products/auth/security\#password-dictionary)

Password dictionary protects users from using bad passwords. It compares the user's password to the [10,000 most common passwords](https://github.com/danielmiessler/SecLists/blob/master/Passwords/Common-Credentials/10k-most-common.txt) and throws an error if there's a match. Together with [rate limits](https://appwrite.io/docs/advanced/platform/rate-limits), password dictionary will significantly reduce the chance of a malicious actor guessing user passwords.

Password dictionary can be enabled in the Auth service's **Security** tab on the Appwrite Console.

## [Password hashing](https://appwrite.io/docs/products/auth/security\#password-hashing)

Appwrite protects passwords by using the [Argon2](https://github.com/P-H-C/phc-winner-argon2) password-hashing algorithm.

Argon 2 is a resilient and secure password hashing algorithm that is also the winner of the [Password Hashing Competition](https://www.password-hashing.net/).

Appwrite combines Argon 2 with the use of techniques such as salting, adjustable work factors, and memory hardness to securely handle passwords.

If an user is imported into Appwrite with hash differnt than Argon2, the password will be re-hashed on first successful user's sign in. This ensures all passwords are stored as securely as possible.

## [Personal data](https://appwrite.io/docs/products/auth/security\#personal-data)

Encourage passwords that are hard to guess by disallowing users to pick passwords that contain personal data. Personal data includes the user's name, email, and phone number.

Disallowing personal data can be enabled in the Auth service's **Security** tab on the Appwrite Console.

## [Session alerts](https://appwrite.io/docs/products/auth/security\#session-alerts)

Enable email alerts for your users so that whenever another session is created for their account, they will be alerted to the new session.

You won't receive notifications when logging in using [Magic URL](https://appwrite.io/docs/products/auth/magic-url), [Email OTP](https://appwrite.io/docs/products/auth/email-otp), or [OAuth2](https://appwrite.io/docs/products/auth/oauth2) since these authentication methods already verify user access to their systems, establishing the authentication's legitimacy.

To toggle session alerts, navigate to **Auth** \> **Security** \> **Session alerts**.

## [Memberships privacy](https://appwrite.io/docs/products/auth/security\#memberships-privacy)

In certain use cases, your app may not need to share members' personal information with others. You can safeguard privacy by marking specific membership details as private. To configure this setting, navigate to **Auth** \> **Security** \> **Memberships privacy**

These details can be made private:

- userName \- The member's name

- userEmail \- The member's email address

- mfa \- Whether the member has enabled multi-factor authentication


## [Mock phone numbers](https://appwrite.io/docs/products/auth/security\#mock-phone-numbers)

Creating and using mock phone numbers allows users to test SMS authentication without needing an actual phone number. This can be useful for testing edge cases where a user doesn't have a phone number but needs to sign in to your application using SMS.

To create a mock phone number, navigate to **Auth** \> **Security** \> Mock Phone Numbers. After defining a mock phone number, you need to define a specific OTP code that will be used for SMS sign-in instead of the SMS secret code sent to a real phone number.

###### Recommended

- [API reference/Account](https://appwrite.io/docs/references/cloud/client-web/account)
- [API reference/Teams](https://appwrite.io/docs/references/cloud/client-web/teams)
- [API reference/Databases](https://appwrite.io/docs/references/cloud/client-web/databases)
- [API reference/Storage](https://appwrite.io/docs/references/cloud/client-web/storage)

## Appwrite Users API
[Skip to content](https://appwrite.io/docs/products/auth/users#main)

[![appwrite](https://appwrite.io/images/logos/appwrite.svg)![appwrite](https://appwrite.io/images/logos/appwrite-light.svg)](https://appwrite.io/)

[Go to Console](https://cloud.appwrite.io/)

Appwrite Users API is used for managing users in server applications. Users API can only be used with an API key with the [Server SDK](https://appwrite.io/docs/sdks#server), to manage all users. If you need to act on behalf of users through an Appwrite Function or your own backend, use [JWT login](https://appwrite.io/docs/products/auth/jwt).

##### Account vs Users API

The Account API is the API you should use in your **client applications** with [Client SDKs](https://appwrite.io/docs/sdks#client) like web, Flutter, mobile, and native apps. Account API creates sessions, which represent an authenticated user and is attached to a user's [account](https://appwrite.io/docs/products/auth/accounts). Sessions respect [permissions](https://appwrite.io/docs/advanced/platform/permissions), which means users can only access resources if they have been granted the correct permissions.

The Users API is a dedicated API for managing users from an admin's perspective. It should be used with backend or server-side applications with [Server SDKs](https://appwrite.io/docs/sdks#server). Users API uses API keys instead of sessions. This means they're not restricted by permissions, but by the scopes granted to the API key used.

The users API can be used to create users, import users, update user info, get user audit logs, and remove users.

[Learn more in the Users API references](https://appwrite.io/docs/references/cloud/server-nodejs/users)

###### Recommended

- [API reference/Account](https://appwrite.io/docs/references/cloud/client-web/account)
- [API reference/Teams](https://appwrite.io/docs/references/cloud/client-web/teams)
- [API reference/Databases](https://appwrite.io/docs/references/cloud/client-web/databases)
- [API reference/Storage](https://appwrite.io/docs/references/cloud/client-web/storage)

## Appwrite Functions Deployments
[Skip to content](https://appwrite.io/docs/products/functions/deployments#main)

[![appwrite](https://appwrite.io/images/logos/appwrite.svg)![appwrite](https://appwrite.io/images/logos/appwrite-light.svg)](https://appwrite.io/)

[Go to Console](https://cloud.appwrite.io/)

Each function can have many deployments, which can be thought of as versions of the mini-application. Functions can be created and deployed in different ways to meet your unique development habits.

## [Deployment status](https://appwrite.io/docs/products/functions/deployments\#)

Throughout the life cycle of a deployment, it could have the following status.

| Status | description |
| --- | --- |
| active | The deployment is built and currently activated and ready to be executed. A function can have one active deployment and deployment a must be active before being executed. |
| ready | A deployment is built, but is not activated. ready deployments can be activated to replace the current active deployment. |
| building | A deployment is being built. Check the [build log](https://appwrite.io/docs/products/functions/deployments#build-logs) for more detailed logs. |
| processing | The function deployment has begun and has not finished. |
| waiting | The deployment is queued but has not been picked up for processing. |
| failed | A deployment was not successful. Check the [build log](https://appwrite.io/docs/products/functions/deployments#build-logs) for detailed logs for debugging. |

## [Update deployment](https://appwrite.io/docs/products/functions/deployments\#)

Some Function settings require redeploying your function to be reflected in your active deployment. When you update a function by changing it's **Git settings**, **Build settings**, and **Environment variables**, you need to redeploy your function before they take effect.

## [Build logs](https://appwrite.io/docs/products/functions/deployments\#)

When you build a deployment, the logs generated will be saved for debugging purposes. You can find build logs by navigating to the **deployments** tab of your function, clicking the three-dots menu beside, and click **Logs**.

## [Redeploy](https://appwrite.io/docs/products/functions/deployments\#)

After updating the configuration, redeploy your function for changes to take effect. You can also redeploy to retry failed builds.

1. Navigate to **Functions**.

2. Open the function you wish to inspect.

3. Under the **Deployments** tab, find the status of the current active deployment.

4. Redeploy by clicking the triple-dots beside an execution, and hitting the **Redeploy** button.


Redeployment behavior varies depending on how the initial deployment was created.

##### Benefits for Pro+ users

Users subscribed to the Appwrite Pro plan or above receive certain special benefits:

- [Express builds](https://appwrite.io/changelog/entry/2024-08-10) for quicker deployments, resulting in reduced wait times and smoother workflows

- Customizable [runtime specifications](https://appwrite.io/blog/post/introducing-new-compute-capabilities-appwrite-functions), allowing for tailored performance and resource allocation


###### Recommended

- [API reference/Account](https://appwrite.io/docs/references/cloud/client-web/account)
- [API reference/Teams](https://appwrite.io/docs/references/cloud/client-web/teams)
- [API reference/Databases](https://appwrite.io/docs/references/cloud/client-web/databases)
- [API reference/Storage](https://appwrite.io/docs/references/cloud/client-web/storage)

## Appwrite Website Development
[Skip to content](https://appwrite.io/docs/products/sites/develop#main)

[![appwrite](https://appwrite.io/images/logos/appwrite.svg)![appwrite](https://appwrite.io/images/logos/appwrite-light.svg)](https://appwrite.io/)

[Go to Console](https://cloud.appwrite.io/)

## [Rendering strategies](https://appwrite.io/docs/products/sites/develop\#)

Appwrite allows you to host both statically-generated and server-rendered websites.

[Static sites](https://appwrite.io/docs/products/sites/rendering/static) are websites that are pre-built and served as-is to clients. They do not execute server-side code on each request. They are ideal for use-cases such as [Single Page Applications (SPAs)](https://appwrite.io/docs/products/sites/rendering/static#running-spas-on-appwrite-sites), documentation sites, personal blogs, and portfolio websites.

[Server-side rendered (SSR) sites](https://appwrite.io/docs/products/sites/rendering/ssr) generate content dynamically on the server and send fully rendered pages for each request. They are ideal for use-cases with substantial dynamic content or server-side processing such as e-commerce platforms, social media applications, content management systems (CMS), and real-time collaboration tools.

You can configure your preferred rendering strategy through the following steps:

1. Navigate to your site on Appwrite Console.

2. Head to the **Settings** tab > **Build settings** section.

3. Select the SSR or the Static checkbox.

4. Confirm that the appropriate install command, build command, and output directory are set.

5. _(For SPAs)_ Add a fallback file.

6. Click on the **Update** button and redeploy your site.


![Rendering strategy](https://appwrite.io/images/docs/sites/dark/build-settings-rendering-ssr.png)

![Rendering strategy](https://appwrite.io/images/docs/sites/build-settings-rendering-ssr.png)

## [**Accessing environment variables**](https://appwrite.io/docs/products/sites/develop\#)

Appwrite Sites lets you set static environment variables to pass constants and secrets such as API keys, connection strings, etc., to your sites.

To set static environment variables, follow these steps:

1. Navigate to your site on Appwrite Console.

2. Head to the **Settings** tab > **Environment variables** section.

3. Click on the **Create variable** button and add the key and value of the environment variable.

4. Select the **Secret** checkbox if you want to prevent any team member from reading the value of the environment variable after creation.

5. Click on the **Create** button and redeploy the site.


![Environment variables](https://appwrite.io/images/docs/sites/dark/env-variables.png)

![Environment variables](https://appwrite.io/images/docs/sites/env-variables.png)

You can also configure global variables that apply to all your sites in the **Settings** of your project.

##### Secret environment variables

Appwrite now allows you create secret environment variables, which are hidden from both the Appwrite Console and API. Once a variable is marked as secret, this action cannot be reversed.

You can mark an environment variable as secret either at the time of creation or after it is created.

### [Appwrite-specific environment variables](https://appwrite.io/docs/products/sites/develop\#)

Appwrite passes the following environment variables into every deployed site by default.

| Variable | Description | Available at Build and/or Run Time |
| --- | --- | --- |
| APPWRITE\_SITE\_API\_ENDPOINT | The API endpoint of the running site | Both |
| APPWRITE\_SITE\_NAME | The name of the running site. | Both |
| APPWRITE\_SITE\_DEPLOYMENT | The deployment ID of the running sites. | Both |
| APPWRITE\_SITE\_PROJECT\_ID | The project ID of the running site. | Both |
| APPWRITE\_SITE\_RUNTIME\_NAME | The runtime name of the running site. | Both |
| APPWRITE\_SITE\_RUNTIME\_VERSION | The runtime version of the running site. | Both |
| APPWRITE\_SITE\_CPUS | The CPU (runtime) specification of the running site. | Both |
| APPWRITE\_SITE\_MEMORY | The memory (runtime) specification of the running site. | Both |

## [Timeouts](https://appwrite.io/docs/products/sites/develop\#)

Each request made to a path on an Appwrite Site has a set time limit, after which the request will timeout. Here are the steps to configure those timeout period:

1. Navigate to your site on Appwrite Console.

2. Head to the **Settings** tab > **Timeout** section.

3. Add an appropriate time limit (in seconds).


![Timeout](https://appwrite.io/images/docs/sites/dark/timeout.png)

![Timeout](https://appwrite.io/images/docs/sites/timeout.png)

The default timeout is set at 15 seconds and the maximum value possible is 30 seconds.

## [Project dependencies](https://appwrite.io/docs/products/sites/develop\#)

To install your dependencies before your site is built, you should add the relevant install command to your site’s build settings. Here are the steps to add the install command:

1. Navigate to your site on Appwrite Console.

2. Head to the **Settings** tab > **Build settings** section.

3. Confirm that the appropriate install command is set.


![Install command](https://appwrite.io/images/docs/sites/dark/build-settings-install-command.png)

![Install command](https://appwrite.io/images/docs/sites/build-settings-install-command.png)

Make sure to include dependency files like package.json in your site's configured root directory. Do not include the dependency folders like node\_modules in your site’s root directory. The dependencies installed for your local OS may not work in the site's environment.

Your site's dependencies should be managed by the package manager of each language. We include the following package managers and setup commands by default.

|  | Framework | Default package manager | Install command | Build command | Output directory |
| --- | --- | --- | --- | --- | --- |
|  | **Next.js** | npm | npm install | npm run build | ./.next |
|  | **Nuxt** | npm | npm install or yarn install | npm run build or yarn build | ./.output |
|  | **SvelteKit** | npm | npm install | npm run build | ./build |
|  | **Angular** | npm | npm install | npm run build | ./dist/angular/browser |
|  | **Astro** | npm | npm install | npm run build | ./dist |
| ![Remix logo](https://appwrite.io/images/platforms/dark/remix.svg)![Remix logo](https://appwrite.io/images/platforms/light/remix.svg) | **Remix** | npm | npm install | npm run build | ./build |
|  | **Flutter** | pub | flutter pub get | flutter build web --release -t lib/main.dart | ./build/web |
|  | **React Native** | npm | npm install | npm run build | ./dist |
|  | **Other JavaScript** | npm | (Empty) | (Empty) | ./ |

###### Recommended

- [API reference/Account](https://appwrite.io/docs/references/cloud/client-web/account)
- [API reference/Teams](https://appwrite.io/docs/references/cloud/client-web/teams)
- [API reference/Databases](https://appwrite.io/docs/references/cloud/client-web/databases)
- [API reference/Storage](https://appwrite.io/docs/references/cloud/client-web/storage)

## Custom SMTP Setup
[Skip to content](https://appwrite.io/docs/products/messaging/smtp#main)

[![appwrite](https://appwrite.io/images/logos/appwrite.svg)![appwrite](https://appwrite.io/images/logos/appwrite-light.svg)](https://appwrite.io/)

[Go to Console](https://cloud.appwrite.io/)

If you wish to use a third-party SMTP provider that Appwrite doesn't yet support or host your own SMTP server, you can setup a custom SMTP provider for your project.

To add a custom SMTP server as a provider, navigate to **Messaging** \> **Providers** \> **Add provider** \> **Email**.

![Add a SMTP provider](https://appwrite.io/images/docs/messaging/providers/smtp/dark/add-smtp.png)

![Add a SMTP provider](https://appwrite.io/images/docs/messaging/providers/smtp/add-smtp.png)

Give your provider a name > choose **SMTP** \> click **Save and continue**. The provider will be saved to your project, but not enabled until you complete its configuration.

In the **Configure** step, you will need to provide details from your SMTP dashboard to connect your Appwrite project.

You will need to provide the following information from your **SMTP dashboard**.

| Field name | Description |
| --- | --- |
| Host | The server address of the SMTP provider. |
| Port | The port used for SMTP connections. |
| Username | Your SMTP provider account username. |
| Password | Your SMTP provider account password. |
| Encryption | The type of encryption used. One of SSL or TLS. |
| Auto TLS | Automatically uses TLS encryption if available. |
| Mailer | The SMTP server or provider. |
| Sender email | The provider sends emails from this sender email. The sender email needs to be an email under the configured domain. |
| Sender name | The sender name that appears in the emails sent from this provider. |
| Reply-to email | The reply-to email that appears in the emails sent from this provider. The reply-to email needs to be an email under the configured domain. |
| Reply-to name | The reply-to name that appears in the emails sent from this provider. |

After adding the following details, click **Save and continue** to enable the provider.

Before sending your first message, make sure you've configured [a topic](https://appwrite.io/docs/products/messaging/topics) and [a target](https://appwrite.io/docs/products/messaging/targets) to send messages to.

To send a test message, navigate to **Messaging** \> **Messages** \> **Create message** \> **Email**.

![Create email message](https://appwrite.io/images/docs/messaging/messages/dark/create-email-message.png)

![Create email message](https://appwrite.io/images/docs/messaging/messages/create-email-message.png)

Add your message and in the targets step, select one of your test targets. Set the schedule to **Now** and click **Send**.

Verify that you can receive the message in your inbox. If not, check for logs in the Appwrite Console or in your provider's logs.

To send a message programmatically, use an [Appwrite Server SDK](https://appwrite.io/docs/sdks#server).

You can follow the [Send email messages](https://appwrite.io/docs/products/messaging/send-push-notifications) journey to send your first push notification and test your provider.

You can update or delete a provider in the Appwrite Console.

Navigate to **Messaging** \> **Providers** \> click your provider. In the settings, you can update a provider's configuration or delete the provider.

To update or delete providers programmatically, use an [Appwrite Server SDK](https://appwrite.io/docs/sdks#server).

###### Recommended

- [API reference/Account](https://appwrite.io/docs/references/cloud/client-web/account)
- [API reference/Teams](https://appwrite.io/docs/references/cloud/client-web/teams)
- [API reference/Databases](https://appwrite.io/docs/references/cloud/client-web/databases)
- [API reference/Storage](https://appwrite.io/docs/references/cloud/client-web/storage)

## APNs Configuration Guide
[Skip to content](https://appwrite.io/docs/products/messaging/apns#main)

[![appwrite](https://appwrite.io/images/logos/appwrite.svg)![appwrite](https://appwrite.io/images/logos/appwrite-light.svg)](https://appwrite.io/)

[Go to Console](https://cloud.appwrite.io/)

Apple Push Notification service (APNs) lets you send push notifications to Apple devices like macOS, iOS, tvOS, iPadOS, and watchOS devices. APNs is a best-effort service, and will attempt to deliver you messages to your device when it's online and available again. APNs will save the last message for 30 days or less and attempt delivery as soon as it's online.

To add APNs as a provider, navigate to **Messaging** \> **Providers** \> **Create provider** \> **Push notification**.

![Add a FCM provider](https://appwrite.io/images/docs/messaging/providers/apns/dark/provider.png)

![Add a FCM provider](https://appwrite.io/images/docs/messaging/providers/apns/provider.png)

Give your provider a name > choose **APNS** \> click **Save and continue**. The provider will be saved to your project, but not enabled until you complete its configuration.

In the **Configure** step, you will need to provide details from your Apple developer account to connect your Appwrite project with your Apple developer account.

You will need to provide the following information from the **Apple Developer Member Center**.

- Team ID







Head to **Apple Developer Member Center** \> **Membership details** \> **Team ID**







![Team ID](https://appwrite.io/images/docs/messaging/providers/apns/dark/team-id.png)






![Team ID](https://appwrite.io/images/docs/messaging/providers/apns/team-id.png)

- Bundle ID







Head to **Apple Developer Member Center** \> **Program resources** \> **Certificates, Identifiers & Profiles** \> **Identifiers**




![Bundle ID](https://appwrite.io/images/docs/messaging/providers/apns/dark/bundle-id.png)









![Bundle ID](https://appwrite.io/images/docs/messaging/providers/apns/bundle-id.png)

- Authentication key ID







Head to **Apple Developer Member Center** \> **Program resources** \> **Certificates, Identifiers & Profiles** \> **Keys**. Click on your key to view details. The key needs **Apple Push Notification Service** enabled.




![Authentication Key ID](https://appwrite.io/images/docs/messaging/providers/apns/dark/key-id.png)









![Authentication Key ID](https://appwrite.io/images/docs/messaging/providers/apns/key-id.png)

- Authentication key (.p8 file)







Head to **Apple Developer Member Center** \> **Program resources** \> **Certificates, Identifiers & Profiles** \> **Keys**. Create a key and give it a name. Enable the Apple Push Notifications service (APNS), and register your key. The key needs **Apple Push Notification Service** enabled.




![Authentication Key](https://appwrite.io/images/docs/messaging/providers/apns/dark/authentication-key.png)









![Authentication Key](https://appwrite.io/images/docs/messaging/providers/apns/authentication-key.png)

- Sandbox







Enable sandbox mode for testing on apps signed with development provisioning profiles. APNs offers two environments, **Development** (sandbox) and **Production**. Development builds on XCode signed with a development provisioning profile will use the development environment. Production builds signed with a production provisioning profile will use the production environment.


After adding the following details, click **Save and continue** to enable the provider.

Some additional configuration is required to enable push notifications in your iOS app. Add push notification capability to your app by clicking your root-level app in XCode > **Signing & Capabilities** \>  Capabilities > Search for **Push Notifications**.

![Enable PN on Xcode](https://appwrite.io/images/docs/messaging/providers/apns/dark/xcode-enable-pn.png)

![Enable PN on Xcode](https://appwrite.io/images/docs/messaging/providers/apns/xcode-enable-pn.png)

Push notification requires special handling on the client side. Follow the [Send push notification](https://appwrite.io/docs/products/messaging/send-push-notifications) flow to test your provider.

ConsoleServer SDK

ConsoleServer SDK

You can update or delete a provider in the Appwrite Console.

Navigate to **Messaging** \> **Providers** \> click your provider. In the settings, you can update a provider's configuration or delete the provider.

To update or delete providers programmatically, use an [Appwrite Server SDK](https://appwrite.io/docs/sdks#server).

```web-code server-nodejs line-numbers
const sdk = require('node-appwrite');

// Init SDK
const client = new sdk.Client();

const messaging = new sdk.Messaging(client);

client
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<PROJECT_ID>')                 // Your project ID
    .setKey('919c2d18fb5d4...a2ae413da83346ad2') // Your secret API key
;

const provider = await messaging.updateApnsProvider(
        '[PROVIDER_ID]',                         // providerId
        '[NAME]',                                // name (optional)
        false,                                   // enabled (optional)
        '[AUTH_KEY]',                            // authKey (optional)
        '[AUTH_KEY_ID]',                         // authKeyId (optional)
        '[TEAM_ID]',                             // teamId (optional)
        '[BUNDLE_ID]'                            // bundleId (optional)
    );

```

###### Recommended

- [API reference/Account](https://appwrite.io/docs/references/cloud/client-web/account)
- [API reference/Teams](https://appwrite.io/docs/references/cloud/client-web/teams)
- [API reference/Databases](https://appwrite.io/docs/references/cloud/client-web/databases)
- [API reference/Storage](https://appwrite.io/docs/references/cloud/client-web/storage)

## Open Source Support
[Skip to content](https://appwrite.io/docs/advanced/platform/oss#main)

[![appwrite](https://appwrite.io/images/logos/appwrite.svg)![appwrite](https://appwrite.io/images/logos/appwrite-light.svg)](https://appwrite.io/)

[Go to Console](https://cloud.appwrite.io/)

Appwrite remains open source and continues to support open-source maintainers that build fundamental software that modern developers depend upon with the OSS Program.

The OSS Program supports open-projects and their maintainers by alleviating financial burdens and promoting growth. You will receive a free Appwrite Pro subscription and benefit from all its resources and support.

The program has no fixed end date but will be reviewed annually to ensure optimal mutual support.

## [Criteria](https://appwrite.io/docs/advanced/platform/oss\#)

To apply for this program, you must adhere to the official criteria for having an open-source project, which is integral to being an acknowledged open-source maintainer. In addition, we have Appwrite criteria that will apply. You will need to provide the following information:

- Your project needs to meet the criteria of the [Open Source Initiative definition](https://opensource.org/osd/)

- Have obtained an approved [OSS license](https://opensource.org/licenses/)

- Have an open-source GitHub repository

- Have an active project that has at least 15 contributions and 100 stars

- Have a nonprofit or pre-revenue project


## [Application](https://appwrite.io/docs/advanced/platform/oss\#)

If your open-source project has outgrown our free Free plan and you adhere to the criteria, you can apply for a free Pro plan by filling out our [OSS contact form](https://appwrite.io/oss-program).

We will review your request as soon as possible and get back to you to go over your application. Please note that Appwrite holds the sole discretion on deciding whether to accept projects.

###### Recommended

- [API reference/Account](https://appwrite.io/docs/references/cloud/client-web/account)
- [API reference/Teams](https://appwrite.io/docs/references/cloud/client-web/teams)
- [API reference/Databases](https://appwrite.io/docs/references/cloud/client-web/databases)
- [API reference/Storage](https://appwrite.io/docs/references/cloud/client-web/storage)

## Appwrite DNS Management
[Skip to content](https://appwrite.io/docs/products/network/dns#main)

[![appwrite](https://appwrite.io/images/logos/appwrite.svg)![appwrite](https://appwrite.io/images/logos/appwrite-light.svg)](https://appwrite.io/)

[Go to Console](https://cloud.appwrite.io/)

Appwrite provides a dedicated DNS (Domain Name System) service through its appwrite.zone nameservers to help you manage domain records for your applications. This service is ideal for apex domains (root domains) that cannot use CNAME records due to DNS protocol limitations.

The DNS service enables you to configure custom domains for Sites, Functions, and APIs while providing automatic SSL certificate management and high availability. Whether you need to set up subdomains or apex domains, Appwrite's DNS service offers a complete solution.

## [Benefits](https://appwrite.io/docs/products/network/dns\#)

- **Support for apex domains**: Use root domains like example.com directly without workarounds

- **Automatic SSL certificate management**: All domains get valid SSL certificates automatically

- **Integrated management**: Simplified configuration for Sites, Functions, and APIs

- **High availability**: Built on reliable infrastructure with global distribution


## [Managing DNS records](https://appwrite.io/docs/products/network/dns\#)

You can manage DNS records for your domains in two places within the Appwrite Console:

### [Organization-level DNS management](https://appwrite.io/docs/products/network/dns\#)

To manage DNS records at the organization level:

1. Navigate to your organization in the Appwrite Console

2. Select the **Domains** tab

3. Here you can view and manage all your DNS records across different projects


This is the central place to manage domain records when you're using Appwrite's DNS service by configuring NS records to point to ns1.appwrite.zone and ns2.appwrite.zone.

### [Service-specific domain management](https://appwrite.io/docs/products/network/dns\#)

You can also manage domains directly from specific services:

- **Sites**: Navigate to a site and select the **Domains** tab

- **Functions**: Navigate to a function and select the **Domains** tab

- **API Endpoints**: Configure custom domains in your project settings under **Settings** \> **Custom domains**


## [Record types](https://appwrite.io/docs/products/network/dns\#)

Appwrite DNS supports various DNS record types to meet your domain configuration needs:

| Record Type | Description |
| --- | --- |
| A | Maps a domain to an IPv4 address |
| AAAA | Maps a domain to an IPv6 address |
| CNAME | Maps a domain to another domain (alias) |
| MX | Specifies mail servers for the domain |
| TXT | Stores text information (often used for verification) |
| NS | Specifies the nameservers for the domain |
| SRV | Specifies services available for a domain (used for Voice over IP, instant messaging, etc.) |
| CAA | Specifies which certificate authorities (CAs) are authorized to issue certificates for a domain |
| HTTPS | Provides configuration for HTTPS connections |
| ALIAS | Similar to CNAME but can be used at the zone apex |

## [Setting up apex domains](https://appwrite.io/docs/products/network/dns\#)

To use an apex domain (e.g., example.com) with Appwrite:

1. Navigate to your domain registrar's DNS settings

2. Find the NS (nameserver) record settings

3. Replace the existing nameservers with ns1.appwrite.zone and ns2.appwrite.zone

4. Wait for DNS propagation (may take up to 48 hours)

5. Return to Appwrite Console to verify and configure domain settings


##### DNS delegation

When you change your NS records to ns1.appwrite.zone and ns2.appwrite.zone, you're delegating complete DNS management to Appwrite. This means all existing DNS records (like email MX records) will need to be recreated in Appwrite's DNS configuration.

## [Adding records in Appwrite](https://appwrite.io/docs/products/network/dns\#)

After delegating your domain to Appwrite's DNS servers, you can add and manage records:

1. Navigate to your organization's **Domains** tab in the Appwrite Console

2. Find your domain and click **Manage Records**

3. Click **Add Record** and select the record type

4. Fill in the required information based on the record type

5. Save the record


##### Record propagation

New DNS records may take time to propagate across the internet. This process typically takes minutes but can sometimes take longer depending on various factors like DNS cache settings.

###### Recommended

- [API reference/Account](https://appwrite.io/docs/references/cloud/client-web/account)
- [API reference/Teams](https://appwrite.io/docs/references/cloud/client-web/teams)
- [API reference/Databases](https://appwrite.io/docs/references/cloud/client-web/databases)
- [API reference/Storage](https://appwrite.io/docs/references/cloud/client-web/storage)

## Appwrite Teams Management
[Skip to content](https://appwrite.io/docs/products/auth/teams#main)

[![appwrite](https://appwrite.io/images/logos/appwrite.svg)![appwrite](https://appwrite.io/images/logos/appwrite-light.svg)](https://appwrite.io/)

[Go to Console](https://cloud.appwrite.io/)

Teams are a good way to allow users to share access to resources. For example, in a todo app, a user can [create a team](https://appwrite.io/docs/references/cloud/client-web/teams#create) for one of their todo lists and [invite another user](https://appwrite.io/docs/references/cloud/client-web/teams#createMembership) to the team to grant the other user access. You can further give special rights to parts of a team using team roles.

The invited user can [accept the invitation](https://appwrite.io/docs/references/cloud/client-web/teams#updateMembershipStatus) to gain access. If the user's ever removed from the team, they'll lose access again.

[Learn about using Teams for multi-tenancy](https://appwrite.io/docs/products/auth/multi-tenancy)

## [Create team](https://appwrite.io/docs/products/auth/teams\#)

For example, we can create a team called teachers with roles maths, sciences, arts, and literature.

The creator of the team is also granted the owner role. **Only those with the owner role can invite and remove members**.

## [Invite a member](https://appwrite.io/docs/products/auth/teams\#)

You can invite members to a team by creating team memberships. For example, inviting "David" a math teacher, to the teachers team.

## [Using the CLI](https://appwrite.io/docs/products/auth/teams\#)

##### Before proceeding

Ensure you [**install**](https://appwrite.io/docs/tooling/command-line/installation#getting-started) the CLI, [**log in**](https://appwrite.io/docs/tooling/command-line/installation#login) to your Appwrite account, and [**initialize**](https://appwrite.io/docs/tooling/command-line/installation#initialization) your Appwrite project.

Use the CLI command appwrite teams create-membership \[options\] to invite a new member into your team.

```web-code sh line-numbers
appwrite teams create-membership --team-id "<TEAM_ID>" --roles --phone "+12065550100" --name "<NAME>" --user-id "<USER_ID>"

```

You can also get, update, and delete a user's membership. However, you cannot use the CLI to configure permissions for team members.

[Learn more about the CLI teams commands](https://appwrite.io/docs/tooling/command-line/teams#commands)

## [Permissions](https://appwrite.io/docs/products/auth/teams\#)

You can grant permissions to all members of a team using the Role.team(<TEAM\_ID>) role or individual roles in the team using the Role.team(<TEAM\_ID>, \[<ROLE\_1>, <ROLE\_2>, ...\]) role.

| Description | Role |
| --- | --- |
| All members | Role.team(<TEAM\_ID>) |
| Select roles | Role.team(<TEAM\_ID>, \[<ROLE\_1>, <ROLE\_2>, ...\]) |

[Learn more about permissions](https://appwrite.io/docs/advanced/platform/permissions)

## [Memberships privacy](https://appwrite.io/docs/products/auth/teams\#)

In certain use cases, your app may not need to share members' personal information with others. You can safeguard privacy by marking specific membership details as private. To configure this setting, navigate to **Auth** \> **Security** \> **Memberships privacy**

These details can be made private:

- userName \- The member's name

- userEmail \- The member's email address

- mfa \- Whether the member has enabled multi-factor authentication


###### Recommended

- [API reference/Account](https://appwrite.io/docs/references/cloud/client-web/account)
- [API reference/Teams](https://appwrite.io/docs/references/cloud/client-web/teams)
- [API reference/Databases](https://appwrite.io/docs/references/cloud/client-web/databases)
- [API reference/Storage](https://appwrite.io/docs/references/cloud/client-web/storage)

## Site Deployments Overview
[Skip to content](https://appwrite.io/docs/products/sites/deployments#main)

[![appwrite](https://appwrite.io/images/logos/appwrite.svg)![appwrite](https://appwrite.io/images/logos/appwrite-light.svg)](https://appwrite.io/)

[Go to Console](https://cloud.appwrite.io/)

Each site can have many deployments, which can be thought of as versions of the web application. Sites can be created and deployed using different methods to meet your unique development habits.

## [Deployment status](https://appwrite.io/docs/products/sites/deployments\#deployment-status)

Throughout the life cycle of a deployment, it can have any of the following status:

| Status | Description |
| --- | --- |
| active | The deployment is built and currently activated and ready to be accessed. A site can have one active deployment and the deployment must be active before being executed. |
| ready | A deployment is built, but is not activated. Any ready deployment can be activated to replace the current active deployment. A ready deployment can also be [previewed](https://appwrite.io/docs/products/sites/deployments#preview-deployments) by authorized members of your Appwrite organization before activation. |
| building | A deployment is being built. Check the [deployment logs](https://appwrite.io/docs/products/sites/deployments#deployment-logs) for more info. |
| processing | The creation of a site deployment has begun and has not finished. |
| waiting | The deployment is queued but has not been picked up for processing. |
| failed | A deployment was not successful. Check the [deployment logs](https://appwrite.io/docs/products/sites/deployments#deployment-logs) for more info for debugging. |

## [Deployment logs](https://appwrite.io/docs/products/sites/deployments\#deployment-logs)

When you build a deployment, the logs generated will be saved for debugging purposes. You can find these build logs by navigating to the **Deployments** tab of your site, clicking the three-dots menu beside a deployment, and clicking **Logs**.

![Deployment logs](https://appwrite.io/images/docs/sites/dark/deployment-logs.png)

![Deployment logs](https://appwrite.io/images/docs/sites/deployment-logs.png)

## [Create deployment](https://appwrite.io/docs/products/sites/deployments\#create-deployment)

To manually trigger a deployment of your app from the Appwrite Console, you can head to the **Deployments** tab of your site, click on the **Create deployment** button, and select one of the following:

- **Git**: Lets you select a branch on your connected Git repo and whether you would like to activate the build post-deployment

- **CLI**: Lets you run a [CLI command](https://appwrite.io/docs/products/sites/deploy-from-cli#cli) in your site's directory

- **Manual**: Lets you upload a [.tar.gz file](https://appwrite.io/docs/products/sites/deploy-manually#manual-deployment) containing your site's build output


![Create deployment](https://appwrite.io/images/docs/sites/dark/create-deployment.png)

![Create deployment](https://appwrite.io/images/docs/sites/create-deployment.png)

## [Cancel deployment](https://appwrite.io/docs/products/sites/deployments\#cancel-deployment)

If a site is being deployed and you wish to stop this deployment, you can head to the **Deployments** tab of your site, click on the three-dots menu, and click on the **Cancel** button.

![Cancel deployment](https://appwrite.io/images/docs/sites/dark/cancel-deployment.png)

![Cancel deployment](https://appwrite.io/images/docs/sites/cancel-deployment.png)

## [Update deployment](https://appwrite.io/docs/products/sites/deployments\#update-deployment)

Some site settings require redeploying your site to be reflected in your active deployment. When you update a site by changing its **Git repository**, **Build settings**, and **Environment variables**, you must redeploy your site before those changes take effect.

## [Redeploy](https://appwrite.io/docs/products/sites/deployments\#redeploy)

After updating the configuration, redeploy your site for changes to take effect. You can also redeploy to retry failed builds.

1. Navigate to your site on Appwrite Console.

2. Under the **Deployments** tab, find the status of the current active deployment.

3. Redeploy by clicking the triple-dots beside a deployment and hitting the **Redeploy** button.


![Redeploy](https://appwrite.io/images/docs/sites/dark/redeploy.png)

![Redeploy](https://appwrite.io/images/docs/sites/redeploy.png)

Redeployment behavior varies depending on how the initial deployment was created.

##### Benefits for Pro+ users

Users subscribed to the Appwrite Pro plan or above receive certain special benefits:

- [Express builds](https://appwrite.io/changelog/entry/2024-08-10) for quicker deployments, resulting in reduced wait times and smoother workflows

- Customizable [runtime specifications](https://appwrite.io/blog/post/introducing-new-compute-capabilities-appwrite-functions), allowing for tailored performance and resource allocation


###### Recommended

- [API reference/Account](https://appwrite.io/docs/references/cloud/client-web/account)
- [API reference/Teams](https://appwrite.io/docs/references/cloud/client-web/teams)
- [API reference/Databases](https://appwrite.io/docs/references/cloud/client-web/databases)
- [API reference/Storage](https://appwrite.io/docs/references/cloud/client-web/storage)

## Storage Buckets Overview
[Skip to content](https://appwrite.io/docs/products/storage/buckets#main)

[![appwrite](https://appwrite.io/images/logos/appwrite.svg)![appwrite](https://appwrite.io/images/logos/appwrite-light.svg)](https://appwrite.io/)

[Go to Console](https://cloud.appwrite.io/)

Storage buckets are a group of files, similar to collections in Appwrite Databases. Buckets let you limit file size and extensions, whether or not to encrypt the files, and more.

## [Create Bucket](https://appwrite.io/docs/products/storage/buckets\#create-bucket)

You can create your bucket from the Appwrite Console, a [Server SDK](https://appwrite.io/docs/sdks#server), or the [CLI](https://appwrite.io/docs/tooling/command-line/buckets).

ConsoleServer SDKCLI

ConsoleServer SDK
More

You can create a bucket by heading to the **Storage** page and clicking **Create bucket**.

![Create bucket on console](https://appwrite.io/images/docs/storage/dark/create-bucket.png)

![Create bucket on console](https://appwrite.io/images/docs/storage/create-bucket.png)

You can also create collections programmatically using a [Server SDK](https://appwrite.io/docs/sdks#server). Appwrite [Server SDKs](https://appwrite.io/docs/sdks#server) require an [API key](https://appwrite.io/docs/advanced/platform/api-keys).

```web-code server-nodejs line-numbers
const sdk = require('node-appwrite');

// Init SDK
const client = new sdk.Client();

const storage = new sdk.Storage(client);

client
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<PROJECT_ID>') // Your project ID
    .setKey('919c2d18fb5d4...a2ae413da83346ad2') // Your secret API key
;

const promise = storage.createBucket('[BUCKET_ID]', '[NAME]');

promise.then(function (response) {
    console.log(response);
}, function (error) {
    console.log(error);
});

```

You can also configure permission, file size and extension restrictions, and more in the createBucket method, learn more about the createBucket in the [API references](https://appwrite.io/docs/references/cloud/server-nodejs/storage#createBucket).

Create a bucket using the CLI command appwrite init buckets.

```web-code sh line-numbers
appwrite init buckets

```

This will initialize your bucket in your appwrite.json file. To push your initialized bucket, use the appwrite push buckets.

```web-code sh line-numbers
appwrite push buckets

```

This will create your bucket in the Console with all of your appwrite.json configurations.

[Learn more about the CLI buckets commands](https://appwrite.io/docs/tooling/command-line/buckets#commands)

## [Permissions](https://appwrite.io/docs/products/storage/buckets\#permissions)

Appwrite uses permissions to control file access. For security, only users that are granted permissions can access a file. This helps prevent accidental data leaks by forcing you to make more concious decisions around permissions.

By default, Appwrite doesn't grants permissions to any users when a new bucket is created. This means users can't create new files or read, update, and delete existing files.

[Learn about configuring permissions](https://appwrite.io/docs/products/storage/permissions).

## [Encryption](https://appwrite.io/docs/products/storage/buckets\#encryption)

Appwrite provides added security settings for your buckets. Enable encryption under your bucket's **Settings** \> **Security settings**. You can enable encryption to encrypt files in your buckets. If your files are leaked, encrypted files cannot be read by the malicious actor. Files bigger than 20MB cannot be encrypted.

## [Compression](https://appwrite.io/docs/products/storage/buckets\#compression)

Appwrite allows you to compress your files. Two algorithms are available, which are [gzip](https://www.gzip.org/) and [zstd](https://github.com/facebook/zstd). You can enable compress under your bucket's **Settings** \> **Compression**. For files larger than 20MB, compression will be skipped even when enabled.

## [Maximum file size](https://appwrite.io/docs/products/storage/buckets\#max-size)

Limit the maximum file size allowed in the bucket to prevent abuse. You can configure maximum file size under your bucket's **Settings** \> **Maximum file size**.

## [File extensions](https://appwrite.io/docs/products/storage/buckets\#extensions)

Limit the file extensions allowed in the bucket to prevent abuse. A maximum of 100 file extensions can be added. Leave blank to allow all file types. You can configure maximum file size under your bucket's **Settings** \> **File extensions**.

###### Recommended

- [API reference/Account](https://appwrite.io/docs/references/cloud/client-web/account)
- [API reference/Teams](https://appwrite.io/docs/references/cloud/client-web/teams)
- [API reference/Databases](https://appwrite.io/docs/references/cloud/client-web/databases)
- [API reference/Storage](https://appwrite.io/docs/references/cloud/client-web/storage)

## Appwrite Webhooks Guide
[Skip to content](https://appwrite.io/docs/advanced/platform/webhooks#main)

[![appwrite](https://appwrite.io/images/logos/appwrite.svg)![appwrite](https://appwrite.io/images/logos/appwrite-light.svg)](https://appwrite.io/)

[Go to Console](https://cloud.appwrite.io/)

Webhooks allow you to build or set up integrations which subscribe to certain events on Appwrite. When one of those events is triggered, we'll send an HTTP POST payload to the webhook's configured URL. Webhooks can be used to purge cache from CDN, calculate data or send a Slack notification. You're only limited by your imagination.

## [Getting started](https://appwrite.io/docs/advanced/platform/webhooks\#getting-started)

You can set your webhook by adding it from your Appwrite project dashboard. You can access your webhooks settings from your project dashboard or on the left navigation panel. Click the 'Add Webhook' button and choose your webhook name and the events that should trigger it. You can also set an optional basic HTTP authentication username and password to protect your endpoint from unauthorized access.

## [Payload](https://appwrite.io/docs/advanced/platform/webhooks\#payload)

Each event type has a specific payload format with the relevant event information. All event payloads mirror the payloads for the API payload which parallel to the [event types](https://appwrite.io/docs/advanced/platform/events).

## [Headers](https://appwrite.io/docs/advanced/platform/webhooks\#headers)

HTTP requests made to your webhook's configured URL endpoint will contain several special headers.

| Header | Description |
| --- | --- |
| X-Appwrite-Webhook-Id | The ID of the Webhook who triggered the event. |
| X-Appwrite-Webhook-Events | Names of the events that triggered this delivery. |
| X-Appwrite-Webhook-Name | Name of the webhook as specified in your app settings and [events list](https://appwrite.io/docs/advanced/platform/events). |
| X-Appwrite-Webhook-User-Id | The user ID of the user who triggered the event. Returns an empty string if an API key triggered the event. Note that events like account.create or account.sessions.create are performed by guest users and will not return any user ID. If you still need the user ID for these events, you can find it in the event payload. |
| X-Appwrite-Webhook-Project-Id | The ID of the project who owns the Webhook and API call. |
| X-Appwrite-Webhook-Signature | The HMAC-SHA1 signature of the payload. This is used to verify the authenticity of the payload. |
| User-Agent | Each request made by Appwrite will be 'Appwrite-Server'. |

## [Verification](https://appwrite.io/docs/advanced/platform/webhooks\#verification)

Webhooks can be verified by using the [X-Appwrite-Webhook-Signature](https://appwrite.io/docs/advanced/platform/webhooks#headers) header. This is the HMAC-SHA1 signature of the payload. You can find the signature key in your webhooks properties in the dashboard. To generate this hash you append the payload to the end of webhook URL (make sure there are no spaces in between) and then use the HMAC-SHA1 algorithm to generate the signature. After you've generated the signature, compare it to the X-Appwrite-Webhook-Signature header value. If they match, the payload is valid and you can trust it came from your Appwrite instance.

## [Events](https://appwrite.io/docs/advanced/platform/webhooks\#events)

Appwrite has events that fire when a resource changes. These events cover all Appwrite resources and can reflect create, update, and delete actions. You can specify one or many events to subscribe to with webhooks.

- Authentication events












| Name | Description |
| --- | --- |
| teams.\* | This event triggers on any teams event. Returns [Team Object](https://appwrite.io/docs/references/cloud/models/team) |
| teams.\*.create | This event triggers when a team is created. Returns [Team Object](https://appwrite.io/docs/references/cloud/models/team) |
| teams.\*.delete | This event triggers when a team is deleted. Returns [Team Object](https://appwrite.io/docs/references/cloud/models/team) |
| teams.\*.memberships.\* | This event triggers on any team memberships event. Returns [Membership Object](https://appwrite.io/docs/references/cloud/models/membership) |
| teams.\*.memberships.\*.create | This event triggers when a membership is created. Returns [Membership Object](https://appwrite.io/docs/references/cloud/models/membership) |
| teams.\*.memberships.\*.delete | This event triggers when a membership is deleted. Returns [Membership Object](https://appwrite.io/docs/references/cloud/models/membership) |
| teams.\*.memberships.\*.update | This event triggers when a membership is updated. Returns [Membership Object](https://appwrite.io/docs/references/cloud/models/membership) |
| teams.\*.memberships.\*.update.status | This event triggers when a team memberships status is updated. Returns [Membership Object](https://appwrite.io/docs/references/cloud/models/membership) |
| teams.\*.update | This event triggers when a team is updated. Returns [Team Object](https://appwrite.io/docs/references/cloud/models/team) |
| teams.\*.update.prefs | This event triggers when a team's preferences are updated. Returns [Team Object](https://appwrite.io/docs/references/cloud/models/team) |
| users.\* | This event triggers on any user's event. Returns [User Object](https://appwrite.io/docs/references/cloud/models/user) |
| users.\*.create | This event triggers when a user is created. Returns [User Object](https://appwrite.io/docs/references/cloud/models/user) |
| users.\*.delete | This event triggers when a user is deleted. Returns [User Object](https://appwrite.io/docs/references/cloud/models/user) |
| users.\*.recovery.\* | This event triggers on any user's recovery token event. Returns [Token Object](https://appwrite.io/docs/references/cloud/models/token) |
| users.\*.recovery.\*.create | This event triggers when a recovery token for a user is created. Returns [Token Object](https://appwrite.io/docs/references/cloud/models/token) |
| users.\*.recovery.\*.update | This event triggers when a recovery token for a user is validated. Returns [Token Object](https://appwrite.io/docs/references/cloud/models/token) |
| users.\*.sessions.\* | This event triggers on any user's sessions event. Returns [Session Object](https://appwrite.io/docs/references/cloud/models/session) |
| users.\*.sessions.\*.create | This event triggers when a session for a user is created. Returns [Session Object](https://appwrite.io/docs/references/cloud/models/session) |
| users.\*.sessions.\*.delete | This event triggers when a session for a user is deleted. Returns [Session Object](https://appwrite.io/docs/references/cloud/models/session) |
| users.\*.update | This event triggers when a user is updated. Returns [User Object](https://appwrite.io/docs/references/cloud/models/user) |
| users.\*.update.email | This event triggers when a user's email address is updated. Returns [User Object](https://appwrite.io/docs/references/cloud/models/user) |
| users.\*.update.name | This event triggers when a user's name is updated. Returns [User Object](https://appwrite.io/docs/references/cloud/models/user) |
| users.\*.update.password | This event triggers when a user's password is updated. Returns [User Object](https://appwrite.io/docs/references/cloud/models/user) |
| users.\*.update.prefs | This event triggers when a user's preferences is updated. Returns [User Object](https://appwrite.io/docs/references/cloud/models/user) |
| users.\*.update.status | This event triggers when a user's status is updated. Returns [User Object](https://appwrite.io/docs/references/cloud/models/user) |
| users.\*.verification.\* | This event triggers on any user's verification token event. Returns [Token Object](https://appwrite.io/docs/references/cloud/models/token) |
| users.\*.verification.\*.create | This event triggers when a verification token for a user is created. Returns [Token Object](https://appwrite.io/docs/references/cloud/models/token) |
| users.\*.verification.\*.update | This event triggers when a verification token for a user is validated. Returns [Token Object](https://appwrite.io/docs/references/cloud/models/token) |

- Databases events












| Name | Description |
| --- | --- |
| databases.\* | This event triggers on any database event. Returns [Database Object](https://appwrite.io/docs/references/cloud/models/database) |
| databases.\*.collections.\* | This event triggers on any collection event. Returns [Collection Object](https://appwrite.io/docs/references/cloud/models/collection) |
| databases.\*.collections.\*.attributes.\* | This event triggers on any attributes event. Returns [Attribute Object](https://appwrite.io/docs/references/cloud/models/attributeList) |
| databases.\*.collections.\*.attributes.\*.create | This event triggers when an attribute is created. Returns [Attribute Object](https://appwrite.io/docs/references/cloud/models/attributeList) |
| databases.\*.collections.\*.attributes.\*.delete | This event triggers when an attribute is deleted. Returns [Attribute Object](https://appwrite.io/docs/references/cloud/models/attributeList) |
| databases.\*.collections.\*.create | This event triggers when a collection is created. Returns [Collection Object](https://appwrite.io/docs/references/cloud/models/collection) |
| databases.\*.collections.\*.delete | This event triggers when a collection is deleted. Returns [Collection Object](https://appwrite.io/docs/references/cloud/models/collection) |
| databases.\*.collections.\*.documents.\* | This event triggers on any documents event. Returns [Document Object](https://appwrite.io/docs/references/cloud/models/document) |
| databases.\*.collections.\*.documents.\*.create | This event triggers when a document is created. Returns [Document Object](https://appwrite.io/docs/references/cloud/models/document) |
| databases.\*.collections.\*.documents.\*.delete | This event triggers when a document is deleted. Returns [Document Object](https://appwrite.io/docs/references/cloud/models/document) |
| databases.\*.collections.\*.documents.\*.update | This event triggers when a document is updated. Returns [Document Object](https://appwrite.io/docs/references/cloud/models/document) |
| databases.\*.collections.\*.indexes.\* | This event triggers on any indexes event. Returns [Index Object](https://appwrite.io/docs/references/cloud/models/index) |
| databases.\*.collections.\*.indexes.\*.create | This event triggers when an index is created. Returns [Index Object](https://appwrite.io/docs/references/cloud/models/index) |
| databases.\*.collections.\*.indexes.\*.delete | This event triggers when an index is deleted. Returns [Index Object](https://appwrite.io/docs/references/cloud/models/index) |
| databases.\*.collections.\*.update | This event triggers when a collection is updated. Returns [Collection Object](https://appwrite.io/docs/references/cloud/models/collection) |
| databases.\*.create | This event triggers when a database is created. Returns [Database Object](https://appwrite.io/docs/references/cloud/models/database) |
| databases.\*.delete | This event triggers when a database is deleted. Returns [Database Object](https://appwrite.io/docs/references/cloud/models/database) |
| databases.\*.update | This event triggers when a database is updated. Returns [Database Object](https://appwrite.io/docs/references/cloud/models/database) |

- Storage events












| Name | Description |
| --- | --- |
| buckets.\* | This event triggers on any buckets event. Returns [Bucket Object](https://appwrite.io/docs/references/cloud/models/bucket) |
| buckets.\*.create | This event triggers when a bucket is created. Returns [Bucket Object](https://appwrite.io/docs/references/cloud/models/bucket) |
| buckets.\*.delete | This event triggers when a bucket is deleted. Returns [Bucket Object](https://appwrite.io/docs/references/cloud/models/bucket) |
| buckets.\*.files.\* | This event triggers on any files event. Returns [File Object](https://appwrite.io/docs/references/cloud/models/file) |
| buckets.\*.files.\*.create | Since the Appwrite SDK chunks files in 5MB increments, this event will trigger for each 5MB chunk. A file is fully uploaded when chunksTotal equals chunksUploaded. Returns [File Object](https://appwrite.io/docs/references/cloud/models/file) |
| buckets.\*.files.\*.delete | This event triggers when a file is deleted. Returns [File Object](https://appwrite.io/docs/references/cloud/models/file) |
| buckets.\*.files.\*.update | This event triggers when a file is updated. Returns [File Object](https://appwrite.io/docs/references/cloud/models/file) |
| buckets.\*.update | This event triggers when a bucket is updated. Returns [Bucket Object](https://appwrite.io/docs/references/cloud/models/bucket) |

- Functions events












| Name | Description |
| --- | --- |
| functions.\* | This event triggers on any functions event. Returns [Function Object](https://appwrite.io/docs/references/cloud/models/function) |
| functions.\*.create | This event triggers when a function is created. Returns [Function Object](https://appwrite.io/docs/references/cloud/models/function) |
| functions.\*.delete | This event triggers when a function is deleted. Returns [Function Object](https://appwrite.io/docs/references/cloud/models/function) |
| functions.\*.deployments.\* | This event triggers on any deployments event. Returns [Deployment Object](https://appwrite.io/docs/references/cloud/models/deployment) |
| functions.\*.deployments.\*.create | This event triggers when a deployment is created. Returns [Deployment Object](https://appwrite.io/docs/references/cloud/models/deployment) |
| functions.\*.deployments.\*.delete | This event triggers when a deployment is deleted. Returns [Deployment Object](https://appwrite.io/docs/references/cloud/models/deployment) |
| functions.\*.deployments.\*.update | This event triggers when a deployment is updated. Returns [Deployment Object](https://appwrite.io/docs/references/cloud/models/deployment) |
| functions.\*.executions.\* | This event triggers on any executions event. Returns [Execution Object](https://appwrite.io/docs/references/cloud/models/execution) |
| functions.\*.executions.\*.create | This event triggers when an execution is created. Returns [Execution Object](https://appwrite.io/docs/references/cloud/models/execution) |
| functions.\*.executions.\*.delete | This event triggers when an execution is deleted. Returns [Execution Object](https://appwrite.io/docs/references/cloud/models/execution) |
| functions.\*.executions.\*.update | This event triggers when an execution is updated. Returns [Execution Object](https://appwrite.io/docs/references/cloud/models/execution) |
| functions.\*.update | This event triggers when a function is updated. Returns [Function Object](https://appwrite.io/docs/references/cloud/models/function) |

- Messaging events












| Name | Description |
| --- | --- |
| providers.\* | This event triggers on any providers event. Returns [Provider Object](https://appwrite.io/docs/references/cloud/models/provider) |
| providers.\*.create | This event triggers when a provider is created. Returns [Provider Object](https://appwrite.io/docs/references/cloud/models/provider) |
| providers.\*.delete | This event triggers when a provider is deleted. Returns [Provider Object](https://appwrite.io/docs/references/cloud/models/provider) |
| providers.\*.update | This event triggers when a provider is updated. Returns [Provider Object](https://appwrite.io/docs/references/cloud/models/provider) |
| topics.\* | This event triggers on any topic event. Returns [Topic Object](https://appwrite.io/docs/references/cloud/models/topic) |
| topics.\*.create | This event triggers when a topic is created. Returns [Topic Object](https://appwrite.io/docs/references/cloud/models/topic) |
| topics.\*.delete | This event triggers when a topic is deleted. Returns [Topic Object](https://appwrite.io/docs/references/cloud/models/topic) |
| topics.\*.update | This event triggers when a topic is updated. Returns [Topic Object](https://appwrite.io/docs/references/cloud/models/topic) |
| topics.\*.subscribers.\*.create | This event triggers when a subscriber to a topic is created. Returns [Topic Object](https://appwrite.io/docs/references/cloud/models/topic) |
| topics.\*.subscribers.\*.delete | This event triggers when a subscriber to a topic is deleted. Returns [Topic Object](https://appwrite.io/docs/references/cloud/models/topic) |
| messages.\* | This event triggers on any message event. Returns [Message Object](https://appwrite.io/docs/references/cloud/models/message) |
| messages.\*.create | This event triggers when a message is created. Returns [Message Object](https://appwrite.io/docs/references/cloud/models/message) |
| messages.\*.delete | This event triggers when a message is deleted. Returns [Message Object](https://appwrite.io/docs/references/cloud/models/message) |
| messages.\*.update | This event triggers when a message is updated. Returns [Message Object](https://appwrite.io/docs/references/cloud/models/message) |


[Learn more about events](https://appwrite.io/docs/advanced/platform/api-keys)

###### Recommended

- [API reference/Account](https://appwrite.io/docs/references/cloud/client-web/account)
- [API reference/Teams](https://appwrite.io/docs/references/cloud/client-web/teams)
- [API reference/Databases](https://appwrite.io/docs/references/cloud/client-web/databases)
- [API reference/Storage](https://appwrite.io/docs/references/cloud/client-web/storage)

## Appwrite Databases Guide
[Skip to content](https://appwrite.io/docs/products/databases/databases#main)

[![appwrite](https://appwrite.io/images/logos/appwrite.svg)![appwrite](https://appwrite.io/images/logos/appwrite-light.svg)](https://appwrite.io/)

[Go to Console](https://cloud.appwrite.io/)

Databases are the largest organizational unit in Appwrite. Each database contains a group of [collections](https://appwrite.io/docs/products/databases/collections). In future versions, different databases may be backed by a different database technology of your choosing.

## [Create in Console](https://appwrite.io/docs/products/databases/databases\#create-in-console)

The easiest way to create a database using the Appwrite Console. You can create a database by navigating to the **Databases** page and clicking **Create database**.

## [Create using Server SDKs](https://appwrite.io/docs/products/databases/databases\#create-using-server-sdks)

You can programmatically create databases using a [Server SDK](https://appwrite.io/docs/sdks#server). Appwrite [Server SDKs](https://appwrite.io/docs/sdks#server) require an [API key](https://appwrite.io/docs/advanced/platform/api-keys).

```web-code server-nodejs line-numbers
const sdk = require('node-appwrite');

// Init SDK
const client = new sdk.Client();

const databases = new sdk.Databases(client);

client
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<PROJECT_ID>') // Your project ID
    .setKey('919c2d18fb5d4...a2ae413da83346ad2') // Your secret API key
;

const promise = databases.create('<DATABASE_ID>', '[NAME]');

promise.then(function (response) {
    console.log(response);
}, function (error) {
    console.log(error);
});

```

###### Recommended

- [API reference/Account](https://appwrite.io/docs/references/cloud/client-web/account)
- [API reference/Teams](https://appwrite.io/docs/references/cloud/client-web/teams)
- [API reference/Databases](https://appwrite.io/docs/references/cloud/client-web/databases)
- [API reference/Storage](https://appwrite.io/docs/references/cloud/client-web/storage)

## Offline Data Sync
[Skip to content](https://appwrite.io/docs/products/databases/offline#main)

[![appwrite](https://appwrite.io/images/logos/appwrite.svg)![appwrite](https://appwrite.io/images/logos/appwrite-light.svg)](https://appwrite.io/)

[Go to Console](https://cloud.appwrite.io/)

Offline synchronization (or offline sync) is a mechanism that allows apps to store and update data locally when a user is offline (i.e., loses internet connectivity), and then synchronize that data with an Appwrite database once the user is back online.

This capability is crucial for building resilient and responsive applications, especially in environments with unreliable or intermittent internet connectivity. Suppose you are driving from one city to another and lose internet connectivitity while passing through a rural area, locally-downloaded maps in your GPS app would ensure that you do not get lost. Another example could be that you are waiting in queue at a supermarket and there is a network outage; an offline-synchronized databases with inventory data would prevent the point-of-sale (POS) systems from failing, ensuring you and your fellow customers can buy groceries.

Some real-world scenarios where offline sync is useful are:

- Journaling and note-taking apps

- Warehouse inventory management systems

- Medical data entry tools

- Airline check-in management apps

- GPS navigation software


## [Integrate offline sync in your apps](https://appwrite.io/docs/products/databases/offline\#integrate-offline-sync-in-your-apps)

## [How does offline sync work?](https://appwrite.io/docs/products/databases/offline\#how-does-offline-sync-work)

The process of implementing offline sync in Appwrite-powered apps (and in general) is as follows:

1. **Local data storage:** When a user opens your app, the app downloads relevant data from the server and saves it locally on their device via local-first data stores like IndexedDB, LocalStorage, SQLite, or RxDB.

2. **Working offline**: While offline, users can either read previously synced data or make changes (create, update, or delete data) in the local data store.

3. **Detecting connectivity**: The app monitors network status. As soon as connectivity is restored, a sync operation is triggered between the local data store and the Appwrite database.

4. **Two-way synchronization**: Local changes are _"pushed"_ to the Appwrite database and new changes from the database are _"pulled"_ into the local store. This process is called **push-pull replication**.

5. **Conflict resolution**: If the same data was changed both locally and on the server, the system must prioritise one of the two operations. Various strategies can be implemented to mitigate this issue, such as _last write wins_ or _manual user conflict resolution_.


###### Recommended

- [API reference/Account](https://appwrite.io/docs/references/cloud/client-web/account)
- [API reference/Teams](https://appwrite.io/docs/references/cloud/client-web/teams)
- [API reference/Databases](https://appwrite.io/docs/references/cloud/client-web/databases)
- [API reference/Storage](https://appwrite.io/docs/references/cloud/client-web/storage)

## React Appwrite Setup
[Skip to content](https://appwrite.io/docs/quick-starts/react#main)

[![appwrite](https://appwrite.io/images/logos/appwrite.svg)![appwrite](https://appwrite.io/images/logos/appwrite-light.svg)](https://appwrite.io/)

[Go to Console](https://cloud.appwrite.io/)

Learn how to setup your first React project powered by Appwrite.

Head to the [Appwrite Console](https://cloud.appwrite.io/console).

![Create project screen](https://appwrite.io/images/docs/quick-starts/dark/create-project.png)

![Create project screen](https://appwrite.io/images/docs/quick-starts/create-project.png)

If this is your first time using Appwrite, create an account and create your first project.

Then, under **Add a platform**, add a **Web app**. The **Hostname** should be localhost.

![Add a platform](https://appwrite.io/images/docs/quick-starts/dark/add-platform.png)

![Add a platform](https://appwrite.io/images/docs/quick-starts/add-platform.png)

You can skip optional steps.

Create a Vite project.

```web-code sh line-numbers
npm create vite@latest my-app -- --template react && cd my-app

```

Install the JavaScript Appwrite SDK.

```web-code sh line-numbers
npm install appwrite@18.1.1

```

Find your project's ID in the **Settings** page.

![Project settings screen](https://appwrite.io/images/docs/quick-starts/dark/project-id.png)

![Project settings screen](https://appwrite.io/images/docs/quick-starts/project-id.png)

Create a new file src/lib/appwrite.js and add the following code to it, replace <PROJECT\_ID> with your project ID.

```web-code client-web line-numbers
import { Client, Account} from 'appwrite';

export const client = new Client();

client
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1')
    .setProject('<PROJECT_ID>'); // Replace with your project ID

export const account = new Account(client);
export { ID } from 'appwrite';

```

Add the following code to src/App.jsx.

```web-code js line-numbers
import React, { useState } from 'react';
import { account, ID } from './lib/appwrite';

const App = () => {
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  async function login(email, password) {
    await account.createEmailPasswordSession(email, password);
    setLoggedInUser(await account.get());
  }

  return (
    <div>
      <p>
        {loggedInUser ? `Logged in as ${loggedInUser.name}` : 'Not logged in'}
      </p>

      <form>
        <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
        <input type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)} />

        <button type="button" onClick={() => login(email, password)}>
          Login
        </button>

        <button
          type="button"
          onClick={async () => {
            await account.create(ID.unique(), email, password, name);
            login(email, password);
          }}
        >
          Register
        </button>

        <button
          type="button"
          onClick={async () => {
            await account.deleteSession('current');
            setLoggedInUser(null);
          }}
        >
          Logout
        </button>
      </form>
    </div>
  );
};

export default App;

```

Run your project with npm run dev -- --open --port 3000 and open [Localhost on Port 3000](http://localhost:3000/) in your browser.

###### Recommended

- [API reference/Account](https://appwrite.io/docs/references/cloud/client-web/account)
- [API reference/Teams](https://appwrite.io/docs/references/cloud/client-web/teams)
- [API reference/Databases](https://appwrite.io/docs/references/cloud/client-web/databases)
- [API reference/Storage](https://appwrite.io/docs/references/cloud/client-web/storage)

## Appwrite Functions Examples
[Skip to content](https://appwrite.io/docs/products/functions/examples#main)

[![appwrite](https://appwrite.io/images/logos/appwrite.svg)![appwrite](https://appwrite.io/images/logos/appwrite-light.svg)](https://appwrite.io/)

[Go to Console](https://cloud.appwrite.io/)

Appwrite Functions is all about flexibility. Behind the simple workflow hides some useful examples that can help you accomplish your goals faster. Take a look at the following.

Here's a currency conversion API that converts from Euros and Indian Rupees to US Dollars. We'll use an external API to get the latest exchange rates and query it using a dependency specific to each runtime.

### [Prerequisites](https://appwrite.io/docs/products/functions/examples\#)

Run the following bash command to create a package.json file. This file is used to manage your Node.js project's dependencies.

```web-code bash line-numbers
npm init -y

```

Install the undici library. This library includes a fetch function that you can use to make HTTP requests.

```web-code bash line-numbers
npm install undici

```

Finally, add npm install to your function's build commands in the Appwrite Console.

Run the following bash command to create a composer.json file. This file is used to manage your PHP project's dependencies.

```web-code bash line-numbers
composer init -y

```

Install the guzzlehttp/guzzle library. This library includes a get function that you can use to make HTTP requests.

```web-code bash line-numbers
composer require guzzlehttp/guzzle

```

Finally, add composer install to your function's build commands in the Appwrite Console.

Run the following bash command to create a requirements.txt file. This file is used to manage your Python project's dependencies.

```web-code bash line-numbers
touch requirements.txt

```

Install the requests library. This library includes a get function that you can use to make HTTP requests.

```web-code bash line-numbers
echo "requests" >> requirements.txt
pip install -r requirements.txt

```

Finally, add pip install -r requirements.txt to your function's build commands in the Appwrite Console.

Create a pubspec.yaml file with the following contents. This file is used to manage your Dart project's dependencies.

```web-code yaml line-numbers
name: appwrite_function
description: Appwrite Function
version: 1.0.0
environment:
  sdk: '>=2.12.0 <3.0.0'

```

Install the http library. This library includes a get function that you can use to make HTTP requests.

```web-code bash line-numbers
pub install http

```

Finally, add pub get to your function's build commands in the Appwrite Console.

Create a Gemfile file with the following contents. This file is used to manage your Ruby project's dependencies.

```web-code ruby line-numbers
source 'https://rubygems.org'

```

Install the httparty library. This library includes a get function that you can use to make HTTP requests.

```web-code bash line-numbers
echo "gem 'httparty'" >> Gemfile
bundle install

```

Finally, add bundle install to your function's build commands in the Appwrite Console.

### [Code](https://appwrite.io/docs/products/functions/examples\#)

Here's a simple voting system that allows users to vote on various topics. Appwrite Functions and the server SDK are used to enforce voting rules and prevent multiple votes from the same user for a single topic.

### [Prerequisites](https://appwrite.io/docs/products/functions/examples\#)

Create a Topics collection with the following attributes:

| Name | Type | Description |
| --- | --- | --- |
| title | string | The name of the topic |
| description | string | Long form description of the topic |

Create a Votes collection with the following attributes:

| Name | Type | Description |
| --- | --- | --- |
| userId | string | The ID of the user who cast the vote |
| topicId | string | The ID of the topic that was voted on |
| vote | string | The vote cast by the user. Must be either "yes" or "no" |

### [Code](https://appwrite.io/docs/products/functions/examples\#)

Use the function by navigating to the function URL in the browser. The URL should contain the required parameters. For example, <YOUR\_FUNCTION\_URL>/?userId=<USER\_ID>&topicId=<TOPIC\_ID>&vote=yes to cast a vote.

Here's a simple form page that handles form submissions, and can be used to store a user's message in a collection. The form is submitted to the function using the POST method and the form data is sent as a URL-encoded string in the request body.

### [Prerequisites](https://appwrite.io/docs/products/functions/examples\#)

Create a Messages collection with the following attributes:

| Name | Type | Description |
| --- | --- | --- |
| name | string | The name of the message author |
| email | string | The email of the message author |
| content | string | The content of the message |

### [Code](https://appwrite.io/docs/products/functions/examples\#)

Use the function by navigating to the function URL in the browser. Submit the form to store the message in the collection.

###### Recommended

- [API reference/Account](https://appwrite.io/docs/references/cloud/client-web/account)
- [API reference/Teams](https://appwrite.io/docs/references/cloud/client-web/teams)
- [API reference/Databases](https://appwrite.io/docs/references/cloud/client-web/databases)
- [API reference/Storage](https://appwrite.io/docs/references/cloud/client-web/storage)

## Appwrite Domain Management
[Skip to content](https://appwrite.io/docs/products/sites/domains#main)

[![appwrite](https://appwrite.io/images/logos/appwrite.svg)![appwrite](https://appwrite.io/images/logos/appwrite-light.svg)](https://appwrite.io/)

[Go to Console](https://cloud.appwrite.io/)

Each deployed site can have its own domain, which can be Appwrite-generated or custom. You can use this domain to consume web apps deployed on Appwrite Sites. Appwrite generates TLS certificates to enforce HTTPS on all Appwrite Sites domains. These domains are safe to use and access in production.

[Learn about Sites development >](https://appwrite.io/docs/products/sites/develop)

## [Generated domains](https://appwrite.io/docs/products/sites/domains\#generated-domains)

Each site automatically receives a unique Appwrite-generated domain that's ready to use immediately.

1. In the Appwrite Console's sidebar, click **Sites**.

2. Under the **Domains** tab, you'll find the domain generated by Appwrite.


The domain usually has this format:

```web-code bash line-numbers
https://64d4d22db370ae41a32e.appwrite.network

```

### [Branch and Commit URLs](https://appwrite.io/docs/products/sites/domains\#branch-and-commit-urls)

Additional to the site URL, Appwrite also generates a URL for the branch and commit that your site has been deployed from. The branch URL will remain consistent for all deployments made for code pushed to a specific branch, whereas the commit URL will be updated every time a new deployment is made via the Git integration (i.e. when code is pushed to your repo).

![Branch and commit URLs](https://appwrite.io/images/docs/sites/dark/branch-commit-urls.png)

![Branch and commit URLs](https://appwrite.io/images/docs/sites/branch-commit-urls.png)

To find the branch and commit URLs of any deployment, follow these steps:

1. Navigate to your site on Appwrite Console.

2. Head to the **Deployments** tab and click on any deployment.

3. In the **Domains** section, click on the **+2** next to the mentioned domain.


## [Add a custom domain](https://appwrite.io/docs/products/sites/domains\#add-a-custom-domain)

You can add your own domain to your Appwrite site to provide a branded experience for your users. There are two ways to add a custom domain, depending on whether you're using a subdomain or an apex domain.

### [Add an apex domain with NS records](https://appwrite.io/docs/products/sites/domains\#add-an-apex-domain-with-ns-records)

Apex domains (also known as root domains) are domains without a subdomain prefix, like example.com instead of www.example.com. Unlike subdomains, apex domains cannot use CNAME records due to DNS protocol limitations.

To add an apex domain:

1. Navigate to your site in the Appwrite Console.

2. Head to the **Domains** tab and click on **Add domain**.

3. Enter your apex domain (e.g., example.com).

4. Select the appropriate domain rule type (Active deployment, Git branch, or Redirect) and configure its settings. See the [Domain rule types](https://appwrite.io/docs/products/sites/domains#domain-rule-types) section for details.

5. Appwrite will provide NS record information.

6. Go to your domain registrar and update the NS records for your domain to point to ns1.appwrite.zone and ns2.appwrite.zone.

7. Return to the Appwrite Console and wait for the verification process to complete.


DNS changes can take up to 48 hours to fully propagate across the internet. During this time, your domain might not be accessible or might show inconsistent behavior.

Using Appwrite's DNS servers for your apex domain provides several benefits:

- Proper SSL certificate management

- Automatic DNS configuration

- Secure and reliable DNS resolution


When you change your domain's NS records, you're delegating DNS management to Appwrite. This means any existing DNS records (like MX records for email) will need to be recreated in Appwrite's DNS configuration.

##### Note on A records

Appwrite uses a global CDN to serve your sites. To maintain flexibility and avoid tying your domain to specific IP addresses, Appwrite uses NS records for apex domains.

[Learn more about Appwrite DNS server](https://appwrite.io/docs/products/network/dns)

### [Add a subdomain with CNAME](https://appwrite.io/docs/products/sites/domains\#add-a-subdomain-with-cname)

Subdomains (like www.example.com or app.example.com) are set up using CNAME records, which point to Appwrite's hostname.

To add a subdomain:

1. Navigate to your site in the Appwrite Console.

2. Head to the **Domains** tab and click on **Add domain**.

3. Input your subdomain (e.g., www.example.com).

4. Select the appropriate domain rule type (Active deployment, Git branch, or Redirect) and configure its settings. See the [Domain rule types](https://appwrite.io/docs/products/sites/domains#domain-rule-types) section for details.

5. Copy the specified **CNAME** record and add it to your domain registrar.

6. Return to the Site settings and wait for verification status.


![Add domain](https://appwrite.io/images/docs/sites/dark/add-domain.png)

![Add domain](https://appwrite.io/images/docs/sites/add-domain.png)

DNS records can take up to 48 hours to propagate. Once verified, the domain is ready to use.

### [Domain rule types](https://appwrite.io/docs/products/sites/domains\#domain-rule-types)

When adding a custom domain to your Appwrite site, you'll need to select one of the following rule types that determine how your domain will behave:

#### [Active deployment](https://appwrite.io/docs/products/sites/domains\#active-deployment)

Points your domain to the latest deployed version of your site. This is the most common option for production domains.

- When selected, your domain will always serve the most recent successful deployment

- Any new deployments will automatically be available on this domain


#### [Git branch](https://appwrite.io/docs/products/sites/domains\#git-branch)

Points your domain to a specific branch in your repository. This is useful for testing or staging environments.

- When selected, you'll need to choose a specific branch from your connected repository

- Your domain will always serve the latest successful deployment from that branch

- This allows you to have different domains for different branches (e.g., staging.example.com for your staging branch)


#### [Redirect](https://appwrite.io/docs/products/sites/domains\#redirect)

Forwards all traffic from your domain to another URL. This is useful for domain migrations or creating shortcuts.

- When selected, you'll need to specify the destination URL

- You can choose from various HTTP status codes for the redirect:


  - 301 Moved permanently

  - 302 Found

  - 303 See other

  - 307 Temporary redirect

  - 308 Permanent redirect


##### Path and query parameters in redirects

When you redirect an added domain to another URL, any additional path and queries will be ignored.

For example, if a domain example.com is set to redirect to appwrite.io, example.com/docs?id=123 will also redirect to appwrite.io.

###### Recommended

- [API reference/Account](https://appwrite.io/docs/references/cloud/client-web/account)
- [API reference/Teams](https://appwrite.io/docs/references/cloud/client-web/teams)
- [API reference/Databases](https://appwrite.io/docs/references/cloud/client-web/databases)
- [API reference/Storage](https://appwrite.io/docs/references/cloud/client-web/storage)

## Appwrite CDN
[Skip to content](https://appwrite.io/docs/products/network/cdn#main)

[![appwrite](https://appwrite.io/images/logos/appwrite.svg)![appwrite](https://appwrite.io/images/logos/appwrite-light.svg)](https://appwrite.io/)

[Go to Console](https://cloud.appwrite.io/)

Appwrite's CDN (Content Delivery Network) is a globally distributed system designed to enhance the speed, reliability, and security of your application's content delivery. With points of presence (PoPs) in over 120 cities worldwide, the CDN ensures low latency and consistent performance for users, no matter their location.

![PoPs map](https://appwrite.io/images/docs/network/dark/pops-map.png)

![PoPs map](https://appwrite.io/images/docs/network/pops-map.png)

## [Key features](https://appwrite.io/docs/products/network/cdn\#)

- Global coverage: Fast access to content for users across continents through over 120 PoPs worldwide. Available on all projects.

- Reduced latency: By caching static content at edge nodes, the CDN minimizes the distance between the user and the requested data, significantly reducing latency.

- Dynamic content: The CDN supports both static and dynamic content delivery, seamlessly integrating with backend services hosted in Appwrite regions.

- Content optimization: Appwrite's CDN uses advanced compression algorithms to reduce data transfer sizes, further improving delivery times.

- High availability: Distributed edge nodes and redundant routing ensure that content remains accessible even during regional outages or high traffic loads.


##### Self-Hosting?

Appwrite's self-hosted setup is optimized for local content delivery in single-region environments. Cloud users benefit from the global CDN with 120+ points of presence worldwide. If your self-hosted deployment requires distributed CDN capabilities, please [contact us](https://appwrite.io/contact-us/enterprise) to discuss custom solutions.

## [Design](https://appwrite.io/docs/products/network/cdn\#)

- Caching strategy: Configurable cache policies for control over TTL and content invalidation.

- Secure delivery: All content is transmitted over TLS for secure, encrypted connections.

- Integration: The CDN works seamlessly with the Appwrite edges and backend regions, providing a unified experience for developers.


By combining global caching, smart routing, and content optimization, the Appwrite CDN is built to handle the demands of modern, high-performance applications.

###### Recommended

- [API reference/Account](https://appwrite.io/docs/references/cloud/client-web/account)
- [API reference/Teams](https://appwrite.io/docs/references/cloud/client-web/teams)
- [API reference/Databases](https://appwrite.io/docs/references/cloud/client-web/databases)
- [API reference/Storage](https://appwrite.io/docs/references/cloud/client-web/storage)

## Appwrite Android Setup
[Skip to content](https://appwrite.io/docs/quick-starts/android#main)

[![appwrite](https://appwrite.io/images/logos/appwrite.svg)![appwrite](https://appwrite.io/images/logos/appwrite-light.svg)](https://appwrite.io/)

[Go to Console](https://cloud.appwrite.io/)

Learn how to setup your first Android project powered by Appwrite and the [Appwrite Android SDK](https://github.com/appwrite/sdk-for-android).

##### Using Java?

Check out the [Start with Android (Java)](https://appwrite.io/docs/quick-starts/android-java) guide.

Open Android Studio and click **New Project** to create a new project.

Choose your desired project template, for example **Empty Activity**, and click **Next**.

Now enter your app **name** and **package name**. You will need both of these later when you create your project in the Appwrite console. Click **Finish** to create your project.

Head to the [Appwrite Console](https://cloud.appwrite.io/console).

![Create project screen](https://appwrite.io/images/docs/quick-starts/dark/create-project.png)

![Create project screen](https://appwrite.io/images/docs/quick-starts/create-project.png)

If this is your first time using Appwrite, create an account and create your first project.

Then, under **Add a platform**, add an **Android app**.

Add your app's **name** and **package name**, your package name is the one entered when creating an Android project. For existing projects, you should use the **applicationId** in your app-level [build.gradle](https://github.com/appwrite/playground-for-android/blob/master/app/build.gradle#L11) file.

![Add a platform](https://appwrite.io/images/docs/quick-starts/dark/add-platform.png)

![Add a platform](https://appwrite.io/images/docs/quick-starts/add-platform.png)

You can skip optional steps.

To add the Appwrite SDK for Android as a dependency, add the following to your app-level **build.gradle.kts** file inside the **dependencies** block.

```web-code kotlin line-numbers
implementation("io.appwrite:sdk-for-android:8.1.0")

```

In order to allow creating OAuth sessions, the following activity needs to be added inside the <application> tag, along side the existing <activity> tags in your [AndroidManifest.xml](https://github.com/appwrite/playground-for-flutter/blob/master/android/app/src/main/AndroidManifest.xml). Be sure to replace the **\[PROJECT\_ID\]** string with your actual Appwrite project ID. You can find your Appwrite project ID in you project settings screen in your Appwrite Console.

```web-code xml line-numbers
<manifest ...>
  ...
  <application ...>
    ...
    <!-- Add this inside the `<application>` tag, along side the existing `<activity>` tags -->
    <activity android:name="io.appwrite.views.CallbackActivity" android:exported="true">
      <intent-filter android:label="android_web_auth">
        <action android:name="android.intent.action.VIEW" />
        <category android:name="android.intent.category.DEFAULT" />
        <category android:name="android.intent.category.BROWSABLE" />
        <data android:scheme="appwrite-callback-[PROJECT_ID]" />
      </intent-filter>
    </activity>
  </application>
</manifest>

```

Find your project's ID in the **Settings** page.

![Project settings screen](https://appwrite.io/images/docs/quick-starts/dark/project-id.png)

![Project settings screen](https://appwrite.io/images/docs/quick-starts/project-id.png)

Create a new file Appwrite.kt and add the following code to it, replacing \[PROJECT\_ID\] with your project ID.

```web-code kotlin line-numbers
package <YOUR_ROOT_PACKAGE_HERE>

import android.content.Context
import io.appwrite.Client
import io.appwrite.ID
import io.appwrite.models.*
import io.appwrite.services.*

object Appwrite {
    lateinit var client: Client
    lateinit var account: Account

    fun init(context: Context) {
        client = Client(context)
            .setEndpoint("https://<REGION>.cloud.appwrite.io/v1")
            .setProject("[PROJECT_ID]")

        account = Account(client)
    }

    suspend fun onLogin(
        email: String,
        password: String,
    ): Session {
        return account.createEmailPasswordSession(
            email,
            password,
        )
    }

    suspend fun onRegister(
        email: String,
        password: String,
    ): User<Map<String, Any>> {
        return account.create(
            userId = ID.unique(),
            email,
            password,
        )
    }

    suspend fun onLogout() {
        account.deleteSession("current")
    }
}

```

Add the following code to MainActivity.kt.

```web-code kotlin line-numbers
package <YOUR_ROOT_PACKAGE_HERE>

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.text.*
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.*
import androidx.compose.ui.text.input.*
import androidx.compose.ui.unit.*
import <YOUR_ROOT_PACKAGE_HERE>.ui.theme.MyApplicationTheme
import kotlinx.coroutines.launch

class MainActivity : ComponentActivity() {
    @OptIn(ExperimentalMaterial3Api::class)
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        Appwrite.init(applicationContext)

        setContent {
            MyApplicationTheme {
                Surface(
                    modifier = Modifier.fillMaxSize(),
                    color = MaterialTheme.colorScheme.background
                ) {
                    val coroutineScope = rememberCoroutineScope()

                    var user by remember { mutableStateOf("") }
                    var email by remember { mutableStateOf("") }
                    var password by remember { mutableStateOf("") }

                    if (user.isNotEmpty()) {
                        Column(
                            modifier = Modifier.fillMaxSize(),
                            horizontalAlignment = Alignment.CenterHorizontally,
                            verticalArrangement = Arrangement.Center
                        ) {
                            Text(text = "Logged in as $user")
                            Button(onClick = {
                                coroutineScope.launch {
                                    Appwrite.onLogout()
                                }
                            }) {
                                Text("Logout")
                            }
                        }
                    }

                    Column(
                        modifier = Modifier.fillMaxSize(),
                        horizontalAlignment = Alignment.CenterHorizontally,
                        verticalArrangement = Arrangement.Center
                    ) {
                        TextField(
                            value = email,
                            onValueChange = { email = it },
                            label = { Text("Username") },
                            modifier = Modifier
                                .fillMaxWidth()
                                .padding(16.dp)
                        )
                        TextField(
                            value = password,
                            onValueChange = { password = it },
                            label = { Text("Password") },
                            modifier = Modifier
                                .fillMaxWidth()
                                .padding(16.dp),
                            visualTransformation = PasswordVisualTransformation(),
                            keyboardOptions = KeyboardOptions(keyboardType = KeyboardType.Password)
                        )
                        Row(
                            modifier = Modifier
                                .fillMaxWidth()
                                .padding(16.dp),
                            horizontalArrangement = Arrangement.SpaceBetween
                        ) {
                            Button(onClick = {
                                coroutineScope.launch {
                                    try {
                                        Appwrite.onLogin(email, password)

                                        user = email
                                    } catch (e: Exception) {
                                        e.printStackTrace()
                                    }
                                }
                            }) {
                                Text("Login")
                            }
                            Button(onClick = {
                                coroutineScope.launch {
                                    try {
                                        Appwrite.onRegister(email, password)
                                    } catch (e: Exception) {
                                        e.printStackTrace()
                                    }
                                }
                            }) {
                                Text("Register")
                            }
                        }
                    }
                }
            }
        }
    }
}

```

Run your project by clicking **Run app** in Android Studio.

###### Recommended

- [API reference/Account](https://appwrite.io/docs/references/cloud/client-web/account)
- [API reference/Teams](https://appwrite.io/docs/references/cloud/client-web/teams)
- [API reference/Databases](https://appwrite.io/docs/references/cloud/client-web/databases)
- [API reference/Storage](https://appwrite.io/docs/references/cloud/client-web/storage)

## Appwrite Console Roles
[Skip to content](https://appwrite.io/docs/advanced/platform/roles#main)

[![appwrite](https://appwrite.io/images/logos/appwrite.svg)![appwrite](https://appwrite.io/images/logos/appwrite-light.svg)](https://appwrite.io/)

[Go to Console](https://cloud.appwrite.io/)

The Appwrite Console supports granular permissions to improve team collaboration and security. Each member of your Console team can be assigned a specific role that grants them access to certain areas of your organization's projects. Below is a breakdown of the new roles available, detailing their permissions and intended use cases.

##### Note

This page covers organization member roles for the Appwrite Console. Visit the Auth [roles documentation](https://appwrite.io/docs/products/auth/teams#permissions) if you want to learn more about roles for the [Teams service](https://appwrite.io/docs/references/cloud/client-web/teams).

### [Owner](https://appwrite.io/docs/advanced/platform/roles\#owner)

The highest level of access, the Owner role has full control over all aspects of the Console, including team management, billing, and all development resources. Only owners can create new projects.

### [Developer](https://appwrite.io/docs/advanced/platform/roles\#developer)

Developers have access to all resources and scopes available to the Owner, with the exception of team management and billing writes. This role is ideal for team members focusing solely on development tasks.

### [Editor](https://appwrite.io/docs/advanced/platform/roles\#editor)

Editors can modify most resources but do not have write permissions for critical backend elements like collections, buckets, topics, and others. This role is intended for users who need to modify content or make changes but should not alter key infrastructure elements. This is great if you need to give access for updating your documents, creating messages, or uploading files.

### [Analyst](https://appwrite.io/docs/advanced/platform/roles\#analyst)

Analysts are limited to read-only access across all resources. This role is suitable for team members who need to view data, analytics, or reports but do not require editing permissions.

### [Billing](https://appwrite.io/docs/advanced/platform/roles\#billing)

Billing users are restricted to billing-related actions, with access to billing.read and billing.write scopes only. They can view and manage billing details but cannot interact with other parts of the system.

### [Custom roles](https://appwrite.io/docs/advanced/platform/roles\#custom-roles)

Custom roles will soon be available on the Appwrite Console. Custom roles will be a Scale and Enterprise plans feature.

###### Recommended

- [API reference/Account](https://appwrite.io/docs/references/cloud/client-web/account)
- [API reference/Teams](https://appwrite.io/docs/references/cloud/client-web/teams)
- [API reference/Databases](https://appwrite.io/docs/references/cloud/client-web/databases)
- [API reference/Storage](https://appwrite.io/docs/references/cloud/client-web/storage)

## Nhost to Appwrite Migration
[Skip to content](https://appwrite.io/docs/advanced/migrations/nhost#main)

[![appwrite](https://appwrite.io/images/logos/appwrite.svg)![appwrite](https://appwrite.io/images/logos/appwrite-light.svg)](https://appwrite.io/)

[Go to Console](https://cloud.appwrite.io/)

Appwrite migrations help you quickly migrate your data from Nhost or other [sources](https://appwrite.io/docs/advanced/migrations#sources) to Appwrite. You can follow the instructions on the Appwrite Console migration wizard or use this guide to perform your data migration. While migrations are a great way to move your data from other services to Appwrite and get started quickly, they're not perfect. Make sure to understand the different [limitations](https://appwrite.io/docs/advanced/migrations/nhost#limitations) before completing your migration.

##### Charges

When you migrate data from Nhost to Appwrite Cloud, the resource usage during the migration will not count towards your Appwrite Cloud usage charges. However, Nhost, may have data transfer charges.

Find all of the following credentials from your Nhost project.

| Field | Description |
| --- | --- |
| **Region** | The region your Nhost project is hosted in. This can be found in your Nhost project environment variables as NHOST\_REGION. |
| **Subdomain** | The subdomain of your Nhost project. This can be found in your Nhost project environment variables as NHOST\_SUBDOMAIN. |
| **Database** | The name of your Nhost database. This can be found in your Nhost project Database settings. |
| **Username** | The username of your Nhost database. This can be found in your Nhost project Database settings. |
| **Password** | The password of your Nhost database. You set this when you created your Nhost project, if you don't remember it you can reset it from your Nhost project Database settings. |
| **Admin Secret** | The admin secret of your Nhost project. This can be found in your Nhost project environment variables as NHOST\_ADMIN\_SECRET. We use this to transfer your Nhost files to Appwrite. |

Before migrating to Appwrite make sure you've read the [migration overview](https://appwrite.io/docs/advanced/migrations) page.

1. Create a new project and click on the **Migrations** tab in **Project Settings**.

2. Click on the **Create Migration** button and select **Nhost** as your source.

3. Enter the credentials from the [Obtain credentials](https://appwrite.io/docs/advanced/migrations/nhost#obtain-credentials) step and click **Next**.

4. Select the resources you want to migrate and finally click **Start migration** to begin the migration process.


1. In your Appwrite Console, navigate to **Overview** \> **Integrations** \> **Platforms**, add the platforms for your Web, Flutter, Android, and iOS apps. Appwrite will reject requests from unknown web, Flutter, and mobile apps to protect from malicious attacks. You app **must be added as a platform** for Appwrite to accept requests.

2. Remember to [add appropriate permissions](https://appwrite.io/docs/advanced/platform/permissions) to the migrated resources to protect user data and privacy.

3. Migrate functions manually, by [pick a runtime](https://appwrite.io/docs/products/functions/runtimes) and [learn to develop Appwrite Functions](https://appwrite.io/docs/products/functions/develop).

4. Explore Appwrite's unique features by exploring the rest of the [Appwrite Documentation](https://appwrite.io/docs).


## [Limitations](https://appwrite.io/docs/advanced/migrations/nhost\#)

Not all vendors make their APIs publicly accessible or easy to use for extracting and fully owning your data. Furthermore, due to varying design philosophies, certain resources cannot be migrated on a one-to-one basis. Below, you'll find a list of some known limitations when migrating data from Nhost to Appwrite. It's advisable to review this list before initiating your migration or deploying your product in a production environment.

- Appwrite's Database doesn't support all the features of the PostgreSQL database so postgres centric things like advanced indexes, PostgreSQL functions and scheduling will not be migrated.

- OAuth users will not be migrated because the sessions are managed by the third-party OAuth provider. Users will need to re-authenticate with your OAuth provider after the migration is complete.

- Functions are not automatically migrated because of syntax and runtime differences.


###### Recommended

- [API reference/Account](https://appwrite.io/docs/references/cloud/client-web/account)
- [API reference/Teams](https://appwrite.io/docs/references/cloud/client-web/teams)
- [API reference/Databases](https://appwrite.io/docs/references/cloud/client-web/databases)
- [API reference/Storage](https://appwrite.io/docs/references/cloud/client-web/storage)

## HIPAA Compliance Overview
[Skip to content](https://appwrite.io/docs/advanced/security/hipaa#main)

[![appwrite](https://appwrite.io/images/logos/appwrite.svg)![appwrite](https://appwrite.io/images/logos/appwrite-light.svg)](https://appwrite.io/)

[Go to Console](https://cloud.appwrite.io/)

Appwrite is compliant with HIPAA (Health Insurance Portability and Accountability Act) regulations. HIPAA is an important regulation that protects patients' health data from being disclosed without consent or knowledge.

If you're building apps that handle information that is considered [PHI (Personal Health Information)](https://privacyruleandresearch.nih.gov/pr_07.asp) for an U.S. user base, data must be stored in a HIPAA-compliant environment.

To attain HIPAA compliance, we've taken extensive measures, ensuring that our practices align with the highest data protection standards. We have implemented robust measures to safeguard personal information, updating our policies, procedures, and infrastructure to meet the strict requirements of HIPAA regulations.

- A strict data backup schedule.

- An extended business continuity plan.

- Data retention rights for individuals as outlined in our [Privacy Policy](https://appwrite.io/privacy).

- Intrusion detection and penetration testing.

- Encryption of data transmitted between Appwrite and users using transport layer security (TLS) and HTTP strict Transport Security, ensuring confidentiality both at rest and during transmission.

- Access to environments containing customer data is strictly controlled, requiring authentication and authorization through multi-factor authentication (MFA).


Appwrite safeguards personal information to the same extent it protects its own, complying with relevant privacy laws and regulations in the jurisdictions where its services are offered.

Please note that while Appwrite Cloud serves as a HIPAA-compliant platform to handle data, it is the responsibility of developers to ensure that their application is also compliant with HIPAA regulations.

###### Recommended

- [API reference/Account](https://appwrite.io/docs/references/cloud/client-web/account)
- [API reference/Teams](https://appwrite.io/docs/references/cloud/client-web/teams)
- [API reference/Databases](https://appwrite.io/docs/references/cloud/client-web/databases)
- [API reference/Storage](https://appwrite.io/docs/references/cloud/client-web/storage)

## Textmagic SMS Integration
[Skip to content](https://appwrite.io/docs/products/messaging/textmagic#main)

[![appwrite](https://appwrite.io/images/logos/appwrite.svg)![appwrite](https://appwrite.io/images/logos/appwrite-light.svg)](https://appwrite.io/)

[Go to Console](https://cloud.appwrite.io/)

Textmagic lets you send customized SMS messages to your users. These SMS messages can be sent immediately or scheduled. You can send SMS messages for purposes like reminders, promotions, announcements, and even custom authentication flows.

To add Textmagic as a provider, navigate to **Messaging** \> **Providers** \> **Add provider** \> **SMS**.

![Add a Textmagic provider](https://appwrite.io/images/docs/messaging/providers/textmagic/dark/provider.png)

![Add a Textmagic provider](https://appwrite.io/images/docs/messaging/providers/textmagic/provider.png)

Give your provider a name > choose **Textmagic** \> click **Save and continue**. The provider will be saved to your project, but not enabled until you complete its configuration.

In the **Configure** step, you will need to provide details from your Textmagic dashboard to connect your Appwrite project.

You will need to provide the following information from your **Textmagic dashboard**.

| Field name |  |
| --- | --- |
| API key | Head to Textmagic dashboard > **Services** \> **API** \> **Add new API key**. |
| Username | Head to Textmagic dashboard > **My account** \> **Username**. |
| Sender number | Head to Textmagic dashboard > **Services** \> **Sender settings**. |

After adding the following details, click **Save and continue** to enable the provider.

Before sending your first message, make sure you've configured [a topic](https://appwrite.io/docs/products/messaging/topics) and [a target](https://appwrite.io/docs/products/messaging/targets) to send messages to.

To send a test message, navigate to **Messaging** \> **Messages** \> **Create message** \> **SMS**.

![Create an SMS message](https://appwrite.io/images/docs/messaging/messages/dark/create-sms-message.png)

![Create an SMS message](https://appwrite.io/images/docs/messaging/messages/create-sms-message.png)

Add your message and in the targets step, select one of your test targets. Set the schedule to **Now** and click **Send**.

Verify that you can receive the message in your inbox. If not, check for logs in the Appwrite Console or in your provider's logs.

To send a message programmatically, use an [Appwrite Server SDK](https://appwrite.io/docs/sdks#server).

You can follow the [Send SMS messages](https://appwrite.io/docs/products/messaging/send-sms-messages) journey to send your first push notification and test your provider.

You can update or delete a provider in the Appwrite Console.

Navigate to **Messaging** \> **Providers** \> click your provider. In the settings, you can update a provider's configuration or delete the provider.

To update or delete providers programmatically, use an [Appwrite Server SDK](https://appwrite.io/docs/sdks#server).

###### Recommended

- [API reference/Account](https://appwrite.io/docs/references/cloud/client-web/account)
- [API reference/Teams](https://appwrite.io/docs/references/cloud/client-web/teams)
- [API reference/Databases](https://appwrite.io/docs/references/cloud/client-web/databases)
- [API reference/Storage](https://appwrite.io/docs/references/cloud/client-web/storage)

## Appwrite Quick Start
[Skip to content](https://appwrite.io/docs/references/quick-start#main)

[![appwrite](https://appwrite.io/images/logos/appwrite.svg)![appwrite](https://appwrite.io/images/logos/appwrite-light.svg)](https://appwrite.io/)

[Go to Console](https://cloud.appwrite.io/)

Follow these steps before you begin using the Appwrite SDKs or accessing Appwrite through the REST and GraphQL API.

Appwrite has two types of APIs for different use cases, select one or both depending on your use case.

If you're creating a **web, mobile, or native application** used by end-users that will register and create accounts, install a [Client SDK](https://appwrite.io/docs/sdks#client) and follow steps for Client APIs.

If you're create a server application, like a **backend, admin app, or a CLI tool**, install a [Server SDK](https://appwrite.io/docs/sdks#server) and follow steps for Server APIs.

If you're creating a **Server-side Rendered (SSR)** web app, install a [Server SDK](https://appwrite.io/docs/sdks#server) and follow steps for SSR.

Head to the [Appwrite Console](https://cloud.appwrite.io/console).

If this is your first time using Appwrite, create an account and create your first project.

![Create project screen](https://appwrite.io/images/docs/quick-starts/dark/create-project.png)

![Create project screen](https://appwrite.io/images/docs/quick-starts/create-project.png)

Then, configure your project depending on use case. You can follow all three flows to enable all three use cases.

ClientServerSSR

ClientServer
More

Under **Add a platform**, add a platform for **each** web, mobile, and native app you plan to create. This means, a different platform for each web app hosted under a different domain, and a different platform for each mobile or native app that use a different package ID.

![Add a platform](https://appwrite.io/images/docs/quick-starts/dark/add-platform.png)

![Add a platform](https://appwrite.io/images/docs/quick-starts/add-platform.png)

You can skip optional steps.

Under **Integrate with your server**, add an **API Key**.

![Create project screen](https://appwrite.io/images/docs/quick-starts/dark/integrate-server.png)

![Create project screen](https://appwrite.io/images/docs/quick-starts/integrate-server.png)

Enable the scopes for the Appwrite products you plan to use for your app. It's a good idea to only grant scopes that you need, and edit the API keys as your needs change for security.

Under **Integrate with your server**, add an **API Key** with the following scopes.

![Create project screen](https://appwrite.io/images/docs/quick-starts/dark/integrate-server.png)

![Create project screen](https://appwrite.io/images/docs/quick-starts/integrate-server.png)

| Category | Required scopes | Purpose |
| --- | --- | --- |
| Sessions | sessions.write | Allows API key to create, update, and delete sessions. |

When using the Appwrite APIs, you need to pass information like endpoint, project ID, credentials and other metadata for Appwrite to properly parse your request.

ClientServerSSR

ClientServer
More

Client apps need to be configured with endpoint and project ID, so the Appwrite SDK knows which endpoint and project to connect to.

```web-code client-web line-numbers
import { Client } from "appwrite";

const client = new Client();

client
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1')    // Your API Endpoint
    .setProject('<PROJECT_ID>')                // Your project ID
;

```

Server apps need to be configured with endpoint, project ID, and an API key so the Appwrite SDK knows which endpoint and project to connect to, as well as have credentials to perform admin actions.

```web-code server-nodejs line-numbers
const sdk = require('node-appwrite');

// Init SDK
const client = new sdk.Client();

client
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1')                // Your API Endpoint
    .setProject('<PROJECT_ID>')                            // Your project ID
    .setJWT('<YOUR_API_KEY>')                                   // Your secret JSON Web Token
;

```

Appwrite uses Server SDKs for SSR apps. The initialization is different

### [Admin client](https://appwrite.io/docs/references/quick-start\#admin-client)

##### Admin clients

Admin clients should only be used if you need to perform admin actions that bypass permissions or [unauthenticated requests that bypass rate limits](https://appwrite.io/docs/products/auth/server-side-rendering#rate-limits).

To initialize the admin client, we'll need to first [generated an API key](https://appwrite.io/docs/advanced/platform/api-keys#create-api-key). The API key should have the following scope in order to perform authentication:

| Category | Required scopes | Purpose |
| --- | --- | --- |
| Sessions | sessions.write | Allows API key to create, update, and delete sessions. |

```web-code server-nodejs line-numbers
import { Client } from "node-appwrite"; // Using the server SDK

const adminClient = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<PROJECT_ID>')             // Your project ID
    .setKey('<YOUR_API_KEY>');                   // Your secret API key

```

It is important to use an API key, as this will allow your server requests to bypass [rate limits](https://appwrite.io/docs/advanced/platform/rate-limits). If you don't use an API key, your server will be rate limited as if it were a client from a single IP address.

### [Session client](https://appwrite.io/docs/references/quick-start\#session-client)

The session client will be used to make requests to Appwrite on behalf of the end-user. It will be initialized with the session, usually stored within a cookie.

You should create a new client for each request and **never** share the client between requests.

```web-code server-nodejs line-numbers
const sessionClient = new Client()
    .setEndpoint('https://<REGION>.cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('<PROJECT_ID>');            // Your project ID

const session = req.cookies.session; // Get the session cookie from the request
if (session) {
    sessionClient.setSession(session);
}

```

You will use the initialized client in all requests you make to Appwrite.

If you're using Appwrite without an SDK, follow the guides for the [REST API](https://appwrite.io/docs/apis/rest) or [GraphQL API](https://appwrite.io/docs/apis/graphql).

If you prefer to explore examples, follow one of the following quick starts.

### [Client apps](https://appwrite.io/docs/references/quick-start\#client-app)

Examples when building with Client APIs

- [Just plain JavaScript and TypeScript.](https://appwrite.io/docs/quick-starts/web)
- [Get started with Appwrite and Next.js](https://appwrite.io/docs/quick-starts/nextjs)
- [Get started with Appwrite and React](https://appwrite.io/docs/quick-starts/react)
- [Get started with Appwrite and Vue.js](https://appwrite.io/docs/quick-starts/vue)
- [Get started with Appwrite and Nuxt](https://appwrite.io/docs/quick-starts/nuxt)
- [Get started with Appwrite and SvelteKit](https://appwrite.io/docs/quick-starts/sveltekit)
- [Get started with Appwrite and Angular](https://appwrite.io/docs/quick-starts/angular)
- [Get started with Appwrite and Flutter](https://appwrite.io/docs/quick-starts/flutter)
- [Get started with Appwrite and Apple](https://appwrite.io/docs/quick-starts/apple)
- [Get started with Appwrite and Android](https://appwrite.io/docs/quick-starts/android)

### [Server apps](https://appwrite.io/docs/references/quick-start\#server-app)

Examples when building with Server APIs

- [Get started with Appwrite and Node.js](https://appwrite.io/docs/quick-starts/node)
- [Get started with Appwrite and Python](https://appwrite.io/docs/quick-starts/python)
- [Get started with Appwrite and Dart](https://appwrite.io/docs/quick-starts/dart)
- [Get started with Appwrite and PHP](https://appwrite.io/docs/quick-starts/php)
- [Get started with Appwrite and Ruby](https://appwrite.io/docs/quick-starts/ruby)
- [Get started with Appwrite and .NET](https://appwrite.io/docs/quick-starts/dotnet)
- [Get started with Appwrite and Deno](https://appwrite.io/docs/quick-starts/deno)
- [Get started with Appwrite and Go](https://appwrite.io/docs/quick-starts/go)
- [Get started with Appwrite and Swift](https://appwrite.io/docs/quick-starts/swift)
- [Get started with Appwrite and Kotlin](https://appwrite.io/docs/quick-starts/kotlin)

###### Recommended

- [API reference/Account](https://appwrite.io/docs/references/cloud/client-web/account)
- [API reference/Teams](https://appwrite.io/docs/references/cloud/client-web/teams)
- [API reference/Databases](https://appwrite.io/docs/references/cloud/client-web/databases)
- [API reference/Storage](https://appwrite.io/docs/references/cloud/client-web/storage)`;

export const GET: RequestHandler = () => {
    return new Response(llmsContent, {
        headers: {
            'Content-Type': 'text/plain'
        }
    });
}; 
